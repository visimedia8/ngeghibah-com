'use client';

import React, { useEffect } from 'react';

interface GoogleAnalyticsProps {
  gaId?: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({
  gaId = process.env.NEXT_PUBLIC_GA_ID,
}) => {
  useEffect(() => {
    // Only load if valid ID is provided
    const targetId = gaId || process.env.NEXT_PUBLIC_GA_ID;
    if (!targetId || typeof window === 'undefined') return;

    let loaded = false;
    const loadGA = () => {
      if (loaded || (window as any).__gaLoaded) return;
      loaded = true;
      (window as any).__gaLoaded = true;

      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${targetId}`;
      script.async = true;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', targetId, {
        page_path: window.location.pathname,
        send_page_view: true,
      });

      // Cleanup event listeners
      window.removeEventListener('scroll', loadGA);
      window.removeEventListener('click', loadGA);
      window.removeEventListener('touchstart', loadGA);
      window.removeEventListener('mousemove', loadGA);
    };

    // Load strictly on user interaction so zero TBT penalty on initial load
    window.addEventListener('scroll', loadGA, { passive: true, once: true });
    window.addEventListener('click', loadGA, { passive: true, once: true });
    window.addEventListener('touchstart', loadGA, { passive: true, once: true });
    window.addEventListener('mousemove', loadGA, { passive: true, once: true });

    return () => {
      window.removeEventListener('scroll', loadGA);
      window.removeEventListener('click', loadGA);
      window.removeEventListener('touchstart', loadGA);
      window.removeEventListener('mousemove', loadGA);
    };
  }, [gaId]);

  return null;
};
