# FF-007 — series identity and CASE 001 reset

Branch: `feature/ff-007-series-identity-case-001`, based on FF-006 `b82ed17`.
**FF-007 READY FOR FOUNDER REVIEW**.
Production remains **NOT READY FOR PRODUCTION CUTOVER**. No push, merge or release
is performed, and no real editorial publication begins automatically.

## Identity and implementation

The public hierarchy is now MYTHADIS (parent brand) → THE INTERNET SAID WHAT?
(flagship series) → CASE 001 (reserved first investigation) → THE $68 MIRACLE
(short editorial identity) → BS METER (recurring mechanic). Supporting proposition
remains INTERNET CLAIMS. ACTUAL EXPERIMENTS.

`src/config/brand.ts` centralizes these terms and the first-case presentation
identity. No branding framework, localization infrastructure or schema field is
added. The headline's existing styled line fragments remain for the locked
composition, with the formal series name as its accessible label.

Homepage kicker now says MYTHADIS PRESENTS; the dominant series masthead, gold
INTERNET, Retro TV, preliminary 9.4 BS Meter, geometry and typography remain.
Featured labels show CASE 001 / THE $68 MIRACLE. Full title is retained in the
case content, metadata and evidence file. Watch/Cases/Evidence show the formal
series context and prioritize the featured slot ahead of test entries. Canonical
case mastheads show series context and explicit preview/development identity.
About defines the parent brand, numbered investigation series and receipts/score
relationship. Submit receives supporting series copy only. Header remains
MYTHADIS; footer adds the brand/series pairing. Default metadata reflects the
series while keeping Mythadis visible; existing canonicals/noindex remain.

## Exact CASE 001 state

New source: `src/content/cases/001-ai-investment-6732.md`.
Canonical preview: `/cases/001-ai-investment-6732/`.

```yaml
case: 1
title: "Can $68 Really Become $6,732 Overnight Using AI?"
summary: "A viral claim says an AI investment system can turn a tiny deposit into thousands overnight."
published: "2026-10-12"
visibility: "published"
preliminary_bs: 9.4
featured: true
category: "AI Scams"
tags: ["ai", "investing", "scams"]
updated: "2026-10-12"
youtube_id: ""
rumble_url: ""
thumbnail: ""
```

`final_bs` and `verdict` are absent. The old illustrative final 10.2 and
“Absolute nonsense” finding are removed from front matter and body. Body retains
its explicit mock marker and says no experiment/observations/evidence exist;
final BS Meter and verdict are undetermined and must be earned by the completed
test. Dates remain example publication/update metadata, not a claim of an actual
release date. Published visibility means design-preview generation only, with
mock notices and noindex; launchReady remains false.

The old CASE 017 source is renamed/reset, not duplicated. Its unlaunched preview
URL now returns 404; no redirect or additional public archive is created. Git
history preserves the prior fixture. The fixture guard recognizes both old 017
and new 001 identities, plus the retained mock marker, so renaming cannot bypass
production checks. Once real CASE 001 material is supplied, removal of its marker
and registry identity must be part of a reviewed content change, not an automatic
conversion in this slice.

## Other fixtures and episode terminology

013–016 stay published for development review, with their existing mock bodies,
metadata and test scores unchanged. They are visibly labelled DEV FIXTURE /
NOT RESERVED on cards, Watch and canonical case contexts; adjacent navigation
also identifies test destinations. Homepage strip is DEV FIXTURES. Draft 018
remains excluded. No fictional CASE 002–005 sequence is created or committed.
All preview fixtures remain outside the sitemap and blocked by launch checks.

Public references changed:

- Hero EPISODE 017 → MYTHADIS PRESENTS plus primary CASE 001 label.
- Latest Episodes → DEV FIXTURES in this preview (Latest Cases after release).
- Watch's example-episode copy and archive aria label → case/fixture terminology.

Intentionally retained: “episodes” in future release-oriented Watch prose, where
it describes video releases rather than case identifiers. EpisodeCard filename,
CSS classes and internal identifiers stay intact to preserve styling; they are
not public naming. Authoring guide documents CASE ### as the canonical label.

## Validation and safety

- Frozen-lockfile install succeeds, with no dependency/lockfile change.
- `pnpm check`: 61 files, zero errors, warnings or hints.
- `pnpm build`: 22 static pages plus sitemap; CASE 001 replaces CASE 017,
  draft 018 remains excluded and no `/episodes/` route is added.
- 42 Node tests pass: FF-005 function behavior and FF-006 launch/social checks.
  Launch rejection also explicitly checks the renamed CASE 001 fixture identity.
- 32 page/width combinations at 1440, 820, 390 and 320px pass: correct series,
  CASE 001, short title, original gold INTERNET, absent final module/verdict,
  development labels, canonical URLs/noindex, old/draft route 404 and sitemap
  exclusion. No horizontal overflow or page errors.
- Desktop and narrow homepage screenshots reviewed. The longer initial fixture
  strip wording was shortened to DEV FIXTURES to avoid crowding VIEW ALL. No CSS,
  font, color, artwork, animation, Retro TV or long-form structure is changed.
  Identity copy/shorter featured title and added fixture labels are the authorized
  presentation changes; there is no new visual direction.
- FF-004 media regression: all 40 state/variant/width combinations pass, including
  keyboard loading, no external contact before loading, no autoplay, privacy host,
  local poster, outbound-only Rumble and no-JS links. Featured/canonical wiring
  now uses CASE 001. Synthetic media values exist only in restored isolated QA.
- FF-005 enhanced form browser tests pass at all four widths: keyboard/native
  validation, in-flight lock, success/errors/focus, preserved values, verification/
  storage/network errors and normal POST fallback. This is mocked local QA;
  live Cloudflare acceptance remains pending as recorded in FF-006.
- Schema, Function, form controls, client submission script, KV/Turnstile contract,
  media component/styles, social configuration/filtering, robots, redirect file,
  404 and rollback guide are unchanged. Preview notices/noindex and launchReady
  false remain. No backend, CMS, database or dependency change.
- Archive refs retain SHA `3ae7334b7f958f11f3337606b0559cda79c7e427`.
  No main/archive reference, deployment configuration or redirect destination
  changes. Temporary QA pages/assets/data are restored/removed and its preview
  stopped. Diff/whitespace checks pass.

Site commands use the repository-pinned npx pnpm launcher due to the existing
local launcher issue, without related dependency changes.

## Files

Created:

- `src/config/brand.ts`
- `docs/ff-007-review.md`

Renamed and modified:

- `src/content/cases/017-ai-investment-6732.md` → `001-ai-investment-6732.md`

Modified:

- `src/config/launch.ts` — brand metadata and new fixture identity.
- `src/lib/cases.ts` — shared case/preview/development display labels.
- `src/components/final-frontier/Header.astro`, `Footer.astro`, `BSMeter.astro` — configured identity.
- `src/components/final-frontier/CaseHero.astro`, `CaseCard.astro`, `EpisodeCard.astro`, `CaseNavigation.astro` — series/fixture labels.
- `src/pages/index.astro`, `watch.astro`, `cases/index.astro`, `evidence.astro`, `about.astro`, `submit.astro` — identity and supporting copy.
- `tests/launch.test.mjs` — renamed fixture rejection.
- `docs/final-frontier/case-authoring.md` — terminology and CASE 001 scaffold rules.
- `docs/final-frontier/launch-checklist.md`, `production-routing.md` — current fixture identity documentation; launch/redirect policy unchanged.
- `AGENTS.md` — current slice and brand/scaffold guidance.

Local preview: `http://127.0.0.1:4322/` and
`http://127.0.0.1:4322/cases/001-ai-investment-6732/`.
No public deployment is created. Next editorial step requires supplied supported
$68 investigation material and founder review; cutover still requires every
FF-006 launch gate and explicit final approval.
