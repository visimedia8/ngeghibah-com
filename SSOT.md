# SSOT: NgeGhibah.com — Pop Culture & Celebrity Journalism Platform
> Single Source of Truth (SSOT) untuk arsitektur brand, SEO, Google Discover/News, kepatuhan AdSense, mesin otomatisasi konten (n8n + DeepSeek), dan spesifikasi desain web untuk NgeGhibah.com.

---

## 1. IDENTITY & BRAND BLUEPRINT

| Parameter | Spesifikasi |
|---|---|
| **Domain** | `ngeghibah.com` |
| **Brand Name** | **NgeGhibah** |
| **Tagline** | *"Bukan Sekadar Gosip, Ini Kronologi & Verifikasi"* |
| **Central Entity** | Selebritas, Kreator Konten, & Budaya Populer (Lokal & Internasional) |
| **Target Market** | Netizen Indonesia (18–35 tahun), pengguna aktif medsos (X, TikTok, IG, Threads), penikmat drama seleb lokal & global |
| **Source Context** | Portal jurnalisme kurasi pop-kultur berbasis kronologi terverifikasi, jejak digital transparan, dan analisis sentimen |
| **Tone of Voice** | Santai, cerdas, tidak menggurui, objektif, tajam, anti-sensasionalisme murahan |
| **Generation Engine** | **n8n** (Automated Workflow Engine) + **DeepSeek API** (Algorithmic Content Writer) |
| **Design Standard** | Super Premium Indo-Friendly Pop-Culture Editorial (Panduan di `DESIGN_SPEC.md`) |

### 1.1 Brand Axiom
> *"Netizen berhak tahu duduk perkara dan konteks utuh di balik setiap tren drama, bukan sekadar potongan clickbait yang mengeksploitasi emosi."*

### 1.2 Digital Fingerprint (3 Frasa Khas)
1. *"Kupas tuntas dari jejak digital pertama"*
2. *"Bukan sekadar heboh, ini duduk perkaranya"*
3. *"Radar pop-kultur berbobot: data, kronologi, verifikasi"*

---

## 2. THE MOAT: DIFERENSIASI DARI MEDIA GOSIP LOKAL MAINSTREAM

Kelemahan media konvensional (Tribun, DetikHot, KapanLagi, InsertLive):
- Paginasi paksa 5–10 slide untuk artikel pendek 150 kata.
- Judul clickbait kosong ("Bikin Melongo", "Ternyata Sosok Ini").
- Lambat menangkap tren murni komunitas internet (X, TikTok FYP, Reddit, forum K-Pop/Hollywood).

**4 Pilar Keunggulan Kompetitif NgeGhibah:**
1. **Interactive Timeline & Digital Receipts**:
   Liputan kontroversi disajikan dalam alur kronologis: Tanggal kejadian → Jejak digital pertama → Eskalasi percakapan → Klarifikasi para pihak.
2. **Ghibah Meter (Fact vs Rumor Gauge)**:
   Setiap artikel memiliki badge transparansi verifikasi:
   - `[TERKONFIRMASI RESMI]`
   - `[FAKTA JEJAK DIGITAL]`
   - `[RUMOR / SENTIMEN NETIZEN]`
   - `[MENUNGGU TANGGAPAN]`
3. **Cross-Platform Social Listening Radar (via n8n)**:
   Menangkap tren dari sumber primer internet sebelum dikutip media konvensional.
4. **Celebrity Dossier (Programmatic SEO Engine)**:
   Database profil selebritas (`/seleb/[slug]`) yang merekam biodata, riwayat karya, circle relasi, lini bisnis, dan arsip riwayat drama secara rapi.

---

## 3. AUTOMATED PRODUCTION ENGINE (n8n + DEEPSEEK ARCHITECTURE)

Pipeline konten dijalankan secara otomatis menggunakan orkestrasi **n8n** dan model **DeepSeek**:

```
[ TAHAP 1: RADAR & INGESTION ]
  ├── Twitter/X Trends ID & Worldwide (API / Scraper node)
  ├── TikTok Trending FYP Audio & Drama Tags
  ├── Reddit Ingestion: r/Fauxmoi, r/popheadscirclejerk, r/indonesia
  ├── K-Community RSS: theqoo, Pann Nate, Koreaboo, Soompi
  └── US/UK Media RSS: TMZ, Page Six, People, DeuxMoi
        ↓
[ TAHAP 2: DEDUPLIKASI & SELECTION FILTER ]
  - Node n8n mengecek database: Apakah entitas & kasus ini sudah pernah dibahas dalam 48 jam?
  - Filter kelayakan AdSense: Drop konten sensitif (SARA, video vulgar, self-harm, pornografi).
  - Klasifikasi: Tipe Seleb (Lokal / Global) & Kategori (Kontroversi / Asmara / Karya / Viral).
        ↓
[ TAHAP 3: OUTLINE & REASONING (DEEPSEEK) ]
  - Input: Raw text / transkrip / tweet / ringkasan berita sumber.
  - DeepSeek System Prompt menginjeksi:
    * Brand Lexicon (kata wajib & kata terlarang)
    * Format Ghibah Meter
    * Struktur Kronologi Interaktif (Day-by-Day timeline)
    * Sudut pandang kultur netizen Indonesia (lokalisasi konteks untuk seleb global)
    * Semantic SEO: Entity co-occurrence, H2/H3 semantic hierarchy, tanpa filler
        ↓
[ TAHAP 4: SAFETY AUDIT & COMPLIANCE GATE (ADSENSE SAFETY PASS) ]
  - Regex / LLM check: Pastikan tidak ada kata-kata vulgar, tudingan tanpa verifikasi, atau pencemaran nama baik.
  - Tambahkan klausul hak jawab dan perimbangan informasi.
        ↓
[ TAHAP 5: ASSET & MEDIA DISCOVER ENGINE ]
  - Auto-generate/fetch Hero Image dengan rasio 16:9 (1200x628px).
  - Metadata `og:image` dipasang otomatis untuk memenuhi syarat Google Discover.
        ↓
[ TAHAP 6: CMS / DATABASE WEBHOOK & DISPATCH ]
  - n8n menembak API/Webhook NgeGhibah:
    * Jika Masa Approval AdSense (Day 1–30): Masuk ke status `draft` atau kirim notifikasi Telegram/Discord bot untuk 1-click Approval (Human-in-the-Loop).
    * Jika Sudah Approved: Auto-publish langsung ke production.
        ↓
[ TAHAP 7: INDEXING PING ]
  - Trigger Google Indexing API via HTTP Request di n8n untuk update instan `sitemap_news.xml`.
```

---

## 4. DEEPSEEK WRITING SYSTEM PROMPT PROTOCOL

Prompt yang diinjeksikan ke dalam node DeepSeek di n8n dirancang khusus untuk mematuhi Koray Semantic SEO dan AdSense Safety:

### Komponen Wajib System Prompt DeepSeek:
1. **Peran:** Redaktur Senior Jurnalisme Pop-Kultur NgeGhibah.com.
2. **Kepatuhan Brand Lexicon:**
   - Gunakan kata wajib: *duduk perkaranya, kronologi lengkap, jejak digital, verifikasi fakta, sentimen netizen, klarifikasi resmi*.
   - Hapus kata terlarang: *bikin melongo, syok berat, tak disangka-sangka, kumpul kebo, vulgar, tudingan sepihak*.
3. **Format Output Berita:**
   - **Lead / Paragraph 1 (Direct Fact):** Ringkasan 5W+1H duduk perkaranya tanpa basa-basi pembuka.
   - **Ghibah Meter Badge:** Cantumkan status verifikasi di awal artikel.
   - **Subheading 1 (Latar Belakang & Jejak Digital):** Fakta pemicu awal.
   - **Subheading 2 (Kronologi Lengkap Kejadian):** Bullet points terstruktur berbasis urutan waktu/tanggal.
   - **Subheading 3 (Tanggapan Para Pihak & Klarifikasi):** Kutipan pernyataan resmi atau perimbangan informasi.
   - **Subheading 4 (Reaksi & Sentimen Netizen):** Bagaimana publik internet merespons.
   - **Penutup (Etika & Hak Jawab):** Klausul hak klarifikasi bagi pihak yang diberitakan.

---

## 5. STRATEGI TRI-FACTOR TRAFFIC (DAY 1 EXECUTION)

| Saluran | Persyaratan Kritis | Strategi Eksekusi NgeGhibah |
|---|---|---|
| **Google News** | Opt-in via Publisher Center, `NewsArticle` schema, kecepatan indeks. | n8n menerbitkan artikel < 1 jam sejak viral. Publisher Center didaftarkan setelah 20 artikel terverifikasi tayang. |
| **Google Discover** | Visual tinggi, mobile UX, non-misleading CTR. | n8n menyematkan gambar hero 1200x628px. DeepSeek diinstruksikan menulis judul berdaya tarik tinggi tanpa misleading. |
| **Organic Search** | Topical Authority & Internal Linking. | DeepSeek mengaitkan entitas seleb dengan link internal ke direktori `/seleb/[slug]`. |

---

## 6. ADSENSE APPROVAL SAFEGUARD (HUMAN-IN-THE-LOOP UNTUK DAY 1)

Agar website 100% di-approve oleh tim reviewer Google AdSense:

1. **Fase 1: Pre-Approval (20–30 Artikel Pertama)**
   - Jalankan n8n dengan **Human-in-the-Loop (HITL)** via Telegram Bot / Web Dashboard.
   - n8n mengumpulkan topik, DeepSeek menulis draft, kirim notifikasi ke Telegram dengan tombol `[Approve & Publish]` / `[Reject]` / `[Edit]`.
   - Pastikan 8 Trust Pages (Tentang Kami, Redaksi, Pedoman Siber, Kode Etik, Hak Jawab, Privasi, Disclaimer, Kontak) sudah terisi lengkap dengan alamat dan identitas riil redaksi.
   - Daftarkan ke Google AdSense saat web sudah memiliki 25–30 artikel bersih ber-traffic organik.
2. **Fase 2: Post-Approval (Full Autopilot)**
   - Setelah AdSense approved, aktifkan direct publishing node di n8n untuk kecepatan maksimal di Google News & Discover.

---

## 7. TEKNIS & INTEGRASI DATABASE WEBHOOK

- Endpoint Webhook di Backend: `POST /api/webhooks/n8n/article`
- Payload Skema:
  ```json
  {
    "secret": "API_SECRET_TOKEN",
    "title": "Judul Artikel",
    "slug": "judul-artikel-otomatis",
    "excerpt": "Ringkasan 2 kalimat untuk SEO & Discover",
    "content": "HTML/Markdown content dari DeepSeek",
    "category": "seleb-lokal | seleb-global | k-pop | creator",
    "ghibah_meter": "TERKONFIRMASI | FAKTA_DIGITAL | RUMOR_NETIZEN",
    "hero_image": "https://ngeghibah.com/images/...",
    "author_slug": "nama-editor",
    "entities": ["Nama Seleb 1", "Nama Seleb 2"],
    "timeline": [
      { "date": "10 Okt 2026", "event": "Postingan viral pertama diunggah" },
      { "date": "11 Okt 2026", "event": "Klarifikasi resmi dirilis di Instagram" }
    ],
    "status": "draft | published"
  }
  ```

---

## 8. UI/UX DESIGN PHASE (DELEGASI KE AGEN DESAIN TERPISAH)

Untuk pengerjaan desain dan frontend website di agent terpisah, rujuk file mandiri:
👉 **[`DESIGN_SPEC.md`](./DESIGN_SPEC.md)**

File tersebut mencakup:
- **Design System:** Midnight Paparazzi Theme (`#0B0F17` dengan aksen Neon Pink `#FF2E93` & Cyber Cyan `#00F0FF`).
- **5 Komponen Signature:** Trending Radar Bar, Ghibah Meter Card, Interactive Timeline Card, Celebrity Dossier Widget, dan 1-Tap WhatsApp/X Share Bar.
- **Layout Halaman:** Homepage (Bento Grid), Detail Berita (AdSense compliant, LCP < 2.0s), Direktori Seleb `/seleb/[slug]`, dan 8 Halaman Kepercayaan (Trust Pages).
- **Prompt Mandiri:** Siap dicopy-paste langsung ke sesi subagent UI/UX.
