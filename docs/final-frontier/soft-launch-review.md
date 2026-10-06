# Soft production launch — FF-008

Release prepared on 2026-10-06 (Europe/Dublin). This is a founder review baseline,
not an official media launch. Production URL: https://mythadis.com.

## Release baseline

- Source branch: `feature/ff-007-series-identity-case-001`.
- FF-007 source: `3fe2745c83087c52e26b885c046fb5e41491344f`.
- Release branch: `feature/ff-008-soft-production-launch`.
- FF-008 implementation commit: `16754e587b49f44302daea330795efdddfbe0dce`.
- Production merge/deployed SHA: `18f60bcb8516c5a0f1881f7ba09d4363b1c40772`.
- Normal merge PR: https://github.com/blanzy-labs/mythadis-site/pull/15.
- Cloudflare production deployment: `bd47b261-5a69-4f24-b15b-965f148cf763`.
- Cloudflare reported **Deployed successfully** at 2026-10-06 23:00:38 IST
  (22:00:38 UTC). Immutable URL: https://bd47b261.mythadis-site.pages.dev/.
- Actual-domain review completed 2026-10-06 23:01:45 IST (Europe/Dublin).
- This post-deployment evidence is committed/pushed to the release branch;
  it does not change the deployed code or trigger another production release.
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

**SOFT PRODUCTION LAUNCH COMPLETE.** https://mythadis.com serves Final Frontier.

| Route | Status / result |
| --- | --- |
| `/` | 200; MYTHADIS and series mastheads, gold INTERNET, teal TV, preliminary BS Meter, offset composition preserved |
| `/watch/` | 200; empty fixture videos show coming-soon state |
| `/cases/` | 200; CASE 001 preview and other DEV FIXTURE identities retained |
| `/evidence/` | 200; mock status explicit |
| `/submit/` | 200; intake disabled, approved nontechnical notice, no production test record written |
| `/about/` | 200; series/studio identity correct |
| `/cases/001-ai-investment-6732/` | 200; scaffold, preliminary 9.4, final undetermined, no final module or iframe |
| `/cases/016-ai-legal-contracts/` | 200; DEV FIXTURE label |
| Random missing URL, former case 017 and draft 018 | Genuine 404; Final Frontier styled missing page and noindex |

All eight reviewed pages passed at 1440, 820, 390 and 320 pixels (32 combinations):
no horizontal overflow; no breaking script errors; noindex/nofollow and production
canonicals. OG URLs use production domain; missing-page canonical is omitted.
Blank social links are hidden, public header/footer navigation contains no legacy
routes. No current fixture media iframe or load control appears. No autoplay or
unrelated video was introduced. Claim form retains server verification and
is not represented as live intake; production KV acceptance remains unverified.

All 19 actual-domain legacy rules returned 301 to the expected 200 destinations,
including why-mythadis → about, proof → evidence, current-state → home,
field-reports → cases, visual-study/design-system → home and report wildcard.
No loops. `/api/claims` GET returns 405, confirming Function routing. Initial
requests during rollout temporarily observed old route responses; repeat checks
after propagation all passed. Expected browser HTTP 404 logging on the intentional
missing-page test is not a script or asset failure; core pages had no console errors.

Desktop and narrow-mobile captures were inspected: approved masthead, retro TV,
BS Meter, fixture strip, Submit/Follow/manifesto row and Show the Receipts remain.
Tablet and standard-mobile reviews passed automated layout/identity checks.
No production-breaking visual issues found. The empty Follow area, unavailable
video and disabled claim intake are intentional pending real content/configuration.
No spontaneous design changes were made. No unresolved soft-launch blocker.

Rollback target remains deployment `9785ffdc-9e18-41be-bade-7b5d5e3774da` at
archived SHA `3ae7334b7f958f11f3337606b0559cda79c7e427` through the existing Pages
rollback action. Remote archive branch/peeled tag were verified before merge.
Official launch remains blocked as below; indexing is still disabled.

## Official-launch blockers

Real CASE 001 editorial evidence/results and supported final score/verdict;
first real YouTube release; supplied social URLs as available; live Turnstile/KV
claim acceptance; removal/demotion of fixtures; founder official-launch approval
before setting launchReady true and enabling indexing. FF-008 does not complete
any of these editorial or official-launch gates. Stop after live review baseline.
