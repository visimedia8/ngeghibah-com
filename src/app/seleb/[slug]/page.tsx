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
  Briefcase,
  Scale,
  HelpCircle,
  CheckCircle2,
  FileText,
  BookOpen,
} from 'lucide-react';
import { MOCK_CELEBRITIES, MOCK_ARTICLES } from '@/data/mockData';
import { GhibahMeterBadge } from '@/components/signature/GhibahMeterBadge';
import { AdSlot } from '@/components/ads/AdSlot';
import { getOptimizedImageUrl } from '@/lib/imageUtils';

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
    title: `${celeb.stageName} (${celeb.name}) — Biodata Lengkap, Tabel Kontroversi & Bisnis`,
    description: `Dossier profil tebal ${celeb.stageName}: biodata lengkap, tabel rekam jejak kontroversi, portofolio bisnis, daftar penghargaan, dan analisis sentimen warganet.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'profile',
      title: `${celeb.stageName} — Dossier Pop-Kultur Terverifikasi`,
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

  // Direct related articles mentioning this celebrity
  const directArticles = MOCK_ARTICLES.filter((a) =>
    a.entities?.some(
      (ent) =>
        ent.toLowerCase() === celeb.name.toLowerCase() ||
        ent.toLowerCase() === celeb.stageName.toLowerCase()
    )
  );

  // Recommended investigative articles if direct count is fewer than 2
  const fallbackArticles = MOCK_ARTICLES.filter(
    (a) => !directArticles.some((d) => d.id === a.id)
  ).slice(0, Math.max(0, 2 - directArticles.length));

  const displayArticles = [...directArticles, ...fallbackArticles];

  // Person + FAQPage JSON-LD Schema
  const schemas: any[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: celeb.name,
      alternateName: celeb.stageName,
      image: celeb.avatar,
      description: celeb.bio,
      jobTitle: celeb.profession,
      birthDate: celeb.dossierDetail?.birthDate,
      birthPlace: celeb.dossierDetail?.birthPlace,
      nationality: celeb.dossierDetail?.nationality,
      sameAs: celeb.verifiedAccounts.map((acc) => acc.url),
    },
  ];

  if (celeb.faq && celeb.faq.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: celeb.faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
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
              src={getOptimizedImageUrl(celeb.bannerImage, 900, 75)}
              alt={celeb.stageName}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/60 to-transparent" />
          </div>

          <div className="px-6 sm:px-10 pb-8 pt-0 relative -mt-16 sm:-mt-20">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-8">
              {/* Avatar Circle */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shrink-0 border-4 border-obsidian-deep shadow-2xl ring-2 ring-neon-pink">
                <img
                  src={getOptimizedImageUrl(celeb.avatar, 256, 75)}
                  alt={celeb.stageName}
                  className="w-full h-full object-cover"
                  loading="eager"
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

        {/* SECTION 1: TABEL PARAMETER BIODATA & PROFIL RESMI (THICK CONTENT) */}
        <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-velvet/50 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-neon-cyan" />
              <span>Tabel Parameter Dossier & Biodata Lengkap</span>
            </h2>
            <span className="text-[11px] font-mono text-neon-pink uppercase tracking-wider font-semibold">
              DATA TERVERIFIKASI
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
            Rangkuman spesifikasi identitas resmi, legalitas kependudukan, latar belakang pendidikan,
            dan lingkaran representasi hukum {celeb.stageName}.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-deep/60">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody className="divide-y divide-slate-800/80 font-sans">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-400 w-1/3 text-xs uppercase font-semibold">
                    Nama Lengkap
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-white">
                    {celeb.name}
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-400 text-xs uppercase font-semibold">
                    Nama Panggung / Moniker
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-neon-pink">
                    {celeb.stageName}
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-400 text-xs uppercase font-semibold">
                    Tanggal & Tempat Lahir
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {celeb.dossierDetail?.birthDate || '-'}, {celeb.dossierDetail?.birthPlace || '-'}
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-400 text-xs uppercase font-semibold">
                    Usia & Zodiak
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {celeb.age} Tahun • Zodiak {celeb.dossierDetail?.zodiac || '-'}
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-400 text-xs uppercase font-semibold">
                    Kewarganegaraan
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {celeb.dossierDetail?.nationality || 'Indonesia'}
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-400 text-xs uppercase font-semibold">
                    Pendidikan Terakhir
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {celeb.dossierDetail?.education || 'Pendidikan Seni & Komunikasi'}
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-400 text-xs uppercase font-semibold">
                    Tahun Aktif Berkarier
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 font-mono">
                    {celeb.dossierDetail?.yearsActive || '2015 – Sekarang'}
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-400 text-xs uppercase font-semibold">
                    Agensi / Label Manajemen
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-neon-cyan font-medium">
                    {celeb.agency}
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-400 text-xs uppercase font-semibold">
                    Status Relasi / Pasangan
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {celeb.relationshipStatus}
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-400 text-xs uppercase font-semibold">
                    Estimasi Valuasi & Endorsement
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-400 font-semibold font-mono">
                    {celeb.dossierDetail?.netWorthEstimate || 'Tier A Commercial'}
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-400 text-xs uppercase font-semibold">
                    Media Sosial Resmi
                  </td>
                  <td className="py-3.5 px-4 sm:px-6">
                    <div className="flex flex-wrap gap-2">
                      {celeb.verifiedAccounts.map((acc, idx) => (
                        <a
                          key={idx}
                          href={acc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-velvet border border-slate-700 text-slate-300 hover:text-white hover:border-neon-pink text-xs transition-colors"
                        >
                          <span className="capitalize font-mono text-[11px] text-neon-cyan">
                            {acc.platform}:
                          </span>
                          <span>{acc.handle}</span>
                          <ExternalLink className="w-3 h-3 text-slate-500" />
                        </a>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 2: BIOGRAFI & DINAMIKA PERSONAL */}
        <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-velvet/50 border border-slate-800">
          <h2 className="font-display font-bold text-lg text-white mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-neon-pink" />
            <span>Biografi & Analisis Karakter</span>
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

        {/* SECTION 2B: LAPORAN INTELIJEN & ANALISIS FORENSIK ENTITAS (EDITORIAL DEEP DIVE) */}
        {celeb.editorialSections && celeb.editorialSections.length > 0 && (
          <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-velvet/50 border border-slate-800 shadow-xl space-y-8">
            <div className="border-b border-slate-800 pb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/60 text-neon-cyan border border-cyan-800/40 mb-3">
                <FileText className="w-3.5 h-3.5" />
                <span>INTELLIGENCE DOSSIER DEEP DIVE</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Analisis Forensik & Trajektori Reputasi {celeb.stageName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Kajian jurnalisme investigasi mendalam mengenai model monetisasi digital, lingkaran pengaruh, audit krisis reputasi, dan evaluasi brand safety bagi pengiklan.
              </p>
            </div>

            <div className="space-y-6">
              {celeb.editorialSections.map((sec, idx) => (
                <article
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 bg-obsidian-deep/70 p-5 sm:p-7 space-y-3 shadow-md"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-neon-pink font-bold">
                    <span>BAB 0{idx + 1}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 uppercase tracking-wider">Kajian Khusus Pop-Kultur</span>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    {sec.title}
                  </h3>
                  <div
                    className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: sec.contentHtml }}
                  />
                </article>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: TABEL REKAM JEJAK KONTROVERSI & KASUS TERVERIFIKASI */}
        {celeb.controversies && celeb.controversies.length > 0 && (
          <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-velvet/50 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-neon-pink" />
                <span>Tabel Rekam Jejak Kontroversi & Kasus Terverifikasi</span>
              </h2>
              <span className="text-[11px] font-mono text-slate-400">
                {celeb.controversies.length} Kasus Terekam
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
              Arsip investigasi jejak digital terhadap isu hukum, polemik media sosial, dan dinamika
              publik {celeb.stageName} berdasarkan bukti berkas dan klarifikasi resmi.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-deep/60">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-velvet/80 text-[11px] font-mono uppercase text-slate-400">
                    <th className="py-3 px-4 font-bold">Tahun</th>
                    <th className="py-3 px-4 font-bold">Kasus / Isu</th>
                    <th className="py-3 px-4 font-bold">Status Validitas</th>
                    <th className="py-3 px-4 font-bold">Kronologi Singkat</th>
                    <th className="py-3 px-4 font-bold">Resolusi / Status Hukum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 font-sans">
                  {celeb.controversies.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-neon-cyan whitespace-nowrap">
                        {item.year}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-white min-w-[180px]">
                        {item.title}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <GhibahMeterBadge status={item.status} size="sm" />
                      </td>
                      <td className="py-3.5 px-4 text-slate-300 min-w-[220px] leading-relaxed">
                        {item.summary}
                      </td>
                      <td className="py-3.5 px-4 text-slate-400 min-w-[200px] leading-relaxed">
                        {item.resolution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* SECTION 4: TABEL EKOSISTEM BISNIS & PORTOFOLIO KOMERSIAL */}
        {celeb.businessVentures && celeb.businessVentures.length > 0 && (
          <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-velvet/50 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-400" />
                <span>Tabel Ekosistem Bisnis, Endorsement & Portofolio</span>
              </h2>
              <span className="text-[11px] font-mono text-emerald-400">
                {celeb.businessVentures.length} Entitas Bisnis
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
              Daftar kepemilikan saham, brand komersial independen, dan kontrak duta global
              yang terafiliasi dengan {celeb.stageName}.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-deep/60">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-velvet/80 text-[11px] font-mono uppercase text-slate-400">
                    <th className="py-3 px-4 font-bold">Entitas / Brand</th>
                    <th className="py-3 px-4 font-bold">Sektor Industri</th>
                    <th className="py-3 px-4 font-bold">Peran / Kepemilikan</th>
                    <th className="py-3 px-4 font-bold">Status Operasional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 font-sans">
                  {celeb.businessVentures.map((v, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white">
                        {v.name}
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">
                        {v.category}
                      </td>
                      <td className="py-3.5 px-4 text-neon-cyan font-mono text-xs">
                        {v.role}
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                            v.status === 'Aktif Beroperasi'
                              ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{v.status}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* SECTION 5: TABEL PENGHARGAAN & PRESTASI KARYA */}
        {celeb.awards && celeb.awards.length > 0 && (
          <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-velvet/50 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Tabel Rekam Jejak Prestasi & Penghargaan</span>
              </h2>
              <span className="text-[11px] font-mono text-amber-400">
                {celeb.awards.length} Penghargaan
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-deep/60">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-velvet/80 text-[11px] font-mono uppercase text-slate-400">
                    <th className="py-3 px-4 font-bold">Tahun</th>
                    <th className="py-3 px-4 font-bold">Ajang Penghargaan</th>
                    <th className="py-3 px-4 font-bold">Kategori</th>
                    <th className="py-3 px-4 font-bold">Hasil</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 font-sans">
                  {celeb.awards.map((aw, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-amber-400">
                        {aw.year}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-white">
                        {aw.award}
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">
                        {aw.category}
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                            aw.result === 'Menang'
                              ? 'bg-amber-950/60 text-amber-300 border border-amber-800/40'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {aw.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* SECTION 6: FAQ ACCORDION POP-KULTUR */}
        {celeb.faq && celeb.faq.length > 0 && (
          <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-velvet/50 border border-slate-800 shadow-xl">
            <h2 className="font-display font-bold text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-neon-cyan" />
              <span>Pertanyaan Publik & FAQ Terverifikasi</span>
            </h2>
            <div className="space-y-3">
              {celeb.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-obsidian-deep/80 border border-slate-800 space-y-2"
                >
                  <h3 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <span className="text-neon-pink font-mono text-xs">Q:</span>
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-5">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 7: RELATED ARTICLES ON NGEGHIBAH */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <History className="w-5 h-5 text-neon-pink" />
              <span>Arsip Liputan & Kronologi Isu</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">
              {displayArticles.length} Laporan Terekam
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {displayArticles.map((art) => {
              const isDirectMatch = directArticles.some((d) => d.id === art.id);
              return (
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
                      <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                        <GhibahMeterBadge status={art.ghibahMeter.status} size="sm" />
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold uppercase ${
                            isDirectMatch
                              ? 'bg-cyan-950/80 text-neon-cyan border border-cyan-800/40'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {isDirectMatch ? 'Liputan Entitas' : 'Rekomendasi Pop-Kultur'}
                        </span>
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
              );
            })}
          </div>
        </section>

        {/* AdSlot */}
        <div className="my-8">
          <AdSlot slotId="celeb-profile-bottom" format="banner" />
        </div>
      </div>
    </>
  );
}
