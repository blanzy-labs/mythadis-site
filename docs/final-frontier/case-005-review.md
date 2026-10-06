# CASE 005 — The Amnesia Machine publication review

Founder supplied the case and authorized publication after validation. Route:
`/cases/005-the-amnesia-machine/`. Preliminary BS 9.4; testing/final verdict
pending, final score/verdict absent and media empty. CASE 001 stays featured.
Existing feeds and homepage surface CASE 005 first; four supplied cases now
fill the existing homepage strip without changing its design.

Preserve supplied content except H1→H2 normalization for one page title and
working section index. Document instructions are future editorial experiments,
not authorization to purchase equipment, commission laboratories or run tests
as part of this website change. No health outcome or original finding asserted.
No components, schema, styling, backend or deployment settings changed.

Sources reviewed 2026-10-06: Etsy listing supports the vortex/magnet memory-cleaning
marketing; Fractal Water technology page supports cluster, magnetic-locking,
surface-tension/oxygen statements; Water Liberty supports the hexagonal/oxygen
marketing. Cowan et al. PubMed abstract confirms 50-fs loss of persistent
structural correlations. This is scientific context, not a universal statement
about all possible water properties or proof that a product test was performed.
Supplied source links and experimental/health limitations are retained.

Validation: frozen install, Astro check with zero diagnostics, static build,
42 claim/launch tests and responsive case/feed/fixture checks at 1440, 820, 390,
320 pixels. Checks cover single H1, section anchors, pending results, fixture
labels, feed/home discovery, sitemap, canonical/noindex, console and overflow.
Global launchReady=false remains. Publish via normal GitHub PR and verify
actual-domain behavior after successful existing Cloudflare deployment.

## Production verification

Published 2026-10-06 (Europe/Dublin) through PR #19:
https://github.com/blanzy-labs/mythadis-site/pull/19.
Implementation commit: `1151e54` (preserved in merged PR).
Production merge: `bfb9a198d0ec3756016b2872131bb65215654688`.
Cloudflare preview/production builds passed. Production deployment:
`b8fb9bf0-9ca5-4bfe-a043-0170fd582cfd`.
Live URL: https://mythadis.com/cases/005-the-amnesia-machine/.

All 28 actual-domain case/feed/fixture combinations passed at four widths with
correct identity, pending findings, working anchors, canonical/noindex and no
overflow or console errors. All 19 redirects returned 301 to expected 200
destinations; missing URL 404 and Function GET 405 passed. Official launch
readiness and disabled claim intake unchanged.
Rollback target: previous successful Pages deployment
`fef2b547-e166-4f5b-93fb-6f7036f7989f`, SHA
`27e746aacc8c2c598e0654651a701f2d015bfcda`, through existing Pages rollback.
Post-deployment evidence saved on feature branch without another production
release.
