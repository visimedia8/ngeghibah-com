'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Search,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Share2,
  ChevronRight,
  HelpCircle,
  Flame,
} from 'lucide-react';
import { MOCK_KAMUS } from '@/data/kamusData';
import { KamusEntry } from '@/types';
import { AdSlot } from '@/components/ads/AdSlot';

export default function KamusPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'semua', label: 'Semua Istilah' },
    { id: 'Slang Warganet', label: 'Slang Warganet' },
    { id: 'Industri Media', label: 'Industri Media' },
    { id: 'Hukum & Verifikasi', label: 'Hukum & Verifikasi' },
    { id: 'Fandom & K-Pop', label: 'Fandom & K-Pop' },
  ];

  const filteredTerms = useMemo(() => {
    return MOCK_KAMUS.filter((item) => {
      const matchCat =
        selectedCategory === 'semua' || item.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchQuery =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.shortDef.toLowerCase().includes(q) ||
        item.fullDef.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  // DefinedTermSet JSON-LD Schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Kamus Istilah Pop-Kultur & Ghibah Nusantara',
    description:
      'Glosarium resmi istilah bahasa gaul internet, slang drama selebritas, hukum pers, dan etika jejak digital.',
    url: 'https://ngeghibah.com/kamus',
    hasDefinedTerm: MOCK_KAMUS.map((item) => ({
      '@type': 'DefinedTerm',
      name: item.term,
      description: item.shortDef,
      inDefinedTermSet: 'https://ngeghibah.com/kamus',
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-neon-pink font-bold">Kamus Istilah Pop-Kultur</span>
        </nav>

        {/* Page Hero Header */}
        <header className="rounded-3xl bg-velvet/80 border border-slate-800 p-6 sm:p-10 mb-8 sm:mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/60 text-neon-cyan border border-cyan-800/40">
              <BookOpen className="w-3.5 h-3.5" />
              <span>GLOSARIUM & EDUKASI MEDIA DIGITAL</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Kamus Istilah Ghibah & Slang Pop-Kultur
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Panduan lengkap memahami kosakata drama warganet, taktik showbiz industri hiburan,
              hingga risiko delik hukum UU ITE di balik setiap istilah viral. Kupas tuntas agar
              tidak tersesat dalam perang narasi medsos.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <div>
                <span className="text-white font-bold">{MOCK_KAMUS.length} Istilah</span> Resmi
              </div>
              <div>
                <span className="text-neon-cyan font-bold">4 Pilar</span> Taksonomi
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-emerald-400 font-bold">100% Edukatif</span> & Sadar Hukum
              </div>
            </div>
          </div>
        </header>

        {/* Search & Filter Toolbar */}
        <section className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neon-cyan" />
              <input
                type="text"
                placeholder="Cari istilah gaul (misal: Blind Item, Spill, Cegil, Receipts)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-velvet border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`min-h-[38px] px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-neon-pink text-white font-bold shadow-neon-pink'
                      : 'bg-velvet border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Dictionary Entries Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Menampilkan {filteredTerms.length} Istilah Pop-Kultur</span>
            {selectedCategory !== 'semua' && (
              <span className="text-neon-cyan">Filter: {selectedCategory}</span>
            )}
          </div>

          {filteredTerms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTerms.map((item) => {
                const isHighRisk = item.legalRisk.includes('Tinggi');
                const isMedRisk = item.legalRisk.includes('Sedang');

                return (
                  <article
                    key={item.id}
                    id={item.slug}
                    className="p-6 sm:p-7 rounded-3xl bg-velvet/60 border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-obsidian-deep border border-slate-700 text-neon-cyan">
                          {item.category}
                        </span>

                        {/* Risk Badge */}
                        <div
                          className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full flex items-center gap-1 font-semibold ${
                            isHighRisk
                              ? 'bg-rose-950/60 text-rose-400 border border-rose-800/40'
                              : isMedRisk
                              ? 'bg-amber-950/60 text-amber-400 border border-amber-800/40'
                              : 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                          }`}
                        >
                          {isHighRisk ? (
                            <AlertTriangle className="w-3 h-3" />
                          ) : isMedRisk ? (
                            <AlertTriangle className="w-3 h-3" />
                          ) : (
                            <ShieldCheck className="w-3 h-3" />
                          )}
                          <span>Risiko: {item.legalRisk}</span>
                        </div>
                      </div>

                      {/* Headword Term */}
                      <h2 className="font-display font-extrabold text-2xl text-white mb-2 tracking-tight">
                        {item.term}
                      </h2>

                      {/* Short Definition */}
                      <p className="text-sm font-medium text-neon-pink/90 mb-4 leading-snug">
                        {item.shortDef}
                      </p>

                      {/* Full Explanation */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.fullDef}
                      </p>

                      {/* Context & Real World Example */}
                      <div className="space-y-2 pt-3 border-t border-slate-800/80 text-xs">
                        <div className="p-3 rounded-xl bg-obsidian-deep/80 border border-slate-800">
                          <span className="font-mono text-neon-cyan font-bold block mb-1">
                            KONTEKS PENGGUNAAN DI MEDSOS:
                          </span>
                          <span className="text-slate-300 leading-relaxed">
                            {item.contextUsage}
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-obsidian-deep/50 border border-slate-800">
                          <span className="font-mono text-slate-400 font-bold block mb-1">
                            CONTOH KASUS INDUSTRI:
                          </span>
                          <span className="text-slate-300 italic">
                            "{item.realWorldExample}"
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                      <Link
                        href={`/kategori/seleb-lokal`}
                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <span>Lihat Kasus Terkait</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                      <span className="text-[10px] text-slate-500 font-mono">
                        #{item.slug}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="py-16 text-center rounded-3xl bg-velvet/40 border border-slate-800 text-slate-400 space-y-2">
              <HelpCircle className="w-8 h-8 mx-auto text-slate-500" />
              <p className="font-mono text-sm">
                Istilah "{searchQuery}" belum terdaftar di kamus ini.
              </p>
              <p className="text-xs text-slate-500">
                Punya usulan kata gaul atau slang baru? Ajukan via kanal kontak resmi redaksi.
              </p>
            </div>
          )}
        </section>

        {/* AdSlot */}
        <div className="my-10">
          <AdSlot slotId="kamus-directory-bottom" format="banner" />
        </div>
      </div>
    </>
  );
}
