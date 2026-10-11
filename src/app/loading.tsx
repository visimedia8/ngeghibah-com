import React from 'react';
import { Flame, Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen py-8 space-y-10 animate-fadeIn">
      {/* Top Radar Pulse Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 px-4 rounded-2xl bg-velvet/60 border border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-pink"></span>
            </span>
            <span className="text-xs font-mono font-bold text-white tracking-wider uppercase">
              RADAR LIVE AKTIF
            </span>
            <span className="text-xs font-mono text-neon-cyan">
              • Menghimpun Jejak Digital &amp; Verifikasi Fakta...
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-neon-pink animate-spin" />
            <span>Memuat data terkini</span>
          </div>
        </div>
      </div>

      {/* Bento Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Hero Card Skeleton */}
          <div className="lg:col-span-8 rounded-3xl bg-velvet/50 border border-slate-800 p-6 space-y-4 animate-shimmer">
            <div className="aspect-[16/9] w-full rounded-2xl bg-slate-800/60" />
            <div className="space-y-3 pt-2">
              <div className="h-4 w-32 rounded bg-slate-800" />
              <div className="h-8 w-4/5 rounded bg-slate-800" />
              <div className="h-4 w-full rounded bg-slate-800/60" />
              <div className="h-4 w-2/3 rounded bg-slate-800/60" />
            </div>
            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-slate-800" />
                <div className="h-4 w-24 rounded bg-slate-800" />
              </div>
              <div className="h-4 w-20 rounded bg-slate-800" />
            </div>
          </div>

          {/* Split Side Cards Skeleton */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex-1 rounded-3xl bg-velvet/50 border border-slate-800 p-6 space-y-4 animate-shimmer">
              <div className="h-4 w-24 rounded bg-slate-800" />
              <div className="h-6 w-5/6 rounded bg-slate-800" />
              <div className="h-4 w-full rounded bg-slate-800/60" />
              <div className="h-4 w-1/2 rounded bg-slate-800/60" />
              <div className="h-4 w-16 rounded bg-slate-800 mt-6" />
            </div>
            <div className="flex-1 rounded-3xl bg-velvet/50 border border-slate-800 p-6 space-y-4 animate-shimmer">
              <div className="h-4 w-24 rounded bg-slate-800" />
              <div className="h-6 w-5/6 rounded bg-slate-800" />
              <div className="h-4 w-full rounded bg-slate-800/60" />
              <div className="h-4 w-1/2 rounded bg-slate-800/60" />
              <div className="h-4 w-16 rounded bg-slate-800 mt-6" />
            </div>
          </div>
        </div>

        {/* 3 Secondary Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl bg-velvet/40 border border-slate-800 p-5 space-y-3 animate-shimmer"
            >
              <div className="aspect-[16/9] w-full rounded-xl bg-slate-800/60" />
              <div className="h-5 w-4/5 rounded bg-slate-800" />
              <div className="h-3 w-full rounded bg-slate-800/60" />
              <div className="h-3 w-2/3 rounded bg-slate-800/60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
