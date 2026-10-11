import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, Mail, Phone, Clock, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mekanisme & Prosedur Hak Jawab — NgeGhibah.com',
  description:
    'Layanan pengajuan hak jawab, ralat, dan klarifikasi berita sesuai Pasal 5 UU No. 40 Tahun 1999 tentang Pers.',
  alternates: { canonical: 'https://ngeghibah.com/hak-jawab' },
};

export default function HakJawabPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <Link href="/" className="hover:text-white transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-emerald-400 font-bold">Hak Jawab</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>HAK JAWAB & KLARIFIKASI RESMI</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-4">
          Prosedur Pengajuan Hak Jawab & Koreksi Berita
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed mb-8 pb-6 border-b border-slate-800">
          NgeGhibah.com menjunjung tinggi hak setiap individu, figur publik, agensi manajemen, maupun badan hukum
          yang merasa dirugikan oleh materi pemberitaan kami, sebagaimana diatur dalam <strong>Pasal 5 UU No. 40 Tahun 1999 tentang Pers</strong>.
        </p>

        {/* Channels Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-obsidian-deep border border-emerald-500/30">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase mb-2">
              <Mail className="w-4 h-4" />
              <span>EMAIL KHUSUS HAK JAWAB</span>
            </div>
            <div className="text-white font-bold text-base font-mono">hakjawab@ngeghibah.com</div>
            <p className="text-xs text-slate-400 mt-1">
              Gunakan subjek: <code>[HAK JAWAB] - Judul Artikel - Nama Pihak</code>
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-800">
            <div className="flex items-center gap-2 text-neon-cyan text-xs font-mono font-bold uppercase mb-2">
              <Clock className="w-4 h-4" />
              <span>KOMITMEN RESPON 24 JAM</span>
            </div>
            <div className="text-white font-bold text-base">Maksimal 1 x 24 Jam Kerja</div>
            <p className="text-xs text-slate-400 mt-1">
              Redaksi akan memproses dan mempublikasikan hak jawab pada kesempatan pertama.
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300">
          <h2 className="text-lg font-bold text-white font-display">Syarat & Berkas Pengajuan Hak Jawab:</h2>
          <ol className="space-y-3 pl-4 list-decimal text-slate-300">
            <li>
              <strong>Pemohon Sah:</strong> Pengajuan harus diajukan langsung oleh pihak yang bersangkutan atau kuasa hukum/manajemen resmi yang ditunjuk dengan surat kuasa sah.
            </li>
            <li>
              <strong>Tautan Artikel Spesifik:</strong> Cantumkan URL lengkap artikel di NgeGhibah.com yang ingin dikoreksi atau ditanggapi.
            </li>
            <li>
              <strong>Poin Keberatan yang Jelas:</strong> Uraikan dengan rinci bagian mana dari artikel yang dinilai tidak akurat, keliru, atau merugikan.
            </li>
            <li>
              <strong>Dokumen Pendukung:</strong> Lampirkan bukti verifikasi tandingan (seperti rilis pers resmi, bukti surat, atau rekaman klarifikasi asli).
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
