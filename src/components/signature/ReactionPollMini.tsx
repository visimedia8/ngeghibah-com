'use client';

import React, { useState } from 'react';
import { ThumbsUp, HelpCircle, Flame, CheckCircle } from 'lucide-react';

interface PollOption {
  id: string;
  label: string;
  icon: string;
  votes: number;
}

interface ReactionPollMiniProps {
  articleId?: string;
  question?: string;
  className?: string;
}

export const ReactionPollMini: React.FC<ReactionPollMiniProps> = ({
  articleId = 'default',
  question = 'Menurut lo gimana duduk perkara kasus ini?',
  className = '',
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [pollData, setPollData] = useState<PollOption[]>([
    { id: 'percaya', label: 'Tim Percaya', icon: '👍', votes: 842 },
    { id: 'ragu', label: 'Ragu / Nunggu Bukti', icon: '🤔', votes: 1205 },
    { id: 'pansos', label: 'Cuma Pansos / Settingan', icon: '🙄', votes: 418 },
  ]);

  const totalVotes = pollData.reduce((acc, curr) => acc + curr.votes, 0);

  const handleVote = (id: string) => {
    if (selectedOption) return; // Prevent double submit
    setSelectedOption(id);
    setPollData((prev) =>
      prev.map((opt) => (opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt))
    );
  };

  return (
    <div
      className={`my-8 rounded-2xl border border-velvet-border bg-gradient-to-br from-velvet/90 via-velvet-card to-obsidian p-5 sm:p-6 shadow-card-glow ${className}`}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-mono uppercase tracking-wider text-neon-pink font-semibold flex items-center gap-1.5">
          <Flame className="w-4 h-4 text-neon-pink" />
          POLL REAKSI WARGANET
        </span>
        <span className="text-[11px] font-mono text-slate-400">
          {totalVotes.toLocaleString('id-ID')} Suara Terkumpul
        </span>
      </div>

      <h4 className="text-base sm:text-lg font-bold text-white mb-4 font-display">
        {question}
      </h4>

      {/* Options List */}
      <div className="space-y-3">
        {pollData.map((option) => {
          const isSelected = selectedOption === option.id;
          const percentage = Math.round((option.votes / totalVotes) * 100);

          return (
            <button
              key={option.id}
              onClick={() => handleVote(option.id)}
              disabled={selectedOption !== null}
              className={`w-full min-h-[48px] relative overflow-hidden rounded-xl border p-3.5 text-left transition-all duration-200 active:scale-98 group ${
                isSelected
                  ? 'border-neon-cyan bg-cyan-950/40 text-white'
                  : selectedOption !== null
                  ? 'border-slate-800 bg-obsidian-deep/60 text-slate-300'
                  : 'border-slate-700/80 bg-velvet/80 hover:border-neon-pink/60 hover:bg-velvet-card text-slate-200 cursor-pointer'
              }`}
            >
              {/* Background percentage fill bar when voted */}
              {selectedOption !== null && (
                <div
                  style={{ width: `${percentage}%` }}
                  className={`absolute inset-0 top-0 bottom-0 opacity-20 transition-all duration-700 ${
                    isSelected ? 'bg-neon-cyan' : 'bg-slate-500'
                  }`}
                />
              )}

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">{option.icon}</span>
                  <span className="text-sm font-semibold">{option.label}</span>
                  {isSelected && (
                    <CheckCircle className="w-4 h-4 text-neon-cyan ml-1" />
                  )}
                </div>

                {selectedOption !== null && (
                  <span className="text-sm font-mono font-bold text-neon-cyan">
                    {percentage}%
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {selectedOption ? (
        <p className="mt-3 text-center text-xs text-neon-cyan font-mono animate-fadeIn">
          ✓ Suara kamu telah tercatat di Radar Suara Netizen NgeGhibah!
        </p>
      ) : (
        <p className="mt-3 text-center text-xs text-slate-400 font-mono">
          Klik salah satu opsi untuk melihat persentase suara warganet secara real-time.
        </p>
      )}
    </div>
  );
};
