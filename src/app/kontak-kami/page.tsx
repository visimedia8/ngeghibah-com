import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, ChevronRight, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontak Kami & Tip Berita — NgeGhibah.com',
  description:
    'Alamat kantor, nomor hotline redaksi, pengiriman tip berita viral terenkripsi, hak jawab, dan kemitraan komersial NgeGhibah.com.',
  alternates: { canonical: 'https://ngeghibah.com/kontak-kami' },
};

export default function KontakKamiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kontak Resmi NgeGhibah.com',
    url: 'https://ngeghibah.com/kontak-kami',
    description: 'Informasi kontak kantor redaksi, hotline hak jawab, dan pengiriman tip berita NgeGhibah.com.',
    mainEntity: {
      '@type': 'Organization',
      name: 'NgeGhibah.com',
      url: 'https://ngeghibah.com',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+62-21-7592-0000',
          contactType: 'newsroom',
          email: 'tips@ngeghibah.com',
          availableLanguage: ['Indonesian', 'English'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+62-21-7592-0000',
          contactType: 'complaints',
          email: 'hakjawab@ngeghibah.com',
          availableLanguage: ['Indonesian'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'advertising',
          email: 'ads@ngeghibah.com',
          availableLanguage: ['Indonesian', 'English'],
        },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sovereign Plaza Lt. 12, Jl. TB Simatupang No. 36, Cilandak Barat',
        addressLocality: 'Jakarta Selatan',
        addressRegion: 'DKI Jakarta',
        postalCode: '12430',
        addressCountry: 'ID',
      },
    },
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
          Punya tip rumor terpanas, bukti jejak digital otentik, penawaran kerja sama sponsor, pengajuan hak jawab, atau pertanyaan umum?
          Kami menyediakan saluran komunikasi terpisah yang dapat diakses langsung oleh publik.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-800">
            <div className="flex items-center gap-2 text-neon-pink text-xs font-mono font-bold uppercase mb-2">
              <Mail className="w-4 h-4" />
              <span>TIP BERITA & INVESTIGASI</span>
            </div>
            <div className="text-white font-bold text-base font-mono">
              <a href="mailto:tips@ngeghibah.com" className="hover:text-neon-pink transition-colors">tips@ngeghibah.com</a>
            </div>
            <p className="text-xs text-slate-400 mt-1">Kirimkan bukti tangkapan layar, rekaman audio, atau dokumen peristiwa viral.</p>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>LAYANAN HAK JAWAB & RALAT</span>
            </div>
            <div className="text-white font-bold text-base font-mono">
              <a href="mailto:hakjawab@ngeghibah.com" className="hover:text-emerald-400 transition-colors">hakjawab@ngeghibah.com</a>
            </div>
            <p className="text-xs text-slate-400 mt-1">Khusus penanganan keberatan materi berita (respon maksimal 1x24 jam).</p>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-800">
            <div className="flex items-center gap-2 text-neon-cyan text-xs font-mono font-bold uppercase mb-2">
              <Mail className="w-4 h-4" />
              <span>KERJASAMA BRAND & IKLAN</span>
            </div>
            <div className="text-white font-bold text-base font-mono">
              <a href="mailto:ads@ngeghibah.com" className="hover:text-neon-cyan transition-colors">ads@ngeghibah.com</a>
            </div>
            <p className="text-xs text-slate-400 mt-1">Informasi media kit, native content, placement sponsor, dan agensi.</p>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase mb-2">
              <Phone className="w-4 h-4" />
              <span>TELEPON KANTOR & HOTLINE</span>
            </div>
            <div className="text-white font-bold text-base font-mono">(021) 7592-0000</div>
            <p className="text-xs text-slate-400 mt-1">Sambungan telepon redaksi pada jam kerja (09.00 - 18.00 WIB).</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-800">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono font-bold uppercase mb-2">
              <MapPin className="w-4 h-4 text-neon-pink" />
              <span>KANTOR PUSAT OPERASIONAL</span>
            </div>
            <div className="text-white font-medium text-sm leading-relaxed">
              Sovereign Plaza Lt. 12<br />
              Jl. TB Simatupang No. 36, Cilandak Barat<br />
              Jakarta Selatan, DKI Jakarta 12430
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-800">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono font-bold uppercase mb-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>JAM OPERASIONAL REDAKSI</span>
            </div>
            <div className="text-white font-medium text-sm leading-relaxed">
              Senin – Minggu (24 Jam Penuh)<br />
              <span className="text-xs text-slate-400">Divisi piket redaksi siber beroperasi tanpa jeda untuk memverifikasi peristiwa viral mendesak.</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-3 text-xs font-mono">
          <Link href="/hak-jawab" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-emerald-400 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
            <span>Panduan Form Hak Jawab</span>
            <ArrowRight className="w-3 h-3 text-emerald-400" />
          </Link>
          <Link href="/pedoman-hak-cipta" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-amber-400 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
            <span>Laporan Pelanggaran Hak Cipta</span>
            <ArrowRight className="w-3 h-3 text-amber-400" />
          </Link>
          <Link href="/syarat-dan-ketentuan" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-neon-pink text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
            <span>Syarat & Ketentuan Layanan</span>
            <ArrowRight className="w-3 h-3 text-neon-pink" />
          </Link>
        </div>
      </div>
    </div>
  );
}
