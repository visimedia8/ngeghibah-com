import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kode Etik Jurnalistik Pop-Kultur — NgeGhibah.com',
  description:
    'Standar etika redaksi, perlindungan privasi anak, asas praduga tak bersalah, dan integritas jurnalisme siber di NgeGhibah.com.',
  alternates: { canonical: 'https://ngeghibah.com/kode-etik' },
};

export default function KodeEtikPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Kode Etik Jurnalistik Pop-Kultur NgeGhibah.com',
    url: 'https://ngeghibah.com/kode-etik',
    description: 'Pedoman etika jurnalistik pers siber, privasi anak di bawah umur, dan anti-eksploitasi sensasionalisme di NgeGhibah.com.',
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
        <span className="text-neon-pink font-bold">Kode Etik</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/15 text-neon-pink border border-neon-pink/30 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>INTEGRITAS EDITORIAL & DEWAN PERS</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-6">
          Kode Etik Jurnalistik Pop-Kultur NgeGhibah
        </h1>

        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <p className="lead font-medium text-lg text-slate-200">
            Kendati berfokus pada ranah hiburan, selebritas, dan dinamika budaya populer, redaksi NgeGhibah.com tunduk
            pada asas moral, kepatutan publik, dan standar profesional jurnalistik yang ketat.
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800">
              <h2 className="text-base font-bold text-white font-display flex items-center gap-2">
                <span className="text-neon-pink font-mono">1.</span>
                <span>Anti-Eksploitasi Privasi Ekstrem</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Kami tidak mempublikasikan hal-hal yang murni bersifat ranah privat tanpa korelasi kepentingan publik,
                seperti rekam medis rahasia, nomor identitas kependudukan (NIK/KTP), atau kehidupan intim di dalam ruang privat.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800">
              <h2 className="text-base font-bold text-white font-display flex items-center gap-2">
                <span className="text-neon-pink font-mono">2.</span>
                <span>Perlindungan Anak & Remaja di Bawah Umur</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Wajah, nama, dan identitas anak-anak dari figur publik yang terjerat masalah hukum atau perselisihan perceraian keluarga
                wajib disamarkan (blur) demi melindungi masa depan dan kesehatan psikologis anak sesuai UU Perlindungan Anak.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800">
              <h2 className="text-base font-bold text-white font-display flex items-center gap-2">
                <span className="text-neon-pink font-mono">3.</span>
                <span>Pemberitaan Non-Vulgar & Penghormatan Korban</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Dilarang mempublikasikan rincian vulgar dari dugaan kekerasan seksual, pelecehan, atau metode bunuh diri.
                Setiap pelaporan perkara wajib mengedepankan empati, praduga tak bersalah, dan perlindungan korban.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800">
              <h2 className="text-base font-bold text-white font-display flex items-center gap-2">
                <span className="text-neon-pink font-mono">4.</span>
                <span>Keaslian Jejak Digital & Anti-Manipulasi AI</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Tangkapan layar, rekaman audio, dan arsip digital yang dikutip harus dapat diverifikasi keasliannya.
                Redaksi melarang penayangan deepfake atau rekaman manipulatif tanpa keterangan edukasi yang jelas kepada pembaca.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800">
              <h2 className="text-base font-bold text-white font-display flex items-center gap-2">
                <span className="text-neon-pink font-mono">5.</span>
                <span>Independensi dari Manajemen Artis & Sponsor Iklan</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Setiap liputan berita bersifat independen. Manajemen artis, label rekaman, maupun mitra sponsor pengiklan
                tidak memiliki hak veto atau intervensi untuk membatalkan penayangan kronologi fakta yang sah dan terverifikasi.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-3 text-xs font-mono">
            <Link href="/pedoman-pemeriksaan-fakta" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-emerald-400 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Metodologi Verifikasi Fakta</span>
              <ArrowRight className="w-3 h-3 text-emerald-400" />
            </Link>
            <Link href="/pedoman-media-siber" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-neon-cyan text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Pedoman Media Siber Dewan Pers</span>
              <ArrowRight className="w-3 h-3 text-neon-cyan" />
            </Link>
            <Link href="/hak-jawab" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-neon-pink text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Prosedur Hak Jawab</span>
              <ArrowRight className="w-3 h-3 text-neon-pink" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
