-- Migration 0007: Composite Indexes for Cloudflare D1 Anti-Table-Scan Compliance
CREATE INDEX IF NOT EXISTS idx_articles_canonical_published 
  ON articles(is_canonical, published_at DESC);

CREATE INDEX IF NOT EXISTS idx_articles_canonical_category_published 
  ON articles(is_canonical, category, published_at DESC);
