'use client';

import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Check, MessageCircle } from 'lucide-react';

interface QuickShareBarProps {
  title: string;
  url?: string;
  className?: string;
  variant?: 'inline' | 'floating';
}

export const QuickShareBar: React.FC<QuickShareBarProps> = ({
  title,
  url,
  className = '',
  variant = 'inline',
}) => {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window !== 'undefined') {
      return url || window.location.href;
    }
    return url || 'https://ngeghibah.com';
  };

  const handleShareWhatsApp = () => {
    const shareUrl = getShareUrl();
    const text = encodeURIComponent(
      `🔥 *NgeGhibah.com* — ${title}\nBukan sekadar heboh, ini duduk perkara dan kronologinya:\n${shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleShareX = () => {
    const shareUrl = getShareUrl();
    const text = encodeURIComponent(
      `${title} — Baca kronologi lengkap & jejak digitalnya di @NgeGhibah:\n`
    );
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(
        shareUrl
      )}`,
      '_blank'
    );
  };

  const handleCopy = async () => {
    try {
      const shareUrl = getShareUrl();
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {copied && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4" />
          <span>Tautan artikel berhasil tersalin ke clipboard!</span>
        </div>
      )}

      {variant === 'floating' ? (
        /* Floating Sticky Share Bar on Mobile ONLY (Strictly sm:hidden) */
        <div
          className={`fixed bottom-0 left-0 right-0 z-40 bg-obsidian-deep/95 border-t border-slate-800/90 px-4 py-2.5 backdrop-blur-xl sm:hidden ${className}`}
        >
          <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
            <button
              onClick={handleShareWhatsApp}
              aria-label="Bagikan ke WhatsApp"
              className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-3 py-2 rounded-xl text-xs font-semibold active:scale-95 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={handleShareX}
              aria-label="Bagikan ke X"
              className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-1.5 bg-black hover:bg-slate-900 text-white border border-slate-700 px-3 py-2 rounded-xl text-xs font-semibold active:scale-95"
            >
              <span className="font-bold text-sm">𝕏</span>
              <span>Bagikan</span>
            </button>
            <button
              onClick={handleCopy}
              aria-label="Salin tautan"
              className={`min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-3 py-2 rounded-xl text-xs font-semibold border active:scale-95 ${
                copied
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500'
                  : 'bg-velvet hover:bg-slate-800 text-slate-200 border-slate-700'
              }`}
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <LinkIcon className="w-4 h-4 text-neon-cyan" />
              )}
            </button>
          </div>
        </div>
      ) : (
        /* Inline Share Bar (Desktop Header, Dedicated Bottom Box) */
        <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
          {/* 1-Tap Share Label */}
          <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold pr-2 border-r border-slate-800 shrink-0">
            <Share2 className="w-4 h-4 text-neon-pink" />
            <span>1-TAP SHARE:</span>
          </div>

          {/* WhatsApp Share Button */}
          <button
            onClick={handleShareWhatsApp}
            aria-label="Bagikan ke WhatsApp"
            className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 shadow-sm active:scale-95 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>

          {/* X / Twitter Share Button */}
          <button
            onClick={handleShareX}
            aria-label="Bagikan ke X"
            className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-black hover:bg-slate-900 text-white border border-slate-700/80 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 active:scale-95 cursor-pointer shrink-0"
          >
            <span className="font-bold text-sm">𝕏</span>
            <span>Bagikan</span>
          </button>

          {/* Copy Link Button */}
          <button
            onClick={handleCopy}
            aria-label="Salin tautan"
            className={`min-h-[44px] min-w-[44px] inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 active:scale-95 cursor-pointer shrink-0 ${
              copied
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500'
                : 'bg-velvet hover:bg-velvet-card text-slate-200 border-slate-700'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Tersalin</span>
              </>
            ) : (
              <>
                <LinkIcon className="w-4 h-4 text-neon-cyan" />
                <span>Salin Link</span>
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
};
