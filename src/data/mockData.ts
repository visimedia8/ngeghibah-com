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
    avatar: 'https://asset.kompas.com/crops/VCFR2ZOdcvawHzXI2AoxtTywK3U=/33x13:1029x677/1200x800/data/photo/2021/08/22/612201eb12a00.png',
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
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Han_So-Hee_at_the_2025_Toronto_International_Film_Festival_%28cropped%29.jpg',
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
      {
        question: 'Apa saja jenama mewah global yang menunjuk Han So-hee sebagai brand ambassador?',
        answer: 'Han So-hee merupakan Global Brand Ambassador untuk rumah perhiasan Prancis Boucheron, rumah mode Balenciaga, serta Charles & Keith.',
      },
    ],
    editorialSections: [
      {
        title: 'Trajektori Karier: Dari Model Indie ke Puncak Sinema & Duta Mode Global',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Karier Han So-hee (nama asli Lee So-hee) menandai anomali menyegarkan dalam lanskap industri hiburan Korea Selatan yang kerap terstandarisasi ketat. Mengawali langkah di Seoul dengan modal mandiri terbatas pasca kepindahan dari Ulsan, ia bekerja sambilan di berbagai kafe sembari merintis karier sebagai model video musik dan pemotretan busana indie. Penampilannya yang memadukan pesona klasik dengan aura pemberontak (<em>rebellious elegance</em>) dengan cepat menarik perhatian casting director.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Titik balik monumental terjadi pada 2020 saat ia memerankan Yeo Da-kyung dalam mega-hit <em>The World of the Married</em>. Keberaniannya mengambil peran antagonis dengan kompleksitas emosional tinggi menjadikannya aktris paling dicari. Keberhasilan tersebut diperkuat oleh peran aksi fisik brutal tanpa pemeran pengganti penuh dalam serial noir <em>My Name</em> dan epik sejarah <em>Gyeongseong Creature</em> di platform streaming Netflix, membuktikan kapasitas akting serbabisa melintasi berbagai genre sinematik.
          </p>
        `,
      },
      {
        title: 'Forensik Manajemen Krisis: Paradoks Komunikasi Tanpa Filter di Era Media Sosial',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Berbeda dengan mayoritas pesohor Hallyu yang menyerahkan 100% narasi komunikasi kepada tim humas agensi, Han So-hee mempertahankan kebiasaan menulis secara personal di blog Naver pribadinya. Gaya komunikasi langsung dan emosional ini menciptakan ikatan loyalitas luar biasa dengan penggemar perempuan muda, namun sekaligus memicu kerentanan krisis reputasi ketika terjadi gesekan di ranah publik.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Dinamika hubungan asmara singkatnya di awal 2024 menjadi studi kasus menarik dalam ilmu komunikasi krisis selebritas. Respon spontan sang aktris di media sosial memicu perdebatan sengit warganet global sebelum akhirnya agensi 9Ato Entertainment mengambil alih kendali komunikasi formal. Kasus ini menegaskan tantangan berat menjaga keseimbangan antara otentisitas personal seorang seniman dengan tuntutan korporasi komersial beranggaran jutaan dolar.
          </p>
        `,
      },
      {
        title: 'Asesmen Brand Safety: Daya Tarik High Jewelry & Prospek Crossover Barat',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Dari perspektif nilai komersial korporasi internasional, Han So-hee dikategorikan sebagai aset pemasaran paling bernilai tinggi di kawasan Asia-Pasifik. Pemilihannya sebagai duta global pertama asal Korea untuk rumah perhiasan mewah tertua di Place Vendôme Paris, Boucheron, serta keterlibatannya dengan rumah mode Balenciaga membuktikan daya pikatnya di segmen ultra-luxury.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Prospek transisi kariernya ke industri perfilman internasional terbuka lebar menyusul kemampuannya membawakan karakter aksi fisik yang intens. Selama manajemen reputasinya mampu memitigasi turbulensi narasi personal di dunia maya, Han So-hee diproyeksikan tetap menjadi salah satu representasi paling dominan sinema Korea di panggung budaya pop dunia.
          </p>
        `,
      },
    ],
  },
  {
    id: 'celeb-3',
    slug: 'reza-rahadian',
    name: 'Reza Rahadian Matulessy',
    stageName: 'Reza Rahadian',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Reza_Rahadian_Actor_of_the_Year_ICA_2017.jpg',
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
      {
        question: 'Apa peran Reza Rahadian dalam reformasi Festival Film Indonesia?',
        answer: 'Menjabat sebagai Ketua Komite FFI periode 2021-2023, Reza memimpin modernisasi sistem penjurian berbasis akademi independen bekerja sama dengan asosiasi profesi perfilman nasional.',
      },
    ],
    editorialSections: [
      {
        title: 'Dominasi Perfilman Modern: Rekor 5 Piala Citra & Standar Akting Bunglon',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Reza Rahadian Matulessy memegang status tak terbantahkan sebagai pilar utama keaktoran sinema Indonesia abad ke-21. Dengan rekor lima trofi Piala Citra di berbagai kategori (Pemeran Pendukung Pria Terbaik hingga empat kali Pemeran Utama Pria Terbaik), Reza membuktikan rentang peran bunglon yang langka: dari penjiwaan akurat sosok negarawan B.J. Habibie, komedi eksentrik Bossman di <em>My Stupid Boss</em>, hingga drama psikologis kelam di <em>Berbalas Kejam</em>.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Dedikasinya terhadap metode seni peran dan riset karakter mendalam menetapkan tolok ukur profesionalisme baru bagi generasi aktor penerusnya. Keberadaannya dalam sebuah judul film kerap menjadi jaminan kualitas naratif sekaligus magnet komersial terpercaya bagi para investor industri film layar lebar Indonesia.
          </p>
        `,
      },
      {
        title: 'Garis Depan Advokasi: Standar Jam Kerja Layak 14 Jam & Hak Royalti Digital',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Di luar panggung lampu sorot, Reza memanfaatkan pengaruh institusionalnya untuk memperjuangkan keadilan struktural pekerja industri kreatif. Bersama koalisi serikat perfilman, ia memimpin audiensi terbuka di DPR RI guna menuntut regulasi batas maksimal shift kerja lapangan 14 jam dan jaminan keselamatan kerja BPJS Ketenagakerjaan bagi seluruh kru teknis freelance.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Reza juga menjadi salah satu suara paling vokal yang mendesak reformasi skema royalti residual bagi para penampil (<em>performers rights</em>) di platform digital streaming OTT. Advokasi ini menempatkannya bukan sekadar sebagai bintang panggung, melainkan negarawan budaya yang peduli pada keberlanjutan ekosistem seni peran Indonesia.
          </p>
        `,
      },
      {
        title: 'Manajemen Privasi & Integritas Reputasi di Tengah Pusaran Gosip Hiburan',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Dalam era di mana popularitas kerap dibeli melalui eksposur sensasi kehidupan pribadi di media sosial, Reza Rahadian memilih jalur eksklusif: menolak memiliki akun media sosial personal aktif dan hanya berkomunikasi melalui akun resmi komunitas penggemar @officialpilarez. Batas tegas antara wilayah kreasi publik dan privasi domestik ini menjadikannya salah satu figur publik paling dihormati di tanah air.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Indeks sentimen publik terhadapnya mencatatkan angka positif 89%, rekor tertinggi di antara aktor papan atas Indonesia. Kredibilitas moral yang tanpa cela ini menjadikannya pilihan utama korporasi multinasional dan lembaga kebudayaan negara untuk program duta merek bernilai tinggi.
          </p>
        `,
      },
    ],
  },

  {
    id: 'celeb-4',
    slug: 'fuji-an',
    name: 'Fujianti Utami Putri',
    stageName: 'Fuji An',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Fuji_Utami_2023_Shopee_Indonesia_Affiliate.jpg',
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
      {
        question: 'Berapa rekor omset live streaming shopping tertinggi yang dipandu Fuji An?',
        answer: 'Sesi live streaming resmi flash sale bersama brand kecantikan lokal mencatatkan Gross Merchandise Value (GMV) menembus Rp 1,2 Miliar dalam waktu kurang dari 2 jam.',
      },
    ],
    editorialSections: [
      {
        title: 'Fenomena Social Commerce: Rekor Konversi Live Shopping & Daya Tarik Gen Z',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Fujianti Utami Putri (Fuji An) merepresentasikan anomali paling fenomenal dalam evolusi ekonomi kreator Indonesia pasca-2021. Mengemuka di tengah tragedi keluarga yang menyentuh simpati kolektif jutaan masyarakat, Fuji berhasil membuktikan ketahanan dan kapasitas monetisasi digital mandiri yang melampaui ekspektasi para pengamat industri periklanan modern.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Kekuatan intinya bertumpu pada tingkat keterikatan (<em>engagement rate</em>) organik yang luar biasa tinggi di platform TikTok dan Instagram. Dalam sesi siaran langsung komersial (<em>live commerce</em>), Fuji mampu mengonversi penonton menjadi transaksi riil bernilai miliaran rupiah dalam hitungan menit. Karakter pembawaannya yang lugas, jenaka, dan tanpa kepalsuan menciptakan tingkat kepercayaan konsumen yang sangat dicari oleh brand fesyen dan produk perawatan kulit massal.
          </p>
        `,
      },
      {
        title: 'Anatomi Perang Fandom & Polarisasi Sentimen di Kolom Gosip Digital',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Tingginya popularitas di usia sangat muda membawa konsekuensi pengawasan publik yang intensif. Komunitas penggemar fanatik Fuji kerap terlibat dalam perang narasi siber dengan kubu penggemar figur publik lain, terutama mengenai dinamika perjodohan warganet (<em>shipper fandom</em>). Setiap gerak-gerik, tatapan mata di acara penghargaan, hingga unggahan status singkat dianalisis secara berlebihan oleh ribuan akun anonim.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Kendati polarisasi ini menjaga volume percakapan namanya selalu berada di jajaran trending topic teratas, hal ini juga menuntut kedewasaan komunikasi krisis ekstra. Fuji beberapa kali secara terbuka mengimbau para pendukungnya untuk tidak melakukan perundungan siber terhadap rekan sesama kreator konten demi menjaga kesehatan mental bersama.
          </p>
        `,
      },
      {
        title: 'Forensik Sengketa Hukum Eks-Manajer & Transformasi Manajemen Profesional',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Titik krusial pendewasaan bisnis Fuji tercatat pada 2023 ketika ia melaporkan mantan manajer pribadinya ke pihak kepolisian atas dugaan penggelapan uang honor kerja sama periklanan senilai lebih dari Rp 1,5 Miliar. Kasus ini membuka mata banyak talenta muda mengenai pentingnya pemisahan rekening bisnis, audit berkala, dan tata kelola kontrak hukum yang ketat dalam manajemen agensi talenta.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Dengan restrukturisasi tim manajemen di bawah naungan agensi profesional dan pendampingan kuasa hukum tetap, Fuji memposisikan dirinya sebagai entitas bisnis mandiri yang terlindungi dari celah penipuan finansial internal. Langkah hukum tegas tersebut diapresiasi publik sebagai bukti integritas dan komitmen profesionalitas jangka panjang.
          </p>
        `,
      },
    ],
  },
  {
    id: 'celeb-5',
    slug: 'zendaya',
    name: 'Zendaya Maree Stoermer Coleman',
    stageName: 'Zendaya',
    avatar: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Zendaya-byPhilipRomano.jpg/330px-Zendaya-byPhilipRomano.jpg',
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
      {
        question: 'Siapa arsitek di balik penampilan ikonik fashion red carpet Zendaya?',
        answer: 'Penampilan adibusana Zendaya dikurasi secara eksklusif oleh arsitek gaya legendaris Law Roach, yang bekerja sama dengannya sejak usia 14 tahun.',
      },
    ],
    editorialSections: [
      {
        title: 'Transformasi Bintang Anak Disney ke Pemenang Emmy Termuda Sepanjang Sejarah',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Zendaya Maree Stoermer Coleman menorehkan sejarah sebagai salah satu dari sedikit bintang cilik Disney Channel yang berhasil bertransisi mulus menjadi figur sinema paling bergengsi di dunia perfilman internasional. Puncak pengakuan kritis diraih lewat penampilannya sebagai Rue Bennett dalam serial HBO <em>Euphoria</em>, yang mengantarkannya memenangkan dua piala Primetime Emmy Awards dan mencatatkan rekor sebagai aktris termuda peraih trofi kategori aktris utama drama pada usia 24 tahun.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Keberhasilannya melintasi batas antara proyek komersial raksasa bernilai miliaran dolar (seperti trilogi <em>Spider-Man</em> dan epik fiksi ilmiah <em>Dune</em> garapan Denis Villeneuve) dengan peran produksi independen sebagai produser eksekutif di film <em>Challengers</em> membuktikan kecakapan navigasi karier kelas wahid di jantung Hollywood.
          </p>
        `,
      },
      {
        title: 'Revolusi Adibusana Red Carpet: Sinergi Visioner Bersama Law Roach',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Di panggung mode global, setiap kemunculan Zendaya di karpet merah merupakan peristiwa budaya (<em>cultural event</em>) tersendiri. Kemitraan jangka panjangnya dengan arsitek gaya (<em>image architect</em>) Law Roach telah melahirkan momen-momen fesyen paling berkesan dalam satu dekade terakhir, mulai dari gaun robot arsip vintage Mugler 1995 hingga kreasi kustom haute couture Louis Vuitton dan perhiasan tinggi Bulgari.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Pendekatan tematik berbasis narasi film (<em>method dressing</em>) yang dipeloporinya menetapkan tren baru dalam strategi promosi film global. Kemampuannya mengombinasikan busana bersejarah dengan pernyataan modern menobatkannya sebagai Fashion Icon termuda versi Council of Fashion Designers of America (CFDA).
          </p>
        `,
      },
      {
        title: 'Keteguhan Batas Privasi & Standar Emas Integritas Selebritas Modern',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Di tengah industri hiburan yang sering kali mengeksploitasi detail hubungan personal demi publisitas murah, Zendaya dan pasangannya aktor Tom Holland secara konsisten menjaga batas sakral kehidupan pribadi mereka. Penolakannya untuk meladeni rumor sensasional di media sosial membuat indeks Brand Safety dirinya berada di peringkat tertinggi bagi pengiklan korporat papan atas.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Dengan dukungan sentimen publik positif mencapai 94% secara global, Zendaya diposisikan sebagai panutan generasi muda yang menggabungkan keunggulan talenta murni, kesadaran sosial tinggi, dan keanggunan berkelas yang menjauhkannya dari jerat skandal murahan.
          </p>
        `,
      },
    ],
  },

  {
    id: 'celeb-6',
    slug: 'raffi-ahmad',
    name: 'Raffi Farid Ahmad',
    stageName: 'Raffi Ahmad',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Raffi-Ahmad-2020_%28cropped%29.jpg',
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
    editorialSections: [
      {
        title: 'Evolusi Sultan Andara: Dari Bintang Sinetron Remaja ke Konglomerasi Media RANS Holding',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Raffi Farid Ahmad mencatatkan metamorfosis bisnis paling spektakuler dalam sejarah industri hiburan modern Indonesia. Mengawali karier keaktoran sejak usia 14 tahun melalui sinetron remaja dan panggung presenter varietas televisi harian, etos kerja tanpa henti (<em>hustle culture</em>) membawanya menjadi raja layar kaca selama dua dekade.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Bersama sang istri Nagita Slavina, Raffi mendirikan RANS Entertainment pada 2015 yang awalnya hanya saluran dokumentasi keluarga YouTube. Kanal tersebut bermutasi menjadi konglomerasi media digital terintegrasi yang mencakup studio animasi, agensi periklanan digital, dan rumah produksi konten yang berhasil menarik investasi strategis dari grup media raksasa Emtek Group dengan valuasi menembus triliunan rupiah.
          </p>
        `,
      },
      {
        title: 'Ekosistem Bisnis Terintegrasi: Sinergi Olahraga Liga 1, Kuliner Waralaba & Valuasi Pra-IPO',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Ekspansi RANS melampaui batasan hiburan konvensional dengan merambah industri olahraga profesional melalui akuisisi klub sepak bola RANS Nusantara FC dan klub bola basket IBL RANS Simba Bogor. Strategi konvergensi antara popularitas selebritas dan daya tarik olahraga (<em>sportainment</em>) menciptakan ceruk pasar baru di Indonesia.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Di sektor riil, investasi agresif Raffi di industri makanan dan minuman (F&B) seperti jaringan restoran Rojo Sambel Nusantara menunjukkan insting tajam dalam membina pelaku UMKM lokal menuju skala waralaba nasional. Rencana penawaran umum perdana saham (IPO) RANS Entertainment terus menjadi sorotan analis pasar modal sebagai tolok ukur kesiapan industri kreator masuk ke lantai bursa efek.
          </p>
        `,
      },
      {
        title: 'Forensik Isu Akuntabilitas Finansial & Babak Baru Kenegaraan 2024–2029',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Kecepatan akumulasi aset Raffi kerap memicu spekulasi warganet dan tuduhan tak berdasar mengenai aliran dana modal. Menghadapi tudingan tersebut, tim kuasa hukum dan manajemen RANS merespons dengan transparansi audit akuntan publik bereputasi tinggi yang memverifikasi bahwa seluruh modal kerja berasal dari arus kas operasional komersial, kontrak endorsement ratusan brand, dan suntikan dana ventura formal.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Pelantikannya sebagai Utusan Khusus Presiden Bidang Pembinaan Generasi Muda dan Pekerja Seni pada Oktober 2024 menandai babak baru integrasi figur publik ke ranah pengabdian negara. Peran ini menuntut kepatuhan pelaporan Laporan Harta Kekayaan Penyelenggara Negara (LHKPN) secara berkala, menegaskan komitmen akuntabilitas publik seorang mega-bintang di hadapan hukum dan konstitusi.
          </p>
        `,
      },
    ],
  },
  {
    id: 'celeb-7',
    slug: 'min-hee-jin',
    name: 'Min Hee-jin',
    stageName: 'Min Hee-jin',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Min_Hee-jin_in_May_2024_1.png',
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
      {
        question: 'Apa saja karya ikonik Min Hee-jin sebelum mendirikan ADOR?',
        answer: 'Selama 16 tahun di SM Entertainment, Min Hee-jin merancang identitas visual legendaris untuk album Girls Generation (Gee), f(x) (Pink Tape), SHINee (Romeo), dan EXO.',
      },
    ],
    editorialSections: [
      {
        title: 'Revolusi Estetika K-Pop: Dari Eksperimen SM Entertainment ke Lahirnya Fenomena NewJeans',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Min Hee-jin adalah direktur kreatif paling berpengaruh dalam dua dekade sejarah industri musik pop Korea. Memulai karier sebagai desainer grafis pemula di SM Entertainment pada 2002, ia merevolusi cara K-Pop mengemas karya seni visual: mentransformasi sampul album dari sekadar foto pajangan idola menjadi karya seni konseptual naratif terpadu, seperti album <em>Pink Tape</em> milik f(x) yang diakui museum seni internasional.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Puncak kejeniusannya terwujud saat mendirikan label ADOR di bawah HYBE dan meluncurkan girl group NewJeans pada 2022 tanpa teaser promosi awal. Pendekatan nostalgia era Y2K yang organik, aransemen R&B pop yang santai (<em>easy listening</em>), dan koreografi bebas mengubah arah kiblat industri K-Pop global yang sebelumnya didominasi konsep futuristik hiper-elektronik.
          </p>
        `,
      },
      {
        title: 'Forensik Konflik Korporasi ADOR vs HYBE: Jumpa Pers Bersejarah & Pertarungan Hukum Seoul',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Pertarungan antara Min Hee-jin dan induk perusahaan HYBE pada 2024 menjadi drama korporasi terbesar dalam sejarah industri hiburan Asia. Konferensi pers darurat berdurasi lebih dari dua jam yang digelar Min Hee-jin—dengan mengenakan topi bisbol hijau dan kaos garis-garis sederhana—ditonton jutaan pemirsa di seluruh dunia dan memicu gelombang dukungan publik berkat kejujuran emosionalnya melawan oligarki konglomerat modal.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Kemenangan hukum diraih Min Hee-jin ketika Pengadilan Distrik Pusat Seoul mengabulkan gugatan injunksi sementaranya pada Mei 2024, menegaskan bahwa tuduhan pengkhianatan kepercayaan yang diajukan HYBE tidak memiliki dasar bukti faktual yang cukup kuat. Kasus ini mencatatkan preseden hukum penting mengenai perlindungan hak direksi kreatif minoritas di hadapan pemegang saham mayoritas bursa efek.
          </p>
        `,
      },
      {
        title: 'Polarisasi Fandom Global & Doktrin Otonomi Seniman Melawan Kekuasaan Konglomerat',
        contentHtml: `
          <p class="leading-relaxed text-slate-300 mb-3">
            Di mata komunitas penggemar internasional dan pelaku industri kreatif, sosok Min Hee-jin membelah persepsi menjadi dua kutub yang kuat: kubu yang memujanya sebagai martir pembela hak cipta karya orisinal seniman, dan kubu yang mengkritiknya atas gaya komunikasi konfrontatif yang mengguncang harga saham perusahaan publik.
          </p>
          <p class="leading-relaxed text-slate-300 mb-3">
            Solidaritas mutlak yang ditunjukkan oleh kelima anggota NewJeans terhadap kepemimpinannya membuktikan kedalaman ikatan fidusia yang jarang ditemukan di industri hiburan komersial. Min Hee-jin telah mengubah percakapan K-Pop selamanya: bahwa di balik megahnya industri bernilai miliaran dolar, jiwa karya seni tetap berada pada visi manusiawi para penciptanya.
          </p>
        `,
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
    `,
    category: 'creator-tiktok',
    categoryLabel: 'Creator & TikTok',
    ghibahMeter: {
      status: 'FAKTA_DIGITAL',
      percentageFact: 88,
      percentageRumor: 12,
      label: 'Fakta Jejak Digital Terverifikasi',
      description: 'Data log transaksi analitik dan perbandingan rekaman utuh (bukan potongan 15 detik).',
    },
    heroImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Ilustrasi antarmuka analitik siaran langsung media sosial. (Foto: Pop Tech Media)',
    publishedAt: '2026-10-11T08:15:00Z',
    readingTimeMinutes: 6,
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
        title: 'Pernyataan Resmi Pihak Brand Sponsor & Log Merchant',
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
    `,
    category: 'kpop-asia',
    categoryLabel: 'K-Pop & Asia',
    ghibahMeter: {
      status: 'MENUNGGU_TANGGAPAN',
      percentageFact: 62,
      percentageRumor: 38,
      label: 'Menunggu Klarifikasi Lanjutan',
      description: 'Pertemuan terkonfirmasi nyata, namun negosiasi kontrak peran masih berstatus tahap penjajakan.',
    },
    heroImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Han So-hee menghadiri acara karpet merah promosi film. (Foto: Hallyu Press Archives)',
    publishedAt: '2026-10-10T19:40:00Z',
    readingTimeMinutes: 6,
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
        title: 'Foto Makan Malam Paris Bocor di Weibo & TheQoo',
        description: 'Tampak sang aktris berbincang bersama produser eksekutif studio waralaba terkemuka.',
        receiptType: 'video',
      },
      {
        timeLabel: '07 Okt 2026',
        title: 'Perdebatan Hangat di Forum Komunitas Film Internasional',
        description: 'Warganet membedah jadwal syuting aktris yang dilaporkan memiliki jeda waktu untuk proyek luar negeri.',
        receiptType: 'tweet',
      },
      {
        timeLabel: '10 Okt 2026',
        title: 'Klarifikasi Singkat 9Ato Entertainment',
        description: 'Agensi menyatakan tawaran memang ada namun fokus saat ini masih pada peninjauan naskah domestik.',
        receiptType: 'statement',
      },
    ],
    digitalReceiptsCount: 3,
    isFeatured: true,
    trendingScore: 82,
  },

  {
    id: 'art-4',
    slug: 'zendaya-tom-holland-isu-pertunangan-dan-fakta-arsip',
    title: 'Rumor vs Bukti Nyata: Isu Pertunangan Rahasia Zendaya & Tom Holland, Ini Analisis Jejak Digital DeuxMoi',
    excerpt: 'Kabar burung pertunangan pasangan emas Hollywood kembali membanjiri feed media sosial. Kami menyaring spekulasi liar dan menghadirkan fakta terverifikasi dari lingkaran terdekat.',
    contentHtml: `
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
        Budaya blind item di media sosial AS sering menjadi bumerang akurasi jurnalistik. DeuxMoi, platform gosip berbasis kiriman anonim tanpa proses verifikasi fakta, memiliki rekam jejak mencampuradukkan rumor palsu dengan potongan kebenaran acak. Unggahan bertuliskan <em>"Pasangan A-list favorit semua orang baru saja meresmikan pertunangan di Cotswolds"</em> disebarluaskan oleh lebih dari 5.000 akun agregator TikTok tanpa mencantumkan keterangan bahwa unggahan tersebut berlabel 'Unverified Tip'.
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
    `,
    category: 'hollywood-barat',
    categoryLabel: 'Hollywood & Barat',
    ghibahMeter: {
      status: 'RUMOR_NETIZEN',
      percentageFact: 28,
      percentageRumor: 72,
      label: 'Rumor Spekulatif Netizen',
      description: 'Berdasarkan klaim anonim tanpa konfirmasi representatif publik figur.',
    },
    heroImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Zendaya di karpet merah festival film bergengsi. (Foto: Hollywood Archive Network)',
    publishedAt: '2026-10-10T14:20:00Z',
    readingTimeMinutes: 6,
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
        description: 'Sebuah pesan anonim menyebut aktor A-list memesan cincin berlian khusus di New York tanpa rincian verifikasi.',
        receiptType: 'tweet',
      },
      {
        timeLabel: '08 Okt 2026',
        title: 'Penampilan di Karpet Merah Gala Premier',
        description: 'Kamera paparazzi menyoroti jari manis sang bintang dan memicu 40.000 tweet spekulatif serentak.',
        receiptType: 'video',
      },
      {
        timeLabel: '09 Okt 2026',
        title: 'Klarifikasi Langsung Stylist Law Roach',
        description: 'Dalam wawancara singkat di story Instagram, ditegaskan cincin tersebut perhiasan sponsorship promosi katalog Bulgari.',
        receiptType: 'statement',
      },
    ],
    digitalReceiptsCount: 3,
    isFeatured: false,
    trendingScore: 76,
  },
  {
    id: 'art-5',
    slug: 'reza-rahadian-advokasi-uu-pekerja-kreatif-indonesia',
    title: 'Bukan Sekadar Heboh, Ini Duduk Perkaranya: Reza Rahadian Suarakan Jaminan Jam Kerja Layak Kru Film',
    excerpt: 'Aktor senior Reza Rahadian memimpin audiensi dengan parlemen terkait perlindungan jam kerja kru perfilman nasional. Simak kronologi perumusan naskah akademik hak pekerja seni.',
    contentHtml: `
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
    `,
    category: 'seleb-lokal',
    categoryLabel: 'Seleb Lokal',
    ghibahMeter: {
      status: 'TERKONFIRMASI',
      percentageFact: 98,
      percentageRumor: 2,
      label: 'Terkonfirmasi Resmi DPR & Asosiasi',
      description: 'Dokumen risalah audiensi resmi DPR RI dan siaran pers gabungan asosiasi perfilman.',
    },
    heroImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Suasana di balik layar produksi sinema Indonesia. (Foto: Arsip FFI)',
    publishedAt: '2026-10-09T11:00:00Z',
    readingTimeMinutes: 7,
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
        title: 'Hasil Survei Jam Kerja Dirilis Koalisi Serikat Film',
        description: 'Data menunjukkan 74% pekerja teknis mengalami kelelahan kronis akibat sistem lembur ekstrem tanpa batasan jam kerja baku.',
        receiptType: 'document',
      },
      {
        timeLabel: '09 Okt 2026',
        title: 'Audiensi Terbuka di Gedung Senayan DPR RI',
        description: 'Penyerahan naskah rekomendasi standar jam operasional shooting maksimal 14 jam per hari kepada Komisi X DPR RI.',
        receiptType: 'statement',
      },
      {
        timeLabel: '11 Okt 2026',
        title: 'Komitmen Kemenparekraf Membentuk Pokja Keselamatan Kerja',
        description: 'Pemerintah menetapkan pembentukan kelompok kerja lintas asosiasi untuk memvalidasi draft regulasi turunan perfilman.',
        receiptType: 'court',
      },
    ],
    digitalReceiptsCount: 3,
    isFeatured: false,
    trendingScore: 88,
  },

  {
    id: 'art-6',
    slug: 'audit-keuangan-yayasan-rachel-vennya-transparansi-donasi',
    title: 'Transparansi Dana Kemanusiaan: Rachel Vennya Rilis Laporan Audit Independen Donasi Bencana',
    excerpt: 'Menjawab pertanyaan warganet terkait akuntabilitas penyaluran dana sosial, tim manajemen mempublikasikan hasil audit KAP dengan opini Wajar Tanpa Pengecualian.',
    contentHtml: `
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
    `,
    category: 'creator-tiktok',
    categoryLabel: 'Creator & TikTok',
    ghibahMeter: {
      status: 'TERKONFIRMASI',
      percentageFact: 95,
      percentageRumor: 5,
      label: 'Terkonfirmasi Audit Publik WTP',
      description: 'Laporan keuangan audit publik KAP bersertifikasi resmi OJK dengan opini Wajar Tanpa Pengecualian.',
    },
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Penyaluran bantuan logistik kemanusiaan di lapangan. (Foto: Dokumentasi Tim Relawan)',
    publishedAt: '2026-10-08T16:00:00Z',
    readingTimeMinutes: 6,
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
        title: 'Munculnya Utas Pertanyaan Netizen di Threads',
        description: 'Sebuah utas menanyakan status laporan akhir kampanye bantuan bencana alam semester lalu.',
        receiptType: 'tweet',
      },
      {
        timeLabel: '08 Okt 2026',
        title: 'Rilis Dokumen PDF Audit Terbuka Wajar Tanpa Pengecualian',
        description: 'Tautan arsip laporan audit KAP diunggah ke publik dengan rincian rekening koran per bank.',
        receiptType: 'document',
      },
      {
        timeLabel: '10 Okt 2026',
        title: 'Validasi Berita Acara BNPB & Pemerintah Daerah',
        description: 'Pemerintah daerah mengonfirmasi seluruh fasilitas hunian sementara dan sanitasi telah diserahterimakan.',
        receiptType: 'statement',
      },
    ],
    digitalReceiptsCount: 3,
    isFeatured: false,
    trendingScore: 74,
  },
  {
    id: 'art-7',
    slug: 'sengketa-kontrak-eksklusif-newjeans-vs-ador-duduk-perkara',
    title: 'Kupas Tuntas Sengketa Kontrak NewJeans vs ADOR & HYBE: Rekonstruksi Hukum dan Kronologi Lengkap',
    excerpt: 'Duduk perkara sengketa kontrak kerja eksklusif NewJeans dengan ADOR pasca pemecatan Min Hee-jin. Analisis klausul pelanggaran kepercayaan, somasi resmi, dan peta eskalasi hukum.',
    contentHtml: `
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
              <td class="py-3 px-4 font-mono text-slate-400 font-semibold">Kepemilikan Hak Merek 'NewJeans'</td>
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
            <p class="text-slate-300">Hak merek dagang 'NewJeans' saat ini terdaftar atas nama korporasi ADOR. Penggunaan nama tersebut di panggung komersial baru kemungkinan besar akan disengketakan dalam persidangan kepemilikan hak cipta terpisah.</p>
          </div>
          <div>
            <h4 class="font-bold text-white mb-1">Q: Berapa lama estimasi persidangan sengketa ini akan berlangsung?</h4>
            <p class="text-slate-300">Berdasarkan preseden kasus sengketa idola K-Pop di Pengadilan Distrik Pusat Seoul (seperti kasus TVXQ atau FIFTY FIFTY), persidangan gugatan materi pokok umumnya memakan waktu 8 hingga 18 bulan.</p>
          </div>
        </div>
      </div>
    `,
    category: 'kpop-asia',
    categoryLabel: 'K-Pop & Asia',
    ghibahMeter: {
      status: 'TERKONFIRMASI',
      percentageFact: 94,
      percentageRumor: 6,
      label: 'Terkonfirmasi Resmi Dokumen Somasi',
      description: 'Berdasarkan surat somasi tersertifikasi, rilis resmi bursa efek KRX, dan konferensi pers terbuka para pihak.',
    },
    heroImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Ilustrasi sorotan panggung konser megah di Seoul. (Foto: Pop Culture Archive Network)',
    publishedAt: '2026-10-11T12:00:00Z',
    readingTimeMinutes: 7,
    author: {
      name: 'Kenzo Pratama',
      slug: 'kenzo-pratama',
      role: 'Editor Hiburan Asia & Hallyu Culture',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    entities: ['Min Hee-jin'],
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
    `,
    category: 'hollywood-barat',
    categoryLabel: 'Hollywood & Barat',
    ghibahMeter: {
      status: 'FAKTA_DIGITAL',
      percentageFact: 91,
      percentageRumor: 9,
      label: 'Fakta Jejak Digital Panduan Serikat',
      description: 'Dokumen panduan mogok resmi serikat pekerja SAG-AFTRA dan rilis aliansi produser AMPTP.',
    },
    heroImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Gedung teater dan festival film di Los Angeles. (Foto: Cinema Industry Archives)',
    publishedAt: '2026-10-10T17:15:00Z',
    readingTimeMinutes: 6,
    author: {
      name: 'Raditya Dananjaya',
      slug: 'raditya-dananjaya',
      role: 'Redaktur Investigasi Pop-Kultur',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    },
    entities: ['Zendaya'],
    timeline: [
      {
        timeLabel: '20 Sep 2026',
        title: 'Bocornya Draft Klausul AI Interactive Game Contract',
        description: 'Tangkapan layar perjanjian lisensi suara sintetis tanpa royalti beredar di forum pengisi suara profesional.',
        receiptType: 'tweet',
      },
      {
        timeLabel: '02 Okt 2026',
        title: 'Deklarasi Boikot Resmi Serikat SAG-AFTRA',
        description: 'Perintah penghentian seluruh sesi pengambilan sampel suara dan gerak biometrik untuk studio yang menolak perjanjian proteksi.',
        receiptType: 'document',
      },
      {
        timeLabel: '10 Okt 2026',
        title: 'Dukungan RUU NO FAKES Act di Senat AS',
        description: 'Koalisi aktor dan musisi bersaksi di hadapan Komite Kehakiman Kongres mendesak undang-undang perlindungan biometrik federal.',
        receiptType: 'statement',
      },
    ],
    digitalReceiptsCount: 3,
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
