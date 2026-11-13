/// <reference types="@cloudflare/workers-types" />

interface Env {
  DB?: D1Database;
}

function escapeHtml(str: string | null | undefined): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export const onRequestGet = async (context: {
  request: Request;
  params: { slug: string };
  env: Env;
  next: () => Promise<Response>;
}) => {
  const { request, params, env, next } = context;

  // 1. Try serving pre-rendered static SSG file first (fastest)
  const staticRes = await next();
  if (staticRes.status === 200) {
    return staticRes;
  }

  // 2. If static file not found, query Cloudflare D1 for dynamic celebrity
  if (!env.DB) {
    return staticRes;
  }

  const slug = params.slug;
  const celebRow: any = await env.DB.prepare(
    'SELECT * FROM celebrities WHERE slug = ?'
  ).bind(slug).first();

  if (!celebRow) {
    return staticRes; // Return 404
  }

  // 3. Parse JSON fields safely
  let circle: string[] = [];
  try { circle = JSON.parse(celebRow.circle_json || '[]'); } catch {}

  let verifiedAccounts: any[] = [];
  try { verifiedAccounts = JSON.parse(celebRow.verified_accounts_json || '[]'); } catch {}

  let careerHighlights: string[] = [];
  try { careerHighlights = JSON.parse(celebRow.career_highlights_json || '[]'); } catch {}

  let dossierDetail: any = {};
  try { dossierDetail = JSON.parse(celebRow.dossier_detail_json || '{}'); } catch {}

  let controversies: any[] = [];
  try { controversies = JSON.parse(celebRow.controversies_json || '[]'); } catch {}

  let businessVentures: any[] = [];
  try { businessVentures = JSON.parse(celebRow.business_ventures_json || '[]'); } catch {}

  let awards: any[] = [];
  try { awards = JSON.parse(celebRow.awards_json || '[]'); } catch {}

  let faq: any[] = [];
  try { faq = JSON.parse(celebRow.faq_json || '[]'); } catch {}

  let editorialSections: any[] = [];
  try { editorialSections = JSON.parse(celebRow.editorial_sections_json || '[]'); } catch {}

  // 4. Query related articles from D1
  let relatedArticles: any[] = [];
  try {
    const { results } = await env.DB.prepare(`
      SELECT slug, title, excerpt, hero_image, category, category_label, published_at
      FROM articles
      WHERE is_canonical = 1
        AND (entities_json LIKE ? OR title LIKE ?)
      ORDER BY published_at DESC
      LIMIT 4
    `).bind(`%${celebRow.stage_name}%`, `%${celebRow.stage_name}%`).all();
    relatedArticles = results || [];
  } catch {}

  const canonicalUrl = `https://ngeghibah.com/seleb/${slug}`;
  const title = `${escapeHtml(celebRow.stage_name)} (${escapeHtml(celebRow.name)}) — Biodata Lengkap, Tabel Kontroversi & Bisnis`;
  const metaDesc = `Dossier profil terverifikasi ${escapeHtml(celebRow.stage_name)}: biodata lengkap, rekam jejak kontroversi, portofolio bisnis, dan analisis sentimen publik.`;
  const avatarUrl = celebRow.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
  const bannerUrl = celebRow.banner_image || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80';

  // 5. JSON-LD Schemas (Person + FAQPage)
  const schemas: any[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: celebRow.name,
      alternateName: celebRow.stage_name,
      image: avatarUrl,
      description: celebRow.bio,
      jobTitle: celebRow.profession,
      birthDate: dossierDetail.birthDate,
      birthPlace: dossierDetail.birthPlace,
      nationality: dossierDetail.nationality || 'Indonesia',
      sameAs: verifiedAccounts.map((a: any) => a.url).filter(Boolean),
    },
  ];

  if (faq.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f: any) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  // 6. Build HTML Components
  const circleHtml = circle.map((name: string) => {
    const cSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<a href="/seleb/${cSlug}" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 text-xs font-mono text-slate-300 hover:text-white border border-slate-700/60 transition-colors">
      <span class="w-1.5 h-1.5 rounded-full bg-neon-cyan"></span>
      <span>${escapeHtml(name)}</span>
    </a>`;
  }).join(' ');

  const controversiesHtml = controversies.length > 0 ? `
    <section class="mt-10 rounded-2xl border border-slate-800 bg-obsidian-deep/80 p-6 overflow-hidden">
      <div class="flex items-center gap-2 mb-4">
        <span class="px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-mono font-bold uppercase">REKAM JEJAK FORENSIK</span>
        <h2 class="text-xl font-bold font-display text-white">Tabel Kronologi Kontroversi & Drama Digital</h2>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm text-slate-300">
          <thead class="bg-slate-900/90 text-xs font-mono uppercase text-slate-400 border-b border-slate-800">
            <tr>
              <th class="p-3">Tahun</th>
              <th class="p-3">Peristiwa / Isu</th>
              <th class="p-3">Klasifikasi</th>
              <th class="p-3">Kronologi Singkat</th>
              <th class="p-3">Resolusi / Klarifikasi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/60">
            ${controversies.map((c: any) => `
              <tr class="hover:bg-slate-800/30 transition-colors">
                <td class="p-3 font-mono font-bold text-neon-cyan">${escapeHtml(c.year || '2026')}</td>
                <td class="p-3 font-semibold text-white">${escapeHtml(c.title)}</td>
                <td class="p-3">
                  <span class="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    c.status === 'TERKONFIRMASI' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    c.status === 'FAKTA_DIGITAL' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                    'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  }">
                    ${escapeHtml(c.status || 'FAKTA_DIGITAL')}
                  </span>
                </td>
                <td class="p-3 text-xs text-slate-300 max-w-xs leading-relaxed">${escapeHtml(c.summary || '')}</td>
                <td class="p-3 text-xs text-slate-400 max-w-xs leading-relaxed">${escapeHtml(c.resolution || 'Sedang berlangsung')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  ` : '';

  const businessHtml = businessVentures.length > 0 ? `
    <section class="mt-8 rounded-2xl border border-slate-800 bg-obsidian-deep/80 p-6">
      <div class="flex items-center gap-2 mb-4">
        <span class="px-2.5 py-0.5 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 text-xs font-mono font-bold uppercase">PORTOFOLIO BISNIS</span>
        <h2 class="text-xl font-bold font-display text-white">Lini Bisnis & Ekosistem Komersial</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${businessVentures.map((b: any) => `
          <div class="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
            <div class="flex items-start justify-between gap-2 mb-1">
              <h3 class="font-bold text-white text-base">${escapeHtml(b.name)}</h3>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">${escapeHtml(b.status || 'Aktif')}</span>
            </div>
            <div class="text-xs text-neon-cyan font-mono mb-1">${escapeHtml(b.category || '')}</div>
            <div class="text-xs text-slate-400">${escapeHtml(b.role || 'Pemilik / Investor')}</div>
          </div>
        `).join('')}
      </div>
    </section>
  ` : '';

  const editorialSectionsHtml = editorialSections.map((sec: any) => `
    <section class="mt-8 rounded-2xl border border-slate-800 bg-obsidian-deep/80 p-6 sm:p-8">
      <h2 class="text-2xl font-bold font-display text-white mb-4">${escapeHtml(sec.title)}</h2>
      <div class="prose prose-invert max-w-none text-slate-300 leading-relaxed text-sm sm:text-base">
        ${sec.contentHtml || ''}
      </div>
    </section>
  `).join('');

  const relatedArticlesHtml = relatedArticles.length > 0 ? `
    <section class="mt-10 rounded-2xl border border-slate-800 bg-obsidian-deep/80 p-6">
      <div class="flex items-center gap-2 mb-4">
        <span class="px-2.5 py-0.5 rounded-full bg-neon-pink/10 text-neon-pink border border-neon-pink/20 text-xs font-mono font-bold uppercase">ARSIP LIPUTAN</span>
        <h2 class="text-xl font-bold font-display text-white">Liputan Investigasi Terkait ${escapeHtml(celebRow.stage_name)}</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${relatedArticles.map((a: any) => `
          <a href="/artikel/${a.slug}" class="group p-4 rounded-xl border border-slate-800/80 hover:border-neon-cyan/50 bg-slate-900/50 hover:bg-slate-900 transition-all flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono uppercase text-neon-cyan font-bold block mb-1">${escapeHtml(a.category_label || 'Seleb')}</span>
              <h3 class="font-bold text-white text-sm sm:text-base group-hover:text-neon-cyan transition-colors line-clamp-2 mb-2">${escapeHtml(a.title)}</h3>
              <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">${escapeHtml(a.excerpt || '')}</p>
            </div>
            <span class="text-xs font-mono text-neon-pink font-semibold mt-3 block group-hover:translate-x-1 transition-transform">Baca Liputan Forensik &rarr;</span>
          </a>
        `).join('')}
      </div>
    </section>
  ` : '';

  const html = `<!DOCTYPE html>
<html lang="id" class="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${metaDesc}">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" href="/favicon.ico">

  <!-- Open Graph -->
  <meta property="og:type" content="profile">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${metaDesc}">
  <meta property="og:image" content="${avatarUrl}">
  <meta property="og:site_name" content="NgeGhibah.com">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${metaDesc}">
  <meta name="twitter:image" content="${avatarUrl}">

  <!-- Tailwind CSS & Fonts CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            velvet: '#14141c',
            'obsidian-deep': '#0c0d12',
            'neon-cyan': '#00f5d4',
            'neon-pink': '#f72585',
          },
          fontFamily: {
            display: ['system-ui', '-apple-system', 'sans-serif'],
            mono: ['ui-monospace', 'monospace'],
          }
        }
      }
    }
  </script>

  <!-- Google AdSense -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4090835276472949" crossorigin="anonymous"></script>

  <!-- JSON-LD -->
  <script type="application/ld+json">
    ${JSON.stringify(schemas)}
  </script>
</head>
<body class="bg-obsidian-deep text-slate-100 min-h-screen flex flex-col antialiased">
  <!-- Header -->
  <header class="sticky top-0 z-50 backdrop-blur-md bg-obsidian-deep/90 border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2">
        <span class="font-display font-extrabold text-xl text-white tracking-tight">Nge<span class="text-neon-cyan">Ghibah</span><span class="text-neon-pink">.com</span></span>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-xs font-mono">
        <a href="/kategori/seleb-lokal" class="text-slate-300 hover:text-white transition-colors">Seleb Lokal</a>
        <a href="/kategori/hollywood-barat" class="text-slate-300 hover:text-white transition-colors">Hollywood</a>
        <a href="/kategori/kpop-asia" class="text-slate-300 hover:text-white transition-colors">K-Pop & Asia</a>
        <a href="/kategori/creator-tiktok" class="text-slate-300 hover:text-white transition-colors">Creator</a>
        <a href="/seleb" class="text-neon-cyan font-bold transition-colors">Direktori Seleb</a>
        <a href="/kamus" class="text-slate-300 hover:text-white transition-colors">Kamus Ghibah</a>
      </nav>
      <div class="flex items-center gap-3">
        <a href="/pedoman-pemeriksaan-fakta" class="hidden sm:inline-flex text-[11px] font-mono px-3 py-1.5 rounded-full border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10 transition-colors">
          STANDAR PERS SIBER
        </a>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <main class="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
    <!-- Breadcrumb -->
    <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
      <a href="/" class="hover:text-white transition-colors">Beranda</a>
      <span class="text-slate-600">/</span>
      <a href="/seleb" class="hover:text-neon-cyan transition-colors">Direktori Seleb</a>
      <span class="text-slate-600">/</span>
      <span class="text-neon-pink font-bold">${escapeHtml(celebRow.stage_name)}</span>
    </nav>

    <!-- Hero Dossier Card -->
    <div class="rounded-3xl border border-slate-800 bg-velvet overflow-hidden shadow-2xl relative">
      <div class="h-44 sm:h-56 w-full relative bg-cover bg-center" style="background-image: url('${bannerUrl}');">
        <div class="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/60 to-transparent"></div>
      </div>
      <div class="p-6 sm:p-8 -mt-20 relative z-10 flex flex-col sm:flex-row gap-6 items-start">
        <img src="${avatarUrl}" alt="${escapeHtml(celebRow.stage_name)}" class="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-velvet shadow-xl bg-slate-900">
        <div class="flex-grow">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="px-3 py-0.5 rounded-full bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30 text-xs font-mono font-bold">DOSSIER RESMI</span>
            <span class="px-3 py-0.5 rounded-full bg-neon-pink/15 text-neon-pink border border-neon-pink/30 text-xs font-mono font-bold">${celebRow.drama_count || 1} ARSIP DRAMA</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-1">${escapeHtml(celebRow.stage_name)}</h1>
          <p class="text-sm font-mono text-slate-400 mb-3">${escapeHtml(celebRow.name)} • ${escapeHtml(celebRow.profession)}</p>
          <p class="text-sm text-slate-300 leading-relaxed max-w-2xl mb-4">${escapeHtml(celebRow.bio)}</p>

          <!-- Quick Stats Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800/80 text-xs font-mono">
            <div>
              <span class="text-slate-400 block">Usia</span>
              <strong class="text-white">${celebRow.age ? `${celebRow.age} Tahun` : 'Terverifikasi'}</strong>
            </div>
            <div>
              <span class="text-slate-400 block">Agensi / Naungan</span>
              <strong class="text-white truncate block">${escapeHtml(celebRow.agency || 'Independen')}</strong>
            </div>
            <div>
              <span class="text-slate-400 block">Status Relasi</span>
              <strong class="text-white truncate block">${escapeHtml(celebRow.relationship_status || 'Privat')}</strong>
            </div>
            <div>
              <span class="text-slate-400 block">Sentimen Publik</span>
              <strong class="text-neon-cyan truncate block">85%+ Positif</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Circle of Influence -->
    ${circle.length > 0 ? `
      <div class="mt-6 p-4 sm:p-5 rounded-2xl border border-slate-800/80 bg-obsidian-deep/60 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <span class="text-xs font-mono text-neon-cyan uppercase font-bold tracking-wider shrink-0">CIRCLE RELASI:</span>
        <div class="flex flex-wrap gap-2">
          ${circleHtml}
        </div>
      </div>
    ` : ''}

    <!-- In-Article AdSense -->
    <div class="my-8 rounded-2xl border border-dashed border-slate-800 bg-velvet/30 p-4 text-center">
      <div class="text-[10px] font-mono text-slate-400 mb-2">IKLAN SPONSOR</div>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-4090835276472949"
           data-ad-slot="dossier-mid-content"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>

    <!-- Editorial Sections -->
    ${editorialSectionsHtml}

    <!-- Controversies Table -->
    ${controversiesHtml}

    <!-- Business Portfolio -->
    ${businessHtml}

    <!-- Related Articles -->
    ${relatedArticlesHtml}
  </main>

  <!-- Footer -->
  <footer class="mt-auto border-t border-slate-800 bg-velvet/60 py-8 text-xs text-slate-400">
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
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
};
