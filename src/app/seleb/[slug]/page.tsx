import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Sparkles,
  Users,
  Award,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Flame,
  Clock,
  History,
} from 'lucide-react';
import { MOCK_CELEBRITIES, MOCK_ARTICLES } from '@/data/mockData';
import { GhibahMeterBadge } from '@/components/signature/GhibahMeterBadge';
import { AdSlot } from '@/components/ads/AdSlot';

interface CelebPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return MOCK_CELEBRITIES.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: CelebPageProps): Promise<Metadata> {
  const celeb = MOCK_CELEBRITIES.find((c) => c.slug === params.slug);
  if (!celeb) {
    return { title: 'Profil Seleb Tidak Ditemukan' };
  }

  const canonicalUrl = `https://ngeghibah.com/seleb/${celeb.slug}`;

  return {
    title: `${celeb.stageName} (${celeb.name}) — Biodata, Circle & Rekam Jejak`,
    description: `Dossier profil ${celeb.stageName}: biodata lengkap, rekam jejak karier, lingkaran relasi, riwayat kontroversi, dan analisis sentimen warganet.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'profile',
      title: `${celeb.stageName} — Dossier Selebritas`,
      description: celeb.bio,
      images: [
        {
          url: celeb.avatar,
          width: 600,
          height: 600,
          alt: celeb.stageName,
        },
      ],
    },
  };
}

export default function CelebrityDetailPage({ params }: CelebPageProps) {
  const celeb = MOCK_CELEBRITIES.find((c) => c.slug === params.slug);
  if (!celeb) {
    notFound();
  }

  // Related articles mentioning this celebrity
  const relatedArticles = MOCK_ARTICLES.filter((a) =>
    a.entities?.some(
      (ent) =>
        ent.toLowerCase() === celeb.name.toLowerCase() ||
        ent.toLowerCase() === celeb.stageName.toLowerCase()
    )
  );

  // Person JSON-LD Schema
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: celeb.name,
    alternateName: celeb.stageName,
    image: celeb.avatar,
    description: celeb.bio,
    jobTitle: celeb.profession,
    sameAs: celeb.verifiedAccounts.map((acc) => acc.url),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/seleb" className="hover:text-neon-cyan transition-colors">
            Direktori Seleb
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-neon-pink font-bold">{celeb.stageName}</span>
        </nav>

        {/* Profile Card Header */}
        <header className="rounded-3xl bg-velvet/80 border border-slate-800 overflow-hidden shadow-2xl relative mb-10">
          {/* Cover Banner */}
          <div className="h-44 sm:h-64 w-full relative overflow-hidden bg-slate-900">
            <img
              src={celeb.bannerImage}
              alt={celeb.stageName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/60 to-transparent" />
          </div>

          <div className="px-6 sm:px-10 pb-8 pt-0 relative -mt-16 sm:-mt-20">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-8">
              {/* Avatar Circle */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shrink-0 border-4 border-obsidian-deep shadow-2xl ring-2 ring-neon-pink">
                <img
                  src={celeb.avatar}
                  alt={celeb.stageName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Header Title & Tag */}
              <div className="text-center sm:text-left flex-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/60 text-neon-cyan border border-cyan-800/40 mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>DOSSIER ENTITAS TERVERIFIKASI</span>
                </div>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  {celeb.stageName}
                </h1>
                <p className="text-sm font-sans text-slate-400 mt-1">
                  Nama Asli: <span className="text-slate-200 font-medium">{celeb.name}</span>
                </p>
                <p className="text-xs font-mono text-neon-cyan mt-1">{celeb.profession}</p>
              </div>

              {/* Drama Counter Pill */}
              <div className="shrink-0 p-4 rounded-2xl bg-obsidian-deep/80 border border-slate-800 text-center">
                <div className="text-2xl font-black font-display text-neon-pink">
                  {celeb.dramaCount}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Isu Terekam
                </div>
              </div>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800/80 text-xs font-mono">
              <div className="p-3 rounded-xl bg-obsidian-deep/50 border border-slate-800">
                <div className="text-slate-500 text-[10px]">USIA</div>
                <div className="text-white font-bold mt-0.5">{celeb.age} Tahun</div>
              </div>
              <div className="p-3 rounded-xl bg-obsidian-deep/50 border border-slate-800">
                <div className="text-slate-500 text-[10px]">AGENSI / MANAJEMEN</div>
                <div className="text-white font-bold mt-0.5 truncate">{celeb.agency}</div>
              </div>
              <div className="p-3 rounded-xl bg-obsidian-deep/50 border border-slate-800">
                <div className="text-slate-500 text-[10px]">STATUS RELASI</div>
                <div className="text-white font-bold mt-0.5 truncate">{celeb.relationshipStatus}</div>
              </div>
              <div className="p-3 rounded-xl bg-obsidian-deep/50 border border-slate-800">
                <div className="text-slate-500 text-[10px]">CIRCLE UTAMA</div>
                <div className="text-neon-cyan font-bold mt-0.5 truncate">
                  {celeb.circle.slice(0, 2).join(', ')}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Bio Section */}
        <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-velvet/50 border border-slate-800">
          <h2 className="font-display font-bold text-lg text-white mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-neon-pink" />
            <span>Biografi & Dinamika Personal</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{celeb.bio}</p>

          {/* Sentiment Summary Callout */}
          <div className="mt-6 p-4 rounded-2xl bg-obsidian-deep border border-slate-700/80">
            <div className="text-xs font-mono uppercase tracking-wider text-neon-cyan font-semibold mb-1">
              RINGKASAN SENTIMEN WARGANET:
            </div>
            <p className="text-xs sm:text-sm text-slate-300 italic">{celeb.sentimentSummary}</p>
          </div>
        </section>

        {/* Career Highlights */}
        {celeb.careerHighlights && celeb.careerHighlights.length > 0 && (
          <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-velvet/50 border border-slate-800">
            <h2 className="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-neon-cyan" />
              <span>Prestasi & Rekam Jejak Karya</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {celeb.careerHighlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-pink mt-2 shrink-0" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related Articles on NgeGhibah */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <History className="w-5 h-5 text-neon-pink" />
              <span>Arsip Liputan & Kronologi Isu</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">
              {relatedArticles.length} Laporan Terekam
            </span>
          </div>

          {relatedArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedArticles.map((art) => (
                <Link
                  key={art.id}
                  href={`/artikel/${art.slug}`}
                  className="p-4 rounded-2xl bg-velvet border border-slate-800 hover:border-neon-pink transition-all flex gap-4 group"
                >
                  <img
                    src={art.heroImage}
                    alt={art.title}
                    className="w-24 h-24 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="flex flex-col justify-between min-w-0">
                    <div>
                      <div className="mb-1">
                        <GhibahMeterBadge status={art.ghibahMeter.status} size="sm" />
                      </div>
                      <h3 className="font-display font-semibold text-xs sm:text-sm text-white group-hover:text-neon-pink transition-colors line-clamp-2 leading-snug">
                        {art.title}
                      </h3>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500">
                      {new Date(art.publishedAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center rounded-2xl bg-velvet/30 border border-slate-800 text-slate-400 text-xs font-mono">
              Belum ada arsip kontroversi aktif yang terekam untuk {celeb.stageName}.
            </div>
          )}
        </section>

        {/* AdSlot */}
        <div className="my-8">
          <AdSlot slotId="celeb-profile-bottom" format="banner" />
        </div>
      </div>
    </>
  );
}
