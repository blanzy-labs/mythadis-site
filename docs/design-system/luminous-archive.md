# Mythadis Alpha 2 Visual System

Mission Control Alpha 2 is the current visual reference. The website uses an editorial implementation of the same semantic system: warm darkness, cream text, sunset-orange interaction, lavender selection, amber warnings, and green verification.

The former Luminous Archive system and Visual Study A remain part of the design history, but their cyan/mint palette is no longer the production website direction.

## Status

- Mission Control Alpha 2: visual source of truth
- Website implementation: current editorial production system
- Study A: historical predecessor
- Studies B and C: archived alternatives
- Production components: aligned through shared `--ds-*` semantic tokens

## Routes

- `/design-system/` shows the reusable component foundation.
- `/visual-studies/` preserves the historical study comparison.
- `/visual-study-a/`, `/visual-study-b/`, and `/visual-study-c/` remain historical records.

## Source Structure

- `src/styles/tokens.css` defines the approved colors, type stacks, spacing, and surface values.
- `src/styles/global.css` loads the shared CSS foundation.
- `src/layouts/BaseLayout.astro` provides the document shell.
- `src/layouts/SiteLayout.astro` provides the reusable Mythadis page shell.
- `src/components/design-system/` contains reusable production primitives.

## Semantic Mapping

- Background: `#100d0b`, with `#15110f` and `#1b1613` structural layers.
- Raised surface: `#2a211d` family.
- Primary text: `#f7efe4`; supporting text: `#c4b7a8`; subtle text: `#998b7d`.
- Primary interaction and active flow: `#ff7a35`; hover: `#ff985f`.
- Selection and secondary active state: `#a865b5`.
- Verification and success: `#6fcca2`.
- Warning: `#f0b75f`; information: `#aaa9df`; error: `#ef887b`.

## Typography

Display headings use the Mission Control-compatible system serif stack: Iowan Old Style, Baskerville, Times New Roman, serif. Body and interface copy use Inter. IBM Plex Mono is limited to metadata, evidence labels, and status language.

## Accessibility and Use

Cream text must retain strong contrast against warm dark surfaces. Orange is the primary interaction color, lavender is selection, and green is reserved primarily for verified or successful states. Focus indicators must remain visible independently of hover and color must not be the sole carrier of meaning.

The website remains more spacious and editorial than Mission Control. It inherits semantic color, typography, surfaces, radii, and interaction behavior without adopting application navigation or dense operational layouts. Glow is restrained and used only to reveal active structure.
