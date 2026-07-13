# Mythadis Site

Visual foundation work for the Mythadis website.

## Visual Studies

MWEB-003A builds Visual Study A: **The Luminous Archive**.

MWEB-003B builds Visual Study B: **The Living Atlas**.

MWEB-003C builds Visual Study C: **The Open Signal**.

These are controlled review pages for evaluating typography, color, page background, buttons, labels, header and footer primitives, cards, content surfaces, and overall tone. They are not the final production homepage.

## Routes

- `/` compares the available visual studies.
- `/visual-studies/` compares the available visual studies.
- `/design-system/` shows the approved Luminous Archive design system.
- `/visual-study-a/` contains The Luminous Archive.
- `/visual-study-b/` contains The Living Atlas.
- `/visual-study-c/` contains The Open Signal.

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

## Stack

- Astro
- TypeScript
- Static generation
- pnpm
- Plain CSS with custom properties
- Locally bundled font packages

## Commands

```sh
pnpm install
pnpm dev
pnpm dev:studies
pnpm check
pnpm build
pnpm preview
```
