import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, ChevronRight, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontak Kami & Tip Berita — NgeGhibah.com',
  description:
    'Alamat kantor, nomor hotline redaksi, pengiriman tip berita viral, dan kemitraan komersial NgeGhibah.com.',
  alternates: { canonical: 'https://ngeghibah.com/kontak-kami' },
};

export default function KontakKamiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <Link href="/" className="hover:text-white transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-neon-pink font-bold">Kontak Kami</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/15 text-neon-pink border border-neon-pink/30 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>HUBUNGI KAMI 24/7</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-4">
          Hubungi Tim Redaksi & Bisnis
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed mb-8 pb-6 border-b border-slate-800">
          Punya tip rumor terpanas, bukti jejak digital otentik, penawaran kerja sama sponsor, atau pertanyaan umum?
          Kami siap mendengar masukan Anda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-800">
            <div className="flex items-center gap-2 text-neon-pink text-xs font-mono font-bold uppercase mb-2">
              <Mail className="w-4 h-4" />
              <span>TIP BERITA & REDAKSI</span>
            </div>
            <div className="text-white font-bold text-base font-mono">tips@ngeghibah.com</div>
            <p className="text-xs text-slate-400 mt-1">Kirimkan tip berita dan arsip jejak digital terpercaya.</p>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-800">
            <div className="flex items-center gap-2 text-neon-cyan text-xs font-mono font-bold uppercase mb-2">
              <Mail className="w-4 h-4" />
              <span>KERJASAMA IKLAN & BRAND</span>
            </div>
            <div className="text-white font-bold text-base font-mono">ads@ngeghibah.com</div>
            <p className="text-xs text-slate-400 mt-1">Informasi media kit, native advertising, dan sponsorship.</p>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase mb-2">
              <Phone className="w-4 h-4" />
              <span>TELEPON KANTOR & HOTLINE</span>
            </div>
            <div className="text-white font-bold text-base font-mono">(021) 7592-0000</div>
            <p className="text-xs text-slate-400 mt-1">Layanan sambungan redaksi jam kerja.</p>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase mb-2">
              <Clock className="w-4 h-4" />
              <span>JAM OPERASIONAL REDAKSI</span>
            </div>
            <div className="text-white font-bold text-base">Senin – Minggu (24 Jam)</div>
            <p className="text-xs text-slate-400 mt-1">Divisi piket kurasi berita pop-kultur beroperasi 24/7.</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-800">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-mono font-bold uppercase mb-2">
            <MapPin className="w-4 h-4 text-neon-pink" />
            <span>KANTOR OPERASIONAL REDAKSI</span>
          </div>
          <div className="text-white font-medium text-sm">
            Sovereign Plaza Lt. 12, Jl. TB Simatupang No. 36, Cilandak Barat, Jakarta Selatan, DKI Jakarta 12430
          </div>
        </div>
      </div>
    </div>
  );
}
