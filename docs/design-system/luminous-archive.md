# Mythadis Design System: The Luminous Archive

Visual Study A is the approved Mythadis direction.

## Status

- Study A: selected
- Studies B and C: archived alternatives
- Production components: derived from Study A

## Routes

- `/design-system/` shows the reusable component foundation.
- `/visual-studies/` preserves the historical study comparison.
- `/visual-study-a/`, `/visual-study-b/`, and `/visual-study-c/` remain historical records.

## Source Structure

- `src/styles/tokens.css` defines the approved colors, type stacks, spacing, and surface values.
- `src/styles/global.css` loads the shared CSS foundation.
- `src/layouts/BaseLayout.astro` provides the document shell.
- `src/layouts/SiteLayout.astro` provides the reusable Mythadis page shell.
- `src/components/design-system/` contains reusable Luminous Archive primitives.

## Design Notes

The system should preserve near-black layered backgrounds, ice-white typography, controlled electric-blue illumination, engineered geometry, strong negative space, and sparse archive/network motifs.

Use glow to reveal structure, not as decoration. Future production pages should compose these primitives instead of copying styles from the original Study A mock.
