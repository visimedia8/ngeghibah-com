import React from 'react';

interface GoogleAnalyticsProps {
  gaId?: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({
  gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-PWGDWHCCZE',
}) => {
  if (!gaId) return null;

  return (
    <>
      {/* Google tag (gtag.js) */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
};
