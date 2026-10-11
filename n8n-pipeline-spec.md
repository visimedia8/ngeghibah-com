# N8N & DEEPSEEK V4 FLASH WORKFLOW SPECIFICATION
> Spesifikasi implementasi alur otomatisasi n8n dan prompt engineering DeepSeek untuk NgeGhibah.com.

---

## 1. ARSITEKTUR WORKFLOW N8N

Workflow n8n dibagi menjadi 6 tahap logis:

```
[Trigger Cron / Polling] 
  ├── Node 1A: X/Twitter Trends & Keywords Scraper (Apify / RapidAPI / Nitter RSS)
  ├── Node 1B: Reddit Ingestion (r/Fauxmoi, r/indonesia, r/popheadscirclejerk JSON feed)
  ├── Node 1C: K-Pop Community RSS (theqoo, Pann Nate translations, Koreaboo)
  └── Node 1D: US/UK Pop Culture RSS (TMZ, Page Six, DeuxMoi)
        ↓
[Node 2: Deduplikasi & Database Lookup]
  - Query ke Database / API NgeGhibah: `SELECT id FROM articles WHERE title SIMILAR TO :topic OR slug = :slug`
  - Jika sudah ada dalam 48 jam terakhir → STOP / DROP.
        ↓
[Node 3: AdSense Safety Pre-Filter (Code Node)]
  - Filter kata terlarang (SARA, pornografi, gore, bunuh diri, fitnah ekstrem).
  - Jika mengandung kata terlarang yang tidak bisa diselamatkan → DROP.
        ↓
[Node 4: OpenRouter DeepSeek v4 Flash Reasoning & Writing Node]
  - Memanggil OpenRouter Chat Completions API (`https://openrouter.ai/api/v1/chat/completions`).
  - Model: `deepseek/deepseek-v4-flash`.
  - Header: `Authorization: Bearer {{ $env.OPENROUTER_API_KEY }}`.
  - Response format: `json_object`.
        ↓
[Node 5: Asset & Image Matcher]
  - Resolusi wajib: 1200x628 (16:9) untuk Google Discover.
  - Sumber: Image fetcher / AI prompt generator / Wikimedia / Unsplash / embed sosmed legal.
        ↓
[Node 6: Approval Gate (Fase Pre-AdSense)]
  - Kirim pesan ke Telegram Bot:
    * Judul + Ghibah Meter + Excerpt + Timeline
    * Tombol Inline: `[Publish Sekarang]` / `[Simpan ke Draft]` / `[Tolak]`
  - Setelah AdSense diapprove: Otomatisasi langsung ke `Publish Sekarang`.
        ↓
[Node 7: HTTP Request to NgeGhibah Webhook]
  - POST ke `https://ngeghibah.com/api/webhooks/n8n/article`
  - Header: `Authorization: Bearer {{ $env.N8N_WEBHOOK_SECRET }}`
```

---

## 2. DEEPSEEK SYSTEM PROMPT (PRODUCTION-READY)

Prompt berikut dimasukkan ke dalam node **HTTP Request / OpenAI Compatible Node** di n8n:

```text
Kamu adalah Redaktur Senior Jurnalisme Pop-Kultur dan Selebritas di portal media NgeGhibah.com.
Tugasmu adalah menulis artikel berita berbobot tinggi, mendalam, berbasis kronologi faktual dan jejak digital, serta memenuhi standar Koray Semantic SEO dan 100% patuh terhadap Google AdSense Policy.

BRAND IDENTITY & ATURAN PENULISAN:
- Nama Media: NgeGhibah
- Tagline: "Bukan Sekadar Gosip, Ini Kronologi & Verifikasi"
- Gaya Bahasa: Bahasa Indonesia santai tapi cerdas, analitis, tidak menggurui, objektif, dan tajam.
- Wajib menggunakan variasi kata berikut: "duduk perkaranya", "kronologi lengkap", "jejak digital", "verifikasi fakta", "sentimen netizen", "klarifikasi resmi".
- DILARANG KERAS menggunakan frasa clickbait murahan: "bikin melongo", "syok berat", "tak disangka-sangka", "lihat apa yang terjadi".
- DILARANG KERAS menggunakan kata-kata vulgar, cabul, atau tudingan sepihak yang melanggar hukum pers.
- WAJIB menyertakan asas praduga tak bersalah dan hak jawab bagi pihak terkait di bagian penutup.

STRUKTUR ARTIKEL (HTML / MARKDOWN):
1. Lead Paragraf: Langsung menjawab inti berita 5W+1H dan duduk perkaranya secara lugas (tanpa pengantar klise).
2. Badge Ghibah Meter: Tentukan salah satu: [TERKONFIRMASI RESMI], [FAKTA JEJAK DIGITAL], [RUMOR / SENTIMEN NETIZEN], atau [MENUNGGU TANGGAPAN].
3. Bagian Latar Belakang & Jejak Digital: Ungkap peristiwa atau postingan pertama yang memicu isu.
4. Bagian Kronologi Kejadian: Berikan timeline kejadian berurutan (misal: Hari 1, Hari 2, Hari 3).
5. Bagian Konteks Budaya & Sentimen Netizen: Bagaimana netizen Indonesia merespons dan kenapa isu ini penting/ramai diperbincangkan.
6. Bagian Tanggapan & Klarifikasi: Rekap pernyataan dari manajemen/figur terkait.
7. Penutup: Hak jawab dan etika peliputan.

OUTPUT FORMAT (JSON OBJECT WAJIB):
Kembalikan HANYA JSON murni dengan skema berikut:
{
  "title": "Judul berita menarik, faktual, mengundang klik sehat (maks 65 karakter)",
  "slug": "slug-url-ramah-seo",
  "meta_description": "Deskripsi untuk SERP dan Google Discover (maks 155 karakter)",
  "excerpt": "Ringkasan 2 kalimat tajam duduk perkaranya",
  "category": "seleb-lokal | seleb-global | k-pop | creator-drama",
  "ghibah_meter": "TERKONFIRMASI | FAKTA_DIGITAL | RUMOR_NETIZEN | MENUNGGU_TANGGAPAN",
  "entities": ["Nama Artis 1", "Nama Artis 2"],
  "timeline": [
    { "time_label": "Waktu/Tanggal", "event": "Deskripsi peristiwa" }
  ],
  "content_html": "<article>...seluruh konten berstruktur H2, H3, p, ul, li...</article>",
  "image_prompt": "Prompt deskripsi gambar untuk hero image beresolusi 1200x628 bebas copyright"
}
```

---

## 3. WEBHOOK RECEIVER SCHEMA (NEXT.JS APP ROUTER)

Lokasi Endpoint: `/app/api/webhooks/n8n/article/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.N8N_WEBHOOK_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await req.json();

    // Validasi data contract
    if (!payload.title || !payload.content_html || !payload.slug) {
      return NextResponse.json({ error: 'Payload tidak lengkap' }, { status: 400 });
    }

    // Simpan ke database (Prisma / Supabase / Postgres)
    // const article = await prisma.article.create({ data: { ... } });

    // ISR Revalidation untuk Google News dan Discover
    // revalidatePath('/');
    // revalidatePath(`/artikel/${payload.slug}`);
    // revalidatePath('/sitemap_news.xml');

    return NextResponse.json({ success: true, slug: payload.slug }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
```
