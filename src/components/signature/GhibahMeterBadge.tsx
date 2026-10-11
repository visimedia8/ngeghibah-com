import React from 'react';
import { ShieldCheck, Database, Eye, Clock } from 'lucide-react';
import { GhibahMeterStatus } from '@/types';

interface GhibahMeterBadgeProps {
  status: GhibahMeterStatus;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export const GhibahMeterBadge: React.FC<GhibahMeterBadgeProps> = ({
  status,
  size = 'md',
  showIcon = true,
}) => {
  const getBadgeConfig = () => {
    switch (status) {
      case 'TERKONFIRMASI':
        return {
          label: 'TERKONFIRMASI RESMI',
          icon: ShieldCheck,
          className:
            'bg-emerald-950/70 text-emerald-400 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.25)]',
          dotColor: 'bg-emerald-400',
        };
      case 'FAKTA_DIGITAL':
        return {
          label: 'FAKTA JEJAK DIGITAL',
          icon: Database,
          className:
            'bg-cyan-950/70 text-cyan-400 border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.25)]',
          dotColor: 'bg-cyan-400',
        };
      case 'RUMOR_NETIZEN':
        return {
          label: 'RUMOR / SENTIMEN NETIZEN',
          icon: Eye,
          className:
            'bg-amber-950/70 text-amber-400 border-amber-500/40 shadow-[0_0_12px_rgba(255,184,0,0.25)]',
          dotColor: 'bg-amber-400',
        };
      case 'MENUNGGU_TANGGAPAN':
      default:
        return {
          label: 'MENUNGGU KLARIFIKASI',
          icon: Clock,
          className:
            'bg-slate-900/80 text-orange-300 border-orange-500/40 shadow-[0_0_12px_rgba(249,115,22,0.2)]',
          dotColor: 'bg-orange-400',
        };
    }
  };

  const config = getBadgeConfig();
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-semibold',
  }[size];

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4',
  }[size];

  return (
    <span
      className={`inline-flex items-center font-mono uppercase tracking-wider rounded-md border font-semibold ${config.className} ${sizeClasses}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} animate-pulse`} />
      {showIcon && <Icon className={iconSizes} />}
      <span>{config.label}</span>
    </span>
  );
};
