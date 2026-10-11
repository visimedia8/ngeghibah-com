import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0F17',
          deep: '#06090F',
          light: '#111724',
        },
        velvet: {
          DEFAULT: '#131B2E',
          card: '#162036',
          border: '#23304E',
        },
        surface: {
          dark: '#1E293B',
          muted: '#0F172A',
        },
        neon: {
          pink: '#FF2E93',
          'pink-glow': 'rgba(255, 46, 147, 0.35)',
          cyan: '#00F0FF',
          'cyan-glow': 'rgba(0, 240, 255, 0.35)',
          amber: '#FFB800',
          'amber-glow': 'rgba(255, 184, 0, 0.35)',
          green: '#10B981',
          'green-glow': 'rgba(16, 185, 129, 0.35)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-pink': '0 0 25px -5px rgba(255, 46, 147, 0.45)',
        'neon-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.45)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
