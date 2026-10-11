'use client';

import React, { useState } from 'react';
import { TimelineNode } from '@/types';
import {
  Clock,
  FileText,
  MessageSquare,
  Quote,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Layers,
} from 'lucide-react';

interface InteractiveTimelineCardProps {
  timeline: TimelineNode[];
  title?: string;
  className?: string;
}

export const InteractiveTimelineCard: React.FC<InteractiveTimelineCardProps> = ({
  timeline,
  title = 'Kronologi Lengkap & Jejak Digital Alur Kejadian',
  className = '',
}) => {
  const [isAllExpanded, setIsAllExpanded] = useState(true);
  const [expandedNodes, setExpandedNodes] = useState<Record<number, boolean>>({
    0: true,
    1: true,
  });

  const toggleNode = (index: number) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAll = () => {
    const nextState = !isAllExpanded;
    setIsAllExpanded(nextState);
    const updated: Record<number, boolean> = {};
    timeline.forEach((_, idx) => {
      updated[idx] = nextState;
    });
    setExpandedNodes(updated);
  };

  const getReceiptIcon = (type?: string) => {
    switch (type) {
      case 'tweet':
        return <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />;
      case 'statement':
        return <Quote className="w-3.5 h-3.5 text-neon-pink" />;
      case 'court':
      case 'document':
        return <FileText className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Clock className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <div
      className={`my-8 rounded-2xl border border-velvet-border bg-gradient-to-b from-velvet/95 via-velvet-card to-obsidian p-5 sm:p-7 shadow-card-glow ${className}`}
    >
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-neon-pink/15 text-neon-pink border border-neon-pink/30">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neon-cyan font-bold block">
              ALUR DUDUK PERKARA
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white font-display">
              {title}
            </h3>
          </div>
        </div>

        <button
          onClick={toggleAll}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
        >
          {isAllExpanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" />
              <span>Ringkas Alur</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" />
              <span>Buka Semua ({timeline.length} Titik)</span>
            </>
          )}
        </button>
      </div>

      {/* Vertical Timeline Nodes */}
      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-[11px] sm:before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-neon-pink before:via-neon-cyan before:to-emerald-500">
        {timeline.map((node, index) => {
          const isNodeOpen = expandedNodes[index] ?? isAllExpanded;

          return (
            <div key={index} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[23px] sm:-left-[27px] top-1 flex items-center justify-center">
                <span className="relative flex h-5 w-5">
                  <span className="group-hover:animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-obsidian border-2 border-neon-cyan items-center justify-center text-[10px] font-mono font-bold text-white shadow-neon-cyan">
                    {index + 1}
                  </span>
                </span>
              </div>

              {/* Node Content Card */}
              <div className="bg-obsidian-deep/80 border border-slate-800 rounded-xl p-4 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900/60">
                {/* Node Top Header */}
                <div
                  onClick={() => toggleNode(index)}
                  className="cursor-pointer flex items-start justify-between gap-2"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neon-pink font-semibold bg-neon-pink/10 px-2 py-0.5 rounded">
                        <Clock className="w-3 h-3" />
                        {node.timeLabel}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-neon-cyan transition-colors">
                      {node.title}
                    </h4>
                  </div>

                  <button
                    aria-label="Toggle node detail"
                    className="p-1 text-slate-400 hover:text-white shrink-0 mt-0.5"
                  >
                    {isNodeOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Node Details (Collapsible) */}
                {isNodeOpen && (
                  <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>{node.description}</p>

                    {/* Receipt Quote / Evidence Box */}
                    {node.receiptQuote && (
                      <div className="bg-velvet/80 border-l-2 border-neon-cyan p-3 rounded-r-lg text-xs font-mono text-slate-300 space-y-1">
                        <div className="flex items-center gap-1.5 text-neon-cyan font-semibold text-[11px]">
                          {getReceiptIcon(node.receiptType)}
                          <span>BUKTI JEJAK DIGITAL RESMI</span>
                        </div>
                        <p className="italic text-slate-200">
                          &ldquo;{node.receiptQuote}&rdquo;
                        </p>
                        {node.receiptSource && (
                          <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800/60">
                            Sumber: {node.receiptSource}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>*Semua timeline divalidasi dengan cap waktu jejak digital publik</span>
        <span className="text-neon-cyan font-medium">NgeGhibah Verification System</span>
      </div>
    </div>
  );
};
