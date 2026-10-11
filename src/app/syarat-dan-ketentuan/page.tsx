import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ChevronRight, Scale, ShieldAlert, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Syarat dan Ketentuan Layanan (Terms of Service) — NgeGhibah.com',
  description:
    'Syarat dan ketentuan hukum penggunaan situs web, aturan hak kekayaan intelektual, batasan tanggung jawab, dan kepatuhan hukum di NgeGhibah.com.',
  alternates: { canonical: 'https://ngeghibah.com/syarat-dan-ketentuan' },
};

export default function SyaratDanKetentuanPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Syarat dan Ketentuan Layanan NgeGhibah.com',
    url: 'https://ngeghibah.com/syarat-dan-ketentuan',
    description:
      'Perjanjian hukum dan ketentuan penggunaan layanan media digital pop-kultur NgeGhibah.com.',
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
        <span className="text-neon-pink font-bold">Syarat & Ketentuan</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/60 text-neon-pink border border-pink-800/40 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <Scale className="w-3.5 h-3.5" />
          <span>LEGAL AGREEMENT & TERMS OF USE</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-2">
          Syarat dan Ketentuan Layanan (Terms of Service)
        </h1>
        <p className="text-xs font-mono text-slate-400 mb-8 pb-6 border-b border-slate-800">
          Terakhir diperbarui: 11 Oktober 2026 • Berlaku Efektif: 11 Oktober 2026
        </p>

        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <p className="lead text-base sm:text-lg text-slate-200">
            Selamat datang di <strong>NgeGhibah.com</strong>. Dengan mengakses, membaca, menjelajahi, atau memanfaatkan layanan dan konten di situs web ini, Anda menyatakan telah membaca, memahami, dan menyetujui untuk terikat secara hukum oleh Syarat dan Ketentuan Layanan ini.
          </p>

          <p>
            Jika Anda tidak menyetujui bagian mana pun dari ketentuan ini, Anda disarankan untuk tidak melanjutkan penggunaan situs web NgeGhibah.com. Syarat dan Ketentuan ini merupakan perjanjian yang mengikat secara hukum antara Anda sebagai pengguna dengan <strong>PT Media Siber Ghibah Nusantara</strong> (selanjutnya disebut "kami" atau "NgeGhibah").
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            1. Ruang Lingkup Layanan
          </h2>
          <p>
            NgeGhibah.com adalah portal jurnalisme pop-kultur independen yang menyajikan kurasi berita selebritas, kronologi peristiwa viral, dossier profil artis, jajak pendapat pembaca, dan analisis jejak digital berbasis data. Seluruh konten disajikan dengan komitmen etika jurnalistik pers siber Indonesia.
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            2. Hak Kekayaan Intelektual (Intellectual Property)
          </h2>
          <ul className="space-y-3 pl-4 list-disc text-xs sm:text-sm">
            <li>
              <strong>Konten Orisinal Redaksi:</strong> Seluruh teks artikel editorial, analisis kronologi, desain grafis antarmuka, logo NgeGhibah, kode sumber situs, dan indikator <em>Ghibah Meter</em> adalah hak kekayaan intelektual milik PT Media Siber Ghibah Nusantara dan dilindungi oleh Undang-Undang Republik Indonesia Nomor 28 Tahun 2014 tentang Hak Cipta.
            </li>
            <li>
              <strong>Larangan Penggandaan Tanpa Izin:</strong> Dilarang keras menyalin, mereproduksi, mendistribusikan ulang, memodifikasi, atau mempublikasikan kembali konten artikel kami ke platform media lain, agregator berita, atau materi cetak secara komersial tanpa izin tertulis resmi dari Redaksi NgeGhibah.com.
            </li>
            <li>
              <strong>Kutipan Berita yang Sah:</strong> Media lain atau pengguna diperkenankan mengutip maksimal 2–3 paragraf isi artikel dengan syarat wajib menyertakan atribusi sumber yang jelas dan tautan balik (*clickable canonical hyperlink*) yang aktif mengarah ke URL artikel asli di NgeGhibah.com.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            3. Batasan Penggunaan yang Diizinkan (Acceptable Use)
          </h2>
          <p>Sebagai pengguna, Anda setuju untuk TIDAK melakukan tindakan-tindakan berikut:</p>
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-obsidian-deep border border-slate-800 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-neon-pink shrink-0 mt-0.5" />
              <span><strong>Larangan Scraping Otomatis:</strong> Menggunakan scraper otomatis, bot, spider, atau crawler pihak ketiga untuk menguras database artikel kami tanpa persetujuan API resmi tertulis.</span>
            </div>
            <div className="p-3 rounded-xl bg-obsidian-deep border border-slate-800 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-neon-pink shrink-0 mt-0.5" />
              <span><strong>Gangguan Layanan (DDoS):</strong> Melakukan upaya penyerangan denial of service, injeksi skrip berbahaya (XSS, SQL injection), atau rekayasa balik arsitektur server Cloudflare kami.</span>
            </div>
            <div className="p-3 rounded-xl bg-obsidian-deep border border-slate-800 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-neon-pink shrink-0 mt-0.5" />
              <span><strong>Pencemaran & Doxing:</strong> Menyalahgunakan fitur komentar atau formulir kontak untuk menyebarkan fitnah, doxing informasi privat orang lain, ujaran kebencian berbau SARA, atau konten pornografi.</span>
            </div>
            <div className="p-3 rounded-xl bg-obsidian-deep border border-slate-800 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-neon-pink shrink-0 mt-0.5" />
              <span><strong>Manipulasi Iklan (Ad Fraud):</strong> Mengklik iklan yang ditampilkan (Google AdSense) secara artifisial, berulang-ulang, atau menggunakan bot klik ilegal. Hal ini melanggar hukum dan ketentuan Google AdSense.</span>
            </div>
          </div>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            4. Hubungan dengan Jaringan Periklanan (Google AdSense)
          </h2>
          <p>
            Situs ini menampilkan iklan yang disajikan oleh vendor pihak ketiga, termasuk <strong>Google AdSense</strong>. Iklan dapat disesuaikan berdasarkan minat pengguna atau konteks konten artikel. Pengguna memahami bahwa:
          </p>
          <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm">
            <li>NgeGhibah.com tidak bertanggung jawab atas isi materi promosi, barang, atau jasa yang dipromosikan oleh pihak pengiklan eksternal dalam banner Google AdSense.</li>
            <li>Transaksi atau korespondensi apa pun antara Anda dengan pihak pengiklan adalah murni tanggung jawab hukum antara Anda dan pengiklan terkait.</li>
          </ul>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            5. Penafian Tanggung Jawab & Garansi (Limitation of Liability)
          </h2>
          <p>
            Konten di NgeGhibah.com disajikan dengan asas <em>"sebagaimana adanya" (as is)</em> dan <em>"sebagaimana tersedia" (as available)</em>. Kendati tim riset kami menerapkan standar verifikasi jejak digital yang ketat, kami tidak memberikan jaminan mutlak bahwa seluruh dugaan atau rumor publik yang sedang berkembang bebas dari perubahan fakta di masa depan.
          </p>
          <p>
            Dalam batas maksimum yang diizinkan oleh hukum yang berlaku di Indonesia, PT Media Siber Ghibah Nusantara, dewan direksi, dan staf redaksi tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari akses atau ketidakmampuan mengakses situs ini.
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            6. Hak Tanggapan & Mekanisme Hak Jawab
          </h2>
          <p>
            Sesuai amanat Undang-Undang Pers No. 40 Tahun 1999, setiap pihak yang merasa dirugikan oleh materi pemberitaan di NgeGhibah.com berhak mengajukan Hak Jawab atau Hak Koreksi. Prosedur lengkap dapat diakses secara transparan melalui halaman resmi <Link href="/hak-jawab" className="text-neon-cyan underline hover:text-white">Prosedur Hak Jawab & Koreksi Berita</Link>.
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            7. Hukum yang Berlaku & Yurisdiksi Penyelesaian Sengketa
          </h2>
          <p>
            Syarat dan Ketentuan ini diatur, ditafsirkan, dan ditegakkan berdasarkan hukum yang berlaku di <strong>Negara Kesatuan Republik Indonesia</strong>. Segala perselisihan atau sengketa yang timbul dari atau berkaitan dengan penggunaan situs web ini wajib diselesaikan terlebih dahulu melalui musyawarah untuk mufakat atau mediasi Dewan Pers RI. Apabila mufakat tidak tercapai, sengketa akan diselesaikan melalui yurisdiksi eksklusif Pengadilan Negeri Jakarta Selatan.
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            8. Perubahan Ketentuan
          </h2>
          <p>
            Kami berhak untuk mengubah, memperbarui, atau memodifikasi Syarat dan Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Penggunaan berkelanjutan Anda atas situs ini setelah perubahan dipublikasikan merupakan bentuk persetujuan Anda terhadap ketentuan yang diperbarui.
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            9. Hubungi Tim Hukum & Legal
          </h2>
          <p>
            Apabila Anda memiliki pertanyaan, klarifikasi hukum, atau permohonan lisensi konten, silakan hubungi tim legal kami:
          </p>
          <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800 text-xs sm:text-sm font-mono space-y-1.5">
            <div><strong className="text-white">Divisi Legal & Kepatuhan:</strong> PT Media Siber Ghibah Nusantara</div>
            <div><strong className="text-white">Email Resmi Hukum:</strong> <a href="mailto:legal@ngeghibah.com" className="text-neon-pink hover:underline">legal@ngeghibah.com</a></div>
            <div><strong className="text-white">Email Redaksi:</strong> <a href="mailto:redaksi@ngeghibah.com" className="text-neon-pink hover:underline">redaksi@ngeghibah.com</a></div>
            <div><strong className="text-white">Alamat:</strong> Sovereign Plaza Lt. 12, Jl. TB Simatupang No. 36, Cilandak Barat, Jakarta Selatan 12430</div>
          </div>
        </div>
      </div>
    </div>
  );
}
