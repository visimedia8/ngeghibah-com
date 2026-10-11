'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Menu, X, Sparkles, Shield, User, Flame, ArrowRight, FileText } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { MOCK_ARTICLES, MOCK_CELEBRITIES } from '@/data/mockData';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  // Close search on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter articles and celebrities based on search query
  const query = searchQuery.trim().toLowerCase();
  const matchingArticles = query
    ? MOCK_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.entities.some((e) => e.toLowerCase().includes(query))
      ).slice(0, 4)
    : [];

  const matchingCelebs = query
    ? MOCK_CELEBRITIES.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.stageName.toLowerCase().includes(query) ||
          c.profession.toLowerCase().includes(query)
      ).slice(0, 3)
    : [];

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Seleb Lokal', href: '/kategori/seleb-lokal' },
    { label: 'Hollywood & Barat', href: '/kategori/hollywood-barat' },
    { label: 'K-Pop & Asia', href: '/kategori/kpop-asia' },
    { label: 'Creator & TikTok', href: '/kategori/creator-tiktok' },
    { label: 'Direktori Seleb', href: '/seleb' },
    { label: 'Kamus Ghibah', href: '/kamus' },
    { label: 'Hak Jawab', href: '/hak-jawab' },
  ];

  const handleResultClick = (href: string) => {
    setSearchOpen(false);
    setSearchQuery('');
    router.push(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full glass-nav backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Brand */}
            <div className="flex items-center gap-6">
              <Logo variant="full" />

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isActive
                          ? 'text-white bg-white/10 font-semibold'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right Tools: Search & Mobile Menu Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Toggle Button */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Cari artikel atau seleb"
                className="min-h-[44px] min-w-[44px] px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-velvet border border-slate-700/60 transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer active:scale-95"
              >
                <Search className="w-4 h-4 text-neon-cyan" />
                <span className="hidden md:inline text-slate-400 font-mono text-[11px]">
                  Cari gosip & fakta...
                </span>
              </button>

              {/* Trust Badge Link */}
              <Link
                href="/pedoman-media-siber"
                className="hidden sm:inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors"
              >
                <Shield className="w-3.5 h-3.5" />
                <span className="hidden md:inline">STANDAR PERS SIBER</span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Buka menu navigasi"
                className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-300 hover:text-white bg-velvet border border-slate-700 active:scale-95 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Live Search Bar Dropdown */}
        {searchOpen && (
          <div className="bg-obsidian-deep/95 border-b border-velvet-border p-4 shadow-2xl backdrop-blur-2xl animate-fadeIn">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neon-cyan" />
                  <input
                    type="text"
                    placeholder="Ketik nama artis atau topik viral (contoh: Rachel Vennya, royalti musik, Fuji)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-velvet border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink"
                    autoFocus
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
                <button
                  onClick={() => setSearchOpen(false)}
                  className="min-h-[44px] px-4 py-2 bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-mono font-semibold transition-colors active:scale-95 cursor-pointer"
                >
                  Tutup
                </button>
              </div>

              {/* Live Search Results */}
              {query && (
                <div className="rounded-2xl border border-slate-800 bg-velvet/90 p-4 space-y-4 max-h-[60vh] overflow-y-auto no-scrollbar">
                  {/* Matching Celebrities */}
                  {matchingCelebs.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono text-neon-cyan font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>PROFIL SELEBRITAS & DOSSIER</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {matchingCelebs.map((celeb) => (
                          <div
                            key={celeb.id}
                            onClick={() => handleResultClick(`/seleb/${celeb.slug}`)}
                            className="flex items-center gap-3 p-2.5 rounded-xl bg-obsidian-deep/80 hover:bg-neon-pink/15 border border-slate-800 hover:border-neon-pink/40 cursor-pointer transition-all"
                          >
                            <img
                              src={celeb.avatar}
                              alt={celeb.stageName}
                              className="w-9 h-9 rounded-full object-cover border border-neon-cyan shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <h5 className="text-xs font-bold text-white truncate">
                                {celeb.stageName}
                              </h5>
                              <p className="text-[10px] text-slate-400 font-mono truncate">
                                {celeb.profession}
                              </p>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Matching Articles */}
                  {matchingArticles.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <div className="text-[11px] font-mono text-neon-pink font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span>ARTIKEL & KRONOLOGI TERKAIT</span>
                      </div>
                      <div className="space-y-2">
                        {matchingArticles.map((art) => (
                          <div
                            key={art.id}
                            onClick={() => handleResultClick(`/artikel/${art.slug}`)}
                            className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-obsidian-deep/80 hover:bg-neon-pink/15 border border-slate-800 hover:border-neon-pink/40 cursor-pointer transition-all"
                          >
                            <div className="min-w-0">
                              <span className="text-[10px] font-mono text-neon-cyan uppercase">
                                {art.categoryLabel}
                              </span>
                              <h5 className="text-xs font-semibold text-white truncate">
                                {art.title}
                              </h5>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400 shrink-0">
                              {art.readingTimeMinutes} min baca →
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Empty State */}
                  {matchingArticles.length === 0 && matchingCelebs.length === 0 && (
                    <div className="py-6 text-center text-slate-400 text-xs font-mono space-y-1">
                      <p>Tidak ada gosip atau profil yang cocok dengan "{searchQuery}".</p>
                      <p className="text-[11px] text-slate-500">
                        Coba gunakan kata kunci nama seleb (misal: "Rachel", "Han So-hee", "Fuji")
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-obsidian-deep/95 border-b border-velvet-border px-4 py-4 space-y-2 backdrop-blur-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-800">
              <Logo variant="compact" size="sm" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-neon-pink bg-neon-pink/10 border border-neon-pink/30 px-2.5 py-1 rounded-full font-semibold">
                EDISI MOBILE
              </span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-velvet border border-transparent hover:border-slate-800 active:scale-98 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>✓ Media Terverifikasi Anti-Clickbait</span>
              <Link
                href="/tentang-kami"
                onClick={() => setMobileMenuOpen(false)}
                className="underline text-neon-cyan py-2 inline-block"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
