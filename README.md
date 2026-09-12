# Mythadis

The public website for the Mythadis independent game studio.

**MYTHADIS — Games for Worlds Unbound**

`rebuild/game-studio-v1` contains the MYTH-WEB-RESET-001 single-page studio site: preserved Mythadis logo, charcoal texture, typographic hero, supplied Ember Vault key art, About, and footer. The primary navigation stays on `/`. The reset awaits founder review; comparison with two unavailable texture references is pending. `/review/design-system/` remains an internal, noindex specimen route.

## Stack

- Astro and TypeScript with strict checking.
- pnpm, static generation, and plain Astro components and CSS.
- Cloudflare Pages-compatible `dist/` output; no server, CMS, or database.

## Development

Use Node.js `>=22.12.0` and pnpm `11.12.0`, as pinned in `package.json`.

```sh
pnpm install
pnpm dev --background
pnpm exec astro dev status
pnpm exec astro dev logs
pnpm check
pnpm build
pnpm preview
pnpm exec astro dev stop
```

The development server normally serves `http://localhost:4321`. Start it in background mode (`astro dev --background`). `pnpm preview` serves the generated build for local inspection.

If a system pnpm launcher cannot select the pinned version, use `corepack pnpm` in place of `pnpm`. `pnpm-workspace.yaml` exposes Astro's transitive `cookie` package at the project root because Astro 7's prerender output imports it there; this prevents resolution to an unrelated parent installation.

## Deployment and production safety

Cloudflare Pages uses the repository root, installs dependencies with pnpm, runs `pnpm build`, and publishes `dist`. Astro uses static generation; no runtime adapter is required. A generated `404.html` provides a not-found page for retired and unknown routes.

Production must remain on `main`, serving the existing production website during the rebuild. Work only on feature/rebuild branches. Pushing `rebuild/game-studio-v1` may create a Cloudflare preview according to the existing project settings; it does not authorize a production release. Do not change Cloudflare settings or merge into `main` without an explicitly approved production-release slice.

Do not commit secrets, local environment files, `node_modules/`, `.astro/`, or `dist/`.

## Source structure

- `src/pages/index.astro`: single-page header, hero, Ember Vault, About, and footer at `/`.
- `src/components/SiteHeader.astro`: production header and accessible mobile disclosure navigation.
- `src/components/Hero.astro`: reset hero copy and same-page actions.
- `src/components/FeaturedGame.astro`: full-composition key-art feature driven by centralized game data.
- `src/assets/games/ember-vault.png`: unmodified founder-supplied artwork, optimized by Astro at build time.
- `src/styles/studio.css`: reset-specific surfaces, texture, and actions.
- `src/pages/games/ember-vault.astro`: minimal, noindex game-page placeholder with shared navigation.
- `src/pages/404.astro`: neutral not-found page.
- `src/layouts/BaseLayout.astro`: shared HTML document and metadata.
- `src/styles/global.css`: isolated baseline styling.
- `src/styles/design-system.css`: entry point for gaming tokens, local typography, background, focus, and motion rules.
- `src/components/`: reusable brand lockup, mark, divider, headings, CTA links, game status/cards, and frames.
- `src/pages/review/design-system.astro`: internal visual specimens and composition study.
- `src/data/games.ts`: typed game records with slug, title, tagline, description, status, featured flag, optional artwork, and semantic theme hooks.
- `public/robots.txt`: static crawler instructions.

Ember Vault is featured and In Development. Dungeon Crawl, Free City, Black Depths, and Shattered Hope are editable Concept/design-test titles. Ember Vault uses the reset description and supplied key art; Concept copy and artwork remain blank. The Ember Vault route is a minimal `noindex, follow` placeholder; final game pages remain deferred.

## Design governance

Implement approved specifications from the design architect. Preserve the approved brand name and tagline. MYTH-WEB-002 implements Cinzel Decorative, Cormorant Garamond, and Manrope with the specified dark stone, bronze, and ember palette. MYTH-WEB-RESET-001 supersedes the earlier homepage concepts and supplies the complete single-page structure. See [the current reset guide](docs/single-page-reset.md), `AGENTS.md`, [the design-system guide](docs/design-system.md), [the header and hero guide](docs/header-hero.md), and [the featured-game guide](docs/featured-game.md).

## Legacy archive

The previous Mythadis software/platform website was retired on 2026-09-12.

Its final production state is preserved at:

- Branch: `archive/mythadis-platform-2026-09-12`
- Annotated tag: `mythadis-platform-final-2026-09-12`
- Legacy production commit: `3ae7334b7f958f11f3337606b0559cda79c7e427`

Both archive refs were verified remotely before cleanup. Treat the archive branch and tag as permanent, immutable references: never move, rewrite, or delete them. Git is the archive; do not duplicate the legacy implementation into this branch. Retirement is the development direction; production remains unchanged until a future approved release.

The next action is **founder review of MYTH-WEB-RESET-001**, including the pending texture-reference comparison. Do not continue another slice automatically.
