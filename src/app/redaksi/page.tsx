import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, ChevronRight, Building, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Susunan Redaksi & Manajemen — NgeGhibah.com',
  description:
    'Struktur tim redaksi, penanggung jawab pers, dan dewan pengelola PT Media Siber Ghibah Nusantara.',
  alternates: { canonical: 'https://ngeghibah.com/redaksi' },
};

export default function RedaksiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <Link href="/" className="hover:text-white transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-neon-cyan font-bold">Susunan Redaksi</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 text-neon-cyan border border-cyan-800/40 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <Building className="w-3.5 h-3.5" />
          <span>LEGALITAS & STRUKTUR PERS</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-4">
          Susunan Redaksi & Dewan Pengelola
        </h1>

        <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5 mb-8">
          <div><strong className="text-white">Penerbit:</strong> PT Media Populer Siber Indonesia (NgeGhibah Media Network)</div>
          <div><strong className="text-white">SK Kemenkumham:</strong> AHU-0048192.AH.01.01.Tahun 2026</div>
          <div><strong className="text-white">NIB:</strong> 9120304810291</div>
          <div><strong className="text-white">Alamat Kantor:</strong> Sovereign Plaza Lt. 12, Jl. TB Simatupang No. 36, Cilandak Barat, Jakarta Selatan 12430</div>
          <div><strong className="text-white">Email Resmi:</strong> redaksi@ngeghibah.com</div>
        </div>

        <div className="space-y-6 text-sm">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neon-pink font-bold mb-2">
              DEWAN PENGELOLA & PENANGGUNG JAWAB
            </h2>
            <div className="text-white font-bold text-base">Johan Anggo</div>
            <div className="text-xs text-slate-400 font-mono">Pemimpin Umum / Penanggung Jawab Perusahaan</div>
          </div>

          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neon-cyan font-bold mb-2">
              DEWAN REDAKSI
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-white font-bold">Raditya Pratama, S.I.Kom.</div>
                <div className="text-xs text-slate-400 font-mono">Pemimpin Redaksi (Editor-in-Chief)</div>
              </div>
              <div>
                <div className="text-white font-bold">Annisa Larasati</div>
                <div className="text-xs text-slate-400 font-mono">Redaktur Pelaksana (Managing Editor)</div>
              </div>
            </div>
          </div>

          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
              REDAKTUR KANAL SPESIALIS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-obsidian-deep border border-slate-800">
                <div className="text-white font-bold">Dimas Arya Wicaksono</div>
                <div className="text-slate-400 mt-0.5">Kanal Seleb Lokal & Infotainmen</div>
              </div>
              <div className="p-3 rounded-xl bg-obsidian-deep border border-slate-800">
                <div className="text-white font-bold">Clarissa Stephanie</div>
                <div className="text-slate-400 mt-0.5">Kanal K-Pop & Gelombang Asia</div>
              </div>
              <div className="p-3 rounded-xl bg-obsidian-deep border border-slate-800">
                <div className="text-white font-bold">Kevin Nathaniel</div>
                <div className="text-slate-400 mt-0.5">Kanal Hollywood & Global Pop</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
              RISET DATA & FACT-CHECKING
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-obsidian-deep border border-slate-800">
                <div className="text-white font-bold">Fajar Ramadhan</div>
                <div className="text-slate-400 mt-0.5">Lead Fact-Checker & Digital Receipts Analyst</div>
              </div>
              <div className="p-3 rounded-xl bg-obsidian-deep border border-slate-800">
                <div className="text-white font-bold">Tiara Nurulita</div>
                <div className="text-slate-400 mt-0.5">Social Listening & Netizen Sentiment Analyst</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-xs font-mono text-slate-400 leading-relaxed">
          * Seluruh wartawan dan kontributor NgeGhibah.com dibekali tanda pengenal resmi serta surat tugas yang sah.
          Wartawan dilarang menerima amplop, imbalan, atau fasilitas dalam bentuk apa pun yang dapat memengaruhi
          independensi pemberitaan.
        </div>
      </div>
    </div>
  );
}
