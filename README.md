# Mythadis Site

Public Astro site and visual foundation work for Mythadis, maintained by Blanzy Labs.

The current production surface is the public site for the broader Mythadis platform. It explains Operator, Mission Control, the Mythadis Data Acquisition Plane (MDAP), and Mythadis Swarm while clearly stating that the integrated alpha remains private R&D and is not production-ready.

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

## Public Platform Site

MWEB-004 established the original public holding page at `/`. MWEB-010 supersedes that positioning with an evidence-backed platform narrative while preserving the approved visual system.

The homepage introduces the platform, its four-system architecture, the governed mission lifecycle, the human authority model, current evidence, and collaboration paths without implying public product availability.

Holding page documentation lives in `docs/holding-page.md`.

## Visual Studies

MWEB-003A builds Visual Study A: **The Luminous Archive**.

MWEB-003B builds Visual Study B: **The Living Atlas**.

MWEB-003C builds Visual Study C: **The Open Signal**.

These are controlled review pages for evaluating typography, color, page background, buttons, labels, header and footer primitives, cards, content surfaces, and overall tone. They are not the final production homepage.

Visual study archive documentation lives in `docs/visual-studies/README.md`.

## Routes

- `/` contains the public Mythadis platform homepage.
- `/#platform` explains Operator, Mission Control, MDAP, and Swarm.
- `/#mission-example` walks through a clearly marked illustrative mission.
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

- Keep public platform claims reconciled with accepted application-repository evidence.
- Preserve explicit authority boundaries and production-readiness caveats.
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
