import { Celebrity } from '@/types';

export interface CelebrityEntityTarget {
  slug: string;
  name: string;
  stageName: string;
  aliases?: string[];
}

export const MASTER_CELEBRITY_TARGETS: CelebrityEntityTarget[] = [
  { slug: 'raffi-ahmad', stageName: 'Raffi Ahmad', name: 'Raffi Farid Ahmad' },
  { slug: 'nagita-slavina', stageName: 'Nagita Slavina', name: 'Nagita Slavina Mariana Tengker' },
  { slug: 'syifa-hadju', stageName: 'Syifa Hadju', name: 'Syifa Safira Nuraisyah' },
  { slug: 'el-rumi', stageName: 'El Rumi', name: 'Ahmad Jalaluddin Rumi' },
  { slug: 'azizah-salsha', stageName: 'Azizah Salsha', name: 'Nurul Azizah Rosiade', aliases: ['Zize'] },
  { slug: 'nikita-mirzani', stageName: 'Nikita Mirzani', name: 'Nikita Mirzani Mawardi', aliases: ['Nikmir'] },
  { slug: 'prilly-latuconsina', stageName: 'Prilly Latuconsina', name: 'Prilly Mahatei Latuconsina' },
  { slug: 'deddy-corbuzier', stageName: 'Deddy Corbuzier', name: 'Deodatus Andreas Deddy Cahyadi Sunjoyo' },
  { slug: 'windah-basudara', stageName: 'Windah Basudara', name: 'Brando Franco Windah' },
  { slug: 'fuji-an', stageName: 'Fuji An', name: 'Fujianti Utami Putri', aliases: ['Fuji Utami'] },
  { slug: 'rachel-vennya', stageName: 'Rachel Vennya', name: 'Rachel Vennya Roland' },
  { slug: 'reza-rahadian', stageName: 'Reza Rahadian', name: 'Reza Rahadian Matulessy' },
  { slug: 'jennie-blackpink', stageName: 'Jennie BLACKPINK', name: 'Jennie Kim', aliases: ['Jennie'] },
  { slug: 'jungkook-bts', stageName: 'Jungkook BTS', name: 'Jeon Jung-kook', aliases: ['Jungkook'] },
  { slug: 'lisa-blackpink', stageName: 'Lisa BLACKPINK', name: 'Lalisa Manobal', aliases: ['Lisa'] },
  { slug: 'karina-aespa', stageName: 'Karina aespa', name: 'Yu Ji-min' },
  { slug: 'wonyoung-ive', stageName: 'Wonyoung IVE', name: 'Jang Won-young', aliases: ['Jang Wonyoung'] },
  { slug: 'byeon-woo-seok', stageName: 'Byeon Woo-seok', name: 'Byeon Woo-seok', aliases: ['Byeon Wooseok'] },
  { slug: 'min-hee-jin', stageName: 'Min Hee-jin', name: 'Min Hee-jin', aliases: ['Min Heejin'] },
  { slug: 'han-so-hee', stageName: 'Han So-hee', name: 'Lee So-hee' },
  { slug: 'taylor-swift', stageName: 'Taylor Swift', name: 'Taylor Alison Swift' },
  { slug: 'selena-gomez', stageName: 'Selena Gomez', name: 'Selena Marie Gomez' },
  { slug: 'hailey-bieber', stageName: 'Hailey Bieber', name: 'Hailey Rhode Baldwin Bieber', aliases: ['Hailey Baldwin'] },
  { slug: 'zendaya', stageName: 'Zendaya', name: 'Zendaya Maree Stoermer Coleman' },
];

/**
 * Replaces the FIRST occurrence of each celebrity's name in HTML content
 * with a contextual internal link to their dossier page (/seleb/[slug]).
 * Ensures:
 * 1. Exactly 1x link per celebrity (anti-duplicate).
 * 2. Never links inside existing <a> tags, headings (h1-h6), or HTML attributes.
 * 3. Preserves all other text and formatting intact.
 */
export function linkifyCelebritiesInHtml(
  html: string,
  celebrities?: Celebrity[] | CelebrityEntityTarget[]
): string {
  if (!html) return html;

  // Split HTML into tags and text segments
  const tokenRegex = /(<[^>]+>|[^<]+)/g;
  const tokens = html.match(tokenRegex) || [html];

  const linkedSlugs = new Set<string>();

  // Use provided celebrities or fallback to master 24 targets
  const sourceList = (celebrities && celebrities.length > 0) ? celebrities : MASTER_CELEBRITY_TARGETS;

  // Prepare celebrity lookup targets (sorted by name length descending to avoid partial match collisions)
  const celebTargets: { slug: string; names: string[]; label: string }[] = [];
  for (const item of sourceList) {
    const slug = item.slug;
    const stageName = (item as any).stageName || (item as any).name;
    const fullName = (item as any).name || stageName;
    const aliases = (item as any).aliases || [];

    const namesSet = new Set<string>();
    if (stageName) namesSet.add(stageName.trim());
    if (fullName) namesSet.add(fullName.trim());
    for (const a of aliases) {
      if (a && typeof a === 'string') namesSet.add(a.trim());
    }

    const sortedNames = Array.from(namesSet).filter(Boolean);
    if (sortedNames.length > 0) {
      celebTargets.push({
        slug,
        names: sortedNames,
        label: stageName,
      });
    }
  }

  // Sort overall targets by maximum name length descending
  celebTargets.sort((a, b) => {
    const maxA = Math.max(...a.names.map((n) => n.length));
    const maxB = Math.max(...b.names.map((n) => n.length));
    return maxB - maxA;
  });

  let insideAnchor = false;
  let insideHeading = false;
  const resultTokens: string[] = [];

  for (const token of tokens) {
    if (token.startsWith('<')) {
      const lower = token.toLowerCase();
      if (lower.startsWith('<a ') || lower === '<a>') {
        insideAnchor = true;
      } else if (lower.startsWith('</a>')) {
        insideAnchor = false;
      } else if (/^<h[1-6][\s>]/.test(lower)) {
        insideHeading = true;
      } else if (/^<\/h[1-6]>/.test(lower)) {
        insideHeading = false;
      }
      resultTokens.push(token);
      continue;
    }

    if (insideAnchor || insideHeading) {
      resultTokens.push(token);
      continue;
    }

    let modifiedText = token;

    for (const celeb of celebTargets) {
      if (linkedSlugs.has(celeb.slug)) continue;

      for (const name of celeb.names) {
        if (linkedSlugs.has(celeb.slug)) break;

        const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b(${escaped})\\b`, 'i');

        const match = modifiedText.match(regex);
        if (match && match.index !== undefined) {
          const matchedText = match[0];
          const linkHtml = `<a href="/seleb/${celeb.slug}" class="text-neon-cyan hover:underline font-semibold border-b border-neon-cyan/40 hover:border-neon-cyan transition-colors" title="Buka Dossier Rekam Jejak ${celeb.label}">${matchedText}</a>`;

          modifiedText =
            modifiedText.slice(0, match.index) +
            linkHtml +
            modifiedText.slice(match.index + matchedText.length);

          linkedSlugs.add(celeb.slug);
          break;
        }
      }
    }

    resultTokens.push(modifiedText);
  }

  return resultTokens.join('');
}
