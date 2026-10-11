import React from 'react';

export default function ArticleLoading() {
  return (
    <div className="min-h-screen py-8 sm:py-12 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-3 w-16 bg-slate-800 rounded animate-shimmer" />
          <div className="h-3 w-3 bg-slate-800 rounded" />
          <div className="h-3 w-20 bg-slate-800 rounded animate-shimmer" />
          <div className="h-3 w-3 bg-slate-800 rounded" />
          <div className="h-3 w-40 bg-slate-800 rounded animate-shimmer" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Article Skeleton (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Metadata Pills */}
            <div className="flex items-center gap-3">
              <div className="h-6 w-24 rounded-full bg-slate-800 animate-shimmer" />
              <div className="h-4 w-28 rounded bg-slate-800 animate-shimmer" />
            </div>

            {/* Title Skeleton */}
            <div className="space-y-3">
              <div className="h-8 sm:h-10 w-full rounded-lg bg-slate-800 animate-shimmer" />
              <div className="h-8 sm:h-10 w-3/4 rounded-lg bg-slate-800 animate-shimmer" />
            </div>

            {/* Author Byline Skeleton */}
            <div className="flex items-center gap-3 py-4 border-y border-slate-800">
              <div className="w-10 h-10 rounded-full bg-slate-800 animate-shimmer" />
              <div className="space-y-1.5">
                <div className="h-4 w-32 rounded bg-slate-800 animate-shimmer" />
                <div className="h-3 w-24 rounded bg-slate-800/60 animate-shimmer" />
              </div>
            </div>

            {/* Ghibah Meter Skeleton */}
            <div className="rounded-2xl border border-slate-800 bg-velvet p-5 space-y-3 animate-shimmer">
              <div className="flex justify-between items-center">
                <div className="h-4 w-36 rounded bg-slate-800" />
                <div className="h-5 w-28 rounded bg-slate-800" />
              </div>
              <div className="h-3 w-full rounded-full bg-slate-800/80" />
              <div className="h-3 w-2/3 rounded bg-slate-800/60" />
            </div>

            {/* 16:9 Hero Image Skeleton */}
            <div className="aspect-[16/9] w-full rounded-2xl bg-slate-800/80 border border-slate-800 animate-shimmer" />

            {/* Article Paragraphs Skeleton */}
            <div className="space-y-4 pt-4">
              <div className="h-4 w-full rounded bg-slate-800/70 animate-shimmer" />
              <div className="h-4 w-full rounded bg-slate-800/70 animate-shimmer" />
              <div className="h-4 w-5/6 rounded bg-slate-800/70 animate-shimmer" />
              <div className="h-4 w-full rounded bg-slate-800/70 animate-shimmer" />
              <div className="h-4 w-3/4 rounded bg-slate-800/70 animate-shimmer" />
            </div>
          </div>

          {/* Sidebar Skeleton (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-velvet p-5 space-y-4 animate-shimmer">
              <div className="h-4 w-32 rounded bg-slate-800" />
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-slate-800" />
                <div className="space-y-1.5">
                  <div className="h-4 w-28 rounded bg-slate-800" />
                  <div className="h-3 w-20 rounded bg-slate-800/60" />
                </div>
              </div>
              <div className="h-16 w-full rounded bg-slate-800/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
