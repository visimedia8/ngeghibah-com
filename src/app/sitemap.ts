import { MetadataRoute } from 'next';
import { MOCK_ARTICLES, MOCK_CELEBRITIES } from '@/data/mockData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ngeghibah.com';

  const staticRoutes = [
    '',
    '/seleb',
    '/tentang-kami',
    '/redaksi',
    '/pedoman-media-siber',
    '/kode-etik',
    '/hak-jawab',
    '/kebijakan-privasi',
    '/syarat-dan-ketentuan',
    '/pedoman-pemeriksaan-fakta',
    '/pedoman-hak-cipta',
    '/disclaimer',
    '/kontak-kami',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.7,
  }));

  const categoryRoutes = [
    'seleb-lokal',
    'hollywood-barat',
    'kpop-asia',
    'creator-tiktok',
  ].map((cat) => ({
    url: `${baseUrl}/kategori/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  const articleRoutes = MOCK_ARTICLES.map((article) => ({
    url: `${baseUrl}/artikel/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const celebRoutes = MOCK_CELEBRITIES.map((celeb) => ({
    url: `${baseUrl}/seleb/${celeb.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes, ...celebRoutes];
}
