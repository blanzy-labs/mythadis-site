# Final Frontier launch checklist

Current decision: **NOT READY FOR PRODUCTION CUTOVER**.
Founder confirms real cases/social URLs are not ready; preview preparation is
acceptable. All fictional content remains visibly labelled and non-indexable.
This checklist does not authorize a release. Record evidence/owner against every
remaining gate before requesting final founder approval.

## Content

- [ ] Founder supplies at least one real case and reviews its title, summary,
  publication date, body, supported preliminary score and any final score/verdict.
- [ ] Review real YouTube/Rumble fields where episodes are available; test playback
  and outbound links on the canonical case, preserving click-to-load privacy.
- [ ] Draft/remove every FF-002 fixture (013–018). None may generate a public case
  route or appear in homepage, Watch, Cases, Evidence or sitemap after launch.
- [ ] Exactly one real published case is featured. Do not fabricate content to
  unblock this check. `getPublishedCases()` retains the one-featured invariant.
- [ ] After all release gates pass, set `launchReady = true` in
  `src/config/launch.ts` as part of the approved release change. Builds then reject
  published fixture identities or marked fixture bodies. This switch removes
  fixture-only copy/notices and enables indexing for production; it does not
  certify external gates by itself.

## Social

- [x] `src/config/social.ts` is the single Final Frontier social URL source.
- [x] Missing/insecure/malformed links are hidden; no handles are invented.
- [x] Founder confirms real URLs are not ready and that is acceptable for preview.
  All five remain blank/hidden; review newly supplied URLs before they are used.

## Cloudflare preview acceptance — required before cutover

- [ ] Obtain authenticated access to the existing Pages project; record its name,
  branch preview alias and deployment URL. Wrangler reports unauthenticated here.
- [ ] Configure preview `CLAIM_SUBMISSIONS` and Turnstile separately from production,
  following `submit-claim-cloudflare.md`; do not use a temporary unrelated account.
- [ ] Publish the feature branch through GitHub → existing Pages preview pipeline.
- [ ] Confirm the actual preview deployment contains `/api/claims` and accepts
  real widget tokens with matching request hostname/action `submit_claim`.
- [ ] Send one clearly marked test claim: success UI and exactly one KV record.
- [ ] Inspect JSON: documented fields only, server ID/time, status new; no token,
  honeypot, IP, fingerprint or raw headers.
- [ ] Intentional invalid/failed-verification request creates no record.
- [ ] Record deployment, date, test record ID and observed results; manually remove
  marked preview test records after review. Local mocks are not live acceptance.

## Cloudflare production — later, with approval

- [ ] Verify dashboard production branch is `main`; build `pnpm build`; output
  `dist`; repository root is the project root containing `functions/`.
- [ ] Confirm feature branches create Preview deployments under the existing Git
  integration. Repository/user workflow supports this intent, but dashboard state
  has not been inspected in this session.
- [ ] Create/bind a separate production namespace as `CLAIM_SUBMISSIONS`. Do not
  reuse preview storage without explicit founder approval.
- [ ] Configure production managed Turnstile for actual `mythadis.com` hostname(s).
- [ ] Add encrypted production `TURNSTILE_SECRET_KEY`; set the matching public
  `PUBLIC_TURNSTILE_SITE_KEY` in the production build environment; rebuild.
- [ ] Confirm custom domain `mythadis.com`, Functions routing and existing Node/pnpm
  environment. No DNS, hosting platform or build configuration change is assumed.
- [ ] Record the current successful production deployment ID and SHA for rollback.

## Search / metadata

- [x] Canonicals use `https://mythadis.com`, never local/preview hosts.
- [x] New defaults use internet-claim/testing positioning and Open Graph fields.
- [x] Case title/summary/URL derive from content; local thumbnail supplies optional
  OG image. Legacy social art is not substituted as unapproved Final Frontier art.
- [x] Sitemap has only six core routes plus non-fixture published cases.
- [x] robots allows core pages/assets and disallows `/api/`; no global crawl block.
- [x] Current preview/fixture HTML remains `noindex, nofollow`.
- [ ] Review release-build sitemap: six core routes and real published cases only.
- [ ] Confirm production removes preview noindex only after real content is ready.
  404 remains noindex without a canonical; drafts have no generated route.
- [ ] Confirm preview response `X-Robots-Tag: noindex` from Cloudflare. Source also
  retains meta noindex on Cloudflare builds whose branch is not main, even after
  launchReady is true. A manual preview upload should preserve branch metadata.

## Redirects

- [x] `public/_redirects` implements the reviewed map in `production-routing.md`.
- [x] All 19 rules parsed and return 301 to the expected 200 destination in local
  Cloudflare tooling; unknown URLs return the Final Frontier 404.
- [ ] Verify the same statuses/targets on the actual Pages preview and release.
  Astro preview alone does not apply `_redirects`.

## Validation

- [x] Frozen-lockfile install; no dependencies added.
- [x] `pnpm check` and `pnpm build` pass for the readiness preview.
- [x] Lightweight launch/social validation and FF-005 function tests pass.
- [x] Major routes, navigation, canonical/OG tags, drafts, 404 and internal links
  smoke-tested at desktop/tablet/phone/narrow-phone sizes.
- [x] Keyboard/focus, media privacy, form labels/status and mobile usability reviewed.
- [ ] Repeat checks on the release commit with real content/configured socials.
- [ ] Complete real submit/video tests in the deployed preview.
- [ ] Confirm no secrets or generated directories are committed.

## Founder / cutover

- [ ] Founder reviews all gate evidence and explicitly approves production cutover.
- [ ] Merge the approved release through normal GitHub history to `main`; let the
  existing Cloudflare pipeline deploy. No force push, archive rewrite or DNS change.
- [ ] Verify `mythadis.com`: homepage, real case/media, Watch/Cases/Evidence/Submit/
  About, 404, redirects, sitemap, robots and canonical tags.
- [ ] Only if separately approved, send a marked production test claim and inspect
  its KV record; remove that test record appropriately without removing real claims.

If a gate remains open, keep preview only. See `rollback.md` for failure recovery.
