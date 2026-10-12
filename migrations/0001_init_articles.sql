-- Cloudflare D1 Schema for NgeGhibah.com
CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content_html TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'seleb-lokal',
  category_label TEXT NOT NULL DEFAULT 'Seleb Lokal',
  ghibah_meter_status TEXT NOT NULL DEFAULT 'TERKONFIRMASI',
  ghibah_meter_fact INTEGER NOT NULL DEFAULT 85,
  ghibah_meter_rumor INTEGER NOT NULL DEFAULT 15,
  ghibah_meter_label TEXT DEFAULT 'Fakta Terverifikasi',
  ghibah_meter_desc TEXT DEFAULT 'Diverifikasi melalui dokumen dan pernyataan resmi.',
  hero_image TEXT NOT NULL,
  image_caption TEXT DEFAULT '',
  published_at TEXT NOT NULL,
  reading_time_minutes INTEGER NOT NULL DEFAULT 5,
  author_name TEXT NOT NULL DEFAULT 'Tim Investigasi NgeGhibah',
  author_slug TEXT NOT NULL DEFAULT 'tim-investigasi',
  author_role TEXT NOT NULL DEFAULT 'Lead Fact-Checker',
  author_avatar TEXT NOT NULL DEFAULT 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  entities_json TEXT DEFAULT '[]',
  timeline_json TEXT DEFAULT '[]',
  digital_receipts_count INTEGER NOT NULL DEFAULT 0,
  is_featured INTEGER NOT NULL DEFAULT 0,
  is_hero INTEGER NOT NULL DEFAULT 0,
  trending_score INTEGER NOT NULL DEFAULT 80,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at DESC);
