import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, ChevronRight, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Penafian (Disclaimer) & Hak Cipta Medsos — NgeGhibah.com',
  description:
    'Ketentuan penafian informasi hiburan, prinsip fair use kutipan jejak digital medsos, dan batasan tanggung jawab hukum NgeGhibah.com.',
  alternates: { canonical: 'https://ngeghibah.com/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <Link href="/" className="hover:text-white transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-amber-400 font-bold">Disclaimer</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 text-amber-400 border border-amber-800/40 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>LEGAL DISCLAIMER & FAIR USE</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-4">
          Penafian (Disclaimer) & Hak Cipta Kutipan Medsos
        </h1>

        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <h2 className="text-lg font-bold text-white font-display">1. Sifat Konten Pop-Kultur</h2>
          <p>
            Informasi yang disajikan di NgeGhibah.com ditujukan untuk tujuan jurnalistik pop-kultur, dokumentasi kronologi,
            dan edukasi literasi media sosial. Kendati kami menyertakan indikator <strong>Ghibah Meter</strong> untuk memilah
            kadar fakta dan rumor secara transparan, pembaca diimbau tetap bersikap kritis dan menunggu rilis otoritas berwenang
            sebelum menarik kesimpulan hukum sepihak.
          </p>

          <h2 className="text-lg font-bold text-white font-display">2. Pengutipan Materi Publik & Fair Use</h2>
          <p>
            Dalam menyusun laporan investigasi dan jejak digital, artikel kami dapat memuat tangkapan layar (screenshot),
            tautan sematan (embed), atau kutipan teks dari platform media sosial pihak ketiga (X, TikTok, Instagram, Threads, Reddit, YouTube).
          </p>
          <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800 text-xs sm:text-sm text-slate-300">
            Materi audio-visual tersebut sepenuhnya merupakan hak cipta milik pembuat konten / pemilik akun aslinya.
            NgeGhibah.com mengutip materi tersebut semata-mata untuk keperluan pelaporan berita, kritik, analisis peristiwa,
            dan arsip sejarah pop-kultur di bawah prinsip <em>Fair Use</em> (Penggunaan Wajar) sesuai Undang-Undang Hak Cipta yang berlaku.
          </div>

          <h2 className="text-lg font-bold text-white font-display">3. Tautan Eksternal</h2>
          <p>
            Situs ini dapat memuat tautan menuju situs web atau media sosial eksternal. Kami tidak memiliki kendali
            dan tidak bertanggung jawab atas isi, kebijakan privasi, atau perubahan materi di situs pihak ketiga tersebut.
          </p>
        </div>
      </div>
    </div>
  );
}
