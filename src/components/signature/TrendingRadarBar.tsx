'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, TrendingUp, Sparkles, ChevronRight } from 'lucide-react';
import { TRENDING_TAGS } from '@/data/mockData';

interface TrendingRadarBarProps {
  onTagClick?: (tag: string) => void;
  activeTag?: string | null;
}

export const TrendingRadarBar: React.FC<TrendingRadarBarProps> = ({
  onTagClick,
  activeTag,
}) => {
  return (
    <div className="w-full bg-[#0E1524] border-b border-velvet-border/80 sticky top-16 z-30 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-3">
        {/* Radar Label Badge */}
        <div className="flex items-center gap-1.5 shrink-0 bg-neon-pink/15 text-neon-pink border border-neon-pink/30 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-pink opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-pink"></span>
          </span>
          <Flame className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">RADAR TREN</span>
          <span className="sm:hidden">TREN</span>
        </div>

        {/* Scrollable Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-0.5 w-full">
          {TRENDING_TAGS.map((item) => {
            const isActive = activeTag === item.tag;
            return (
              <button
                key={item.id}
                onClick={() => onTagClick && onTagClick(item.tag)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-neon-pink text-white border-neon-pink shadow-neon-pink'
                    : 'bg-velvet/90 text-slate-300 hover:text-white border-slate-700/60 hover:border-neon-cyan/50 hover:bg-velvet-card'
                }`}
              >
                {item.isHot && (
                  <span className="text-neon-pink text-[10px]">🔥</span>
                )}
                <span>{item.tag}</span>
                <span className="text-[10px] text-slate-400 font-normal pl-1 border-l border-slate-700/70">
                  {item.talkCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Netizen Indicator */}
        <div className="hidden lg:flex items-center gap-1 text-[11px] text-neon-cyan font-mono shrink-0 pl-2 border-l border-slate-800">
          <TrendingUp className="w-3.5 h-3.5 text-neon-cyan" />
          <span>+142k Netizen Aktif</span>
        </div>
      </div>
    </div>
  );
};
