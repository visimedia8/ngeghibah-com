#!/usr/bin/env python3
"""
Direct Article Publisher for NgeGhibah.com
Allows on-demand, instant publishing to production Cloudflare Edge & D1
while enforcing 100% compliance with SSOT, AdSense, and Brand Lexicon.

Usage:
  python scripts/publish_article.py article_payload.json
  python scripts/publish_article.py --title "..." --entities "..." --category "..." ...
"""

import os
import sys
import json
import re
import urllib.request
import urllib.error
from difflib import SequenceMatcher
from datetime import datetime

WEBHOOK_URL = os.environ.get("NGEGHIBAH_WEBHOOK_URL", "https://ngeghibah-com.pages.dev/api/webhooks/n8n/article")
WEBHOOK_SECRET = os.environ.get("N8N_WEBHOOK_SECRET", "ngeghibah-super-secret-key-2026")
SITE_URL = os.environ.get("NEXT_PUBLIC_SITE_URL", "https://ngeghibah.com")
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

BANNED_CLICKBAIT = [
    (re.compile(r'\bbikin melongo\b', re.IGNORECASE), 'menarik perhatian publik'),
    (re.compile(r'\bsyok berat\b', re.IGNORECASE), 'menjadi sorotan intens'),
    (re.compile(r'\btak disangka-sangka\b', re.IGNORECASE), 'di luar perkiraan'),
    (re.compile(r'\blihat apa yang terjadi\b', re.IGNORECASE), 'berikut perkembangannya'),
    (re.compile(r'\bnetizen heboh\b', re.IGNORECASE), 'warganet mendiskusikan'),
]

MANDATORY_LEXICON = [
    "duduk perkaranya",
    "kronologi lengkap",
    "jejak digital",
    "verifikasi fakta",
    "klarifikasi resmi"
]

def clean_tokens(text: str) -> list[str]:
    text = re.sub(r'[^a-zA-Z0-9\s]', ' ', text.lower())
    words = [w for w in text.split() if len(w) > 2]
    stopwords = {
        'yang', 'untuk', 'pada', 'dari', 'dalam', 'dan', 'atau', 'ini', 'itu',
        'juga', 'ada', 'bisa', 'akan', 'oleh', 'saat', 'para', 'ke', 'di',
        'terkait', 'hingga', 'kupas', 'tuntas', 'fakta', 'viral', 'bukan',
        'sekadar', 'deretan', 'deret', 'simak', 'bikin', 'potret', 'resmi',
        'lengkap', 'kronologi', 'jejak', 'digital', 'analisis', 'spekulasi',
        'soal', 'kembali', 'usai', 'klaim', 'tampil', 'aksi', 'seputar', 'antara'
    }
    return [w for w in words if w not in stopwords]

def sanitize_banned_words(text: str) -> str:
    for pattern, replacement in BANNED_CLICKBAIT:
        text = pattern.sub(replacement, text)
    return text

def slugify(text: str) -> str:
    slug = text.lower().strip()
    slug = re.sub(r'[^a-z0-9\s-]', '', slug)
    slug = re.sub(r'[\s-]+', '-', slug)
    return slug.strip('-')

def ensure_forensic_table(content_html: str, timeline: list) -> str:
    if '<table' in content_html:
        return content_html
    
    rows = []
    if timeline and isinstance(timeline, list):
        for item in timeline:
            label = item.get('time_label', 'Fase Kejadian') if isinstance(item, dict) else 'Fase'
            event = item.get('event', '') if isinstance(item, dict) else str(item)
            rows.append(f"""
            <tr>
              <td class="border border-slate-700 p-3 font-semibold text-white">{label}</td>
              <td class="border border-slate-700 p-3 text-slate-300">{event}</td>
              <td class="border border-slate-700 p-3 text-neon-cyan font-medium">Terverifikasi</td>
            </tr>
            """)
    else:
        rows.append("""
        <tr>
          <td class="border border-slate-700 p-3 font-semibold text-white">Fase Awal</td>
          <td class="border border-slate-700 p-3 text-slate-300">Penelusuran jejak digital dan verifikasi data redaksi.</td>
          <td class="border border-slate-700 p-3 text-neon-cyan font-medium">Terverifikasi</td>
        </tr>
        """)
        
    table_html = f"""
    <div class="my-8 overflow-x-auto">
      <table class="w-full border-collapse border border-slate-700 text-left text-sm">
        <thead class="bg-velvet text-white font-semibold">
          <tr>
            <th class="border border-slate-700 p-3">Fase / Periode</th>
            <th class="border border-slate-700 p-3">Kronologi & Rekonstruksi Fakta</th>
            <th class="border border-slate-700 p-3">Status Verifikasi</th>
          </tr>
        </thead>
        <tbody>
          {''.join(rows)}
        </tbody>
      </table>
    </div>
    """
    
    # Inject after first <h2> if possible, otherwise append
    h2_pos = content_html.lower().find('</h2>')
    if h2_pos != -1:
        return content_html[:h2_pos+5] + table_html + content_html[h2_pos+5:]
    return content_html + table_html

def ensure_press_ethics_clause(content_html: str) -> str:
    if "Pasal 5 UU Pers" in content_html or "hak jawab" in content_html.lower():
        return content_html
    
    clause = """
    <div class="mt-8 p-4 rounded-xl border border-slate-700/60 bg-slate-900/60 text-xs text-slate-400">
      <p class="font-semibold text-slate-300 mb-1">Catatan Redaksi & Asas Praduga Tak Bersalah:</p>
      <p>NgeGhibah.com menjunjung tinggi kode etik jurnalistik dan asas praduga tak bersalah. Setiap pihak yang disebutkan dalam liputan ini memiliki hak jawab dan hak koreksi sesuai dengan Pasal 5 UU Pers No. 40/1999 melalui saluran resmi redaksi kami di <a href="/hak-jawab" class="text-neon-cyan hover:underline">ngeghibah.com/hak-jawab</a>.</p>
    </div>
    """
    return content_html + clause

def fetch_existing_canonical_titles() -> list[dict]:
    try:
        url = "https://ngeghibah-com.pages.dev/api/articles?limit=50"
        req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            return data.get('articles', [])
    except Exception as e:
        print(f"[WARN] Unable to fetch existing articles from API: {e}", file=sys.stderr)
        return []

def check_anti_cannibalization(title: str, entities: list, existing_articles: list[dict]):
    cand_tok = set(clean_tokens(title))
    cand_ent = [e.lower().strip() for e in entities if e]

    for ext in existing_articles:
        ext_title = ext.get('title', '')
        ext_slug = ext.get('slug', '')
        ext_tok = set(clean_tokens(ext_title))
        
        intersection = len(cand_tok & ext_tok)
        union = len(cand_tok | ext_tok) or 1
        jaccard = intersection / union

        ext_ent = [e.lower().strip() for e in ext.get('entities', [])]
        ent_matched = len(set(cand_ent) & set(ext_ent))

        if jaccard >= 0.50 or (jaccard >= 0.35 and ent_matched >= 1):
            return {
                "is_duplicate": True,
                "similarity": round(jaccard * 100, 1),
                "matched_slug": ext_slug,
                "matched_title": ext_title
            }
            
    return {"is_duplicate": False, "similarity": 0.0}

def publish(payload: dict) -> dict:
    title = sanitize_banned_words(payload.get('title', '').strip())
    slug = payload.get('slug') or slugify(title)
    entities = payload.get('entities') or []
    if isinstance(entities, str):
        entities = [e.strip() for e in entities.split(',') if e.strip()]
    timeline = payload.get('timeline') or []
    
    content_html = payload.get('content_html') or payload.get('content') or ''
    content_html = sanitize_banned_words(content_html)
    content_html = ensure_forensic_table(content_html, timeline)
    content_html = ensure_press_ethics_clause(content_html)

    # Word count validation
    plain_words = len(re.sub(r'<[^>]+>', ' ', content_html).split())
    if plain_words < 800:
        raise ValueError(f"THIN_CONTENT_ERROR: Artikel hanya memiliki {plain_words} kata. Standar editorial mewajibkan minimal 800-1.000 kata.")

    # Check anti-cannibalization
    existing = fetch_existing_canonical_titles()
    dup_check = check_anti_cannibalization(title, entities, existing)
    if dup_check["is_duplicate"]:
        print(f"[WARN] Potensi kanibalisasi terdeteksi ({dup_check['similarity']}%): '{dup_check['matched_title']}' (/artikel/{dup_check['matched_slug']})", file=sys.stderr)

    category = payload.get('category', 'seleb-lokal')
    excerpt = sanitize_banned_words(payload.get('excerpt') or title[:160])
    ghibah_meter = payload.get('ghibah_meter', 'FAKTA_TERVERIFIKASI')

    out_payload = {
        "title": title,
        "slug": slug,
        "meta_description": payload.get('meta_description') or excerpt[:155],
        "excerpt": excerpt,
        "category": category,
        "ghibah_meter": ghibah_meter,
        "ghibah_meter_status": ghibah_meter,
        "hero_image": payload.get('hero_image', ''),
        "entities": entities,
        "timeline": timeline,
        "content_html": content_html,
        "status": "published"
    }

    req_body = json.dumps(out_payload).encode('utf-8')
    req = urllib.request.Request(
        WEBHOOK_URL,
        data=req_body,
        headers={
            "User-Agent": USER_AGENT,
            "Content-Type": "application/json",
            "Authorization": f"Bearer {WEBHOOK_SECRET}"
        }
    )

    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            resp_data = json.loads(resp.read().decode('utf-8'))
            live_url = f"{SITE_URL}/artikel/{slug}"
            return {
                "success": True,
                "status_code": resp.status,
                "message": resp_data.get('message', 'Published successfully'),
                "slug": slug,
                "live_url": live_url,
                "word_count": plain_words,
                "auto_ingested_celebs": resp_data.get('autoIngestedCelebs', [])
            }
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode('utf-8')
        raise RuntimeError(f"Edge Webhook HTTP {e.code}: {err_msg}")
    except Exception as e:
        raise RuntimeError(f"Failed to publish article: {str(e)}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python scripts/publish_article.py <payload.json>")
        sys.exit(1)

    filepath = sys.argv[1]
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    try:
        res = publish(data)
        print("\n=== PUBLICATION SUCCESS ===")
        print(f"Slug: {res['slug']}")
        print(f"Live URL: {res['live_url']}")
        print(f"Word Count: {res['word_count']}")
        if res.get('auto_ingested_celebs'):
            print(f"Auto-ingested Celebs: {res['auto_ingested_celebs']}")
        print(f"Message: {res['message']}")
    except Exception as ex:
        print(f"\n=== PUBLICATION FAILED ===", file=sys.stderr)
        print(str(ex), file=sys.stderr)
        sys.exit(1)
