# MYTH-WEB-RESET-001 — Single-page dark studio site

The reset supersedes the homepage concepts in MYTH-WEB-003, MYTH-WEB-004, and MYTH-WEB-003R. It retains the existing Mythadis lockups, local typography, Astro infrastructure, centralized game records, and accessible disclosure script. It removes the temporary SVG fortress and replaces the hero, game feature, navigation, backgrounds, and page flow.

## Page and visual system

The public experience lives at `/`: header, typographic hero, Ember Vault, a quiet More Worlds Coming strip, About Mythadis, and footer. Header and footer navigation target `/#home`, `/#games`, and `/#about`. The hero actions also remain on the page. Ember Vault displays its In Development status rather than sending visitors to an unfinished game page. The existing noindex game placeholder and internal design-system review remain available but are not primary destinations.

`src/styles/studio.css` scopes neutral charcoal/obsidian surfaces to `studio-theme`. A small repeat-safe SVG grain and broad low-contrast gradients add restrained texture. The original lockup is unchanged; the new homepage removes unrelated sigils, waymarks, clipped metal buttons, and landscape ornament. Serif headings and sans-serif reading text use the existing local fonts.

## Artwork and provenance

The founder's `/Users/robmythadis.com/Downloads/EmberVault.png` matches the specified three-adventurer scene and is copied unmodified to `src/assets/games/ember-vault.png`. `games.ts` owns the imported image metadata and reset copy. The original is a 1536×1024 PNG. The feature uses Astro's Picture component to generate 480, 768, 1200, and 1536px AVIF, WebP, and JPEG variants at build time. Sharp is the build-time image processor required by Astro; no image-processing JavaScript ships to the browser. See [Astro image documentation](https://docs.astro.build/en/guides/images/).

The image is lazy loaded, has explicit dimensions and descriptive alternative text, and displays at its original 3:2 ratio. No crop, redraw, recoloring, text extraction, or image-generated replacement is used. The parchment area and all three travelers are deliberately retained. The full-width desktop art is the page's main visual moment.

Texture reference A (`2844b269-0185-58cc-a16a-8008bbc49d45.png`) and B (`2df477cb-b1a5-59e8-848f-90b1c988cb13.png`) point to `/mnt/data/ghostwriter_images/context/`, which is unavailable in this Mac workspace. Matching files were not found in Downloads, attached files, or the repository's local reference folders. Their local paths have been requested. Until supplied, the background implements the written charcoal/grunge direction; visual comparison with those two references remains outstanding. Do not claim those images were reviewed.

## Validation and handoff

Install, type check, and static build are required. Review `/` at 360, 390, 430, 768, 1024, 1440, and 1920px, including menu activation, Escape/focus restoration, section navigation, visible focus, reduced motion, image loading, and horizontal overflow. Check `/review/design-system/` and `/games/ember-vault/` for regressions. The lockup source must remain unchanged from `f0e90a10fd96c2fa9747ba1ca527ca3823e6fb4b`.

Stop for founder review. The missing texture references are a handoff limitation, not permission to invent new art or reinstate the rejected fortress composition. Do not begin another slice automatically.

## Recorded checks — 12 September 2026

- `corepack pnpm install`, `check`, and `build` pass; Astro reports zero errors, warnings, or hints. All four routes build and all twelve responsive image variants generate.
- Seven viewport checks (360–1920px) show no horizontal overflow or brand/navigation collision, one H1, and 60px primary CTA height. The art retains its 3:2 ratio at every width. Desktop and mobile full-page screenshots were visually reviewed.
- The menu opens with Enter; Tab shows a visible outline; Escape closes and restores summary focus. Selecting Games closes the menu and focuses the same-page section. Reduced-motion emulation reports zero CTA transition duration.
- Review and game-placeholder routes retain their noindex metadata; browser error/warning logs are empty. All homepage anchors target existing sections.
- The lockup source and supplied PNG were verified byte-for-byte against their originals.
