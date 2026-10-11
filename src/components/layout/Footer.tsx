'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

export const Footer = () => {
  const trustLinks = [
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Susunan Redaksi', href: '/redaksi' },
    { label: 'Pedoman Media Siber', href: '/pedoman-media-siber' },
    { label: 'Kode Etik Jurnalistik', href: '/kode-etik' },
    { label: 'Pemeriksaan Fakta', href: '/pedoman-pemeriksaan-fakta' },
    { label: 'Permohonan Hak Jawab', href: '/hak-jawab' },
    { label: 'Kebijakan Privasi', href: '/kebijakan-privasi' },
    { label: 'Syarat & Ketentuan', href: '/syarat-dan-ketentuan' },
    { label: 'Pedoman Hak Cipta & DMCA', href: '/pedoman-hak-cipta' },
    { label: 'Disclaimer Hukum', href: '/disclaimer' },
    { label: 'Kontak & Hotline', href: '/kontak-kami' },
  ];

  const categoryLinks = [
    { label: 'Selebriti Lokal', href: '/#kategori' },
    { label: 'Hollywood & Barat', href: '/#kategori' },
    { label: 'K-Pop & Asian Wave', href: '/#kategori' },
    { label: 'TikTok & Digital Creators', href: '/#kategori' },
    { label: 'Dossier Profil Artis', href: '/seleb/rachel-vennya' },
  ];

  return (
    <footer className="w-full bg-[#080B12] border-t border-velvet-border/80 text-slate-300 mt-20">
      {/* Top Banner: Anti-Tribun Manifesto */}
      <div className="border-b border-slate-800/80 bg-velvet/40 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-neon-cyan">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>STANDAR EDITORIAL NGEGHIBAH:</span>
            <span className="text-slate-300">
              100% Anti Paginasi Jebakan • Bebas Iklan Pop-up Menutup Layar • Hemat Kuota
            </span>
          </div>
          <div className="text-slate-400 hidden md:block">
            Bukan Sekadar Gosip, Ini Kronologi & Verifikasi
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="full" size="lg" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Portal jurnalisme pop-kultur dan kurasi dinamika selebritas independen.
              Menyajikan kronologi terverifikasi, jejak digital transparan, dan analisis sentimen
              komunitas internet tanpa bumbu sensasionalisme murahan.
            </p>

            <div className="space-y-1 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
              <div className="text-neon-pink font-semibold">DIGITAL FINGERPRINT:</div>
              <div>• Kupas tuntas dari jejak digital pertama</div>
              <div>• Bukan sekadar heboh, ini duduk perkaranya</div>
              <div>• Radar pop-kultur berbobot: data, kronologi, verifikasi</div>
            </div>
          </div>

          {/* Trust Pages Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neon-cyan font-bold">
              PEDOMAN & LEGALITAS (E-E-A-T)
            </h4>
            <ul className="space-y-2 text-xs">
              {trustLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neon-pink font-bold">
              KATEGORI POP-KULTUR
            </h4>
            <ul className="space-y-2 text-xs">
              {categoryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-neon-cyan" />
              BRIEFING POP-KULTUR
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dapatkan rangkuman duduk perkara drama paling viral setiap Jumat sore langsung di inbox kamu.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="email.kamu@domain.com"
                className="w-full bg-velvet border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-neon-pink"
              />
              <button
                type="submit"
                className="w-full bg-neon-pink hover:bg-neon-pink/90 text-white font-semibold rounded-xl py-2 px-3 text-xs transition-colors flex items-center justify-center gap-1.5 shadow-neon-pink"
              >
                <span>Langganan Gratis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 PT Media Siber Ghibah Nusantara (NgeGhibah.com). Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/kebijakan-privasi" className="hover:text-white transition-colors">
              Privasi
            </Link>
            <span>•</span>
            <Link href="/syarat-dan-ketentuan" className="hover:text-white transition-colors">
              Ketentuan
            </Link>
            <span>•</span>
            <Link href="/hak-jawab" className="text-emerald-400 hover:underline">
              Hak Jawab 24/7
            </Link>
            <span>•</span>
            <Link href="/kode-etik" className="hover:text-slate-400">
              Dewan Pers RI
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
