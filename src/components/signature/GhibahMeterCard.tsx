'use client';

import React, { useState } from 'react';
import { GhibahMeterData } from '@/types';
import { GhibahMeterBadge } from './GhibahMeterBadge';
import { Info, CheckCircle2, AlertTriangle, FileText, ChevronDown, ChevronUp } from 'lucide-react';

interface GhibahMeterCardProps {
  data: GhibahMeterData;
  digitalReceiptsCount?: number;
  className?: string;
}

export const GhibahMeterCard: React.FC<GhibahMeterCardProps> = ({
  data,
  digitalReceiptsCount = 0,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`rounded-xl border border-velvet-border bg-gradient-to-r from-velvet/90 via-velvet-card/80 to-velvet/90 p-4 sm:p-5 shadow-card-glow backdrop-blur-md ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
            <span className="text-neon-pink">●</span> GHIBAH METER™ VERIFIKASI
          </span>
          <GhibahMeterBadge status={data.status} size="sm" />
        </div>

        {digitalReceiptsCount > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-neon-cyan font-mono bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-1 rounded-md self-start sm:self-auto">
            <FileText className="w-3.5 h-3.5 text-neon-cyan" />
            <span>{digitalReceiptsCount} Bukti Jejak Digital</span>
          </div>
        )}
      </div>

      {/* Interactive Fact vs Rumor Visual Gauge Bar */}
      <div className="my-3 space-y-1.5">
        <div className="flex justify-between items-center text-xs font-mono">
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Fakta & Dokumen: {data.percentageFact}%
          </span>
          <span className="text-amber-400 font-semibold flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            Spekulasi / Rumor: {data.percentageRumor}%
          </span>
        </div>

        {/* Dual Bar Gauge */}
        <div className="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden flex p-0.5 border border-slate-700/60 shadow-inner">
          <div
            style={{ width: `${data.percentageFact}%` }}
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-l-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          />
          <div
            style={{ width: `${data.percentageRumor}%` }}
            className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-r-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(255,184,0,0.5)]"
          />
        </div>
      </div>

      {/* Description Context */}
      <div className="mt-2 text-xs text-slate-300 leading-relaxed flex items-start gap-2">
        <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <p className="flex-1">
          <strong className="text-white font-medium">Metodologi Kurasi: </strong>
          {data.description}
        </p>
      </div>

      {/* Collapsible Explainer on Standards */}
      <div className="mt-3 pt-2.5 border-t border-slate-800/80">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-[11px] font-mono text-slate-400 hover:text-neon-cyan transition-colors"
        >
          <span>Standar Transparansi & Bebas Clickbait NgeGhibah</span>
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>

        {isExpanded && (
          <div className="mt-2 text-[11px] text-slate-400 bg-obsidian-deep/80 p-3 rounded-lg border border-slate-800 space-y-1.5 animate-fadeIn">
            <p>
              • Seluruh persentase dihitung berdasarkan validasi primer: dokumen hukum, rilis pers terverifikasi, log server, dan konfirmasi langsung para pihak.
            </p>
            <p>
              • Kami menolak penggunaan rumor liar tanpa atribusi sumber publik yang dapat dipertanggungjawabkan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
