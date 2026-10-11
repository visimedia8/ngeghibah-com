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
    dossierDetail: {
      birthDate: '23 September 1995',
      birthPlace: 'Jakarta, Indonesia',
      zodiac: 'Libra',
      nationality: 'Indonesia',
      yearsActive: '2015 – Sekarang',
      education: 'London School of Public Relations (LSPR) Jakarta',
      netWorthEstimate: 'Tier A Creator (Rp 15M - Rp 25M)',
      topAffiliations: ['Raven Entertainment', 'Ngikan Yuk', 'Lokasaji', 'Kolektif Filantropi'],
    },
    controversies: [
      {
        year: '2021',
        title: 'Pelanggaran Karantina Kesehatan Wisma Atlet',
        status: 'TERKONFIRMASI',
        summary: 'Didakwa melanggar prosedur karantina wajib pasca perjalanan luar negeri.',
        resolution: 'Vonis Pengadilan Negeri Tangerang 4 bulan percobaan dengan denda Rp 50 juta.',
      },
      {
        year: '2023',
        title: 'Polemik Refund Dana Tiket Konser Internasional',
        status: 'TERKONFIRMASI',
        summary: 'Keterlambatan pengembalian dana tiket akibat kendala vendor perantara.',
        resolution: 'Penyelesaian ganti rugi 100% dan permintaan maaf publik resmi.',
      },
      {
        year: '2024',
        title: 'Dugaan Perseteruan Asmara & Sindiran Medsos',
        status: 'FAKTA_DIGITAL',
        summary: 'Percakapan digital yang bocor di medsos mengenai dinamika pertemanan.',
        resolution: 'Klarifikasi personal melalui siaran podcast dan penegasan batas privasi.',
      },
    ],
    businessVentures: [
      { name: 'Ngikan Yuk', category: 'F&B (Fast Casual Seafood)', role: 'Co-founder & Shareholder', status: 'Aktif Beroperasi' },
      { name: 'Lokasaji', category: 'Frozen Food Tradisional', role: 'Founder & Brand Owner', status: 'Aktif Beroperasi' },
      { name: 'Raven Management', category: 'Talent Agency & Digital Creative', role: 'Principal Owner', status: 'Aktif Beroperasi' },
      { name: 'Slim Fast Herbal', category: 'Beauty & Wellness', role: 'Early Brand Endorser', status: 'Non-aktif / Selesai' },
    ],
    awards: [
      { year: '2022', award: 'Indonesia Creator Economy Awards', category: 'Top Digital Influencer of the Year', result: 'Menang' },
      { year: '2021', award: 'Kitabisa Philanthropy Awards', category: 'Penggalang Dana Kemanusiaan Terbesar', result: 'Menang' },
    ],
    faq: [
      {
        question: 'Apa saja lini bisnis aktif Rachel Vennya saat ini?',
        answer: 'Rachel Vennya memegang kepemilikan di Ngikan Yuk, Lokasaji, dan Raven Entertainment Agency serta aktif sebagai investor digital.',
      },
      {
        question: 'Bagaimana status hukum perkara karantina 2021?',
        answer: 'Perkara telah berkekuatan hukum tetap (inkrah) di PN Tangerang dengan masa percobaan dan denda yang telah diselesaikan penuh.',
      },
    ],
    editorialSections: [
      {
        title: 'Trajektori Karier: Dari Pelopor Selebgram ke Konglomerasi Kreator Digital',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Rachel Vennya Roland menempati posisi unik dalam sejarah perkembangan ekonomi kreator digital di Indonesia. Mengawali rekam jejak digitalnya dari platform tanya-jawab Ask.fm pada medio 2013-2014, ia berhasil bertransformasi dari figur remaja populer menjadi salah satu arsitek utama monetisasi media sosial modern di tanah air. Di saat sebagian besar pesohor konvensional masih memandang Instagram sekadar etalase dokumentasi personal, Rachel merupakan salah satu pionir yang melembagakan konsep <em>paid endorsement</em> profesional dengan standar tarif terstruktur dan tim produksi visual independen.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Kekuatan utama daya tarik komersial Rachel terletak pada loyalitas audiens demografi perempuan muda dan ibu modern (<em>young mothers</em>). Narasi kehidupannya—dari perjalanan kemandirian finansial usia muda, pernikahan megah bertema dongeng, dinamika perceraian, hingga pengasuhan dua anak—dikonsumsi publik secara intensif layaknya serial realitas terbuka. Tingkat keterikatan (<em>engagement rate</em>) akun media sosialnya secara konsisten melampaui rata-rata industri, menjadikannya salah satu aset periklanan digital paling bernilai tinggi di Indonesia.
          </p>
        `,
      },
      {
        title: 'Analisis Jejaring Sosial & Lingkaran Relasi (Circle of Influence)',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Dalam sosiologi internet Indonesia, lingkaran pertemanan Rachel Vennya kerap dipandang sebagai barometer tren gaya hidup urban Jakarta Selatan. Relasi eratnya dengan sesama figur digital berpengaruh seperti Keanu Agl, Fadil Jaidi, dan Erika Carlina bukan sekadar hubungan sosial personal, melainkan ekosistem kolaborasi komersial simbiosis mutualisme.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Ketika sebuah brand atau proyek komersial melibatkan salah satu anggota lingkaran ini, eksposur organik secara otomatis berlipat ganda melalui interaksi silang di Instagram Story dan siaran langsung. Namun demikian, visibilitas ekstrem ini juga menjadi pedang bermata dua: setiap gesekan personal di dalam lingkaran relasi, termasuk dinamika hubungan asmara dengan Salim Nauderer, kerap memicu perang narasi warganet dan bocornya tangkapan layar percakapan digital ke forum X (Twitter).
          </p>
        `,
      },
      {
        title: 'Ekosistem Bisnis, Valuasi & Asesmen Brand Safety Pengiklan',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Diversifikasi finansial Rachel Vennya menunjukkan transisi matang dari sekadar penerima honor promosi (<em>endorser</em>) menjadi pemilik ekuitas usaha riil. Melalui jaringan kemitraan bisnis F&B seperti <strong>Ngikan Yuk</strong> (gerai cepat saji olahan ikan) dan <strong>Lokasaji</strong> (kuliner beku jajanan tradisional nusantara), ia membuktikan kapasitas konversi pengaruh media sosial menjadi arus kas operasional skala nasional dengan puluhan cabang kemitraan.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Dari sudut pandang <em>Brand Safety Index</em> korporasi multinasional, profil Rachel Vennya dikategorikan sebagai entitas komersial bervaluasi tinggi namun memerlukan mitigasi krisis reputasi terukur. Produk-produk kecantikan (skincare) dan fesyen massal tetap mengalokasikan anggaran endorsement besar kepadanya karena metrik konversi penjualan langsung (<em>direct-to-consumer sales</em>) yang terbukti konsisten, meskipun brand biasanya menyertakan klausul moralitas ketat dalam kontrak pasca-insiden 2021.
          </p>
        `,
      },
      {
        title: 'Forensik Rekam Jejak Krisis & Manajemen Pemulihan Reputasi (PR)',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Ujian paling berat terhadap legitimasi publik Rachel terjadi pada Oktober 2021 terkait kasus pelanggaran karantina kesehatan di Rumah Sakit Darurat COVID-19 Wisma Atlet Pademangan pasca-perjalanan dari New York, Amerika Serikat. Penyelidikan kepolisian mengungkap adanya bantuan oknum aparat pengamanan bandara untuk menghindari prosedur karantina wajib masa pandemi. Perkara ini berujung pada vonis Pengadilan Negeri Tangerang dengan hukuman 4 bulan penjara masa percobaan dan denda Rp 50 juta subsidair 1 bulan kurungan.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Kendati menuai kecaman keras dan gelombang pembatalan sosial (<em>cancel culture</em>) masif, Rachel menunjukkan ketahanan reputasi yang mengejutkan para pengamat komunikasi krisis. Alih-alih melakukan pembelaan defensif berkepanjangan, ia memilih strategi hiatus sementara, menyampaikan permintaan maaf terbuka tanpa dalih di kanal YouTube Boy William, menyelesaikan seluruh sanksi hukum, serta secara bertahap kembali melalui konten keseharian keluarga dan filantropi kemanusiaan.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Catatan rekam jejak filantropinya juga menjadi faktor penyeimbang sentimen publik. Melalui platform Kitabisa, Rachel tercatat menggalang dana darurat sosial hingga menembus rekor lebih dari Rp 9 Miliar untuk bantuan penanganan pandemi dan bencana alam, menegaskan paradoks posisinya di mata warganet: sosok yang sarat kontroversi personal namun memiliki kapasitas mobilisasi sosial nyata.
          </p>
        `,
      },
      {
        title: 'Indeks Sentimen Warganet & Prospek Jangka Panjang',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Berdasarkan analisis pemantauan sentimen media sosial tim intelijen pop-kultur NgeGhibah, persepsi publik terhadap Rachel Vennya terbelah menjadi dua kutub yang stabil: <strong>54% sentimen apresiatif/netral</strong> dan <strong>46% sentimen kritis/skeptis</strong>. Kelompok pendukung mengagumi transparansi emosional, ketegaran sebagai ibu tunggal berdaya, dan kecakapan bisnisnya. Sebaliknya, kelompok skeptis mengkritisi drama relasi personal yang kerap diumbar dan gaya hidup glamor yang dipandang berlebihan.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Prospek reputasi jangka panjang Rachel Vennya sangat bergantung pada kemampuannya menjaga pagar batas (<em>boundaries</em>) antara kehidupan asmara privat dengan citra profesional korporasinya. Selama ia mempertahankan transparansi filantropi dan kepatuhan hukum, statusnya sebagai salah satu titan ekonomi kreator Indonesia diproyeksikan tetap kokoh melintasi pergantian tren generasi warganet.
          </p>
        `,
      },
    ],
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
    dossierDetail: {
      birthDate: '18 November 1994',
      birthPlace: 'Ulsan, Korea Selatan',
      zodiac: 'Scorpio',
      nationality: 'Korea Selatan',
      yearsActive: '2016 – Sekarang',
      education: 'Ulsan Arts High School',
      netWorthEstimate: 'Global Tier ($5M - $10M)',
      topAffiliations: ['9Ato Entertainment', 'Boucheron Paris', 'Balenciaga', 'Charles & Keith'],
    },
    controversies: [
      {
        year: '2024',
        title: 'Spekulasi Hubungan Asmara Hawaii & Klarifikasi Blog',
        status: 'TERKONFIRMASI',
        summary: 'Perdebatan publik mengenai waktu awal relasi asmara dengan aktor Ryu Jun-yeol pasca konfirmasi agensi.',
        resolution: 'Konfirmasi berakhirnya hubungan dan rilis pernyataan resmi dari agensi 9Ato Entertainment.',
      },
      {
        year: '2022',
        title: 'Isu Hutang Pribadi Ibu Kandung',
        status: 'TERKONFIRMASI',
        summary: 'Penggunaan rekening atas nama sang aktris oleh ibu kandung tanpa sepengetahuan Han So-hee.',
        resolution: 'Pernyataan pengadilan membebaskan sang aktris dari tanggung jawab perdata hutang sang ibu.',
      },
    ],
    businessVentures: [
      { name: 'Boucheron Paris Ambassador', category: 'High Jewelry Luxury', role: 'Global Brand Ambassador', status: 'Aktif Beroperasi' },
      { name: 'Balenciaga Global Face', category: 'Haute Couture Fashion', role: 'House Ambassador', status: 'Aktif Beroperasi' },
      { name: 'L’Oréal Paris APAC', category: 'Beauty & Hair Care', role: 'Regional Ambassador', status: 'Aktif Beroperasi' },
    ],
    awards: [
      { year: '2021', award: 'Asia Artist Awards', category: 'Best Artist Award (Television)', result: 'Menang' },
      { year: '2020', award: 'Baeksang Arts Awards', category: 'Best New Actress (The World of the Married)', result: 'Nominasi' },
      { year: '2022', award: 'APAN Star Awards', category: 'Top Excellence Actress in OTT Series (My Name)', result: 'Nominasi' },
    ],
    faq: [
      {
        question: 'Apa agensi resmi yang menaungi Han So-hee?',
        answer: 'Han So-hee bernaung secara eksklusif di bawah manajemen 9Ato Entertainment di Seoul, Korea Selatan.',
      },
      {
        question: 'Apakah Han So-hee memiliki utang perdata keluarga?',
        answer: 'Berdasarkan putusan pengadilan Ulsan, Han So-hee dinyatakan tidak memiliki keterikatan hukum atas pinjaman pribadi ibunya.',
      },
    ],
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
    dossierDetail: {
      birthDate: '5 Maret 1987',
      birthPlace: 'Bogor, Jawa Barat, Indonesia',
      zodiac: 'Pisces',
      nationality: 'Indonesia',
      yearsActive: '2004 – Sekarang',
      education: 'Pendidikan Teater & Seni Peran Mandiri',
      netWorthEstimate: 'A-List Actor Tier (Rp 20M - Rp 40M)',
      topAffiliations: ['Komite FFI', 'Rumah Produksi Falcon & MD Pictures', 'Duta Advokasi Seni'],
    },
    controversies: [
      {
        year: '2024',
        title: 'Advokasi Terbuka UU Hak Cipta & Royalti Seniman',
        status: 'TERKONFIRMASI',
        summary: 'Pidato vokal mengkritisi penundaan reformasi royalti digital bagi aktor dan musisi di hadapan parlemen.',
        resolution: 'Audiensi resmi dengan Kementerian Pariwisata dan Ekonomi Kreatif serta DPR RI.',
      },
    ],
    businessVentures: [
      { name: 'Pilarez Production Work', category: 'Film Directing & Producing', role: 'Executive Producer', status: 'Aktif Beroperasi' },
      { name: 'Brand Ambassador Oppo / Uniqlo', category: 'Consumer Tech & Fashion', role: 'Exclusive Brand Ambassador', status: 'Aktif Beroperasi' },
    ],
    awards: [
      { year: '2023', award: 'Festival Film Indonesia (Piala Citra)', category: 'Pemeran Utama Pria Terbaik (Berbalas Kejam)', result: 'Menang' },
      { year: '2016', award: 'Festival Film Indonesia (Piala Citra)', category: 'Pemeran Utama Pria Terbaik (My Stupid Boss)', result: 'Menang' },
      { year: '2013', award: 'Festival Film Indonesia (Piala Citra)', category: 'Pemeran Utama Pria Terbaik (Habibie & Ainun)', result: 'Menang' },
      { year: '2010', award: 'Festival Film Indonesia (Piala Citra)', category: 'Pemeran Utama Pria Terbaik (3 Hati Dua Dunia, Satu Cinta)', result: 'Menang' },
    ],
    faq: [
      {
        question: 'Berapa total Piala Citra FFI yang telah dimenangkan Reza Rahadian?',
        answer: 'Reza Rahadian telah mengoleksi 5 Piala Citra Festival Film Indonesia sepanjang kariernya, menjadikannya salah satu aktor peraih piala terbanyak dalam sejarah perfilman nasional.',
      },
    ],
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
    dossierDetail: {
      birthDate: '3 November 2002',
      birthPlace: 'Jakarta, Indonesia',
      zodiac: 'Scorpio',
      nationality: 'Indonesia',
      yearsActive: '2021 – Sekarang',
      education: 'Fakultas Hukum Universitas Udayana (Cuti/Non-aktif)',
      netWorthEstimate: 'Top Gen-Z Influencer (Rp 8M - Rp 15M)',
      topAffiliations: ['Indo Mega Creator', 'MS Glow', 'Jiniso', 'Scarlett'],
    },
    controversies: [
      {
        year: '2023',
        title: 'Laporan Dugaan Penggelapan Dana Eks Manajer',
        status: 'TERKONFIRMASI',
        summary: 'Fuji melaporkan mantan manajer pribadinya atas dugaan penggelapan uang honor kerja sama senilai lebih dari Rp 1,5 Miliar.',
        resolution: 'Pihak kepolisian menetapkan mantan manajer sebagai tersangka dan kasus diproses ke kejaksaan.',
      },
      {
        year: '2024',
        title: 'Perang Fandom Medsos & Isu Perjodohan Netizen',
        status: 'RUMOR_NETIZEN',
        summary: 'Serangan siber antar kubu pendukung di kolom komentar terkait hubungan personal sang kreator.',
        resolution: 'Imbauan resmi dari Fuji di Instagram Story agar warganet berhenti menghujat pihak lain.',
      },
    ],
    businessVentures: [
      { name: 'Fuji Official Merchandise', category: 'Fashion & Apparel', role: 'Owner', status: 'Aktif Beroperasi' },
      { name: 'Brand Ambassador MS Glow', category: 'Skincare & Cosmetics', role: 'Key Ambassador', status: 'Aktif Beroperasi' },
    ],
    awards: [
      { year: '2022', award: 'TikTok Awards Indonesia', category: 'Popular Creator of the Year', result: 'Menang' },
      { year: '2023', award: 'SCTV Music & Digital Awards', category: 'Selebriti Pendatang Baru Paling Ngetop', result: 'Menang' },
    ],
    faq: [
      {
        question: 'Bagaimana kelanjutan kasus dugaan penggelapan honor mantan manajer Fuji?',
        answer: 'Laporan resmi telah diproses di Polres Metro Jakarta Barat dan mantan manajer telah ditetapkan sebagai tersangka penipuan/penggelapan.',
      },
    ],
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
    dossierDetail: {
      birthDate: '1 September 1996',
      birthPlace: 'Oakland, California, Amerika Serikat',
      zodiac: 'Virgo',
      nationality: 'Amerika Serikat',
      yearsActive: '2009 – Sekarang',
      education: 'Oakland School for the Arts',
      netWorthEstimate: 'Hollywood A-List ($22M - $30M)',
      topAffiliations: ['CAA Agency', 'Louis Vuitton', 'Bulgari', 'HBO / Warner Bros'],
    },
    controversies: [
      {
        year: '2015',
        title: 'Insiden Komentar Rambut Dreadlocks Giuliana Rancic',
        status: 'TERKONFIRMASI',
        summary: 'Komentar bernuansa stereotip dari presenter televisi terhadap rambut gimbal Zendaya di ajang Oscars.',
        resolution: 'Tanggapan elegan terbuka dari Zendaya menuai pujian luas dan pembawa acara meminta maaf secara terbuka.',
      },
    ],
    businessVentures: [
      { name: 'Louis Vuitton House Ambassador', category: 'Luxury Haute Couture', role: 'Global Brand Face', status: 'Aktif Beroperasi' },
      { name: 'Bulgari High Jewelry Face', category: 'Fine Jewelry', role: 'Global Ambassador', status: 'Aktif Beroperasi' },
      { name: 'Executive Producer (Euphoria & Challengers)', category: 'Film Production', role: 'Producer', status: 'Aktif Beroperasi' },
    ],
    awards: [
      { year: '2020', award: 'Primetime Emmy Awards', category: 'Outstanding Lead Actress in a Drama Series (Euphoria)', result: 'Menang' },
      { year: '2022', award: 'Primetime Emmy Awards', category: 'Outstanding Lead Actress in a Drama Series (Euphoria)', result: 'Menang' },
      { year: '2023', award: 'Golden Globe Awards', category: 'Best Actress – Television Series Drama', result: 'Menang' },
    ],
    faq: [
      {
        question: 'Apakah rekor termuda yang dipecahkan Zendaya di ajang Primetime Emmy?',
        answer: 'Zendaya adalah aktris termuda dalam sejarah yang memenangkan Primetime Emmy Award untuk Aktris Utama Terbaik serial drama pada usia 24 tahun.',
      },
    ],
  },
  {
    id: 'celeb-6',
    slug: 'raffi-ahmad',
    name: 'Raffi Farid Ahmad',
    stageName: 'Raffi Ahmad',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
    profession: 'Presenter, Produser & Eksekutif Bisnis RANS',
    age: 38,
    agency: 'RANS Entertainment Holding',
    relationshipStatus: 'Menikah (Nagita Slavina)',
    circle: ['Nagita Slavina', 'Atta Halilintar', 'Deddy Corbuzier', 'Baim Wong'],
    verifiedAccounts: [
      { platform: 'instagram', handle: '@raffinagita1717', url: 'https://instagram.com' },
      { platform: 'youtube', handle: 'RansEntertainment', url: 'https://youtube.com' },
    ],
    bio: 'Tokoh sentral industri hiburan Indonesia berjuluk "Sultan Andara". Bertransformasi dari presenter televisi papan atas menjadi konglomerat media digital dan olahraga melalui RANS Entertainment.',
    careerHighlights: [
      'Pendiri RANS Entertainment dengan valuasi korporasi triliunan rupiah',
      'Pemilik klub sepak bola Liga 1 RANS Nusantara FC & klub basket RANS Simba',
      'Utusan Khusus Presiden Bidang Pembinaan Generasi Muda & Pekerja Seni (2024-2029)',
    ],
    dramaCount: 5,
    sentimentSummary: '81% kagum atas etos kerja dan imperium bisnis masif; 19% skeptis terkait dinamika transparansi finansial dan kepemilikan aset.',
    dossierDetail: {
      birthDate: '17 Februari 1987',
      birthPlace: 'Bandung, Jawa Barat',
      zodiac: 'Aquarius',
      nationality: 'Indonesia',
      yearsActive: '2001 – Sekarang',
      education: 'SMA Negeri 3 Jakarta / Universitas Terbuka',
      netWorthEstimate: 'Mega Tier (Rp 400M - Rp 1T+)',
      topAffiliations: ['RANS Holding', 'Emtek Group Partner', 'Kemenpora / Utusan Khusus Presiden'],
    },
    controversies: [
      {
        year: '2024',
        title: 'Isu Aliran Dana & Dugaan TPPU Yayasan Bisnis',
        status: 'MENUNGGU_TANGGAPAN',
        summary: 'Tudingan sekelompok pihak mengenai perputaran modal bisnis yang dibantah tegas oleh tim kuasa hukum.',
        resolution: 'Konferensi pers resmi klarifikasi audit akuntan publik dan tidak ada proses hukum aktif.',
      },
      {
        year: '2021',
        title: 'Kehadiran di Pesta Pasca Vaksinasi COVID-19 Perdana',
        status: 'TERKONFIRMASI',
        summary: 'Sorotan tajam warganet atas foto berkumpul tanpa masker beberapa jam setelah menerima vaksin di Istana Negara.',
        resolution: 'Permintaan maaf publik terbuka dan sanksi teguran dari Satgas COVID-19.',
      },
    ],
    businessVentures: [
      { name: 'RANS Entertainment', category: 'Media Digital & Studio Animasi', role: 'Chairman & Founder', status: 'Aktif Beroperasi' },
      { name: 'RANS Nusantara FC', category: 'Klub Sepak Bola Profesional', role: 'Chairman', status: 'Aktif Beroperasi' },
      { name: 'RANS Simba Bogor', category: 'Klub Basket IBL', role: 'President Club', status: 'Aktif Beroperasi' },
      { name: 'Rojo Sambel Nusantara', category: 'F&B Franchise', role: 'Lead Investor & Partner', status: 'Aktif Beroperasi' },
    ],
    awards: [
      { year: '2023', award: 'Panasonic Gobel / Indonesian Television Awards', category: 'Presenter Paling Populer', result: 'Menang' },
      { year: '2022', award: 'Forbes Indonesia', category: 'The Sultans of Content - Top Digital Mogul', result: 'Menang' },
    ],
    faq: [
      {
        question: 'Apa jabatan resmi Raffi Ahmad di pemerintahan saat ini?',
        answer: 'Raffi Ahmad dilantik sebagai Utusan Khusus Presiden Bidang Pembinaan Generasi Muda dan Pekerja Seni pada Oktober 2024.',
      },
      {
        question: 'Apakah RANS Entertainment berencana melantai di bursa saham (IPO)?',
        answer: 'Pihak manajemen RANS telah menyiapkan langkah strategis penawaran umum perdana saham (IPO) bekerja sama dengan mitra institusi keuangan nasional.',
      },
    ],
  },
  {
    id: 'celeb-7',
    slug: 'min-hee-jin',
    name: 'Min Hee-jin',
    stageName: 'Min Hee-jin',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    profession: 'Produser Musik, Creative Director & Mantan CEO ADOR',
    age: 45,
    agency: 'Independen / Eks-ADOR (HYBE Labels)',
    relationshipStatus: 'Private',
    circle: ['NewJeans Members', 'Shin Woo-seok (Dolphiners Film)', 'Kim Min-ji'],
    verifiedAccounts: [
      { platform: 'instagram', handle: '@min.hee.jin', url: 'https://instagram.com' },
    ],
    bio: 'Direktur kreatif visioner di balik konsep ikonik Girls’ Generation, SHINee, f(x), Red Velvet, dan kreator mega grup K-Pop NewJeans. Menjadi tokoh utama pertempuran hukum dan korporasi terdahsyat melawan konglomerasi HYBE.',
    careerHighlights: [
      'Kreator konsep, branding, dan produser utama girl group NewJeans',
      'Mantan Creative Director SM Entertainment selama 16 tahun',
      'Pemenang Golden Disc Awards Best Producer 2024',
    ],
    dramaCount: 4,
    sentimentSummary: '67% dukungan publik atas integritas artistik dan advokasi NewJeans; 33% kritik atas gaya perang psikologis korporasi.',
    dossierDetail: {
      birthDate: '16 Desember 1979',
      birthPlace: 'Seoul, Korea Selatan',
      zodiac: 'Sagitarius',
      nationality: 'Korea Selatan',
      yearsActive: '2002 – Sekarang',
      education: 'Seoul Women’s University (Desain Komunikasi Visual)',
      netWorthEstimate: 'K-Pop Master Tier ($15M - $25M)',
      topAffiliations: ['ADOR (Eks-CEO)', 'SM Entertainment (Eks-Direktur)', 'NewJeans Creative Team'],
    },
    controversies: [
      {
        year: '2024',
        title: 'Konflik Kepemilikan & Dugaan Upaya Kudeta ADOR vs HYBE',
        status: 'TERKONFIRMASI',
        summary: 'HYBE mengaudit ADOR atas tudingan upaya memisahkan diri; Min Hee-jin membantah dalam jumpa pers berdurasi 2 jam yang viral secara global.',
        resolution: 'Pengadilan Distrik Pusat Seoul mengabulkan gugatan provisi Min Hee-jin mencegah pemecatannya sebagai CEO oleh HYBE pada Mei 2024.',
      },
      {
        year: '2024',
        title: 'Tuduhan Plagiarisme Konsep Musik NewJeans vs ILLIT',
        status: 'FAKTA_DIGITAL',
        summary: 'Kritik terbuka Min Hee-jin terhadap agensi anak perusahaan HYBE lain mengenai kemiripan konsep visual dan koreografi.',
        resolution: 'Pernyataan bantahan dari BELIFT LAB dan saling lapor pencemaran nama baik.',
      },
    ],
    businessVentures: [
      { name: 'ADOR Label (All Doors One Room)', category: 'K-Pop Music Label', role: 'Pendiri & Mantan CEO', status: 'Non-aktif / Selesai' },
      { name: 'Min Hee-jin Independent Creative Lab', category: 'Creative Production & Branding', role: 'Principal Founder', status: 'Aktif Beroperasi' },
    ],
    awards: [
      { year: '2024', award: 'Golden Disc Awards', category: 'Best Producer Award', result: 'Menang' },
      { year: '2023', award: 'MAMA Awards', category: 'Breakout Producer of the Year', result: 'Menang' },
      { year: '2023', award: 'Billboard Women in Music', category: 'Global Impact Honoree', result: 'Menang' },
    ],
    faq: [
      {
        question: 'Apa hasil putusan pengadilan dalam sengketa Min Hee-jin dan HYBE pada Mei 2024?',
        answer: 'Pengadilan Distrik Seoul memutuskan bahwa HYBE tidak memiliki alasan yang cukup kuat untuk mencopot Min Hee-jin dari kursi CEO ADOR pada RUPS Mei 2024 dan mengabulkan perintah penahanan hak suara HYBE.',
      },
    ],
  },
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'duduk-perkara-royalti-musik-musisi-vs-promotor-konser',
    title: 'Duduk Perkara Polemik Royalti Musik 2026: Kronologi Lengkap & Jejak Digital Gugatan LMKN',
    excerpt: 'Bukan sekadar heboh di media sosial, ini alur kronologi perseteruan royalti hak cipta antara musisi senior, asosiasi promotor konser, dan regulasi LMKN yang memicu perdebatan sengit.',
    contentHtml: `
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
    readingTimeMinutes: 7,
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
