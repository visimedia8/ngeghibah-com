-- Migration 0005: Prune 2 Remaining Duplicate Pairs in Whitelist
UPDATE articles SET is_canonical = 0, canonical_slug = 'kronologi-rumor-perceraian-6-artis-indonesia-2026-sara-wijayanto-audi-marissa' WHERE slug = 'viral-klaim-6-artis-indonesia-cerai-2026-sara-wijayanto-audi-marissa-fakta';
UPDATE articles SET is_canonical = 0, canonical_slug = '5-artis-indonesia-galang-donasi-kanker-payudara-lelang-tumbler' WHERE slug = 'bulan-kesadaran-kanker-payudara-5-artis-indonesia-galang-donasi-lelang-tumbler';
