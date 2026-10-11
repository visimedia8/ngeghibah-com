import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { ArticleCategory } from '@/types';
import { CategoryClient } from './CategoryClient';

interface CategoryPageProps {
  params: {
    slug: string;
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

export default function CategoryDetailPage({ params }: CategoryPageProps) {
  const cat = CATEGORY_MAP[params.slug];
  if (!cat) {
    notFound();
  }

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

      {/* Client Component with SearchParams inside Suspense */}
      <CategoryClient
        slug={params.slug}
        categoryInfo={cat}
        categoryMap={CATEGORY_MAP}
      />
    </div>
  );
}
