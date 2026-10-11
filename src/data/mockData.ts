import { Article, Celebrity, TrendingTag } from '@/types';

export const TRENDING_TAGS: TrendingTag[] = [
  { id: '1', tag: '#KasusRoyaltiArtis', slug: 'kasus-royalti-artis', category: 'Seleb Lokal', talkCount: '+42k di X', isHot: true },
  { id: '2', tag: '#DramaLiveTikTok', slug: 'drama-live-tiktok', category: 'Creator', talkCount: '+28k di TikTok', isHot: true },
  { id: '3', tag: '#KlarifikasiEksklusif', slug: 'klarifikasi-eksklusif', category: 'Verifikasi', talkCount: '+19k di X', isHot: false },
  { id: '4', tag: '#DispacthKPopBongkar', slug: 'dispatch-kpop-bongkar', category: 'K-Pop', talkCount: '+55k di X', isHot: true },
  { id: '5', tag: '#SidangCeraiViral', slug: 'sidang-cerai-viral', category: 'Seleb Lokal', talkCount: '+14k warganet', isHot: false },
  { id: '6', tag: '#HollywoodBoycott', slug: 'hollywood-boycott', category: 'Hollywood', talkCount: '+31k di Reddit', isHot: false },
];

export const MOCK_CELEBRITIES: Celebrity[] = [
  {
    id: 'celeb-1',
    slug: 'rachel-vennya',
    name: 'Rachel Vennya Roland',
    stageName: 'Rachel Vennya',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    profession: 'Digital Creator & Entrepreneur',
    age: 29,
    agency: 'Raven Entertainment Group',
    relationshipStatus: 'In a Relationship',
    circle: ['Salim Nauderer', 'Erika Carlina', 'Keanu Agl', 'Fadil Jaidi'],
    verifiedAccounts: [
      { platform: 'instagram', handle: '@rachelvennya', url: 'https://instagram.com' },
      { platform: 'tiktok', handle: '@rachelvennya', url: 'https://tiktok.com' },
      { platform: 'x', handle: '@rachelvennya23', url: 'https://x.com' },
    ],
    bio: 'Pionir selebgram dan kreator konten digital Indonesia dengan lebih dari 7 juta pengikut. Kerap menjadi episentrum perbincangan warganet terkait dinamika hubungan personal, bisnis F&B, dan isu sosial.',
    careerHighlights: [
      'Founder brand kuliner Ngikan & Lokasaji',
      'Penerima Penghargaan Creator of The Year 2022',
      'Aktivis penggalangan dana sosial darurat dengan rekor Rp 9 Miliar+',
    ],
    dramaCount: 4,
    sentimentSummary: 'Sentimen terbelah: 54% apresiasi terhadap transparansi & filantropi, 46% skeptisisme terhadap dinamika relasi asmara.',
  },
  {
    id: 'celeb-2',
    slug: 'han-so-hee',
    name: 'Lee So-hee',
    stageName: 'Han So-hee',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    profession: 'Aktris & Global Fashion Ambassador',
    age: 30,
    agency: '9Ato Entertainment (Seoul)',
    relationshipStatus: 'Single',
    circle: ['Song Hye-kyo', 'Ryu Jun-yeol', 'Jeon Jong-seo'],
    verifiedAccounts: [
      { platform: 'instagram', handle: '@xeesoxee', url: 'https://instagram.com' },
      { platform: 'x', handle: '@hansohee_kr', url: 'https://x.com' },
    ],
    bio: 'Bintang drama terkemuka Korea Selatan yang dikenal lewat peran berani di The World of the Married dan My Name. Pernah mengguncang jagat maya akibat interaksi langsung tanpa filter di blog pribadinya.',
    careerHighlights: [
      'Best New Actress - Baeksang Arts Awards Nominee',
      'Global Brand Ambassador Boucheron Paris & Balenciaga',
      'Pemeran utama serial blockbuster Gyeongseong Creature',
    ],
    dramaCount: 3,
    sentimentSummary: '72% warganet memuji keberanian sikap independennya, 28% mengkritik gaya komunikasi emosional di ranah publik.',
  },
  {
    id: 'celeb-3',
    slug: 'reza-rahadian',
    name: 'Reza Rahadian Matulessy',
    stageName: 'Reza Rahadian',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    profession: 'Aktor Film & Ketua Komite FFI',
    age: 37,
    agency: 'Indonesian Film Actors Guild',
    relationshipStatus: 'Private',
    circle: ['Christine Hakim', 'Laura Basuki', 'Hanung Bramantyo'],
    verifiedAccounts: [
      { platform: 'instagram', handle: '@officialpilarez', url: 'https://instagram.com' },
    ],
    bio: 'Aktor watak legendaris generasi modern perfilman Indonesia dengan raihan 5 Piala Citra. Dikenal sangat menjaga privasi kehidupan personal namun vokal dalam advokasi undang-undang hak cipta dan royalti seniman.',
    careerHighlights: [
      '5x Pemenang Piala Citra Festival Film Indonesia',
      'Ketua Komite Festival Film Indonesia (2021-2023)',
      'Duta Besar Hak Asasi Pekerja Seni Kreatif Nasional',
    ],
    dramaCount: 1,
    sentimentSummary: '89% sentimen positif publik sebagai figur teladan integritas perfilman nasional.',
  },
  {
    id: 'celeb-4',
    slug: 'fuji-an',
    name: 'Fujianti Utami Putri',
    stageName: 'Fuji An',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1493655161922-ef98929de9d8?auto=format&fit=crop&w=1200&q=80',
    profession: 'Content Creator & Brand Ambassador',
    age: 22,
    agency: 'Indo Mega Creator Media',
    relationshipStatus: 'Single',
    circle: ['Fadly Faisal', 'Violenzia Jeanette', 'Raffi Ahmad'],
    verifiedAccounts: [
      { platform: 'instagram', handle: '@fuji_an', url: 'https://instagram.com' },
      { platform: 'tiktok', handle: '@fujiiian', url: 'https://tiktok.com' },
    ],
    bio: 'Fenomena kreator muda dengan daya tarik interaksi tertinggi di TikTok dan Instagram Indonesia. Kerap menjadi target perang narasi antar-fandom netizen terkait perjodohan warganet.',
    careerHighlights: [
      'Pemenang TikTok Awards Indonesia Popular Creator',
      'Brand Ambassador 10+ Brand Fashion & Skincare Nasional',
    ],
    dramaCount: 6,
    sentimentSummary: 'Engaged fan-base masif; rentan perang komentar spekulatif di kolom gosip media sosial.',
  },
  {
    id: 'celeb-5',
    slug: 'zendaya',
    name: 'Zendaya Maree Stoermer Coleman',
    stageName: 'Zendaya',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    profession: 'Aktris Hollywood & Produser',
    age: 28,
    agency: 'CAA (Creative Artists Agency Hollywood)',
    relationshipStatus: 'Dating (Tom Holland)',
    circle: ['Tom Holland', 'Timothée Chalamet', 'Law Roach', 'Hunter Schafer'],
    verifiedAccounts: [
      { platform: 'instagram', handle: '@zendaya', url: 'https://instagram.com' },
      { platform: 'x', handle: '@zendaya', url: 'https://x.com' },
    ],
    bio: 'Bintang generasi baru perfilman Hollywood peraih dua piala Primetime Emmy Awards. Menjadi tolak ukur fashion red-carpet global dan ikon independensi bintang muda tanpa sensasi murahan.',
    careerHighlights: [
      '2x Pemenang Primetime Emmy Award Aktris Terbaik (Euphoria)',
      'Bintang waralaba Dune dan Spider-Man Box Office',
    ],
    dramaCount: 1,
    sentimentSummary: '94% apresiasi global atas talenta, selera fashion, dan batas tegas kehidupan pribadi.',
  },
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'duduk-perkara-royalti-musik-musisi-vs-promotor-konser',
    title: 'Duduk Perkara Polemik Royalti Musik 2026: Kronologi Lengkap & Jejak Digital Gugatan LMKN',
    excerpt: 'Bukan sekadar heboh di media sosial, ini alur kronologi perseteruan royalti hak cipta antara musisi senior, asosiasi promotor konser, dan regulasi LMKN yang memicu perdebatan sengit.',
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-200">
        Duduk perkaranya bermula dari perdebatan penetapan tarif royalti mechanical dan performing rights yang dinilai sejumlah promotor konser lokal membebani biaya produksi acara musik pasca-pandemi.
      </p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Latar Belakang: Gugatan Tertutup yang Bocor ke Forum X</h2>
      <p>
        Berdasarkan penelusuran jejak digital tim investigasi NgeGhibah, polemik ini pertama kali terendus ketika sepucuk surat somasi internal dari asosiasi pencipta lagu bocor ke publik pada awal pekan ini. Warganet sempat mengira isu ini sekadar perselisihan personal antar musisi, namun data membuktikan ada regulasi penarikan royalti satu pintu yang tengah diperebutkan.
      </p>

      <blockquote class="border-l-4 border-neon-pink pl-4 py-2 my-6 bg-velvet/50 italic text-slate-300 rounded-r-lg">
        "Kami tidak menolak membayar hak cipta. Yang kami tuntut adalah transparansi distribusi ke pencipta asli, bukan sistem administrasi yang memotong hingga 40% tanpa laporan audit publik." 
        <span class="block text-xs text-neon-cyan mt-1 font-mono tracking-wider">— Kutipan pernyataan resmi asosiasi promotor independen.</span>
      </blockquote>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Verifikasi Fakta & Sentimen Netizen</h2>
      <p>
        Analisis sentimen media sosial menunjukkan mayoritas netizen Indonesia (68%) berpihak pada transparansi langsung kepada para musisi dan pencipta lagu yang selama ini hidup di bawah standar royalti layak. Namun, kekhawatiran melambungnya harga tiket konser musik di Indonesia juga menjadi sorotan tajam.
      </p>
      <p>
        Klarifikasi resmi yang dirilis pihak regulator menegaskan bahwa proses mediasi tahap kedua akan dilaksanakan secara terbuka pekan depan dengan melibatkan perwakilan federasi musisi independen.
      </p>
    `,
    category: 'seleb-lokal',
    categoryLabel: 'Seleb Lokal',
    ghibahMeter: {
      status: 'TERKONFIRMASI',
      percentageFact: 91,
      percentageRumor: 9,
      label: 'Terkonfirmasi Resmi',
      description: 'Data berbasis berkas somasi resmi, rilis pers LMKN, dan pernyataan konfirmasi kedua belah pihak.',
    },
    heroImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Ilustrasi pertunjukan musik konser di Jakarta. (Foto: Dokumentasi Panggung Pop-Kultur / Unsplash)',
    publishedAt: '2026-10-11T09:30:00Z',
    readingTimeMinutes: 4,
    author: {
      name: 'Raditya Dananjaya',
      slug: 'raditya-dananjaya',
      role: 'Redaktur Investigasi Pop-Kultur',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    },
    entities: ['Reza Rahadian', 'Rachel Vennya'],
    timeline: [
      {
        timeLabel: '02 Okt 2026 • 11:20 WIB',
        title: 'Bocornya Draft Surat Somasi di Komunitas X',
        description: 'Tangkapan layar lembar pertama somasi hak performing rights diunggah akun pemerhati industri musik dan mendapatkan 1.2 juta tayangan.',
        receiptType: 'tweet',
        receiptQuote: 'Industri festival mau dibawa ke mana kalau izin royalti ditagih per lagu tanpa ada database lagu terverifikasi?',
        receiptSource: 'Postingan akun terverifikasi di X (ID: @insidermusik_id)',
      },
      {
        timeLabel: '06 Okt 2026 • 15:45 WIB',
        title: 'Konferensi Pers Asosiasi Promotor Jakarta',
        description: 'Pihak promotor menolak tudingan wanprestasi dan meminta audit independen terhadap aliran dana royalti tahun anggaran 2024-2025.',
        receiptType: 'statement',
        receiptQuote: 'Seluruh dana deposit telah disetor ke rekening bersama notaris resmi.',
      },
      {
        timeLabel: '09 Okt 2026 • 18:00 WIB',
        title: 'Rilis Klarifikasi Resmi Regulator LMKN',
        description: 'Regulator membenarkan ada perbedaan metodologi perhitungan dan menyatakan jalur mediasi terbuka tanpa pembatalan izin festival.',
        receiptType: 'court',
        receiptSource: 'Surat Edaran No. 42/LMKN/X/2026 tertanggal 9 Oktober 2026',
      },
    ],
    digitalReceiptsCount: 3,
    isHero: true,
    isFeatured: true,
    trendingScore: 98,
  },
  {
    id: 'art-2',
    slug: 'kronologi-lengkap-drama-live-tiktok-creator-fuji-an',
    title: 'Kupas Tuntas dari Jejak Digital: Alur Kronologi Klarifikasi Sesi Live TikTok Rp 1,2 Miliar',
    excerpt: 'Bagaimana sebuah potongan rekaman live TikTok berdurasi 15 detik berubah menjadi perang narasi warganet. Ini duduk perkaranya berdasarkan jejak arsip digital tanpa bumbu sensasi.',
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-200">
        Bukan sekadar heboh, duduk perkaranya terungkap setelah rekaman layar sesi penjualan live TikTok yang menembus omset Rp 1,2 Miliar dalam 2 jam dituding menggunakan bot traffic.
      </p>
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Jejak Digital: Potongan Video Tanpa Konteks</h2>
      <p>
        Pemicu eskalasi percakapan warganet adalah sebuah unggahan anonim yang memotong pernyataan tim moderator saat sesi countdown voucher diskon. Warganet mengira terjadi manipulasi angka penonton, padahal sistem platform sempat mengalami server buffering massal.
      </p>
      <p>
        Berdasarkan verifikasi fakta data platform e-commerce analitis, lonjakan transaksi selaras dengan promosi voucher kilat yang telah dipersiapkan jauh hari.
      </p>
    `,
    category: 'creator-tiktok',
    categoryLabel: 'Creator & TikTok',
    ghibahMeter: {
      status: 'FAKTA_DIGITAL',
      percentageFact: 84,
      percentageRumor: 16,
      label: 'Fakta Jejak Digital',
      description: 'Data log transaksi analitik dan perbandingan rekaman utuh (bukan potongan 15 detik).',
    },
    heroImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Ilustrasi antarmuka analitik siaran langsung media sosial. (Foto: Pop Tech Media)',
    publishedAt: '2026-10-11T08:15:00Z',
    readingTimeMinutes: 3,
    author: {
      name: 'Nabila Safitri',
      slug: 'nabila-safitri',
      role: 'Editor Tren Gen Z & Social Commerce',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    entities: ['Fuji An'],
    timeline: [
      {
        timeLabel: '08 Okt 2026 • 20:00 WIB',
        title: 'Sesi Live Flash Sale Dimulai',
        description: 'Puncak interaksi mencapai 180.000 penonton serentak saat kupon utama dibuka.',
        receiptType: 'video',
      },
      {
        timeLabel: '09 Okt 2026 • 02:15 WIB',
        title: 'Video Potongan 15 Detik Viral di FYP TikTok',
        description: 'Muncul narasi tudingan bot view yang ditonton lebih dari 4,8 juta kali tanpa verifikasi log.',
        receiptType: 'tweet',
      },
      {
        timeLabel: '10 Okt 2026 • 13:00 WIB',
        title: 'Pernyataan Resmi Pihak Brand Sponsor',
        description: 'Brand merilis bukti invoice log sistem server yang membuktikan transaksi riil tanpa rekayasa bot.',
        receiptType: 'document',
      },
    ],
    digitalReceiptsCount: 3,
    isFeatured: true,
    trendingScore: 89,
  },
  {
    id: 'art-3',
    slug: 'han-so-hee-comeback-proyek-film-hollywood-verifikasi',
    title: 'Verifikasi Fakta: Han So-hee Diisukan Gabung Waralaba Spy Hollywood, Ini Rekap Kontroversi & Tanggapan Agensi',
    excerpt: 'Menjawab rumor liar netizen forum TheQoo dan Reddit, agensi 9Ato Entertainment akhirnya buka suara terkait tawaran peran dalam proyek internasional beranggaran besar.',
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-200">
        Rumor bergabungnya bintang Korea Selatan Han So-hee ke jajaran cast film spionase Hollywood memicu spekulasi luas di kalangan komunitas internasional.
      </p>
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Duduk Perkaranya: Pertemuan di Paris Fashion Week</h2>
      <p>
        Isu bermula dari foto makan malam santai di Paris antara Han So-hee dan sutradara kawakan AS. Komunitas warganet langsung mengaitkannya dengan audisi rahasia sekuel film laga.
      </p>
      <p>
        Melalui pernyataan tertulis resmi ke media lokal Korea, agensi mengonfirmasi bahwa pertemuan tersebut bersifat courtesy meeting pertemanan dan belum ada kontrak resmi yang ditandatangani.
      </p>
    `,
    category: 'kpop-asia',
    categoryLabel: 'K-Pop & Asia',
    ghibahMeter: {
      status: 'MENUNGGU_TANGGAPAN',
      percentageFact: 58,
      percentageRumor: 42,
      label: 'Menunggu Klarifikasi Lanjutan',
      description: 'Pertemuan terkonfirmasi nyata, namun negosiasi kontrak peran masih berstatus tahap penjajakan.',
    },
    heroImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Han So-hee menghadiri acara karpet merah promosi film. (Foto: Hallyu Press Archives)',
    publishedAt: '2026-10-10T19:40:00Z',
    readingTimeMinutes: 3,
    author: {
      name: 'Kenzo Pratama',
      slug: 'kenzo-pratama',
      role: 'Spesialis Budaya Pop Asia & Hallyu',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    entities: ['Han So-hee'],
    timeline: [
      {
        timeLabel: '05 Okt 2026',
        title: 'Foto Makan Malam Paris Bocor di Weibo',
        description: 'Tampak sang aktris berbincang bersama produser eksekutif studio waralaba terkemuka.',
        receiptType: 'video',
      },
      {
        timeLabel: '07 Okt 2026',
        title: 'Perdebatan Hangat di Forum Pann Nate & TheQoo',
        description: 'Warganet membedah jadwal syuting aktris yang dilaporkan kosong untuk kuartal pertama tahun depan.',
        receiptType: 'tweet',
      },
      {
        timeLabel: '10 Okt 2026',
        title: 'Klarifikasi Singkat 9Ato Entertainment',
        description: 'Agensi menyatakan tawaran memang ada namun fokus saat ini masih pada promosi karya domestik.',
        receiptType: 'statement',
      },
    ],
    digitalReceiptsCount: 2,
    isFeatured: true,
    trendingScore: 82,
  },
  {
    id: 'art-4',
    slug: 'zendaya-tom-holland-isu-pertunangan-dan-fakta-arsip',
    title: 'Rumor vs Bukti Nyata: Isu Pertunangan Rahasia Zendaya & Tom Holland, Ini Analisis Jejak Digital DeuxMoi',
    excerpt: 'Kabar burung pertunangan pasangan emas Hollywood kembali membanjiri feed media sosial. Kami menyaring spekulasi liar dan menghadirkan fakta terverifikasi dari lingkaran terdekat.',
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-200">
        Setiap kali cincin baru melingkar di jari Zendaya, internet seolah berhenti berputar. Namun apakah kali ini spekulasi warganet memiliki landasan faktual?
      </p>
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Bukan Sekadar Heboh: Fakta Cincin Sponsor Brand</h2>
      <p>
        Berdasarkan konfirmasi stylist terpercaya Law Roach, perhiasan yang dikenakan dalam gala premier akhir pekan lalu merupakan pinjaman eksklusif rumah mode perhiasan Italia dan bukan cincin pertunangan pribadi.
      </p>
      <p>
        Pasangan ini dikenal sangat menjaga batas privasi personal mereka dari incaran paparazzi sejak awal kedekatan di lokasi syuting 2016.
      </p>
    `,
    category: 'hollywood-barat',
    categoryLabel: 'Hollywood & Barat',
    ghibahMeter: {
      status: 'RUMOR_NETIZEN',
      percentageFact: 28,
      percentageRumor: 72,
      label: 'Rumor / Sentimen Netizen',
      description: 'Berdasarkan klaim anonim tanpa konfirmasi representatif publik figur.',
    },
    heroImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Zendaya di karpet merah festival film bergengsi. (Foto: Hollywood Archive Network)',
    publishedAt: '2026-10-10T14:20:00Z',
    readingTimeMinutes: 4,
    author: {
      name: 'Raditya Dananjaya',
      slug: 'raditya-dananjaya',
      role: 'Redaktur Investigasi Pop-Kultur',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    },
    entities: ['Zendaya'],
    timeline: [
      {
        timeLabel: '04 Okt 2026',
        title: 'Unggahan Blind Item DeuxMoi',
        description: 'Sebuah pesan anonim menyebut aktor A-list memesan cincin berlian khusus di New York.',
        receiptType: 'tweet',
      },
      {
        timeLabel: '08 Okt 2026',
        title: 'Penampilan di Karpet Merah',
        description: 'Kamera paparazzi menyoroti jari manis sang bintang dan memicu 40.000 tweet spekulatif.',
        receiptType: 'video',
      },
      {
        timeLabel: '09 Okt 2026',
        title: 'Klarifikasi Langsung Stylist Law Roach',
        description: 'Dalam wawancara singkat di story Instagram, ditegaskan cincin tersebut perhiasan sponsorship promosi.',
        receiptType: 'statement',
      },
    ],
    digitalReceiptsCount: 2,
    isFeatured: false,
    trendingScore: 76,
  },
  {
    id: 'art-5',
    slug: 'reza-rahadian-advokasi-uu-pekerja-kreatif-indonesia',
    title: 'Bukan Sekadar Heboh, Ini Duduk Perkaranya: Reza Rahadian Suarakan Jaminan Jam Kerja Layak Kru Film',
    excerpt: 'Aktor senior Reza Rahadian memimpin audiensi dengan parlemen terkait perlindungan jam kerja kru perfilman nasional. Simak kronologi perumusan naskah akademik hak pekerja seni.',
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-200">
        Di tengah hingar bingar gemerlap panggung film, masalah jam kerja kru yang kerap menembus 20 jam sehari menjadi isu kritis yang diangkat langsung ke meja legislator.
      </p>
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Kronologi Lengkap Penyerahan Petisi</h2>
      <p>
        Bersama perwakilan berbagai serikat pekerja perfilman, audiensi resmi telah terlaksana dan menghasilkan kesepakatan pembentukan kelompok kerja standar upah dan keselamatan kerja minimum.
      </p>
    `,
    category: 'seleb-lokal',
    categoryLabel: 'Seleb Lokal',
    ghibahMeter: {
      status: 'TERKONFIRMASI',
      percentageFact: 98,
      percentageRumor: 2,
      label: 'Terkonfirmasi Resmi',
      description: 'Dokumen risalah audiensi resmi DPR RI dan siaran pers gabungan asosiasi perfilman.',
    },
    heroImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Suasana di balik layar produksi sinema Indonesia. (Foto: Arsip FFI)',
    publishedAt: '2026-10-09T11:00:00Z',
    readingTimeMinutes: 3,
    author: {
      name: 'Raditya Dananjaya',
      slug: 'raditya-dananjaya',
      role: 'Redaktur Investigasi Pop-Kultur',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    },
    entities: ['Reza Rahadian'],
    timeline: [
      {
        timeLabel: '01 Okt 2026',
        title: 'Survei Jam Kerja Dirilis Serikat',
        description: 'Data menunjukkan 74% pekerja teknis mengalami kelelahan kronis akibat sistem overtime tanpa batasan jam kerja.',
        receiptType: 'document',
      },
      {
        timeLabel: '09 Okt 2026',
        title: 'Audiensi Terbuka di Senayan',
        description: 'Penyampaian naskah rekomendasi standar jam operasional shooting maksimal 14 jam per hari.',
        receiptType: 'statement',
      },
    ],
    digitalReceiptsCount: 2,
    isFeatured: false,
    trendingScore: 88,
  },
  {
    id: 'art-6',
    slug: 'audit-keuangan-yayasan-rachel-vennya-transparansi-donasi',
    title: 'Transparansi Dana Kemanusiaan: Rachel Vennya Rilis Laporan Audit Independen Donasi Bencana',
    excerpt: 'Menjawab pertanyaan warganet terkait akuntabilitas penyaluran dana sosial, tim manajemen mempublikasikan hasil audit KAP dengan opini Wajar Tanpa Pengecualian.',
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-200">
        Menghadapi sorotan tajam netizen media sosial yang kerap meragukan transparansi penggalangan dana selebgram, Rachel Vennya mengambil langkah hukum proaktif dengan membuka laporan keuangan yayasan.
      </p>
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Verifikasi Fakta: Hasil Audit Wajar Tanpa Pengecualian</h2>
      <p>
        Berdasarkan laporan Kantor Akuntan Publik independen yang diakses oleh tim NgeGhibah, seluruh penerimaan donasi masyarakat senilai Rp 8,4 Miliar telah disalurkan 100% tanpa potongan operasional yayasan pribadi.
      </p>
    `,
    category: 'creator-tiktok',
    categoryLabel: 'Creator & TikTok',
    ghibahMeter: {
      status: 'TERKONFIRMASI',
      percentageFact: 95,
      percentageRumor: 5,
      label: 'Terkonfirmasi Resmi',
      description: 'Laporan keuangan audit publik KAP bersertifikasi resmi OJK.',
    },
    heroImage: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Penyaluran bantuan logistik kemanusiaan di lapangan. (Foto: Dokumentasi Tim Relawan)',
    publishedAt: '2026-10-08T16:00:00Z',
    readingTimeMinutes: 3,
    author: {
      name: 'Nabila Safitri',
      slug: 'nabila-safitri',
      role: 'Editor Tren Gen Z & Social Commerce',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    entities: ['Rachel Vennya'],
    timeline: [
      {
        timeLabel: '28 Sep 2026',
        title: 'Munculnya Pertanyaan Warganet di Threads',
        description: 'Sebuah utas menanyakan status laporan akhir kampanye bantuan bencana alam semester lalu.',
        receiptType: 'tweet',
      },
      {
        timeLabel: '08 Okt 2026',
        title: 'Rilis Dokumen PDF Audit Terbuka',
        description: 'Tautan arsip laporan audit KAP diunggah ke publik dengan rincian rekening koran per bank.',
        receiptType: 'document',
      },
    ],
    digitalReceiptsCount: 2,
    isFeatured: false,
    trendingScore: 74,
  },
  {
    id: 'art-7',
    slug: 'sengketa-kontrak-eksklusif-newjeans-vs-ador-duduk-perkara',
    title: 'Kupas Tuntas Sengketa Kontrak NewJeans vs ADOR & HYBE: Rekonstruksi Hukum dan Kronologi Lengkap',
    excerpt: 'Duduk perkara sengketa kontrak kerja eksklusif NewJeans dengan ADOR pasca pemecatan Min Hee-jin. Analisis klausul pelanggaran kepercayaan, somasi resmi, dan peta eskalasi hukum.',
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-200">
        Bukan sekadar friksi internal agensi, sengketa pemutusan kontrak eksklusif NewJeans terhadap ADOR dan induk perusahaan HYBE mencerminkan titik balik terbesar relasi artis dan korporasi industri K-Pop modern.
      </p>
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Duduk Perkaranya: Pelanggaran Asas Kepercayaan & Somasi 14 Hari</h2>
      <p>
        Perselisihan hukum ini memuncak ketika kelima anggota NewJeans secara serempak melayangkan surat sertifikasi isi (content-certified mail) yang menuntut pemulihan posisi manajemen kreatif orisinal dalam tenggat waktu 14 hari. Kegagalan pihak direksi ADOR dalam memenuhi tuntutan tersebut menjadi dasar yuridis pengajuan pembatalan kontrak sepihak.
      </p>
      <blockquote class="border-l-4 border-neon-cyan pl-4 py-2 my-6 bg-velvet/50 italic text-slate-300 rounded-r-lg">
        "Kontrak eksklusif menuntut rasa saling percaya timbal balik sebagai prasyarat mutlak. Ketika rasa percaya tersebut dihancurkan secara sistematis, kewajiban pemenuhan kontrak gugur demi hukum."
        <span class="block text-xs text-neon-pink mt-1 font-mono tracking-wider">— Kutipan pernyataan tim kuasa hukum NewJeans dalam konferensi pers resmi.</span>
      </blockquote>
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Verifikasi Jejak Digital & Polarisasi Netizen Global</h2>
      <p>
        Berdasarkan data penelusuran digital komunitas internet global, percakapan terpolarisasi tajam antara kubu pendukung hak otonomi seniman melawan kubu pemegang saham korporasi. Data menunjukkan lebih dari 82% warganet internasional mendesak perlindungan hak cipta musisi muda dari klausul penalti ganti rugi yang tidak proporsional.
      </p>
    `,
    category: 'kpop-asia',
    categoryLabel: 'K-Pop & Asia',
    ghibahMeter: {
      status: 'TERKONFIRMASI',
      percentageFact: 94,
      percentageRumor: 6,
      label: 'Terkonfirmasi Resmi',
      description: 'Berdasarkan surat somasi tersertifikasi, rilis resmi bursa efek KRX, dan konferensi pers terbuka para pihak.',
    },
    heroImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Ilustrasi sorotan panggung konser megah di Seoul. (Foto: Pop Culture Archive Network)',
    publishedAt: '2026-10-11T12:00:00Z',
    readingTimeMinutes: 4,
    author: {
      name: 'Kenzo Pratama',
      slug: 'kenzo-pratama',
      role: 'Editor Hiburan Asia & Hallyu Culture',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    entities: ['NewJeans', 'Min Hee-jin'],
    timeline: [
      {
        timeLabel: '27 Agu 2024 • 14:00 KST',
        title: 'Pemberhentian Sepihak CEO Min Hee-jin',
        description: 'Dewan direksi ADOR menunjuk pimpinan baru tanpa persetujuan tim kreatif utama grup.',
        receiptType: 'document',
        receiptQuote: 'Keputusan dewan diambil sesuai undang-undang komersial tanpa pelanggaran prosedur anggaran rumah tangga.',
      },
      {
        timeLabel: '13 Nov 2024 • 18:30 KST',
        title: 'Pengiriman Somasi Bersertifikat Isi',
        description: 'NewJeans memberikan batas waktu 14 hari bagi ADOR untuk memulihkan kontrak kerja kreatif.',
        receiptType: 'statement',
      },
      {
        timeLabel: '28 Nov 2024 • 20:00 KST',
        title: 'Konferensi Pers Pengumuman Pemutusan Kontrak',
        description: 'Pernyataan resmi bahwa kontrak eksklusif berakhir per 29 November pukul 00:00 KST.',
        receiptType: 'court',
      },
    ],
    digitalReceiptsCount: 3,
    isFeatured: true,
    trendingScore: 95,
  },
  {
    id: 'art-8',
    slug: 'boikot-aktor-hollywood-isu-ai-hak-citra-sag-aftra',
    title: 'Bukan Sekadar Sensasi: Mengapa Bintang Top Hollywood Bersatu Boikot Klausul Replikasi AI 2026',
    excerpt: 'Menolak digital cloning tanpa izin seumur hidup, aliansi aktor Hollywood dan kreator suara melancarkan boikot serentak terhadap klausul kontrak studio game dan streaming besar.',
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-200">
        Radar pop-kultur berbobot mencatat gelombang perlawanan baru pekerja seni Hollywood terhadap klausul eksploitasi kecerdasan buatan sintetis tanpa kompensasi residual yang adil.
      </p>
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Duduk Perkaranya: Hak Kepemilikan Wajah & Suara Digital</h2>
      <p>
        Bukan sekadar heboh, duduk perkaranya berakar pada draf kontrak baru studio hiburan yang menyisipkan klausul perpetual digital replica. Klausul ini memungkinkan studio menciptakan figur AI seorang aktor secara terus-menerus bahkan setelah proyek selesai.
      </p>
      <p>
        Serikat SAG-AFTRA secara resmi memberlakukan sanksi boikot industri terhadap rumah produksi yang menolak menyepakati perjanjian proteksi biometrik independen.
      </p>
    `,
    category: 'hollywood-barat',
    categoryLabel: 'Hollywood & Barat',
    ghibahMeter: {
      status: 'FAKTA_DIGITAL',
      percentageFact: 91,
      percentageRumor: 9,
      label: 'Fakta Jejak Digital',
      description: 'Dokumen panduan mogok resmi serikat pekerja SAG-AFTRA dan rilis aliansi produser AMPTP.',
    },
    heroImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Gedung teater dan festival film di Los Angeles. (Foto: Cinema Industry Archives)',
    publishedAt: '2026-10-10T17:15:00Z',
    readingTimeMinutes: 3,
    author: {
      name: 'Raditya Dananjaya',
      slug: 'raditya-dananjaya',
      role: 'Redaktur Investigasi Pop-Kultur',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    },
    entities: ['Zendaya', 'Tom Holland'],
    timeline: [
      {
        timeLabel: '20 Sep 2026',
        title: 'Bocornya Draft Klausul AI Interactive',
        description: 'Tangkapan layar perjanjian lisensi suara sintetis tanpa royalti beredar di forum pengisi suara profesional.',
        receiptType: 'tweet',
      },
      {
        timeLabel: '02 Okt 2026',
        title: 'Deklarasi Boikot Resmi SAG-AFTRA',
        description: 'Perintah penghentian seluruh sesi pengambilan sampel suara dan gerak biometrik untuk 10 studio besar.',
        receiptType: 'document',
      },
    ],
    digitalReceiptsCount: 2,
    isFeatured: false,
    trendingScore: 81,
  },
];

export const EDITORIAL_TEAM = [
  {
    name: 'Johan Anggoro',
    role: 'Pemimpin Redaksi & Penanggung Jawab',
    bio: 'Jurnalis senior dengan pengalaman 12+ tahun di media investigasi digital nasional. Berlisensi Wartawan Utama Dewan Pers.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    email: 'pemred@ngeghibah.com',
  },
  {
    name: 'Raditya Dananjaya',
    role: 'Redaktur Pelaksana & Investigasi Pop-Kultur',
    bio: 'Membedah dinamika industri hiburan, hukum hak cipta karya seni, dan jejak digital selebritas berbasis data.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
    email: 'raditya@ngeghibah.com',
  },
  {
    name: 'Nabila Safitri',
    role: 'Editor Tren Gen Z & Social Listening',
    bio: 'Spesialis algoritma TikTok, kultur internet komunitas lokal, dan analisis sentimen warganet Indonesia.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    email: 'nabila@ngeghibah.com',
  },
  {
    name: 'Kenzo Pratama',
    role: 'Editor Hiburan Asia & Hallyu Culture',
    bio: 'Menghubungkan fandom K-Pop dan C-Drama dengan verifikasi langsung dari sumber agensi Korea & forum primer.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    email: 'kenzo@ngeghibah.com',
  },
];
