import { Metadata } from 'next';
import { HomeClient } from '@/components/home/HomeClient';
import { MOCK_ARTICLES, MOCK_CELEBRITIES } from '@/data/mockData';
import { getOptimizedImageUrl } from '@/lib/imageUtils';

export const metadata: Metadata = {
  title: 'NgeGhibah.com — Radar Pop-Kultur: Data, Kronologi & Verifikasi Fakta',
  description:
    'Portal kurasi dan jurnalisme investigasi pop-kultur independen. Temukan alur kronologis duduk perkaranya, rekam jejak digital, dan status verifikasi Ghibah Meter.',
  alternates: {
    canonical: 'https://ngeghibah.com',
  },
};

export default function HomePage() {
  const heroArticle = MOCK_ARTICLES.find((a) => a.isHero) || MOCK_ARTICLES[0];
  const optimizedHeroImage = getOptimizedImageUrl(heroArticle.heroImage, 640, 75);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: 'NgeGhibah.com',
    url: 'https://ngeghibah.com',
    logo: 'https://ngeghibah.com/logo.png',
    publishingPrinciples: 'https://ngeghibah.com/pedoman-media-siber',
    ethicsPolicy: 'https://ngeghibah.com/kode-etik',
    correctionsPolicy: 'https://ngeghibah.com/hak-jawab',
    sameAs: [
      'https://twitter.com/NgeGhibah',
      'https://instagram.com/NgeGhibah',
      'https://tiktok.com/@NgeGhibah',
    ],
  };

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={optimizedHeroImage}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient
        initialArticles={MOCK_ARTICLES}
        celebrities={MOCK_CELEBRITIES}
      />
    </>
  );
}
