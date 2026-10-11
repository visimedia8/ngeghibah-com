'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  basePath,
}) => {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    if (page === 1) return basePath;
    return `${basePath}${basePath.includes('?') ? '&' : '?'}page=${page}`;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Paginasi Artikel"
      className="flex items-center justify-center gap-2 my-10 font-mono text-xs"
    >
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="flex items-center gap-1 px-3 py-2 rounded-xl bg-velvet border border-slate-700 text-slate-300 hover:text-white hover:border-neon-pink transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Sebelumnya</span>
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-3 py-2 rounded-xl bg-velvet/40 border border-slate-800 text-slate-600 cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Sebelumnya</span>
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((p) => {
          const isActive = p === currentPage;
          return (
            <Link
              key={p}
              href={getPageUrl(p)}
              className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold transition-all ${
                isActive
                  ? 'bg-neon-pink text-white shadow-neon-pink'
                  : 'bg-velvet border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500'
              }`}
            >
              {p}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="flex items-center gap-1 px-3 py-2 rounded-xl bg-velvet border border-slate-700 text-slate-300 hover:text-white hover:border-neon-pink transition-colors"
        >
          <span className="hidden sm:inline">Selanjutnya</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-3 py-2 rounded-xl bg-velvet/40 border border-slate-800 text-slate-600 cursor-not-allowed">
          <span className="hidden sm:inline">Selanjutnya</span>
          <ChevronRight className="w-4 h-4" />
        </span>
      )}
    </nav>
  );
};
