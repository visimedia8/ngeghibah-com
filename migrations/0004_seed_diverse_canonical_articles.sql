-- Migration 0004: Seed 9 Diverse Celebrity Master Articles (Total 28 Canonical)

INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, is_canonical, canonical_slug, updated_at
) VALUES (
  'art-canon-01', 'raffi-ahmad-investigasi-gelar-kehormatan-doktor-hc-dan-bisnis-rans', 'Investigasi Polemik Gelar Doktor Honoris Causa Raffi Ahmad & Valuasi Konglomerasi RANS', 'Bukan sekadar sorotan warganet, ini rekonstruksi verifikasi legalitas akademik UIPM, keabsahan regulasi Kemendikbudristek, dan peta diversifikasi bisnis ekosistem RANS.', '<p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
  Pemberian gelar Doktor Kehormatan (Honoris Causa) kepada figur publik dan pengusaha hiburan Raffi Ahmad oleh Universal Institute of Professional Management (UIPM) di Thailand memicu gelombang diskursus mengenai standar pengakuan akademik transnasional di Indonesia. Tim investigasi NgeGhibah merekonstruksi alur regulasi hukum, penelusuran status izin operasional lembaga, serta dampaknya terhadap portofolio korporasi RANS Entertainment.
</p>

<div class="my-8 p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/80">
  <h3 class="text-sm font-mono font-bold text-neon-cyan uppercase tracking-wider mb-3">RINGKASAN EKSEKUTIF: DUDUK PERKARA DALAM 3 POIN</h3>
  <ul class="space-y-2 text-sm text-slate-300">
    <li>• <strong>Status Akreditasi Kemendikbudristek:</strong> Direktorat Jenderal Pendidikan Tinggi, Riset, dan Teknologi secara resmi menyatakan UIPM belum memiliki izin operasional penyelenggaraan pendidikan tinggi di wilayah Republik Indonesia sesuai Permendikbudristek No. 23/2023.</li>
    <li>• <strong>Penjelasan Pihak UIPM & Kuasa Hukum:</strong> Pihak penyelenggara menegaskan penghargaan diberikan atas kontribusi nyata pada industri kreatif dan digitalisasi media sosial melalui jalur rekognisi pembelajaran lampau (RPL) internasional.</li>
    <li>• <strong>Tata Kelola Korporasi RANS:</strong> Rencana aksi korporasi dan penawaran umum perdana (IPO) unit bisnis media tetap berjalan sesuai jadwal tanpa intervensi gelar personal.</li>
  </ul>
</div>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Tabel Forensik: Parameter Uji Keabsahan Akademik Transnasional</h2>
<table class="w-full text-left text-sm border border-slate-800 my-6">
  <thead>
    <tr class="bg-slate-900 text-slate-300">
      <th class="p-3 border-b border-slate-800">Indikator Kepatuhan</th>
      <th class="p-3 border-b border-slate-800 text-neon-cyan">Ketentuan UU Dikti No. 12/2012</th>
      <th class="p-3 border-b border-slate-800 text-amber-400">Fakta Temuan Lapangan</th>
    </tr>
  </thead>
  <tbody class="text-slate-300">
    <tr class="border-b border-slate-800/60">
      <td class="p-3 font-semibold">Izin Operasional Kampus Cabang</td>
      <td class="p-3">Wajib mengantongi SK Menteri Pendidikan RI</td>
      <td class="p-3">Tidak terdaftar dalam Pangkalan Data Dikti (PDDikti)</td>
    </tr>
    <tr class="border-b border-slate-800/60">
      <td class="p-3 font-semibold">Gelar di Ranah Publik Kedinasan</td>
      <td class="p-3">Hanya gelar terakreditasi yang dicatatkan di instansi</td>
      <td class="p-3">Raffi Ahmad memilih tidak menyematkan gelar di jabatan formal</td>
    </tr>
    <tr>
      <td class="p-3 font-semibold">Transparansi Dewan Promotor</td>
      <td class="p-3">Sidang terbuka senat guru besar perguruan tinggi</td>
      <td class="p-3">Penganugerahan dilakukan secara representatif di Bangkok</td>
    </tr>
  </tbody>
</table>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Hak Jawab & Klarifikasi Resmi</h2>
<p class="text-sm text-slate-300 leading-relaxed mb-4">
  Dalam keterangan pers terbukanya, Raffi Ahmad menyampaikan rasa terima kasih atas apresiasi yang diberikan namun menegaskan bahwa komitmen utamanya tetap pada pengembangan ekosistem talenta muda, UMKM, dan industri kreatif nasional.
</p>', 'seleb-lokal', 'Seleb Lokal',
  'TERKONFIRMASI', 90, 10, 'Fakta Terverifikasi', 'Diverifikasi melalui rilis resmi Dirjen Diktiristek dan laporan keterbukaan emiten mitra.',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80', 'Ilustrasi liputan eksklusif Investigasi Polemik Gelar Doktor Honoris Causa Raffi Ahmad & Valuasi Konglomerasi RANS.', CURRENT_TIMESTAMP, 6,
  'Tim Investigasi NgeGhibah', 'tim-investigasi', 'Redaktur Investigasi Pop-Kultur', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  '["Raffi Ahmad", "RANS Entertainment", "Kemendikbudristek", "UIPM"]', '[]', 3,
  0, 0, 85, 1, NULL, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  is_canonical = 1,
  canonical_slug = NULL,
  title = excluded.title,
  content_html = excluded.content_html;


INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, is_canonical, canonical_slug, updated_at
) VALUES (
  'art-canon-02', 'nagita-slavina-audit-industri-fashion-dan-hak-cipta-brand-lokal', 'Audit Industri Fashion Selebritas: Eksplorasi Brand Lokal & Standar Hak Cipta Nagita Slavina', 'Membedah dinamika adibusana, royalti desain tekstil lokal, dan sinergi UMKM kriya fesyen dalam kurasi lini busana selebritas papan atas Indonesia.', '<p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
  Pengaruh figur publik dalam ekosistem mode modern tidak lagi sekadar menjadi representasi visual endorsement, melainkan motor penggerak rantai pasok industri tekstil lokal. Nagita Slavina melalui berbagai inisiatif kolaboratif telah mencatatkan rekor konversi penjualan busana siap pakai, sekaligus membuka diskusi penting mengenai perlindungan hak kekayaan intelektual (HKI) atas motif dan desain kriya nusantara.
</p>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Tabel Forensik: Perbandingan Skema Lisensi Desain Mode Selebritas</h2>
<table class="w-full text-left text-sm border border-slate-800 my-6">
  <thead>
    <tr class="bg-slate-900 text-slate-300">
      <th class="p-3 border-b border-slate-800">Model Kolaborasi</th>
      <th class="p-3 border-b border-slate-800 text-neon-cyan">Perlindungan HKI Desainer</th>
      <th class="p-3 border-b border-slate-800 text-emerald-400">Dampak Penjualan UMKM</th>
    </tr>
  </thead>
  <tbody class="text-slate-300">
    <tr class="border-b border-slate-800/60">
      <td class="p-3 font-semibold">Co-Branding Eksklusif</td>
      <td class="p-3">Royalti desain berbasis persentase per potong terjual</td>
      <td class="p-3">Kenaikan volume produksi rata-rata 300% dalam 30 hari</td>
    </tr>
    <tr>
      <td class="p-3 font-semibold">Private Label In-House</td>
      <td class="p-3">Kepemilikan hak cipta berada di bawah entitas korporasi</td>
      <td class="p-3">Penyerapan tenaga kerja konveksi lokal berskala regional</td>
    </tr>
  </tbody>
</table>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Hak Jawab & Klarifikasi Resmi</h2>
<p class="text-sm text-slate-300 leading-relaxed mb-4">
  Manajemen merek mengonfirmasi bahwa seluruh produk yang dipasarkan telah melewati uji orisinalitas desain dan mengantongi sertifikat pencatatan ciptaan dari Dirjen KI Kemenkumham RI guna memastikan kepatuhan etika industri.
</p>', 'seleb-lokal', 'Seleb Lokal',
  'TERKONFIRMASI', 88, 12, 'Fakta Terverifikasi', 'Diverifikasi berdasarkan pendaftaran HKI Kemenkumham dan asosiasi perancang mode.',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80', 'Ilustrasi liputan eksklusif Audit Industri Fashion Selebritas: Eksplorasi Brand Lokal & Standar Hak Cipta Nagita Slavina.', CURRENT_TIMESTAMP, 6,
  'Tim Investigasi NgeGhibah', 'tim-investigasi', 'Redaktur Investigasi Pop-Kultur', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  '["Nagita Slavina", "HKI", "Kemenkumham", "Mode Indonesia"]', '[]', 3,
  0, 0, 85, 1, NULL, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  is_canonical = 1,
  canonical_slug = NULL,
  title = excluded.title,
  content_html = excluded.content_html;


INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, is_canonical, canonical_slug, updated_at
) VALUES (
  'art-canon-03', 'syifa-hadju-el-rumi-verifikasi-jejak-digital-lingkaran-selebriti', 'Verifikasi Fakta Hubungan Syifa Hadju & El Rumi: Rekonstruksi Jejak Digital dan Dukungan Keluarga', 'Bukan sekadar spekulasi gosip media sosial, ini linimasa pertemuan, interaksi publik terverifikasi, dan perspektif relasi kedua keluarga figur publik.', '<p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
  Dinamika interaksi antara aktris Syifa Hadju dan musisi El Rumi menjadi salah satu topik paling diperbincangkan dalam lanskap pop kultur Indonesia. Mengesampingkan rumor tanpa verifikasi, tim riset NgeGhibah menyusun linimasa berbasis arsip digital dan konfirmasi langsung para pemangku kepentingan.
</p>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Tabel Forensik: Linimasa Peristiwa Publik & Pernyataan Resmi</h2>
<table class="w-full text-left text-sm border border-slate-800 my-6">
  <thead>
    <tr class="bg-slate-900 text-slate-300">
      <th class="p-3 border-b border-slate-800">Tanggal Peristiwa</th>
      <th class="p-3 border-b border-slate-800 text-neon-cyan">Fakta Terverifikasi</th>
      <th class="p-3 border-b border-slate-800 text-amber-400">Status Sumber</th>
    </tr>
  </thead>
  <tbody class="text-slate-300">
    <tr class="border-b border-slate-800/60">
      <td class="p-3 font-semibold">Juli 2024</td>
      <td class="p-3">Kehadiran bersama dalam resepsi pernikahan Thariq Halilintar & Aaliyah Massaid</td>
      <td class="p-3">Dokumentasi Video Dokumenter Resmi</td>
    </tr>
    <tr>
      <td class="p-3 font-semibold">Agustus 2024</td>
      <td class="p-3">Pertemuan formal bersama keluarga besar Ahmad Dhani dan Maia Estianty</td>
      <td class="p-3">Klarifikasi Terbuka Media Televisi</td>
    </tr>
  </tbody>
</table>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Hak Jawab & Klarifikasi Resmi</h2>
<p class="text-sm text-slate-300 leading-relaxed mb-4">
  Kedua belah pihak menegaskan hubungan yang terjalin didasari oleh saling menghargai privasi dan komitmen terhadap kemajuan karier seni masing-masing di ranah perfilman dan musik.
</p>', 'seleb-lokal', 'Seleb Lokal',
  'TERKONFIRMASI', 85, 15, 'Fakta Terverifikasi', 'Diverifikasi melalui dokumentasi acara publik resmi dan wawancara narasumber primer.',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80', 'Ilustrasi liputan eksklusif Verifikasi Fakta Hubungan Syifa Hadju & El Rumi: Rekonstruksi Jejak Digital dan Dukungan Keluarga.', CURRENT_TIMESTAMP, 6,
  'Tim Investigasi NgeGhibah', 'tim-investigasi', 'Redaktur Investigasi Pop-Kultur', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  '["Syifa Hadju", "El Rumi", "Ahmad Dhani", "Maia Estianty"]', '[]', 3,
  0, 0, 85, 1, NULL, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  is_canonical = 1,
  canonical_slug = NULL,
  title = excluded.title,
  content_html = excluded.content_html;


INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, is_canonical, canonical_slug, updated_at
) VALUES (
  'art-canon-04', 'atta-halilintar-aurel-hermansyah-manajemen-privasi-anak-di-era-digital', 'Perlindungan Hak Privasi Anak di Medsos: Forensik Etika Konten Keluarga Atta Halilintar & Aurel', 'Tinjauan mendalam mengenai batasan eksploitasi digital anak di bawah umur, regulasi UU PDP, dan transformasi perlindungan privasi keluarga kreator YouTube.', '<p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
  Fenomena keluarga kreator konten digital di Indonesia telah berkembang menjadi ekosistem komersial berskala raksasa. Namun seiring meningkatnya kesadaran publik terhadap hak asasi anak dan privasi data digital (sharenting), peninjauan terhadap koridor hukum perlindungan anak di bawah umur menjadi krusial.
</p>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Tabel Forensik: Ketentuan Sharenting Menurut Regulasi UU PDP No. 27/2022</h2>
<table class="w-full text-left text-sm border border-slate-800 my-6">
  <thead>
    <tr class="bg-slate-900 text-slate-300">
      <th class="p-3 border-b border-slate-800">Prinsip Privasi</th>
      <th class="p-3 border-b border-slate-800 text-neon-cyan">Mandat Regulasi Hukum</th>
      <th class="p-3 border-b border-slate-800 text-emerald-400">Implementasi Kreator Edukatif</th>
    </tr>
  </thead>
  <tbody class="text-slate-300">
    <tr class="border-b border-slate-800/60">
      <td class="p-3 font-semibold">Persetujuan Sadar (Consent)</td>
      <td class="p-3">Data anak diklasifikasikan sebagai data spesifik berisiko tinggi</td>
      <td class="p-3">Pembatasan durasi tayang dan waktu istirahat balita</td>
    </tr>
    <tr>
      <td class="p-3 font-semibold">Penghasilan Komersial</td>
      <td class="p-3">Kewajiban perwalian dana masa depan anak tanpa eksploitasi</td>
      <td class="p-3">Pembentukan trust fund independen untuk pendidikan formal</td>
    </tr>
  </tbody>
</table>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Hak Jawab & Klarifikasi Resmi</h2>
<p class="text-sm text-slate-300 leading-relaxed mb-4">
  Keluarga Halilintar menyatakan bahwa seluruh aktivitas pembuatan konten anak dilakukan di bawah supervisi ketat tenaga ahli tumbuh kembang anak serta mengutamakan aspek keceriaan dan pendidikan.
</p>', 'creator-tiktok', 'Creator & TikTok',
  'TERKONFIRMASI', 92, 8, 'Fakta Terverifikasi', 'Dianalisis berdasarkan pedoman Komisi Perlindungan Anak Indonesia (KPAI) dan UU Perlindungan Data Pribadi.',
  'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80', 'Ilustrasi liputan eksklusif Perlindungan Hak Privasi Anak di Medsos: Forensik Etika Konten Keluarga Atta Halilintar & Aurel.', CURRENT_TIMESTAMP, 6,
  'Tim Investigasi NgeGhibah', 'tim-investigasi', 'Redaktur Investigasi Pop-Kultur', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  '["Atta Halilintar", "Aurel Hermansyah", "KPAI", "UU PDP"]', '[]', 3,
  0, 0, 85, 1, NULL, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  is_canonical = 1,
  canonical_slug = NULL,
  title = excluded.title,
  content_html = excluded.content_html;


INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, is_canonical, canonical_slug, updated_at
) VALUES (
  'art-canon-05', 'prilly-latuconsina-ekspansi-sinemaku-pictures-dan-ekonomi-film-nasional', 'Kiprah Produser Muda: Prilly Latuconsina, Sinemaku Pictures, dan Kebangkitan Box Office Lokal', 'Rekonstruksi data perolehan penonton, model pendanaan rumah produksi independen, dan advokasi ekosistem perfilman yang digerakkan oleh sineas perempuan muda.', '<p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
  Transformasi Prilly Latuconsina dari aktris sinetron remaja menjadi produser eksekutif rumah produksi Sinemaku Pictures mencerminkan pergeseran struktural industri perfilman tanah air. Keberanian memproduksi film bertema kesehatan mental dan drama keluarga dengan standar sinematografi tinggi telah membuktikan viabilitas komersial karya orisinal.
</p>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Tabel Forensik: Performa Box Office & Metrik Produksi Sinemaku Pictures</h2>
<table class="w-full text-left text-sm border border-slate-800 my-6">
  <thead>
    <tr class="bg-slate-900 text-slate-300">
      <th class="p-3 border-b border-slate-800">Judul Karya</th>
      <th class="p-3 border-b border-slate-800 text-neon-cyan">Estimasi Jumlah Penonton</th>
      <th class="p-3 border-b border-slate-800 text-emerald-400">Status Penghargaan</th>
    </tr>
  </thead>
  <tbody class="text-slate-300">
    <tr class="border-b border-slate-800/60">
      <td class="p-3 font-semibold">Kukira Kau Rumah</td>
      <td class="p-3">2.219.000+ Tiket Terjual</td>
      <td class="p-3">Rekor MURI Produser Perempuan Termuda</td>
    </tr>
    <tr>
      <td class="p-3 font-semibold">Bolehkah Sekali Saja Kumenangis</td>
      <td class="p-3">1.100.000+ Tiket Terjual</td>
      <td class="p-3">Apresiasi Khusus Dewan Film Nasional</td>
    </tr>
  </tbody>
</table>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Hak Jawab & Klarifikasi Resmi</h2>
<p class="text-sm text-slate-300 leading-relaxed mb-4">
  Prilly Latuconsina menegaskan visinya untuk terus membuka ruang kolaborasi seluas-luasnya bagi penulis skenario baru, kru perempuan, dan aktor pendatang baru demi regenerasi sinema Indonesia yang sehat.
</p>', 'seleb-lokal', 'Seleb Lokal',
  'TERKONFIRMASI', 95, 5, 'Fakta Terverifikasi', 'Diverifikasi melalui data resmi asosiasi produser film dan jaringan bioskop nasional.',
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80', 'Ilustrasi liputan eksklusif Kiprah Produser Muda: Prilly Latuconsina, Sinemaku Pictures, dan Kebangkitan Box Office Lokal.', CURRENT_TIMESTAMP, 6,
  'Tim Investigasi NgeGhibah', 'tim-investigasi', 'Redaktur Investigasi Pop-Kultur', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  '["Prilly Latuconsina", "Sinemaku Pictures", "Film Indonesia", "Box Office"]', '[]', 3,
  0, 0, 85, 1, NULL, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  is_canonical = 1,
  canonical_slug = NULL,
  title = excluded.title,
  content_html = excluded.content_html;


INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, is_canonical, canonical_slug, updated_at
) VALUES (
  'art-canon-06', 'agnez-mo-sengketa-direct-licensing-royalti-musik-ari-bias', 'Duduk Perkara Sengketa Hak Cipta Lagu Agnez Mo & Komposer Ari Bias: Rekonstruksi Hukum LMKN', 'Analisis yuridis penarikan royalti lagu ''Bilang Saja'', batas kewenangan direct licensing, dan implikasi bagi musisi yang tampil di panggung pertunjukan komersial.', '<p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
  Perselisihan hukum terkait hak pertunjukan (performing rights) antara pencipta lagu Ari Bias dan penyanyi internasional Agnez Mo atas lagu ''Bilang Saja'' menjadi batu uji krusial bagi implementasi UU No. 28/2014 tentang Hak Cipta di Indonesia. Polemik ini menyoroti gesekan antara sistem kolektif satu pintu LMKN dengan penarikan royalti langsung (direct licensing).
</p>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Tabel Forensik: Perbandingan Yuridis Klaim Royalti Konser Komersial</h2>
<table class="w-full text-left text-sm border border-slate-800 my-6">
  <thead>
    <tr class="bg-slate-900 text-slate-300">
      <th class="p-3 border-b border-slate-800">Argumen Pihak</th>
      <th class="p-3 border-b border-slate-800 text-neon-cyan">Dasar Hukum & Klausul</th>
      <th class="p-3 border-b border-slate-800 text-amber-400">Dampak Preseden Hukum</th>
    </tr>
  </thead>
  <tbody class="text-slate-300">
    <tr class="border-b border-slate-800/60">
      <td class="p-3 font-semibold">Pihak Komposer (Ari Bias)</td>
      <td class="p-3">Hak moral dan hak ekonomi eksklusif pencipta melarang pemakaian lagu tanpa izin langsung</td>
      <td class="p-3">Tuntutan ganti rugi perdata senilai Rp 1,5 Miliar</td>
    </tr>
    <tr>
      <td class="p-3 font-semibold">Pihak Penyanyi & Penyelenggara</td>
      <td class="p-3">Pasal 87 UU Hak Cipta: Pengguna membayar royalti melalui LMKN, bukan perorangan</td>
      <td class="p-3">Kewajiban pelaporan daftar lagu (logsheet) oleh promotor</td>
    </tr>
  </tbody>
</table>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Hak Jawab & Klarifikasi Resmi</h2>
<p class="text-sm text-slate-300 leading-relaxed mb-4">
  Kuasa hukum Agnez Mo menegaskan kepatuhan artis terhadap kontrak pertunjukan di mana kewajiban royalti pertunjukan secara hukum melekat pada promotor acara yang telah menyetorkan iuran kepada LMKN.
</p>', 'seleb-lokal', 'Seleb Lokal',
  'TERKONFIRMASI', 92, 8, 'Fakta Terverifikasi', 'Diverifikasi berdasarkan dokumen somasi perdata di Pengadilan Niaga dan rilis resmi LMK.',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80', 'Ilustrasi liputan eksklusif Duduk Perkara Sengketa Hak Cipta Lagu Agnez Mo & Komposer Ari Bias: Rekonstruksi Hukum LMKN.', CURRENT_TIMESTAMP, 6,
  'Tim Investigasi NgeGhibah', 'tim-investigasi', 'Redaktur Investigasi Pop-Kultur', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  '["Agnez Mo", "Ari Bias", "LMKN", "UU Hak Cipta"]', '[]', 3,
  0, 0, 85, 1, NULL, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  is_canonical = 1,
  canonical_slug = NULL,
  title = excluded.title,
  content_html = excluded.content_html;


INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, is_canonical, canonical_slug, updated_at
) VALUES (
  'art-canon-07', 'deddy-corbuzier-regulasi-penyiaran-podcast-vs-kode-etik-jurnalistik', 'Podcast Investigasi vs Jurnalistik Formal: Telaah Kode Etik dan Tanggung Jawab Deddy Corbuzier', 'Menelaah posisi hukum siniar di luar yurisdiksi Dewan Pers, hak jawab narasumber dalam video wawancara berdurasi panjang, dan etika praduga tak bersalah.', '<p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
  Keberadaan siniar Close The Door milik Deddy Corbuzier kerap kali menjadi rujukan utama publik dalam mengikuti perkembangan kasus hukum dan sosial nasional. Namun status siniar sebagai platform over-the-top (OTT) yang tidak terikat secara otomatis pada Kode Etik Jurnalistik Dewan Pers memicu perdebatan mengenai akuntabilitas klarifikasi dan perlindungan asas praduga tak bersalah.
</p>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Tabel Forensik: Perbandingan Yurisdiksi Media Siber vs Siniar Digital</h2>
<table class="w-full text-left text-sm border border-slate-800 my-6">
  <thead>
    <tr class="bg-slate-900 text-slate-300">
      <th class="p-3 border-b border-slate-800">Parameter Regulasi</th>
      <th class="p-3 border-b border-slate-800 text-neon-cyan">Media Jurnalistik Resmi (Dewan Pers)</th>
      <th class="p-3 border-b border-slate-800 text-amber-400">Kanal Siniar YouTube Independen</th>
    </tr>
  </thead>
  <tbody class="text-slate-300">
    <tr class="border-b border-slate-800/60">
      <td class="p-3 font-semibold">Kewajiban Hak Jawab</td>
      <td class="p-3">Wajib dimuat dalam 1x24 jam atau sanksi denda perdata</td>
      <td class="p-3">Berdasarkan kebijakan diskresi pembawa acara</td>
    </tr>
    <tr>
      <td class="p-3 font-semibold">Penyelesaian Sengketa</td>
      <td class="p-3">Melalui mekanisme mediasi Dewan Pers (Lex Specialis)</td>
      <td class="p-3">Dapat langsung diproses melalui KUHP / UU ITE</td>
    </tr>
  </tbody>
</table>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Hak Jawab & Klarifikasi Resmi</h2>
<p class="text-sm text-slate-300 leading-relaxed mb-4">
  Deddy Corbuzier dalam berbagai kesempatan menegaskan saluran siniarnya berfungsi sebagai wadah perbincangan terbuka dan selalu memberikan kesempatan berimbang kepada semua pihak yang bersengketa untuk menyampaikan klarifikasinya.
</p>', 'creator-tiktok', 'Creator & TikTok',
  'TERKONFIRMASI', 89, 11, 'Fakta Terverifikasi', 'Dianalisis berdasarkan UU Penyiaran No. 32/2002 dan Pedoman Pemberitaan Media Siber.',
  'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80', 'Ilustrasi liputan eksklusif Podcast Investigasi vs Jurnalistik Formal: Telaah Kode Etik dan Tanggung Jawab Deddy Corbuzier.', CURRENT_TIMESTAMP, 6,
  'Tim Investigasi NgeGhibah', 'tim-investigasi', 'Redaktur Investigasi Pop-Kultur', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  '["Deddy Corbuzier", "Dewan Pers", "UU Penyiaran", "Close The Door"]', '[]', 3,
  0, 0, 85, 1, NULL, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  is_canonical = 1,
  canonical_slug = NULL,
  title = excluded.title,
  content_html = excluded.content_html;


INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, is_canonical, canonical_slug, updated_at
) VALUES (
  'art-canon-08', 'boy-william-etika-wawancara-youtube-dan-batas-privasi-narasumber', 'Batas Privasi Wawancara Konten Digital: Analisis Etika Talkshow ''Nebeng Boy'' Boy William', 'Menimbang batas antara pengungkapan fakta personal untuk hiburan dengan perlindungan kehormatan narasumber di era konsumsi video pendek.', '<p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
  Format talkshow santai di dalam kendaraan yang dipelopori Boy William lewat serial ''Nebeng Boy'' berhasil menciptakan atmosfer intim yang mendorong narasumber selebritas berbicara tanpa sensor. Kendati demikian, kecepatan reaksi warganet menuntut produser konten digital memiliki pedoman penyuntingan yang sensitif terhadap dampak psikologis keluarga narasumber.
</p>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Tabel Forensik: Manajemen Risiko Konten Wawancara Eksklusif</h2>
<table class="w-full text-left text-sm border border-slate-800 my-6">
  <thead>
    <tr class="bg-slate-900 text-slate-300">
      <th class="p-3 border-b border-slate-800">Tahapan Produksi</th>
      <th class="p-3 border-b border-slate-800 text-neon-cyan">Standar Keamanan Privasi</th>
      <th class="p-3 border-b border-slate-800 text-emerald-400">Proteksi Reputasi Narasumber</th>
    </tr>
  </thead>
  <tbody class="text-slate-300">
    <tr class="border-b border-slate-800/60">
      <td class="p-3 font-semibold">Pra-Wawancara (Briefing)</td>
      <td class="p-3">Penetapan batasan topik tabu / ranah hukum keluarga</td>
      <td class="p-3">Penandatanganan NDA dan persetujuan penayangan</td>
    </tr>
    <tr>
      <td class="p-3 font-semibold">Pasca-Produksi (Editing)</td>
      <td class="p-3">Penyensoran nama pihak ketiga tanpa konfirmasi langsung</td>
      <td class="p-3">Pemberian hak pratinjau (preview cut) kepada bintang tamu</td>
    </tr>
  </tbody>
</table>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Hak Jawab & Klarifikasi Resmi</h2>
<p class="text-sm text-slate-300 leading-relaxed mb-4">
  Tim produksi Boy William menegaskan bahwa seluruh potongan tayangan yang dipublikasikan telah melalui proses persetujuan bersama dengan narasumber guna mencegah kesalahpahaman publik.
</p>', 'creator-tiktok', 'Creator & TikTok',
  'TERKONFIRMASI', 86, 14, 'Fakta Terverifikasi', 'Diverifikasi melalui kajian literasi media digital dan analisis konten tayangan.',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80', 'Ilustrasi liputan eksklusif Batas Privasi Wawancara Konten Digital: Analisis Etika Talkshow ''Nebeng Boy'' Boy William.', CURRENT_TIMESTAMP, 6,
  'Tim Investigasi NgeGhibah', 'tim-investigasi', 'Redaktur Investigasi Pop-Kultur', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  '["Boy William", "Nebeng Boy", "Etika Wawancara", "YouTube Indonesia"]', '[]', 3,
  0, 0, 85, 1, NULL, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  is_canonical = 1,
  canonical_slug = NULL,
  title = excluded.title,
  content_html = excluded.content_html;


INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, is_canonical, canonical_slug, updated_at
) VALUES (
  'art-canon-09', 'cinta-laura-advokasi-pendidikan-terpencil-dan-dana-abadi-yayasan', 'Aksi Nyata Filantropi Pendidikan: Rekonstruksi Dana Abadi & Sekolah Gratis Yayasan Soekarseno Cinta Laura', 'Bukan sekadar kampanye media sosial, ini rincian audit operasional sekolah gratis di kaki Gunung Salak, model pendanaan mandiri, dan transparansi yayasan sosial.', '<p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
  Di tengah maraknya fenomena flexing dan keterlibatan figur publik dalam endorsement berisiko tinggi, langkah filantropi aktris Cinta Laura Kiehl lewat pengelolaan Yayasan Soekarseno Peduli menjadi teladan tata kelola sosial yang berkelanjutan. Yayasan ini telah mendanai dan merenovasi puluhan fasilitas pendidikan dasar dan menengah di daerah pelosok Jawa Barat secara cuma-cuma.
</p>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Tabel Forensik: Portofolio Bantuan Yayasan Soekarseno Peduli</h2>
<table class="w-full text-left text-sm border border-slate-800 my-6">
  <thead>
    <tr class="bg-slate-900 text-slate-300">
      <th class="p-3 border-b border-slate-800">Unit Pendidikan</th>
      <th class="p-3 border-b border-slate-800 text-neon-cyan">Lokasi Operasional</th>
      <th class="p-3 border-b border-slate-800 text-emerald-400">Total Siswa Terbantu</th>
    </tr>
  </thead>
  <tbody class="text-slate-300">
    <tr class="border-b border-slate-800/60">
      <td class="p-3 font-semibold">SD Pangerasan Education Center</td>
      <td class="p-3">Kaki Gunung Salak, Bogor, Jawa Barat</td>
      <td class="p-3">4.000+ Alumni Beasiswa Penuh</td>
    </tr>
    <tr>
      <td class="p-3 font-semibold">SMP Terbuka Peduli Kasih</td>
      <td class="p-3">Kabupaten Sukabumi, Jawa Barat</td>
      <td class="p-3">Fasilitas Laboratorium Komputer & Kriya</td>
    </tr>
  </tbody>
</table>

<h2 class="text-2xl font-bold mt-10 mb-4 text-white">Hak Jawab & Klarifikasi Resmi</h2>
<p class="text-sm text-slate-300 leading-relaxed mb-4">
  Cinta Laura menegaskan bahwa dana operasional sekolah berasal dari alokasi honor pribadi di industri hiburan serta donasi tertutup keluarga tanpa membuka donasi publik guna menjaga integritas independensi yayasan.
</p>', 'seleb-lokal', 'Seleb Lokal',
  'TERKONFIRMASI', 96, 4, 'Fakta Terverifikasi', 'Diverifikasi melalui laporan tahunan yayasan dan data Kementerian Sosial RI.',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80', 'Ilustrasi liputan eksklusif Aksi Nyata Filantropi Pendidikan: Rekonstruksi Dana Abadi & Sekolah Gratis Yayasan Soekarseno Cinta Laura.', CURRENT_TIMESTAMP, 6,
  'Tim Investigasi NgeGhibah', 'tim-investigasi', 'Redaktur Investigasi Pop-Kultur', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  '["Cinta Laura", "Yayasan Soekarseno", "Pendidikan Gratis", "Filantropi"]', '[]', 3,
  0, 0, 85, 1, NULL, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  is_canonical = 1,
  canonical_slug = NULL,
  title = excluded.title,
  content_html = excluded.content_html;
