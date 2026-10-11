import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kode Etik Jurnalistik Pop-Kultur — NgeGhibah.com',
  description:
    'Standar etika redaksi, perlindungan privasi anak, asas praduga tak bersalah, dan integritas jurnalisme NgeGhibah.com.',
  alternates: { canonical: 'https://ngeghibah.com/kode-etik' },
};

export default function KodeEtikPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <Link href="/" className="hover:text-white transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-neon-pink font-bold">Kode Etik</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/15 text-neon-pink border border-neon-pink/30 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>INTEGRITAS EDITORIAL</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-6">
          Kode Etik Jurnalistik Pop-Kultur NgeGhibah
        </h1>

        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <p className="lead font-medium text-lg text-slate-200">
            Kendati berfokus pada ranah hiburan, selebritas, dan budaya populer, redaksi NgeGhibah.com tunduk
            pada asas moral dan standar profesional jurnalistik yang ketat.
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800">
              <h2 className="text-base font-bold text-white font-display flex items-center gap-2">
                <span className="text-neon-pink font-mono">1.</span>
                <span>Anti-Eksploitasi Privasi Ekstrem</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Kami tidak mempublikasikan hal-hal yang murni bersifat ranah privat tanpa korelasi kepentingan publik,
                seperti rekam medis rahasia, nomor identitas kependudukan, atau kehidupan intim di dalam ruang pribadi.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800">
              <h2 className="text-base font-bold text-white font-display flex items-center gap-2">
                <span className="text-neon-pink font-mono">2.</span>
                <span>Perlindungan Anak & Remaja di Bawah Umur</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Wajah dan identitas anak-anak dari figur publik yang terjerat masalah hukum atau perselisihan keluarga
                wajib disamarkan demi melindungi masa depan dan kesehatan psikologis mereka.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800">
              <h2 className="text-base font-bold text-white font-display flex items-center gap-2">
                <span className="text-neon-pink font-mono">3.</span>
                <span>Pemberitaan Non-Vulgar & Penghormatan Korban</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Dilarang mempublikasikan rincian vulgar dari dugaan kekerasan seksual atau metode bunuh diri.
                Setiap dugaan kekerasan wajib menjunjung tinggi empati terhadap korban.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800">
              <h2 className="text-base font-bold text-white font-display flex items-center gap-2">
                <span className="text-neon-pink font-mono">4.</span>
                <span>Keaslian Jejak Digital & Anti-Manipulasi</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Tangkapan layar, rekaman audio, dan arsip digital yang dikutip harus dapat diverifikasi keasliannya.
                Redaksi melarang penggunaan deepfake atau rekaman manipulatif tanpa keterangan edukasi yang jelas.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800">
              <h2 className="text-base font-bold text-white font-display flex items-center gap-2">
                <span className="text-neon-pink font-mono">5.</span>
                <span>Independensi dari Manajemen Artis & Sponsor</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Setiap liputan berita bersifat independen. Manajemen artis atau pengiklan tidak memiliki hak intervensi
                untuk membatalkan penayangan kronologi fakta yang sah dan terverifikasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
