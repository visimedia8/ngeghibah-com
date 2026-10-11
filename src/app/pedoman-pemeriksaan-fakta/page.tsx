import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ChevronRight, Search, ShieldCheck, AlertCircle, RefreshCw, Eye, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pedoman Pemeriksaan Fakta & Verifikasi (Fact-Checking Policy) — NgeGhibah.com',
  description:
    'Metodologi verifikasi jejak digital, standar indikator Ghibah Meter, verifikasi sumber primer, dan transparansi ralat di NgeGhibah.com.',
  alternates: { canonical: 'https://ngeghibah.com/pedoman-pemeriksaan-fakta' },
};

export default function PedomanPemeriksaanFaktaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pedoman Pemeriksaan Fakta & Verifikasi NgeGhibah.com',
    url: 'https://ngeghibah.com/pedoman-pemeriksaan-fakta',
    description:
      'Protokol resmi dan metodologi verifikasi fakta pop-kultur serta standar Ghibah Meter di NgeGhibah.com.',
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
        <span className="text-emerald-400 font-bold">Pemeriksaan Fakta</span>
      </nav>

      <div className="rounded-3xl bg-velvet/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>E-E-A-T & FACT-CHECKING METHODOLOGY</span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-2">
          Pedoman Pemeriksaan Fakta & Verifikasi
        </h1>
        <p className="text-xs font-mono text-slate-400 mb-8 pb-6 border-b border-slate-800">
          Standar Resmi Redaksi NgeGhibah.com • Terakhir Diperbarui: 11 Oktober 2026
        </p>

        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <p className="lead text-base sm:text-lg text-slate-200">
            Di era media sosial di mana rumor selebritas dan video potongan konteks viral dalam hitungan menit, <strong>NgeGhibah.com</strong> memegang teguh komitmen: <em>"Bukan Sekadar Gosip, Ini Kronologi & Verifikasi."</em> Kami percaya bahwa audiens Indonesia berhak mendapatkan informasi budaya populer yang akurat, berimbang, dan dapat dipertanggungjawabkan secara jurnalistik.
          </p>

          <p>
            Pedoman Pemeriksaan Fakta ini menjelaskan secara transparan metodologi kerja tim riset data, proses forensik jejak digital, serta sistem indikator <strong>Ghibah Meter</strong> yang kami gunakan pada setiap artikel yang dipublikasikan.
          </p>

          {/* Ghibah Meter Matrix */}
          <h2 className="text-xl font-bold text-white font-display pt-2">
            1. Sistem Indikator Ghibah Meter
          </h2>
          <p>
            Setiap liputan peristiwa di NgeGhibah.com wajib diklasifikasikan ke dalam salah satu dari empat kategori verifikasi <strong>Ghibah Meter</strong> untuk memberikan transparansi seketika kepada pembaca:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 flex items-start gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 shrink-0 mt-1 shadow-[0_0_8px_#34d399]" />
              <div>
                <div className="font-bold text-emerald-400 text-sm font-mono uppercase tracking-wider">
                  FAKTA TERVERIFIKASI (A1 — 90–100%)
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Didukung oleh pernyataan resmi langsung dari narasumber, konferensi pers resmi, rilis agensi representasi, atau dokumen hukum sah yang telah divalidasi keasliannya.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 flex items-start gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-400 shrink-0 mt-1 shadow-[0_0_8px_#22d3ee]" />
              <div>
                <div className="font-bold text-neon-cyan text-sm font-mono uppercase tracking-wider">
                  JEJAK DIGITAL OTENTIK (A2 — 70–89%)
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Didukung oleh rekaman siaran langsung (*live broadcast*), unggahan akun media sosial resmi centang biru sebelum dihapus, atau arsip digital (Wayback Machine) yang telah diverifikasi non-rekayasa.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex items-start gap-3">
              <span className="w-3 h-3 rounded-full bg-amber-400 shrink-0 mt-1 shadow-[0_0_8px_#fbbf24]" />
              <div>
                <div className="font-bold text-amber-400 text-sm font-mono uppercase tracking-wider">
                  DALAM INVESTIGASI / MENUNGGU TANGGAPAN (B1 — 40–69%)
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Isu memiliki indikasi awal yang signifikan namun belum ada klarifikasi resmi dari salah satu pihak. Artikel mencantumkan label keterangan upaya konfirmasi yang sedang berjalan.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/40 flex items-start gap-3">
              <span className="w-3 h-3 rounded-full bg-rose-400 shrink-0 mt-1 shadow-[0_0_8px_#f43f5e]" />
              <div>
                <div className="font-bold text-rose-400 text-sm font-mono uppercase tracking-wider">
                  RUMOR BELUM TERBUKTI (C1 — 0–39%)
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Narasi yang murni bersumber dari spekulasi anonim media sosial, rumor forum tanpa bukti digital pendukung, atau teori konspirasi yang dibahas murni untuk tujuan meluruskan konteks hoaks.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            2. Protokol Forensik Jejak Digital
          </h2>
          <p>
            Sebelum suatu tangkapan layar, klip video, atau rekaman audio dijadikan rujukan dalam artikel kami, tim riset wajib menjalankan tiga lapisan pemeriksaan:
          </p>
          <ol className="space-y-3 pl-4 list-decimal text-xs sm:text-sm text-slate-300">
            <li>
              <strong>Pemeriksaan Metadata & Timestamp:</strong> Memastikan kronologi waktu unggahan asli, mencocokkan zona waktu (WIB/GMT), dan mendeteksi apakah materi berasal dari arsip lama yang didaur ulang untuk menyesatkan konteks.
            </li>
            <li>
              <strong>Deteksi Rekayasa AI & Deepfake:</strong> Menganalisis inkonsistensi audio, sinkronisasi gerak bibir, artefak kompresi gambar, dan pergerakan tangan guna memastikan materi visual bukan hasil manipulasi Generative AI (deepfake).
            </li>
            <li>
              <strong>Pelacakan Sumber Pertama (First Origin Tracking):</strong> Menelusuri siapa pengunggah pertama (*original poster / OP*) untuk memverifikasi motif dan kredibilitas saksi mata digital.
            </li>
          </ol>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            3. Verifikasi Dua Arah & Keberimbangan (Cover Both Sides)
          </h2>
          <p>
            Sesuai Pedoman Pemberitaan Media Siber Dewan Pers RI, berita yang mengandung unsur sangkaan terhadap individu atau figur publik wajib memberikan ruang konfirmasi yang adil. Apabila narasumber belum merespons pesan konfirmasi hingga tenggat penayangan mendesak, redaksi wajib mencantumkan:
          </p>
          <div className="p-4 rounded-xl bg-obsidian-deep border border-slate-800 text-xs font-mono text-slate-300">
            <em>"Redaksi NgeGhibah.com telah menghubungi pihak manajemen/bersangkutan pada [Tanggal, Pukul WIB] dan masih menunggu tanggapan resmi untuk pembaruan artikel ini."</em>
          </div>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            4. Kebijakan Ralat, Koreksi, & Audit Trail
          </h2>
          <p>
            Integritas media diukur dari keberanian mengakui dan memperbaiki kekeliruan secara terbuka. Jika terdapat kesalahan data (seperti nama, tanggal, kutipan, atau status peristiwa):
          </p>
          <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm">
            <li>Koreksi dilakukan sesegera mungkin pada artikel asli tanpa menghapus konteks transparansi.</li>
            <li>Redaksi menambahkan kotak <strong>Catatan Koreksi (Correction Box)</strong> di bagian akhir artikel yang merinci apa yang diubah dan waktu pembaruan dilakukan.</li>
            <li>Jika ralat bersifat substansial yang mengubah kesimpulan berita, redaksi menerbitkan pemberitahuan klarifikasi terpisah pada kanal terkait.</li>
          </ul>

          <h2 className="text-xl font-bold text-white font-display pt-2">
            5. Kirimkan Koreksi atau Tip Verifikasi
          </h2>
          <p>
            Kami mengajak pembaca untuk ikut mengawasi akurasi liputan kami. Jika Anda menemukan kekeliruan data atau memiliki bukti digital baru yang dapat melengkapi investigasi:
          </p>
          <div className="p-4 rounded-2xl bg-obsidian-deep border border-slate-800 text-xs sm:text-sm font-mono space-y-1.5">
            <div><strong className="text-white">Surel Tim Fact-Checking:</strong> <a href="mailto:factcheck@ngeghibah.com" className="text-emerald-400 hover:underline">factcheck@ngeghibah.com</a></div>
            <div><strong className="text-white">Layanan Hak Jawab Resmi:</strong> <a href="mailto:hakjawab@ngeghibah.com" className="text-emerald-400 hover:underline">hakjawab@ngeghibah.com</a></div>
            <div><strong className="text-white">Penanggung Jawab Riset:</strong> Fajar Ramadhan (Lead Fact-Checker NgeGhibah Labs)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
