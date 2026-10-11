import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Sparkles, Clock, Calendar, ChevronRight, Layers, Flame } from 'lucide-react';
import { MOCK_ARTICLES } from '@/data/mockData';
import { ArticleCategory } from '@/types';
import { GhibahMeterBadge } from '@/components/signature/GhibahMeterBadge';
import { Pagination } from '@/components/layout/Pagination';
import { AdSlot } from '@/components/ads/AdSlot';

interface CategoryPageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    page?: string;
  };
}

const CATEGORY_MAP: Record<
  string,
  { label: string; description: string; categoryKey: ArticleCategory }
> = {
  'seleb-lokal': {
    label: 'Selebriti Lokal',
    description:
      'Liputan mendalam, verifikasi fakta, dan rekonstruksi kronologi peristiwa artis, aktor, dan figur publik Indonesia.',
    categoryKey: 'seleb-lokal',
  },
  'hollywood-barat': {
    label: 'Hollywood & Barat',
    description:
      'Kupas tuntas isu A-list seleb Hollywood, perseteruan musisi internasional, dan kurasi berita DeuxMoi untuk netizen Indonesia.',
    categoryKey: 'hollywood-barat',
  },
  'kpop-asia': {
    label: 'K-Pop & Asia',
    description:
      'Radar tren idol K-Pop, drama aktor Korea Selatan, rumor asmara, dan dinamika fandom Asia berdasar jejak digital otentik.',
    categoryKey: 'kpop-asia',
  },
  'creator-tiktok': {
    label: 'Creator & TikTok',
    description:
      'Kronologi drama FYP TikTok, polemik endorsement selebgram, dan dinamika komunitas kreator digital tanpa bumbu sensasi.',
    categoryKey: 'creator-tiktok',
  },
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const cat = CATEGORY_MAP[params.slug];
  if (!cat) {
    return { title: 'Kategori Tidak Ditemukan' };
  }

  const canonicalUrl = `https://ngeghibah.com/kategori/${params.slug}`;

  return {
    title: `${cat.label} — Berita, Kronologi & Verifikasi Pop-Kultur`,
    description: cat.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'website',
      title: `${cat.label} | NgeGhibah.com`,
      description: cat.description,
      url: canonicalUrl,
    },
  };
}

export default function CategoryDetailPage({ params, searchParams }: CategoryPageProps) {
  const cat = CATEGORY_MAP[params.slug];
  if (!cat) {
    notFound();
  }

  const currentPage = Number(searchParams?.page) || 1;
  const articles = MOCK_ARTICLES.filter((a) => a.category === cat.categoryKey);

  // Pagination (e.g. 6 items per page)
  const pageSize = 6;
  const totalPages = Math.ceil(articles.length / pageSize) || 1;
  const paginatedArticles = articles.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb Trail */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <Link href="/" className="hover:text-white transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-neon-pink">Kategori</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-slate-300 font-bold">{cat.label}</span>
      </nav>

      {/* Header Banner Hub */}
      <header className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-velvet via-obsidian-deep to-velvet border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/15 text-neon-pink border border-neon-pink/30 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>HUB KATEGORI BERITA</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3">
            {cat.label}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {cat.description}
          </p>
        </div>

        {/* Category Pills Switcher */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-slate-500 mr-2">PILIH HUB:</span>
          {Object.entries(CATEGORY_MAP).map(([slugKey, c]) => {
            const isCurrent = slugKey === params.slug;
            return (
              <Link
                key={slugKey}
                href={`/kategori/${slugKey}`}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  isCurrent
                    ? 'bg-neon-pink text-white font-bold shadow-neon-pink'
                    : 'bg-velvet border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500'
                }`}
              >
                {c.label}
              </Link>
            );
          })}
        </div>
      </header>

      {/* Leaderboard AdSlot */}
      <div className="my-8">
        <AdSlot slotId="category-top-banner" format="banner" />
      </div>

      {/* Articles Grid */}
      {paginatedArticles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {paginatedArticles.map((art) => (
            <article
              key={art.id}
              className="group rounded-3xl bg-velvet/60 border border-slate-800 hover:border-neon-pink/50 overflow-hidden transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-neon-pink/5"
            >
              {/* Thumbnail with Ghibah Meter Badge overlay */}
              <Link href={`/artikel/${art.slug}`} className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 block">
                <img
                  src={art.heroImage}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <GhibahMeterBadge status={art.ghibahMeter.status} size="sm" />
                </div>
              </Link>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-2">
                    <span className="text-neon-cyan font-semibold">{art.categoryLabel}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{art.readingTimeMinutes} mnt baca</span>
                    </div>
                  </div>

                  <Link href={`/artikel/${art.slug}`}>
                    <h2 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-neon-pink transition-colors line-clamp-2 leading-snug mb-2">
                      {art.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-2">
                    <img
                      src={art.author.avatar}
                      alt={art.author.name}
                      className="w-5 h-5 rounded-full object-cover ring-1 ring-slate-700"
                    />
                    <span className="truncate max-w-[120px] text-slate-400">{art.author.name}</span>
                  </div>
                  <time dateTime={art.publishedAt}>
                    {new Date(art.publishedAt).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'short',
                    })}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-velvet/40 rounded-3xl border border-slate-800">
          <p className="text-slate-400 font-mono text-sm">
            Belum ada artikel dalam kategori ini. Tunggu update radar ghibah selanjutnya!
          </p>
        </div>
      )}

      {/* Unified Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath={`/kategori/${params.slug}`}
      />

      {/* Bottom AdSlot */}
      <div className="my-8">
        <AdSlot slotId="category-bottom-banner" format="banner" />
      </div>
    </div>
  );
}
