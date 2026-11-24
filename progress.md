# Autonomous Director Progress Tracker (/goal)

## Finish Line (Done Criteria) - AdSense Remediasi & Dinamisasi Tokoh
1. **D1 Entity Cleanup**: 9 non-human entities (`insiden-medis`, `kreator-konten`, `pakar-umsura`, `ffi-2026`, etc.) purged from D1 `celebrities` table (exactly 50 legitimate celebrities remain).
2. **Webhook Ingestion Lockdown**: `functions/api/webhooks/n8n/article.ts` hardened with expanded `nonPersonKeywords` and sanity guards against non-person entity creation.
3. **Dynamic Celebrities API**: `GET /api/celebrities` endpoint live and returning real celebrities from D1.
4. **Homepage Dynamic Sync**: `HomeClient.tsx` actively fetches and displays the latest trending celebrities from D1 on mount.
5. **Full Verification & Zero Low-Value Pages**: All 50 legitimate `/seleb/[slug]` pages live, `/seleb/insiden-medis` returns 404, `npm run build` passes with zero errors, and git is 100% clean.

## Completed Slices & Proof
- [x] **Slice 1: Purge 9 junk entities from D1**
  - **Deleted Slugs**: `driver-online`, `ekonomi-kreatif`, `transportasi-online`, `korean-business-research-institute`, `ffi-2026`, `gestur-3-jari`, `pakar-umsura`, `kreator-konten`, `insiden-medis`.
  - **Proof**: Remote D1 row count is now exactly 50 (from 59). Endpoints `/seleb/insiden-medis`, `/seleb/ffi-2026`, `/seleb/kreator-konten`, and `/seleb/driver-online` all return **HTTP 404 Not Found** (zero low-value phantom pages).

## Next Queue
- [ ] Slice 1: Purge 9 junk entities from D1
- [ ] Slice 2: Harden webhook entity ingestion filter
- [ ] Slice 3: Create dynamic celebrities API endpoint
- [ ] Slice 4: Connect homepage client to dynamic celebrities
- [ ] Slice 5: Local build test, commit, push, and live verification

## Autonomous Decisions Made
- **Entity Deletion Policy**: Non-human entities with no biodata or real person identity are safely deleted from D1 to prevent Google AdSense "Low Value Content / Programmatic Content Farm" rejections.
- **Client Hydration Strategy**: Retain initial SSR/SSG fallback celebrities for 0ms First Contentful Paint (FCP) and zero Cumulative Layout Shift (CLS), while fetching fresh celebrities from D1 on mount.


## Autonomous Decisions Made
- **Entity & Photo Resolution**: Mahalini and Lesti Kejora utilize Wikimedia Commons verified public domain photos resolved automatically by the Edge Webhook. Rachel Vennya utilizes a custom satirical caricature generated via `@cf/black-forest-labs/flux-1-schnell`.
- **Category Routing**: Mahalini (`seleb-lokal`), Rachel Vennya (`creator-tiktok`), Lesti Kejora (`kpop-asia` / regional music awards).
- **Compliance Enforcement**: All articles enforce >= 850 words plain text, brand lexicon, forensic `<table>` timeline, and Pasal 5 UU Pers No. 40/1999 right-of-reply footer.
