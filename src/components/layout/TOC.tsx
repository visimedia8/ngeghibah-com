'use client';

import React, { useState } from 'react';
import { ListFilter, ChevronDown, ChevronUp } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface TOCProps {
  items: TOCItem[];
}

export const TOC: React.FC<TOCProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Daftar Isi Artikel"
      className="my-6 rounded-2xl bg-velvet/60 border border-slate-700/60 p-4 sm:p-5 backdrop-blur-md"
    >
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neon-cyan font-bold">
          <ListFilter className="w-4 h-4 text-neon-pink" />
          <span>DAFTAR ISI & KRONOLOGI POIN</span>
        </div>
        <button
          type="button"
          aria-label={isOpen ? 'Tutup daftar isi' : 'Buka daftar isi'}
          className="text-slate-400 hover:text-white p-1"
        >
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {isOpen && (
        <ol className="mt-3.5 space-y-2 text-xs sm:text-sm font-sans border-t border-slate-800/80 pt-3">
          {items.map((item, idx) => (
            <li
              key={item.id}
              className={`flex items-start gap-2 text-slate-300 hover:text-neon-cyan transition-colors ${
                item.level === 3 ? 'pl-4 text-slate-400' : 'font-medium'
              }`}
            >
              <span className="text-neon-pink font-mono text-xs">{idx + 1}.</span>
              <a href={`#${item.id}`} className="hover:underline leading-relaxed">
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
};
