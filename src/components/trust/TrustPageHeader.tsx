import React from 'react';
import Link from 'next/link';
import { ChevronRight, ShieldCheck } from 'lucide-react';

interface TrustPageHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  effectiveDate?: string;
}

export const TrustPageHeader: React.FC<TrustPageHeaderProps> = ({
  badge = 'DOKUMEN RESMI REDAKSI',
  title,
  subtitle,
  effectiveDate = 'Berlaku Efektif: Oktober 2026',
}) => {
  return (
    <div className="border-b border-slate-800 pb-8 mb-8 space-y-4">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-xs font-mono text-slate-400"
      >
        <Link href="/" className="hover:text-neon-cyan transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-300 font-semibold">{title}</span>
      </nav>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          {badge}
        </span>
        <span className="text-xs font-mono text-slate-400">{effectiveDate}</span>
      </div>

      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
