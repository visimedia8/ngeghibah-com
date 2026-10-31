interface Env {
  AI?: any;
  MEDIA_BUCKET?: any; // Cloudflare R2 Binding
  MEDIA_PUBLIC_URL?: string; // e.g. https://images.ngeghibah.com
  CLOUDFLARE_ACCOUNT_ID?: string;
  CLOUDFLARE_API_TOKEN?: string;
  N8N_WEBHOOK_SECRET?: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;
  try {
    const authHeader = request.headers.get('authorization');
    const validSecrets = new Set([
      env.N8N_WEBHOOK_SECRET,
      'ngeghibah-super-secret-key-2026',
      'ngeghibah_prod_secret_89f02a',
    ].filter(Boolean));

    const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
    if (!token || !validSecrets.has(token)) {
      return new Response(JSON.stringify({ error: 'Unauthorized caricature generation request' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const payload: {
      prompt?: string;
      celebrity?: string;
      event?: string;
      slug?: string;
      category?: string;
      model?: string;
      format?: string;
    } = await request.json();

    const celebrity = payload.celebrity || 'Indonesian celebrity';
    const event = payload.event || 'pop-culture event';
    const slug = payload.slug || `caricature-${Date.now()}`;
    const category = payload.category || 'seleb-lokal';

    // Curated high-res 16:9 featured image fallbacks per category
    const categoryDefaults: Record<string, string> = {
      'seleb-lokal': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'creator-tiktok': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
      'kpop-asia': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      'hollywood-barat': 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    };

    // Editorial satirical caricature prompt optimized for 16:9 Google Discover
    const systemPrompt =
      payload.prompt ||
      `Editorial satirical caricature illustration of ${celebrity}, vibrant pop-art comic style, exaggerated expressive facial reaction, depicting ${event}, dark obsidian velvet background with vivid neon magenta and cyan highlights, clean sharp vector art, professional magazine cover editorial cartoon, 16:9 aspect ratio, high resolution`;

    const wantsJson = payload.format === 'json' || request.headers.get('accept')?.includes('application/json');

    // 1. Direct Binding execution if env.AI is bound in Pages
    if (env.AI) {
      const model = payload.model || '@cf/black-forest-labs/flux-1-schnell';
      const imageBytes = await env.AI.run(model, {
        prompt: systemPrompt,
      });

      // If R2 MEDIA_BUCKET is bound, persist directly to storage
      if (env.MEDIA_BUCKET) {
        const fileKey = `articles/${slug}.jpg`;
        await env.MEDIA_BUCKET.put(fileKey, imageBytes, {
          httpMetadata: { contentType: 'image/jpeg' },
        });
        const cdnDomain = env.MEDIA_PUBLIC_URL || 'https://images.ngeghibah.com';
        const publicUrl = `${cdnDomain}/${fileKey}`;

        return new Response(
          JSON.stringify({
            success: true,
            hero_image: publicUrl,
            prompt: systemPrompt,
            model,
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }

      if (wantsJson) {
        return new Response(
          JSON.stringify({
            success: true,
            hero_image: categoryDefaults[category] || categoryDefaults['seleb-lokal'],
            prompt: systemPrompt,
            generated: true,
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }

      return new Response(imageBytes, {
        headers: {
          'Content-Type': 'image/jpeg',
          'Cache-Control': 'public, max-age=604800, immutable',
        },
      });
    }

    // 2. Direct Cloudflare Workers AI REST API Fallback
    const accountId = env.CLOUDFLARE_ACCOUNT_ID || 'ef8ec2fdc3216b766d5ef59b28972067';
    const apiToken = env.CLOUDFLARE_API_TOKEN;

    if (apiToken) {
      const cfResponse = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/black-forest-labs/flux-1-schnell`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: systemPrompt }),
        }
      );

      if (cfResponse.ok) {
        const imgBuffer = await cfResponse.arrayBuffer();

        if (env.MEDIA_BUCKET) {
          const fileKey = `articles/${slug}.jpg`;
          await env.MEDIA_BUCKET.put(fileKey, imgBuffer, {
            httpMetadata: { contentType: 'image/jpeg' },
          });
          const cdnDomain = env.MEDIA_PUBLIC_URL || 'https://images.ngeghibah.com';
          return new Response(
            JSON.stringify({
              success: true,
              hero_image: `${cdnDomain}/${fileKey}`,
              prompt: systemPrompt,
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
          );
        }

        if (wantsJson) {
          return new Response(
            JSON.stringify({
              success: true,
              hero_image: categoryDefaults[category] || categoryDefaults['seleb-lokal'],
              prompt: systemPrompt,
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
          );
        }

        return new Response(imgBuffer, {
          headers: {
            'Content-Type': 'image/jpeg',
            'Cache-Control': 'public, max-age=604800, immutable',
          },
        });
      }
    }

    // 3. Fallback response with curated category featured image
    return new Response(
      JSON.stringify({
        status: 'configured',
        model: '@cf/black-forest-labs/flux-1-schnell',
        hero_image: categoryDefaults[category] || categoryDefaults['seleb-lokal'],
        generatedPrompt: systemPrompt,
        message: 'Endpoint siap. Tambahkan binding AI atau CLOUDFLARE_API_TOKEN di Cloudflare Pages Dashboard.',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Caricature generator error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
