> The specimen route preserves the earlier reusable foundation. The current public direction is [MYTH-WEB-RESET-001](single-page-reset.md); its homepage does not use the ornate realm CTA or catalog cards.

# Mythadis gaming design system

MYTH-WEB-002 establishes the reusable foundation on `/review/design-system/`. The route is an internal, non-production specimen page with `noindex, nofollow`; it is not linked from `/`. The homepage remains the MYTH-WEB-001 baseline. A noindex directive is not access control.

## Direction and typography

Maintain the approved balance of fantasy atmosphere and contemporary editorial design. Use the display face sparingly, quiet metallic detail, generous space, and cinematic artwork areas. Do not add crests, dense rune patterns, neon, or generic application cards.

The only font dependencies are locally bundled Fontsource packages:

- Cinzel Decorative: Latin 400, for the wordmark and occasional short display text.
- Cormorant Garamond: Latin 500 normal and italic, for editorial and game titles.
- Manrope: Latin 400 and 600, for body, navigation, controls, and metadata.

Only these five faces are imported. Fontsource supplies `font-display: swap`; no external font requests are needed. Add other subsets only when content requires them. Do not synthesize weights or italics that have not been bundled.

## Style entry point

Import `src/styles/design-system.css` once on a page using the system, and render it with `<BaseLayout theme="gaming">`. The default layout theme remains `baseline`, so importing a component does not restyle the existing homepage. Use `noindex` on internal review pages.

The style entry point combines:

- `tokens.css`: palette, type scale, spacing, widths, borders, shadow, stacking, and timing.
- `typography.css`: local font faces and type utilities.
- `motion.css`: reduced-motion overrides.
- `design-system.css`: charcoal background layers, containers, selection, focus, and skip-link behavior.

`global.css` owns the minimal baseline and shared box sizing. Keep review-only arrangements in the review route, not in reusable components.

## Tokens and layout

Use the named palette tokens. Bone and parchment are the main text colors; mist is secondary text on void, obsidian, stone, or slate. Gold is suitable for small labels on dark surfaces. Bronze and steel are decorative detail colors. Ember bright is the text/focus accent; ember is primarily an edge or background accent.

Calculated contrast examples: bone/obsidian 12.99:1, mist/obsidian 5.92:1, mist/slate 4.52:1, gold/stone 4.87:1, ember-bright/obsidian 5.24:1. Recheck contrast when changing combinations or placing text over artwork.

Use `.container`, `.container--reading`, `.container--wide`, and `.full-bleed` for 76rem, 48rem, 96rem, and full-width arrangements. Page gutters and section spacing scale with the viewport. Layout changes use 40rem and 64rem media queries; custom properties cannot define media-query conditions.

## Components

| Component | Main props / behavior |
| --- | --- |
| `BrandLockup` | `variant`: default, compact, hero, sigil. Always retains the approved name and tagline as text. |
| `MythadisMark` | `size`: 16, 24, 48. Decorative by default; pass `label` only when the SVG conveys information. |
| `RuneDivider` | `size`: short, standard, wide. Decorative and hidden from assistive technology. |
| `SectionHeading` | `eyebrow`, `title`, `description`, `alignment`: start or center; `level`: h1/h2/h3; optional heading `id`. |
| `ButtonLink` | Required `href`; `variant`: primary, secondary, text, realm; optional `arrow`, `disabled`, and standard anchor attributes. Disabled examples omit href and are not keyboard stops. |
| `GameStatus` | Typed status: In Development, Concept, Coming Soon, Released. Plain metadata with a short rule. |
| `GameCard` | Game title, tagline, description, status, optional artwork, theme and href, featured flag; `variant`: standard/wide/featured; `headingLevel`: h2/h3/h4. |
| `MythicFrame` | Slot content; `tone`: quiet or raised. Single fine border and restrained corner detail. |

`ButtonLink` is for navigation. Use a semantic `<button>` for future actions rather than disguising actions as links. The review uses `data-review-state` to expose hover, focus, and active specimens without JavaScript. Actual keyboard/pointer states share the same styles; do not set this review attribute on production controls.

`GameCard` defaults to featured when `featured` is true. Its title is linked only when a real `href` is supplied. Avoid invented game destinations. Card title links in the review lead to an explanatory note; composition links lead back to the card specimens. A missing artwork value creates a neutral, explicitly labeled placeholder. No game artwork has been invented.

Game records remain in `src/data/games.ts`. `theme` is an optional semantic hook: ember, dungeon, city, depths, shattered. Cards expose `data-game-theme` for future specifications; the five themes intentionally do not have separate palettes yet. The local `--game-accent` variable controls a card's decorative accent, with ember reserved for the featured treatment. Do not rename the five titles or add unapproved world copy.

## Interaction and accessibility

Use the global 2px ember-bright keyboard outline with a 5px offset. Keep it unobstructed. CTA touch areas are at least 48px tall; review navigation links are at least 44px tall. Maintain heading order and keep ornaments decorative.

Hover changes edges and illumination, with small arrow movement and optional 1.025 artwork scale. There is no lift, parallax, entrance animation, or animated texture. Reduced motion removes transitions, animation, image scale, and arrow movement. The longer timing tokens are available but do not introduce motion on their own.

## Validation and next step

Run `pnpm install`, `pnpm check`, and `pnpm build`. Start with `pnpm dev --background`; manage it through `pnpm exec astro dev status`, `logs`, and `stop`. Use `corepack pnpm` if the system launcher cannot select the pinned pnpm version.

Review `/` and `/review/design-system/` at 360, 390, 430, 768, desktop, and large desktop widths. Verify local font loading, console/network errors, horizontal overflow, keyboard focus, reduced motion, and image/text contrast. The supplied gradients are temporary surfaces, not approved game art.

Implementation validation on 2026-09-12:

- Install, Astro check (zero errors/warnings/hints), build, HTTP responses, local font assets, internal anchors, noindex, and semantic/contrast checks passed.
- Native Chrome visual review covered 360, 390, 430, 768, 1440, and 1920px. In-browser viewport probes found zero overflowing elements at every width; document width matched the viewport, all five font faces loaded, and every CTA was at least 48px tall.
- Actual keyboard navigation showed the visible focus ring and skipped disabled CTAs. Chrome reported no console errors or Issues during review.
- Reduced-motion emulation reported zero animations, zero button transition durations, and no arrow transforms. Font requests stayed on the local origin. Emulation was restored afterward.
- The homepage source is unchanged, does not load the gaming stylesheet, and remained the neutral baseline in Chrome.
- Visual self-review: mythical and modern; no enterprise or generic gaming-template treatment; restrained ornament, prominent game titles, readable body copy, and distinct featured Ember Vault treatment. Founder/design approval remains the next step.

Stop after this slice is pushed for founder/design review. MYTH-WEB-003 — Production Header and Hero requires a separate instruction.

## MYTH-WEB-003R additions

The production `sigil` lockup and clipped-metal `realm` CTA are additive variants. Both have specimens on the review route, including all five CTA states. Previous variants remain intact. See `header-hero.md` for the recovered composition and final-art replacement contract. Founder/design review of the recovered first screen is required before another slice.
