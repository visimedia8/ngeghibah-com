'use client';

import { useEffect } from 'react';

export const AdSenseLoader: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let loaded = false;
    const loadAdSense = () => {
      if (loaded || (window as any).__adsenseLoaded) return;
      loaded = true;
      (window as any).__adsenseLoaded = true;

      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4090835276472949';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);

      window.removeEventListener('scroll', loadAdSense);
      window.removeEventListener('click', loadAdSense);
      window.removeEventListener('touchstart', loadAdSense);
      window.removeEventListener('mousemove', loadAdSense);
    };

    // Load on first interaction or requestIdleCallback after initial paint
    const timer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(loadAdSense);
      } else {
        loadAdSense();
      }
    }, 4000);

    window.addEventListener('scroll', loadAdSense, { passive: true, once: true });
    window.addEventListener('click', loadAdSense, { passive: true, once: true });
    window.addEventListener('touchstart', loadAdSense, { passive: true, once: true });
    window.addEventListener('mousemove', loadAdSense, { passive: true, once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', loadAdSense);
      window.removeEventListener('click', loadAdSense);
      window.removeEventListener('touchstart', loadAdSense);
      window.removeEventListener('mousemove', loadAdSense);
    };
  }, []);

  return null;
};
