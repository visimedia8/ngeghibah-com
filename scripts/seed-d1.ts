import fs from 'fs';
import path from 'path';
import { MOCK_ARTICLES } from '../src/data/mockData';

function sqlEscape(str: string | undefined | null): string {
  if (str === undefined || str === null) return 'NULL';
  return `'${str.replace(/'/g, "''")}'`;
}

let sql = '-- Seed 8 Thick Articles into Cloudflare D1\n';

for (const art of MOCK_ARTICLES) {
  const id = sqlEscape(art.id);
  const slug = sqlEscape(art.slug);
  const title = sqlEscape(art.title);
  const excerpt = sqlEscape(art.excerpt);
  const contentHtml = sqlEscape(art.contentHtml);
  const category = sqlEscape(art.category);
  const categoryLabel = sqlEscape(art.categoryLabel);
  const ghibahStatus = sqlEscape(art.ghibahMeter.status);
  const ghibahFact = art.ghibahMeter.percentageFact;
  const ghibahRumor = art.ghibahMeter.percentageRumor;
  const ghibahLabel = sqlEscape(art.ghibahMeter.label);
  const ghibahDesc = sqlEscape(art.ghibahMeter.description);
  const heroImage = sqlEscape(art.heroImage);
  const imageCaption = sqlEscape(art.imageCaption);
  const publishedAt = sqlEscape(art.publishedAt);
  const readingTime = art.readingTimeMinutes;
  const authorName = sqlEscape(art.author.name);
  const authorSlug = sqlEscape(art.author.slug);
  const authorRole = sqlEscape(art.author.role);
  const authorAvatar = sqlEscape(art.author.avatar);
  const entitiesJson = sqlEscape(JSON.stringify(art.entities));
  const timelineJson = sqlEscape(JSON.stringify(art.timeline));
  const digitalReceipts = art.digitalReceiptsCount;
  const isFeatured = art.isFeatured ? 1 : 0;
  const isHero = art.isHero ? 1 : 0;
  const trendingScore = art.trendingScore;

  sql += `
INSERT INTO articles (
  id, slug, title, excerpt, content_html, category, category_label,
  ghibah_meter_status, ghibah_meter_fact, ghibah_meter_rumor, ghibah_meter_label, ghibah_meter_desc,
  hero_image, image_caption, published_at, reading_time_minutes,
  author_name, author_slug, author_role, author_avatar,
  entities_json, timeline_json, digital_receipts_count,
  is_featured, is_hero, trending_score, updated_at
) VALUES (
  ${id}, ${slug}, ${title}, ${excerpt}, ${contentHtml}, ${category}, ${categoryLabel},
  ${ghibahStatus}, ${ghibahFact}, ${ghibahRumor}, ${ghibahLabel}, ${ghibahDesc},
  ${heroImage}, ${imageCaption}, ${publishedAt}, ${readingTime},
  ${authorName}, ${authorSlug}, ${authorRole}, ${authorAvatar},
  ${entitiesJson}, ${timelineJson}, ${digitalReceipts},
  ${isFeatured}, ${isHero}, ${trendingScore}, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  excerpt = excluded.excerpt,
  content_html = excluded.content_html,
  category = excluded.category,
  category_label = excluded.category_label,
  ghibah_meter_status = excluded.ghibah_meter_status,
  ghibah_meter_fact = excluded.ghibah_meter_fact,
  ghibah_meter_rumor = excluded.ghibah_meter_rumor,
  ghibah_meter_label = excluded.ghibah_meter_label,
  ghibah_meter_desc = excluded.ghibah_meter_desc,
  hero_image = excluded.hero_image,
  image_caption = excluded.image_caption,
  published_at = excluded.published_at,
  reading_time_minutes = excluded.reading_time_minutes,
  author_name = excluded.author_name,
  author_slug = excluded.author_slug,
  author_role = excluded.author_role,
  author_avatar = excluded.author_avatar,
  entities_json = excluded.entities_json,
  timeline_json = excluded.timeline_json,
  digital_receipts_count = excluded.digital_receipts_count,
  is_featured = excluded.is_featured,
  is_hero = excluded.is_hero,
  trending_score = excluded.trending_score,
  updated_at = CURRENT_TIMESTAMP;
`;
}

const outPath = path.join(process.cwd(), 'migrations', '0002_seed_articles.sql');
fs.writeFileSync(outPath, sql, 'utf8');
console.log(`Generated ${MOCK_ARTICLES.length} seed statements in ${outPath}`);
