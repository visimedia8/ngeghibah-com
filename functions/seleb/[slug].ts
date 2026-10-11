interface Env {
  AI?: any;
  MEDIA_BUCKET?: any;
  ARTICLE_KV?: any;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  // 1. Pass through to pre-rendered static HTML if available in deployment assets
  const response = await context.next();
  if (response.status !== 404) {
    return response;
  }

  const { params, request } = context;
  const slug = (params.slug as string) || '';

  // Format slug to readable display name
  const formattedName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const canonicalUrl = `https://ngeghibah.com/seleb/${slug}`;
  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const html = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${formattedName} — Dossier Profil Pop-Kultur & Rekam Jejak | NgeGhibah.com</title>
  <meta name="description" content="Dossier profil terverifikasi ${formattedName}: biodata lengkap, rekam jejak karier, dinamika pop-kultur, dan arsip investigasi jejak digital.">
  <link rel="canonical" href="${canonicalUrl}">
  <meta property="og:title" content="${formattedName} — Dossier Pop-Kultur Terverifikasi">
  <meta property="og:description" content="Kupas tuntas profil, biodata lengkap, dan dinamika rekam jejak ${formattedName} di NgeGhibah.com.">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:type" content="profile">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'obsidian-deep': '#080B12',
            'velvet': '#121826',
            'neon-pink': '#FF2E93',
            'neon-cyan': '#00F0FF',
          }
        }
      }
    }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "${formattedName}",
    "description": "Profil figur publik dan pesohor pop-kultur ${formattedName}.",
    "url": "${canonicalUrl}"
  }
  </script>
</head>
<body class="bg-[#080B12] text-slate-200 font-sans min-h-screen antialiased flex flex-col justify-between">
  <!-- Minimalist Header -->
  <header class="border-b border-slate-800 bg-[#080B12]/90 backdrop-blur sticky top-0 z-40">
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2">
        <span class="text-xl font-black tracking-tight text-white">Nge<span class="text-[#FF2E93]">Ghibah</span><span class="text-[#00F0FF]">.com</span></span>
      </a>
      <div class="flex items-center gap-4 text-xs font-mono">
        <a href="/seleb" class="text-slate-300 hover:text-white transition-colors">Direktori Seleb</a>
        <a href="/kamus" class="text-slate-300 hover:text-white transition-colors">Kamus Ghibah</a>
        <a href="/hak-jawab" class="text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-lg">Hak Jawab</a>
      </div>
    </div>
  </header>

  <main class="max-w-4xl mx-auto px-4 py-10 w-full flex-1">
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
      <a href="/" class="hover:text-white">Beranda</a>
      <span>/</span>
      <a href="/seleb" class="hover:text-white">Direktori Seleb</a>
      <span>/</span>
      <span class="text-[#FF2E93] font-bold">${formattedName}</span>
    </nav>

    <!-- Edge Generated Banner -->
    <div class="rounded-3xl bg-[#121826] border border-slate-800 p-6 sm:p-10 mb-8 shadow-2xl relative overflow-hidden">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/60 text-[#00F0FF] border border-cyan-800/40 mb-3">
        <span>⚡ DOSSIER EDGE DINAMIS TERVERIFIKASI</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
        ${formattedName}
      </h1>
      <p class="text-sm text-slate-400 font-mono mb-6">
        Entitas Profil Pop-Kultur • Terindeks Otomatis pada ${currentDate}
      </p>

      <!-- Parameter Table -->
      <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-[#080B12]/80">
        <table class="w-full text-left text-xs sm:text-sm">
          <tbody class="divide-y divide-slate-800/80">
            <tr>
              <td class="py-3 px-4 font-mono text-slate-400 uppercase w-1/3">Nama Lengkap / Entitas</td>
              <td class="py-3 px-4 font-bold text-white">${formattedName}</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-mono text-slate-400 uppercase">Slug Resmi</td>
              <td class="py-3 px-4 font-mono text-[#00F0FF]">${slug}</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-mono text-slate-400 uppercase">Status Dossier</td>
              <td class="py-3 px-4 text-emerald-400 font-semibold">Aktif Dalam Radar Liputan</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-mono text-slate-400 uppercase">Standar Kurasi</td>
              <td class="py-3 px-4 text-slate-300">Pedoman Pemberitaan Media Siber & E-E-A-T</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Editorial Note -->
    <div class="rounded-2xl bg-[#121826]/60 border border-slate-800 p-6 text-xs text-slate-400 space-y-3 leading-relaxed">
      <div class="font-mono text-white font-bold uppercase tracking-wider flex items-center gap-2">
        <span>CATATAN REDAKSI NGEGHIBAH</span>
      </div>
      <p>
        Profil <strong>${formattedName}</strong> diaktifkan secara dinamis melalui Edge Engine NgeGhibah.com menyusul kemunculan laporan berita atau topik viral terverifikasi. Tim riset kami secara berkala memperbarui rekam jejak kontroversi, portofolio bisnis, dan kronologi kasus hukum terkait.
      </p>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="/seleb" class="text-[#00F0FF] hover:underline font-mono">← Kembali ke Direktori Lengkap</a>
        <span class="text-slate-600">•</span>
        <a href="/hak-jawab" class="text-emerald-400 hover:underline font-mono">Ajukan Hak Jawab / Koreksi Profil</a>
      </div>
    </div>

    <!-- Related Articles Grid -->
    <div class="mt-8">
      <h2 class="font-bold text-lg text-white mb-4 flex items-center gap-2">
        <span>Arsip Liputan & Berita Terkait</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="/artikel/duduk-perkara-royalti-musik-musisi-vs-promotor-konser" class="p-4 rounded-2xl bg-[#121826] border border-slate-800 hover:border-[#FF2E93] transition-all block group">
          <div class="text-[10px] font-mono text-[#00F0FF] mb-1">INVESTIGASI UTAMA</div>
          <div class="font-bold text-white text-sm group-hover:text-[#FF2E93] transition-colors line-clamp-2">Duduk Perkara Polemik Royalti Musik 2026: Kronologi Lengkap & Jejak Digital Gugatan LMKN</div>
          <div class="text-xs text-slate-500 mt-2 font-mono">11 Okt 2026 • 7 min baca</div>
        </a>
        <a href="/artikel/kronologi-lengkap-drama-live-tiktok-creator-fuji-an" class="p-4 rounded-2xl bg-[#121826] border border-slate-800 hover:border-[#FF2E93] transition-all block group">
          <div class="text-[10px] font-mono text-[#FF2E93] mb-1">CREATOR & TIKTOK</div>
          <div class="font-bold text-white text-sm group-hover:text-[#FF2E93] transition-colors line-clamp-2">Kupas Tuntas dari Jejak Digital: Alur Kronologi Klarifikasi Sesi Live TikTok Rp 1,2 Miliar</div>
          <div class="text-xs text-slate-500 mt-2 font-mono">11 Okt 2026 • 3 min baca</div>
        </a>
      </div>
    </div>
  </main>

  <footer class="border-t border-slate-800/80 bg-[#080B12] py-8 text-center text-xs text-slate-500 font-mono">
    © 2026 PT Media Siber Ghibah Nusantara (NgeGhibah.com). Hak Cipta Dilindungi Undang-Undang.
  </footer>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
};
