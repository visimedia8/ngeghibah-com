'use client';

import React, { useEffect, useRef } from 'react';

interface AdSlotProps {
  slotId: string;
  format?: 'banner' | 'in-feed' | 'rectangle' | 'horizontal';
  className?: string;
  adClient?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  format = 'banner',
  className = '',
  adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-4090835276472949',
}) => {
  const adRef = useRef<HTMLDivElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    // Safely initialize AdSense if script is present on window
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle && !pushedRef.current) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        pushedRef.current = true;
      }
    } catch {
      // Ignore adsbygoogle errors
    }
  }, []);

  // Format height mappings to guarantee 0 CLS
  const heightClasses = {
    banner: 'min-h-[100px] sm:min-h-[120px]',
    'in-feed': 'min-h-[220px] sm:min-h-[260px]',
    rectangle: 'min-h-[280px]',
    horizontal: 'min-h-[100px]',
  }[format];

  return (
    <div
      ref={adRef}
      className={`my-6 rounded-2xl border border-dashed border-slate-700/60 bg-velvet/40 p-3 sm:p-4 text-center transition-all contain-layout ${className}`}
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: format === 'rectangle' ? '280px' : '120px',
      }}
    >
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2 px-1">
        <span>SPONSORED / PARIWARA</span>
        <span>AdSense #{slotId}</span>
      </div>

      {/* Reserved Ad Area Container (Strict Dimension Lock to prevent CLS) */}
      <div
        className={`${heightClasses} flex flex-col items-center justify-center rounded-xl bg-obsidian-deep/60 border border-slate-800/80 p-4 transition-colors`}
      >
        {/* Placeholder UI shown in development or while waiting for Google AdSense fill */}
        <div className="space-y-1">
          <span className="text-xs font-mono text-slate-300 font-medium block">
            Ruang Iklan Responsif Ramah Pembaca (Non-Intrusif & Bebas Pop-Up)
          </span>
          <span className="text-[10px] text-slate-400 block">
            Memenuhi Kebijakan Google AdSense & Better Ads Standards (CLS: 0.000)
          </span>
          <span className="text-[9px] font-mono text-slate-400 block pt-1">
            Slot: {slotId} • Format: {format}
          </span>
        </div>
      </div>
    </div>
  );
};
