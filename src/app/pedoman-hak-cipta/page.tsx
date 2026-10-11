import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Copyright, ChevronRight, ShieldCheck, Mail, AlertTriangle, FileCheck2, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pedoman Hak Cipta & DMCA Takedown (Copyright Policy) — NgeGhibah.com',
  description:
    'Prosedur penanganan hak cipta, doktrin Fair Use kutipan media sosial, formulir DMCA takedown notice, dan kontak agen hak cipta resmi NgeGhibah.com.',
  alternates: { canonical: 'https://ngeghibah.com/pedoman-hak-cipta' },
};

export default function PedomanHakCiptaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pedoman Hak Cipta & DMCA Takedown NgeGhibah.com',
    url: 'https://ngeghibah.com/pedoman-hak-cipta',
    description:
      'Ketentuan resmi perlindungan hak cipta, prinsip penggunaan wajar jurnalistik, dan mekanisme penghapusan konten di NgeGhibah.com.',
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
        <span className="text-amber-400 font-bold">Pedoman Hak Cipta & DMCA</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 text-amber-400 border border-amber-800/40 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <Copyright className="w-3.5 h-3.5" />
          <span>INTELLECTUAL PROPERTY & DMCA SAFE HARBOR</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-2">
          Pedoman Hak Cipta & Prosedur DMCA Takedown
        </h1>
        <p className="text-xs font-mono text-slate-400 mb-8 pb-6 border-b border-slate-800">
          Standar Kepatuhan Hukum Hak Cipta • Terakhir Diperbarui: 11 Oktober 2026
        </p>

        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <p className="lead text-base sm:text-lg text-slate-200">
            <strong>NgeGhibah.com</strong> menghormati sepenuhnya hak kekayaan intelektual para pencipta karya, fotografer, artis, agensi hiburan, dan kreator konten digital. Kami tunduk pada <strong>Undang-Undang Republik Indonesia Nomor 28 Tahun 2014 tentang Hak Cipta</strong> serta prinsip-prinsip <em>Digital Millennium Copyright Act (DMCA, 17 U.S.C. § 512)</em>.
          </p>

          <p>
            Halaman ini memaparkan batasan pengutipan konten di bawah doktrin <em>Fair Use</em> serta tata cara resmi bagi pemilik hak cipta untuk mengajukan permohonan penurunan (*takedown*) materi yang diduga melanggar hak cipta.
          </p>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            1. Doktrin Penggunaan Wajar Jurnalistik (Fair Use)
          </h2>
          <p>
            Sebagai portal berita dan analisis budaya populer, NgeGhibah.com kerap mengutip tangkapan layar (*screenshots*), cuplikan video singkat (*clips*), atau gambar promosi dari platform publik (seperti Instagram, TikTok, X, YouTube, Threads) untuk tujuan:
          </p>
          <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm">
            <li>Pelaporan berita mendesak (*news reporting*) dan rekaman sejarah peristiwa publik.</li>
            <li>Kritik karya, ulasan pop-kultur, dan telaah editorial mendalam.</li>
            <li>Verifikasi keaslian jejak digital demi meluruskan informasi keliru di tengah masyarakat.</li>
          </ul>
          <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800 text-xs sm:text-sm text-slate-300">
            Berdasarkan <strong>Pasal 44 UU Hak Cipta No. 28/2014</strong>, penggunaan ciptaan untuk keperluan pendidikan, penelitian, penulisan karya ilmiah, laporan kritik, atau ulasan tidak dianggap sebagai pelanggaran hak cipta sepanjang sumbernya disebutkan atau dicantumkan secara lengkap.
          </div>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            2. Prosedur Pemberitahuan Pelanggaran Hak Cipta (DMCA Notice)
          </h2>
          <p>
            Jika Anda adalah pemilik hak cipta yang sah atau kuasa hukum resminya, dan meyakini bahwa suatu materi visual, foto, atau teks yang dimuat di NgeGhibah.com melanggar hak cipta Anda di luar cakupan <em>Fair Use</em>, Anda berhak mengajukan permohonan tertulis kepada Agen Hak Cipta kami.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-white">
            Surat pemberitahuan Anda wajib memuat unsur-unsur berikut:
          </p>
          <ol className="space-y-3 pl-4 list-decimal text-xs sm:text-sm text-slate-300">
            <li>
              <strong>Identitas Karya Cipta:</strong> Deskripsi lengkap mengenai karya berhak cipta yang diklaim telah dilanggar beserta bukti kepemilikan hak cipta yang sah (misal tautan karya asli atau nomor sertifikat pendaftaran).
            </li>
            <li>
              <strong>Tautan Materi di NgeGhibah.com:</strong> Tautan URL spesifik dari halaman artikel di mana materi yang disengketakan berada.
            </li>
            <li>
              <strong>Informasi Kontak Pemohon:</strong> Nama lengkap, institusi/agensi, alamat surat, nomor telepon, dan alamat email aktif Anda.
            </li>
            <li>
              <strong>Pernyataan Niat Baik (*Good Faith Statement*):</strong> Pernyataan bahwa Anda berkeyakinan dengan itikad baik bahwa penggunaan materi tersebut tidak diizinkan oleh pemilik hak cipta, agennya, atau hukum.
            </li>
            <li>
              <strong>Pernyataan Kebenaran di Bawah Sumpah:</strong> Pernyataan bahwa informasi dalam pemberitahuan adalah akurat dan Anda berwenang bertindak atas nama pemilik hak cipta.
            </li>
            <li>
              <strong>Tanda Tangan:</strong> Tanda tangan fisik atau elektronik dari pemilik hak cipta atau kuasanya.
            </li>
          </ol>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            3. Alamat Kontak Agen Hak Cipta Resmi (Designated Copyright Agent)
          </h2>
          <p>
            Kirimkan surat pemberitahuan resmi ke saluran yang telah kami tunjuk:
          </p>
          <div className="p-5 rounded-2xl bg-obsidian-deep border border-amber-500/30 space-y-2 text-xs sm:text-sm font-mono">
            <div><strong className="text-white">Nama Agen:</strong> Legal & Copyright Compliance Department</div>
            <div><strong className="text-white">Perusahaan:</strong> PT Media Siber Ghibah Nusantara</div>
            <div><strong className="text-white">Surel Khusus DMCA:</strong> <a href="mailto:copyright@ngeghibah.com" className="text-amber-400 hover:underline">copyright@ngeghibah.com</a></div>
            <div><strong className="text-white">Alamat Surat Fisik:</strong> Sovereign Plaza Lt. 12, Jl. TB Simatupang No. 36, Cilandak Barat, Jakarta Selatan 12430</div>
            <div><strong className="text-white">Telepon Hotline:</strong> (021) 7592-0000</div>
          </div>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            4. Tindakan Redaksi & Komitmen Waktu Respons
          </h2>
          <p>
            Setelah menerima pemberitahuan pelanggaran yang memenuhi syarat formal di atas:
          </p>
          <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm">
            <li>Tim kepatuhan kami akan meneliti berkas pengaduan dalam waktu maksimal <strong>1 x 24 jam kerja</strong>.</li>
            <li>Sebagai langkah pencegahan, redaksi dapat menurunkan sementara atau mengganti materi gambar yang disengketakan dengan aset ilustrasi alternatif sembari menunggu proses verifikasi selesai.</li>
            <li>Kami akan mengirimkan konfirmasi tertulis kepada pemohon terkait langkah koreksi yang telah dieksekusi.</li>
          </ul>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            5. Prosedur Pemberitahuan Sanggahan (Counter-Notification)
          </h2>
          <p>
            Apabila pihak kontributor atau staf kami meyakini bahwa materi yang diturunkan tidak melanggar hak cipta (misalnya materi berada dalam domain publik atau memiliki izin lisensi editorial sah), pihak tersebut berhak mengajukan Pemberitahuan Sanggahan tertulis kepada Agen Hak Cipta kami sesuai ketentuan perundang-undangan.
          </p>
        </div>
      </div>
    </div>
  );
}
