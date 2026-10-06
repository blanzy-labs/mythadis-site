# Mythadis — Project Final Frontier

Final Frontier uses `docs/reference/analog-future-v2-3.html` as the approved visual source.
Preserve its typography, palette, asymmetry, CSS television, BS Meter and poster
composition. See `docs/ff-010-review.md` for editorial guardrails and validation.

Work on feature branches from current `main`; production remains on `main`.
Preserve Astro, TypeScript, pnpm, static `dist` output and Cloudflare configuration.
Do not add frameworks, media APIs or a publishing system. FF-005 authorizes only
one Pages Function at /api/claims, Turnstile verification and CLAIM_SUBMISSIONS KV
for claim intake; see docs/final-frontier/submit-claim-cloudflare.md.
Use src/config/brand.ts for MYTHADIS / THE INTERNET SAID WHAT? identity.
CASE 001 / THE $68 MIRACLE is preview-only, preliminary 9.4, no final score/verdict.
CASE 002 (preliminary 3.2), CASE 003 (preliminary 4.4), CASE 004
(preliminary 9.6) and CASE 005 (preliminary 9.4) are supplied experiment plans with testing/final verdict pending.
Registered fixture entries remain development examples, not committed future cases.
Use CaseVideo for click-to-load YouTube and outbound Rumble; keep fixture media empty. Use the repository-backed `cases`
collection for investigations; retain the legacy field-report collection. Follow
`docs/final-frontier/case-authoring.md`; do not invent findings or evidence.
Legacy source remains archived in Git; public legacy paths now use public/_redirects.
Keep legacy links out of Final Frontier navigation.
Keep preview/fixture pages non-indexable. src/config/launch.ts stays launchReady=false
until the gates in docs/final-frontier/launch-checklist.md pass and the founder
explicitly approves official launch. FF-008 authorizes the soft production release
through the existing GitHub → Cloudflare flow after validation, with indexing
disabled and fixture warnings intact. Do not begin another slice automatically. See docs/final-frontier/rollback.md for rollback.

Preserve `archive/pre-final-frontier` and `pre-final-frontier-2026-10-06` at
`3ae7334b7f958f11f3337606b0559cda79c7e427`. Also preserve the existing
`archive/mythadis-platform-2026-09-12` and `mythadis-platform-final-2026-09-12`
references at that same commit. Never move, rewrite or delete these references.
The previous game-studio work remains on `rebuild/game-studio-v1`.

## Development

Approved workflow:

Founder
↓
ChatGPT
↓
Codex
↓
Cloudflare

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

Editorial standards live at /editorial-standards/. Preserve supplied disclaimer copy.
Use experiment_performed only for documented performed Mythadis testing, not plans
or mocks. Internal response documents in docs/editorial are not public routes.
