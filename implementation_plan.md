# Implementation Plan: Remediasi AdSense & Dinamisasi Direktori Tokoh

> **Trigger**: User request `/goal` — remediate D1 entity pollution, automate dynamic celebrity sync on the homepage, harden webhook auto-ingestion, and eliminate all AdSense rejection vulnerabilities.  
> **Standard**: Precision Planning Standard (`@[skills/precision-planning]`) + Autonomous Director Mode (`@[GEMINI.md]`).

---

## Section A: Context & Goal

- **Workspace**: `E:\general workspace\ngeghibah.com`
- **Goal**: Purge 9 junk/non-person entities from D1, harden webhook ingestion against phantom entity generation, build `/api/celebrities` endpoint and sync dynamic celebrities to the homepage, ensuring 100% adherence to Google AdSense Publisher Program Policies (zero low-value programmatic pages).
- **Relevant Scripts & Tools**:
  - `npx wrangler d1 execute ngeghibah-db --remote`
  - `scripts/publish_article.py`
  - `scratch/verify_all_viral_batch.py`
  - `npm run build`

---

## Section B: Audit Summary (Ground-Truth vs Expected)

| Component | Expected State | Actual State | Gap? |
|---|---|---|---|
| D1 `celebrities` Table | 100% real human celebrities | 59 rows: 50 real celebrities + 9 junk entities (`insiden-medis`, `kreator-konten`, `pakar-umsura`, `ffi-2026`, etc.) | 🔴 YES (Gap 1) |
| Webhook `autoIngestCelebrities` | Filters out non-person nouns & abstract topics | Only filters a basic keyword list; allowed `insiden-medis`, `ffi-2026`, etc. to become celebrity rows | 🔴 YES (Gap 2) |
| Homepage (`src/app/page.tsx`) | Displays dynamic trending celebrities from D1 | Hardcoded to static `MOCK_CELEBRITIES.slice(0, 6)` from Oct 2026 | 🟡 YES (Gap 3) |
| Homepage Client (`HomeClient.tsx`) | Syncs latest celebrities on mount via API | Only syncs articles (`/api/articles`), never syncs celebrities | 🟡 YES (Gap 4) |
| Celebrities API (`/api/celebrities`) | Returns active/trending celebrities from D1 | Endpoint does not exist (`404 Not Found`) | 🟡 YES (Gap 5) |
| AdSense Static Compliance Pages | All 11 legal & trust routes return HTTP 200 | All 11 routes (`/kebijakan-privasi`, `/tentang-kami`, `/ads.txt`, etc.) return HTTP 200 | 🟢 CLEAN |
| Article Quality & Length | 100% canonical articles >= 800 words with forensic table | 39 canonical articles: all HTML length 7.5KB - 15KB+, zero thin articles | 🟢 CLEAN |

---

## Section C: Ordered Fix Items

### 1. [🔴 BLOCKER] Purge 9 Junk/Non-Person Entities from D1 `celebrities`
- **File**: `scratch/purge_junk_celebrities.sql`
- **Component**: D1 Database Table `celebrities`
- **Current state**: Contains 9 non-human entities: `driver-online`, `ekonomi-kreatif`, `transportasi-online`, `korean-business-research-institute`, `ffi-2026`, `gestur-3-jari`, `pakar-umsura`, `kreator-konten`, `insiden-medis`.
- **Required state**: Exactly 50 verified, high-profile human celebrities remain in D1.
- **Why**: Google AdSense human reviewers and automated quality algorithms flag empty auto-generated placeholder pages (`/seleb/insiden-medis`) as "Low Value Content / Programmatic Scraped Content".
- **How**: Execute `DELETE FROM celebrities WHERE slug IN (...)` via `npx wrangler d1 execute ngeghibah-db --remote --file scratch/purge_junk_celebrities.sql`.

### 2. [🔴 BLOCKER] Harden Webhook Auto-Ingestion Against Non-Person Terms
- **File**: `functions/api/webhooks/n8n/article.ts`
- **Component**: Function `autoIngestCelebrities()`
- **Current state**: `nonPersonKeywords` only checks basic terms like 'aksi', 'demo', 'polisi', allowing composite non-person phrases like 'insiden medis' or 'pakar umsura' to be created as celebrities.
- **Required state**:
  1. Expanded `nonPersonKeywords` containing: `insiden`, `medis`, `kreator`, `konten`, `pakar`, `umsura`, `ffi`, `festival`, `film`, `dangdut`, `pop`, `driver`, `ojol`, `transportasi`, `ekonomi`, `institute`, `research`, `gestur`, `jari`, `persidangan`, `kasus`, `laporan`, `visum`, `korban`, `pelapor`, `terlapor`.
  2. Guard against single-word non-person tokens or words containing numbers (e.g. `ffi-2026`).
- **Why**: Prevents future n8n automated runs or manual injections from polluting D1 with phantom celebrities.
- **How**: Update `nonPersonKeywords` array and add structural sanity checks before `db.prepare('INSERT INTO celebrities ...')`.

### 3. [🟡 GAP] Create Dynamic Celebrities API Endpoint
- **File**: `functions/api/celebrities/index.ts`
- **Component**: Route Handler `onRequestGet`
- **Current state**: Does not exist (returns 404).
- **Required state**: Returns JSON payload with top celebrities from D1:
  `SELECT id, slug, name, stage_name, avatar, profession, drama_count, bio, updated_at FROM celebrities ORDER BY updated_at DESC LIMIT ?`.
- **Why**: Enables both the Homepage and external clients to consume real-time active celebrities directly from edge D1.
- **How**: Implement `functions/api/celebrities/index.ts` with CORS headers and D1 binding query.

### 4. [🟡 GAP] Connect Homepage Client to Dynamic Celebrities Feed
- **File**: `src/components/home/HomeClient.tsx`
- **Component**: `useEffect` inside `HomeClient`
- **Current state**: Only state `articles` is synced; `celebrities` state is static prop from `HomePage`.
- **Required state**: Introduce `syncCelebrities()` in `useEffect` fetching `/api/celebrities?limit=6`. Dynamically updates `celebrities` state on mount while retaining `initialCelebrities` for instant zero-CLS SSR/SSG paint.
- **Why**: Visitors to the homepage immediately see the latest trending celebrities (e.g., Lesti Kejora, Mahalini, Erin Taulany, Desta) rather than the stagnant 6 mock celebrities from October.
- **How**: Add `[celebrityList, setCelebrityList] = useState(celebrities)` and fetch `/api/celebrities?limit=6` on mount.

---

## Section D: Files to Modify Summary

| File | What Changes | Risk |
|---|---|---|
| `scratch/purge_junk_celebrities.sql` | SQL script to delete 9 junk slugs from D1 | Low |
| `functions/api/webhooks/n8n/article.ts` | Expand `nonPersonKeywords` & add entity format guards | Medium |
| `functions/api/celebrities/index.ts` | New Cloudflare Pages Function endpoint for celebrities API | Low |
| `src/components/home/HomeClient.tsx` | Add dynamic celebrity fetching & state update | Low |
| `progress.md` | Goal tracking update | Low |
| `task.md` | Task checklist update | Low |

---

## Section E: Verification Protocol (Definition of Done)

1. **Step 1: D1 Database Verification**
   - Query `SELECT count(*) FROM celebrities`.
   - Expected: Exactly 50 rows.
   - Query `SELECT count(*) FROM celebrities WHERE slug IN ('insiden-medis', 'kreator-konten', 'pakar-umsura', 'ffi-2026')`.
   - Expected: 0 rows.
2. **Step 2: API Endpoint Live Verification**
   - Fetch `https://ngeghibah-com.pages.dev/api/celebrities?limit=6`.
   - Expected: HTTP 200, valid JSON with 6 real celebrities.
3. **Step 3: Frontend Build & Typecheck**
   - Run `npm run build` locally.
   - Expected: Static export builds cleanly without TypeScript or hydration errors.
4. **Step 4: Live Production Verification**
   - Fetch `https://ngeghibah-com.pages.dev/seleb` -> Verify 50 legitimate celebrities rendered, 0 junk entities.
   - Fetch `https://ngeghibah-com.pages.dev/` -> Verify dynamic celebrity cards rendered.
   - Fetch `https://ngeghibah-com.pages.dev/seleb/insiden-medis` -> Verify returns HTTP 404 (no thin page).
