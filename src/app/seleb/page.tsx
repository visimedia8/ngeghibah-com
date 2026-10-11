import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Users, ChevronRight, Search } from 'lucide-react';
import { MOCK_CELEBRITIES } from '@/data/mockData';
import { CelebrityDossierCard } from '@/components/signature/CelebrityDossierCard';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: 'Direktori Selebritas & Dossier Jejak Digital Pop-Kultur',
  description:
    'Database profil artis, selebgram, dan figur publik lengkap dengan circle relasi, riwayat kontroversi, dan arsip jejak digital terverifikasi.',
  alternates: {
    canonical: 'https://ngeghibah.com/seleb',
  },
};

export default function CelebrityDirectoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb Trail */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <Link href="/" className="hover:text-white transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-neon-cyan font-bold">Direktori Selebritas</span>
      </nav>

      {/* Hero Header */}
      <header className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-velvet via-obsidian-deep to-velvet border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>DATABASE ENTITAS POP-KULTUR (pSEO MOAT)</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3">
            Direktori Selebritas & Dossier Jejak Digital
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Ensiklopedia figur publik, kreator konten, dan seleb internasional terlengkap.
            Menyajikan riwayat karier, lingkaran pertemanan (*circle*), lini bisnis, serta arsip
            kronologi drama masa lalu secara objektif.
          </p>
        </div>
      </header>

      {/* Leaderboard Ad */}
      <div className="my-8">
        <AdSlot slotId="directory-top-banner" format="banner" />
      </div>

      {/* Celebrity Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {MOCK_CELEBRITIES.map((celeb) => (
          <CelebrityDossierCard key={celeb.id} celebrity={celeb} />
        ))}
      </div>
    </div>
  );
}
