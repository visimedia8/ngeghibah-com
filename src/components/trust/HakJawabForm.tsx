'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, FileCheck, ShieldAlert } from 'lucide-react';

export const HakJawabForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    roleOrAffiliation: '',
    email: '',
    phone: '',
    articleUrl: '',
    objectionSubject: '',
    clarificationText: '',
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) return;

    setIsSubmitting(true);
    // Simulate optimistic submit
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-8 text-center space-y-4 animate-fadeIn">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white font-display">
          Permohonan Hak Jawab Berhasil Diterima Redaksi
        </h3>
        <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          Nomor Tiket Aduan Anda: <strong className="text-emerald-400 font-mono">HJ-{Date.now().toString().slice(-6)}</strong>.
          Tim Redaksi & Ombudsman Hukum NgeGhibah.com akan menelaah berkas Anda dalam kurun waktu 1x24 jam kerja sesuai amanat UU Pers.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              roleOrAffiliation: '',
              email: '',
              phone: '',
              articleUrl: '',
              objectionSubject: '',
              clarificationText: '',
              agreeTerms: false,
            });
          }}
          className="px-4 py-2 bg-slate-800 text-xs font-mono text-slate-300 hover:text-white rounded-xl border border-slate-700"
        >
          Kirim Formulir Lain
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-velvet-border bg-velvet p-6 sm:p-8 space-y-6 shadow-card-glow"
    >
      <div className="border-b border-slate-800 pb-4">
        <span className="text-xs font-mono uppercase tracking-wider text-neon-cyan font-bold block mb-1">
          FORMULIR ELEKTRONIK PENGADUAN & HAK JAWAB
        </span>
        <h3 className="text-lg font-bold text-white font-display">
          Kirim Permohonan Klarifikasi / Hak Koreksi Berita
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Semua data yang dikirimkan dilindungi oleh kerahasiaan korespondensi hukum redaksi.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
            Nama Lengkap Pemohon *
          </label>
          <input
            type="text"
            required
            placeholder="Sesuai KTP / Paspor"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full bg-obsidian border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
            Kapasitas / Kuasa Hukum / Hubungan *
          </label>
          <input
            type="text"
            required
            placeholder="Pribadi / Kuasa Hukum / Manajemen"
            value={formData.roleOrAffiliation}
            onChange={(e) =>
              setFormData({ ...formData, roleOrAffiliation: e.target.value })
            }
            className="w-full bg-obsidian border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
            Email Resmi Korespondensi *
          </label>
          <input
            type="email"
            required
            placeholder="nama@domain.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-obsidian border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
            Nomor Telepon / WhatsApp Aktif *
          </label>
          <input
            type="tel"
            required
            placeholder="+62 812-xxxx-xxxx"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-obsidian border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
          Tautan URL Berita NgeGhibah yang Dimaksud *
        </label>
        <input
          type="url"
          required
          placeholder="https://ngeghibah.com/artikel/judul-artikel"
          value={formData.articleUrl}
          onChange={(e) => setFormData({ ...formData, articleUrl: e.target.value })}
          className="w-full bg-obsidian border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
          Pokok Sanggahan / Keberatan *
        </label>
        <input
          type="text"
          required
          placeholder="Contoh: Koreksi status perkara hukum / pembantahan rumor"
          value={formData.objectionSubject}
          onChange={(e) =>
            setFormData({ ...formData, objectionSubject: e.target.value })
          }
          className="w-full bg-obsidian border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
          Uraian Fakta Sebenarnya & Teks Hak Jawab *
        </label>
        <textarea
          rows={5}
          required
          placeholder="Jelaskan secara rinci kronologi yang sebenarnya, lampirkan nomor dokumen pendukung, dan sertakan rilis pernyataan resmi..."
          value={formData.clarificationText}
          onChange={(e) =>
            setFormData({ ...formData, clarificationText: e.target.value })
          }
          className="w-full bg-obsidian border border-slate-700 rounded-xl p-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan leading-relaxed"
        />
      </div>

      <div className="flex items-start gap-2.5 pt-2">
        <input
          type="checkbox"
          id="terms"
          checked={formData.agreeTerms}
          onChange={(e) =>
            setFormData({ ...formData, agreeTerms: e.target.checked })
          }
          className="mt-0.5 rounded border-slate-700 bg-obsidian text-neon-pink focus:ring-0"
        />
        <label htmlFor="terms" className="text-xs text-slate-300 leading-normal">
          Saya menyatakan bahwa data dan informasi yang saya sampaikan adalah benar, sah, dan dapat dipertanggungjawabkan secara hukum sesuai Undang-Undang Pers.
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !formData.agreeTerms}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neon-pink hover:bg-neon-pink/90 disabled:opacity-50 text-white font-bold text-xs sm:text-sm transition-all shadow-neon-pink"
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? 'Mengirim Berkas...' : 'Kirim Permohonan Hak Jawab'}</span>
      </button>
    </form>
  );
};
