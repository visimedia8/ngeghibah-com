# NGEGHIBAH.COM — AGENT MANDATE & OPERATING RULES

> Wajib dibaca oleh setiap AI Agent yang bertugas di workspace `ngeghibah.com`.

---

## 1. IDENTITAS & BRAND IDENTITY
- **Domain:** `ngeghibah.com`
- **Brand:** NgeGhibah
- **Tagline:** *"Bukan Sekadar Gosip, Ini Kronologi & Verifikasi"*
- **Tone:** Santai, cerdas, tidak menggurui, analitis, tajam, objektif, anti-clickbait murahan.
- **Brand Lexicon Wajib:** *"duduk perkaranya"*, *"kronologi lengkap"*, *"jejak digital"*, *"verifikasi fakta"*, *"sentimen netizen"*, *"klarifikasi resmi"*.
- **Kata Terlarang:** *"bikin melongo"*, *"syok berat"*, *"tak disangka-sangka"*, *"lihat apa yang terjadi"*, gosip mesum/vulgar tanpa verifikasi.

---

## 2. ARSITEKTUR KONTEN & AUTOMATION (N8N + OPENROUTER DEEPSEEK)
- **Model LLM:** `deepseek/deepseek-v4-flash` via OpenRouter (`https://openrouter.ai/api/v1`).
- **Biaya per Artikel:** $0.00235 USD (Rp 38,-) dengan burn rate < Rp 50.000 / bulan.
- **Anti-Duplikasi:** Wajib menggunakan hash sidik jari entitas (`hash(sorted_entities + stem_event)`) dengan rolling window 72 jam. Jika isu sudah pernah ditulis, jadikan sebagai bukti tambahan (update timeline), DILARANG membuat artikel duplikat.
- **Ekspansi Sumber Minim:** Jika tweet/caption pendek (< 200 kata), wajib gabungkan dengan data internal Celebrity Dossier + pencarian konteks pembanding sebelum rekonstruksi 5 bagian di DeepSeek.
- **Visual Caricature Generator:** Gunakan Cloudflare Workers AI model `@cf/black-forest-labs/flux-1-schnell` via endpoint `POST /api/ai/caricature` (10.000 neuron/hari GRATIS, 16:9 Google Discover ready).

---

## 3. AD-SENSE & DEWAN PERS COMPLIANCE (11 TRUST PAGES)
Situs ini memiliki 11 halaman kepatuhan E-E-A-T lengkap dengan schema JSON-LD:
1. `/kebijakan-privasi` (AdSense & DoubleClick Cookie disclosure, Opt-out links, UU PDP No. 27/2022)
2. `/syarat-dan-ketentuan` (Terms of service, larangan ad fraud & scraping)
3. `/pedoman-pemeriksaan-fakta` (Fact-checking policy Google News, 4 tingkat Ghibah Meter)
4. `/pedoman-hak-cipta` (Fair use medsos & formulir DMCA takedown notice)
5. `/tentang-kami` (PT Media Siber Ghibah Nusantara, legalitas AHU & NIB)
6. `/redaksi` (Susunan redaksi & pakta integritas anti-gratifikasi)
7. `/kontak-kami` (Alamat Sovereign Plaza Jakarta, multi-channel kontak)
8. `/hak-jawab` (Prosedur UU Pers No. 40/1999, komitmen respon 1x24 jam)
9. `/pedoman-media-siber` (Dewan Pers No. 1/Peraturan-DP/III/2012)
10. `/kode-etik` (Perlindungan anak di bawah umur & asas praduga tak bersalah)
11. `/disclaimer` (Penafian non-nasihat hukum/medis/finansial YMYL)

DILARANG menghapus atau merusak struktur halaman ini.

---

## 4. DEPLOYMENT & DEPLOY HOOK SAFETY
- **Method:** Next.js 14 Static Export (`output: 'export'`) ke folder `out/`.
- **Deploy Command:** `npx wrangler pages deploy out --project-name ngeghibah-com`.
- **Edge Functions:** Terletak di folder `functions/` (diproses otomatis oleh Cloudflare Pages).
- **Git Protocol:** Commit secara presisi (anti-piggyback, tanpa `git add .`), selalu jaga kerahasiaan `.env` (terlindungi oleh `.gitignore`).
