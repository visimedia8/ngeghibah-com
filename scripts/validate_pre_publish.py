#!/usr/bin/env python3
"""
Pre-Publish Content Guardrail Validator for NgeGhibah.com
Enforces Google AdSense & Google News Compliance:
1. Anti-Duplicate & Anti-Spin Detection (Threshold: max 40% similarity)
2. Entity Overlap & 14-day Rolling Window
3. Forensic Table & Fact Requirement Verification
"""

import sys
import json
import re
from difflib import SequenceMatcher
from datetime import datetime, timedelta

def clean_tokens(text: str) -> list[str]:
    text = re.sub(r'[^a-zA-Z0-9\s]', ' ', text.lower())
    words = [w for w in text.split() if len(w) > 2]
    stopwords = {
        'yang', 'untuk', 'pada', 'dari', 'dalam', 'dan', 'atau', 'ini', 'itu',
        'juga', 'ada', 'bisa', 'akan', 'oleh', 'saat', 'para', 'ke', 'di',
        'terkait', 'hingga', 'kupas', 'tuntas', 'fakta', 'viral', 'bukan',
        'sekadar', 'deretan', 'deret', 'simak', 'bikin', 'potret', 'resmi',
        'lengkap', 'kronologi', 'jejak', 'digital', 'analisis', 'spekulasi'
    }
    return [w for w in words if w not in stopwords]

def calculate_entity_overlap(e1: list[str], e2: list[str]) -> float:
    if not e1 or not e2:
        return 0.0
    e1_norm = [e.lower().strip() for e in e1]
    e2_norm = [e.lower().strip() for e in e2]
    matched = 0
    for a in e1_norm:
        for b in e2_norm:
            if a in b or b in a or len(set(a.split()) & set(b.split())) > 0:
                matched += 1
                break
    return min(1.0, matched / max(1, min(len(e1_norm), len(e2_norm))))

def check_similarity(candidate: dict, existing: dict) -> dict:
    # 1. Title Sequence Ratio + Token Jaccard
    seq_title = SequenceMatcher(None, candidate['title'].lower(), existing['title'].lower()).ratio()
    cand_tok = set(clean_tokens(candidate['title']))
    ext_tok = set(clean_tokens(existing['title']))
    jaccard_title = len(cand_tok & ext_tok) / max(1, len(cand_tok | ext_tok))
    title_score = (0.4 * seq_title) + (0.6 * jaccard_title)

    # 2. Entity Overlap Score
    cand_entities = candidate.get('entities', [])
    ext_entities = existing.get('entities', [])
    entity_score = calculate_entity_overlap(cand_entities, ext_entities)

    # 3. Excerpt/Content Lead Similarity
    cand_lead = candidate.get('excerpt', '') or candidate.get('content_html', '')[:300]
    ext_lead = existing.get('excerpt', '') or existing.get('content_html', '')[:300]
    seq_lead = SequenceMatcher(None, cand_lead.lower(), ext_lead.lower()).ratio() if cand_lead and ext_lead else 0.0

    # Composite Score Calculation
    # Weights: Title (35%), Entity Overlap (45%), Lead/Excerpt (20%)
    if cand_entities and ext_entities:
        composite = (0.35 * title_score) + (0.45 * entity_score) + (0.20 * seq_lead)
    else:
        composite = (0.70 * title_score) + (0.30 * seq_lead)

    pct_score = round(composite * 100, 2)
    return {
        "existing_slug": existing.get('slug'),
        "existing_title": existing.get('title'),
        "similarity_score": pct_score,
        "is_duplicate": pct_score > 40.0
    }

def validate_article(candidate: dict, existing_db_articles: list[dict]) -> dict:
    errors = []
    warnings = []

    # Check 1: Mandatory Forensic Table requirement
    content = candidate.get('content_html', '')
    if '<table' not in content:
        errors.append("STRUKTUR DITOLAK: Artikel wajib menyertakan minimal 1 tabel rangkuman kronologi/fakta.")

    # Check 2: Mandatory Ghibah Meter & Digital Receipts
    if not candidate.get('ghibah_meter_status') and not candidate.get('ghibahMeter'):
        warnings.append("GHAM-01: Ghibah Meter status tidak terisi secara eksplisit.")

    # Check 3: Similarity Scan against Database
    max_sim = 0.0
    matched_article = None

    for ext in existing_db_articles:
        sim_res = check_similarity(candidate, ext)
        if sim_res['similarity_score'] > max_sim:
            max_sim = sim_res['similarity_score']
            matched_article = sim_res

    if max_sim > 40.0 and matched_article:
        errors.append(
            f"DUPLICATE DETECTED ({max_sim}%): Konten memiliki kemiripan semantik > 40% dengan artikel "
            f"'/artikel/{matched_article['existing_slug']}' ('{matched_article['existing_title']}'). "
            f"DILARANG membuat postingan baru. Update master article tersebut sebagai H2/H3 baru."
        )

    # Check 4: Anti-Fluff Lexicon
    forbidden_words = ["bikin melongo", "syok berat", "tak disangka-sangka", "lihat apa yang terjadi"]
    for w in forbidden_words:
        if w in candidate.get('title', '').lower() or w in content.lower():
            errors.append(f"BRAND LEXICON VIOLATION: Ditemukan kata terlarang '{w}'.")

    passed = len(errors) == 0
    return {
        "status": "APPROVED" if passed else "REJECTED",
        "passed": passed,
        "max_similarity_score": max_sim,
        "matched_canonical": matched_article['existing_slug'] if matched_article else None,
        "errors": errors,
        "warnings": warnings
    }

if __name__ == '__main__':
    # CLI Demo Usage
    print("Pre-Publish Guardrail Validator Engine Initialized.")
