# MYTH-WEB-003 — Header and hero

The homepage now contains `SiteHeader`, `Hero`, and minimal future anchors. This is a rebuild-branch implementation for visual approval, not a production release. No featured game, game grid, studio content, journal, or footer is implemented.

## Composition

The absolute header uses the existing default brand lockup at 1024px and wider, and its compact variant below that breakpoint. A faint bronze rule separates it from the hero. The hero uses the established editorial type, exact approved copy, one geometric mark, and two actions. Desktop leaves the right side open; mobile stacks the actions and moves atmospheric light beneath the copy. CSS gradients supply charcoal, mist, ember light, and a dark transition into the next marker.

## Navigation

- Games and Enter the Realm lead to `/#games`, the minimal Our Worlds marker.
- Studio leads to `/#studio`, a minimal Coming soon marker.
- Journal is visibly marked Coming soon and exposed as an unavailable link without an href or keyboard stop. There is no journal route yet.
- The hero links to `#games` and `#studio` once each.

The mobile menu is a full-width native `details` disclosure, not a modal. Enter opens it; Tab follows its links and can leave normally. A small isolated script synchronizes `aria-expanded`, closes on Escape with focus restored to the summary, closes after navigation or outside interaction, and resets at the desktop breakpoint. Without JavaScript the native disclosure and links remain usable. Hidden navigation has no keyboard stops. The page also provides a skip link and focusable fragment destinations.

## Future artwork

`Hero` accepts an optional `artwork` object with local `src`, intrinsic `width` and `height`, optional desktop `position` and `mobilePosition`, and optional `sources`. Each source has `srcset`, `type` (`image/avif`, `image/webp`, or `image/jpeg`), and optional `media` for art direction. Order mobile sources before desktop sources, and preferred formats before fallbacks. A local JPG may be the fallback `src`.

The existing picture structure uses `object-fit: cover`, responsive object positions, eager loading, and high fetch priority. The decorative image has empty alternative text and is hidden from accessibility APIs; all required meaning remains in HTML. No image is currently supplied or requested, and no remote assets or video load. Review contrast and cropping again when approved artwork is integrated.

## Validation — 12 September 2026

- `corepack pnpm install`, `corepack pnpm check`, and `corepack pnpm build` passed; Astro reported zero errors, warnings, or hints. Corepack selects the repository's pinned pnpm where the system launcher fails.
- Chrome layout checks covered 360, 390, 430, 768, 1024, 1440, and 1920px. No horizontal page overflow or header/content collision; one h1, loaded local fonts, and 48px hero action targets at every width.
- Desktop and mobile visual review passed. The mobile menu was checked open, with visible keyboard focus, disabled Journal skipped, Escape returning focus, and navigation closing at the focusable Games destination. Expanded and collapsed ARIA states were verified.
- Reduced-motion emulation showed zero running animations and zero CTA transition duration. The existing motion foundation is unchanged.
- The design-system route was inspected at mobile and desktop widths. Its components, styles, content, and noindex metadata are unchanged.
- Homepage title and description retain the approved values. No framework or dependency was added; only mobile navigation requires client JavaScript.

Review captures live outside source at `../mythadis-review/MYTH-WEB-003/`: `myth-web-003-desktop.png` (1440×1000 CSS viewport) and `myth-web-003-mobile.png` (390×844 CSS viewport). Chrome captured them at 2× pixel density. They are review evidence, not committed assets.

The deliberate visual compromise is temporary CSS atmosphere awaiting approved cinematic artwork. Subsequent content and Journal remain pending. Stop here for founder/design approval before MYTH-WEB-004.
