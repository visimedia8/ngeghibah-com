import { Celebrity } from '@/types';

/**
 * Replaces the FIRST occurrence of each celebrity's name in HTML content
 * with a contextual internal link to their dossier page (/seleb/[slug]).
 * Ensures:
 * 1. Exactly 1x link per celebrity (anti-duplicate).
 * 2. Never links inside existing <a> tags or HTML attributes.
 * 3. Preserves all other text and formatting intact.
 */
export function linkifyCelebritiesInHtml(
  html: string,
  celebrities: Celebrity[]
): string {
  if (!html || !celebrities || celebrities.length === 0) return html;

  // Split HTML into tags and text segments
  // Matches <tag ...>, </tag>, or text between them
  const tokenRegex = /(<[^>]+>|[^<]+)/g;
  const tokens = html.match(tokenRegex) || [html];

  const linkedSlugs = new Set<string>();

  // Prepare celebrity lookup targets (sorted by name length descending to avoid partial match collisions)
  const celebTargets: { slug: string; name: string; stageName: string }[] = [];
  for (const celeb of celebrities) {
    if (celeb.stageName) {
      celebTargets.push({
        slug: celeb.slug,
        name: celeb.name,
        stageName: celeb.stageName,
      });
    }
  }
  celebTargets.sort((a, b) => b.stageName.length - a.stageName.length);

  let insideAnchor = false;
  const resultTokens: string[] = [];

  for (const token of tokens) {
    // If it's an HTML tag
    if (token.startsWith('<')) {
      const lower = token.toLowerCase();
      if (lower.startsWith('<a ') || lower === '<a>') {
        insideAnchor = true;
      } else if (lower.startsWith('</a>')) {
        insideAnchor = false;
      }
      resultTokens.push(token);
      continue;
    }

    // It's a text node outside tags
    if (insideAnchor) {
      // Don't link inside existing anchor tag
      resultTokens.push(token);
      continue;
    }

    let modifiedText = token;

    for (const celeb of celebTargets) {
      if (linkedSlugs.has(celeb.slug)) continue;

      // Check both stageName and full name (exact word boundary)
      const namesToTry = [celeb.stageName];
      if (celeb.name && celeb.name !== celeb.stageName) {
        namesToTry.push(celeb.name);
      }

      for (const name of namesToTry) {
        if (linkedSlugs.has(celeb.slug)) break;

        // Escape regex special chars
        const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Word boundary match
        const regex = new RegExp(`\\b(${escaped})\\b`, 'i');

        const match = modifiedText.match(regex);
        if (match && match.index !== undefined) {
          const matchedText = match[0];
          const linkHtml = `<a href="/seleb/${celeb.slug}" class="text-neon-cyan hover:underline font-semibold border-b border-neon-cyan/40 hover:border-neon-cyan transition-colors" title="Buka Dossier Rekam Jejak ${celeb.stageName}">${matchedText}</a>`;

          // Replace only the first instance in this text node
          modifiedText =
            modifiedText.slice(0, match.index) +
            linkHtml +
            modifiedText.slice(match.index + matchedText.length);

          linkedSlugs.add(celeb.slug);
          break; // move to next celebrity
        }
      }
    }

    resultTokens.push(modifiedText);
  }

  return resultTokens.join('');
}
