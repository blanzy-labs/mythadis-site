# Mythadis

The public website for the Mythadis independent game studio.

**MYTHADIS — Games for Worlds Unbound**

`rebuild/game-studio-v1` contains the MYTH-WEB-003 header and hero at `/`, built on the MYTH-WEB-002 gaming design system. The homepage uses temporary CSS atmosphere pending approved artwork. Evaluate the reusable foundation at `/review/design-system/`; it remains an internal, noindex review route.

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

- `src/pages/index.astro`: header, hero, and minimal future-section anchors at `/`.
- `src/components/SiteHeader.astro`: production header and accessible mobile disclosure navigation.
- `src/components/Hero.astro`: approved hero copy, CSS atmosphere, and optional responsive local artwork.
- `src/pages/404.astro`: neutral not-found page.
- `src/layouts/BaseLayout.astro`: shared HTML document and metadata.
- `src/styles/global.css`: isolated baseline styling.
- `src/styles/design-system.css`: entry point for gaming tokens, local typography, background, focus, and motion rules.
- `src/components/`: reusable brand lockup, mark, divider, headings, CTA links, game status/cards, and frames.
- `src/pages/review/design-system.astro`: internal visual specimens and composition study.
- `src/data/games.ts`: typed game records with slug, title, tagline, description, status, featured flag, optional artwork, and semantic theme hooks.
- `public/robots.txt`: static crawler instructions.

Ember Vault is featured and In Development. Dungeon Crawl, Free City, Black Depths, and Shattered Hope are editable Concept/design-test titles. Game taglines and descriptions are blank pending approved copy; artwork is optional and omitted. Add reusable components and asset directories only when needed. Individual game pages are deferred.

## Design governance

Implement approved specifications from the design architect. Preserve the approved brand name and tagline. MYTH-WEB-002 implements Cinzel Decorative, Cormorant Garamond, and Manrope with the specified dark stone, bronze, and ember palette. MYTH-WEB-003 applies that foundation to the header and hero. Final artwork and subsequent homepage sections remain deferred. See `AGENTS.md`, [the design-system guide](docs/design-system.md), and [the header and hero guide](docs/header-hero.md).

## Legacy archive

The previous Mythadis software/platform website was retired on 2026-09-12.

Its final production state is preserved at:

- Branch: `archive/mythadis-platform-2026-09-12`
- Annotated tag: `mythadis-platform-final-2026-09-12`
- Legacy production commit: `3ae7334b7f958f11f3337606b0559cda79c7e427`

Both archive refs were verified remotely before cleanup. Treat the archive branch and tag as permanent, immutable references: never move, rewrite, or delete them. Git is the archive; do not duplicate the legacy implementation into this branch. Retirement is the development direction; production remains unchanged until a future approved release.

After founder/design approval of the first screen, the next recommended slice is **MYTH-WEB-004 — Ember Vault Featured Game Section**. Do not begin it automatically.
