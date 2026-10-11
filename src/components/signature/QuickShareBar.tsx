'use client';

import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Check, MessageCircle } from 'lucide-react';

interface QuickShareBarProps {
  title: string;
  url?: string;
  className?: string;
}

export const QuickShareBar: React.FC<QuickShareBarProps> = ({
  title,
  url,
  className = '',
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

      {/* Floating Sticky Share Bar on Mobile & Bottom bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-obsidian-deep/95 border-t border-velvet-border/80 px-4 py-2.5 backdrop-blur-lg sm:static sm:bg-transparent sm:border-0 sm:p-0 ${className}`}
      >
        <div className="max-w-xl mx-auto flex items-center justify-between sm:justify-start gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold pr-2 border-r border-slate-800">
            <Share2 className="w-4 h-4 text-neon-pink" />
            <span>1-TAP SHARE:</span>
          </div>

          {/* WhatsApp Share Button */}
          <button
            onClick={handleShareWhatsApp}
            aria-label="Bagikan ke WhatsApp"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 shadow-sm active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>

          {/* X / Twitter Share Button */}
          <button
            onClick={handleShareX}
            aria-label="Bagikan ke X"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-black hover:bg-slate-900 text-white border border-slate-700/80 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 active:scale-95"
          >
            <span className="font-bold text-sm">𝕏</span>
            <span>Bagikan</span>
          </button>

          {/* Copy Link Button */}
          <button
            onClick={handleCopy}
            aria-label="Salin tautan"
            className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 active:scale-95 ${
              copied
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500'
                : 'bg-velvet hover:bg-velvet-card text-slate-200 border-slate-700'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">Tersalin</span>
              </>
            ) : (
              <>
                <LinkIcon className="w-4 h-4 text-neon-cyan" />
                <span className="hidden sm:inline">Salin Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};
