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

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Artikel berhasil diterima oleh Cloudflare Edge dan diproses untuk publikasi',
        slug: payload.slug,
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
