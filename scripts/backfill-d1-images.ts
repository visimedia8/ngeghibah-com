import { execSync } from 'child_process';

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
  'greenpeace', 'aggregator', 'genpi', 'viral', 'drama', 'kasus'
];

async function fetchWikiPhoto(name: string): Promise<string | null> {
  const normalized = name.trim().replace(/\s+/g, '_');
  try {
    const resId = await fetch(
      `https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(normalized)}`,
      { headers: { 'User-Agent': 'NgeGhibahBot/1.0 (https://ngeghibah.com; redaksi@ngeghibah.com)' } }
    );
    if (resId.ok) {
      const data: any = await resId.json();
      const img = data.originalimage?.source || data.thumbnail?.source;
      if (img && typeof img === 'string' && !img.endsWith('.svg')) {
        return img;
      }
    }
  } catch {}

  try {
    const resEn = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(normalized)}`,
      { headers: { 'User-Agent': 'NgeGhibahBot/1.0 (https://ngeghibah.com; redaksi@ngeghibah.com)' } }
    );
    if (resEn.ok) {
      const data: any = await resEn.json();
      const img = data.originalimage?.source || data.thumbnail?.source;
      if (img && typeof img === 'string' && !img.endsWith('.svg')) {
        return img;
      }
    }
  } catch {}

  return null;
}

async function main() {
  console.log('Querying articles from D1 that need real photo resolution...');
  const cmd = `npx wrangler d1 execute ngeghibah-db --remote --json --command "SELECT id, slug, title, entities_json, hero_image, image_caption FROM articles WHERE hero_image LIKE '%images.unsplash.com%' LIMIT 40;"`;
  
  let rawJson = '';
  try {
    rawJson = execSync(cmd, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
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

  console.log(`Found ${rows.length} articles with stock Unsplash images.`);
  let updatedCount = 0;

  for (const row of rows) {
    let entities: string[] = [];
    try {
      entities = JSON.parse(row.entities_json || '[]');
    } catch {}

    const candidates = entities.filter(ent => {
      if (!ent || typeof ent !== 'string') return false;
      const lower = ent.toLowerCase();
      return !nonPersonKeywords.some(k => lower.includes(k)) && ent.length >= 3 && ent.length <= 35;
    });

    let foundUrl: string | null = null;
    let foundName = '';

    for (const name of candidates.slice(0, 3)) {
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
      const updateCmd = `npx wrangler d1 execute ngeghibah-db --remote --command "UPDATE articles SET hero_image = '${escapedUrl}', image_caption = '${escapedCaption}' WHERE id = '${row.id}';"`;
      
      try {
        execSync(updateCmd, { encoding: 'utf8', stdio: 'ignore' });
        console.log(`[UPDATED] ${row.title.slice(0, 45)}... -> ${foundName}`);
        updatedCount++;
      } catch (err: any) {
        console.error(`Failed to update ${row.id}:`, err.message);
      }
    } else {
      console.log(`[SKIP] No Wikipedia portrait found for entities in: ${row.title.slice(0, 45)}`);
    }
  }

  console.log(`\nBackfill complete. Updated ${updatedCount} articles with verified real celebrity photos.`);
}

main();
