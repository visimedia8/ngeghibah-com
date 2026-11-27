import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ngeghibah.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot-News',
        allow: ['/artikel/', '/kategori/'],
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Google-adstxt',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: [
          'Bytespider',
          'GPTBot',
          'OAI-SearchBot',
          'CCBot',
          'ClaudeBot',
          'anthropic-ai',
          'Amazonbot',
          'Amzn-SearchBot',
          'PetalBot',
          'SemrushBot',
          'AhrefsBot',
          'DotBot',
          'meta-webindexer',
          'Reflectionbot',
          'PerplexityBot',
          'Applebot-Extended',
          'YouBot',
        ],
        disallow: ['/'],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-news.xml`,
    ],
  };
}
