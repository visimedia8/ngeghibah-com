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
      const { results } = await env.DB.prepare(
        'SELECT slug, title, excerpt, published_at, category_label, author_name FROM articles ORDER BY published_at DESC LIMIT 30'
      ).all();
      articles = results || [];
    } catch {
      articles = [];
    }
  }

  const buildDate = new Date().toUTCString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n`;
  xml += `  <channel>\n`;
  xml += `    <title>NgeGhibah.com — Radar Pop-Kultur: Data, Kronologi &amp; Verifikasi Fakta</title>\n`;
  xml += `    <link>${baseUrl}</link>\n`;
  xml += `    <description>Portal kurasi dan jurnalisme investigasi pop-kultur independen. Rekonstruksi kronologis, rekam jejak digital, dan verifikasi fakta Ghibah Meter.</description>\n`;
  xml += `    <language>id-ID</language>\n`;
  xml += `    <lastBuildDate>${buildDate}</lastBuildDate>\n`;
  xml += `    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />\n`;

  for (const art of articles) {
    const pubDate = art.published_at ? new Date(art.published_at).toUTCString() : buildDate;
    xml += `    <item>\n`;
    xml += `      <title>${escapeXml(art.title || '')}</title>\n`;
    xml += `      <link>${baseUrl}/artikel/${art.slug}</link>\n`;
    xml += `      <guid isPermaLink="true">${baseUrl}/artikel/${art.slug}</guid>\n`;
    xml += `      <description>${escapeXml(art.excerpt || '')}</description>\n`;
    xml += `      <category>${escapeXml(art.category_label || 'Seleb Lokal')}</category>\n`;
    xml += `      <author>${escapeXml(art.author_name || 'Tim Redaksi NgeGhibah')}</author>\n`;
    xml += `      <pubDate>${pubDate}</pubDate>\n`;
    xml += `    </item>\n`;
  }

  xml += `  </channel>\n`;
  xml += `</rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
};
