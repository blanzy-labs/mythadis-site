# Soft production launch — FF-008

Release prepared on 2026-10-06 (Europe/Dublin). This is a founder review baseline,
not an official media launch. Production URL: https://mythadis.com.

## Release baseline

- Source branch: `feature/ff-007-series-identity-case-001`.
- FF-007 source: `3fe2745c83087c52e26b885c046fb5e41491344f`.
- Release branch: `feature/ff-008-soft-production-launch`.
- Deployment and merge SHA: pending production release; live results recorded below after deployment.
- Existing production project: `mythadis-site`; unchanged GitHub → main → Cloudflare Pages flow, `pnpm build`, `dist`.
- Rollback: successful Cloudflare deployment `9785ffdc-9e18-41be-bade-7b5d5e3774da`, archived production SHA `3ae7334b7f958f11f3337606b0559cda79c7e427`. Immutable deployment URL returned 200 before release. Use Pages rollback, then a normal reviewed Git revert/fix; never reset main or alter DNS/KV.

## Archive verification

Pushed missing refs without rewriting history. Remote branch
`archive/pre-final-frontier` and peeled annotated tag
`pre-final-frontier-2026-10-06^{}` both resolve to
`3ae7334b7f958f11f3337606b0559cda79c7e427`.
Tag object: `87e707e7d98b19abee1b557753c62e08c927441e`.
Historical archive refs are untouched.

## Safeguards and scope

`launchReady = false`. All core and fixture pages remain `noindex, nofollow`.
Canonical/OG URLs use https://mythadis.com. Six core sitemap URLs remain;
fixtures, drafts and legacy URLs are excluded. Robots preserves rendering assets.
CASE 001 is the $68 preview scaffold, preliminary 9.4 with no final score,
verdict, invented experiment or video. Other cards retain DEV FIXTURE labels.
Blank social URLs remain hidden. Approved composition, palette, CSS TV and
media behavior are unchanged.

Without a public Turnstile key, claim intake is disabled and displays
“CLAIM INTAKE OPENS WITH THE FULL LAUNCH.” Server verification is unchanged.
Production acceptance/storage verification remains pending unless production
configuration is available; no fake success and no verification bypass.

## Pre-deploy validation

Frozen pnpm install, Astro check (zero diagnostics), static build and all 42
claim/launch tests passed. Local identity review passed 32 page/width combinations
at 1440, 820, 390 and 320 pixels: no overflow, correct identity/gold masthead,
noindex/canonicals, fixture labels, no unsupported final result and draft/old
case route 404. Media regressions passed 40 component/width combinations plus privacy, keyboard,
no-JS and data integration. Enhanced form checks passed at all four widths with
mocked success, validation, Turnstile, storage, network and normal POST fallback.
All 19 Pages redirect rules returned 301 to expected 200 destinations; genuine
missing-page 404 and Function method routing passed locally. No dependencies, secrets, deployment settings or design changes.

## Live results

Pending successful Cloudflare production deployment and actual-domain smoke tests.

## Official-launch blockers

Real CASE 001 editorial evidence/results and supported final score/verdict;
first real YouTube release; supplied social URLs as available; live Turnstile/KV
claim acceptance; removal/demotion of fixtures; founder official-launch approval
before setting launchReady true and enabling indexing. FF-008 does not complete
any of these editorial or official-launch gates. Stop after live review baseline.
