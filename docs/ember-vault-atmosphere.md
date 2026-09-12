# MYTH-WEB-RESET-002 — Ember Vault atmosphere

`FeaturedGame.astro` now blends the approved artwork into the existing stone surface. The source PNG, Astro Picture settings, 3:2 composition, alt text, copy, and surrounding page structure remain unchanged. This slice adds no JavaScript, animation, dependencies, or texture assets.

## Treatment

The picture and its decorative overlays share a masked wrapper. Intersecting radial, horizontal, and vertical alpha gradients dissolve every edge; the radial center favors the vault and three adventurers. A separate local darkening gradient softens the transition into the stone. Uneven dark radial patches provide perimeter murk, and the lower vignette is stronger than the upper one. Only the decorative patches have a blur filter; the image itself has none.

Below 700px, narrower fades preserve more of the small composition, and overlay opacity and blur decrease. All layers are static, contain no accessible text, and ignore pointer events. The existing image retains its dimensions, lazy loading, decoding hint, responsive sources, and useful alternative text.

Standard and WebKit-prefixed masks are guarded by a feature query. Without mask-compositing support, stronger dark overlays keep the picture visible, though its silhouette is more rectangular. See [CSS mask compositing](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/mask-composite).

## Validation

- Frozen-lockfile install, `pnpm check`, and `pnpm build` pass. Astro reports zero errors, warnings, or hints; all four routes and twelve cached artwork variants build.
- Chrome checks at 360, 390, 430, 768, 1024, 1440, and 1920px preserve the image ratio with no horizontal overflow or image blur. Browser error/warning logs are empty.
- Review screenshots at approximately 1440×1200, 1920×1200, and 390×1000 were captured in the browser tool and visually inspected with the full art, nearby text, and stone visible. They are not committed.
- The vault entrance, warm glow, and three characters remain visible; the perimeter dissolves without a frame. Mobile fades retain more artwork.
- Disabling masks and restoring fallback overlay values in Chrome preserves the complete, readable picture. Direct Firefox and Safari rendering is unverified; the simulated fallback is not a cross-engine test.
- Source PNG SHA-256 remains `19608db0d6e4017701f9b722e09ff93d0a694f725bcee80ee2104f2081b39dac`.

Stop after pushing this slice for founder review. Production remains on `main`.
