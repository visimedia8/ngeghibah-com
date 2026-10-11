# SSOT: NgeGhibah.com — Pop Culture & Celebrity Journalism Platform
> Single Source of Truth (SSOT) untuk arsitektur brand, SEO, Google Discover/News, kepatuhan AdSense, mesin otomatisasi n8n + DeepSeek v4 Flash, generator karikatur Cloudflare Workers AI, dan spesifikasi produksi konten NgeGhibah.com.

---

## 1. IDENTITY & BRAND BLUEPRINT

| Parameter | Spesifikasi |
|---|---|
| **Domain** | `ngeghibah.com` |
| **Brand Name** | **NgeGhibah** |
| **Legal Publisher** | PT Media Siber Ghibah Nusantara (NIB: 9120304810291, SK Kemenkumham 2026) |
| **Tagline** | *"Bukan Sekadar Gosip, Ini Kronologi & Verifikasi"* |
| **Central Entity** | Selebritas, Kreator Konten, & Budaya Populer (Lokal & Internasional) |
| **Target Market** | Netizen Indonesia (18–35 tahun), pengguna aktif medsos (X, TikTok, IG, Threads), penikmat drama seleb lokal & global |
| **Tone of Voice** | Santai, cerdas, tidak menggurui, analitis, tajam, objektif, anti-clickbait murahan |
| **Generation Engine** | **n8n** (Automated Orchestration) + **DeepSeek v4 Flash via OpenRouter** (`deepseek/deepseek-v4-flash`) |
| **Visual Asset Engine** | **Cloudflare Workers AI** (`@cf/black-forest-labs/flux-1-schnell`) — 10.000 Neuron/hari Gratis |
| **Deployment Stack** | **Next.js 14 App Router** (Static Export 36 rute) + **Cloudflare Pages** + **Pages Functions (Edge Webhook)** |
| **Repository** | GitHub: `https://github.com/visimedia8/ngeghibah-com` |
| **Live Production** | `https://ngeghibah-com.pages.dev/` |

### 1.1 Brand Axiom
> *"Netizen berhak tahu duduk perkara dan konteks utuh di balik setiap tren drama, bukan sekadar potongan clickbait yang mengeksploitasi emosi."*

### 1.2 Digital Fingerprint (3 Frasa Khas Wajib)
1. *"Kupas tuntas dari jejak digital pertama"*
2. *"Bukan sekadar heboh, ini duduk perkaranya"*
3. *"Radar pop-kultur berbobot: data, kronologi, verifikasi"*

---

## 2. THE MOAT: DIFERENSIASI DARI MEDIA GOSIP LOKAL MAINSTREAM

Kelemahan media konvensional (Tribun, DetikHot, KapanLagi, InsertLive):
- Paginasi paksa 5–10 slide untuk artikel pendek 150 kata (merusak bounce rate & user experience).
- Judul clickbait kosong tanpa substansi ("Bikin Melongo", "Ternyata Sosok Ini").
- Lambat menangkap tren murni komunitas internet (X, TikTok FYP, Reddit, forum K-Pop theqoo/Pann).

**4 Pilar Keunggulan Kompetitif NgeGhibah (AdSense & SEO Moat):**
1. **Interactive Timeline & Digital Receipts:**
   Liputan kontroversi disajikan dalam alur kronologis runut: Tanggal kejadian → Jejak digital pertama → Eskalasi percakapan → Klarifikasi para pihak.
2. **Ghibah Meter (Fact vs Rumor Gauge):**
   Setiap artikel memiliki badge transparansi verifikasi 4 level:
   - `[FAKTA TERVERIFIKASI (A1 — 90–100%)]`: Dokumen resmi, pernyataan langsung narasumber, rilis agensi.
   - `[JEJAK DIGITAL OTENTIK (A2 — 70–89%)]`: Siaran live, postingan centang biru terverifikasi sebelum dihapus.
   - `[DALAM INVESTIGASI / MENUNGGU TANGGAPAN (B1 — 40–69%)]`: Klarifikasi tertunda, investigasi berjalan.
   - `[RUMOR BELUM TERBUKTI (C1 — 0–39%)]`: Spekulasi warganet anonim, dibahas untuk meluruskan hoaks.
3. **Cross-Platform Social Listening Radar (via n8n):**
   Menangkap tren dari sumber primer internet sebelum dikutip media konvensional.
4. **Celebrity Dossier (Programmatic SEO Engine):**
   Database profil selebritas (`/seleb/[slug]`) yang merekam biodata, riwayat karya, circle relasi, lini bisnis, dan arsip riwayat drama secara rapi.

---

## 3. ENGINE ANTI-DUPLIKASI & EKSPANSI SUMBER (N8N PIPELINE)

### 3.1 Anti-Duplikasi Lintas Sumber (Entity-Event Fingerprinting)
Jika berita yang sama muncul serentak di X, Lambe Turah, TikTok, dan Reddit:
1. **Ekstraksi Entitas & Peristiwa:**
   - Ekstrak entitas: `[Entitas Primer]` (misal: `Rachel Vennya, Salim Nauderer`).
   - Ekstrak akar peristiwa: `[Akar Peristiwa]` (misal: `putus, parfum, sindiran`).
   - Buat hash unik: `hash(sorted_entities + stem_event)`.
2. **Rolling 72-Hour Corroboration Window:**
   - Cek database artikel NgeGhibah: Apakah hash ini sudah ada dalam 72 jam terakhir?
   - **Jika SUDAH ADA:** DILARANG membuat artikel baru. Sumber baru otomatis dijadikan **Bukti Tambahan (*Corroboration*)** untuk memperbarui *Interactive Timeline* dan skor *Ghibah Meter* pada artikel existing.
   - **Jika BELUM ADA:** Masuk ke antrian draf artikel baru.

### 3.2 Ekspansi Sumber Minim (The 4-Step Recursive Expansion)
Jika pemicu berita hanya berupa 1 tweet pendek (30 kata) atau caption video TikTok 15 detik:
1. **Injeksi Celebrity Dossier Internal:**
   - Sistem mencocokkan nama figur dengan dossier internal ([`src/data/mockData.ts`](./src/data/mockData.ts)).
   - Menyuntikkan riwayat karier, jejaring agensi, dan silsilah kasus masa lalu yang relevan.
2. **Autonomous Cross-Search Query:**
   - n8n menjalankan pencarian otomatis via Google News RSS / DuckDuckGo: `"[Nama Seleb]" + "[Keyword Peristiwa]"`.
   - Menarik 3 konteks pembanding: pernyataan manajer, status hukum, atau rekaman lama.
3. **Structured Reconstruction Prompting (DeepSeek v4 Flash):**
   - DeepSeek merekonstruksi anatomi berita menjadi artikel 1.000–1.200 kata dengan 5 bagian wajib:
     1. Duduk Perkara (Lead berita 5W+1H)
     2. Jejak Digital Pertama (Asal muasal unggahan)
     3. Riwayat Historis & Preseden Kasus
     4. Spektrum Sentimen Netizen (Kubu pendukung vs kubu pengkritik)
     5. Status Verifikasi (Ghibah Meter) & Klausul Hak Jawab

---

## 4. GENERATOR KARIKATUR EDITORIAL GRATIS (CLOUDFLARE WORKERS AI)

* **Kuota Gratis:** 10.000 Neurons/hari (Free di setiap akun Cloudflare) = **40–100 gambar gratis per hari ($0)**.
* **Model AI:** `@cf/black-forest-labs/flux-1-schnell` (Resolusi tajam, rasio 16:9 Google Discover, bebas royalti).
* **Endpoint Live:** `POST https://ngeghibah-com.pages.dev/api/ai/caricature`
* **Template Prompt Karikatur:**
  ```text
  Editorial satirical caricature illustration of [CELEBRITY_NAME], vibrant pop-art comic style, 
  exaggerated expressive facial reaction, depicting [SPECIFIC_NEWS_EVENT], dark obsidian velvet 
  background with vivid neon magenta and cyan highlights, clean sharp vector art, professional 
  magazine cover editorial cartoon, 16:9 aspect ratio, high resolution
  ```

---

## 5. HITUNG-HITUNGAN BIAYA & UNIT ECONOMICS (OPENROUTER DEEPSEEK V4 FLASH)

* **Tarif OpenRouter API (`deepseek/deepseek-v4-flash`):**
  - Prompt Token: `$0.00000003` per token ($0.03 / 1 juta tokens).
  - Completion Token: `$0.00000128` per token ($1.28 / 1 juta tokens).
* **Biaya per 1 Artikel Lengkap (~1.500 input + 1.800 output tokens):**
  - **$0.00235 USD (± Rp 38,- per artikel)**.
* **Simulasi Operasional:**
  - 10 artikel/hari = Rp 11.500 / bulan.
  - 20 artikel/hari = Rp 22.800 / bulan.
  - 40 artikel/hari = Rp 45.600 / bulan.
* **Estimasi AdSense (Asumsi 2.000 PV/hari, RPM Rp 20.000):**
  - Gross Revenue: Rp 1.200.000 / bulan.
  - Operational Burn Rate: < Rp 50.000 / bulan.
  - **Net Profit Margin: > 95%**.

---

## 6. KEPATUHAN 11 HALAMAN LEGAL & E-E-A-T (DAY-1 ADSENSE APPROVAL)

Seluruh 11 rute wajib ini telah live dan dilengkapi structured schema JSON-LD:
1. [`/kebijakan-privasi`](https://ngeghibah-com.pages.dev/kebijakan-privasi) — Google AdSense, DoubleClick DART cookies, Opt-Out links, UU PDP No. 27/2022, GDPR, CCPA.
2. [`/syarat-dan-ketentuan`](https://ngeghibah-com.pages.dev/syarat-dan-ketentuan) — Ketentuan hukum, hak cipta orisinal, larangan scraping & ad fraud, yurisdiksi PN Jakarta Selatan.
3. [`/pedoman-pemeriksaan-fakta`](https://ngeghibah-com.pages.dev/pedoman-pemeriksaan-fakta) — Metodologi 4 level Ghibah Meter, forensik jejak digital, deteksi AI deepfake.
4. [`/pedoman-hak-cipta`](https://ngeghibah-com.pages.dev/pedoman-hak-cipta) — Doktrin Fair Use kutipan medsos, DMCA takedown notice, designated agent.
5. [`/tentang-kami`](https://ngeghibah-com.pages.dev/tentang-kami) — Legalitas PT Media Siber Ghibah Nusantara, visi, misi, anti-clickbait.
6. [`/redaksi`](https://ngeghibah-com.pages.dev/redaksi) — Susunan redaksi lengkap, pakta integritas anti-gratifikasi dewan pers.
7. [`/kontak-kami`](https://ngeghibah-com.pages.dev/kontak-kami) — Alamat kantor Sovereign Plaza Jakarta, multi-channel email, hotline.
8. [`/hak-jawab`](https://ngeghibah-com.pages.dev/hak-jawab) — SOP hak jawab & ralat sesuai Pasal 5 UU Pers No. 40/1999 (respon 1x24 jam).
9. [`/pedoman-media-siber`](https://ngeghibah-com.pages.dev/pedoman-media-siber) — Peraturan Dewan Pers No. 1/Peraturan-DP/III/2012.
10. [`/kode-etik`](https://ngeghibah-com.pages.dev/kode-etik) — Perlindungan privasi anak, anti-eksploitasi korban, asas praduga tak bersalah.
11. [`/disclaimer`](https://ngeghibah-com.pages.dev/disclaimer) — Penafian non-nasihat medis, finansial, dan hukum (pencegahan penalti YMYL).

---

## 7. TEKNIS & INTEGRASI DATABASE WEBHOOK

- Endpoint Webhook di Edge: `POST /api/webhooks/n8n/article`
- Header Wajib: `Authorization: Bearer ngeghibah_prod_secret_89f02a`
- Payload Schema:
  ```json
  {
    "title": "Duduk Perkara Royalti Musik: Musisi vs Promotor Konser",
    "slug": "duduk-perkara-royalti-musik-musisi-vs-promotor-konser",
    "meta_description": "Kronologi lengkap perselisihan royalti musik dan verifikasi jejak digital.",
    "excerpt": "Penelusuran jejak digital mengenai polemik royalti musik antara musisi dan promotor.",
    "category": "seleb-lokal | hollywood-barat | kpop-asia | creator-tiktok",
    "ghibah_meter": "TERKONFIRMASI | FAKTA_DIGITAL | DALAM_INVESTIGASI | RUMOR_NETIZEN",
    "hero_image": "https://ngeghibah.com/images/...",
    "entities": ["Ahmad Dhani", "Once Mekel"],
    "timeline": [
      { "time_label": "Maret 2026", "event": "Pernyataan terbuka di media sosial" },
      { "time_label": "April 2026", "event": "Pertemuan mediasi resmi LMKN" }
    ],
    "content_html": "<h2>Duduk Perkaranya</h2><p>...</p>",
    "status": "draft | published"
  }
  ```

---

## 8. ROADMAP EKSEKUSI SELANJUTNYA (WHAT NEXT)

1. **Custom Domain Binding:**
   - Hubungkan domain `ngeghibah.com` & `www.ngeghibah.com` di Cloudflare Pages Dashboard -> Custom domains.
2. **Automasi Cloudflare Deploy Hook:**
   - Di Cloudflare Pages -> Settings -> Builds & deployments -> Buat Deploy Hook.
   - Panggil Deploy Hook URL di node terakhir n8n setiap kali artikel baru diterbitkan.
3. **Impor Workflow ke n8n:**
   - Impor [`n8n-workflow-ngeghibah.json`](./n8n-workflow-ngeghibah.json) ke instance n8n.
   - Pasang variable: `OPENROUTER_API_KEY`, `NGEGHIBAH_WEBHOOK_URL`, `N8N_WEBHOOK_SECRET`.
4. **Penerbitan 25 Artikel Pertama (Fase HITL):**
   - Jalankan pipeline dengan kurasi Human-in-the-Loop via Telegram Bot / approval node.
   - Kumpulkan 25 artikel berkualitas tinggi dan orisinal.
5. **Google Publisher Center & Google Search Console:**
   - Submit sitemap `https://ngeghibah.com/sitemap.xml`.
   - Daftarkan ke Google Publisher Center untuk indeksasi Google News.
6. **Pengajuan Google AdSense:**
   - Ajukan akun AdSense setelah trafik organik awal tercatat dan artikel awal terindeks.
   - Update `pub-XXXXXXXXXXXXXXXX` di [`public/ads.txt`](./public/ads.txt) dan [`AdSlot.tsx`](./src/components/ads/AdSlot.tsx).
