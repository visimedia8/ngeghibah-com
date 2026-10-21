import { Metadata } from 'next';
import { HomeClient } from '@/components/home/HomeClient';
import { MOCK_ARTICLES, MOCK_CELEBRITIES } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'NgeGhibah.com — Radar Pop-Kultur: Data, Kronologi & Verifikasi Fakta',
  description:
    'Portal kurasi dan jurnalisme investigasi pop-kultur independen. Temukan alur kronologis duduk perkaranya, rekam jejak digital, dan status verifikasi Ghibah Meter.',
  alternates: {
    canonical: 'https://ngeghibah.com',
  },
};

export default function HomePage() {
  // Strip unused heavy fields (contentHtml, timeline) to reduce initial HTML size by >60% and speed up hydration
  const homeArticles = MOCK_ARTICLES.map(({ contentHtml, timeline, ...rest }) => ({
    ...rest,
    contentHtml: '',
  })) as typeof MOCK_ARTICLES;

  const homeCelebrities = MOCK_CELEBRITIES.slice(0, 6).map(
    ({ controversies, businessVentures, awards, faq, dossierDetail, ...rest }) => rest
  ) as typeof MOCK_CELEBRITIES;

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient
        initialArticles={homeArticles}
        celebrities={homeCelebrities}
      />
    </>
  );
}
