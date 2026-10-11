import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, Mail, Clock, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mekanisme & Prosedur Hak Jawab — NgeGhibah.com',
  description:
    'Layanan pengajuan hak jawab, ralat, dan klarifikasi berita resmi sesuai Pasal 5 UU No. 40 Tahun 1999 tentang Pers dengan komitmen respon 1x24 jam di NgeGhibah.com.',
  alternates: { canonical: 'https://ngeghibah.com/hak-jawab' },
};

export default function HakJawabPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Prosedur Hak Jawab & Klarifikasi Berita NgeGhibah.com',
    url: 'https://ngeghibah.com/hak-jawab',
    description: 'Prosedur formal pengajuan hak jawab dan permohonan koreksi berita bagi figur publik dan instansi di NgeGhibah.com.',
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: 'NgeGhibah.com',
      url: 'https://ngeghibah.com',
    },
    dateModified: '2026-10-11',
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
          yang merasa dirugikan oleh materi pemberitaan kami, sebagaimana diatur dalam <strong>Pasal 5 UU No. 40 Tahun 1999 tentang Pers</strong> serta Kode Etik Jurnalistik Dewan Pers.
        </p>

        {/* Channels Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-obsidian-deep border border-emerald-500/40">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase mb-2">
              <Mail className="w-4 h-4" />
              <span>EMAIL KHUSUS HAK JAWAB</span>
            </div>
            <div className="text-white font-bold text-base font-mono">
              <a href="mailto:hakjawab@ngeghibah.com" className="hover:text-emerald-400 transition-colors">hakjawab@ngeghibah.com</a>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Gunakan format subjek: <code>[HAK JAWAB] - Judul Artikel - Nama Pihak</code>
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-deep border border-slate-800">
            <div className="flex items-center gap-2 text-neon-cyan text-xs font-mono font-bold uppercase mb-2">
              <Clock className="w-4 h-4" />
              <span>KOMITMEN RESPON 24 JAM</span>
            </div>
            <div className="text-white font-bold text-base">Maksimal 1 x 24 Jam Kerja</div>
            <p className="text-xs text-slate-400 mt-1">
              Redaksi akan memproses, memverifikasi, dan menayangkan hak jawab secara proporsional.
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300">
          <h2 className="text-lg font-bold text-white font-display">Syarat & Berkas Pengajuan Hak Jawab:</h2>
          <ol className="space-y-3 pl-4 list-decimal text-xs sm:text-sm text-slate-300">
            <li>
              <strong>Pemohon yang Sah:</strong> Pengajuan wajib diajukan langsung oleh pihak yang bersangkutan secara pribadi atau kuasa hukum/manajemen resmi dengan melampirkan salinan kartu identitas atau surat kuasa yang sah.
            </li>
            <li>
              <strong>Tautan URL Artikel Spesifik:</strong> Cantumkan URL lengkap dari artikel di NgeGhibah.com yang ingin dikoreksi atau ditanggapi.
            </li>
            <li>
              <strong>Poin Keberatan Terperinci:</strong> Uraikan secara spesifik paragraf atau data mana yang dinilai keliru, tidak berimbang, atau merugikan reputasi.
            </li>
            <li>
              <strong>Dokumen Klarifikasi Tandingan:</strong> Sertakan penjelasan sanggahan resmi, kronologi versi pemohon, atau dokumen pendukung untuk diterbitkan pada berita pembaruan (*update*).
            </li>
          </ol>

          <h2 className="text-lg font-bold text-white font-display pt-4">Bentuk Penyelesaian Hak Jawab:</h2>
          <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm text-slate-300">
            <li>Pemuatan tanggapan hak jawab secara utuh pada artikel terkait dengan judul yang memuat keterangan ralat/klarifikasi.</li>
            <li>Penerbitan artikel pembaruan terpisah jika tanggapan memuat fakta baru yang mengubah substansi perkara sebelumnya.</li>
            <li>Pembaruan skor indikator <em>Ghibah Meter</em> pada artikel bersangkutan untuk mencerminkan status konfirmasi resmi (Level A1).</li>
          </ul>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-3 text-xs font-mono">
            <Link href="/pedoman-media-siber" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-emerald-400 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Pedoman Media Siber Dewan Pers</span>
              <ArrowRight className="w-3 h-3 text-emerald-400" />
            </Link>
            <Link href="/kode-etik" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-neon-pink text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Kode Etik Jurnalistik</span>
              <ArrowRight className="w-3 h-3 text-neon-pink" />
            </Link>
            <Link href="/redaksi" className="p-2.5 rounded-xl bg-obsidian-deep border border-slate-800 hover:border-neon-cyan text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Kontak Dewan Redaksi</span>
              <ArrowRight className="w-3 h-3 text-neon-cyan" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
