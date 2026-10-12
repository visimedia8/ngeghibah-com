-- Seed 8 Thick Articles into Cloudflare D1

INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, updated_at
) VALUES (
  'art-1', 'duduk-perkara-royalti-musik-musisi-vs-promotor-konser', 'Duduk Perkara Polemik Royalti Musik 2026: Kronologi Lengkap & Jejak Digital Gugatan LMKN', 'Bukan sekadar heboh di media sosial, ini alur kronologi perseteruan royalti hak cipta antara musisi senior, asosiasi promotor konser, dan regulasi LMKN yang memicu perdebatan sengit.', '
      <p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
        Polemik royalti hak cipta musik di Indonesia memasuki babak paling krusial sepanjang sejarah industri hiburan nasional. Bukan sekadar drama perselisihan personal di panggung media sosial, perseteruan antara musisi pencipta lagu, promotor festival musik, dan Lembaga Manajemen Kolektif Nasional (LMKN) menyangkut sirkulasi ekonomi bernilai ratusan miliar rupiah serta kepastian hukum ekosistem konser pasca-pandemi.
      </p>
      
      <div class="my-8 p-5 sm:p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/80">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-cyan mb-3 flex items-center gap-2">
          <span>RINGKASAN EKSEKUTIF: DUDUK PERKARA DALAM 3 POIN UTAMA</span>
        </h3>
        <ul class="space-y-2.5 text-xs sm:text-sm text-slate-300">
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Akar Masalah:</strong> Ketidakpuasan pencipta lagu legendaris atas skema distribusi royalti satu pintu LMKN yang dinilai lambat, tidak transparan, dan memotong biaya operasional hingga 20-30% tanpa rincian audit lagu per pertunjukan.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Dilema Promotor:</strong> Asosiasi Promotor Musik Indonesia (APMI) menghadapi risiko beban ganda (<em>double taxation</em>): kewajiban membayar 2% dari total penjualan tiket ke LMKN sekaligus tuntutan <em>direct licensing</em> langsung dari musisi pemilik lagu.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Status Verifikasi Hukum:</strong> Berdasarkan UU Hak Cipta No. 28/2014 Pasal 87 dan PP No. 56/2021, penarikan royalti performing rights secara legal wajib melalui LMKN, namun celah regulasi memicu somasi perdata di Pengadilan Niaga.</span>
          </li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Tabel Forensik: Komparasi 3 Skema Royalti Musik di Indonesia</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Untuk memahami mengapa perselisihan ini memanas, tim jurnalisme investigasi NgeGhibah membedah tiga mekanisme penarikan royalti yang tengah diperdebatkan di meja negosiasi:
      </p>

      <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-deep/60 my-6">
        <table class="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-slate-800 bg-velvet/80 text-[11px] font-mono uppercase text-slate-400">
              <th class="py-3 px-4 font-bold">Parameter Skema</th>
              <th class="py-3 px-4 font-bold text-neon-cyan">Sistem Satu Pintu LMKN</th>
              <th class="py-3 px-4 font-bold text-neon-pink">Direct Licensing (Langsung)</th>
              <th class="py-3 px-4 font-bold text-emerald-400">Model Digital SILM (Target Reformasi)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/80 font-sans">
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Dasar Regulasi</td>
              <td class="py-3 px-4 text-slate-200">PP No. 56 Tahun 2021 & UU No. 28/2014</td>
              <td class="py-3 px-4 text-slate-200">Perjanjian Keperdataan (KUHPerdata Pasal 1338)</td>
              <td class="py-3 px-4 text-slate-200">Rancangan Revisi UU Hak Cipta & SILM DJKI</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Tarif Pembayaran Konser</td>
              <td class="py-3 px-4 text-slate-200 font-mono">2% dari Gross Hasil Penjualan Tiket</td>
              <td class="py-3 px-4 text-slate-200 font-mono">Tarif Negosiasi (Rp 5jt – Rp 25jt / lagu)</td>
              <td class="py-3 px-4 text-slate-200 font-mono">Automated Micro-licensing berbasis loglist</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Waktu Distribusi Dana</td>
              <td class="py-3 px-4 text-rose-400 font-mono">6 – 12 Bulan (Siklus Audit Tahunan)</td>
              <td class="py-3 px-4 text-emerald-400 font-mono">H-1 atau Maks H+7 Pasca Konser</td>
              <td class="py-3 px-4 text-neon-cyan font-mono">Real-time (Maks 14 Hari Kerja)</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Potongan Biaya Operasional</td>
              <td class="py-3 px-4 text-slate-200">Maksimum 20% (LMKN + LMK Pengumpul)</td>
              <td class="py-3 px-4 text-slate-200">0% (Langsung ke Rekening Musisi/Penerbit)</td>
              <td class="py-3 px-4 text-slate-200">Estimasi 5-8% (Biaya Pemeliharaan Server Cloud)</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Tantangan Eksekusi</td>
              <td class="py-3 px-4 text-slate-400">Database lagu belum tersinkronisasi penuh</td>
              <td class="py-3 px-4 text-slate-400">Promotor kerepotan melacak ribuan pencipta lagu</td>
              <td class="py-3 px-4 text-slate-400">Infrastruktur server dan integrasi loglist venue</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Latar Belakang: Surat Somasi Tertutup yang Bocor ke Forum X</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Berdasarkan penelusuran jejak digital tim investigasi NgeGhibah, polemik ini pertama kali meledak ketika lembar pertama surat somasi hukum dari kuasa hukum salah satu kelompok musisi legendaris diunggah akun insider musik di platform X pada 2 Oktober 2026. Dalam waktu kurang dari enam jam, unggahan tersebut menuai 1,2 juta tayangan dan memicu perang tagar antar-komunitas penggemar.
      </p>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Warganet awalnya menduga insiden ini hanyalah gesekan ego personal antar musisi senior dan promotor muda. Namun, investigasi berkas membuktikan bahwa somasi tersebut merupakan puncak gunung es dari frustrasi menahun atas keterlambatan pencairan dana royalti konser berskala stadion tahun anggaran 2024 dan 2025 yang hingga kini belum sepenuhnya diterima para pencipta lagu.
      </p>

      <blockquote class="border-l-4 border-neon-pink pl-5 py-3 my-6 bg-velvet/50 text-slate-300 rounded-r-2xl italic leading-relaxed">
        "Kami tidak menolak membayar hak cipta para maestro musik Indonesia. Kami sangat menghormati hak kekayaan intelektual mereka. Yang kami tolak adalah skema pembayaran ganda di mana kami sudah menyetor 2% ke LMKN, tetapi tetap disomasi dan diancam pidana oleh pencipta lagu karena LMKN belum mendistribusikan uangnya." 
        <span class="block text-xs text-neon-cyan mt-2 font-mono tracking-wider font-semibold not-italic">
          — Pernyataan resmi perwakilan Asosiasi Promotor Konser dalam Konferensi Pers di Senayan, Jakarta.
        </span>
      </blockquote>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Anatomi Masalah: Dualisme Regulasi UU No. 28/2014 & PP No. 56/2021</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Mengapa konflik ini tidak kunjung selesai? Akar hukumnya terletak pada disharmoni penafsiran antara dua instrumen hukum utama:
      </p>
      <ol class="list-decimal list-inside space-y-3 text-sm text-slate-300 leading-relaxed mb-6">
        <li>
          <strong class="text-white">Undang-Undang No. 28 Tahun 2014 tentang Hak Cipta:</strong> Mengakui hak eksklusif pencipta lagu untuk memberikan izin atau melarang pihak lain mengumumkan karyanya (Pasal 9). Pasal ini dijadikan rujukan musisi yang melarang karya mereka dibawakan oleh penyanyi atau promotor tanpa izin langsung (<em>direct license</em>).
        </li>
        <li>
          <strong class="text-white">Peraturan Pemerintah No. 56 Tahun 2021 tentang Pengelolaan Royalti Hak Cipta Lagu dan/atau Musik:</strong> Mengatur bahwa penarikan dan penghimpunan royalti untuk penggunaan layanan publik yang bersifat komersial (termasuk konser musik) dilakukan satu pintu melalui LMKN (Pasal 3). Penyelenggara yang telah membayar ke LMKN secara hukum dianggap telah memenuhi kewajibannya.
        </li>
      </ol>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Benturan inilah yang menciptakan zona abu-abu hukum (<em>legal vacuum</em>). Promotor merasa telah patuh pada PP 56/2021 dengan menyetor dana ke LMKN, namun musisi bersikukuh menggunakan hak moral dan ekonomi Pasal 9 UU Hak Cipta untuk menuntut pembayaran langsung.
      </p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Dilema Promotor: Ancaman Lonjakan Harga Tiket Konser 2026</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Dampak paling nyata bagi masyarakat penikmat musik adalah potensi lonjakan harga tiket konser (<em>ticket inflation</em>). Jika promotor dipaksa membayar skema ganda (2% ke LMKN plus biaya direct licensing per lagu ke musisi), biaya produksi konser di Indonesia diproyeksikan melonjak antara 18% hingga 25%.
      </p>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Sejumlah promotor independen telah memberi sinyal bahwa festival musik dengan tiket di bawah Rp 300.000 terancam punah jika beban royalti tidak memiliki kepastian regulasi. Pihak penyelenggara terpaksa membebankan komponen royalti ke dalam harga tiket penonton akhir (<em>consumer pass-through</em>).
      </p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Perspektif Pencipta Lagu: Kebutuhan Transparansi Audit Forensik</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Di sisi lain, tuntutan para pencipta lagu memiliki landasan keadilan ekonomi yang kuat. Banyak pencipta lagu legendaris era 80-an dan 90-an yang karyanya diputar ribuan kali di panggung festival bergengsi dengan omset miliaran rupiah, namun mereka hanya menerima royalti tahunan sebesar beberapa ratus ribu rupiah dari LMK.
      </p>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Ketiadaan sistem loglist otomatis (<em>electronic cue sheet</em>) membuat LMKN kerap menggunakan metode analog atau perkiraan rata-rata statistik dalam membagi dana royalti, bukan berdasarkan lagu riil yang secara aktual dinyanyikan di atas panggung.
      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Respon Pelaku Seni & Ekosistem Industri Kreatif</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Polemik royalti konser ini juga memicu perhatian para pelaku industri kreatif lintas disiplin. Aktor watak Reza Rahadian yang aktif dalam advokasi regulasi serikat pekerja seni menyatakan bahwa perlindungan hak kekayaan intelektual (HAKI) dan transparansi tata kelola royalti adalah pondasi mutlak bagi keberlanjutan seniman di era digital.
      </p>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Sementara di ranah festival dan komersial, para pegiat industri dan kreator konten digital seperti Rachel Vennya yang kerap bekerja sama dengan promotor konser musik dan jenama gaya hidup turut menyoroti bagaimana ketidakpastian hukum ini berpotensi mengganggu ekosistem sponsorship dan rantai nilai hiburan massal di tanah air.
      </p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Solusi & Roadmap: Jalan Tengah Digitalisasi SILM</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Kementerian Hukum dan HAM melalui Direktorat Jenderal Kekayaan Intelektual (DJKI) kini tengah mempercepat integrasi Sistem Informasi Lagu dan/atau Musik (SILM). Solusi permanen yang direkomendasikan para pakar meliputi:
      </p>
      <ul class="space-y-2 text-sm text-slate-300 leading-relaxed mb-6">
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Kewajiban Loglist Digital Venue:</strong> Setiap promotor wajib mengunggah daftar lagu (<em>setlist</em>) resmi H-3 sebelum konser melalui dashboard SILM terverifikasi.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Escrow Account Terbuka:</strong> Penampungan dana royalti 2% di rekening penampung dengan laporan mutasi yang dapat dipantau langsung oleh musisi terdaftar.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>SLA Distribusi 14 Hari Kerja:</strong> LMKN wajib menyalurkan hak royalti ke rekening musisi maksimal 14 hari kerja pasca-konser, memangkas birokrasi audit tahunan yang selama ini menjadi sumber sengketa.</span>
        </li>
      </ul>

      <div class="my-8 p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/90 space-y-4">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-pink flex items-center gap-2">
          <span>FAQ: DUDUK PERKARA POLEMIK ROYALTI MUSIK 2026</span>
        </h3>
        <div class="space-y-3 text-xs sm:text-sm">
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Siapa yang secara hukum wajib membayar royalti konser: penyanyi atau promotor?</h4>
            <p class="text-slate-300">Berdasarkan PP 56/2021 dan standar internasional performing rights, kewajiban pembayaran royalti dibebankan kepada pihak penyelenggara komersial (promotor acara), bukan kepada penyanyi atau penampil di atas panggung.</p>
          </div>
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Berapa tarif resmi royalti konser musik di Indonesia?</h4>
            <p class="text-slate-300">Keputusan Menteri Hukum dan HAM No. HKI.2.OT.03.01-02 Tahun 2016 menetapkan tarif royalti konser musik dengan tiket berbayar sebesar 2% dari hasil penjualan kotor tiket (<em>gross ticket sales</em>) ditambah 1% dari tiket gratis yang diedarkan.</p>
          </div>
          <div>
            <h4 class="font-bold text-white mb-1">Q: Mengapa musisi menuntut skema direct licensing daripada lewat LMKN?</h4>
            <p class="text-slate-300">Pencipta lagu merasa skema satu pintu LMKN lambat dalam pencairan (bisa memakan waktu berbulan-bulan) serta ketiadaan transparansi data lagu mana saja yang benar-benar menghasilkan uang royalti.</p>
          </div>
        </div>
      </div>
    ', 'seleb-lokal', 'Seleb Lokal',
  'TERKONFIRMASI', 91, 9, 'Terkonfirmasi Resmi', 'Data berbasis berkas somasi resmi, rilis pers LMKN, dan pernyataan konfirmasi kedua belah pihak.',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80', 'Ilustrasi pertunjukan musik konser di Jakarta. (Foto: Dokumentasi Panggung Pop-Kultur / Unsplash)', '2026-10-11T09:30:00Z', 7,
  'Raditya Dananjaya', 'raditya-dananjaya', 'Redaktur Investigasi Pop-Kultur', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  '["Reza Rahadian","Rachel Vennya"]', '[{"timeLabel":"02 Okt 2026 • 11:20 WIB","title":"Bocornya Draft Surat Somasi di Komunitas X","description":"Tangkapan layar lembar pertama somasi hak performing rights diunggah akun pemerhati industri musik dan mendapatkan 1.2 juta tayangan.","receiptType":"tweet","receiptQuote":"Industri festival mau dibawa ke mana kalau izin royalti ditagih per lagu tanpa ada database lagu terverifikasi?","receiptSource":"Postingan akun terverifikasi di X (ID: @insidermusik_id)"},{"timeLabel":"06 Okt 2026 • 15:45 WIB","title":"Konferensi Pers Asosiasi Promotor Jakarta","description":"Pihak promotor menolak tudingan wanprestasi dan meminta audit independen terhadap aliran dana royalti tahun anggaran 2024-2025.","receiptType":"statement","receiptQuote":"Seluruh dana deposit telah disetor ke rekening bersama notaris resmi."},{"timeLabel":"09 Okt 2026 • 18:00 WIB","title":"Rilis Klarifikasi Resmi Regulator LMKN","description":"Regulator membenarkan ada perbedaan metodologi perhitungan dan menyatakan jalur mediasi terbuka tanpa pembatalan izin festival.","receiptType":"court","receiptSource":"Surat Edaran No. 42/LMKN/X/2026 tertanggal 9 Oktober 2026"}]', 3,
  1, 1, 98, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  excerpt = excluded.excerpt,
  content_html = excluded.content_html,
  category = excluded.category,
  category_label = excluded.category_label,
  ghibah_meter_status = excluded.ghibah_meter_status,
  ghibah_meter_fact = excluded.ghibah_meter_fact,
  ghibah_meter_rumor = excluded.ghibah_meter_rumor,
  ghibah_meter_label = excluded.ghibah_meter_label,
  ghibah_meter_desc = excluded.ghibah_meter_desc,
  hero_image = excluded.hero_image,
  image_caption = excluded.image_caption,
  published_at = excluded.published_at,
  reading_time_minutes = excluded.reading_time_minutes,
  author_name = excluded.author_name,
  author_slug = excluded.author_slug,
  author_role = excluded.author_role,
  author_avatar = excluded.author_avatar,
  entities_json = excluded.entities_json,
  timeline_json = excluded.timeline_json,
  digital_receipts_count = excluded.digital_receipts_count,
  is_featured = excluded.is_featured,
  is_hero = excluded.is_hero,
  trending_score = excluded.trending_score,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, updated_at
) VALUES (
  'art-2', 'kronologi-lengkap-drama-live-tiktok-creator-fuji-an', 'Kupas Tuntas dari Jejak Digital: Alur Kronologi Klarifikasi Sesi Live TikTok Rp 1,2 Miliar', 'Bagaimana sebuah potongan rekaman live TikTok berdurasi 15 detik berubah menjadi perang narasi warganet. Ini duduk perkaranya berdasarkan jejak arsip digital tanpa bumbu sensasi.', '
      <p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
        Polemik sesi penjualan siaran langsung TikTok Shop beromset Rp 1,2 Miliar dalam tempo kurang dari dua jam yang dipandu oleh kreator konten <a href="/seleb/fuji-an" class="text-neon-cyan hover:underline font-semibold">Fuji An</a> memicu perdebatan sengit di lintas lini masa media sosial Indonesia. Isu ini bermula dari tuduhan penggunaan akun robot (<em>bot traffic</em>) untuk menggembungkan angka penonton aktif serentak (<em>concurrent viewers</em>), sebelum akhirnya terbantahkan secara tuntas melalui verifikasi forensik data log transaksi resmi perbankan dan mitra agregator e-commerce nasional.
      </p>

      <div class="my-8 p-5 sm:p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/80">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-cyan mb-3 flex items-center gap-2">
          <span>RINGKASAN EKSEKUTIF: DUDUK PERKARA DALAM 3 POIN UTAMA</span>
        </h3>
        <ul class="space-y-2.5 text-xs sm:text-sm text-slate-300">
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Akar Tuduhan Bot:</strong> Klip video 15 detik yang disebarkan akun anonim memperlihatkan lonjakan grafik penonton drastis dari 22.000 menjadi 180.000 dalam tempo 40 detik saat sesi flash sale brand kecantikan dibuka.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Bukti Forensik Server:</strong> Laporan audit teknis membuktikan bahwa lonjakan penonton terjadi akibat dorongan algoritma push traffic halaman beranda (<em>For You Page / FYP takeover</em>) berbayar resmi dan rilis voucher diskon subsidi brand, bukan rekayasa farming click.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Validitas Transaksi Keuangan:</strong> Dari total omset Rp 1,24 Miliar yang tercatat, rasio pesanan berhasil terbayar (<em>paid settlement rate</em>) mencapai 91,4%, jauh melampaui ambang batas lazim sindikat manipulasi bot yang umumnya memiliki rasio checkout fiktif di bawah 15%.</span>
          </li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Tabel Forensik: Parameter Transaksi Organik vs Bot Farms vs Server Burst</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Guna membedah kebenaran di balik angka fantastis tersebut, tim jurnalisme data NgeGhibah mengkomparasikan metrik performa siaran langsung yang dipermasalahkan dengan indikator baku integritas social commerce:
      </p>

      <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-deep/60 my-6">
        <table class="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-slate-800 bg-velvet/80 text-[11px] font-mono uppercase text-slate-400">
              <th class="py-3 px-4 font-bold">Metrik Evaluasi</th>
              <th class="py-3 px-4 font-bold text-neon-cyan">Sesi Live Fuji An (08 Okt)</th>
              <th class="py-3 px-4 font-bold text-rose-400">Pola Sindikat Bot Farms</th>
              <th class="py-3 px-4 font-bold text-emerald-400">Standar Industri E-Commerce</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/80 font-sans">
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Tingkat Retensi Tontonan (Watch Time)</td>
              <td class="py-3 px-4 text-slate-200 font-mono">4 Menit 12 Detik / User</td>
              <td class="py-3 px-4 text-rose-400 font-mono">&lt; 15 Detik (Pola Ping)</td>
              <td class="py-3 px-4 text-slate-200 font-mono">2 Menit 30 Detik</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Rasio Konversi Pembayaran Riil</td>
              <td class="py-3 px-4 text-emerald-400 font-mono">91.4% Sukses Terbayar</td>
              <td class="py-3 px-4 text-rose-400 font-mono">&lt; 8% (Mayoritas Batal COD)</td>
              <td class="py-3 px-4 text-slate-200 font-mono">65% – 80%</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Distribusi IP Address Pengunjung</td>
              <td class="py-3 px-4 text-slate-200">Tersebar di 34 Provinsi Riil</td>
              <td class="py-3 px-4 text-rose-400">Terkonsentrasi di Proxy/VPN</td>
              <td class="py-3 px-4 text-slate-200">Kluster Domestik Indonesia</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Status Gateway Pembayaran</td>
              <td class="py-3 px-4 text-emerald-400">Payment Gateway Terverifikasi BI</td>
              <td class="py-3 px-4 text-rose-400">Akun Dummy / Transaksi Nol</td>
              <td class="py-3 px-4 text-slate-200">Kliring Bank Berlisensi OJK</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Dekonstruksi Jejak Digital: Membedah Potongan Klip 15 Detik</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Fenomena misinformasi kerap bermula dari pemotongan konteks audiovisual. Pada sesi siaran menit ke-48, salah satu anggota tim produksi terdengar berseru, <em>"Naikkan sekarang, push semuanya!"</em>. Akun anonim di platform X dan Threads mengartikan kalimat tersebut sebagai instruksi aktivasi server penyuntik bot.
      </p>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Namun, berdasarkan penelusuran dokumen operasional penyiaran internal, kalimat tersebut merupakan aba-aba teknis antar-operator untuk merilis sisa kuota voucher potongan harga 50% di sistem dasbor pedagang (<em>Merchant Center</em>) serta pengaktifan kampanye <em>Traffic Spark Ads</em> yang telah didanai sponsor resmi. Keterbatasan pemahaman teknis alur operasional live commerce membuat sebagian warganet terjebak pada kesimpulan prematur.
      </p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Mitos vs Fakta Seputar Fenomena Live Commerce Top Creator</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Tingginya intensitas transaksi di ekosistem siaran langsung sering kali memicu salah kaprah di kalangan publik awam. Berikut fakta yang berhasil diverifikasi:
      </p>
      <ul class="space-y-2 text-sm text-slate-300 leading-relaxed mb-6">
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Angka miliaran rupiah langsung masuk ke rekening pribadi sang kreator konten saat siaran usai. <strong>Fakta:</strong> Nilai Rp 1,2 Miliar merupakan Gross Merchandise Value (GMV) kotor milik brand sponsor; kreator hanya menerima komisi profesional persentase (biasanya 5-15%) sesuai kontrak bisnis.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Algoritma TikTok membiarkan akun bot merajalela tanpa pemblokiran sistem. <strong>Fakta:</strong> Algoritma mitigasi bot TikTok menerapkan inspeksi Captcha dan deteksi sidik jari peramban (<em>browser fingerprinting</em>) yang secara otomatis mendiskualifikasi trafik anomali dari metrik monetisasi.</span>
        </li>
      </ul>

      <div class="my-8 p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/90 space-y-4">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-pink flex items-center gap-2">
          <span>FAQ: KRONOLOGI LENGKAP DRAMA LIVE TIKTOK FUJI AN</span>
        </h3>
        <div class="space-y-3 text-xs sm:text-sm">
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Apakah terdapat bukti penggunaan bot viewers dalam sesi live ini?</h4>
            <p class="text-slate-300">Tidak ada bukti valid. Hasil audit server dan log settlement perbankan mengonfirmasi bahwa 91.4% dari total transaksi terselesaikan secara organik oleh pembeli dengan identitas digital valid di Indonesia.</p>
          </div>
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Mengapa penonton bisa melonjak ratusan ribu dalam hitungan detik?</h4>
            <p class="text-slate-300">Lonjakan tajam terjadi akibat aktivasi fitur iklan resmi TikTok Live Push (Spark Ads) bersamaan dengan pengumuman voucher flash sale terbatas di saluran notifikasi pengikut sang kreator.</p>
          </div>
          <div>
            <h4 class="font-bold text-white mb-1">Q: Bagaimana status barang dan pengiriman pesanan pembeli?</h4>
            <p class="text-slate-300">Pihak brand sponsor dan platform logistik resmi mengonfirmasi seluruh pesanan telah diproses melalui pergudangan sentral dengan batas waktu pengiriman standar ekspedisi reguler.</p>
          </div>
        </div>
      </div>
    ', 'creator-tiktok', 'Creator & TikTok',
  'FAKTA_DIGITAL', 88, 12, 'Fakta Jejak Digital Terverifikasi', 'Data log transaksi analitik dan perbandingan rekaman utuh (bukan potongan 15 detik).',
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80', 'Ilustrasi antarmuka analitik siaran langsung media sosial. (Foto: Pop Tech Media)', '2026-10-11T08:15:00Z', 6,
  'Nabila Safitri', 'nabila-safitri', 'Editor Tren Gen Z & Social Commerce', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  '["Fuji An"]', '[{"timeLabel":"08 Okt 2026 • 20:00 WIB","title":"Sesi Live Flash Sale Dimulai","description":"Puncak interaksi mencapai 180.000 penonton serentak saat kupon utama dibuka.","receiptType":"video"},{"timeLabel":"09 Okt 2026 • 02:15 WIB","title":"Video Potongan 15 Detik Viral di FYP TikTok","description":"Muncul narasi tudingan bot view yang ditonton lebih dari 4,8 juta kali tanpa verifikasi log.","receiptType":"tweet"},{"timeLabel":"10 Okt 2026 • 13:00 WIB","title":"Pernyataan Resmi Pihak Brand Sponsor & Log Merchant","description":"Brand merilis bukti invoice log sistem server yang membuktikan transaksi riil tanpa rekayasa bot.","receiptType":"document"}]', 3,
  1, 0, 89, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  excerpt = excluded.excerpt,
  content_html = excluded.content_html,
  category = excluded.category,
  category_label = excluded.category_label,
  ghibah_meter_status = excluded.ghibah_meter_status,
  ghibah_meter_fact = excluded.ghibah_meter_fact,
  ghibah_meter_rumor = excluded.ghibah_meter_rumor,
  ghibah_meter_label = excluded.ghibah_meter_label,
  ghibah_meter_desc = excluded.ghibah_meter_desc,
  hero_image = excluded.hero_image,
  image_caption = excluded.image_caption,
  published_at = excluded.published_at,
  reading_time_minutes = excluded.reading_time_minutes,
  author_name = excluded.author_name,
  author_slug = excluded.author_slug,
  author_role = excluded.author_role,
  author_avatar = excluded.author_avatar,
  entities_json = excluded.entities_json,
  timeline_json = excluded.timeline_json,
  digital_receipts_count = excluded.digital_receipts_count,
  is_featured = excluded.is_featured,
  is_hero = excluded.is_hero,
  trending_score = excluded.trending_score,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, updated_at
) VALUES (
  'art-3', 'han-so-hee-comeback-proyek-film-hollywood-verifikasi', 'Verifikasi Fakta: Han So-hee Diisukan Gabung Waralaba Spy Hollywood, Ini Rekap Kontroversi & Tanggapan Agensi', 'Menjawab rumor liar netizen forum TheQoo dan Reddit, agensi 9Ato Entertainment akhirnya buka suara terkait tawaran peran dalam proyek internasional beranggaran besar.', '
      <p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
        Kabar mengenai potensi debut internasional aktris papan atas Korea Selatan <a href="/seleb/han-so-hee" class="text-neon-cyan hover:underline font-semibold">Han So-hee</a> dalam proyek film laga spionase beranggaran tinggi Hollywood menjadi topik hangat paling diperbincangkan di berbagai komunitas sinema global. Isu ini mencuat menyusul peredaran sejumlah foto pertemuan tertutup di Paris antara sang aktris dan jajaran produser waralaba aksi terkemuka Amerika Serikat, yang langsung memicu spekulasi luas di forum Reddit, TheQoo, dan Weibo.
      </p>

      <div class="my-8 p-5 sm:p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/80">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-cyan mb-3 flex items-center gap-2">
          <span>RINGKASAN EKSEKUTIF: DUDUK PERKARA DALAM 3 POIN UTAMA</span>
        </h3>
        <ul class="space-y-2.5 text-xs sm:text-sm text-slate-300">
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Fakta Pertemuan Paris:</strong> Pertemuan di sebuah restoran di arondisemen ke-8 Paris terverifikasi benar adanya, namun agenda tersebut merupakan jamuan relasi kerja sama duta merek rumah mode Boucheron dan perkenalan awal dengan agen talenta CAA (Creative Artists Agency).</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Status Naskah & Kontrak:</strong> Agensi 9Ato Entertainment mengonfirmasi menerima beberapa tawaran eksplorasi naskah (<em>script exploration</em>) dari studio Barat, namun belum ada penandatanganan perjanjian kerja sama (<em>deal memo</em>) resmi untuk peran utama maupun pendukung.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Kendala Komitmen Jadwal:</strong> Jadwal syuting Han So-hee untuk proyek serial drama domestik di Seoul dan kewajiban kampanye duta global membuat keterlibatan dalam produksi Hollywood berdurasi panjang memerlukan restrukturisasi kalender kerja komprehensif.</span>
          </li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Tabel Forensik: Perbandingan Alur Casting Hollywood vs K-Drama Domestik</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Untuk memberikan pemahaman utuh mengenai tahapan produksi perfilman lintas negara, tim riset hiburan NgeGhibah membandingkan tahapan casting tipikal di industri perfilman internasional:
      </p>

      <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-deep/60 my-6">
        <table class="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-slate-800 bg-velvet/80 text-[11px] font-mono uppercase text-slate-400">
              <th class="py-3 px-4 font-bold">Tahapan Seleksi</th>
              <th class="py-3 px-4 font-bold text-neon-cyan">Posisi Saat Ini (Han So-hee)</th>
              <th class="py-3 px-4 font-bold text-neon-pink">Prosedur Standar Studio Hollywood</th>
              <th class="py-3 px-4 font-bold text-emerald-400">Prosedur Produksi K-Drama</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/80 font-sans">
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Taraf Negosiasi</td>
              <td class="py-3 px-4 text-amber-400 font-mono">Penjajakan Awal (Courtesy Talks)</td>
              <td class="py-3 px-4 text-slate-200">Chemistry Read & Screen Test Formal</td>
              <td class="py-3 px-4 text-slate-200">Tawaran Langsung Berbasis Reputasi Bintang</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Klausul Visa & Serikat Kerja</td>
              <td class="py-3 px-4 text-slate-300 font-mono">Belum Diproses</td>
              <td class="py-3 px-4 text-slate-200 font-mono">Pendaftaran Wajib SAG-AFTRA & Visa O-1</td>
              <td class="py-3 px-4 text-slate-200 font-mono">Kontrak Manajemen Domestik Korea</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Kerahasiaan Peran (NDA)</td>
              <td class="py-3 px-4 text-emerald-400 font-mono">Terikat NDA Studio Awal</td>
              <td class="py-3 px-4 text-slate-200">Sanksi Denda Berat Pelanggaran Kebocoran</td>
              <td class="py-3 px-4 text-slate-200">Konfirmasi Publik Pasca Pembacaan Naskah</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Analisis Jejak Digital: Dari Forum TheQoo hingga Paparazzi Paris</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Eskalasi rumor ini berakar dari penelusuran komunitas penggemar di platform media sosial Korea Selatan. Sebuah utas di komunitas TheQoo mencatat bahwa perwakilan agensi talenta Hollywood terkemuka terlihat mendampingi tim promosi sang aktris selama rangkaian acara pekan mode internasional. Informasi ini diperkuat oleh foto paparazzi independen yang menangkap momen sang aktris berbincang akrab dengan produser waralaba aksi terkenal.
      </p>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Namun demikian, dalam ekosistem industri film global, perjumpaan semacam ini adalah hal lumrah dalam diplomasi talenta (<em>talent networking</em>). Menggeneralisasi pertemuan sosial informal sebagai bukti final penandatanganan kontrak peran merupakan lompatan logika yang belum didukung bukti hukum materiel.
      </p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Mitos vs Fakta Crossover Bintang Asia ke Hollywood</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Transisi aktor Asia ke ranah sinema Barat kerap diiringi ekspektasi tinggi yang berbenturan dengan realitas produksi:
      </p>
      <ul class="space-y-2 text-sm text-slate-300 leading-relaxed mb-6">
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Setiap tawaran naskah Hollywood pasti berujung pada peran utama berbobot setara bintang Barat. <strong>Fakta:</strong> Sebagian besar peran pengantar bagi aktor Asia kerap melalui tahapan peran laga pendukung sebelum mendapatkan peran naratif mendalam.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Diamnya pihak agensi menandakan persetujuan diam-diam (<em>tacit agreement</em>). <strong>Fakta:</strong> Studio produksi Hollywood mewajibkan klausul kerahasiaan ketat (NDA); agensi dilarang mengeluarkan konfirmasi sebelum pengumuman resmi di rilis pers perserikatan pers Amerika.</span>
        </li>
      </ul>

      <div class="my-8 p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/90 space-y-4">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-pink flex items-center gap-2">
          <span>FAQ: KABAR DEBUT HOLLYWOOD AKTRIS HAN SO-HEE</span>
        </h3>
        <div class="space-y-3 text-xs sm:text-sm">
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Apakah Han So-hee sudah resmi menandatangani kontrak film Hollywood?</h4>
            <p class="text-slate-300">Belum ada kontrak resmi yang ditandatangani. Agensi 9Ato Entertainment menegaskan bahwa saat ini pihak mereka hanya meninjau beberapa draf naskah yang masuk dalam tahap eksplorasi awal.</p>
          </div>
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Mengapa foto pertemuan Paris begitu cepat viral?</h4>
            <p class="text-slate-300">Foto tersebut beredar luas karena melibatkan produser eksekutif studio waralaba terkemuka yang kebetulan menghadiri peragaan busana yang sama di Paris.</p>
          </div>
          <div>
            <h4 class="font-bold text-white mb-1">Q: Kapan kepastian proyek film berikutnya akan diumumkan ke publik?</h4>
            <p class="text-slate-300">Konfirmasi resmi proyek film atau serial berikutnya dijadwalkan akan dirilis secara terpadu melalui saluran resmi agensi pada kuartal pertama tahun mendatang.</p>
          </div>
        </div>
      </div>
    ', 'kpop-asia', 'K-Pop & Asia',
  'MENUNGGU_TANGGAPAN', 62, 38, 'Menunggu Klarifikasi Lanjutan', 'Pertemuan terkonfirmasi nyata, namun negosiasi kontrak peran masih berstatus tahap penjajakan.',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80', 'Han So-hee menghadiri acara karpet merah promosi film. (Foto: Hallyu Press Archives)', '2026-10-10T19:40:00Z', 6,
  'Kenzo Pratama', 'kenzo-pratama', 'Spesialis Budaya Pop Asia & Hallyu', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  '["Han So-hee"]', '[{"timeLabel":"05 Okt 2026","title":"Foto Makan Malam Paris Bocor di Weibo & TheQoo","description":"Tampak sang aktris berbincang bersama produser eksekutif studio waralaba terkemuka.","receiptType":"video"},{"timeLabel":"07 Okt 2026","title":"Perdebatan Hangat di Forum Komunitas Film Internasional","description":"Warganet membedah jadwal syuting aktris yang dilaporkan memiliki jeda waktu untuk proyek luar negeri.","receiptType":"tweet"},{"timeLabel":"10 Okt 2026","title":"Klarifikasi Singkat 9Ato Entertainment","description":"Agensi menyatakan tawaran memang ada namun fokus saat ini masih pada peninjauan naskah domestik.","receiptType":"statement"}]', 3,
  1, 0, 82, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  excerpt = excluded.excerpt,
  content_html = excluded.content_html,
  category = excluded.category,
  category_label = excluded.category_label,
  ghibah_meter_status = excluded.ghibah_meter_status,
  ghibah_meter_fact = excluded.ghibah_meter_fact,
  ghibah_meter_rumor = excluded.ghibah_meter_rumor,
  ghibah_meter_label = excluded.ghibah_meter_label,
  ghibah_meter_desc = excluded.ghibah_meter_desc,
  hero_image = excluded.hero_image,
  image_caption = excluded.image_caption,
  published_at = excluded.published_at,
  reading_time_minutes = excluded.reading_time_minutes,
  author_name = excluded.author_name,
  author_slug = excluded.author_slug,
  author_role = excluded.author_role,
  author_avatar = excluded.author_avatar,
  entities_json = excluded.entities_json,
  timeline_json = excluded.timeline_json,
  digital_receipts_count = excluded.digital_receipts_count,
  is_featured = excluded.is_featured,
  is_hero = excluded.is_hero,
  trending_score = excluded.trending_score,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, updated_at
) VALUES (
  'art-4', 'zendaya-tom-holland-isu-pertunangan-dan-fakta-arsip', 'Rumor vs Bukti Nyata: Isu Pertunangan Rahasia Zendaya & Tom Holland, Ini Analisis Jejak Digital DeuxMoi', 'Kabar burung pertunangan pasangan emas Hollywood kembali membanjiri feed media sosial. Kami menyaring spekulasi liar dan menghadirkan fakta terverifikasi dari lingkaran terdekat.', '
      <p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
        Spekulasi pertunangan rahasia antara pemenang Emmy <a href="/seleb/zendaya" class="text-neon-cyan hover:underline font-semibold">Zendaya</a> dan aktor pemeran Spider-Man Tom Holland kembali meledak di jagat media sosial global menyusul unggahan akun gosip anonim DeuxMoi dan potongan gambar karpet merah festival film internasional. Isu cincin berlian melingkar di jari manis sang aktris memicu perdebatan sengit antara jutaan penggemar dan pengamat industri, sebelum fakta sebenarnya dikonfirmasi oleh lingkaran profesional terdekat sang bintang.
      </p>

      <div class="my-8 p-5 sm:p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/80">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-cyan mb-3 flex items-center gap-2">
          <span>RINGKASAN EKSEKUTIF: DUDUK PERKARA DALAM 3 POIN UTAMA</span>
        </h3>
        <ul class="space-y-2.5 text-xs sm:text-sm text-slate-300">
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Asal-Usul Narasi Cincin:</strong> Akun gosip selebritas Hollywood DeuxMoi mengunggah pesan anonim (<em>blind item</em>) mengklaim seorang aktor muda memesan cincin berlian kustom di perajin eksklusif Manhattan beberapa hari sebelum premier film di London.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Fakta Sponsorship Perhiasan:</strong> Stylist legendaris Law Roach mengonfirmasi secara resmi bahwa cincin safir-berlian berukuran besar yang dipakai Zendaya merupakan koleksi arsip pinjaman rumah perhiasan mewah Italia Bulgari dalam kapasitas Zendaya sebagai Global Brand Ambassador, bukan cincin lamaran pribadi.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Prinsip Batas Privasi Pasangan:</strong> Baik Zendaya maupun Tom Holland secara konsisten menyatakan komitmen menjaga kehidupan asmara mereka tetap berada di ruang privat, menegaskan bahwa segala pengumuman komitmen personal tidak akan pernah diekspos melalui sensasi publisitas karpet merah.</span>
          </li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Tabel Forensik: Perbandingan Perhiasan Red Carpet vs Cincin Pertunangan Personal</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Guna membedakan antara perhiasan promosi komersial dan cincin komitmen personal, tim investigasi budaya pop NgeGhibah membedah arsip logistik busana red carpet sang bintang:
      </p>

      <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-deep/60 my-6">
        <table class="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-slate-800 bg-velvet/80 text-[11px] font-mono uppercase text-slate-400">
              <th class="py-3 px-4 font-bold">Elemen Analisis</th>
              <th class="py-3 px-4 font-bold text-neon-cyan">Perhiasan Gala Premier (08 Okt)</th>
              <th class="py-3 px-4 font-bold text-neon-pink">Cincin Lamaran Konvensional</th>
              <th class="py-3 px-4 font-bold text-emerald-400">Protokol Keamanan High Jewelry</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/80 font-sans">
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Status Kepemilikan</td>
              <td class="py-3 px-4 text-slate-200">Pinjaman Arsip Maison Bulgari</td>
              <td class="py-3 px-4 text-slate-200">Hak Milik Pribadi Pengantin</td>
              <td class="py-3 px-4 text-slate-200">Wajib Kembali H+1 ke Brankas Jenewa</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Pengawalan Fisik Lokasi</td>
              <td class="py-3 px-4 text-emerald-400 font-mono">2 Bodyguard Bersenjata Brand</td>
              <td class="py-3 px-4 text-slate-300 font-mono">Tanpa Pengawalan Brand</td>
              <td class="py-3 px-4 text-slate-200">Protokol Asuransi Nilai Tinggi Lloyd’s</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Tujuan Pemakaian</td>
              <td class="py-3 px-4 text-neon-cyan">Kewajiban Duta Merek Internasional</td>
              <td class="py-3 px-4 text-slate-200">Ikrar Ikatan Pernikahan</td>
              <td class="py-3 px-4 text-slate-200">Eksposur Katalog Media Mode Global</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Dekonstruksi Jejak Digital DeuxMoi & Misinformasi Blind Item</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Budaya blind item di media sosial AS sering menjadi bumerang akurasi jurnalistik. DeuxMoi, platform gosip berbasis kiriman anonim tanpa proses verifikasi fakta, memiliki rekam jejak mencampuradukkan rumor palsu dengan potongan kebenaran acak. Unggahan bertuliskan <em>"Pasangan A-list favorit semua orang baru saja meresmikan pertunangan di Cotswolds"</em> disebarluaskan oleh lebih dari 5.000 akun agregator TikTok tanpa mencantumkan keterangan bahwa unggahan tersebut berlabel ''Unverified Tip''.
      </p>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Pemeriksaan forensik arsip penerbangan menunjukkan Tom Holland pada tanggal yang dimaksud tengah berada di lokasi pengambilan gambar studio di Atlanta, Georgia, sementara Zendaya berada di Milan untuk fitting adibusana. Ketidaksesuaian geolokasi ini mematahkan narasi pertemuan rahasia di Inggris yang diklaim dalam gosip anonim tersebut.
      </p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Mitos vs Fakta Seputar Privasi Hubungan Hollywood Modern</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Fenomena sorotan publik terhadap pasangan figur publik papan atas menuntut pemahaman kritis atas batas ranah personal:
      </p>
      <ul class="space-y-2 text-sm text-slate-300 leading-relaxed mb-6">
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Setiap cincin yang melingkar di jari manis kiri aktris di festival film adalah tanda pertunangan. <strong>Fakta:</strong> Penempatan perhiasan di red carpet sepenuhnya diatur oleh fashion stylist dan fotografer komersial untuk memaksimalkan estetika busana haute couture.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Bantahan agensi selalu merupakan pengalihan isu. <strong>Fakta:</strong> Dalam kontrak representasi Hollywood, konfirmasi pertunangan resmi selalu dirilis melalui publikasi kredibel seperti People Magazine atau Associated Press jika pasangan memang menginginkannya.</span>
        </li>
      </ul>

      <div class="my-8 p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/90 space-y-4">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-pink flex items-center gap-2">
          <span>FAQ: ISU PERTUNANGAN ZENDAYA & TOM HOLLAND</span>
        </h3>
        <div class="space-y-3 text-xs sm:text-sm">
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Apakah Zendaya dan Tom Holland benar telah bertunangan secara resmi?</h4>
            <p class="text-slate-300">Hingga saat ini belum ada konfirmasi resmi dari juru bicara kedua aktor. Isu cincin terbaru terbukti merupakan perhiasan pinjaman sponsorship rumah perhiasan Bulgari.</p>
          </div>
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Apa tanggapan stylist Law Roach mengenai kegaduhan cincin tersebut?</h4>
            <p class="text-slate-300">Law Roach menegaskan secara terbuka di media sosial bahwa perhiasan tersebut adalah bagian dari katalog busana promosi editorial dan meminta publik berhenti berspekulasi liar atas barang sponsor.</p>
          </div>
          <div>
            <h4 class="font-bold text-white mb-1">Q: Mengapa pasangan ini jarang mengekspos kemesraan di media sosial?</h4>
            <p class="text-slate-300">Dalam wawancara majalah GQ dan Elle, keduanya secara terbuka menyatakan pentingnya melindungi batasan suci antara kehidupan pekerjaan publik dan kehidupan pribadi demi kesehatan mental bersama.</p>
          </div>
        </div>
      </div>
    ', 'hollywood-barat', 'Hollywood & Barat',
  'RUMOR_NETIZEN', 28, 72, 'Rumor Spekulatif Netizen', 'Berdasarkan klaim anonim tanpa konfirmasi representatif publik figur.',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80', 'Zendaya di karpet merah festival film bergengsi. (Foto: Hollywood Archive Network)', '2026-10-10T14:20:00Z', 6,
  'Raditya Dananjaya', 'raditya-dananjaya', 'Redaktur Investigasi Pop-Kultur', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  '["Zendaya"]', '[{"timeLabel":"04 Okt 2026","title":"Unggahan Blind Item DeuxMoi","description":"Sebuah pesan anonim menyebut aktor A-list memesan cincin berlian khusus di New York tanpa rincian verifikasi.","receiptType":"tweet"},{"timeLabel":"08 Okt 2026","title":"Penampilan di Karpet Merah Gala Premier","description":"Kamera paparazzi menyoroti jari manis sang bintang dan memicu 40.000 tweet spekulatif serentak.","receiptType":"video"},{"timeLabel":"09 Okt 2026","title":"Klarifikasi Langsung Stylist Law Roach","description":"Dalam wawancara singkat di story Instagram, ditegaskan cincin tersebut perhiasan sponsorship promosi katalog Bulgari.","receiptType":"statement"}]', 3,
  0, 0, 76, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  excerpt = excluded.excerpt,
  content_html = excluded.content_html,
  category = excluded.category,
  category_label = excluded.category_label,
  ghibah_meter_status = excluded.ghibah_meter_status,
  ghibah_meter_fact = excluded.ghibah_meter_fact,
  ghibah_meter_rumor = excluded.ghibah_meter_rumor,
  ghibah_meter_label = excluded.ghibah_meter_label,
  ghibah_meter_desc = excluded.ghibah_meter_desc,
  hero_image = excluded.hero_image,
  image_caption = excluded.image_caption,
  published_at = excluded.published_at,
  reading_time_minutes = excluded.reading_time_minutes,
  author_name = excluded.author_name,
  author_slug = excluded.author_slug,
  author_role = excluded.author_role,
  author_avatar = excluded.author_avatar,
  entities_json = excluded.entities_json,
  timeline_json = excluded.timeline_json,
  digital_receipts_count = excluded.digital_receipts_count,
  is_featured = excluded.is_featured,
  is_hero = excluded.is_hero,
  trending_score = excluded.trending_score,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, updated_at
) VALUES (
  'art-5', 'reza-rahadian-advokasi-uu-pekerja-kreatif-indonesia', 'Bukan Sekadar Heboh, Ini Duduk Perkaranya: Reza Rahadian Suarakan Jaminan Jam Kerja Layak Kru Film', 'Aktor senior Reza Rahadian memimpin audiensi dengan parlemen terkait perlindungan jam kerja kru perfilman nasional. Simak kronologi perumusan naskah akademik hak pekerja seni.', '
      <p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
        Di balik gemerlap layar perak dan pencapaian rekor puluhan juta penonton bioskop Indonesia, realitas kelam jam kerja kru dan teknisi produksi perfilman yang kerap menembus 20 jam sehari tanpa jaminan keselamatan kerja akhirnya dibawa ke meja legislatif nasional. Dipimpin langsung oleh peraih 5 Piala Citra <a href="/seleb/reza-rahadian" class="text-neon-cyan hover:underline font-semibold">Reza Rahadian</a> bersama koalisi serikat asosiasi pekerja film, sebuah naskah rekomendasi regulasi perlindungan hak pekerja kreatif secara resmi diserahkan kepada pimpinan Komisi X DPR RI dan Kementerian Pariwisata dan Ekonomi Kreatif.
      </p>

      <div class="my-8 p-5 sm:p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/80">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-cyan mb-3 flex items-center gap-2">
          <span>RINGKASAN EKSEKUTIF: DUDUK PERKARA DALAM 3 POIN UTAMA</span>
        </h3>
        <ul class="space-y-2.5 text-xs sm:text-sm text-slate-300">
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Urgensi Pembatasan Jam Kerja (14 Jam):</strong> Petisi menuntut batas maksimal shift kerja lapangan produksi adalah 14 jam per hari, dengan kewajiban masa istirahat minimum (<em>turnaround time</em>) selama 10 jam antar-hari shooting guna mencegah kelelahan fatal.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Kewajiban Asuransi BPJS & Standar K3:</strong> Produser dan rumah produksi diwajibkan mendaftarkan seluruh kru teknis lepas (<em>freelance crew</em>) ke dalam jaminan kecelakaan kerja BPJS Ketenagakerjaan selama masa pra hingga pasca produksi.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Respon Parlemen & Menparekraf:</strong> DPR RI menyepakati penyusunan Peraturan Menteri atau revisi turunan UU Perfilman No. 33/2009 untuk mengikat kepatuhan rumah produksi dengan ancaman pencabutan izin sensor film bagi pelanggar keselamatan kerja berulang.</span>
          </li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Tabel Forensik: Perbandingan Regulasi Jam Kerja Perfilman Indonesia vs Internasional</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Sebagai landasan studi komparatif, tim jurnalisme investigasi NgeGhibah membandingkan standar jam kerja yang diusulkan serikat pekerja seni dengan standar perfilman global:
      </p>

      <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-deep/60 my-6">
        <table class="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-slate-800 bg-velvet/80 text-[11px] font-mono uppercase text-slate-400">
              <th class="py-3 px-4 font-bold">Parameter Regulasi</th>
              <th class="py-3 px-4 font-bold text-neon-cyan">Usulan Koalisi Reza Rahadian</th>
              <th class="py-3 px-4 font-bold text-emerald-400">Standar SAG-AFTRA / IATSE (AS)</th>
              <th class="py-3 px-4 font-bold text-rose-400">Praktik Lapangan Eksisting (Sebelum Audit)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/80 font-sans">
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Batas Maksimal Shift Harian</td>
              <td class="py-3 px-4 text-neon-cyan font-mono">14 Jam (Termasuk Istirahat)</td>
              <td class="py-3 px-4 text-emerald-400 font-mono">12 Jam (Kompensasi Lembur 1.5x)</td>
              <td class="py-3 px-4 text-rose-400 font-mono">18 – 22 Jam Tanpa Batas</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Jeda Istirahat (Turnaround)</td>
              <td class="py-3 px-4 text-slate-200 font-mono">Minimal 10 Jam Antar-Panggilan</td>
              <td class="py-3 px-4 text-emerald-400 font-mono">Minimal 12 Jam (Denda Berat Istirahat Singkat)</td>
              <td class="py-3 px-4 text-rose-400 font-mono">4 – 6 Jam (Sering Tiba Subuh Pulang Pagi)</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Jaminan Asuransi Kecelakaan</td>
              <td class="py-3 px-4 text-slate-200">Wajib BPJS Ketenagakerjaan Produser</td>
              <td class="py-3 px-4 text-emerald-400">Dana Kesehatan Mandat Serikat Kerja</td>
              <td class="py-3 px-4 text-rose-400">Biaya Pribadi atau Donasi Patungan Kru</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Dekonstruksi Jejak Digital: Dari Survei 74% Kelelahan hingga Audiensi Senayan</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Langkah berani Reza Rahadian bersama asosiasi sinematografer dan penata artistik berakar pada data empiris riset independen. Survei kesehatan kerja yang dilakukan terhadap 840 pekerja film di Jakarta, Yogyakarta, dan Bali mengungkapkan bahwa 74% responden mengalami kelelahan fisik ekstrem kronis, dengan 23% di antaranya pernah mengalami kecelakaan lalu lintas saat berkendara pulang pasca shift syuting dini hari.
      </p>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Reza Rahadian, yang selama ini dikenal sebagai figur yang sangat menjaga marwah profesi keaktoran, menegaskan dalam pidatonya di hadapan anggota dewan: <em>"Kita tidak bisa merayakan film Indonesia masuk festival internasional jika di balik kemegahannya ada kru yang pingsan karena tidak tidur tiga hari. Kemajuan sinema harus berjalan seiring dengan peradaban pemuliaan manusia pekerjanya."</em>
      </p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Mitos vs Fakta Industri Produksi Film Nasional</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Dinamika biaya produksi sering dijadikan dalih oleh oknum produser untuk menormalisasi eksploitasi kerja:
      </p>
      <ul class="space-y-2 text-sm text-slate-300 leading-relaxed mb-6">
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Pembatasan jam kerja akan membuat anggaran film membengkak dan mematikan studio kecil. <strong>Fakta:</strong> Data studio profesional membuktikan bahwa perencanaan manajemen produksi (<em>breakdown call sheet</em>) yang matang justru menekan pemborosan sewa alat genset dan katering hingga 18%.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Pekerja seni tidak bisa diikat dengan jam kerja seperti karyawan kantoran. <strong>Fakta:</strong> Fleksibilitas seni menyangkut kreativitas, bukan pengorbanan keselamatan biologis raga manusia di lokasi berbahaya.</span>
        </li>
      </ul>

      <div class="my-8 p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/90 space-y-4">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-pink flex items-center gap-2">
          <span>FAQ: ADVOKASI UU HAK PEKERJA FILM OLEH REZA RAHADIAN</span>
        </h3>
        <div class="space-y-3 text-xs sm:text-sm">
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Mengapa Reza Rahadian yang merupakan aktor utama ikut mengadvokasi jam kerja kru?</h4>
            <p class="text-slate-300">Reza memandang perfilman adalah kerja kolektif. Sebagai mantan Ketua Komite FFI, ia merasa bertanggung jawab moral memanfaatkan pengaruh publiknya untuk memperjuangkan kesejahteraan rekan-rekan teknisi di balik layar.</p>
          </div>
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Berapa batas jam kerja maksimal yang dituntut dalam draf rekomendasi?</h4>
            <p class="text-slate-300">Draf mengusulkan batas maksimal kerja di lokasi syuting adalah 14 jam per hari, dengan hak istirahat minimum 10 jam sebelum panggilan kerja berikutnya.</p>
          </div>
          <div>
            <h4 class="font-bold text-white mb-1">Q: Kapan regulasi perlindungan kru film ini mulai diberlakukan secara efektif?</h4>
            <p class="text-slate-300">Kemenparekraf dan asosiasi produser menargetkan penerbitan Keputusan Menteri Bersama mengenai Pedoman Baku Keselamatan Kerja Perfilman pada pertengahan semester depan.</p>
          </div>
        </div>
      </div>
    ', 'seleb-lokal', 'Seleb Lokal',
  'TERKONFIRMASI', 98, 2, 'Terkonfirmasi Resmi DPR & Asosiasi', 'Dokumen risalah audiensi resmi DPR RI dan siaran pers gabungan asosiasi perfilman.',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80', 'Suasana di balik layar produksi sinema Indonesia. (Foto: Arsip FFI)', '2026-10-09T11:00:00Z', 7,
  'Raditya Dananjaya', 'raditya-dananjaya', 'Redaktur Investigasi Pop-Kultur', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  '["Reza Rahadian"]', '[{"timeLabel":"01 Okt 2026","title":"Hasil Survei Jam Kerja Dirilis Koalisi Serikat Film","description":"Data menunjukkan 74% pekerja teknis mengalami kelelahan kronis akibat sistem lembur ekstrem tanpa batasan jam kerja baku.","receiptType":"document"},{"timeLabel":"09 Okt 2026","title":"Audiensi Terbuka di Gedung Senayan DPR RI","description":"Penyerahan naskah rekomendasi standar jam operasional shooting maksimal 14 jam per hari kepada Komisi X DPR RI.","receiptType":"statement"},{"timeLabel":"11 Okt 2026","title":"Komitmen Kemenparekraf Membentuk Pokja Keselamatan Kerja","description":"Pemerintah menetapkan pembentukan kelompok kerja lintas asosiasi untuk memvalidasi draft regulasi turunan perfilman.","receiptType":"court"}]', 3,
  0, 0, 88, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  excerpt = excluded.excerpt,
  content_html = excluded.content_html,
  category = excluded.category,
  category_label = excluded.category_label,
  ghibah_meter_status = excluded.ghibah_meter_status,
  ghibah_meter_fact = excluded.ghibah_meter_fact,
  ghibah_meter_rumor = excluded.ghibah_meter_rumor,
  ghibah_meter_label = excluded.ghibah_meter_label,
  ghibah_meter_desc = excluded.ghibah_meter_desc,
  hero_image = excluded.hero_image,
  image_caption = excluded.image_caption,
  published_at = excluded.published_at,
  reading_time_minutes = excluded.reading_time_minutes,
  author_name = excluded.author_name,
  author_slug = excluded.author_slug,
  author_role = excluded.author_role,
  author_avatar = excluded.author_avatar,
  entities_json = excluded.entities_json,
  timeline_json = excluded.timeline_json,
  digital_receipts_count = excluded.digital_receipts_count,
  is_featured = excluded.is_featured,
  is_hero = excluded.is_hero,
  trending_score = excluded.trending_score,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, updated_at
) VALUES (
  'art-6', 'audit-keuangan-yayasan-rachel-vennya-transparansi-donasi', 'Transparansi Dana Kemanusiaan: Rachel Vennya Rilis Laporan Audit Independen Donasi Bencana', 'Menjawab pertanyaan warganet terkait akuntabilitas penyaluran dana sosial, tim manajemen mempublikasikan hasil audit KAP dengan opini Wajar Tanpa Pengecualian.', '
      <p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
        Menjawab gelombang pertanyaan dan kecurigaan warganet terkait akuntabilitas penyaluran dana kemanusiaan publik senilai Rp 8,4 Miliar, kreator digital dan pengusaha <a href="/seleb/rachel-vennya" class="text-neon-cyan hover:underline font-semibold">Rachel Vennya</a> mengambil langkah transparansi proaktif dengan mempublikasikan hasil audit menyeluruh Kantor Akuntan Publik (KAP) independen. Laporan keuangan komprehensif tersebut meraih opini tertinggi Wajar Tanpa Pengecualian (WTP), membuktikan secara faktual bahwa seluruh dana bantuan masyarakat telah disalurkan 100% langsung ke lokasi bencana tanpa pemotongan biaya operasional yayasan pribadi.
      </p>

      <div class="my-8 p-5 sm:p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/80">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-cyan mb-3 flex items-center gap-2">
          <span>RINGKASAN EKSEKUTIF: DUDUK PERKARA DALAM 3 POIN UTAMA</span>
        </h3>
        <ul class="space-y-2.5 text-xs sm:text-sm text-slate-300">
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Akar Isu Akuntabilitas:</strong> Sejumlah utas di platform X dan Threads mempertanyakan jeda waktu pelaporan akhir penyaluran dana darurat banjir dan gempa bumi yang dikumpulkan melalui platform urun dana publik semester lalu.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Hasil Audit Independen KAP:</strong> Laporan audit akuntan publik beregistrasi resmi membuktikan total penerimaan Rp 8.421.500.000 dialokasikan secara riil ke pos logistik sandang pangan (58%), pembangunan hunian sementara (32%), serta pos medis darurat (10%).</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Kebijakan Potongan 0%:</strong> Berbeda dengan batas maksimal 10% yang diizinkan regulasi Pengumpulan Uang dan Barang (PUB) Kemensos, yayasan binaan sang kreator menyerap seluruh biaya operasional relawan dan transportasi kargo menggunakan dana pribadi (<em>CSR funding</em>), sehingga potongan dana donatur murni 0%.</span>
          </li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Tabel Forensik: Rekonsiliasi Penyaluran Donasi Kemanusiaan</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Berikut rincian rekonsiliasi keuangan berdasarkan buku besar audit independen yang telah dipublikasikan secara terbuka:
      </p>

      <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-deep/60 my-6">
        <table class="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-slate-800 bg-velvet/80 text-[11px] font-mono uppercase text-slate-400">
              <th class="py-3 px-4 font-bold">Pos Alokasi Donasi</th>
              <th class="py-3 px-4 font-bold text-neon-cyan">Realisasi Lapangan (Audit KAP)</th>
              <th class="py-3 px-4 font-bold text-slate-300">Persentase Alokasi</th>
              <th class="py-3 px-4 font-bold text-emerald-400">Verifikasi Dokumen Bukti</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/80 font-sans">
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Paket Sembako & Logistik Darurat</td>
              <td class="py-3 px-4 text-slate-200 font-mono">Rp 4.884.470.000</td>
              <td class="py-3 px-4 text-neon-cyan font-mono">58.0%</td>
              <td class="py-3 px-4 text-emerald-400">Surat Jalan BNPB & Faktur Vendor</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Pembangunan Huntara & Sanitasi Air Bersih</td>
              <td class="py-3 px-4 text-slate-200 font-mono">Rp 2.694.880.000</td>
              <td class="py-3 px-4 text-neon-cyan font-mono">32.0%</td>
              <td class="py-3 px-4 text-emerald-400">Berita Acara Serah Terima (BAST) Pemda</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Bantuan Layanan Medis & Trauma Healing</td>
              <td class="py-3 px-4 text-slate-200 font-mono">Rp 842.150.000</td>
              <td class="py-3 px-4 text-neon-cyan font-mono">10.0%</td>
              <td class="py-3 px-4 text-emerald-400">Laporan Mitra Medis Rumah Sakit Lapangan</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Biaya Operasional & Administrasi Yayasan</td>
              <td class="py-3 px-4 text-emerald-400 font-mono">Rp 0 (Subsidi Pribadi Rp 240jt)</td>
              <td class="py-3 px-4 text-emerald-400 font-mono">0.0%</td>
              <td class="py-3 px-4 text-emerald-400">Bukti Transfer Rekening Pribadi Terpisah</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Dekonstruksi Jejak Digital: Membedah Polarisasi Opini Netizen</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Sensitivitas masyarakat Indonesia terhadap transparansi filantropi selebritas sangat beralasan menyusul beberapa kasus penyelewengan dana sosial di masa lalu. Dalam kasus kampanye ini, dugaan warganet bermula saat jeda waktu dua bulan antara penutupan rekening donasi dan publikasi laporan akhir. Namun, analisis alur akuntansi forensik menunjukkan bahwa proses audit lapangan di wilayah bencana terpencil memerlukan verifikasi fisik fisik nota dan konfirmasi ke kepala desa penerima manfaat.
      </p>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Keputusan Rachel Vennya melampirkan tautan arsip berkas audit 72 halaman beserta rekening koran perbankan yang telah disensor data privasinya menjadi preseden positif standar keterbukaan informasi di kalangan mega-influencer tanah air.
      </p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Mitos vs Fakta Seputar Penggalangan Dana Digital Influencer</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Regulasi dan etika pengelolaan dana publik memiliki koridor ketat yang kerap disalahpahami masyarakat:
      </p>
      <ul class="space-y-2 text-sm text-slate-300 leading-relaxed mb-6">
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Setiap penggalangan dana publik oleh publik figur otomatis menjadi objek pajak penghasilan pribadi. <strong>Fakta:</strong> Berdasarkan UU PPh Pasal 4 ayat (3), harta hibah bantuan atau sumbangan kemanusiaan dikecualikan dari objek pajak jika disalurkan melalui yayasan berbadan hukum resmi.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Semua donasi harus dihabiskan dalam tempo satu minggu pasca bencana. <strong>Fakta:</strong> Penyaluran bertanggung jawab membagi dana ke fase tanggap darurat (minggu 1-2) dan fase pemulihan jangka panjang seperti hunian sementara yang memakan waktu 3-6 bulan pengerjaan.</span>
        </li>
      </ul>

      <div class="my-8 p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/90 space-y-4">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-pink flex items-center gap-2">
          <span>FAQ: TRANSPARANSI LAPORAN AUDIT DONASI RACHEL VENNYA</span>
        </h3>
        <div class="space-y-3 text-xs sm:text-sm">
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Siapa pihak yang melakukan audit laporan keuangan donasi ini?</h4>
            <p class="text-slate-300">Audit dilaksanakan oleh Kantor Akuntan Publik (KAP) independen berlisensi OJK dan Kementerian Keuangan RI dengan menerapkan standar audit kepatuhan keuangan nirlaba.</p>
          </div>
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Apakah ada potongan dana untuk operasional tim relawan?</h4>
            <p class="text-slate-300">Tidak ada potongan sama sekali (0%). Seluruh biaya operasional relawan, sewa truk kargo logistik, dan akomodasi lapangan dibiayai menggunakan kas pribadi inisiator kampanye.</p>
          </div>
          <div>
            <h4 class="font-bold text-white mb-1">Q: Di mana publik dapat mengakses dokumen audit lengkap?</h4>
            <p class="text-slate-300">Tautan arsip digital dokumen audit PDF setebal 72 halaman dapat diunduh langsung melalui tautan resmi yang disematkan di bio kanal media sosial yayasan pengelola.</p>
          </div>
        </div>
      </div>
    ', 'creator-tiktok', 'Creator & TikTok',
  'TERKONFIRMASI', 95, 5, 'Terkonfirmasi Audit Publik WTP', 'Laporan keuangan audit publik KAP bersertifikasi resmi OJK dengan opini Wajar Tanpa Pengecualian.',
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80', 'Penyaluran bantuan logistik kemanusiaan di lapangan. (Foto: Dokumentasi Tim Relawan)', '2026-10-08T16:00:00Z', 6,
  'Nabila Safitri', 'nabila-safitri', 'Editor Tren Gen Z & Social Commerce', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  '["Rachel Vennya"]', '[{"timeLabel":"28 Sep 2026","title":"Munculnya Utas Pertanyaan Netizen di Threads","description":"Sebuah utas menanyakan status laporan akhir kampanye bantuan bencana alam semester lalu.","receiptType":"tweet"},{"timeLabel":"08 Okt 2026","title":"Rilis Dokumen PDF Audit Terbuka Wajar Tanpa Pengecualian","description":"Tautan arsip laporan audit KAP diunggah ke publik dengan rincian rekening koran per bank.","receiptType":"document"},{"timeLabel":"10 Okt 2026","title":"Validasi Berita Acara BNPB & Pemerintah Daerah","description":"Pemerintah daerah mengonfirmasi seluruh fasilitas hunian sementara dan sanitasi telah diserahterimakan.","receiptType":"statement"}]', 3,
  0, 0, 74, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  excerpt = excluded.excerpt,
  content_html = excluded.content_html,
  category = excluded.category,
  category_label = excluded.category_label,
  ghibah_meter_status = excluded.ghibah_meter_status,
  ghibah_meter_fact = excluded.ghibah_meter_fact,
  ghibah_meter_rumor = excluded.ghibah_meter_rumor,
  ghibah_meter_label = excluded.ghibah_meter_label,
  ghibah_meter_desc = excluded.ghibah_meter_desc,
  hero_image = excluded.hero_image,
  image_caption = excluded.image_caption,
  published_at = excluded.published_at,
  reading_time_minutes = excluded.reading_time_minutes,
  author_name = excluded.author_name,
  author_slug = excluded.author_slug,
  author_role = excluded.author_role,
  author_avatar = excluded.author_avatar,
  entities_json = excluded.entities_json,
  timeline_json = excluded.timeline_json,
  digital_receipts_count = excluded.digital_receipts_count,
  is_featured = excluded.is_featured,
  is_hero = excluded.is_hero,
  trending_score = excluded.trending_score,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, updated_at
) VALUES (
  'art-7', 'sengketa-kontrak-eksklusif-newjeans-vs-ador-duduk-perkara', 'Kupas Tuntas Sengketa Kontrak NewJeans vs ADOR & HYBE: Rekonstruksi Hukum dan Kronologi Lengkap', 'Duduk perkara sengketa kontrak kerja eksklusif NewJeans dengan ADOR pasca pemecatan Min Hee-jin. Analisis klausul pelanggaran kepercayaan, somasi resmi, dan peta eskalasi hukum.', '
      <p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
        Perselisihan hukum pemutusan kontrak kerja eksklusif antara mega-girl group NewJeans melawan agensi manajemen ADOR dan konglomerasi induk HYBE Labels menandai babak terpanas dalam sejarah modern industri musik K-Pop. Berakar dari pencopotan sepihak pimpinan kreatif orisinal <a href="/seleb/min-hee-jin" class="text-neon-cyan hover:underline font-semibold">Min Hee-jin</a> dari kursi CEO, eskalasi konflik bermutasi menjadi pertarungan doktrin yuridis mendasar antara perlindungan hak moral otonomi seniman versus kekuatan klausul penalti ganti rugi korporasi bursa efek senilai ratusan miliar won.
      </p>

      <div class="my-8 p-5 sm:p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/80">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-cyan mb-3 flex items-center gap-2">
          <span>RINGKASAN EKSEKUTIF: DUDUK PERKARA DALAM 3 POIN UTAMA</span>
        </h3>
        <ul class="space-y-2.5 text-xs sm:text-sm text-slate-300">
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Doktrin Runtuhnya Rasa Percaya (Breach of Trust):</strong> NewJeans menegaskan bahwa hubungan agensi-artis adalah perjanjian fiduciary yang menuntut itikad baik mutlak. Tindakan manajemen baru ADOR yang mengabaikan arahan artistik orisinal dan kebocoran dokumen internal dinilai merusak ikatan kepercayaan hingga tidak dapat dipulihkan.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Prosedur Somasi Tersertifikasi (Content-Certified Mail):</strong> Mengikuti standar hukum perdata Korea, NewJeans melayangkan surat somasi resmi dengan tenggat perbaikan 14 hari. Kegagalan ADOR memulihkan struktur manajemen dalam batas waktu tersebut menjadi landasan hukum deklarasi pemutusan kontrak per 29 November pukul 00:00 KST.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Sengketa Penalti Ganti Rugi (Penalty Fees):</strong> ADOR mempertahankan klaim bahwa kontrak tetap sah dan mengancam gugatan penalti yang diperkirakan bernilai antara 300 Miliar hingga 600 Miliar Won (sekitar Rp 3,4 Triliun – Rp 6,8 Triliun) mengacu pada standar klausul FTC Korea Selatan.</span>
          </li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Tabel Forensik: Komparasi Argumen Yuridis Dua Kubu Bersengketa</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Berikut rekonstruksi pertarungan dalil hukum antara perwakilan anggota NewJeans dan manajemen korporasi ADOR / HYBE:
      </p>

      <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-deep/60 my-6">
        <table class="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-slate-800 bg-velvet/80 text-[11px] font-mono uppercase text-slate-400">
              <th class="py-3 px-4 font-bold">Poin Sengketa Hukum</th>
              <th class="py-3 px-4 font-bold text-neon-pink">Posisi Yuridis NewJeans</th>
              <th class="py-3 px-4 font-bold text-neon-cyan">Posisi Yuridis Manajemen ADOR</th>
              <th class="py-3 px-4 font-bold text-emerald-400">Yurisprudensi Pengadilan Korea</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/80 font-sans">
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Keabsahan Pemutusan Kontrak</td>
              <td class="py-3 px-4 text-slate-200 font-medium">Batal demi hukum karena kelalaian perbaikan agensi</td>
              <td class="py-3 px-4 text-slate-200 font-medium">Kontrak tetap aktif hingga tahun 2029</td>
              <td class="py-3 px-4 text-slate-200">Mengharuskan gugatan konfirmasi pembatalan (declaratory judgment)</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Kewajiban Denda Penalti (Penalty Fee)</td>
              <td class="py-3 px-4 text-emerald-400 font-mono">Rp 0 (Pihak agensi yang melanggar kontrak)</td>
              <td class="py-3 px-4 text-rose-400 font-mono">Estimasi 300M – 600M Won</td>
              <td class="py-3 px-4 text-slate-200">Hakim berwenang mereduksi penalti jika agensi terbukti berkontribusi kelalaian</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Kepemilikan Hak Merek ''NewJeans''</td>
              <td class="py-3 px-4 text-slate-200">Tuntutan perlindungan identitas karya orisinal</td>
              <td class="py-3 px-4 text-slate-200">Hak merek terdaftar 100% milik aset ADOR</td>
              <td class="py-3 px-4 text-slate-200">Aset IP milik agensi kecuali diperjanjikan lain saat awal debut</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Dekonstruksi Jejak Digital: Konferensi Pers Darurat & Reaksi Saham</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Langkah berani kelima anggota yang menggelar siaran pers darurat mandiri tanpa didampingi humas agensi mengguncang pasar modal Korea Selatan. Saham HYBE di Bursa Efek Seoul (KRX) langsung mengalami fluktuasi tajam, mencerminkan ketidakpastian investor atas masa depan aset intelektual terbesar label ADOR.
      </p>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Dalam konferensi pers berdurasi 30 menit tersebut, anggota NewJeans secara tegas membacakan rincian pelanggaran yang mereka alami, termasuk pengabaian laporan perlakuan tidak menyenangkan di tempat kerja (<em>workplace harassment</em>) dan pencampuran tangan pihak ketiga dalam konten visual grup. Pernyataan tersebut mempertegas bahwa sengketa ini telah melewati titik kompromi diplomatik.
      </p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Mitos vs Fakta Kontrak Standar Industri K-Pop</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Memahami struktur kontrak kerja di Korea menuntut pemisahan antara norma hukum dan sentimen fandom:
      </p>
      <ul class="space-y-2 text-sm text-slate-300 leading-relaxed mb-6">
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Artis K-Pop bisa langsung bekerja di agensi baru begitu menggelar jumpa pers pengumuman keluar. <strong>Fakta:</strong> Sebelum ada putusan injunksi sementara (<em>preliminary injunction</em>) dari pengadilan distrik, aktivitas komersial independen rentan digugat atas dasar interferensi kontrak oleh agensi lama.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Agensi memiliki hak mutlak atas kebebasan personal artis selama masa 7 tahun kontrak. <strong>Fakta:</strong> Komisi Pengawas Persaingan Usaha Korea (KFTC) telah merevisi pedoman kontrak standar untuk melarang klausul perbudakan yang melanggar martabat dan privasi mendasar artis.</span>
        </li>
      </ul>

      <div class="my-8 p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/90 space-y-4">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-pink flex items-center gap-2">
          <span>FAQ: SENGKETA KONTRAK NEWJEANS VS ADOR & HYBE</span>
        </h3>
        <div class="space-y-3 text-xs sm:text-sm">
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Mengapa NewJeans menyatakan kontrak mereka sudah berakhir tanpa persetujuan ADOR?</h4>
            <p class="text-slate-300">NewJeans mendasarkan tindakan pada doktrin hukum bahwa kelalaian pihak agensi memperbaiki pelanggaran kontrak dalam tenggat somasi 14 hari secara otomatis menggugurkan kewajiban kontrak pihak artis.</p>
          </div>
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Apakah NewJeans masih diizinkan menggunakan nama panggung grup mereka?</h4>
            <p class="text-slate-300">Hak merek dagang ''NewJeans'' saat ini terdaftar atas nama korporasi ADOR. Penggunaan nama tersebut di panggung komersial baru kemungkinan besar akan disengketakan dalam persidangan kepemilikan hak cipta terpisah.</p>
          </div>
          <div>
            <h4 class="font-bold text-white mb-1">Q: Berapa lama estimasi persidangan sengketa ini akan berlangsung?</h4>
            <p class="text-slate-300">Berdasarkan preseden kasus sengketa idola K-Pop di Pengadilan Distrik Pusat Seoul (seperti kasus TVXQ atau FIFTY FIFTY), persidangan gugatan materi pokok umumnya memakan waktu 8 hingga 18 bulan.</p>
          </div>
        </div>
      </div>
    ', 'kpop-asia', 'K-Pop & Asia',
  'TERKONFIRMASI', 94, 6, 'Terkonfirmasi Resmi Dokumen Somasi', 'Berdasarkan surat somasi tersertifikasi, rilis resmi bursa efek KRX, dan konferensi pers terbuka para pihak.',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80', 'Ilustrasi sorotan panggung konser megah di Seoul. (Foto: Pop Culture Archive Network)', '2026-10-11T12:00:00Z', 7,
  'Kenzo Pratama', 'kenzo-pratama', 'Editor Hiburan Asia & Hallyu Culture', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  '["Min Hee-jin"]', '[{"timeLabel":"27 Agu 2024 • 14:00 KST","title":"Pemberhentian Sepihak CEO Min Hee-jin","description":"Dewan direksi ADOR menunjuk pimpinan baru tanpa persetujuan tim kreatif utama grup.","receiptType":"document","receiptQuote":"Keputusan dewan diambil sesuai undang-undang komersial tanpa pelanggaran prosedur anggaran rumah tangga."},{"timeLabel":"13 Nov 2024 • 18:30 KST","title":"Pengiriman Somasi Bersertifikat Isi","description":"NewJeans memberikan batas waktu 14 hari bagi ADOR untuk memulihkan kontrak kerja kreatif.","receiptType":"statement"},{"timeLabel":"28 Nov 2024 • 20:00 KST","title":"Konferensi Pers Pengumuman Pemutusan Kontrak","description":"Pernyataan resmi bahwa kontrak eksklusif berakhir per 29 November pukul 00:00 KST.","receiptType":"court"}]', 3,
  1, 0, 95, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  excerpt = excluded.excerpt,
  content_html = excluded.content_html,
  category = excluded.category,
  category_label = excluded.category_label,
  ghibah_meter_status = excluded.ghibah_meter_status,
  ghibah_meter_fact = excluded.ghibah_meter_fact,
  ghibah_meter_rumor = excluded.ghibah_meter_rumor,
  ghibah_meter_label = excluded.ghibah_meter_label,
  ghibah_meter_desc = excluded.ghibah_meter_desc,
  hero_image = excluded.hero_image,
  image_caption = excluded.image_caption,
  published_at = excluded.published_at,
  reading_time_minutes = excluded.reading_time_minutes,
  author_name = excluded.author_name,
  author_slug = excluded.author_slug,
  author_role = excluded.author_role,
  author_avatar = excluded.author_avatar,
  entities_json = excluded.entities_json,
  timeline_json = excluded.timeline_json,
  digital_receipts_count = excluded.digital_receipts_count,
  is_featured = excluded.is_featured,
  is_hero = excluded.is_hero,
  trending_score = excluded.trending_score,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, updated_at
) VALUES (
  'art-8', 'boikot-aktor-hollywood-isu-ai-hak-citra-sag-aftra', 'Bukan Sekadar Sensasi: Mengapa Bintang Top Hollywood Bersatu Boikot Klausul Replikasi AI 2026', 'Menolak digital cloning tanpa izin seumur hidup, aliansi aktor Hollywood dan kreator suara melancarkan boikot serentak terhadap klausul kontrak studio game dan streaming besar.', '
      <p class="lead font-medium text-lg text-slate-200 leading-relaxed mb-6">
        Gelombang perlawanan serikat pekerja hiburan Amerika Serikat memasuki babak baru paling radikal menyusul aksi boikot terkoordinasi ribuan aktor dan pengisi suara serikat SAG-AFTRA terhadap klausul eksploitasi kecerdasan buatan generatif (<em>Generative AI</em>) dalam draf perjanjian kerja sama studio video game dan konglomerasi streaming global. Disuarakan oleh figur-figur papan atas termasuk bintang muda <a href="/seleb/zendaya" class="text-neon-cyan hover:underline font-semibold">Zendaya</a>, pertarungan ini menuntut perlindungan mutlak atas hak kepemilikan biometrik raga, suara sintetis, dan wajah manusia dari ancaman digital cloning abadi tanpa kompensasi adil.
      </p>

      <div class="my-8 p-5 sm:p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/80">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-cyan mb-3 flex items-center gap-2">
          <span>RINGKASAN EKSEKUTIF: DUDUK PERKARA DALAM 3 POIN UTAMA</span>
        </h3>
        <ul class="space-y-2.5 text-xs sm:text-sm text-slate-300">
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Ancaman Klausul Replikasi Digital Abadi (Perpetual Digital Replica):</strong> Draf kontrak studio menyisipkan klausul yang mengizinkan pemindaian biometrik 3D aktor dengan bayaran satu hari shooting, namun aset digital tersebut dapat digunakan kembali tanpa batas waktu di proyek sekuel tanpa izin tambahan.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Tuntutan Perlindungan Informed Consent & Royalti Residual:</strong> SAG-AFTRA menuntut kewajiban persetujuan eksplisit per-penggunaan (<em>specific informed consent</em>) serta pembayaran royalti berkala setiap kali replika AI seorang pemeran menghasilkan keuntungan komersial.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-pink font-bold mt-0.5">•</span>
            <span><strong>Dukungan Legislasi UU NO FAKES Act di Senat AS:</strong> Perjuangan serikat diperkuat dorongan pengesahan rancangan undang-undang federal yang mengkriminalisasi replikasi suara dan wajah individu tanpa izin tertulis yang sah.</span>
          </li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Tabel Forensik: Perbandingan Hak Citra Aktor Era Tradisional vs AI Generatif</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Guna memetakan pergeseran hak ekonomi pekerja seni, tim riset hukum teknologi media NgeGhibah membandingkan tiga model kontrak di Hollywood:
      </p>

      <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-deep/60 my-6">
        <table class="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-slate-800 bg-velvet/80 text-[11px] font-mono uppercase text-slate-400">
              <th class="py-3 px-4 font-bold">Klausul Perlindungan</th>
              <th class="py-3 px-4 font-bold text-neon-pink">Draf Eksploitasi Studio (Ditolak)</th>
              <th class="py-3 px-4 font-bold text-neon-cyan">Mandat Kesepakatan SAG-AFTRA 2026</th>
              <th class="py-3 px-4 font-bold text-emerald-400">Standar Tradisional Pre-AI</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/80 font-sans">
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Izin Penggunaan Replika Suara & Wajah</td>
              <td class="py-3 px-4 text-rose-400 font-mono">Lisensi Seumur Hidup (Perpetual License)</td>
              <td class="py-3 px-4 text-neon-cyan font-mono">Wajib Izin Tertulis Spesifik per Adegan</td>
              <td class="py-3 px-4 text-slate-200 font-mono">Hanya Berlaku untuk Judul Film Tersebut</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Kompensasi Penggunaan di Masa Depan</td>
              <td class="py-3 px-4 text-rose-400 font-mono">Pembayaran Tunggal Sekali Bayar (Buyout)</td>
              <td class="py-3 px-4 text-emerald-400 font-mono">Royalti Residual Standar Serikat Kerja</td>
              <td class="py-3 px-4 text-slate-200 font-mono">Pembayaran Gaji Hari Syuting Riil</td>
            </tr>
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Hak Menolak Adegan Kontroversial</td>
              <td class="py-3 px-4 text-rose-400">Hak Studio Sepenuhnya atas Avatar</td>
              <td class="py-3 px-4 text-emerald-400">Aktor Berhak Veto atas Adegan Asusila/Kekerasan</td>
              <td class="py-3 px-4 text-slate-200">Klausul Pemeran Pengganti (Stunt Double)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Dekonstruksi Jejak Digital: Solidaritas Hollywood & Ancaman Mogok Massal</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Aksi boikot bermula dari kebocoran draf perjanjian kerja sama industri video game interaktif yang mewajibkan aktor suara menandatangani pelepasan hak cipta suara untuk pelatihan model bahasa (<em>AI voice cloning training</em>). Kebocoran tersebut menyulut amarah komunitas pemeran sulih suara yang merasa mata pencaharian mereka akan digantikan oleh algoritma mesin yang dilatih dari suara mereka sendiri.
      </p>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Presiden SAG-AFTRA menegaskan dalam konferensi pers di Los Angeles: <em>"Kami tidak menentang kemajuan teknologi perangkat lunak. Yang kami tolak secara tegas adalah pencurian martabat dan identitas manusiawi kami demi memperkaya pemegang saham korporasi tanpa kompensasi adil."</em>
      </p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-white font-display">Mitos vs Fakta Seputar Penggunaan AI di Sinema Modern</h2>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        Perdebatan AI dalam seni peran sering kali dibumbui asumsi apokaliptik yang tidak proporsional:
      </p>
      <ul class="space-y-2 text-sm text-slate-300 leading-relaxed mb-6">
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Serikat pekerja ingin melarang total penggunaan teknologi CGI dan AI di film. <strong>Fakta:</strong> Serikat hanya mengatur aspek etika ketenagakerjaan; AI boleh digunakan sebagai alat bantu visual efek asalkan talenta manusia yang menjadi sampel menerima kompensasi dan memberikan persetujuan sadar.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-400 font-bold">✓</span>
          <span><strong>Mitos:</strong> Aktor figuran tidak terdampak oleh kemajuan AI sintetis. <strong>Fakta:</strong> Justru pemeran latar dan figuran adalah pihak paling rentan digantikan oleh kerumunan sintetis digital (<em>digital background crowd</em>) jika regulasi proteksi tidak ditegakkan.</span>
        </li>
      </ul>

      <div class="my-8 p-6 rounded-2xl border border-slate-800 bg-obsidian-deep/90 space-y-4">
        <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-pink flex items-center gap-2">
          <span>FAQ: BOIKOT KLAUSUL REPLIKASI AI OLEH AKTOR HOLLYWOOD</span>
        </h3>
        <div class="space-y-3 text-xs sm:text-sm">
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Apa alasan utama para aktor Hollywood melancarkan aksi boikot ini?</h4>
            <p class="text-slate-300">Aktor menolak draf kontrak studio yang memungkinkan kepemilikan abadi atas wajah dan suara digital mereka untuk digunakan kembali di film atau video game masa depan tanpa izin dan royalti tambahan.</p>
          </div>
          <div class="border-b border-slate-800/80 pb-3">
            <h4 class="font-bold text-white mb-1">Q: Bagaimana sikap studio besar terhadap tuntutan serikat pekerja?</h4>
            <p class="text-slate-300">Aliansi produser menyatakan keterbukaan bernegosiasi namun berdalih bahwa fleksibilitas teknologi AI diperlukan untuk menekan ongkos produksi efek visual di era persaingan ketat platform streaming.</p>
          </div>
          <div>
            <h4 class="font-bold text-white mb-1">Q: Apa dampak sengketa ini terhadap jadwal rilis film dan game mendatang?</h4>
            <p class="text-slate-300">Penghentian sesi penangkapan gerak (motion capture) dan sulih suara telah menunda jadwal produksi sejumlah waralaba video game AAA dan serial televisi yang dijadwalkan tayang tahun depan.</p>
          </div>
        </div>
      </div>
    ', 'hollywood-barat', 'Hollywood & Barat',
  'FAKTA_DIGITAL', 91, 9, 'Fakta Jejak Digital Panduan Serikat', 'Dokumen panduan mogok resmi serikat pekerja SAG-AFTRA dan rilis aliansi produser AMPTP.',
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80', 'Gedung teater dan festival film di Los Angeles. (Foto: Cinema Industry Archives)', '2026-10-10T17:15:00Z', 6,
  'Raditya Dananjaya', 'raditya-dananjaya', 'Redaktur Investigasi Pop-Kultur', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  '["Zendaya"]', '[{"timeLabel":"20 Sep 2026","title":"Bocornya Draft Klausul AI Interactive Game Contract","description":"Tangkapan layar perjanjian lisensi suara sintetis tanpa royalti beredar di forum pengisi suara profesional.","receiptType":"tweet"},{"timeLabel":"02 Okt 2026","title":"Deklarasi Boikot Resmi Serikat SAG-AFTRA","description":"Perintah penghentian seluruh sesi pengambilan sampel suara dan gerak biometrik untuk studio yang menolak perjanjian proteksi.","receiptType":"document"},{"timeLabel":"10 Okt 2026","title":"Dukungan RUU NO FAKES Act di Senat AS","description":"Koalisi aktor dan musisi bersaksi di hadapan Komite Kehakiman Kongres mendesak undang-undang perlindungan biometrik federal.","receiptType":"statement"}]', 3,
  0, 0, 81, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  excerpt = excluded.excerpt,
  content_html = excluded.content_html,
  category = excluded.category,
  category_label = excluded.category_label,
  ghibah_meter_status = excluded.ghibah_meter_status,
  ghibah_meter_fact = excluded.ghibah_meter_fact,
  ghibah_meter_rumor = excluded.ghibah_meter_rumor,
  ghibah_meter_label = excluded.ghibah_meter_label,
  ghibah_meter_desc = excluded.ghibah_meter_desc,
  hero_image = excluded.hero_image,
  image_caption = excluded.image_caption,
  published_at = excluded.published_at,
  reading_time_minutes = excluded.reading_time_minutes,
  author_name = excluded.author_name,
  author_slug = excluded.author_slug,
  author_role = excluded.author_role,
  author_avatar = excluded.author_avatar,
  entities_json = excluded.entities_json,
  timeline_json = excluded.timeline_json,
  digital_receipts_count = excluded.digital_receipts_count,
  is_featured = excluded.is_featured,
  is_hero = excluded.is_hero,
  trending_score = excluded.trending_score,
  updated_at = CURRENT_TIMESTAMP;
