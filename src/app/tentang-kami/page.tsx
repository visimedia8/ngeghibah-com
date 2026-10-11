import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami — NgeGhibah.com Jurnalisme Pop-Kultur & Verifikasi',
  description:
    'Profil redaksi NgeGhibah.com, visi, misi, legalitas pers PT Media Siber Ghibah Nusantara, dan komitmen verifikasi jejak digital independen anti-clickbait.',
  alternates: { canonical: 'https://ngeghibah.com/tentang-kami' },
};

export default function TentangKamiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Tentang NgeGhibah.com',
    url: 'https://ngeghibah.com/tentang-kami',
    description:
      'Profil media digital independen jurnalisme pop-kultur dan verifikasi jejak digital NgeGhibah.com.',
    mainEntity: {
      '@type': 'NewsMediaOrganization',
      name: 'NgeGhibah.com',
      legalName: 'PT Media Siber Ghibah Nusantara',
      url: 'https://ngeghibah.com',
      logo: 'https://ngeghibah.com/icon.svg',
      foundingDate: '2026',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sovereign Plaza Lt. 12, Jl. TB Simatupang No. 36, Cilandak Barat',
        addressLocality: 'Jakarta Selatan',
        addressRegion: 'DKI Jakarta',
        postalCode: '12430',
        addressCountry: 'ID',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+62-21-7592-0000',
        contactType: 'customer service',
        email: 'redaksi@ngeghibah.com',
        availableLanguage: ['Indonesian', 'English'],
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <Link href="/" className="hover:text-white transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-neon-pink font-bold">Tentang Kami</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/15 text-neon-pink border border-neon-pink/30 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PROFIL MEDIA INDEPENDEN</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-6">
          Tentang NgeGhibah: Jurnalisme Pop-Kultur Berbasis Data & Verifikasi
        </h1>

        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-5 leading-relaxed text-sm sm:text-base">
          <p className="lead font-medium text-lg text-slate-200">
            <strong>NgeGhibah (ngeghibah.com)</strong> adalah media digital independen yang berfokus pada peliputan,
            kurasi, dan analisis mendalam dinamika selebritas, kreator konten, serta fenomena budaya populer (pop culture)
            lokal maupun internasional.
          </p>

          <p>
            Lahir di tengah derasnya arus informasi media sosial yang kerap diwarnai sensasionalisme dan pemotongan
            konteks (clickbait), NgeGhibah mengusung komitmen utama: <em>"Bukan Sekadar Gosip, Ini Kronologi & Verifikasi."</em>
          </p>

          <p>
            Kami meyakini bahwa warganet berhak mengetahui duduk perkara yang utuh di balik setiap peristiwa viral.
            Setiap liputan di NgeGhibah dibangun di atas penelusuran jejak digital yang transparan, garis waktu (kronologi)
            peristiwa yang runut, serta penghormatan terhadap asas praduga tak bersalah dan hak jawab para pihak yang diberitakan.
          </p>

          <div className="my-8 p-6 rounded-2xl bg-obsidian-deep border border-slate-800">
            <h2 className="text-xl font-bold text-white font-display mb-3">Visi Kami</h2>
            <p className="text-slate-300">
              Menjadi rujukan terdepan jurnalisme pop-kultur di Indonesia yang cerdas, berintegritas, menghibur, dan
              mengedukasi literasi digital publik.
            </p>
          </div>

          <h2 className="text-xl font-bold text-white font-display mt-8 mb-4">Misi Redaksi</h2>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
              <span>Menyajikan rekonstruksi kronologi peristiwa selebritas yang objektif dan bebas dari umpan klik manipulatif.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
              <span>Memberikan label transparansi verifikasi (<em>Ghibah Meter</em>) pada setiap isu untuk membedakan fakta resmi, jejak digital, dan spekulasi liar.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
              <span>Mengontekstualisasikan dinamika budaya pop global (Hollywood, K-Pop, drama kreator) agar relevan dan mudah dipahami oleh audiens Indonesia.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
              <span>Menjunjung tinggi etika jurnalisme siber, privasi personal, serta perlindungan terhadap kelompok rentan dan anak-anak.</span>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-white font-display mt-8 mb-4">Legalitas & Naungan Badan Hukum</h2>
          <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800 text-xs sm:text-sm font-mono space-y-1.5 text-slate-300">
            <div><strong className="text-white">Perusahaan Penerbit:</strong> PT Media Siber Ghibah Nusantara</div>
            <div><strong className="text-white">SK Kemenkumham:</strong> AHU-0048192.AH.01.01.Tahun 2026</div>
            <div><strong className="text-white">Nomor Induk Berusaha (NIB):</strong> 9120304810291</div>
            <div><strong className="text-white">Domisili Hukum:</strong> Kota Administrasi Jakarta Selatan, DKI Jakarta</div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-3 text-xs font-mono">
            <Link href="/redaksi" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-neon-pink text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Susunan Redaksi</span>
              <ArrowRight className="w-3 h-3 text-neon-pink" />
            </Link>
            <Link href="/pedoman-pemeriksaan-fakta" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-neon-cyan text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Pedoman Pemeriksaan Fakta</span>
              <ArrowRight className="w-3 h-3 text-neon-cyan" />
            </Link>
            <Link href="/pedoman-media-siber" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-emerald-400 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Pedoman Media Siber</span>
              <ArrowRight className="w-3 h-3 text-emerald-400" />
            </Link>
            <Link href="/kontak-kami" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-neon-pink text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Kontak & Hotline</span>
              <ArrowRight className="w-3 h-3 text-neon-pink" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
