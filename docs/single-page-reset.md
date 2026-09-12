# MYTH-WEB-RESET-001 — Single-page dark studio site

The reset supersedes the homepage concepts in MYTH-WEB-003, MYTH-WEB-004, and MYTH-WEB-003R. It retains the existing Mythadis lockups, local typography, Astro infrastructure, centralized game records, and accessible disclosure script. It removes the temporary SVG fortress and replaces the hero, game feature, navigation, backgrounds, and page flow.

## Page and visual system

The public experience lives at `/`: header, typographic hero, Ember Vault, a quiet More Worlds Coming strip, About Mythadis, and footer. Header and footer navigation target `/#home`, `/#games`, and `/#about`. The hero actions also remain on the page. Ember Vault displays its In Development status rather than sending visitors to an unfinished game page. The existing noindex game placeholder and internal design-system review remain available but are not primary destinations.

`src/styles/studio.css` scopes neutral charcoal/obsidian surfaces to `studio-theme`. An optimized charcoal-stone texture and broad low-contrast gradients add restrained texture. The AVIF is approximately 66 KB, with an approximately 82 KB WebP fallback; the former SVG grain has been removed. The original lockup is unchanged; the new homepage removes unrelated sigils, waymarks, clipped metal buttons, and landscape ornament. Serif headings and sans-serif reading text use the existing local fonts.

## Artwork and provenance

The founder's `/Users/robmythadis.com/Downloads/EmberVault.png` matches the specified three-adventurer scene and is copied unmodified to `src/assets/games/ember-vault.png`. `games.ts` owns the imported image metadata and reset copy. The original is a 1536×1024 PNG. The feature uses Astro's Picture component to generate 480, 768, 1200, and 1536px AVIF, WebP, and JPEG variants at build time. Sharp is the build-time image processor required by Astro; no image-processing JavaScript ships to the browser. See [Astro image documentation](https://docs.astro.build/en/guides/images/).

The image is lazy loaded, has explicit dimensions and descriptive alternative text, and displays at its original 3:2 ratio. No crop, redraw, recoloring, text extraction, or image-generated replacement is used. The parchment area and all three travelers are deliberately retained. The full-width desktop art is the page's main visual moment.

The founder subsequently supplied a charcoal masonry image directly in the conversation. That image has been visually reviewed and serves as the updated material reference for this follow-up. Its worn stone, irregular joints, subdued cracks, and near-black palette inform an original generated background; the supplied reference itself is not shipped. The built-in image-generation tool produced the texture, and Sharp resized/encoded the final 960×960 AVIF and WebP assets. See [the exact generation prompt and asset details](stone-texture-prompt.md). The originally named A/B files remain unavailable and are not represented as having been reviewed.

The texture is decorative CSS, applied at 32% opacity with a smaller mobile tile. The supplied image resolves the missing visual guidance for the current background. Logo, Ember Vault art, page copy, navigation, and section layout remain unchanged.

## Validation and handoff

The subsequent [MYTH-WEB-RESET-002 artwork treatment](ember-vault-atmosphere.md) adds CSS edge feathering and dark perimeter layers around the unchanged Ember Vault image.

Install, type check, and static build are required. Review `/` at 360, 390, 430, 768, 1024, 1440, and 1920px, including menu activation, Escape/focus restoration, section navigation, visible focus, reduced motion, image loading, and horizontal overflow. Check `/review/design-system/` and `/games/ember-vault/` for regressions. The lockup source must remain unchanged from `f0e90a10fd96c2fa9747ba1ca527ca3823e6fb4b`.

Stop for founder review of the single-page site with its new stone surface. Do not begin another slice automatically.

## Recorded checks — 12 September 2026

- `corepack pnpm install`, `check`, and `build` pass; Astro reports zero errors, warnings, or hints. All four routes build and all twelve responsive image variants generate.
- Seven viewport checks (360–1920px) show no horizontal overflow or brand/navigation collision, one H1, and 60px primary CTA height. The art retains its 3:2 ratio at every width. Desktop and mobile full-page screenshots were visually reviewed.
- The menu opens with Enter; Tab shows a visible outline; Escape closes and restores summary focus. Selecting Games closes the menu and focuses the same-page section. Reduced-motion emulation reports zero CTA transition duration.
- Review and game-placeholder routes retain their noindex metadata; browser error/warning logs are empty. All homepage anchors target existing sections.
- The lockup source and supplied PNG were verified byte-for-byte against their originals.

## Stone-reference follow-up

The actual desktop and mobile renders were reviewed for texture scale, joints, readability, and preserved Ember Vault composition. The existing image and brand are unchanged. Type checking and the production build are rerun for this asset/CSS change; the earlier navigation and layout validation remains applicable.

Small secondary text is brightened to `#b0aaa1`. A conservative upper background bound of `#3d3d3d` (maximum decoded stone value 110, 32% opacity, and the gradient upper bound) gives 4.71:1 contrast. Normal body and heading text have higher contrast.
