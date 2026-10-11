interface Env {
  N8N_WEBHOOK_SECRET?: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;
  try {
    const authHeader = request.headers.get('authorization');
    const secret = env.N8N_WEBHOOK_SECRET || 'ngeghibah-super-secret-key-2026';

    if (authHeader !== `Bearer ${secret}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized webhook request' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const payload: any = await request.json();

    if (!payload.title || !payload.slug || (!payload.content_html && !payload.contentHtml)) {
      return new Response(
        JSON.stringify({ error: 'Payload tidak lengkap: title, slug, dan content_html wajib ada' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Default 16:9 editorial featured images per category (anti-broken image guard)
    const categoryDefaults: Record<string, string> = {
      'seleb-lokal': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'creator-tiktok': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
      'kpop-asia': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      'hollywood-barat': 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    };

    const category = payload.category || 'seleb-lokal';
    const heroImage = payload.hero_image || payload.heroImage || categoryDefaults[category] || categoryDefaults['seleb-lokal'];

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Artikel berhasil diterima oleh Cloudflare Edge dan diproses untuk publikasi',
        slug: payload.slug,
        hero_image: heroImage,
        receivedAt: new Date().toISOString(),
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
