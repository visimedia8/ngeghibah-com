import React from 'react';

interface AdSlotProps {
  slotId: string;
  format?: 'banner' | 'in-feed' | 'rectangle' | 'horizontal';
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  format = 'banner',
  className = '',
}) => {
  return (
    <div
      className={`my-6 rounded-xl border border-dashed border-slate-700/60 bg-velvet/40 p-3 sm:p-4 text-center transition-all ${className}`}
    >
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2 px-1">
        <span>SPONSORED / PARIWARA</span>
        <span>AdSense Placement #{slotId}</span>
      </div>

      {/* Ad Area Container */}
      <div className="min-h-[100px] sm:min-h-[120px] flex flex-col items-center justify-center rounded-lg bg-obsidian-deep/50 border border-slate-800/80 p-4">
        <span className="text-xs font-mono text-slate-400">
          Ruang Iklan Responsif Ramah Pembaca (Non-Intrusif & Bebas Pop-Up)
        </span>
        <span className="text-[10px] text-slate-400 mt-1">
          Memenuhi Kebijakan Google AdSense & Better Ads Standards
        </span>
      </div>
    </div>
  );
};
