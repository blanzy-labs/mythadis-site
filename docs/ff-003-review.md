# FF-003 — canonical case experience review

## State and implementation

Branch: `feature/ff-003-canonical-case-experience`, based on approved FF-002.
Production, Cloudflare configuration and all archive references remain unchanged.
No push, merge or production deployment is performed.

The canonical route now combines an offset case-number plate, poster headline,
explicit example-publication metadata, tags and score summary; a teal preliminary
assessment; a cream editorial file with a native heading index; a contrasting
near-black final assessment when available; a retro broadcast placeholder; an
uneven related-case strip; and published-case navigation.

The case schema and fixture files are unchanged. There is no new content
collection, evidence/source model, CMS, database, backend, dependency, runtime
framework, video embed or client script. The existing BSMeter and EpisodeCard
components are reused.

## Components and files

Case-page components created:

- `src/components/final-frontier/CaseHero.astro`
- `src/components/final-frontier/CaseAssessment.astro`
- `src/components/final-frontier/PlatformPlaceholder.astro`
- `src/components/final-frontier/RelatedCases.astro`
- `src/components/final-frontier/CaseNavigation.astro`

Other files created:

- `src/styles/case-experience.css` — loaded only by canonical case pages.
- `docs/final-frontier/case-authoring.md` — required/optional schema fields and short editorial conventions.
- `docs/ff-003-review.md` — this review.

Modified:

- `src/pages/cases/[slug].astro` — presentation and case-navigation data.
- `src/layouts/FinalFrontierLayout.astro` — optional case canonical/Open Graph metadata, leaving other routes unchanged.
- `src/lib/cases.ts` — two small deterministic navigation helpers.
- `AGENTS.md` — current slice, authoring guide and FF-004 review gate.

Untouched: schema/configuration, all fixture Markdown, homepage, archives,
About/Submit, existing shared stylesheet, legacy routes/components/data/layouts,
public assets, dependency manifest/lockfile, Astro/Cloudflare configuration,
production and archive references.

## Presentation decisions

Preliminary assessment uses only the preliminary score and actual category/case
number. Its explanatory text labels an initial read. The final assessment uses the
final score and verdict, with distinct colors and an after-testing label; all
values remain explicitly examples. Final scores are not clamped. A verdict with
no final score uses a separate recorded-verdict block, without inventing a score.
If both are absent, neither module renders.

The Markdown body is rendered intact by Astro. Its native heading metadata builds
the file index; there is no custom parser or heading requirement. CSS gives known
H2 IDs stage tabs, and arbitrary headings retain ordinary H2 treatment. The
receipts heading and its first following content block receive a bordered teal/
cream evidence treatment. Further Markdown remains in its authored order, and
subsequent arbitrary headings are not swallowed into a receipts wrapper.

The final assessment follows the complete Markdown body (including receipts),
rather than splitting the source to reproduce the brief's illustrative sequence.
This keeps the editorial source intact and avoids brittle section extraction.
No evidence, claims, results, quotations, sources or publication dates are added
to the case content. Fixture dates in the hero are labeled as example metadata.

The broadcast area displays real-text placeholder states. Empty video metadata
shows VIDEO NOT YET ATTACHED; populated metadata can be shown as non-interactive
text and playback remains unavailable. No iframe, YouTube/Rumble CTA or external
watch behavior is introduced.

## Related and adjacent selection

Related cases exclude the current case and all drafts. Ranking is deterministic:

1. Same category, when the current category exists.
2. At least one shared tag.
3. All other published cases.

Each tier sorts by descending case number. Up to three entries render. Expected
fixture relationships:

| Current case | Related cases |
| --- | --- |
| 017 | 016, 015, 014 |
| 016 | 015, 017, 014 |
| 015 | 016, 017, 014 |
| 014 | 013, 017, 016 |
| 013 | 014, 017, 016 |

Previous/next use ascending published case-number order: previous is the nearest
lower number, next is the nearest higher number. Missing sides are omitted, and
an entirely empty adjacent list produces no navigation block. Case 017 links only
back to 016; Case 013 links only forward to 014. Draft 018 never appears.

## Validation

- `pnpm check`: 51 files; zero errors, warnings or hints.
- `pnpm build`: successful static generation to `dist`; 22 HTML pages plus the existing sitemap endpoint.
- Five published case routes generate; no draft 018 file is generated.
- All five cases reviewed at 1440, 820, 390 and 320 pixels (20 combinations): no
  console/page errors, horizontal page overflow or clipped assessment scores.
- Case 017 renders preliminary 9.4 and final 10.2, with its verdict. Case 013
  renders preliminary 10.2 and omits the final assessment/verdict.
- Related-case order and previous/next boundaries checked for every fixture.
- Correct case-specific canonical URL, title, summary and Open Graph fields;
  all fixture case pages retain `noindex, nofollow`.
- Every heading-index anchor resolves to an actual Markdown heading.
- Desktop homepage and case-archive screenshots are pixel-identical to FF-002.
- Nine non-case route regressions checked: homepage, Watch, Cases, Evidence,
  Submit, About, Proof, Why Mythadis and Design System remain available.
- Isolated formatting fixture verified arbitrary H2/H3, nested lists, quotes,
  inline code and long code blocks at 320 pixels without page/code overflow.
  A verdict without final score correctly rendered as recorded metadata without
  a final assessment. This temporary fixture was never saved to the main workspace
  or committed; the isolated source was restored afterward.
- Final static-preview smoke checks all case links, heading anchors and
  representative non-case routes. The draft route returns 404.
- Whitespace/diff checks confirm the fixture/schema and legacy source are untouched.

Commands run through `npx --yes pnpm@11.12.0` for the repository-pinned package
manager, due to the installed-launcher issue documented in FF-001. The local
ignored dependency-resolution workaround remains environmental; the isolated
formatting build also succeeded without it. No package or lockfile change.

Generated canonical routes:

- `/cases/017-ai-investment-6732/`
- `/cases/016-ai-legal-contracts/`
- `/cases/015-five-minute-game/`
- `/cases/014-ai-stock-predictions/`
- `/cases/013-crypto-bot/`

## Responsive and accessibility review

Desktop keeps the narrow file index beside a readable cream column, with separate
full-width assessment/broadcast bands. The body is capped at 78ch including its
padding. Tablet retains the editorial grid; phone and narrow phone put the index
and supporting modules in document order while preserving case plates, heavy
rules, stage tabs, meter hierarchy and uneven related episodes. Long titles and
10.2 scores wrap/render within their containers. No new typography asset,
illustration, animation or color system is introduced.

Each fixture page has one H1; module/Markdown/index headings use H2 and nested
editorial headings use H3. Essential labels, scores and verdicts are real text.
Decorative tuning marks are hidden. Media placeholders have descriptive labels.
Links remain keyboard accessible with visible focus outlines, including index,
related and adjacent links. Skip-to-main works; keyboard activation of the
receipts link reaches its heading. Body text uses readable 17–18px sizes with
1.7 line height; lists, links, quotes and code have dedicated treatment.

No supplied canonical-page prototype existed beyond the V2.3 visual language.
The case-file hero, assessment bands, stage tabs and broadcast panel are the
slice-authorized extension of that language. Homepage and archive composition
are not redesigned. Existing FF-002 mock-preview footer notice is retained.

## Founder gate and preview

Review the case-file composition, reading measure, stage/receipts treatment and
final-assessment placement before FF-004. The presentation is ready for review;
editorial content remains fictional fixtures, and playback remains disabled.
FF-004 does not begin automatically.

Local built preview: `http://127.0.0.1:4322/cases/017-ai-investment-6732/`.
Local development preview: `http://localhost:4321/cases/017-ai-investment-6732/`.
No public Cloudflare preview or production deployment is created.
