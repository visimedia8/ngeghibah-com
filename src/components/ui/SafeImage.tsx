'use client';

import React, { useState } from 'react';
import { getOptimizedImageUrl, getFallbackImageUrl } from '@/lib/imageUtils';
import { Sparkles, User, Image as ImageIcon } from 'lucide-react';

export interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  type?: 'article' | 'avatar' | 'banner';
  category?: string;
  optimizedWidth?: number;
  optimizedQuality?: number;
  fill?: boolean;
  priority?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc,
  type = 'article',
  category,
  optimizedWidth,
  optimizedQuality = 75,
  fill = false,
  priority = false,
  fetchPriority,
  className = '',
  loading,
  ...rest
}) => {
  const [errorStage, setErrorStage] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const finalLoading = loading || (priority ? 'eager' : 'lazy');
  const finalFetchPriority = fetchPriority || (priority ? 'high' : 'low');
  const finalDecoding = priority ? 'sync' : 'async';

  // Compute active source URL
  const initialOptimized = optimizedWidth
    ? getOptimizedImageUrl(src, optimizedWidth, optimizedQuality)
    : src;

  const fallbackUrl =
    fallbackSrc || getFallbackImageUrl(category, type);

  const currentSrc =
    errorStage === 0
      ? initialOptimized
      : errorStage === 1
      ? fallbackUrl
      : '';

  const handleError = () => {
    if (errorStage === 0) {
      // First error: switch to robust category fallback URL
      setErrorStage(1);
    } else {
      // Fallback also failed or offline: render graceful branded placeholder
      setErrorStage(2);
    }
  };

  // If both original and fallback image URLs fail, render branded fallback UI
  if (errorStage >= 2 || !src) {
    if (type === 'avatar') {
      return (
        <div
          role="img"
          aria-label={alt}
          className={`flex items-center justify-center bg-gradient-to-br from-velvet to-obsidian-deep border border-slate-700/80 text-slate-400 select-none ${
            fill ? 'absolute inset-0 w-full h-full' : ''
          } ${className}`}
        >
          <User className="w-1/2 h-1/2 text-slate-400/80" />
        </div>
      );
    }

    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-velvet via-obsidian-deep to-velvet border border-slate-800 text-slate-400 select-none overflow-hidden ${
          fill ? 'absolute inset-0 w-full h-full' : 'w-full h-full min-h-[160px]'
        } ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center gap-1.5 p-4 text-center">
          <div className="w-8 h-8 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center text-neon-pink">
            <ImageIcon className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Arsip Visual NgeGhibah
          </span>
          <span className="text-[10px] font-mono text-neon-cyan flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" /> Terverifikasi Redaksi
          </span>
        </div>
      </div>
    );
  }

  const fillClasses = fill ? 'absolute inset-0 w-full h-full object-cover' : '';

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={finalLoading}
      fetchPriority={finalFetchPriority}
      decoding={finalDecoding}
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
      className={`${fillClasses} ${className} ${
        priority ? 'opacity-100' : `${isLoaded ? 'opacity-100' : 'opacity-90'} transition-opacity duration-300`
      }`}
      {...rest}
    />
  );
};
