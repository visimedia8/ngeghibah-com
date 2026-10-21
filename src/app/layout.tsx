import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { AdSenseLoader } from '@/components/ads/AdSenseLoader';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0B0F17',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ngeghibah.com'),
  title: {
    default: 'NgeGhibah.com — Bukan Sekadar Gosip, Ini Kronologi & Verifikasi',
    template: '%s | NgeGhibah.com',
  },
  description:
    'Portal kurasi dan jurnalisme investigasi pop-kultur independen. Kupas tuntas drama selebritas lokal dan global melalui kronologi terverifikasi, fakta jejak digital, dan analisis sentimen tanpa fitnah.',
  keywords: [
    'NgeGhibah',
    'berita selebriti',
    'kronologi gosip',
    'jejak digital artis',
    'verifikasi fakta hiburan',
    'k-pop drama',
    'hollywood news',
    'tiktok creators',
  ],
  authors: [{ name: 'Tim Redaksi NgeGhibah.com' }],
  creator: 'NgeGhibah Media',
  publisher: 'PT Media Siber Ghibah Nusantara',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://ngeghibah.com',
    siteName: 'NgeGhibah.com',
    title: 'NgeGhibah.com — Bukan Sekadar Gosip, Ini Kronologi & Verifikasi',
    description:
      'Portal kurasi jurnalisme pop-kultur terpercaya: data, kronologi, dan verifikasi jejak digital bebas clickbait murahan.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&h=628&q=80',
        width: 1200,
        height: 628,
        alt: 'NgeGhibah.com Pop Culture & Celebrity Journalism',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NgeGhibah.com — Kronologi & Verifikasi Pop-Kultur',
    description: 'Bukan sekadar heboh, ini duduk perkaranya.',
    creator: '@NgeGhibah',
    images: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&h=628&q=80',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
  other: {
    'google-adsense-account': 'ca-pub-4090835276472949',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`dark ${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-4090835276472949" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://thumb.wikimedia.org" crossOrigin="" />
        <link rel="dns-prefetch" href="https://thumb.wikimedia.org" />
        <link rel="preconnect" href="https://asset.kompas.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://asset.kompas.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-screen bg-obsidian text-slate-100 flex flex-col font-sans selection:bg-neon-pink selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics />
        <AdSenseLoader />
      </body>
    </html>
  );
}
