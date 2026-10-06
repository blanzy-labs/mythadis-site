# FF-006 — production readiness and cutover preparation

Decision: **NOT READY FOR PRODUCTION CUTOVER**.
Branch: `feature/ff-006-production-readiness`, based on approved FF-005.
No production cutover, push, merge, DNS change or Cloudflare resource change.

The founder confirms deployment remains GitHub → existing Cloudflare Pages and
real cases/social URLs are not ready yet; preview-only preparation is acceptable.
The implementation prepares the release surface without presenting fixtures as
real investigations. No real published case is currently present.

## Live FF-005 acceptance and launch gates

Live acceptance is **not run**: Wrangler reports unauthenticated, and no actual
configured Pages preview project/hostname/bindings can be inspected here. Local
function/browser tests are not substituted for real KV acceptance. Exact evidence
and test steps are in `docs/final-frontier/claim-preview-acceptance.md`.

Remaining cutover gates:

1. Authenticated access to the existing Pages project and a configured feature
   preview; successful live FF-005 test writes exactly one correct KV record;
   intentional failure writes none. Verify no token/IP/raw headers stored.
2. Founder-supplied, reviewed real case content; draft/remove all published
   fixtures together with introducing exactly one real featured case.
3. Verify actual production Pages branch/build/domain/Functions settings and
   separate production KV/Turnstile bindings, with no secret committed.
4. Complete deployed-preview release checks (real media where available, form,
   redirect/status behavior, metadata and indexing); record rollback deployment.
5. Explicit founder approval for cutover through the normal GitHub workflow.

Social URLs may stay unavailable/hidden as the founder confirmed; no handles are
invented. Review any subsequently supplied URLs before publishing them.

## Fixtures and indexing

Five FF-002 fixtures (013–017) retain their published **preview** visibility so
ongoing design review and the one-featured invariant remain usable. Draft 018
remains excluded. All fixture notices, mock/example labels and meta noindex are
retained because real content is not ready. No fixture is converted into a real
case and no editorial results are fabricated.

`src/config/launch.ts` explicitly keeps `launchReady = false`. It centralizes the
small release gate, six core route paths, metadata defaults and known fixture IDs,
without changing the case schema. An enabled launch build rejects published
fixture IDs/marked bodies or missing/invalid featured content. After an approved
release with real content, the switch removes fixture-only presentation copy and
enables indexing on production. It is not proof that external/founder gates pass.
Cloudflare feature-branch builds still get meta noindex even with the switch on;
Pages previews also supply X-Robots-Tag noindex by default, to be confirmed live.

robots allows core routes/CSS/assets and disallows `/api/`, with the production
sitemap location. The sitemap now contains exactly these six core URLs:

- `https://mythadis.com/`
- `https://mythadis.com/watch/`
- `https://mythadis.com/cases/`
- `https://mythadis.com/evidence/`
- `https://mythadis.com/submit/`
- `https://mythadis.com/about/`

It adds only real/non-fixture published case URLs when available. Current case
sitemap count is zero. Drafts, fixture identities, legacy and internal routes are
excluded, regardless of their preview HTML files existing in `dist`.

## Public routes and redirects

Intended production destinations: `/`, `/watch/`, `/cases/`,
`/cases/<real-published-slug>/`, `/evidence/`, `/submit/`, `/about/`, plus a genuine
404 for missing URLs. `/api/claims` remains POST-only.

`public/_redirects` has 19 permanent rules: exact paths with and without a trailing
slash, followed by the old report wildcard. Final map:

| Legacy route | 301 destination |
| --- | --- |
| `/why-mythadis/` | `/about/` |
| `/proof/` | `/evidence/` |
| `/current-state/` | `/` |
| `/field-reports/` and `/field-reports/*` | `/cases/` |
| `/visual-studies/` | `/` |
| `/visual-study-a/`, `/visual-study-b/`, `/visual-study-c/` | `/` |
| `/design-system/` | `/` |

There is no honest one-to-one new case for the existing platform field report,
so it uses `/cases/`. Existing legacy source is retained; Cloudflare redirects
win over those assets and remove them from normal production destinations.
Legacy source is not restyled/deleted, and none is linked from the new navigation
or sitemap. Astro preview itself does not apply Cloudflare redirects; Wrangler
and deployed Pages do. There is no broad missing-page catch-all redirect.

The 404 now uses Final Frontier's poster layout, concise signal-not-found copy
and Home/Watch/Case Files/Submit links, with no legacy product messaging. It stays
noindex and has no canonical for an arbitrary missing address.

## Metadata and social configuration

All core pages receive production-base canonical URLs and OG title/description/
URL/site-name/type. Case title/summary/URL derive from content; local thumbnail
supports OG image without hotlinking. No approved default Final Frontier image
was supplied, so no legacy product card or generated substitute is used.
Default positioning: “Mythadis investigates internet claims with real tests,
evidence and a public BS Meter.” No old private-alpha language is reintroduced.

`src/config/social.ts` has youtube, rumble, x, threads and linkedin, all blank.
The shared SocialLinks component hides absent/malformed/insecure/credential URLs
and renders only labelled HTTPS links with safe new-tab attributes. Header and
homepage use the same source; fake platform icons are removed. Personal legacy
LinkedIn details are not assumed to be studio social configuration. Five required
primary navigation links remain WATCH, CLAIMS, EVIDENCE, ABOUT, SUBMIT.

## Cloudflare status and rollback

Repository build/output remain `pnpm build` / static `dist`; the root Function
convention is preserved. User-confirmed production workflow is GitHub → Cloudflare,
with main unchanged. Actual dashboard branch rules, project name, preview alias,
KV bindings and Turnstile settings are not verified while unauthenticated.
Production requirements remain separate from preview in the setup/checklist.
No namespace IDs, secrets, Wrangler deployment configuration or DNS changes added.

Rollback procedure: select the recorded last good successful **production**
deployment in the existing Pages dashboard and use “Rollback to this deployment.”
Then verify the domain and prepare a reviewed Git revert/fix to prevent a later
main build redeploying the failure. Keep KV data and DNS intact. Cached permanent
redirects may outlive a code rollback, so restored destination behavior must be
checked. Full procedure is in `docs/final-frontier/rollback.md`.

All four protected archive references still resolve to
`3ae7334b7f958f11f3337606b0559cda79c7e427`. New FF-001 archive refs remain local;
the original historical archive branch also exists remotely. No refs are moved,
rewritten or deleted. No active-tree archive copies are created.

## Validation and review

- Frozen-lockfile install succeeds; no package or lockfile changes.
- `pnpm check`: 60 files; zero errors, warnings or hints.
- `pnpm build`: 22 existing static pages plus sitemap; current preview intentionally
  retains fixture/legacy files, with draft 018 absent and redirects governing Pages.
- 42 lightweight Node tests pass: FF-005 validation/verification/storage contract,
  launch refusal of published fixtures, featured invariants and social filtering.
- 32 route/width combinations (eight major destinations at 1440, 820, 390, 320px)
  pass: one H1, no horizontal overflow, correct canonical/OG, preserved noindex,
  no fake social controls, meaningful 404 and resolving internal links. Skip link
  works; no page or unexpected console errors.
- All 19 redirect rules parse in Wrangler and return 301 to the expected 200
  destination, without loops. Missing URLs return 404 and `/api/claims` still
  returns 405 to GET, confirming Function/static route separation.
- FF-004 media state regression: 40 component/width combinations pass; keyboard,
  click-to-load privacy, iframe attributes, no-JS links and case/Watch/home wiring.
- FF-005 enhanced browser flow passes at all four widths, including native URL/
  email validation, keyboard focus/Enter, one request on repeated submit, announced
  success/errors, retained values, verification/storage/network errors and plain
  POST fallback. These use intercepted verification and mock storage.
- Isolated launch-enabled build with published fixtures fails as intended. A
  temporary explicitly labelled synthetic test case, with original fixtures
  drafted, verifies production-mode metadata/indexing, optional local OG image,
  sitemap inclusion and fixture-route exclusion. Five configured test social
  links render/focus without overflow at 320px. A Cloudflare preview-mode rebuild
  stays noindex. This is template/gate QA, not real launch content or live acceptance;
  it never enters the main workspace or commit.
- Major text contrast pairs retain the approved palette: paper/teal 4.69:1,
  ink/paper 15.04:1, ink/mustard 9.66:1 and red/paper 4.57:1. Real text, labelled
  form controls and gold/red visible focus remain. Social link targets are at
  least 28px; form/button sizing remains comfortable at narrow widths.
- Desktop/narrow screenshots reviewed; no homepage or case redesign. The new 404
  keeps the same type, palette/rules and wraps cleanly on phones.
- Performance review of home/Watch/case/Submit: no external resources, iframe,
  bitmap images or font requests in current unconfigured fixtures; local observed
  CLS is zero. Inline JS is 855 bytes on home/case, zero on Watch, and 2,373 bytes
  on Submit. Normal CSS remains render-blocking; no new client dependency.
  Real-image weight, real video playback and deployed Turnstile performance still
  require the actual launch content/configuration. Turnstile's compact slot now
  reserves 140px to avoid shifting the disclosure/button when it loads.
- Content/schema, actual video component/CSS, claim endpoint, dependencies,
  deployment configuration and legacy source are unchanged. No secret committed.
  Temporary isolated test sources/configuration are restored and test servers
  stopped; normal preview remains available.

## Files

Created:

- `src/config/launch.ts`
- `src/config/social.ts`
- `src/components/final-frontier/SocialLinks.astro`
- `public/_redirects`
- `tests/launch.test.mjs`
- `docs/final-frontier/launch-checklist.md`
- `docs/final-frontier/production-routing.md`
- `docs/final-frontier/rollback.md`
- `docs/final-frontier/claim-preview-acceptance.md`
- `docs/ff-006-review.md`

Modified:

- `src/layouts/FinalFrontierLayout.astro` — defaults, canonical/OG and indexing gate.
- `src/lib/cases.ts` — launch-only content guard.
- `src/pages/sitemap.xml.ts` and `public/robots.txt` — search surface.
- `src/pages/404.astro` — Final Frontier error page.
- `src/components/final-frontier/Header.astro`, `src/pages/index.astro` — shared socials.
- `src/components/final-frontier/Footer.astro`, `CaseHero.astro`, `CaseAssessment.astro`, `PlatformPlaceholder.astro` — conditional preview-only copy.
- `src/pages/cases/[slug].astro`, `cases/index.astro`, `watch.astro`, `evidence.astro`, `about.astro` — metadata or conditional preview-only copy.
- `src/styles/analog-future.css` — configured social link hit areas/focus.
- `src/styles/submit-claim.css` — reserved compact verification space.
- `AGENTS.md` — slice, release gate and rollback documentation.

No dependencies, CMS, admin system, D1, database application, automation or media
hosting are added. Site commands use the pinned npx pnpm launcher due to the
existing local launcher issue, with no related repository dependency change.

Local preview: `http://127.0.0.1:4322/`. Cloudflare-compatible redirect behavior was
validated locally at port 8788, not through a live remote deployment. No public
Cloudflare preview URL is claimed. Founder review ends this slice; cutover waits
for the explicitly listed launch gates and final approval.
