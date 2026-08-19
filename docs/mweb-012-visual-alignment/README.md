# MWEB-012 Visual Alignment

## Summary

The production website now uses Mission Control Alpha 2 as its visual reference while retaining the website's editorial spacing, page composition, and evidence-first role. Archived visual-study routes remain historical records and were not rethemed.

## Semantic Token Mapping

| Website token | Previous | Current role/value |
|---|---|---|
| `--ds-void` | `#02070a` | Application background / `#100d0b` |
| `--ds-void-2` | `#071116` | Navigation/secondary background / `#15110f` |
| `--ds-void-3` | `#0a161c` | Base surface / `#1b1613` |
| `--ds-surface` | cool blue charcoal | Warm `#1b1613` family |
| `--ds-surface-strong` | cool raised surface | Warm `#2a211d` family |
| `--ds-ink` | `#f4fbff` | Cream primary text / `#f7efe4` |
| `--ds-ink-soft` | `#c4d7df` | Muted cream text / `#c4b7a8` |
| `--ds-ink-muted` | `#8199a4` | Subtle warm text / `#998b7d` |
| `--ds-blue` | `#42d9ff` | Primary interaction and active flow / `#ff7a35` |
| `--ds-plum` | `#8d7adf` | Selection and secondary active state / `#a865b5` |
| `--ds-mint` | `#8cf0cd` | Verification and success / `#6fcca2` |
| `--ds-amber` | `#f6c56b` | Warning / `#f0b75f` |
| `--ds-info` | new | Information status / `#aaa9df` |
| `--ds-error` | new | Error status / `#ef887b` |

Lavender status text uses a lighter companion token to preserve small-text contrast while the selection token remains identical to Mission Control.

## Components and Surfaces

- Buttons now use solid sunset orange for primary actions and warm bordered surfaces for secondary actions.
- Status labels retain the existing `blue`, `amber`, `green`, and `plum` API while mapping to information, warning, success, and selection colors.
- Shared panels and cards use warm surfaces, subtle cream borders, medium radii, and restrained shadows.
- Header navigation uses orange interaction and lavender current-page state.
- The network motif uses orange active paths, lavender selected nodes, green verified nodes, and warm-neutral structure.
- The social-sharing card uses the same production palette and serif/sans relationship.

## Typography

Display headings use the Mission Control-compatible system serif stack. Inter remains the body and interface face. IBM Plex Mono remains limited to metadata, status, and evidence labels. The website retains its larger editorial scale and spacing rather than adopting application density.

## Accessibility

- Axe: zero violations across Home, Current State, Proof, Why Mythadis, Field Reports, the published Field Report, and Design System.
- Primary cream text contrast: `16.99:1` against the application background.
- Muted cream text contrast: `9.85:1` against the application background.
- Subtle text contrast: `5.85:1` against the application background.
- Sunset orange contrast: `7.46:1` against the application background.
- Dark primary-button text contrast: `7.20:1` against sunset orange.
- Focus treatment uses the orange hover token plus an independent outline and ring.

## Responsive and Route Validation

No horizontal overflow was detected on Home, Current State, Proof, Why Mythadis, Design System, Field Reports, the published Field Report, or the 404 page at:

- 360 px mobile
- 768 px tablet
- 1024 px laptop
- 1440 px wide desktop

All public navigation targets, the design-system route, sitemap, and social card returned their expected HTTP status.

## Screenshots

Fresh before/after evidence for Home, Current State, Proof, Why Mythadis, and Design System is stored at:

- `screenshots/before/*-1440.jpg`
- `screenshots/before/*-412.jpg`
- `screenshots/after/*-1440.jpg`
- `screenshots/after/*-412.jpg`

## Repository Gates

- Frozen-lockfile install: passed.
- `pnpm check`: passed with zero errors, warnings, or hints.
- `pnpm build`: passed; all 12 routes generated.
- `pnpm audit`: passed with no known vulnerabilities after within-range Astro/check updates and patched transitive dependency overrides.

## Scope

No MWEB-011 product claim, mission lifecycle, evidence statement, or page information architecture was materially changed. Text changes are limited to the design-system reference, documentation, visual asset descriptions, and an already accepted current-status label used by the component reference page.
