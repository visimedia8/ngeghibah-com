/// <reference types="@cloudflare/workers-types" />

interface Env {
  DB?: D1Database;
}

export const onRequestGet = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;

  try {
    if (!env.DB) {
      return new Response(JSON.stringify({ celebrities: [], total: 0, source: 'no_db_binding' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    const url = new URL(request.url);
    const limit = Math.min(50, Math.max(1, Number(url.searchParams.get('limit') || 12)));
    const offset = Math.max(0, Number(url.searchParams.get('offset') || 0));
    const sort = url.searchParams.get('sort') || 'recent';

    let orderClause = 'ORDER BY updated_at DESC';
    if (sort === 'dramas') {
      orderClause = 'ORDER BY drama_count DESC, updated_at DESC';
    } else if (sort === 'alpha') {
      orderClause = 'ORDER BY stage_name ASC';
    }

    const query = `
      SELECT 
        id, slug, name, stage_name, avatar, banner_image, profession,
        age, agency, relationship_status, circle_json, verified_accounts_json,
        bio, career_highlights_json, drama_count, sentiment_summary, updated_at
      FROM celebrities
      ${orderClause}
      LIMIT ? OFFSET ?
    `;

    const { results } = await env.DB.prepare(query).bind(limit, offset).all();

    const celebrities = (results || []).map((row: any) => {
      let circle: string[] = [];
      try { circle = JSON.parse(row.circle_json || '[]'); } catch {}

      let verifiedAccounts: any[] = [];
      try { verifiedAccounts = JSON.parse(row.verified_accounts_json || '[]'); } catch {}

      let careerHighlights: string[] = [];
      try { careerHighlights = JSON.parse(row.career_highlights_json || '[]'); } catch {}

      return {
        id: row.id,
        slug: row.slug,
        name: row.name,
        stageName: row.stage_name,
        avatar: row.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        bannerImage: row.banner_image || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
        profession: row.profession || 'Figur Publik',
        age: row.age || 28,
        agency: row.agency || 'Independen',
        relationshipStatus: row.relationship_status || 'Privat',
        circle,
        verifiedAccounts,
        bio: row.bio || '',
        careerHighlights,
        dramaCount: row.drama_count || 1,
        sentimentSummary: row.sentiment_summary || 'Sorotan positif dengan analisis rekam jejak objektif.',
        updatedAt: row.updated_at
      };
    });

    return new Response(
      JSON.stringify({
        celebrities,
        total: celebrities.length,
        limit,
        offset,
        sort,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: error.message || 'Internal Server Error',
        celebrities: [],
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
