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
      contentHtml: linkifyCelebritiesInHtml(row.content_html || ''),
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

const MASTER_CELEBRITY_TARGETS = [
  { slug: 'raffi-ahmad', names: ['Raffi Ahmad', 'Raffi Farid Ahmad'], label: 'Raffi Ahmad' },
  { slug: 'nagita-slavina', names: ['Nagita Slavina', 'Nagita Slavina Mariana Tengker'], label: 'Nagita Slavina' },
  { slug: 'syifa-hadju', names: ['Syifa Hadju', 'Syifa Safira Nuraisyah'], label: 'Syifa Hadju' },
  { slug: 'el-rumi', names: ['El Rumi', 'Ahmad Jalaluddin Rumi'], label: 'El Rumi' },
  { slug: 'azizah-salsha', names: ['Azizah Salsha', 'Nurul Azizah Rosiade', 'Zize'], label: 'Azizah Salsha' },
  { slug: 'nikita-mirzani', names: ['Nikita Mirzani', 'Nikita Mirzani Mawardi', 'Nikmir'], label: 'Nikita Mirzani' },
  { slug: 'prilly-latuconsina', names: ['Prilly Latuconsina', 'Prilly Mahatei Latuconsina'], label: 'Prilly Latuconsina' },
  { slug: 'deddy-corbuzier', names: ['Deddy Corbuzier', 'Deodatus Andreas Deddy Cahyadi Sunjoyo'], label: 'Deddy Corbuzier' },
  { slug: 'windah-basudara', names: ['Windah Basudara', 'Brando Franco Windah'], label: 'Windah Basudara' },
  { slug: 'fuji-an', names: ['Fuji An', 'Fujianti Utami Putri', 'Fuji Utami'], label: 'Fuji An' },
  { slug: 'rachel-vennya', names: ['Rachel Vennya', 'Rachel Vennya Roland'], label: 'Rachel Vennya' },
  { slug: 'reza-rahadian', names: ['Reza Rahadian', 'Reza Rahadian Matulessy'], label: 'Reza Rahadian' },
  { slug: 'jennie-blackpink', names: ['Jennie BLACKPINK', 'Jennie Kim', 'Jennie'], label: 'Jennie BLACKPINK' },
  { slug: 'jungkook-bts', names: ['Jungkook BTS', 'Jeon Jung-kook', 'Jungkook'], label: 'Jungkook BTS' },
  { slug: 'lisa-blackpink', names: ['Lisa BLACKPINK', 'Lalisa Manobal', 'Lisa'], label: 'Lisa BLACKPINK' },
  { slug: 'karina-aespa', names: ['Karina aespa', 'Yu Ji-min'], label: 'Karina aespa' },
  { slug: 'wonyoung-ive', names: ['Wonyoung IVE', 'Jang Won-young', 'Jang Wonyoung'], label: 'Wonyoung IVE' },
  { slug: 'byeon-woo-seok', names: ['Byeon Woo-seok', 'Byeon Wooseok'], label: 'Byeon Woo-seok' },
  { slug: 'min-hee-jin', names: ['Min Hee-jin', 'Min Heejin'], label: 'Min Hee-jin' },
  { slug: 'han-so-hee', names: ['Han So-hee', 'Lee So-hee'], label: 'Han So-hee' },
  { slug: 'taylor-swift', names: ['Taylor Swift', 'Taylor Alison Swift'], label: 'Taylor Swift' },
  { slug: 'selena-gomez', names: ['Selena Gomez', 'Selena Marie Gomez'], label: 'Selena Gomez' },
  { slug: 'hailey-bieber', names: ['Hailey Bieber', 'Hailey Rhode Baldwin Bieber', 'Hailey Baldwin'], label: 'Hailey Bieber' },
  { slug: 'zendaya', names: ['Zendaya', 'Zendaya Maree Stoermer Coleman'], label: 'Zendaya' },
];

function linkifyCelebritiesInHtml(html: string): string {
  if (!html) return html;

  const tokenRegex = /(<[^>]+>|[^<]+)/g;
  const tokens = html.match(tokenRegex) || [html];
  const linkedSlugs = new Set<string>();

  const targets = [...MASTER_CELEBRITY_TARGETS].sort((a, b) => {
    const maxA = Math.max(...a.names.map((n) => n.length));
    const maxB = Math.max(...b.names.map((n) => n.length));
    return maxB - maxA;
  });

  let insideAnchor = false;
  let insideHeading = false;
  const resultTokens: string[] = [];

  for (const token of tokens) {
    if (token.startsWith('<')) {
      const lower = token.toLowerCase();
      if (lower.startsWith('<a ') || lower === '<a>') {
        insideAnchor = true;
      } else if (lower.startsWith('</a>')) {
        insideAnchor = false;
      } else if (/^<h[1-6][\s>]/.test(lower)) {
        insideHeading = true;
      } else if (/^<\/h[1-6]>/.test(lower)) {
        insideHeading = false;
      }
      resultTokens.push(token);
      continue;
    }

    if (insideAnchor || insideHeading) {
      resultTokens.push(token);
      continue;
    }

    let modifiedText = token;

    for (const celeb of targets) {
      if (linkedSlugs.has(celeb.slug)) continue;

      for (const name of celeb.names) {
        if (linkedSlugs.has(celeb.slug)) break;

        const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b(${escaped})\\b`, 'i');

        const match = modifiedText.match(regex);
        if (match && match.index !== undefined) {
          const matchedText = match[0];
          const linkHtml = `<a href="/seleb/${celeb.slug}" class="text-neon-cyan hover:underline font-semibold border-b border-neon-cyan/40 hover:border-neon-cyan transition-colors" title="Buka Dossier Rekam Jejak ${celeb.label}">${matchedText}</a>`;

          modifiedText =
            modifiedText.slice(0, match.index) +
            linkHtml +
            modifiedText.slice(match.index + matchedText.length);

          linkedSlugs.add(celeb.slug);
          break;
        }
      }
    }

    resultTokens.push(modifiedText);
  }

  return resultTokens.join('');
}
