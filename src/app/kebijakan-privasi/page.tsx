import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi (Privacy Policy) — NgeGhibah.com',
  description:
    'Kebijakan perlindungan data pribadi, penggunaan cookie Google AdSense, dan analitik di situs NgeGhibah.com.',
  alternates: { canonical: 'https://ngeghibah.com/kebijakan-privasi' },
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <Link href="/" className="hover:text-white transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-neon-cyan font-bold">Kebijakan Privasi</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 text-neon-cyan border border-cyan-800/40 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <Lock className="w-3.5 h-3.5" />
          <span>DATA PROTECTION & PRIVACY</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-2">
          Kebijakan Privasi (Privacy Policy)
        </h1>
        <p className="text-xs font-mono text-slate-400 mb-8 pb-6 border-b border-slate-800">
          Terakhir diperbarui: 11 Oktober 2026
        </p>

        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            Kebijakan Privasi ini menjelaskan bagaimana NgeGhibah.com ("kami") mengumpulkan, menggunakan, dan melindungi
            informasi pribadi pembaca saat mengakses dan menikmati konten di situs kami.
          </p>

          <h2 className="text-lg font-bold text-white font-display">1. Informasi yang Kami Kumpulkan</h2>
          <ul className="space-y-2 pl-4 list-disc">
            <li>
              <strong>Data Otomatis Non-Pribadi:</strong> Alamat IP tersamar, tipe peramban (browser), resolusi layar, waktu akses, dan halaman rujukan untuk optimasi kecepatan server dan tata letak.
            </li>
            <li>
              <strong>Data yang Anda Berikan Secara Sukarela:</strong> Alamat email ketika mendaftar newsletter atau mengirimkan permohonan hak jawab melalui formulir kontak.
            </li>
          </ul>

          <h2 className="text-lg font-bold text-white font-display">2. Penggunaan Cookie & Google AdSense</h2>
          <p>
            NgeGhibah.com menggunakan cookie untuk mengingat preferensi pengunjung (seperti mode tampilan gelap) dan mengumpulkan data analitik agregat.
          </p>
          <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800 text-xs sm:text-sm">
            <p className="text-slate-300">
              Mitra periklanan pihak ketiga kami, termasuk <strong>Google AdSense</strong>, menggunakan cookie (seperti DoubleClick cookie) untuk menayangkan iklan relevan kepada pengguna berdasarkan kunjungan mereka ke situs ini dan/atau situs lain di internet. Pengguna dapat memilih untuk menonaktifkan penggunaan cookie iklan terpersonalisasi melalui Setelan Iklan Google (Google Ads Settings).
            </p>
          </div>

          <h2 className="text-lg font-bold text-white font-display">3. Keamanan Informasi</h2>
          <p>
            Kami menerapkan enkripsi HTTPS standar industri pada seluruh halaman situs web guna menjamin pertukaran data yang aman antara perangkat Anda dan server NgeGhibah.com.
          </p>
        </div>
      </div>
    </div>
  );
}
