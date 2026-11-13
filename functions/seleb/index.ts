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
  env: Env;
  next: () => Promise<Response>;
}) => {
  const { env, next } = context;

  const staticRes = await next();
  if (staticRes.status !== 200 || !env.DB) {
    return staticRes;
  }

  try {
    const html = await staticRes.text();
    const { results: celebs } = await env.DB.prepare(
      'SELECT id, slug, name, stage_name, avatar, profession, drama_count, bio FROM celebrities ORDER BY updated_at DESC'
    ).all();

    if (!celebs || celebs.length === 0) {
      return new Response(html, {
        status: 200,
        headers: staticRes.headers,
      });
    }

    // Find all celebrity slugs already rendered in static HTML
    const missingCelebs = celebs.filter(
      (c: any) => !html.includes(`/seleb/${c.slug}`)
    );

    if (missingCelebs.length === 0) {
      return new Response(html, {
        status: 200,
        headers: staticRes.headers,
      });
    }

    // Generate dynamic card HTML for each missing celebrity
    const newCardsHtml = missingCelebs.map((c: any) => {
      const avatar = c.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
      const stageName = escapeHtml(c.stage_name);
      const name = escapeHtml(c.name);
      const profession = escapeHtml(c.profession || 'Figur Publik');
      const dramaCount = c.drama_count || 1;
      const bio = escapeHtml(c.bio || '');

      return `
      <div class="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-velvet/90 to-obsidian-deep p-5 shadow-xl transition-all duration-300 hover:border-neon-cyan/60 hover:-translate-y-1">
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30">
            <span class="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse"></span>
            ENTITAS BARU D1
          </span>
          <span class="text-[11px] font-mono text-neon-pink font-semibold">${dramaCount} Drama Tercatat</span>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="${avatar}" alt="${stageName}" class="w-16 h-16 rounded-2xl object-cover border-2 border-slate-700/60 shadow-md bg-slate-900" />
          <div class="min-w-0">
            <h2 class="font-display font-bold text-lg text-white group-hover:text-neon-cyan transition-colors truncate">${stageName}</h2>
            <p class="text-xs font-mono text-slate-400 truncate">${name}</p>
            <p class="text-xs text-neon-cyan font-mono mt-0.5 truncate">${profession}</p>
          </div>
        </div>
        <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">${bio}</p>
        <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <span class="text-[11px] font-mono text-slate-400">Dossier Digital</span>
          <a href="/seleb/${c.slug}" class="text-xs font-mono font-bold text-neon-cyan hover:text-white flex items-center gap-1">
            Buka Arsip &rarr;
          </a>
        </div>
      </div>
      `;
    }).join('\n');

    // Inject before grid closing or after grid opening
    const gridMarker = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">';
    let updatedHtml = html;
    const markerIndex = html.indexOf(gridMarker);
    if (markerIndex !== -1) {
      const insertPos = markerIndex + gridMarker.length;
      updatedHtml = html.slice(0, insertPos) + '\n' + newCardsHtml + '\n' + html.slice(insertPos);
    }

    return new Response(updatedHtml, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (err) {
    return staticRes;
  }
};
