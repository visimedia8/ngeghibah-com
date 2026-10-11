'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Sparkles, Shield, User, Flame } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Seleb Lokal', href: '/kategori/seleb-lokal' },
    { label: 'Hollywood & Barat', href: '/kategori/hollywood-barat' },
    { label: 'K-Pop & Asia', href: '/kategori/kpop-asia' },
    { label: 'Creator & TikTok', href: '/kategori/creator-tiktok' },
    { label: 'Direktori Seleb', href: '/seleb' },
    { label: 'Hak Jawab', href: '/hak-jawab' },
  ];

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
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-velvet border border-slate-700/60 transition-colors flex items-center gap-2 text-xs"
              >
                <Search className="w-4 h-4 text-neon-cyan" />
                <span className="hidden md:inline text-slate-400 font-mono text-[11px]">
                  Cari gosip & fakta...
                </span>
              </button>

              {/* Trust Badge Link */}
              <Link
                href="/pedoman-media-siber"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors"
              >
                <Shield className="w-3.5 h-3.5" />
                <span className="hidden md:inline">STANDAR PERS SIBER</span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Buka menu navigasi"
                className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-velvet border border-slate-700"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        {searchOpen && (
          <div className="bg-obsidian-deep border-b border-velvet-border p-4 animate-fadeIn">
            <div className="max-w-3xl mx-auto flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neon-cyan" />
                <input
                  type="text"
                  placeholder="Ketik nama seleb atau topik viral (contoh: Rachel Vennya, royalti musik)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-velvet border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="px-4 py-2.5 bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-mono font-semibold"
              >
                Tutup
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-obsidian-deep/95 border-b border-velvet-border px-4 py-4 space-y-2 backdrop-blur-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-800">
              <Logo variant="compact" size="sm" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-neon-pink bg-neon-pink/10 border border-neon-pink/30 px-2 py-0.5 rounded-full font-semibold">
                EDISI MOBILE
              </span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-velvet border border-transparent hover:border-slate-800"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>✓ Media Terverifikasi Anti-Clickbait</span>
              <Link
                href="/tentang-kami"
                onClick={() => setMobileMenuOpen(false)}
                className="underline text-neon-cyan"
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
