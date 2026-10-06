# Mythadis — Project Final Frontier

Final Frontier uses `docs/reference/analog-future-v2-3.html` as the approved visual source.
Preserve its typography, palette, asymmetry, CSS television, BS Meter and poster
composition. See `docs/ff-003-review.md` for current scope and validation.

Work on `feature/ff-003-canonical-case-experience`; production remains on `main`.
Preserve Astro, TypeScript, pnpm, static `dist` output and Cloudflare configuration.
Do not add frameworks, a backend, real media integrations or a publishing system. Use the repository-backed `cases`
collection for investigations; retain the legacy field-report collection. Follow
`docs/final-frontier/case-authoring.md`; do not invent findings or evidence.
Keep legacy routes/components intact and out of the new homepage navigation.
Keep design-review routes `noindex, nofollow`. Do not deploy production or start
FF-004 before founder review and a separately authorized slice.

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
