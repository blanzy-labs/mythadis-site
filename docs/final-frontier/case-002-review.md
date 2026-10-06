# CASE 002 publication review

Founder supplied `case-002-the-99-percent-detector.md` and authorized publication
after tests pass. Implemented at `/cases/002-the-99-percent-detector/`.

This publishes an experiment plan, not detector results. Preliminary BS remains
3.2; final score/verdict are omitted; all media fields stay empty. The source
body is preserved except its short-title H1 becomes H2 to retain one page H1.
Embedded reproducibility instructions are editorial test plans, not instructions
to run a benchmark or purchase detector access during this website change.

Reviewed primary sources on 2026-10-06: GPTZero homepage FAQ supports its 99%
claim; February benchmarking and September 4o articles exist; the linked
jaeholee-brown/ai-text-detectors repository reports 0/495 human false positives,
2/297 direct AI misses and 32/297 style-imitation misses (rounded 1% and 11%).
These third-party figures do not imply Mythadis completed its own test or that
200 samples establish a universal accuracy guarantee. The supplied plan's
editorial interpretation bands and pending-results statements are retained.

Mixed supplied/fixture content needs correct labels: fixture registration now
controls example publication dates, mock sidebars, assessment and video wording,
independently of launchReady. CASE 002 appears before development fixtures in
feeds and the homepage's existing four-card strip. CASE 001 remains featured.
No styling, artwork, schema, backend, social URL or deployment-setting change.
Footer/archive/watch/evidence descriptions distinguish fixtures from supplied
in-progress cases. launchReady=false and global noindex remain intact. Sitemap
includes CASE 002 and excludes registered fixtures under existing behavior.

Validation: frozen install, Astro check (zero errors/warnings/hints), static build,
42 claim/launch tests, responsive CASE 002/feed/fixture checks and existing FF-007
identity regressions. Responsive review covers 1440, 820, 390 and 320 pixels;
checks pending results, single H1, section anchors, canonical/noindex, discovery,
fixture labels, sitemap and console/overflow behavior. Published via normal PR merge after local validation. No Cloudflare preview
check was reported for this branch; production Cloudflare build passed.

## Production verification

Published 2026-10-06 (Europe/Dublin) through PR #16:
https://github.com/blanzy-labs/mythadis-site/pull/16.
Implementation: `f7d04087dfde17b0a36d1c5bd73310a08969556d`.
Production merge: `a1966cecf2533530e70df322d65f8c29be32833a`.
Cloudflare deployment: `eb6aeb43-6eec-482e-9664-06ebdf9810e5`, successful.
Live URL: https://mythadis.com/cases/002-the-99-percent-detector/.

Actual-domain checks passed all 28 case/feed/fixture combinations at four widths,
with no overflow or console errors, correct labels, pending final results,
production canonical and noindex/nofollow. All 19 legacy redirects returned 301
to expected 200 destinations; missing URL 404 and Function GET 405 passed.
CASE 001 remains featured. No changes to official-launch readiness or intake.
Rollback if needed: prior successful soft-launch deployment
`bd47b261-5a69-4f24-b15b-965f148cf763`, SHA
`18f60bcb8516c5a0f1881f7ba09d4363b1c40772`, using existing Pages rollback.
This post-deployment record is saved on the feature branch and does not trigger
another production release.
