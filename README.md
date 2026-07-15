# Mythadis Site

Public Astro site and visual foundation work for Mythadis, maintained by Blanzy Labs.

The current production surface is a static holding page for Mythadis Swarm. It states the private research status, preserves the approved Luminous Archive visual direction, and avoids public product-availability claims.

## Stack

- Astro
- TypeScript
- Static generation
- pnpm
- Plain CSS with custom properties
- Locally bundled font packages

## Local Installation

Requirements:

- Node.js `>=22.12.0`
- pnpm `11.x`

Install dependencies:

```sh
pnpm install
```

## Development Commands

```sh
pnpm dev
pnpm dev:studies
pnpm dev:studies:host
pnpm check
pnpm build
pnpm preview
```

Per repository workflow, start the Astro dev server in background mode when a persistent local server is needed:

```sh
astro dev --background
astro dev status
astro dev logs
astro dev stop
```

## Build And Deployment

Build command:

```sh
pnpm build
```

Output directory:

```text
dist
```

The site is intended for Cloudflare Pages as a static Astro build from the repository root. Cloudflare should install with pnpm, run `pnpm build`, and publish `dist`.

## GitHub Workflow

Development should happen on feature branches, then move through review before production deployment.

Approved workflow:

Founder
↓
ChatGPT
↓
Codex
↓
Cloudflare

Do not work directly on the production branch. Keep feature work scoped, preserve approved branding and copy unless a ticket explicitly changes them, and record release-specific validation in `docs/releases/`.

## Public Holding Page

MWEB-004 builds the intentional public holding page at `/`.

The page introduces Mythadis, states the mission, explains the current private R&D state, and provides a collaboration path without implying public product availability.

Holding page documentation lives in `docs/holding-page.md`.

## Visual Studies

MWEB-003A builds Visual Study A: **The Luminous Archive**.

MWEB-003B builds Visual Study B: **The Living Atlas**.

MWEB-003C builds Visual Study C: **The Open Signal**.

These are controlled review pages for evaluating typography, color, page background, buttons, labels, header and footer primitives, cards, content surfaces, and overall tone. They are not the final production homepage.

Visual study archive documentation lives in `docs/visual-studies/README.md`.

## Routes

- `/` contains the public Mythadis holding page.
- `/404/` contains the production not-found page.
- `/visual-studies/` compares the internal visual studies.
- `/design-system/` shows the approved Luminous Archive design system.
- `/visual-study-a/` contains The Luminous Archive internal record.
- `/visual-study-b/` contains The Living Atlas internal record.
- `/visual-study-c/` contains The Open Signal internal record.

Internal review routes are marked `noindex, nofollow` and are not linked from the public holding page navigation.

## Approved design direction

Visual Study A, **The Luminous Archive**, is the selected Mythadis visual direction. Studies B and C remain archived alternatives for historical comparison.

Reusable production primitives live in:

- `src/components/design-system/`
- `src/layouts/`
- `src/styles/`

Additional documentation lives in `docs/design-system/luminous-archive.md`.

## Side-by-side review

Run one local server and open the study routes in separate browser windows or tabs:

```sh
pnpm dev:studies
```

Default local review URLs:

- `http://localhost:4321/visual-study-a/`
- `http://localhost:4321/visual-study-b/`
- `http://localhost:4321/visual-study-c/`
- `http://localhost:4321/visual-studies/`
- `http://localhost:4321/design-system/`

Use `pnpm dev:studies:host` when the studies need to be reachable from another device on the local network.

## Design System

The production component foundation is intentionally small:

- `BaseLayout.astro` owns document metadata, favicon links, canonical URLs, and global CSS.
- `SiteLayout.astro` composes shared header/footer structure for internal pages.
- `src/components/design-system/` contains the approved reusable primitives.
- `src/styles/` contains tokens, typography, backgrounds, motion, and utilities.

## Project Roadmap

- Maintain the public holding page until Mythadis Swarm has a public release scope.
- Preserve visual studies as historical design records.
- Extend production pages only through approved feature tickets.
- Add repository governance files before broad public contribution.

## Contribution Notes

This repository is not yet configured for broad public contribution. Until contribution templates and governance docs are added, proposed changes should be handled through scoped feature branches and founder review.

Do not commit secrets, preview deployment URLs, generated `dist/` output, `.astro/`, or local environment files.

## Documentation Index

- Design system: `docs/design-system/luminous-archive.md`
- Visual studies archive: `docs/visual-studies/README.md`
- Holding page: `docs/holding-page.md`
- Release process: `docs/releases/mweb-005-production-release.md`
- Repository health: `docs/repository-health-report.md`
