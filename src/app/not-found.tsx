import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, Flame } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 rounded-3xl border border-velvet-border bg-velvet p-8 shadow-card-glow">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/15 text-neon-pink border border-neon-pink/30 text-xs font-mono font-bold">
          <Flame className="w-3.5 h-3.5" />
          <span>404 NOT FOUND</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white font-display">
          Gosip Ini Belum Ada Buktinya
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Halaman atau artikel yang kamu cari mungkin sudah diralat, dipindahkan, atau memang belum pernah terverifikasi di radar kami.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neon-pink hover:bg-neon-pink/90 text-white font-bold text-xs sm:text-sm transition-all shadow-neon-pink"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda Radar</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
