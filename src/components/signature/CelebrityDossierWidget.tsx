import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Celebrity } from '@/types';
import { ExternalLink, UserCheck, HeartHandshake, Briefcase, ChevronRight } from 'lucide-react';
import { getOptimizedImageUrl } from '@/lib/imageUtils';

interface CelebrityDossierWidgetProps {
  celebrity: Celebrity;
  className?: string;
}

export const CelebrityDossierWidget: React.FC<CelebrityDossierWidgetProps> = ({
  celebrity,
  className = '',
}) => {
  return (
    <div
      className={`rounded-2xl border border-velvet-border bg-gradient-to-br from-velvet-card via-velvet to-obsidian p-5 shadow-card-glow ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-mono uppercase tracking-wider text-neon-cyan font-bold flex items-center gap-1.5">
          <UserCheck className="w-3.5 h-3.5 text-neon-cyan" />
          ENTITAS TERKAIT
        </span>
        <span className="text-[10px] font-mono text-neon-pink bg-neon-pink/10 px-2 py-0.5 rounded border border-neon-pink/20">
          PROFIL TERVERIFIKASI
        </span>
      </div>

      <div className="flex items-center gap-3.5 mb-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-neon-cyan shadow-neon-cyan">
          <Image
            src={getOptimizedImageUrl(celebrity.avatar, 128, 75)}
            alt={celebrity.stageName}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <h4 className="text-base font-bold text-white truncate font-display">
            {celebrity.stageName}
          </h4>
          <p className="text-xs text-slate-400 truncate">{celebrity.profession}</p>
          <p className="text-[11px] text-neon-cyan/90 font-mono mt-0.5 truncate">
            {celebrity.agency}
          </p>
        </div>
      </div>

      <div className="space-y-2 text-xs border-y border-slate-800/80 py-3 mb-4">
        <div className="flex items-center justify-between text-slate-400">
          <span className="flex items-center gap-1">
            <HeartHandshake className="w-3.5 h-3.5 text-neon-pink" />
            Hubungan:
          </span>
          <span className="text-slate-200 font-medium">
            {celebrity.relationshipStatus}
          </span>
        </div>
        <div className="flex items-center justify-between text-slate-400">
          <span className="flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5 text-neon-cyan" />
            Circle:
          </span>
          <span className="text-slate-200 font-medium truncate max-w-[160px]">
            {celebrity.circle.slice(0, 2).join(', ')}
          </span>
        </div>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed mb-4">
        {celebrity.bio.slice(0, 110)}...
      </p>

      <Link
        href={`/seleb/${celebrity.slug}`}
        className="group inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-obsidian bg-neon-pink hover:bg-neon-pink/90 transition-all shadow-neon-pink"
      >
        <span>Lihat Semua Riwayat & Dossier</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
};
