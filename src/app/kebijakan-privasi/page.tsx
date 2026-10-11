import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, ChevronRight, ShieldCheck, Cookie, ExternalLink, Mail, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi (Privacy Policy) — NgeGhibah.com',
  description:
    'Kebijakan perlindungan data pribadi, penggunaan cookie Google AdSense, kepatuhan UU PDP No. 27/2022, GDPR, CCPA, dan hak pengguna di NgeGhibah.com.',
  alternates: { canonical: 'https://ngeghibah.com/kebijakan-privasi' },
};

export default function KebijakanPrivasiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Kebijakan Privasi NgeGhibah.com',
    url: 'https://ngeghibah.com/kebijakan-privasi',
    description:
      'Kebijakan privasi resmi NgeGhibah.com mengenai pengumpulan data, penggunaan cookie Google AdSense, dan hak privasi pengguna.',
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: 'NgeGhibah.com',
      url: 'https://ngeghibah.com',
    },
    dateModified: '2026-10-11',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <Link href="/" className="hover:text-white transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-neon-cyan font-bold">Kebijakan Privasi</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 text-neon-cyan border border-cyan-800/40 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <Lock className="w-3.5 h-3.5" />
          <span>DATA PROTECTION & ADSENSE COMPLIANCE</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-2">
          Kebijakan Privasi (Privacy Policy)
        </h1>
        <p className="text-xs font-mono text-slate-400 mb-8 pb-6 border-b border-slate-800">
          Terakhir diperbarui: 11 Oktober 2026 • Berlaku Efektif: 11 Oktober 2026
        </p>

        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <p className="lead text-base sm:text-lg text-slate-200">
            Selamat datang di <strong>NgeGhibah.com</strong> (dioperasikan oleh PT Media Siber Ghibah Nusantara / NgeGhibah Media Network, selanjutnya disebut "kami" atau "NgeGhibah"). Kami menghargai dan berkomitmen penuh untuk melindungi privasi serta keamanan data pribadi setiap pengunjung dan pengguna situs web kami.
          </p>

          <p>
            Dokumen Kebijakan Privasi ini dirancang secara komprehensif untuk menjelaskan transparansi pengumpulan data, dasar pemrosesan data, penggunaan cookie pihak ketiga (termasuk jaringan periklanan <strong>Google AdSense</strong>), serta hak-hak Anda berdasarkan <strong>Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)</strong>, <em>General Data Protection Regulation (GDPR)</em>, dan <em>California Consumer Privacy Act (CCPA)</em>.
          </p>

          <div className="my-6 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 flex items-start gap-3 text-xs sm:text-sm text-cyan-200">
            <ShieldCheck className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
            <div>
              <strong>Prinsip Utama Privasi Kami:</strong> NgeGhibah.com tidak pernah menjual, menyewakan, atau memperdagangkan data pribadi pengguna kepada pihak ketiga mana pun untuk tujuan pemasaran langsung tanpa persetujuan eksplisit dari Anda.
            </div>
          </div>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            1. Informasi yang Kami Kumpulkan
          </h2>
          <p>Kami mengumpulkan dua kategori informasi saat Anda mengakses dan berinteraksi dengan situs kami:</p>
          <ul className="space-y-3 pl-4 list-disc">
            <li>
              <strong>A. Informasi Non-Pribadi & Teknis (Otomatis Dikumpulkan):</strong>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Ketika Anda menjelajahi NgeGhibah.com, server kami dan penyedia analitik (seperti Cloudflare Web Analytics dan Google Analytics 4) mencatat data log teknis seperti alamat IP yang disamarkan (*anonymized IP*), jenis dan versi peramban (*browser*), sistem operasi, resolusi layar, halaman rujukan (*referring URLs*), waktu kunjungan, serta halaman yang Anda akses. Data ini digunakan murni untuk stabilitas server, pemantauan performa teknis, dan pencegahan serangan siber (DDoS).
              </p>
            </li>
            <li>
              <strong>B. Informasi Pribadi yang Anda Berikan Secara Sukarela:</strong>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Kami hanya mengumpulkan data pribadi apabila Anda secara sukarela menyediakannya kepada kami, antara lain: alamat surel saat mendaftar buletin *Briefing Pop-Kultur*, nama dan nomor kontak saat mengirimkan formulir kontak, pengaduan hak jawab, atau pengajuan tip berita.
              </p>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            2. Kebijakan Cookie & Jaringan Periklanan Google AdSense (AdSense Disclosure)
          </h2>
          <p>
            NgeGhibah.com menggunakan berkas data kecil yang tersimpan di perangkat Anda yang dikenal sebagai <strong>Cookie</strong>. Cookie membantu kami mengingat preferensi navigasi Anda, mengukur efektivitas konten, dan menyajikan pengalaman penjelajahan yang relevan.
          </p>

          <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-700/80 space-y-3">
            <div className="flex items-center gap-2 text-neon-pink font-bold text-sm font-mono uppercase">
              <Cookie className="w-4 h-4" />
              <span>PEMBERITAHUAN RESMI GOOGLE ADSENSE & DOUBLECLICK DART COOKIE</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Situs ini bermitra dengan vendor pihak ketiga, termasuk <strong>Google LLC (Google AdSense)</strong>, untuk menayangkan iklan saat Anda mengunjungi situs web kami.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc pl-4">
              <li>
                <strong>Penayangan Iklan Berdasarkan Kunjungan:</strong> Vendor pihak ketiga, termasuk Google, menggunakan cookie (seperti Cookie DoubleClick) untuk menayangkan iklan kepada pengguna berdasarkan kunjungan mereka sebelumnya ke NgeGhibah.com dan/atau situs web lain di seluruh jaringan internet.
              </li>
              <li>
                <strong>Iklan Terpersonalisasi:</strong> Penggunaan cookie iklan oleh Google memungkinkan Google dan jaringan mitranya menayangkan iklan yang relevan kepada pengunjung berdasarkan data penjelajahan situs yang telah teranonimkan.
              </li>
              <li>
                <strong>Opsi Menonaktifkan Iklan Terpersonalisasi (Opt-Out):</strong> Anda memiliki kendali penuh untuk menonaktifkan personalisasi iklan Google dengan mengunjungi halaman resmi <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-neon-cyan underline hover:text-white inline-flex items-center gap-1">Setelan Iklan Google (Google Ads Settings) <ExternalLink className="w-3 h-3" /></a>.
              </li>
              <li>
                <strong>Opsi Opt-Out Vendor Pihak Ketiga:</strong> Anda juga dapat menolak penggunaan cookie dari vendor pihak ketiga untuk periklanan berbasis minat dengan mengunjungi portal resmi industri: <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-neon-cyan underline hover:text-white inline-flex items-center gap-1">Digital Advertising Alliance (AboutAds.info) <ExternalLink className="w-3 h-3" /></a> atau <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-neon-cyan underline hover:text-white inline-flex items-center gap-1">Network Advertising Initiative (NAI) <ExternalLink className="w-3 h-3" /></a>.
              </li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            3. Dasar Hukum Pemrosesan Data (UU PDP No. 27/2022 & GDPR)
          </h2>
          <p>
            Sesuai dengan ketentuan Undang-Undang Pelindungan Data Pribadi (UU PDP) Indonesia dan GDPR, kami hanya memproses data pribadi Anda berdasarkan dasar hukum yang sah:
          </p>
          <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm">
            <li><strong>Persetujuan Eksplisit (*Consent*):</strong> Ketika Anda memasukkan email untuk berlangganan newsletter atau menghubungi redaksi.</li>
            <li><strong>Kepentingan yang Sah (*Legitimate Interests*):</strong> Untuk mengamankan situs dari serangan siber, menganalisis agregat pembaca demi perbaikan mutu editorial, dan mematuhi kewajiban pers.</li>
            <li><strong>Kewajiban Hukum (*Legal Obligations*):</strong> Untuk mematuhi instruksi aparat penegak hukum yang sah di bawah peraturan perundang-undangan Republik Indonesia.</li>
          </ul>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            4. Hak-Hak Privasi Anda (Data Subject Rights)
          </h2>
          <p>Sebagai subjek data, Anda berhak atas hal-hal berikut tanpa dipungut biaya:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-obsidian-deep border border-slate-800">
              <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Hak Akses & Portabilitas
              </div>
              <p className="text-slate-400">Meminta salinan data pribadi yang kami simpan tentang Anda.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian-deep border border-slate-800">
              <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Hak Pembetulan & Ralat
              </div>
              <p className="text-slate-400">Memperbaiki data pribadi Anda yang tidak akurat atau tidak lengkap.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian-deep border border-slate-800">
              <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Hak Penghapusan (Right to be Forgotten)
              </div>
              <p className="text-slate-400">Meminta kami menghapus surel atau data akun Anda dari database kami.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian-deep border border-slate-800">
              <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Hak Menolak Pemrosesan (Opt-Out)
              </div>
              <p className="text-slate-400">Berhenti berlangganan buletin melalui tombol unsubscribe dalam setiap email.</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            5. Perlindungan Privasi Anak di Bawah Umur (COPPA Compliance)
          </h2>
          <p>
            NgeGhibah.com menyajikan konten berita budaya pop untuk pembaca umum dan dewasa muda. Kami tidak secara sengaja mengumpulkan atau meminta informasi identitas pribadi apa pun dari anak-anak di bawah usia 13 tahun (atau batasan usia legal di yurisdiksi Anda).
          </p>
          <p>
            Jika Anda adalah orang tua atau wali dan mengetahui bahwa anak Anda telah memberikan data pribadi kepada kami tanpa persetujuan Anda, silakan hubungi kami segera. Kami akan mengambil langkah cepat untuk menghapus informasi tersebut dari server kami.
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            6. Keamanan Data & Enkripsi
          </h2>
          <p>
            Kami menerapkan protokol keamanan teknis dan organisasi berlapis, termasuk enkripsi Transport Layer Security (TLS/HTTPS) 256-bit standar industri di seluruh platform. Infrastruktur server kami dilindungi oleh Cloudflare Edge Security untuk mencegah akses tanpa izin, kebocoran data, atau modifikasi ilegal.
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            7. Tautan ke Situs Web Pihak Ketiga
          </h2>
          <p>
            Artikel kami dapat memuat tautan menuju situs web eksternal, akun media sosial, atau video YouTube. Kami tidak memiliki kendali atas praktik privasi situs pihak ketiga tersebut. Kami mendorong Anda untuk membaca kebijakan privasi setiap situs eksternal yang Anda kunjungi.
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            8. Perubahan pada Kebijakan Privasi Ini
          </h2>
          <p>
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk menyesuaikan dengan evolusi hukum, fitur situs, atau kebijakan mitra periklanan. Tanggal pembaruan terakhir akan selalu tertera di bagian atas halaman ini. Perubahan akan berlaku seketika setelah dipublikasikan di situs.
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            9. Pejabat Perlindungan Data & Kontak Resmi (DPO)
          </h2>
          <p>
            Apabila Anda memiliki pertanyaan, keberatan, atau ingin menggunakan hak privasi Anda, silakan hubungi Tim Kepatuhan Data kami:
          </p>
          <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800 text-xs sm:text-sm font-mono space-y-1.5">
            <div><strong className="text-white">Badan Pengelola:</strong> PT Media Siber Ghibah Nusantara</div>
            <div><strong className="text-white">Divisi:</strong> Data Protection & Compliance Officer (DPO)</div>
            <div><strong className="text-white">Surel Khusus Privasi:</strong> <a href="mailto:privacy@ngeghibah.com" className="text-neon-cyan hover:underline">privacy@ngeghibah.com</a></div>
            <div><strong className="text-white">Surel Redaksi Umum:</strong> <a href="mailto:redaksi@ngeghibah.com" className="text-neon-cyan hover:underline">redaksi@ngeghibah.com</a></div>
            <div><strong className="text-white">Alamat Surat:</strong> Sovereign Plaza Lt. 12, Jl. TB Simatupang No. 36, Cilandak Barat, Jakarta Selatan 12430</div>
          </div>
        </div>
      </div>
    </div>
  );
}
