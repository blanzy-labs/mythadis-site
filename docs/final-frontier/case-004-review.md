# CASE 004 — The Magic Sticker publication review

Founder supplied `case-004-the-magic-sticker.md` and authorized publication after
validation. Public route: `/cases/004-the-magic-sticker/`. Preliminary BS 9.6;
test not yet run, final score/verdict absent and media empty. CASE 001 stays
featured. Existing feeds surface CASE 004 ahead of older cases and mock fixtures.

Editorial test/purchase instructions in the document describe the planned
experiment, not instructions to buy products or perform laboratory work now.
The physical/performance scope, clinical boundary and prohibition on translating
field readings into human SAR are preserved. No health outcome is asserted.
Body H1s become H2s for one page H1 and working phase/index anchors. Price copy
clarifies $89 is the advertised regular price, with variable promotions (seller
page currently advertises $69). Other supplied content and source URLs retained.
No component, schema, styling, backend or deployment-setting change.

Sources reviewed 2026-10-06: seller Harmonizer+ marketing page supports the
nonblocking/5G/Frequency Intelligence claims; Omnia page supports 5G, two-meter
radius and everlasting marketing. FTC 2002 indexed primary source supports the
97–99% unsubstantiated patch claims; indexed FTC 2011 warning supports the
exposure-proof and partial-shield signal warnings. The original study publisher abstract
(doi:10.1002/bem.10076) confirms nine shields, 914/1880 MHz and no statistically
significant peak SAR reduction. PubMed and FTC direct retrieval were intermittent;
the supplied links remain citations, not Mythadis experimental results.

Validation: frozen install, zero-diagnostic Astro check, static build, all 42
claim/launch tests and 28 responsive case/feed/fixture combinations at 1440,
820, 390 and 320 pixels. Checks cover pending results, single H1, section anchors,
correct fixture labels, homepage discovery, sitemap, canonical/noindex and no
overflow/console errors. Mobile page capture inspected. launchReady=false and
all official-launch safeguards remain. Publish via normal PR and verify the
actual domain after Cloudflare reports successful production deployment.

## Production verification

Published 2026-10-06 (Europe/Dublin) through PR #18:
https://github.com/blanzy-labs/mythadis-site/pull/18.
Implementation commit: `647dc81` (preserved in merged PR).
Production merge: `27e746aacc8c2c598e0654651a701f2d015bfcda`.
Cloudflare preview/production builds passed. Production deployment:
`fef2b547-e166-4f5b-93fb-6f7036f7989f`.
Live URL: https://mythadis.com/cases/004-the-magic-sticker/.

All 28 actual-domain case/feed/fixture responsive checks passed with correct
identity, pending findings, working section anchors, canonical/noindex and no
overflow or console errors. All 19 redirects returned 301 to expected 200
destinations; genuine missing URL 404 and claim Function GET 405 passed.
Official launch readiness and disabled claim intake are unchanged.
Rollback target: previous successful Pages deployment
`f097c1c7-fef6-4aad-bf18-5aafa9c3580c`, SHA
`73322506283f018cd9230ab2a111590c0c266d14`, through existing Pages rollback.
This post-deployment record is saved on the feature branch without another
production release.
