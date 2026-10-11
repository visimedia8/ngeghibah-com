import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ChevronRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pedoman Pemberitaan Media Siber — NgeGhibah.com',
  description:
    'Pedoman pemberitaan media siber NgeGhibah.com sesuai ketentuan Peraturan Dewan Pers Nomor 1/Peraturan-DP/III/2012.',
  alternates: { canonical: 'https://ngeghibah.com/pedoman-media-siber' },
};

export default function PedomanMediaSiberPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <Link href="/" className="hover:text-white transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-emerald-400 font-bold">Pedoman Media Siber</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <Shield className="w-3.5 h-3.5" />
          <span>DEWAN PERS REPUBLIK INDONESIA COMPLIANT</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-4">
          Pedoman Pemberitaan Media Siber
        </h1>
        <p className="text-xs font-mono text-slate-400 mb-8 pb-6 border-b border-slate-800">
          Disahkan Dewan Pers dan Komunitas Pers di Jakarta, 3 Februari 2012
        </p>

        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <h2 className="text-lg font-bold text-white font-display">1. Ruang Lingkup</h2>
          <p>
            Media Siber adalah segala bentuk media yang menggunakan wahana internet dan melaksanakan kegiatan jurnalistik,
            serta memenuhi persyaratan Undang-Undang Pokok Pers dan Standar Perusahaan Pers yang ditetapkan Dewan Pers.
          </p>

          <h2 className="text-lg font-bold text-white font-display">2. Verifikasi dan Keberimbangan Berita</h2>
          <ul className="space-y-2 pl-4 list-disc">
            <li>Pada prinsipnya setiap berita harus melalui verifikasi.</li>
            <li>Berita yang dapat merugikan pihak lain memerlukan verifikasi pada berita yang sama untuk memenuhi prinsip akurasi dan keberimbangan.</li>
            <li>
              Dalam hal prinsip verifikasi pada berita mendesak (breaking news) belum terpenuhi, berita tetap dapat ditayangkan dengan syarat: mencantumkan keterangan bahwa berita masih memerlukan verifikasi lebih lanjut, mencantumkan label status di awal, dan segera memperbarui berita setelah verifikasi diperoleh.
            </li>
          </ul>

          <h2 className="text-lg font-bold text-white font-display">3. Isi Buatan Pengguna (User Generated Content)</h2>
          <p>
            NgeGhibah.com mewajibkan pengguna untuk mendaftar sebelum dapat mempublikasikan komentar, serta melarang isi buatan pengguna yang memuat fitnah, kebencian berbasis SARA, pornografi, atau ancaman kekerasan. Redaksi berhak menyunting atau menghapus komentar yang melanggar hukum.
          </p>

          <h2 className="text-lg font-bold text-white font-display">4. Ralat, Koreksi, dan Hak Jawab</h2>
          <ul className="space-y-2 pl-4 list-disc">
            <li>Ralat, koreksi, dan hak jawab mengacu pada Undang-Undang Pokok Pers, Kode Etik Jurnalistik, dan Pedoman Hak Jawab yang ditetapkan Dewan Pers.</li>
            <li>Ralat, koreksi, atau hak jawab wajib ditautkan pada berita yang diralat atau dikoreksi.</li>
            <li>Di setiap berita ralat, koreksi, dan hak jawab wajib dicantumkan waktu pemuatan ralat, koreksi, atau hak jawab tersebut.</li>
          </ul>

          <h2 className="text-lg font-bold text-white font-display">5. Pencabutan Berita</h2>
          <p>
            Berita yang sudah dipublikasikan tidak dapat dicabut karena alasan penyensoran dari pihak luar redaksi, kecuali terkait masalah SARA, kesusilaan, masa depan anak, pengalaman traumatik korban, atau berdasarkan pertimbangan khusus lain yang ditetapkan Dewan Pers.
          </p>
        </div>
      </div>
    </div>
  );
}
