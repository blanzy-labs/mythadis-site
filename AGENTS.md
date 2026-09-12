# Mythadis game-studio website

Mythadis is an independent game studio. The approved identity is **MYTHADIS / Games for Worlds Unbound**. MYTH-WEB-003 implements the homepage header and hero with temporary CSS atmosphere. MYTH-WEB-002 supplies the gaming design foundation at `/review/design-system/`; final artwork and subsequent sections arrive in later slices.

## Operating model

Approved workflow:

Founder
↓
ChatGPT
↓
Codex
↓
Cloudflare

## Design governance

- Do not invent or materially reinterpret the Mythadis visual design.
- Do not substitute generic SaaS, startup, dashboard, esports, or template-driven visual patterns.
- Implement approved visual specifications supplied by the design architect.
- Do not change approved typography, artwork treatment, color system, spacing hierarchy, game identity, navigation, or brand language unless a slice explicitly authorizes the change.
- When a requirement is visually ambiguous, prefer a simple neutral implementation rather than inventing a new design direction.
- Do not add final fonts, generated artwork, animation, or new product capabilities without an authorized slice.

## Development

Preserve Astro, TypeScript, pnpm, static generation, and Cloudflare Pages-compatible `dist` output. Prefer plain Astro components and CSS. Do not introduce frontend frameworks, Tailwind, a CMS, a database, or server-side application without explicit authorization.

Reuse the MYTH-WEB-002 components and tokens documented in `docs/design-system.md`. Header, hero, and temporary navigation behavior are documented in `docs/header-hero.md`. Keep the design-review route `noindex, nofollow` and out of public navigation. Do not start MYTH-WEB-004 without a separate instruction following founder/design approval of the first screen.

Keep game metadata centralized in `src/data/games.ts`; Concept entries are editable design/test titles. Artwork is optional until approved assets arrive.

When starting the dev server, use background mode:

```sh
pnpm dev --background
```

This invokes `astro dev --background`. Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs` (via `pnpm exec astro ...` when needed).

Validate with `pnpm install`, `pnpm check`, and `pnpm build`, then smoke-test the affected pages.

## Repository hygiene and production safety

- Use feature/rebuild branches; current baseline work belongs on `rebuild/game-studio-v1`.
- Inspect local and remote Git state before modifying files; preserve unexpected user work.
- Do not commit secrets, local environment files, dependency/cache directories, `dist/`, or `.astro/`.
- Do not directly alter production unless explicitly authorized. Do not push, merge, force-push, rewrite, or delete `main` during rebuild slices.
- Cloudflare production remains on `main`. Do not change deployment configuration or trigger a production release without an explicitly approved release slice.
- Preserve `archive/mythadis-platform-2026-09-12` and the annotated tag `mythadis-platform-final-2026-09-12` at `3ae7334b7f958f11f3337606b0559cda79c7e427`. Never move, rewrite, or delete these references.
- Git is the legacy archive. Do not create `old-site/` or `archive/` copies in the active source tree.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
