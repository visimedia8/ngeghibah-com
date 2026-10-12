/// <reference types="@cloudflare/workers-types" />

interface Env {
  DB?: D1Database;
}

export const onRequestGet = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;
  try {
    if (!env.DB) {
      return new Response(JSON.stringify({ articles: [], source: 'no_db_binding' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const limit = Math.min(50, Math.max(1, Number(url.searchParams.get('limit') || 20)));
    const offset = Math.max(0, Number(url.searchParams.get('offset') || 0));

    let query = 'SELECT * FROM articles';
    const params: any[] = [];

    if (category && category !== 'semua') {
      query += ' WHERE category = ?';
      params.push(category);
    }

    query += ' ORDER BY published_at DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);

    const { results } = await env.DB.prepare(query).bind(...params).all();

    const articles = (results || []).map((row: any) => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      excerpt: row.excerpt,
      contentHtml: row.content_html,
      category: row.category,
      categoryLabel: row.category_label,
      ghibahMeter: {
        status: row.ghibah_meter_status,
        percentageFact: row.ghibah_meter_fact,
        percentageRumor: row.ghibah_meter_rumor,
        label: row.ghibah_meter_label,
        description: row.ghibah_meter_desc,
      },
      heroImage: row.hero_image,
      imageCaption: row.image_caption,
      publishedAt: row.published_at,
      readingTimeMinutes: row.reading_time_minutes,
      author: {
        name: row.author_name,
        slug: row.author_slug,
        role: row.author_role,
        avatar: row.author_avatar,
      },
      entities: (() => {
        try {
          return JSON.parse(row.entities_json || '[]');
        } catch {
          return [];
        }
      })(),
      timeline: (() => {
        try {
          return JSON.parse(row.timeline_json || '[]');
        } catch {
          return [];
        }
      })(),
      digitalReceiptsCount: row.digital_receipts_count,
      isFeatured: Boolean(row.is_featured),
      isHero: Boolean(row.is_hero),
      trendingScore: row.trending_score,
    }));

    return new Response(JSON.stringify({ articles, total: articles.length }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60, s-maxage=120, stale-while-revalidate=300',
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
