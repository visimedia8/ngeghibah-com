'use client';

import React, { useEffect } from 'react';

interface GoogleAnalyticsProps {
  gaId?: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({
  gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-NGEGHIBAH01',
}) => {
  useEffect(() => {
    if (!gaId || typeof window === 'undefined') return;

    let loaded = false;
    const loadGA = () => {
      if (loaded || (window as any).__gaLoaded) return;
      loaded = true;
      (window as any).__gaLoaded = true;

      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script.async = true;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', gaId, {
        page_path: window.location.pathname,
        send_page_view: true,
      });

      // Cleanup listeners
      window.removeEventListener('scroll', loadGA);
      window.removeEventListener('click', loadGA);
      window.removeEventListener('touchstart', loadGA);
    };

    // Listen for first interaction
    window.addEventListener('scroll', loadGA, { passive: true, once: true });
    window.addEventListener('click', loadGA, { passive: true, once: true });
    window.addEventListener('touchstart', loadGA, { passive: true, once: true });

    // Idle fallback: only load when browser is completely idle
    if ('requestIdleCallback' in window) {
      const idleId = (window as any).requestIdleCallback(loadGA, { timeout: 3500 });
      return () => {
        if ('cancelIdleCallback' in window) (window as any).cancelIdleCallback(idleId);
      };
    } else {
      const timer = setTimeout(loadGA, 3000);
      return () => clearTimeout(timer);
    }
  }, [gaId]);

  return null;
};
