/// <reference types="@cloudflare/workers-types" />

interface Env {
  DB?: D1Database;
}

export const onRequestGet = async (context: { params: { slug: string }; env: Env }) => {
  const { params, env } = context;
  try {
    if (!env.DB) {
      return new Response(JSON.stringify({ error: 'Database not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const slug = params.slug;
    const row: any = await env.DB.prepare('SELECT * FROM articles WHERE slug = ?').bind(slug).first();

    if (!row) {
      return new Response(JSON.stringify({ error: 'Artikel tidak ditemukan' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const article = {
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
    };

    return new Response(JSON.stringify({ article }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
