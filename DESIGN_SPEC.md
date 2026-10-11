# UI/UX & DESIGN SPECIFICATION: NgeGhibah.com
> Dokumen panduan desain antarmuka (UI) dan pengalaman pengguna (UX) untuk dijalankan oleh agen desain / frontend terpisah.
> Standar: **Super Premium, Indo-Friendly, Mobile-First, Google Discover & AdSense Optimized**.

---

## 1. DESIGN DNA & BRAND AESTHETIC

| Parameter | Spesifikasi |
|---|---|
| **Karakter Visual** | *High-End Pop Culture Editorial* (Perpaduan The Verge, Dazed, Rolling Stone, dan PopBase). |
| **Pembeda Utama** | Bersih, elegan, modern, **ANTI-TRIBUN** (Nol iklan pop-up menutup layar, nol paginasi paksa). |
| **Target Pengguna** | Netizen Indonesia 18–35 tahun (90%+ perangkat mobile / smartphone). |
| **Kebutuhan Akses** | Sangat ringan, hemat kuota data seluler, Core Web Vitals (LCP < 2.0s, CLS = 0). |

### 1.1 Palet Warna (The Midnight Paparazzi Theme)
- **Background Utama (Dark Mode Default/Recommended):** `#0B0F17` (Deep Obsidian / Midnight).
- **Background Sekunder (Card / Surface):** `#131B2E` / `#1E293B`.
- **Light Mode Alternative (Clean Paper):** `#F8FAFC` dengan card `#FFFFFF`.
- **Aksen Primer (Electric Magenta / Neon Pink):** `#FF2E93` (Melambangkan sensasi & dinamika pop-kultur).
- **Aksen Sekunder (Cyber Cyan / Info):** `#00F0FF` (Melambangkan data, verifikasi & jejak digital).
- **Aksen Peringatan / Rumor (Vibrant Amber):** `#FFB800` (Untuk badge Ghibah Meter: Rumor).
- **Aksen Valid / Resmi (Emerald Green):** `#10B981` (Untuk badge Ghibah Meter: Terkonfirmasi).
- **Tipografi Utama:**
  - Headline / Display: `Plus Jakarta Sans` (Font modern kebanggaan kreator lokal, tebal, proporsional).
  - Body Text: `Inter` (Legibilitas tinggi untuk pembacaan teks panjang di layar smartphone).

---

## 2. KOMPONEN KHUSUS (THE MOAT UI COMPONENTS)

Agen desain wajib mengimplementasikan 5 komponen signature ini:

### 2.1 Trending Radar Bar (Header Sub-Bar)
- Ticker horizontal geser (marquee / horizontal scrollable chips) di bawah navbar.
- Menampilkan tagar panas yang sedang viral saat ini:
  `🔥 #DramaArtisA` `⚡ #KasusCeraiB` `👀 #SkandalIdolC` `📈 +14k Bicara di X`
- Klik chip langsung memfilter artikel yang relevan.

### 2.2 Ghibah Meter Badge & Card (Header Artikel)
- Komponen visual penanda tingkat verifikasi di bagian paling atas setiap artikel:
  - 🟢 **TERKONFIRMASI RESMI** (Ikon centang shield, latar hijau neon transparan).
  - 🔵 **FAKTA JEJAK DIGITAL** (Ikon data/link, latar cyan transparan).
  - 🟡 **RUMOR / SENTIMEN NETIZEN** (Ikon radar mata warganet, latar kuning transparan).
  - ⚪ **MENUNGGU KLARIFIKASI** (Ikon jam pasir, latar abu-abu/oranye).
- Menyertakan bar meter visual interaktif (persentase data vs spekulasi).

### 2.3 Interactive Timeline Card (Alur Kronologi)
- Alur kejadian berbasis tanggal (*vertical timeline with connecting line*).
- Setiap titik (node) menampilkan:
  - Tanggal / Jam kejadian.
  - Judul tahapan (misal: "Unggahan Pertama di Akun X").
  - Bukti jejak digital (kutipan tweet / screenshot / pernyataan).
- Expandable / Collapsible agar hemat layar di perangkat mobile.

### 2.4 Celebrity Dossier Widget (Profil Entitas Terkait)
- Box melayang di sidebar (desktop) atau sebelum kesimpulan (mobile).
- Menampilkan avatar seleb, ringkasan biodata singkat, circle pertemanan/pasangan, dan link menuju direktori pSEO `/seleb/[slug]`.

### 2.5 Indo-Friendly Quick Interaction Bar
- **1-Tap Share Bar:** Tombol mengapung (sticky share) di mobile dengan prioritas:
  - Tombol Hijau: **WhatsApp Share** (saluran viral nomor 1 di Indonesia).
  - Tombol Hitam: **X / Twitter Share**.
  - Tombol Salin Tautan (Copy Link) dengan feedback toast "Tautan tersalin!".
- **Reaction Poll Mini:** Widget voting instan di akhir artikel:
  *"Menurut lo gimana kasus ini?"*
  `[👍 Tim Percaya]` `[🤔 Ragu / Nunggu Bukti]` `[🙄 Cuma Pansos]`
  (Menampilkan persentase suara live setelah diklik).

---

## 3. ARSITEKTUR HALAMAN & TATA LETAK (PAGE BLUEPRINT)

### A. Homepage (`/`)
1. **Top Header:** Logo NgeGhibah (bold typography dengan aksen neon) + Tombol Search modal + Dark/Light toggle.
2. **Trending Radar Ticker:** Horizontal scrollable pills tren real-time.
3. **Hero Feature Section (Bento Grid):**
   - 1 Artikel Utama (1200x628, kartu besar dengan badge Ghibah Meter & durasi baca).
   - 2–3 Artikel Pendamping (split cards).
4. **Feed Kategori Tab:** Filter instan tanpa reload (`Semua`, `Seleb Lokal`, `Hollywood & Barat`, `K-Pop & Asia`, `Creator & TikTok`).
5. **Celebrity Spotlight / Dossier Carousel:** Slider horizontal kartu profil artis yang sedang trending.
6. **Footer Premium:** Brand mission, link ke 8 Trust Pages, form newsletter, dan hak cipta.

### B. Article Detail Page (`/artikel/[slug]`)
1. **Breadcrumb Trail:** `Beranda > Kategori > Judul Artikel`.
2. **Metadata Header:** Kategori, Tanggal Terbit (ISO 8601), Nama & Avatar Penulis (klik link ke `/penulis/[slug]`), Durasi Baca.
3. **H1 Headline:** Bersih, tipografi tajam, tidak ada kata-kata clickbait murahan.
4. **Ghibah Meter Widget:** Terpasang tepat di atas hero image.
5. **Hero Image:** Rasio 16:9 (1200x628px), sudut membulat (*rounded-2xl*), caption atribusi sumber gambar.
6. **Article Body (Distraction-Free Reading):**
   - Spasi antar baris nyaman (*leading-relaxed*).
   - Ukuran font baca 17–18px di mobile.
   - Kotak Kutipan / *Callout Box* bergaya modern untuk jejak digital.
   - Komponen Interactive Timeline disematkan di tengah artikel.
7. **AdSense Slot Placement (Sesuai Aturan):**
   - Slot 1: Di bawah Paragraf 2 (responsif).
   - Slot 2: Di tengah artikel (sebelum timeline).
   - Slot 3: Di bawah artikel sebelum kolom komentar / rekomendasi.
   - *Tanpa iklan menutupi konten / no intrusive interstitials.*
8. **Asas Praduga Tak Bersalah & Box Hak Jawab:** Kotak terstruktur di penutup artikel.
9. **Author Card & Related Articles:** Rekomendasi berita dengan entitas artis yang sama.

### C. Celebrity Dossier Page (`/seleb/[slug]`)
1. **Header Profil Selebritas:** Foto resolusi tinggi, nama lengkap, nama panggung, akun medsos resmi terverifikasi.
2. **Key Stats Grid:** Usia, Pekerjaan, Circle/Agensi, Status Hubungan.
3. **Riwayat Berita & Kronologi Drama:** Daftar semua artikel di NgeGhibah yang me-mention artis tersebut.

### D. 8 Halaman Kepercayaan (Trust Pages)
- Halaman statis berdesain formal, rapi, bersih, dengan kop resmi redaksi:
  - `/tentang-kami`
  - `/redaksi` (Lengkap dengan foto dan bio tim jurnalis)
  - `/pedoman-media-siber`
  - `/kode-etik`
  - `/hak-jawab` (Dilengkapi form input interaktif untuk permohonan hak jawab)
  - `/kebijakan-privasi`
  - `/disclaimer`
  - `/kontak-kami`

---

## 4. STANDAR TEKNIS FRONTEND (UNTUK DILAKSANAKAN AGEN DESAIN)

1. **Framework:** Next.js 14+ / React 18+ (App Router).
2. **Styling:** Tailwind CSS (dengan plugin `@tailwindcss/typography`).
3. **Icons:** Lucide React (`lucide-react`).
4. **Animasi & Transisi:** Framer Motion (halus, mikro-animasi ringan, tidak membebani CPU mobile).
5. **Image Optimization:** Komponen `next/image` dengan properti `priority` pada hero image, ukuran placeholder blur, dan dimensi 1200x628.
6. **Zero Hydration Mismatch:**
   - Semua tanggal di-render format statis atau dibungkus flag klien jika dinamis.
   - Server Component untuk semua halaman publik, Client Component hanya untuk widget interaktif (Ghibah Meter toggle, Timeline accordion, Reaction Poll).

---

## 5. PROMPT READY-TO-USE UNTUK DIBERIKAN KE AGEN DESAIN TERPISAH

Gunakan prompt di bawah ini saat memanggil agen frontend/desain terpisah:

```text
Halo Agent! Kamu ditugaskan sebagai Senior Lead UI/UX & Frontend Developer untuk merancang website "NgeGhibah.com".
Baca dan patuhi seluruh panduan di file: DESIGN_SPEC.md dan SSOT.md.

TUGAS UTAMA:
1. Bangun komponen desain Next.js App Router (Tailwind CSS + Lucide Icons) dengan estetika "Super Premium Pop-Culture Editorial" (Midnight Velvet / Dark Mode bernuansa aksen Neon Pink #FF2E93 dan Cyan #00F0FF).
2. Desain wajib ramah netizen Indonesia (Mobile-First, super cepat, tanpa paginasi paksa ala Tribun, hemat kuota).
3. Implementasikan 5 Komponen Signature:
   - Trending Radar Bar (Ticker tagar viral)
   - Ghibah Meter Badge (Indikator fakta vs rumor)
   - Interactive Timeline Card (Kronologi alur drama)
   - Quick WhatsApp & X 1-Tap Share Bar
   - Celebrity Dossier Card & Page (/seleb/[slug])
4. Susun struktur layout halaman:
   - Homepage (Bento Grid Hero + Kategori Tabs + Carousel Seleb)
   - Article Detail Page (Hero 1200x628, Layout Ramah AdSense, Box Hak Jawab)
   - 8 Trust Pages (Tentang Kami, Redaksi, Pedoman Media Siber, Hak Jawab, dll.)
5. Pastikan Core Web Vitals LCP < 2.0s, CLS = 0, dan tidak ada hydration error.
```
