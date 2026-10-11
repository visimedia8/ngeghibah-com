import React from 'react';
import Link from 'next/link';
import { Celebrity } from '@/types';
import { ExternalLink, Users, ShieldAlert, Award, Sparkles } from 'lucide-react';
import { SafeImage } from '@/components/ui/SafeImage';

interface CelebrityDossierCardProps {
  celebrity: Celebrity;
  className?: string;
}

export const CelebrityDossierCard: React.FC<CelebrityDossierCardProps> = ({
  celebrity,
  className = '',
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-velvet-border bg-gradient-to-b from-velvet/90 to-obsidian-deep p-5 shadow-card-glow transition-all duration-300 hover:border-neon-pink/60 hover:-translate-y-1 ${className}`}
    >
      {/* Top Tag & Drama Counter */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-neon-cyan bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
          <Sparkles className="w-3 h-3" />
          DOSSIER SELEB
        </span>
        <span className="text-[11px] font-mono text-neon-pink bg-neon-pink/10 border border-neon-pink/30 px-2 py-0.5 rounded-full font-semibold">
          {celebrity.dramaCount} Isu Terekam
        </span>
      </div>

      {/* Avatar & Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-neon-pink/80 shadow-neon-pink">
          <SafeImage
            src={celebrity.avatar}
            alt={celebrity.stageName}
            type="avatar"
            optimizedWidth={128}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-bold text-white font-display truncate group-hover:text-neon-pink transition-colors">
            {celebrity.stageName}
          </h3>
          <p className="text-xs text-slate-400 truncate">{celebrity.name}</p>
          <p className="text-xs text-neon-cyan font-mono mt-0.5 truncate">
            {celebrity.profession}
          </p>
        </div>
      </div>

      {/* Quick Details Grid */}
      <div className="space-y-2 text-xs border-y border-slate-800/80 py-3 mb-4">
        <div className="flex justify-between text-slate-400">
          <span>Usia:</span>
          <span className="text-slate-200 font-medium">{celebrity.age} Tahun</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>Agensi:</span>
          <span className="text-slate-200 font-medium truncate max-w-[170px]">
            {celebrity.agency}
          </span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>Circle:</span>
          <span className="text-slate-200 font-medium truncate max-w-[170px]">
            {celebrity.circle.slice(0, 2).join(', ')}
            {celebrity.circle.length > 2 ? '...' : ''}
          </span>
        </div>
      </div>

      {/* Sentiment Summary */}
      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mb-4">
        {celebrity.sentimentSummary}
      </p>

      {/* CTA to Dossier Page */}
      <Link
        href={`/seleb/${celebrity.slug}`}
        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-velvet hover:bg-neon-pink border border-slate-700 hover:border-neon-pink transition-all duration-200 shadow-sm"
      >
        <span>Buka Rekam Jejak & Profil</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
};
