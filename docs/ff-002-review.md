# FF-002 — content and route foundation review

## Implementation state

Branch: `feature/ff-002-final-frontier-content-routes`.
The approved FF-001 foundation is preserved as local commit `2938549` on its own
branch. Production and all archive references remain unchanged. No push, merge,
Cloudflare configuration change or production deployment is performed.

The homepage hero, preliminary BS Meter, four-item episode strip and receipts
panel now query the `cases` collection. Shared header/footer and a small static
layout keep the new route family visually consistent. Markdown is rendered with
Astro's native content API. There is no client application JavaScript, CMS,
database, backend, evidence model or platform integration.

## Final schema

Defined in `src/content.config.ts`, loaded with Astro's `glob` loader from
`src/content/cases/*.md`. Existing field reports remain unchanged.

| Field | Rule |
| --- | --- |
| `case` | Required positive integer, unique across all cases including drafts |
| `title` | Required nonempty string |
| `summary` | Required nonempty string |
| `published` | Required date, coerced to a Date |
| `visibility` | Required `draft` or `published` |
| `preliminary_bs` | Required nonnegative finite number; no upper cap |
| `featured` | Required boolean; exactly one published case must be featured |
| `final_bs` | Optional nonnegative finite number; no upper cap |
| `verdict` | Optional nonempty string, no enum |
| `category` | Optional nonempty display string |
| `tags` | Optional array of nonempty strings |
| `youtube_id` | Optional video ID (11 allowed ID characters), or empty string |
| `rumble_url` | Optional HTTPS URL, or empty string; stored but not linked/embedded |
| `thumbnail` | Optional root-relative local public image path, or empty string |
| `updated` | Optional date, coerced to a Date |

`getPublishedCases()` validates global case-number uniqueness and the featured
invariant, then returns published cases in descending case-number order.
`getFeaturedCase()` and `getLatestCases()` reuse that validation. Public static
paths use only the validated published list. File-derived IDs are canonical slugs;
there is no separate slug field or content service.

Visibility, not the publication date, controls exposure: future-dated fixture
records render because they are explicitly published. Scheduled publishing is
outside this slice. Dates are formatted in UTC to avoid timezone shifts.

## Fixtures

All bodies explicitly identify themselves as fictional examples. Every new page
also has a visible mock-preview notice and `noindex, nofollow`; these must be
reviewed in a later real-content/release slice before production.

| Case | Title | Preliminary / final | Visibility |
| --- | --- | --- | --- |
| 017 | Can $68 Really Become $6,732 Overnight Using AI? | 9.4 / 10.2 | Published, featured |
| 016 | Can AI Write Perfect Legal Contracts? | 8.7 / 8.7 | Published |
| 015 | Can You Make a Full Game in Five Minutes? | 9.1 / 9.1 | Published |
| 014 | Can AI Predict Next Week's Stock Prices? | 7.8 / 7.8 | Published |
| 013 | Does a Crypto Bot Print Money? | 10.2 / absent | Published |
| 018 | Unpublished fixture — not a public investigation | 0 / absent | Draft, no public route |

Case 013 deliberately omits final score/verdict to exercise optional rendering.
Five published fixtures retain four episode-strip items after excluding Case 017.
Case 018 verifies draft exclusion; it is not linked, rendered or publicly generated.

## Generated routes

New route output:

- `/watch/`
- `/cases/`
- `/cases/017-ai-investment-6732/`
- `/cases/016-ai-legal-contracts/`
- `/cases/015-five-minute-game/`
- `/cases/014-ai-stock-predictions/`
- `/cases/013-crypto-bot/`
- `/evidence/`
- `/submit/`
- `/about/`

Updated route: `/`.

Legacy output remains: `/404.html`, `/current-state/`, `/design-system/`,
`/field-reports/`, `/field-reports/why-unity-without-centralization/`, `/proof/`,
`/visual-studies/`, `/visual-study-a/`, `/visual-study-b/`, `/visual-study-c/`,
`/why-mythadis/`, and `/sitemap.xml`. No redirects or deletion are introduced;
the existing legacy sitemap is intentionally unchanged in this pre-cutover slice.
The build reports 22 HTML pages plus the existing sitemap endpoint.

## Validation

- Frozen-lockfile installation passed with no dependency changes.
- `pnpm check`: 46 files, zero errors, warnings or hints.
- `pnpm build`: successful static generation to `dist`.
- Browser review: all 11 new/updated public pages at 1440, 820, 390 and 320 pixels
  (44 combinations); no horizontal page overflow, console/page errors or draft leaks.
- All internal links and receipts anchors resolve; each route has one H1.
- Draft canonical URL returns 404. No draft HTML is generated.
- Case 013 renders only a preliminary meter, without absent final/verdict fields.
- No video/iframe embeds. Watch and case pages clearly indicate no playable media.
- Skip link is the first keyboard target. Visible focus treatments are retained.
- Isolated build tests reject duplicate case numbers, multiple featured published
  cases, a missing title and a negative score. A score of 10.9 builds successfully.
  Fixtures are restored after each test; final source uses the table above.
- Built-output browser smoke test: 14 routes (new routes and representative legacy
  pages) returned 200 with no page errors; the draft returned 404.
- Final diff checked for whitespace errors; legacy source paths compared unchanged.

Commands use `npx --yes pnpm@11.12.0` to run the repository's pinned version,
because the installed launcher has the environment issue recorded in FF-001.
Installation uses `CI=true` for noninteractive dependency handling. No dependency
or lockfile changes are necessary. The earlier ignored local cookie-resolution
workaround remains environmental, not part of the repository.

## Responsive and visual review

The homepage retains the V2.3 geometry, gold INTERNET, teal stage, TV, badge,
BS Meter and uneven episode strip. Updated titles naturally wrap differently.
Watch uses numbered media placeholders with alternating proportions/offsets.
Cases/evidence use dense numbered files and verdict panels with unequal offsets.
Canonical pages use the existing poster type for titles and headings, with readable
cream Markdown columns and a teal meter/media sidebar. On phones the sidebar
follows the body. Submit/About reuse cream editorial copy and teal side panels.

Intentional differences from FF-001: navigation and action links now point to real
routes; receipts show actual fixture fields rather than hardcoded narratives;
a visible gold mock-content notice is added above the footer. The homepage body
composition is otherwise preserved. Small-screen evidence-page stripes sit below
copy to maintain readability. No final font, new artwork or animation is added.

There was no supplied prototype for the new route interiors. They use simple
arrangements of the established typography, bands, heavy rules, meters and palette;
founder review should confirm those extensions before FF-003 polish.

## Files

Created:

- `src/components/final-frontier/Header.astro`
- `src/components/final-frontier/Footer.astro`
- `src/components/final-frontier/BSMeter.astro`
- `src/components/final-frontier/EpisodeCard.astro`
- `src/components/final-frontier/CaseCard.astro`
- `src/content/cases/013-crypto-bot.md`
- `src/content/cases/014-ai-stock-predictions.md`
- `src/content/cases/015-five-minute-game.md`
- `src/content/cases/016-ai-legal-contracts.md`
- `src/content/cases/017-ai-investment-6732.md`
- `src/content/cases/018-unpublished-test.md`
- `src/layouts/FinalFrontierLayout.astro`
- `src/lib/cases.ts`
- `src/pages/watch.astro`
- `src/pages/cases/index.astro`
- `src/pages/cases/[slug].astro`
- `src/pages/evidence.astro`
- `src/pages/submit.astro`
- `src/pages/about.astro`
- `docs/ff-002-review.md`

Modified: `src/content.config.ts` (adds cases only), `src/pages/index.astro`,
`src/styles/analog-future.css` (adds local route styles), `AGENTS.md` (current slice).

Untouched: all legacy route/component/layout/data files, field-report collection
and Markdown, public assets, FF-001 reference/archive docs, dependency manifest
and lockfile, Astro/Cloudflare configuration, production and archive references.

## Founder gate

Review the route interiors and canonical Markdown/meter presentation, the preview
notice, and mock fixture behavior. Media, social URLs and submissions remain
placeholders. No architectural expansion beyond the brief is introduced; the only
fixture extension is the fifth published case and draft used for validation.
FF-003 does not begin automatically.

Local development preview: `http://localhost:4321`. Built-output preview:
`http://127.0.0.1:4322`. No public Cloudflare preview is deployed.
