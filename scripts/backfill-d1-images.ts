import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

interface ArticleRow {
  id: string;
  slug: string;
  title: string;
  entities_json: string;
  hero_image: string;
  image_caption: string;
}

const nonPersonKeywords = [
  'aksi', 'demo', 'unjuk rasa', 'karhutla', 'kebakaran', 'hutan', 'kpk', 'dpr',
  'indonesia', 'jakarta', 'polisi', 'polda', 'konser', 'podcast', 'youtube',
  'tiktok', 'instagram', 'twitter', 'netizen', 'warganet', 'agensi', 'hukum',
  'bencana', 'gempa', 'banjir', 'dewan pers', 'kominfo', 'bumn', 'pemerintah',
  'greenpeace', 'aggregator', 'genpi', 'viral', 'drama', 'kasus', 'berita',
  'artikel', 'redaksi', 'klaim', 'fakta', 'kronologi', 'verifikasi', 'jejak digital',
  'beautynesia', 'soompi', 'netflix', 'kbs', 'cnn indonesia', 'kapanlagi.com',
  'google news', 'biff', 'festival', 'film', 'cinema'
];

const wikiCache = new Map<string, string | null>();

async function fetchWikiPhoto(name: string): Promise<string | null> {
  const cleanName = name.trim();
  if (wikiCache.has(cleanName.toLowerCase())) {
    return wikiCache.get(cleanName.toLowerCase())!;
  }

  const normalized = cleanName.replace(/\s+/g, '_');
  for (const lang of ['id', 'en']) {
    try {
      const res = await fetch(
        `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(normalized)}`,
        { headers: { 'User-Agent': 'NgeGhibahBot/1.0 (https://ngeghibah.com; redaksi@ngeghibah.com)' } }
      );
      if (res.ok) {
        const data: any = await res.json();
        const img = data.originalimage?.source || data.thumbnail?.source;
        if (img && typeof img === 'string' && !img.endsWith('.svg')) {
          wikiCache.set(cleanName.toLowerCase(), img);
          return img;
        }
      }
    } catch {}
  }

  wikiCache.set(cleanName.toLowerCase(), null);
  return null;
}

function extractTitleCandidates(title: string): string[] {
  // Extract capitalized multi-word phrases (e.g. "Raffi Ahmad", "Kim Young Kwang")
  const matches = title.match(/[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+/g) || [];
  return matches.filter(cand => {
    const lower = cand.toLowerCase();
    return !nonPersonKeywords.some(k => lower.includes(k)) && cand.length >= 3 && cand.length <= 35;
  });
}

async function main() {
  console.log('Querying all articles from D1 with stock Unsplash images...');
  const cmd = `npx wrangler d1 execute ngeghibah-db --remote --json --command "SELECT id, slug, title, entities_json, hero_image, image_caption FROM articles WHERE hero_image LIKE '%images.unsplash.com%' LIMIT 350;"`;
  
  let rawJson = '';
  try {
    rawJson = execSync(cmd, { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 });
  } catch (e: any) {
    console.error('Failed to query D1:', e.message);
    return;
  }

  let rows: ArticleRow[] = [];
  try {
    const parsed = JSON.parse(rawJson);
    rows = parsed[0]?.results || [];
  } catch (e: any) {
    console.error('Failed to parse D1 JSON output:', e.message);
    return;
  }

  console.log(`Found ${rows.length} articles to process.`);
  const sqlStatements: string[] = [];
  let resolvedCount = 0;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    let entities: string[] = [];
    try {
      entities = JSON.parse(row.entities_json || '[]');
    } catch {}

    const candidates = entities.filter(ent => {
      if (!ent || typeof ent !== 'string') return false;
      const lower = ent.toLowerCase();
      return !nonPersonKeywords.some(k => lower.includes(k)) && ent.length >= 3 && ent.length <= 35;
    });

    // Also append title candidates if entities didn't find or are empty
    const titleCandidates = extractTitleCandidates(row.title);
    for (const tc of titleCandidates) {
      if (!candidates.some(c => c.toLowerCase() === tc.toLowerCase())) {
        candidates.push(tc);
      }
    }

    let foundUrl: string | null = null;
    let foundName = '';

    for (const name of candidates.slice(0, 5)) {
      const url = await fetchWikiPhoto(name);
      if (url) {
        foundUrl = url;
        foundName = name;
        break;
      }
    }

    if (foundUrl) {
      const caption = `Potret resmi ${foundName}. (Foto: Wikimedia Commons / Domain Publik / CC-BY-SA)`;
      const escapedUrl = foundUrl.replace(/'/g, "''");
      const escapedCaption = caption.replace(/'/g, "''");
      const stmt = `UPDATE articles SET hero_image = '${escapedUrl}', image_caption = '${escapedCaption}' WHERE id = '${row.id}';`;
      sqlStatements.push(stmt);
      resolvedCount++;
      console.log(`[${i + 1}/${rows.length}] MATCH: ${row.title.slice(0, 45)}... -> ${foundName}`);
    } else {
      console.log(`[${i + 1}/${rows.length}] SKIP: No portrait found for: ${row.title.slice(0, 45)}`);
    }

    // Rate-limit friendly pause every 10 requests
    if (i % 10 === 0 && i > 0) {
      await new Promise(r => setTimeout(r, 100));
    }
  }

  console.log(`\nResolved ${resolvedCount} photos out of ${rows.length} articles.`);

  if (sqlStatements.length > 0) {
    const scratchDir = path.join(process.cwd(), 'scratch');
    if (!fs.existsSync(scratchDir)) {
      fs.mkdirSync(scratchDir, { recursive: true });
    }
    const sqlFile = path.join(scratchDir, 'backfill_updates.sql');
    fs.writeFileSync(sqlFile, sqlStatements.join('\n'), 'utf8');
    console.log(`Wrote ${sqlStatements.length} SQL statements to ${sqlFile}`);

    console.log('Executing batch update in Cloudflare D1...');
    try {
      execSync(`npx wrangler d1 execute ngeghibah-db --remote --file="${sqlFile}"`, {
        stdio: 'inherit'
      });
      console.log('Batch D1 update succeeded!');
    } catch (e: any) {
      console.error('Batch D1 execute failed:', e.message);
    }
  }
}

main();
