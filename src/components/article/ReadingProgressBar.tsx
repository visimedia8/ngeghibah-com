'use client';

import React, { useState, useEffect } from 'react';

export const ReadingProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent pointer-events-none"
    >
      <div
        style={{ width: `${scrollProgress}%` }}
        className="h-full bg-gradient-to-r from-neon-pink via-[#d91678] to-neon-cyan shadow-[0_0_10px_rgba(255,46,147,0.7)] transition-all duration-150 ease-out"
      />
    </div>
  );
};
