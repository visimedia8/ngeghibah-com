/// <reference types="@cloudflare/workers-types" />

interface Env {
  DB?: D1Database;
}

export const onRequestGet = async (context: {
  request: Request;
  params: { slug: string };
  env: Env;
  next: () => Promise<Response>;
}) => {
  const { params, env, next } = context;
  try {
    if (!env.DB) {
      return next();
    }

    const slug = params.slug;
    const row: any = await env.DB.prepare('SELECT * FROM articles WHERE slug = ?').bind(slug).first();

    if (!row) {
      return next();
    }

    // 301 Permanent Redirect Guard if article was marked as duplicate/pruned
    if (row.is_canonical === 0 && row.canonical_slug) {
      return Response.redirect(`https://ngeghibah.com/artikel/${row.canonical_slug}`, 301);
    }

    let entities: string[] = [];
    try {
      entities = JSON.parse(row.entities_json || '[]');
    } catch {}

    let timeline: any[] = [];
    try {
      timeline = JSON.parse(row.timeline_json || '[]');
    } catch {}

    const title = escapeHtml(row.title || '');
    const excerpt = escapeHtml(row.excerpt || '');
    const categoryLabel = escapeHtml(row.category_label || 'Seleb Lokal');
    const category = escapeHtml(row.category || 'seleb-lokal');
    const authorName = escapeHtml(row.author_name || 'Tim Redaksi NgeGhibah');
    const authorRole = escapeHtml(row.author_role || 'Redaktur Investigasi Pop-Kultur');
    const authorAvatar = row.author_avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=75';
    const heroImage = row.hero_image || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80';
    const imageCaption = escapeHtml(row.image_caption || `Ilustrasi liputan eksklusif terkait ${title}.`);
    const publishedAt = row.published_at || new Date().toISOString();
    const readingTime = Number(row.reading_time_minutes || 5);
    const factPct = Number(row.ghibah_meter_fact || 85);
    const rumorPct = Number(row.ghibah_meter_rumor || 15);
    const meterStatus = escapeHtml(row.ghibah_meter_status || 'TERKONFIRMASI');
    const meterDesc = escapeHtml(row.ghibah_meter_desc || 'Diverifikasi melalui berkas arsip dan dokumen resmi.');
    const contentHtml = row.content_html || '';

    function beautifyAndInjectAds(rawHtml: string): string {
      if (!rawHtml) return '';

      // 1. Break down massive paragraphs (>350 chars) into crisp 2-sentence micro-paragraphs
      let formatted = rawHtml.replace(/<p>([\s\S]*?)<\/p>/gi, (match, pText) => {
        if (pText.length > 350) {
          const sentences = pText.split(/(?<=[.!?])\s+(?=[A-Z0-9])/);
          if (sentences.length >= 2) {
            const mid = Math.ceil(sentences.length / 2);
            return `<p>${sentences.slice(0, mid).join(' ')}</p><p>${sentences.slice(mid).join(' ')}</p>`;
          }
        }
        return match;
      });

      // 2. Wrap un-wrapped tables in table-responsive container
      if (formatted.includes('<table') && !formatted.includes('overflow-x-auto')) {
        formatted = formatted.replace(/(<table[\s\S]*?<\/table>)/gi, '<div class="overflow-x-auto my-8">$1</div>');
      }

      // 3. AdSense In-Article Slots
      const adSlot1 = `
<div class="my-8 rounded-2xl border border-dashed border-slate-700/60 bg-velvet/40 p-4 text-center">
  <div class="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2 px-1">
    <span>IKLAN REKOMENDASI</span>
    <span>SPONSORED</span>
  </div>
  <div class="min-h-[100px] sm:min-h-[120px] flex items-center justify-center">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-4090835276472949"
         data-ad-slot="artikel-in-content-1"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  </div>
</div>`;

      const adSlot2 = `
<div class="my-8 rounded-2xl border border-dashed border-slate-700/60 bg-velvet/40 p-4 text-center">
  <div class="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2 px-1">
    <span>IKLAN PILIHAN REDAKSI</span>
    <span>SPONSORED</span>
  </div>
  <div class="min-h-[100px] sm:min-h-[120px] flex items-center justify-center">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-4090835276472949"
         data-ad-slot="artikel-in-content-2"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  </div>
</div>`;

      const pMatches = [...formatted.matchAll(/<\/p>/gi)];
      if (pMatches.length >= 3) {
        const idx1 = pMatches[1].index! + 4;
        formatted = formatted.slice(0, idx1) + adSlot1 + formatted.slice(idx1);

        const updatedMatches = [...formatted.matchAll(/<\/p>/gi)];
        const target2 = Math.min(6, updatedMatches.length - 1);
        if (target2 > 2) {
          const idx2 = updatedMatches[target2].index! + 4;
          formatted = formatted.slice(0, idx2) + adSlot2 + formatted.slice(idx2);
        }
      }

      return formatted;
    }

    const styledContentHtml = beautifyAndInjectAds(contentHtml);

    const formattedDate = formatDateId(publishedAt);
    const canonicalUrl = `https://ngeghibah.com/artikel/${slug}`;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: row.title,
      description: row.excerpt,
      datePublished: publishedAt,
      dateModified: row.updated_at || publishedAt,
      articleSection: row.category_label || 'Seleb Lokal',
      image: [heroImage],
      author: [
        {
          '@type': 'Person',
          name: row.author_name || 'Tim Redaksi NgeGhibah',
          url: 'https://ngeghibah.com/redaksi',
        },
      ],
      publisher: {
        '@type': 'NewsMediaOrganization',
        name: 'NgeGhibah.com',
        url: 'https://ngeghibah.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ngeghibah.com/logo.png',
        },
      },
    };

    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: 'https://ngeghibah.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: row.category_label || 'Seleb Lokal',
          item: `https://ngeghibah.com/kategori/${category}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: row.title,
          item: canonicalUrl,
        },
      ],
    };

    let timelineHtml = '';
    if (timeline.length > 0) {
      timelineHtml = `
        <div class="my-8 rounded-2xl border border-velvet-border bg-gradient-to-b from-velvet/90 to-obsidian-deep/90 p-5 sm:p-6 shadow-card-glow">
          <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-neon-cyan mb-4 flex items-center gap-2">
            <span>REKAM JEJAK DIGITAL & KRONOLOGI TERVERIFIKASI</span>
          </h3>
          <div class="relative border-l-2 border-slate-700/80 ml-3 sm:ml-4 space-y-6">
            ${timeline
              .map((node: any, idx: number) => {
                const timeLabel = escapeHtml(node.time_label || node.timeLabel || `Tahap ${idx + 1}`);
                const itemTitle = escapeHtml(node.title || (node.event ? `Rekam Jejak #${idx + 1}` : 'Verifikasi Kronologis'));
                const itemDesc = escapeHtml(node.description || node.event || '');
                return `
              <div class="relative pl-6 sm:pl-8">
                <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-neon-pink border-2 border-obsidian"></div>
                <div class="text-[11px] font-mono text-neon-cyan mb-0.5">${timeLabel}</div>
                <h4 class="text-sm sm:text-base font-bold text-white mb-1">${itemTitle}</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${itemDesc}</p>
                ${
                  node.receiptQuote
                    ? `<blockquote class="mt-2 text-xs italic text-slate-400 border-l-2 border-neon-cyan pl-3 py-0.5">"${escapeHtml(node.receiptQuote)}"</blockquote>`
                    : ''
                }
                ${
                  node.receiptSource
                    ? `<div class="mt-1 text-[11px] font-mono text-slate-500">Sumber: ${escapeHtml(node.receiptSource)}</div>`
                    : ''
                }
              </div>
            `;
              })
              .join('')}
          </div>
        </div>
      `;
    }

    const html = `<!DOCTYPE html>
<html lang="id" class="dark">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="google-adsense-account" content="ca-pub-4090835276472949"/>
  <title>${title} — NgeGhibah.com</title>
  <meta name="description" content="${excerpt}"/>
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1"/>
  <link rel="canonical" href="${canonicalUrl}"/>
  
  <meta property="og:title" content="${title}"/>
  <meta property="og:description" content="${excerpt}"/>
  <meta property="og:url" content="${canonicalUrl}"/>
  <meta property="og:locale" content="id_ID"/>
  <meta property="og:type" content="article"/>
  <meta property="og:image" content="${heroImage}"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="628"/>
  <meta property="article:published_time" content="${publishedAt}"/>
  <meta property="article:author" content="${authorName}"/>
  <meta property="article:section" content="${categoryLabel}"/>

  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@NgeGhibah"/>
  <meta name="twitter:title" content="${title}"/>
  <meta name="twitter:description" content="${excerpt}"/>
  <meta name="twitter:image" content="${heroImage}"/>

  <link rel="icon" href="/favicon.ico"/>
  <link rel="icon" href="/icon.svg" type="image/svg+xml"/>
  <link rel="apple-touch-icon" href="/apple-icon.svg"/>
  <link rel="preload" as="image" href="${heroImage}" fetchPriority="high"/>
  <link rel="stylesheet" href="/_next/static/css/6c3f4a06438f2eb0.css"/>
  <style>
    :root {
      --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
      --font-display: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    }
    .bg-obsidian { background-color: #0B0F17; }
    .bg-obsidian-deep { background-color: #06090F; }
    .bg-velvet { background-color: #131B2E; }
    .bg-velvet-card { background-color: #162036; }
    .border-velvet-border { border-color: #23304E; }
    .text-neon-pink { color: #FF2E93; }
    .text-neon-cyan { color: #00F0FF; }
    .text-neon-amber { color: #FFB800; }
    .text-neon-green { color: #10B981; }
    .bg-neon-pink { background-color: #FF2E93; }
    .bg-neon-cyan { background-color: #00F0FF; }
    .shadow-card-glow { box-shadow: 0 8px 32px 0 rgba(0, 240, 255, 0.05), 0 0 0 1px rgba(35, 48, 78, 0.4); }
    /* Rich Editorial Typography & Anti-Wall-of-Text Formatting */
    .prose {
      color: #CBD5E1;
      font-size: 1.05rem;
      line-height: 1.85;
    }
    .prose h2 {
      color: #FFFFFF !important;
      font-size: 1.5rem !important;
      line-height: 2rem !important;
      font-weight: 800 !important;
      letter-spacing: -0.025em !important;
      margin-top: 2.75rem !important;
      margin-bottom: 1.25rem !important;
      padding-bottom: 0.5rem !important;
      border-bottom: 1px solid rgba(255, 46, 147, 0.3) !important;
      display: flex !important;
      align-items: center !important;
      gap: 0.6rem !important;
    }
    .prose h2::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 1.35rem;
      background: #FF2E93;
      border-radius: 9999px;
      flex-shrink: 0;
    }
    .prose h3 {
      color: #00F0FF !important;
      font-size: 1.25rem !important;
      font-weight: 700 !important;
      margin-top: 2rem !important;
      margin-bottom: 0.85rem !important;
    }
    .prose p {
      color: #CBD5E1 !important;
      font-size: 1.05rem !important;
      line-height: 1.85 !important;
      margin-bottom: 1.35rem !important;
    }
    .prose blockquote {
      border-left: 4px solid #FF2E93 !important;
      background: rgba(255, 46, 147, 0.06) !important;
      padding: 1rem 1.25rem !important;
      border-radius: 0 0.75rem 0.75rem 0 !important;
      font-style: italic !important;
      color: #E2E8F0 !important;
      margin: 1.75rem 0 !important;
    }
    .prose table {
      width: 100% !important;
      border-collapse: separate !important;
      border-spacing: 0 !important;
      margin: 2rem 0 !important;
      border-radius: 0.75rem !important;
      overflow: hidden !important;
      border: 1px solid #23304E !important;
      background: #111724 !important;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3) !important;
    }
    .prose th {
      background: #162036 !important;
      color: #00F0FF !important;
      font-weight: 700 !important;
      text-transform: uppercase !important;
      font-size: 0.75rem !important;
      letter-spacing: 0.05em !important;
      padding: 0.85rem 1rem !important;
      border-bottom: 1px solid #23304E !important;
      text-align: left !important;
    }
    .prose td {
      padding: 0.85rem 1rem !important;
      font-size: 0.875rem !important;
      color: #E2E8F0 !important;
      border-bottom: 1px solid rgba(35, 48, 78, 0.5) !important;
      line-height: 1.5 !important;
    }
    .prose tr:last-child td {
      border-bottom: none !important;
    }
    .prose tr:hover td {
      background: rgba(255, 46, 147, 0.04) !important;
    }
    .summary-box {
      background: linear-gradient(135deg, rgba(19, 27, 46, 0.95), rgba(22, 32, 54, 0.95)) !important;
      border: 1px solid rgba(255, 184, 0, 0.4) !important;
      border-left: 5px solid #FFB800 !important;
      border-radius: 1rem !important;
      padding: 1.25rem 1.5rem !important;
      margin: 1.75rem 0 2rem 0 !important;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3) !important;
    }
    .summary-box p:first-child {
      color: #FFB800 !important;
      font-weight: 800 !important;
      font-size: 0.85rem !important;
      letter-spacing: 0.05em !important;
      text-transform: uppercase !important;
      margin-bottom: 0.35rem !important;
    }
    .summary-box p:last-child {
      color: #F1F5F9 !important;
      font-size: 0.95rem !important;
      line-height: 1.6 !important;
      margin: 0 !important;
    }
  </style>

  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  <script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>
</head>
<body class="min-h-screen bg-obsidian text-slate-100 flex flex-col font-sans selection:bg-neon-pink selection:text-white">
  <!-- Unified Header -->
  <header class="sticky top-0 z-40 w-full bg-[#0B0F17]/95 backdrop-blur-md border-b border-white/[0.08]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-6">
          <a class="inline-flex items-center gap-2 sm:gap-2.5 group select-none shrink-0" href="/">
            <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl relative shrink-0 overflow-hidden bg-gradient-to-tr from-velvet to-obsidian border border-slate-700/80 group-hover:border-neon-pink/70 transition-all duration-300 flex items-center justify-center p-1 sm:p-1.5">
              <svg viewBox="0 0 512 512" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#FF2E93"></stop>
                    <stop offset="100%" stop-color="#00F0FF"></stop>
                  </linearGradient>
                </defs>
                <path d="M365 185 C335 125 260 115 195 140 C125 170 95 245 110 320 C125 395 195 440 275 430 C345 420 395 375 405 305 L265 305 C252 305 245 295 245 282 L245 258 C245 245 252 238 265 238 L435 238 C448 238 458 248 458 262 C458 355 385 465 260 465 C145 465 55 385 45 265 C35 145 135 50 255 50 C325 50 390 85 425 140 C432 152 428 168 415 175 L382 192 C374 196 368 192 365 185 Z" fill="url(#logoInnerGrad)"></path>
                <circle cx="410" cy="115" r="24" fill="#00F0FF"></circle>
                <circle cx="256" cy="256" r="20" fill="#00F0FF"></circle>
              </svg>
            </div>
            <div class="flex flex-col shrink-0">
              <div class="font-display font-black tracking-tight leading-none whitespace-nowrap text-lg sm:text-2xl">
                <span class="text-white">Nge</span><span class="text-neon-pink group-hover:text-[#ff4fa5] transition-colors">Ghibah</span><span class="text-neon-cyan font-bold text-xs sm:text-base">.com</span>
              </div>
              <span class="text-[9px] font-mono tracking-widest text-slate-400 uppercase hidden sm:block mt-0.5 whitespace-nowrap">KRONOLOGI & VERIFIKASI</span>
            </div>
          </a>
          <nav class="hidden lg:flex items-center gap-1">
            <a class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-slate-300 hover:text-white hover:bg-white/5" href="/kategori/seleb-lokal">Seleb Lokal</a>
            <a class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-slate-300 hover:text-white hover:bg-white/5" href="/kategori/hollywood-barat">Hollywood & Barat</a>
            <a class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-slate-300 hover:text-white hover:bg-white/5" href="/kategori/kpop-asia">K-Pop & Asia</a>
            <a class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-slate-300 hover:text-white hover:bg-white/5" href="/kategori/creator-tiktok">Creator & TikTok</a>
            <a class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-slate-300 hover:text-white hover:bg-white/5" href="/seleb">Direktori Seleb</a>
            <a class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-slate-300 hover:text-white hover:bg-white/5" href="/kamus">Kamus Ghibah</a>
            <a class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-slate-300 hover:text-white hover:bg-white/5" href="/hak-jawab">Hak Jawab</a>
          </nav>
        </div>
        <div class="flex items-center gap-2 sm:gap-3">
          <a href="/pedoman-media-siber" class="hidden sm:inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors">
            <span>STANDAR PERS SIBER</span>
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- Article Body -->
  <main class="flex-1">
    <article class="min-h-screen py-6 sm:py-10 pb-28 sm:pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumbs -->
        <nav aria-label="Breadcrumb" class="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-6 overflow-x-auto no-scrollbar">
          <a class="hover:text-neon-cyan transition-colors" href="/">Beranda</a>
          <span>/</span>
          <a class="hover:text-neon-cyan transition-colors" href="/kategori/${category}">${categoryLabel}</a>
          <span>/</span>
          <span class="text-slate-300 truncate max-w-[200px] sm:max-w-md">${title}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div class="lg:col-span-8 space-y-6 sm:space-y-8">
            <div class="space-y-4">
              <div class="flex flex-wrap items-center gap-2">
                <a class="bg-neon-pink/15 text-neon-pink border border-neon-pink/30 hover:bg-neon-pink/25 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-colors" href="/kategori/${category}">
                  ${categoryLabel}
                </a>
                <span class="text-slate-400 text-xs font-mono">${formattedDate}</span>
                <span class="text-slate-500">•</span>
                <span class="text-slate-400 text-xs font-mono text-neon-cyan">${readingTime} Menit Baca</span>
              </div>

              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display leading-tight tracking-tight">
                ${title}
              </h1>

              <div class="flex items-center justify-between gap-4 py-3 border-y border-slate-800">
                <div class="flex items-center gap-3">
                  <div class="relative w-10 h-10 rounded-full overflow-hidden border border-neon-cyan">
                    <img src="${authorAvatar}" alt="${authorName}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=75';"/>
                  </div>
                  <div>
                    <a class="text-sm font-semibold text-white hover:text-neon-pink transition-colors block" href="/redaksi">${authorName}</a>
                    <span class="text-xs text-slate-400 font-mono">${authorRole}</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <button onclick="navigator.clipboard.writeText(window.location.href);alert('Tautan disalin!');" class="px-3 py-1.5 rounded-lg text-xs font-mono border border-slate-700 bg-velvet hover:bg-slate-800 text-slate-300">
                    Salin Link
                  </button>
                </div>
              </div>
            </div>

            <!-- Ghibah Meter Card -->
            <div class="rounded-xl border border-velvet-border bg-gradient-to-r from-velvet/90 via-velvet-card/80 to-velvet/90 p-4 sm:p-5 shadow-card-glow backdrop-blur-md">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div class="flex items-center gap-2.5 flex-wrap">
                  <span class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                    <span class="text-neon-pink">●</span> GHIBAH METER™ VERIFIKASI
                  </span>
                  <span class="inline-flex items-center font-mono uppercase tracking-wider rounded-md border font-semibold bg-emerald-950/70 text-emerald-400 border-emerald-500/40 text-[10px] px-2 py-0.5 gap-1">
                    <span>${meterStatus}</span>
                  </span>
                </div>
              </div>

              <div class="my-3 space-y-1.5">
                <div class="flex justify-between items-center text-xs font-mono">
                  <span class="text-emerald-400 font-semibold">Fakta & Dokumen: ${factPct}%</span>
                  <span class="text-amber-400 font-semibold">Spekulasi / Rumor: ${rumorPct}%</span>
                </div>
                <div class="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden flex p-0.5 border border-slate-700/60 shadow-inner">
                  <div style="width: ${factPct}%" class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-l-full"></div>
                  <div style="width: ${rumorPct}%" class="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-r-full"></div>
                </div>
              </div>

              <div class="mt-2 text-xs text-slate-300 leading-relaxed">
                <strong class="text-white font-medium">Metodologi Kurasi: </strong>${meterDesc}
              </div>
            </div>

            <!-- Hero Image with SafeImage error fallback -->
            <div class="space-y-2">
              <div class="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-900 border border-velvet-border shadow-card-glow">
                <img src="${heroImage}" alt="${title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80';"/>
              </div>
              <p class="text-[11px] font-mono text-slate-400 italic text-center">${imageCaption}</p>
            </div>

            <!-- Content HTML with In-Article AdSense & Formatting -->
            <div class="prose prose-invert max-w-none prose-headings:font-display prose-headings:text-white prose-p:leading-relaxed prose-a:text-neon-cyan text-slate-200">
              ${styledContentHtml}
            </div>

            <!-- Timeline -->
            ${timelineHtml}

            <!-- Hak Jawab Notice -->
            <div class="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-obsidian-deep/80 text-xs sm:text-sm text-slate-400">
              <strong class="text-white block mb-1">Klausul Asas Praduga Tak Bersalah & Hak Jawab:</strong>
              NgeGhibah.com menjunjung tinggi Kode Etik Jurnalistik dan UU Pers No. 40/1999. Seluruh liputan disusun secara berimbang dan faktual. Pihak-pihak terkait yang ingin menyampaikan hak jawab atau klarifikasi resmi dapat menghubungi redaksi melalui email <a href="mailto:redaksi@ngeghibah.com" class="text-neon-cyan hover:underline">redaksi@ngeghibah.com</a> atau halaman <a href="/hak-jawab" class="text-neon-cyan hover:underline">Hak Jawab</a>.
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-4 space-y-6">
            <div class="p-5 rounded-2xl border border-slate-800 bg-velvet/60">
              <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-neon-pink mb-3">PEDOMAN REDAKSI</h3>
              <p class="text-xs text-slate-300 leading-relaxed mb-3">
                NgeGhibah memisahkan antara fakta digital terverifikasi dan rumor opini. Setiap klaim diuji melalui timeline dan jejak forensik media siber.
              </p>
              <a href="/pedoman-pemeriksaan-fakta" class="text-xs font-mono text-neon-cyan hover:underline block">Pelajari Metodologi Fact-Check &rarr;</a>
            </div>

            <!-- Sidebar Sticky AdSense Slot -->
            <div class="my-6 rounded-2xl border border-dashed border-slate-700/60 bg-velvet/40 p-4 text-center sticky top-24">
              <div class="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2 px-1">
                <span>IKLAN SPONSOR</span>
                <span>ADS</span>
              </div>
              <div class="min-h-[250px] flex items-center justify-center">
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-4090835276472949"
                     data-ad-slot="artikel-sidebar-sticky"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </main>

  <!-- Footer -->
  <footer class="mt-auto border-t border-slate-800/80 bg-obsidian-deep py-8 text-xs text-slate-400">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>&copy; 2026 NgeGhibah.com — Radar Pop-Kultur: Data, Kronologi & Verifikasi Fakta.</div>
      <div class="flex flex-wrap gap-4 text-xs font-mono">
        <a href="/pedoman-media-siber" class="hover:text-neon-cyan">Pedoman Media Siber</a>
        <a href="/kode-etik" class="hover:text-neon-cyan">Kode Etik</a>
        <a href="/hak-jawab" class="hover:text-neon-cyan">Hak Jawab</a>
        <a href="/kontak-kami" class="hover:text-neon-cyan">Kontak</a>
      </div>
    </div>
  </footer>

  <!-- Deferred AdSense Interaction Loader (Core Web Vitals Guardrail) -->
  <script>
    (function() {
      var adsLoaded = false;
      function loadAds() {
        if (adsLoaded) return;
        adsLoaded = true;
        var s = document.createElement('script');
        s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4090835276472949';
        s.async = true;
        s.crossOrigin = 'anonymous';
        s.onload = function() {
          var insElements = document.querySelectorAll('.adsbygoogle');
          insElements.forEach(function() {
            try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
          });
        };
        document.head.appendChild(s);
        window.removeEventListener('scroll', loadAds);
        window.removeEventListener('click', loadAds);
        window.removeEventListener('touchstart', loadAds);
        window.removeEventListener('mousemove', loadAds);
      }
      setTimeout(function() {
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(loadAds);
        } else {
          loadAds();
        }
      }, 3500);
      window.addEventListener('scroll', loadAds, { passive: true, once: true });
      window.addEventListener('click', loadAds, { passive: true, once: true });
      window.addEventListener('touchstart', loadAds, { passive: true, once: true });
      window.addEventListener('mousemove', loadAds, { passive: true, once: true });
    })();
  </script>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error: any) {
    return next();
  }
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDateId(isoStr: string): string {
  try {
    const d = new Date(isoStr);
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  } catch {
    return '11 Oktober 2026';
  }
}
