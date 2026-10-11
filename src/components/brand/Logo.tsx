import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'full' | 'icon' | 'compact';
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  showTagline = true,
  className = '',
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7 rounded-lg',
    md: 'w-8 h-8 sm:w-9 sm:h-9 rounded-xl',
    lg: 'w-10 h-10 sm:w-12 sm:h-12 rounded-2xl',
  }[size];

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  const domainSizes = {
    sm: 'text-[11px] sm:text-xs',
    md: 'text-xs sm:text-base',
    lg: 'text-base sm:text-lg',
  }[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-2 sm:gap-2.5 group select-none shrink-0 ${className}`}>
      {/* Monogram Icon Mark */}
      <div
        className={`${iconSizes} relative shrink-0 overflow-hidden bg-gradient-to-tr from-velvet to-obsidian border border-slate-700/80 group-hover:border-neon-pink/70 transition-all duration-300 shadow-neon-pink flex items-center justify-center p-1 sm:p-1.5`}
      >
        <svg
          viewBox="0 0 512 512"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FF2E93" />
              <stop offset="100%" stop-color="#00F0FF" />
            </linearGradient>
          </defs>
          <path
            d="M365 185
               C335 125 260 115 195 140
               C125 170 95 245 110 320
               C125 395 195 440 275 430
               C345 420 395 375 405 305
               L265 305
               C252 305 245 295 245 282
               L245 258
               C245 245 252 238 265 238
               L435 238
               C448 238 458 248 458 262
               C458 355 385 465 260 465
               C145 465 55 385 45 265
               C35 145 135 50 255 50
               C325 50 390 85 425 140
               C432 152 428 168 415 175
               L382 192
               C374 196 368 192 365 185 Z"
            fill="url(#logoInnerGrad)"
          />
          <circle cx="410" cy="115" r="24" fill="#00F0FF" />
          <circle cx="256" cy="256" r="20" fill="#00F0FF" />
        </svg>
      </div>

      {/* Typography Part */}
      {variant !== 'icon' && (
        <div className="flex flex-col shrink-0">
          <div
            className={`font-display font-black tracking-tight leading-none whitespace-nowrap ${textSizes}`}
          >
            <span className="text-white">Nge</span>
            <span className="text-neon-pink group-hover:text-[#ff4fa5] transition-colors">
              Ghibah
            </span>
            <span className={`text-neon-cyan font-bold ${domainSizes}`}>.com</span>
          </div>

          {showTagline && variant === 'full' && (
            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase hidden sm:block mt-0.5 whitespace-nowrap">
              KRONOLOGI &amp; VERIFIKASI
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
