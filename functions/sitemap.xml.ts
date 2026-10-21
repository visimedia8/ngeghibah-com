/// <reference types="@cloudflare/workers-types" />

interface Env {
  DB?: D1Database;
}

export const onRequestGet = async (context: { request: Request; env: Env }) => {
  const { env } = context;
  const baseUrl = 'https://ngeghibah.com';

  const staticUrls = [
    { loc: '', changefreq: 'daily', priority: '1.0' },
    { loc: '/seleb', changefreq: 'daily', priority: '0.8' },
    { loc: '/kamus', changefreq: 'weekly', priority: '0.8' },
    { loc: '/kategori/seleb-lokal', changefreq: 'daily', priority: '0.8' },
    { loc: '/kategori/hollywood-barat', changefreq: 'daily', priority: '0.8' },
    { loc: '/kategori/kpop-asia', changefreq: 'daily', priority: '0.8' },
    { loc: '/kategori/creator-tiktok', changefreq: 'daily', priority: '0.8' },
    { loc: '/seleb/rachel-vennya', changefreq: 'weekly', priority: '0.8' },
    { loc: '/seleb/han-so-hee', changefreq: 'weekly', priority: '0.8' },
    { loc: '/seleb/reza-rahadian', changefreq: 'weekly', priority: '0.8' },
    { loc: '/seleb/fuji-an', changefreq: 'weekly', priority: '0.8' },
    { loc: '/seleb/zendaya', changefreq: 'weekly', priority: '0.8' },
    { loc: '/seleb/raffi-ahmad', changefreq: 'weekly', priority: '0.8' },
    { loc: '/seleb/min-hee-jin', changefreq: 'weekly', priority: '0.8' },
    { loc: '/pedoman-media-siber', changefreq: 'monthly', priority: '0.7' },
    { loc: '/kode-etik', changefreq: 'monthly', priority: '0.7' },
    { loc: '/hak-jawab', changefreq: 'monthly', priority: '0.7' },
    { loc: '/pedoman-pemeriksaan-fakta', changefreq: 'monthly', priority: '0.7' },
    { loc: '/pedoman-hak-cipta', changefreq: 'monthly', priority: '0.6' },
    { loc: '/tentang-kami', changefreq: 'monthly', priority: '0.6' },
    { loc: '/redaksi', changefreq: 'monthly', priority: '0.6' },
    { loc: '/kebijakan-privasi', changefreq: 'monthly', priority: '0.6' },
    { loc: '/syarat-dan-ketentuan', changefreq: 'monthly', priority: '0.6' },
    { loc: '/disclaimer', changefreq: 'monthly', priority: '0.6' },
    { loc: '/kontak-kami', changefreq: 'monthly', priority: '0.6' },
  ];

  let articleUrls: Array<{ loc: string; lastmod: string; changefreq: string; priority: string }> = [];

  if (env.DB) {
    try {
      // Only select canonical master articles (anti-duplicate guardrail)
      const { results } = await env.DB.prepare(
        'SELECT slug, published_at FROM articles WHERE is_canonical = 1 ORDER BY published_at DESC LIMIT 100'
      ).all();
      if (results && results.length > 0) {
        articleUrls = results.map((row: any) => ({
          loc: `/artikel/${row.slug}`,
          lastmod: row.published_at ? new Date(row.published_at).toISOString() : new Date().toISOString(),
          changefreq: 'weekly',
          priority: '0.9',
        }));
      }
    } catch {
      // Fallback to legacy query if is_canonical column has not yet been migrated
      try {
        const { results } = await env.DB.prepare(
          'SELECT slug, published_at FROM articles ORDER BY published_at DESC LIMIT 50'
        ).all();
        if (results && results.length > 0) {
          articleUrls = results.map((row: any) => ({
            loc: `/artikel/${row.slug}`,
            lastmod: row.published_at ? new Date(row.published_at).toISOString() : new Date().toISOString(),
            changefreq: 'weekly',
            priority: '0.9',
          }));
        }
      } catch {}
    }
  }

  // Fallback seed articles if DB was empty or failed
  if (articleUrls.length === 0) {
    const fallbackSlugs = [
      'duduk-perkara-royalti-musik-musisi-vs-promotor-konser',
      'kronologi-lengkap-drama-live-tiktok-creator-fuji-an',
      'han-so-hee-comeback-proyek-film-hollywood-verifikasi',
      'zendaya-tom-holland-isu-pertunangan-dan-fakta-arsip',
      'reza-rahadian-advokasi-uu-pekerja-kreatif-indonesia',
      'audit-keuangan-yayasan-rachel-vennya-transparansi-donasi',
      'sengketa-kontrak-eksklusif-newjeans-vs-ador-duduk-perkara',
      'boikot-aktor-hollywood-isu-ai-hak-citra-sag-aftra',
    ];
    articleUrls = fallbackSlugs.map((slug) => ({
      loc: `/artikel/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.9',
    }));
  }

  const nowIso = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const s of staticUrls) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${s.loc}</loc>\n`;
    xml += `    <lastmod>${nowIso}</lastmod>\n`;
    xml += `    <changefreq>${s.changefreq}</changefreq>\n`;
    xml += `    <priority>${s.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  for (const a of articleUrls) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${a.loc}</loc>\n`;
    xml += `    <lastmod>${a.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${a.changefreq}</changefreq>\n`;
    xml += `    <priority>${a.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
};
