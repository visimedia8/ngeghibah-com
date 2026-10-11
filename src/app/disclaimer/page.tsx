import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, ChevronRight, Scale, ShieldAlert, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Penafian Hukum (Disclaimer) & Batasan Tanggung Jawab — NgeGhibah.com',
  description:
    'Ketentuan penafian informasi hiburan, non-nasihat hukum/keuangan, prinsip fair use kutipan jejak digital medsos, dan batasan tanggung jawab hukum NgeGhibah.com.',
  alternates: { canonical: 'https://ngeghibah.com/disclaimer' },
};

export default function DisclaimerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Penafian Hukum & Disclaimer NgeGhibah.com',
    url: 'https://ngeghibah.com/disclaimer',
    description: 'Penafian resmi mengenai konten berita pop-kultur, kutipan media sosial, dan batasan tanggung jawab hukum NgeGhibah.com.',
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
        <span className="text-amber-400 font-bold">Penafian Hukum</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 text-amber-400 border border-amber-800/40 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>LEGAL DISCLAIMER & NON-LIABILITY</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-2">
          Penafian Hukum (Disclaimer) & Batasan Tanggung Jawab
        </h1>
        <p className="text-xs font-mono text-slate-400 mb-8 pb-6 border-b border-slate-800">
          Terakhir diperbarui: 11 Oktober 2026 • Berlaku untuk seluruh konten di domain NgeGhibah.com
        </p>

        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white font-display pt-2">
            1. Sifat Konten Pop-Kultur & Hiburan
          </h2>
          <p>
            Seluruh materi, artikel, kronologi, jajak pendapat, dan data dossier yang dipublikasikan di NgeGhibah.com disajikan untuk tujuan informasi jurnalistik, dokumentasi arsip budaya populer, dan hiburan edukatif bagi masyarakat umum.
          </p>
          <p>
            Meskipun tim riset kami berupaya semaksimal mungkin merekonstruksi kronologi peristiwa berdasarkan jejak digital otentik dan menyematkan indikator transparansi <strong>Ghibah Meter</strong>, pembaca diimbau untuk selalu bersikap kritis, bijaksana, dan menunggu rilis atau putusan resmi dari pihak berwenang sebelum menarik kesimpulan hukum final.
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            2. Penafian Nasihat Medis, Finansial, & Hukum (Non-YMYL Advice)
          </h2>
          <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-300">
            <p>
              <strong>Bukan Nasihat Finansial / Investasi:</strong> Setiap ulasan mengenai bisnis selebritas, royalti musik, aset kripto, atau kemitraan komersial bukan merupakan rekomendasi investasi atau nasihat keuangan.
            </p>
            <p>
              <strong>Bukan Nasihat Medis / Kesehatan:</strong> Pemberitaan terkait kondisi kesehatan artis, prosedur bedah estetika, atau produk perawatan tubuh tidak dapat menggantikan diagnosis medis dari dokter spesialis resmi.
            </p>
            <p>
              <strong>Bukan Nasihat Hukum:</strong> Analisis mengenai perselisihan hukum, gugatan perdata, atau delik pidana figur publik adalah pelaporan jurnalistik dan bukan merupakan opini hukum formal dari penasihat hukum.
            </p>
          </div>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            3. Pengutipan Media Sosial & Doktrin Fair Use
          </h2>
          <p>
            Dalam menjalankan fungsi jurnalisme siber, artikel kami dapat memuat tangkapan layar, cuplikan klip, kutipan status, atau video dari platform media sosial publik pihak ketiga (seperti TikTok, Instagram, X/Twitter, Threads, YouTube, dan Reddit).
          </p>
          <p>
            Materi audio-visual tersebut sepenuhnya merupakan hak cipta milik kreator atau platform aslinya, dan dikutip dengan mencantumkan atribusi sumber yang jelas di bawah prinsip <em>Fair Use</em> sesuai <strong>Pasal 44 UU No. 28 Tahun 2014 tentang Hak Cipta</strong>. Prosedur penurunan konten hak cipta dapat dibaca di halaman <Link href="/pedoman-hak-cipta" className="text-amber-400 underline hover:text-white">Pedoman Hak Cipta & DMCA</Link>.
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            4. Tautan Eksternal & Konten Pihak Ketiga
          </h2>
          <p>
            Situs ini dapat memuat tautan menuju situs web atau aplikasi pihak ketiga. NgeGhibah.com tidak bertanggung jawab atas keakuratan, ketersediaan, atau kebijakan privasi platform eksternal tersebut. Kunjungan Anda ke situs pihak ketiga adalah atas diskresi dan risiko pribadi Anda.
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            5. Hak Koreksi & Tanggapan Pihak Terdampak
          </h2>
          <p>
            NgeGhibah.com menjamin pemenuhan hak setiap figur publik, agensi, atau badan hukum untuk mengajukan klarifikasi, ralat, atau hak jawab tanpa dipungut biaya apa pun. Silakan rujuk langsung ke prosedur resmi di halaman <Link href="/hak-jawab" className="text-neon-cyan underline hover:text-white">Mekanisme Hak Jawab & Klarifikasi Berita</Link>.
          </p>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-3 text-xs font-mono">
            <Link href="/pedoman-pemeriksaan-fakta" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-emerald-400 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Metodologi Ghibah Meter</span>
              <ArrowRight className="w-3 h-3 text-emerald-400" />
            </Link>
            <Link href="/syarat-dan-ketentuan" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-neon-pink text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Syarat & Ketentuan</span>
              <ArrowRight className="w-3 h-3 text-neon-pink" />
            </Link>
            <Link href="/kebijakan-privasi" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-neon-cyan text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Kebijakan Privasi</span>
              <ArrowRight className="w-3 h-3 text-neon-cyan" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
