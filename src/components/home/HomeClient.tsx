'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article, Celebrity, ArticleCategory } from '@/types';
import { TrendingRadarBar } from '@/components/signature/TrendingRadarBar';
import { GhibahMeterBadge } from '@/components/signature/GhibahMeterBadge';
import { CelebrityDossierCard } from '@/components/signature/CelebrityDossierCard';
import { AdSlot } from '@/components/ads/AdSlot';
import { getOptimizedImageUrl } from '@/lib/imageUtils';
import { SafeImage } from '@/components/ui/SafeImage';
import {
  Flame,
  Clock,
  FileText,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Layers,
  CheckCircle,
} from 'lucide-react';

interface HomeClientProps {
  initialArticles: Article[];
  celebrities: Celebrity[];
}

export const HomeClient: React.FC<HomeClientProps> = ({
  initialArticles,
  celebrities,
}) => {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [activeCategory, setActiveCategory] = useState<ArticleCategory>('semua');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(9);

  // Defer background fresh articles sync strictly to idle time to guarantee 0 TBT on page load
  useEffect(() => {
    let isMounted = true;
    const syncArticles = () => {
      fetch('/api/articles?limit=20')
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (!isMounted || !data?.articles?.length) return;
          setArticles((prev) => {
            const d1Articles: Article[] = data.articles;
            const map = new Map<string, Article>();
            d1Articles.forEach((a) => map.set(a.slug, a));
            prev.forEach((a) => {
              if (!map.has(a.slug)) {
                map.set(a.slug, a);
              }
            });
            const merged = Array.from(map.values());
            return merged.sort((a, b) => {
              const timeA = new Date(a.publishedAt).getTime() || 0;
              const timeB = new Date(b.publishedAt).getTime() || 0;
              return timeB - timeA;
            });
          });
        })
        .catch(() => {});
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = (window as any).requestIdleCallback(syncArticles, { timeout: 3500 });
      return () => {
        isMounted = false;
        if ('cancelIdleCallback' in window) (window as any).cancelIdleCallback(id);
      };
    } else {
      const timer = setTimeout(syncArticles, 3000);
      return () => {
        isMounted = false;
        clearTimeout(timer);
      };
    }
  }, []);

  const categories = [
    { id: 'semua', label: 'Semua Isu' },
    { id: 'seleb-lokal', label: 'Seleb Lokal' },
    { id: 'hollywood-barat', label: 'Hollywood & Barat' },
    { id: 'kpop-asia', label: 'K-Pop & Asia' },
    { id: 'creator-tiktok', label: 'Creator & TikTok' },
  ];

  // Sort articles strictly by publishedAt descending
  const sortedArticles = React.useMemo(() => {
    return [...articles].sort((a, b) => {
      const timeA = new Date(a.publishedAt).getTime() || 0;
      const timeB = new Date(b.publishedAt).getTime() || 0;
      return timeB - timeA;
    });
  }, [articles]);

  // Filtering logic
  const filteredArticles = sortedArticles.filter((article) => {
    if (activeCategory !== 'semua' && article.category !== activeCategory) {
      return false;
    }
    if (activeTag) {
      // Check if tag matches article entities, title, or tags
      const tagKeyword = activeTag.replace('#', '').toLowerCase();
      const matchEntity = article.entities.some((e) =>
        e.toLowerCase().includes(tagKeyword)
      );
      const matchTitle = article.title.toLowerCase().includes(tagKeyword);
      const matchExcerpt = article.excerpt.toLowerCase().includes(tagKeyword);
      if (!matchEntity && !matchTitle && !matchExcerpt) {
        return false;
      }
    }
    return true;
  });

  // Hero article & secondary articles for Bento Grid
  // Stable editorial spotlight: locked to initial curated articles to prevent layout shifts (CLS = 0)
  const heroArticle = initialArticles.find((a) => a.isHero) || initialArticles[0];
  const sideArticles = initialArticles.filter((a) => a.id !== heroArticle.id).slice(0, 2);

  const handleTagClick = (tag: string) => {
    setVisibleCount(9);
    if (activeTag === tag) {
      setActiveTag(null);
    } else {
      setActiveTag(tag);
      const targetElement = document.getElementById('kategori-feed');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* 1. Signature Component: Trending Radar Bar */}
      <TrendingRadarBar
        onTagClick={handleTagClick}
        activeTag={activeTag}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Active Tag Notice Banner (if filtered) */}
        {activeTag && (
          <div className="bg-neon-pink/10 border border-neon-pink/30 rounded-2xl p-4 flex items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white">
              <span className="font-mono text-neon-pink font-bold">MEMFILTER TAGAR:</span>
              <span className="font-semibold text-neon-cyan">{activeTag}</span>
              <span className="text-slate-400">
                ({filteredArticles.length} artikel terverifikasi ditemukan)
              </span>
            </div>
            <button
              onClick={() => setActiveTag(null)}
              className="text-xs font-mono text-slate-300 hover:text-white bg-slate-800 px-3 py-1 rounded-lg border border-slate-700"
            >
              Reset Filter ✕
            </button>
          </div>
        )}

        {/* 2. Hero Feature Section: Bento Grid */}
        <section aria-label="Berita Utama & Tren Panas">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-neon-pink animate-pulse" />
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight flex items-center gap-2">
                <span>SOROTAN UTAMA HARI INI</span>
                <span className="text-xs font-mono text-neon-cyan font-normal bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded-full hidden sm:inline">
                  Terverifikasi Dewan Redaksi
                </span>
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Update Real-Time 24/7
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Bento Hero Card (8 Cols) */}
            <div className="lg:col-span-8">
              <Link
                href={`/artikel/${heroArticle.slug}`}
                prefetch={false}
                className="group relative block overflow-hidden rounded-3xl border border-velvet-border bg-velvet shadow-card-glow hover:border-neon-pink/60 transition-all duration-300"
              >
                {/* Hero Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <SafeImage
                    src={heroArticle.heroImage}
                    alt={heroArticle.title}
                    category={heroArticle.category}
                    optimizedWidth={480}
                    optimizedQuality={70}
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="bg-obsidian/85 backdrop-blur-md text-white text-xs font-mono font-semibold px-3 py-1 rounded-full border border-white/10">
                      {heroArticle.categoryLabel}
                    </span>
                    <GhibahMeterBadge status={heroArticle.ghibahMeter.status} size="sm" />
                  </div>

                  {/* Mobile reading time badge on image */}
                  <div className="absolute bottom-4 right-4 bg-obsidian/80 backdrop-blur-sm text-slate-300 text-[11px] font-mono px-2.5 py-1 rounded-md flex items-center gap-1 border border-slate-700/60">
                    <Clock className="w-3.5 h-3.5 text-neon-pink" />
                    <span>{heroArticle.readingTimeMinutes} Menit Baca</span>
                  </div>
                </div>

                {/* Hero Text Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-display group-hover:text-neon-pink transition-colors leading-tight">
                    {heroArticle.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 line-clamp-2 leading-relaxed">
                    {heroArticle.excerpt}
                  </p>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-3">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden border border-neon-cyan">
                        <SafeImage
                          src={heroArticle.author.avatar}
                          alt={heroArticle.author.name}
                          type="avatar"
                          optimizedWidth={64}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-slate-200 font-medium font-sans">
                        {heroArticle.author.name}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="font-mono text-neon-cyan flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" />
                        {heroArticle.digitalReceiptsCount} Bukti Digital
                      </span>
                    </div>

                    <div className="hidden sm:flex items-center gap-1 text-neon-pink font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Baca Duduk Perkara</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Split Secondary Bento Cards (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {sideArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/artikel/${article.slug}`}
                  prefetch={false}
                  className="group relative flex-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-velvet-border bg-velvet p-5 sm:p-6 shadow-card-glow hover:border-neon-cyan/60 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono text-neon-cyan font-semibold uppercase tracking-wider">
                        {article.categoryLabel}
                      </span>
                      <GhibahMeterBadge status={article.ghibahMeter.status} size="sm" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-neon-cyan transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {article.readingTimeMinutes} mnt
                    </span>
                    <span className="text-neon-cyan group-hover:underline flex items-center gap-1">
                      <span>Detail</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AdSense Slot: Home Billboard (Reserved 0-CLS space) */}
        <AdSlot slotId="home-billboard-lead" format="banner" />

        {/* 3. Celebrity Spotlight Carousel */}
        <section aria-label="Celebrity Dossier Spotlight">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-neon-pink" />
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                CELEBRITY DOSSIER DIRECTORY
              </h2>
            </div>
            <Link
              href="/seleb"
              className="text-xs font-mono text-neon-cyan hover:underline flex items-center gap-1"
            >
              <span>Lihat Semua Direktori</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {celebrities.slice(0, 3).map((celeb) => (
              <CelebrityDossierCard key={celeb.id} celebrity={celeb} />
            ))}
          </div>
        </section>

        {/* 4. Category Feed Section with Instant Tabs */}
        <section id="kategori-feed" aria-label="Kategori Pop-Kultur Feed">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                ARSIP BERITA & VERIFIKASI TERKINI
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Pilih kategori untuk memfilter duduk perkara dan rekaman bukti digital.
              </p>
            </div>

            {/* Instant Filter Tabs with Enhanced Touch Target */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1.5 bg-obsidian-deep/80 rounded-2xl border border-slate-800 touch-pan-x">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id as ArticleCategory);
                    setVisibleCount(9);
                  }}
                  className={`min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all active:scale-95 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-neon-pink text-obsidian font-bold shadow-neon-pink'
                      : 'text-slate-400 hover:text-white hover:bg-velvet'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filtered Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-velvet p-12 text-center space-y-3">
              <p className="text-base text-slate-300 font-medium">
                Belum ada artikel yang cocok dengan filter ini.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('semua');
                  setActiveTag(null);
                  setVisibleCount(9);
                }}
                className="px-4 py-2 bg-neon-pink text-obsidian font-bold text-xs rounded-xl"
              >
                Tampilkan Semua Artikel
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.slice(0, visibleCount).map((article) => (
                  <Link
                    key={article.id}
                    href={`/artikel/${article.slug}`}
                    prefetch={false}
                    className="group card-hover-fx flex flex-col justify-between overflow-hidden rounded-2xl border border-velvet-border bg-velvet shadow-card-glow"
                  >
                    <div>
                      {/* Thumbnail */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                        <SafeImage
                          src={article.heroImage}
                          alt={article.title}
                          category={article.category}
                          optimizedWidth={480}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="bg-obsidian/80 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded">
                            {article.categoryLabel}
                          </span>
                          <GhibahMeterBadge status={article.ghibahMeter.status} size="sm" />
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 space-y-2.5">
                        <h3 className="text-base font-bold text-white font-display group-hover:text-neon-pink transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                        {article.readingTimeMinutes} min baca
                      </span>
                      <span className="text-neon-cyan group-hover:underline flex items-center gap-1">
                        <span>Kupas Kronologi</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More Button if remaining */}
              {filteredArticles.length > visibleCount && (
                <div className="flex justify-center pt-2">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 9)}
                    className="px-6 py-3 rounded-full border border-neon-cyan/40 bg-velvet text-white hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all text-xs font-mono font-semibold flex items-center gap-2 cursor-pointer shadow-card-glow active:scale-95"
                  >
                    <span>Muat Lebih Banyak Isu Pop-Kultur</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neon-cyan" />
                  </button>
                </div>
              )}
            </div>
          )}
        </section>

        {/* AdSense Slot: In-Feed Responsive */}
        <AdSlot slotId="home-infeed-middle" format="in-feed" />

        {/* 5. Anti-Tribun / Anti-Jebakan Banner */}
        <section className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-velvet to-obsidian p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/30">
                <Shield className="w-3.5 h-3.5" />
                <span>KOMITMEN RESMI REDAKSI</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Kenapa NgeGhibah.com Berbeda dari Media Gosip Konvensional?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Kami muak dengan artikel 150 kata yang dipotong jadi 10 slide halaman. Di NgeGhibah, semua artikel dimuat tuntas dalam 1 halaman utuh, cepat dibuka di jaringan 4G/5G, dan dilengkapi bukti jejak digital transparan.
              </p>
            </div>

            <Link
              href="/tentang-kami"
              className="shrink-0 min-h-[44px] inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian font-bold text-xs font-mono transition-colors shadow-sm"
            >
              Baca Manifesto Kami →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
