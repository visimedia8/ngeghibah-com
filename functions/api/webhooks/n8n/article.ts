/// <reference types="@cloudflare/workers-types" />

interface Env {
  DB?: D1Database;
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

    const title = payload.title?.trim();
    const slug = (payload.slug || payload.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''))?.trim();
    const contentHtml = payload.content_html || payload.contentHtml || payload.content;

    if (!title || !slug || !contentHtml) {
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
    const categoryLabels: Record<string, string> = {
      'seleb-lokal': 'Seleb Lokal',
      'creator-tiktok': 'Creator & TikTok',
      'kpop-asia': 'K-Pop & Asia',
      'hollywood-barat': 'Hollywood & Barat',
    };
    const categoryLabel = payload.category_label || payload.categoryLabel || categoryLabels[category] || 'Seleb Lokal';

    const heroImage = payload.hero_image || payload.heroImage || categoryDefaults[category] || categoryDefaults['seleb-lokal'];
    const imageCaption = payload.image_caption || payload.imageCaption || `Ilustrasi liputan eksklusif terkait ${title}. (Foto: Tim Redaksi NgeGhibah)`;

    const id = payload.id || `art-${Date.now()}`;
    const excerpt = (payload.excerpt || payload.summary || title.slice(0, 160)).trim();

    const ghibahMeterStatus = payload.ghibah_meter_status || payload.ghibahMeter?.status || 'TERKONFIRMASI';
    const ghibahMeterFact = Number(payload.ghibah_meter_fact ?? payload.ghibahMeter?.percentageFact ?? 85);
    const ghibahMeterRumor = Number(payload.ghibah_meter_rumor ?? payload.ghibahMeter?.percentageRumor ?? 15);
    const ghibahMeterLabel = payload.ghibah_meter_label || payload.ghibahMeter?.label || 'Fakta Terverifikasi';
    const ghibahMeterDesc = payload.ghibah_meter_desc || payload.ghibahMeter?.description || 'Diverifikasi melalui berkas arsip dan dokumen resmi.';

    const publishedAt = payload.published_at || payload.publishedAt || new Date().toISOString();
    const wordCount = contentHtml.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
    const readingTimeMinutes = Number(payload.reading_time_minutes || payload.readingTimeMinutes || Math.max(3, Math.ceil(wordCount / 200)));

    const authorName = payload.author?.name || payload.author_name || 'Tim Investigasi NgeGhibah';
    const authorSlug = payload.author?.slug || payload.author_slug || 'tim-investigasi';
    const authorRole = payload.author?.role || payload.author_role || 'Redaktur Investigasi Pop-Kultur';
    const authorAvatar = payload.author?.avatar || payload.author_avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';

    const entitiesJson = typeof payload.entities === 'string' ? payload.entities : JSON.stringify(payload.entities || []);
    const timelineJson = typeof payload.timeline === 'string' ? payload.timeline : JSON.stringify(payload.timeline || []);

    const digitalReceiptsCount = Number(payload.digital_receipts_count ?? payload.digitalReceiptsCount ?? (Array.isArray(payload.timeline) ? payload.timeline.length : 3));
    const isFeatured = (payload.is_featured || payload.isFeatured) ? 1 : 0;
    const isHero = (payload.is_hero || payload.isHero) ? 1 : 0;
    const trendingScore = Number(payload.trending_score ?? payload.trendingScore ?? 85);

    // Save to Cloudflare D1 database if bound
    let persistedToDb = false;
    if (env.DB) {
      await env.DB.prepare(`
        INSERT INTO articles (
          id, slug, title, excerpt, content_html, category, category_label,
          ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
          hero_image, image_caption, published_at, reading_time_minutes,
          author_name, author_slug, author_role, author_avatar,
          entities_json, timeline_json, digital_receipts_count,
          is_featured, is_hero, trending_score, updated_at
        ) VALUES (
          ?, ?, ?, ?, ?, ?, ?,
          ?, ?, ?, ?, ?,
          ?, ?, ?, ?,
          ?, ?, ?, ?,
          ?, ?, ?,
          ?, ?, ?, CURRENT_TIMESTAMP
        )
        ON CONFLICT(slug) DO UPDATE SET
          title = excluded.title,
          excerpt = excluded.excerpt,
          content_html = excluded.content_html,
          category = excluded.category,
          category_label = excluded.category_label,
          ghibah_meter_status = excluded.ghibah_meter_status,
          ghibah_meter_fact = excluded.ghibah_meter_fact,
          ghibah_meter_rumor = excluded.ghibah_meter_rumor,
          ghibah_meter_label = excluded.ghibah_meter_label,
          ghibah_meter_desc = excluded.ghibah_meter_desc,
          hero_image = excluded.hero_image,
          image_caption = excluded.image_caption,
          published_at = excluded.published_at,
          reading_time_minutes = excluded.reading_time_minutes,
          author_name = excluded.author_name,
          author_slug = excluded.author_slug,
          author_role = excluded.author_role,
          author_avatar = excluded.author_avatar,
          entities_json = excluded.entities_json,
          timeline_json = excluded.timeline_json,
          digital_receipts_count = excluded.digital_receipts_count,
          is_featured = excluded.is_featured,
          is_hero = excluded.is_hero,
          trending_score = excluded.trending_score,
          updated_at = CURRENT_TIMESTAMP
      `).bind(
        id, slug, title, excerpt, contentHtml, category, categoryLabel,
        ghibahMeterStatus, ghibahMeterFact, ghibahMeterRumor, ghibahMeterLabel, ghibahMeterDesc,
        heroImage, imageCaption, publishedAt, readingTimeMinutes,
        authorName, authorSlug, authorRole, authorAvatar,
        entitiesJson, timelineJson, digitalReceiptsCount,
        isFeatured, isHero, trendingScore
      ).run();
      persistedToDb = true;
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Artikel berhasil disimpan ke Cloudflare D1 dan siap ditayangkan secara instan.',
        slug,
        hero_image: heroImage,
        persistedToDb,
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
