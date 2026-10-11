import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_ARTICLES, MOCK_CELEBRITIES } from '@/data/mockData';
import { GhibahMeterCard } from '@/components/signature/GhibahMeterCard';
import { InteractiveTimelineCard } from '@/components/signature/InteractiveTimelineCard';
import { QuickShareBar } from '@/components/signature/QuickShareBar';
import { ReactionPollMini } from '@/components/signature/ReactionPollMini';
import { CelebrityDossierWidget } from '@/components/signature/CelebrityDossierWidget';
import { AdSlot } from '@/components/ads/AdSlot';
import { ReadingProgressBar } from '@/components/article/ReadingProgressBar';
import { getOptimizedImageUrl } from '@/lib/imageUtils';
import { SafeImage } from '@/components/ui/SafeImage';
import { linkifyCelebritiesInHtml } from '@/lib/linkify';
import {
  Clock,
  Calendar,
  ChevronRight,
  FileCheck2,
  AlertCircle,
} from 'lucide-react';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return MOCK_ARTICLES.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = MOCK_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan',
    };
  }

  return {
    title: `${article.title} — NgeGhibah.com`,
    description: article.excerpt,
    alternates: {
      canonical: `https://ngeghibah.com/artikel/${article.slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'id_ID',
      url: `https://ngeghibah.com/artikel/${article.slug}`,
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      section: article.categoryLabel,
      images: [
        {
          url: article.heroImage,
          width: 1200,
          height: 628,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.heroImage],
      creator: '@NgeGhibah',
    },
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = MOCK_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Find related celebrity dossier
  const relatedCeleb =
    MOCK_CELEBRITIES.find(
      (c) =>
        article.entities.includes(c.stageName) ||
        article.entities.includes(c.name)
    ) || MOCK_CELEBRITIES[0];

  // Related articles in same category or entity
  const relatedArticles = MOCK_ARTICLES.filter(
    (a) => a.id !== article.id
  ).slice(0, 3);

  // Linkify first occurrence of celebrity entities to their dossiers
  const linkedContentHtml = linkifyCelebritiesInHtml(
    article.contentHtml,
    MOCK_CELEBRITIES
  );

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    'id-ID',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  );

  // Schema.org NewsArticle structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    articleSection: article.categoryLabel,
    image: [article.heroImage],
    author: [
      {
        '@type': 'Person',
        name: article.author.name,
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

  return (
    <>
      <ReadingProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen py-6 sm:py-10 pb-28 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1. Breadcrumb Trail */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-6 overflow-x-auto no-scrollbar"
          >
            <Link href="/" className="hover:text-neon-cyan transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link
              href={`/kategori/${article.category}`}
              className="hover:text-neon-cyan transition-colors"
            >
              {article.categoryLabel}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-slate-300 truncate max-w-[200px] sm:max-w-md">
              {article.title}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Editorial Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              {/* Header Metadata */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={`/kategori/${article.category}`}
                    className="bg-neon-pink/15 text-neon-pink border border-neon-pink/30 hover:bg-neon-pink/25 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-colors"
                  >
                    {article.categoryLabel}
                  </Link>
                  <span className="text-slate-400 text-xs font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formattedDate}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400 text-xs font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neon-cyan" />
                    {article.readingTimeMinutes} Menit Baca
                  </span>
                </div>

                {/* H1 Headline */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display leading-tight tracking-tight">
                  {article.title}
                </h1>

                {/* Author Info Bar */}
                <div className="flex items-center justify-between gap-4 py-3 border-y border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neon-cyan">
                      <SafeImage
                        src={article.author.avatar}
                        alt={article.author.name}
                        type="avatar"
                        optimizedWidth={80}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <Link
                        href="/redaksi"
                        className="text-sm font-semibold text-white hover:text-neon-pink transition-colors block"
                      >
                        {article.author.name}
                      </Link>
                      <span className="text-xs text-slate-400 font-mono">
                        {article.author.role}
                      </span>
                    </div>
                  </div>

                  {/* Share button shortcut on desktop */}
                  <div className="hidden sm:block">
                    <QuickShareBar
                      title={article.title}
                      url={`https://ngeghibah.com/artikel/${article.slug}`}
                      variant="inline"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Signature Component: Ghibah Meter Card (Tepat di atas hero image) */}
              <GhibahMeterCard
                data={article.ghibahMeter}
                digitalReceiptsCount={article.digitalReceiptsCount}
              />

              {/* 3. Hero Image 1200x628 (16:9) with priority for Core Web Vitals LCP */}
              <div className="space-y-2">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-900 border border-velvet-border shadow-card-glow">
                  <SafeImage
                    src={article.heroImage}
                    alt={article.title}
                    category={article.category}
                    optimizedWidth={800}
                    fill
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                <p className="text-[11px] font-mono text-slate-400 italic text-center">
                  {article.imageCaption}
                </p>
              </div>

              {/* 4. Article Body with Non-Intrusive Ad Slots & Clean Typography */}
              <div className="space-y-6 text-slate-200 text-base sm:text-[17px] leading-relaxed">
                {/* Article Intro / Lead HTML Content */}
                <div
                  className="prose prose-invert max-w-none prose-headings:font-display prose-headings:text-white prose-p:leading-relaxed prose-a:text-neon-cyan"
                  dangerouslySetInnerHTML={{ __html: linkedContentHtml }}
                />

                {/* AdSense Slot 1: Below 2nd Paragraph */}
                <AdSlot slotId="artikel-top-responsive" format="banner" />

                {/* Callout Box: Digital Receipts Highlight */}
                <div className="rounded-2xl border border-neon-cyan/40 bg-cyan-950/20 p-5 sm:p-6 space-y-2">
                  <div className="flex items-center gap-2 text-neon-cyan font-mono font-bold text-xs uppercase tracking-wider">
                    <FileCheck2 className="w-4 h-4 text-neon-cyan" />
                    <span>CATATAN REDAKSI & JEJAK DIGITAL</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Setiap informasi dalam laporan ini dirangkum berdasarkan kronologi waktu terverifikasi. Kami secara aktif menolak desas-desus anonim tanpa bukti otentik.
                  </p>
                </div>

                {/* AdSense Slot 2: Mid-Article before Timeline */}
                <AdSlot slotId="artikel-mid-content" format="banner" />

                {/* 5. Signature Component: Interactive Timeline Card */}
                {article.timeline && article.timeline.length > 0 && (
                  <InteractiveTimelineCard timeline={article.timeline} />
                )}

                {/* 6. Asas Praduga Tak Bersalah & Box Hak Jawab */}
                <div className="rounded-2xl border border-amber-500/40 bg-amber-950/20 p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>ASAS PRADUGA TAK BERSALAH & HAK JAWAB</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    NgeGhibah.com menjunjung tinggi Kode Etik Jurnalistik dan Undang-Undang Pers No. 40 Tahun 1999. Pihak yang merasa dirugikan atau berkepentingan terhadap pemberitaan ini memiliki hak penuh untuk memberikan klarifikasi, koreksi, atau hak jawab.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/hak-jawab"
                      className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neon-cyan hover:underline bg-velvet px-4 py-2.5 rounded-lg border border-slate-700"
                    >
                      <span>Ajukan Permohonan Hak Jawab Resmi Disini</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 7. Signature Component: Reaction Poll Mini */}
                <ReactionPollMini articleId={article.id} />

                {/* AdSense Slot 3: Bottom before Related */}
                <AdSlot slotId="artikel-bottom-closure" format="banner" />

                {/* Author Card Footer */}
                <div className="rounded-2xl border border-slate-800 bg-velvet p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-neon-pink">
                    <Image
                      src={getOptimizedImageUrl(article.author.avatar, 128, 75)}
                      alt={article.author.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1.5 text-center sm:text-left">
                    <span className="text-[11px] font-mono text-neon-pink uppercase tracking-wider font-semibold">
                      DITULIS OLEH
                    </span>
                    <h4 className="text-base font-bold text-white font-display">
                      {article.author.name}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Jurnalis desk investigasi pop-kultur NgeGhibah.com yang memantau dinamika selebritas, hukum hak cipta, dan sentimen media sosial.
                    </p>
                  </div>
                </div>

                {/* 8. Dedicated Bottom Article Share Box */}
                <div className="mt-8 p-6 sm:p-7 rounded-2xl border border-slate-800 bg-velvet/50 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-neon-pink uppercase tracking-wider font-semibold">
                      SEBARKAN INFORMASI TERVERIFIKASI
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white font-display">
                      Bantu Lawan Hoaks: Bagikan Duduk Perkara Ini
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                      Bantu warganet dan lingkar terdekat kamu memahami kronologi faktual berdasarkan jejak digital tanpa bumbu fitnah.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80">
                    <QuickShareBar
                      title={article.title}
                      url={`https://ngeghibah.com/artikel/${article.slug}`}
                      variant="inline"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Column (4 Cols) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* 8. Signature Component: Celebrity Dossier Widget */}
              {relatedCeleb && (
                <div className="sticky top-28 space-y-8">
                  <CelebrityDossierWidget celebrity={relatedCeleb} />

                  {/* Related Articles Card */}
                  <div className="rounded-2xl border border-velvet-border bg-velvet p-5 shadow-card-glow space-y-4">
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                      <span className="text-neon-pink">●</span>
                      REKOMENDASI LIPUTAN TERKAIT
                    </h4>

                    <div className="space-y-4">
                      {relatedArticles.map((rel) => (
                        <Link
                          key={rel.id}
                          href={`/artikel/${rel.slug}`}
                          className="group block space-y-1"
                        >
                          <span className="text-[10px] font-mono text-neon-cyan uppercase">
                            {rel.categoryLabel}
                          </span>
                          <h5 className="text-xs font-semibold text-slate-200 group-hover:text-neon-pink transition-colors line-clamp-2">
                            {rel.title}
                          </h5>
                          <span className="text-[11px] font-mono text-slate-400 block">
                            {rel.readingTimeMinutes} min baca
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>

        {/* 9. Signature Component: Mobile Sticky Quick Share Bar (Strictly sm:hidden) */}
        <QuickShareBar
          title={article.title}
          url={`https://ngeghibah.com/artikel/${article.slug}`}
          variant="floating"
        />
      </article>
    </>
  );
}
