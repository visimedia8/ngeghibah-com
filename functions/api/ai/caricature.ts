interface Env {
  AI?: any;
  CLOUDFLARE_ACCOUNT_ID?: string;
  CLOUDFLARE_API_TOKEN?: string;
  N8N_WEBHOOK_SECRET?: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;
  try {
    const authHeader = request.headers.get('authorization');
    const secret = env.N8N_WEBHOOK_SECRET || 'ngeghibah-super-secret-key-2026';

    if (authHeader !== `Bearer ${secret}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized caricature generation request' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const payload: {
      prompt?: string;
      celebrity?: string;
      event?: string;
      model?: string;
    } = await request.json();

    const celebrity = payload.celebrity || 'Indonesian celebrity';
    const event = payload.event || 'pop-culture event';

    // Editorial satire caricature prompt optimized for 16:9 Google Discover
    const systemPrompt =
      payload.prompt ||
      `Editorial satirical caricature illustration of ${celebrity}, vibrant pop-art comic style, exaggerated expressive facial reaction, depicting ${event}, dark obsidian velvet background with vivid neon magenta and cyan highlights, clean sharp vector art, professional magazine cover editorial cartoon, 16:9 aspect ratio, high resolution`;

    // 1. Direct Binding execution if env.AI is bound in Pages
    if (env.AI) {
      const model = payload.model || '@cf/black-forest-labs/flux-1-schnell';
      const imageBytes = await env.AI.run(model, {
        prompt: systemPrompt,
      });

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

      if (!cfResponse.ok) {
        const errText = await cfResponse.text();
        return new Response(JSON.stringify({ error: 'Workers AI API error', details: errText }), {
          status: cfResponse.status,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const imgBuffer = await cfResponse.arrayBuffer();
      return new Response(imgBuffer, {
        headers: {
          'Content-Type': 'image/jpeg',
          'Cache-Control': 'public, max-age=604800, immutable',
        },
      });
    }

    // 3. Structured Instruction Response when credentials need to be attached
    return new Response(
      JSON.stringify({
        status: 'configured',
        model: '@cf/black-forest-labs/flux-1-schnell',
        freeTierQuota: '10,000 Neurons/day (Free on Cloudflare)',
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
