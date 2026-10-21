/// <reference types="@cloudflare/workers-types" />

interface Env {
  DB?: D1Database;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const onRequestGet = async (context: { request: Request; env: Env }) => {
  const { env } = context;
  const baseUrl = 'https://ngeghibah.com';

  let articles: any[] = [];

  if (env.DB) {
    try {
      // Google News sitemap standard focuses on recent canonical master articles
      const { results } = await env.DB.prepare(
        'SELECT slug, title, published_at FROM articles WHERE is_canonical = 1 ORDER BY published_at DESC LIMIT 50'
      ).all();
      articles = results || [];
    } catch {
      try {
        const { results } = await env.DB.prepare(
          'SELECT slug, title, published_at FROM articles ORDER BY published_at DESC LIMIT 30'
        ).all();
        articles = results || [];
      } catch {
        articles = [];
      }
    }
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n`;

  for (const art of articles) {
    const pubDate = art.published_at ? new Date(art.published_at).toISOString() : new Date().toISOString();
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/artikel/${art.slug}</loc>\n`;
    xml += `    <news:news>\n`;
    xml += `      <news:publication>\n`;
    xml += `        <news:name>NgeGhibah.com</news:name>\n`;
    xml += `        <news:language>id</news:language>\n`;
    xml += `      </news:publication>\n`;
    xml += `      <news:publication_date>${pubDate}</news:publication_date>\n`;
    xml += `      <news:title>${escapeXml(art.title || '')}</news:title>\n`;
    xml += `    </news:news>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=900, s-maxage=1800, stale-while-revalidate=86400',
    },
  });
};
