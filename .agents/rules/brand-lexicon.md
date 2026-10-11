# Brand Lexicon — NgeGhibah.com
Generated: 2026-10-11
Method: Direct Onboarding + Publisher Moat Framework + n8n/DeepSeek Automation

## REQUIRED INFO
BRAND_NAME: NgeGhibah (ngeghibah.com)
TAGLINE: "Bukan Sekadar Gosip, Ini Kronologi & Verifikasi"
TARGET_AUDIENCE: Netizen Indonesia usia 18–35 tahun (Gen Z & Milenial aktif di media sosial: X, TikTok, Instagram, Threads, penikmat pop culture lokal & internasional).
WEBSITE_TYPE: Publisher
CENTRAL_ENTITY: Selebritas & Budaya Populer (Celebrities, Influencers, Content Creators, & Pop Culture Phenomena)
SOURCE_CONTEXT: "NgeGhibah adalah portal kurasi dan jurnalisme investigasi pop-kultur terpercaya yang membedah dinamika selebritas lokal dan internasional melalui kronologi terverifikasi, analisis sentimen media sosial, dan konteks kultural tanpa fitnah."
PRIMARY_PLAYBOOK: Publisher (playbook_publisher.md)
SECONDARY_PLAYBOOK: None
AUTOMATION_STACK: n8n (Ingestion & Orchestration) + DeepSeek v4 Flash (Algorithmic Content Writer)

## BRAND IDENTITY & MOAT
BRAND_AXIOM:
  "Netizen berhak mengetahui duduk perkara dan konteks utuh di balik setiap tren drama, bukan sekadar umpan klik (clickbait) yang memecah fakta menjadi potongan sensasi murah."

DIGITAL_FINGERPRINT:
  - "Kupas tuntas dari jejak digital pertama"
  - "Bukan sekadar heboh, ini duduk perkaranya"
  - "Radar pop-kultur berbobot: data, kronologi, verifikasi"

LEXICON_REQUIRED:
  - "duduk perkaranya"
  - "kronologi lengkap"
  - "jejak digital"
  - "verifikasi fakta"
  - "sentimen netizen"
  - "rekap kontroversi"
  - "klarifikasi resmi"
  - "radar tren"

LEXICON_FORBIDDEN:
  - "bikin melongo" (clickbait basi)
  - "syok berat"
  - "tak disangka-sangka"
  - "lihat apa yang terjadi"
  - "kumpul kebo" (pelanggaran kebijakan konten vulgar)
  - "vulgar / telanjang / adegan ranjang" (pelanggaran AdSense)
  - "tudingan sepihak tanpa verifikasi"
  - "ujaran kebencian / body shaming"

## THE NGEGHIBAH MOAT (NILAI TAMBAH PEMBEDA DARI MEDIA MAINSTREAM)
1. **Interactive Timeline & Digital Receipts**:
   Setiap liputan drama/isu selebritas disajikan dalam format kronologi terstruktur (tanggal, peristiwa, bukti tangkapan layar/link arsip publik), bukan artikel 3 paragraf dipecah 5 halaman.
2. **Fact vs Rumor Meter (Ghibah Gauge)**:
   Setiap artikel dilengkapi status verifikasi transparan:
   - [TERKONFIRMASI RESMI]
   - [FAKTA JEJAK DIGITAL]
   - [RUMOR / SENTIMEN NETIZEN]
   - [MENUNGGU TANGGAPAN PIHAK TERKAIT]
3. **Cross-Platform Social Listening Engine (n8n Multi-Node)**:
   Radar topik aktif dari X Trending ID & Global, TikTok FYP drama, Reddit r/indonesia & r/Fauxmoi, komunitas K-Pop (theqoo/Pann), dan forum AS/Hollywood (DeuxMoi/TMZ) sebelum dicover media mainstream lokal.
4. **Celebrity Dossier (Programmatic SEO)**:
   Halaman ensiklopedia seleb `/seleb/[slug]` yang merangkum biodata, track record karya, lingkaran relasi (circle), lini bisnis, dan riwayat kontroversi/prestasi masa lalu secara permanen dan terindeks SEO.

## DEEPSEEK WRITING GUARDRAILS (FOR n8n PROMPT NODE)
- Jangan gunakan transitional filler ("Furthermore", "Moreover", "Perlu dicatat bahwa").
- Lead paragraf pertama wajib langsung menjawab inti berita (5W+1H) dan memunculkan Ghibah Meter.
- Artikel wajib memiliki subbagian Timeline Kronologi.
- Artikel wajib memiliki bagian Reaksi Netizen & Konteks Budaya.
- Bagian penutup wajib mencantumkan klausul asas praduga tak bersalah dan hak jawab bagi pihak terkait.
- Output JSON dari DeepSeek harus langsung siap dikonsumsi oleh API webhook NgeGhibah.
