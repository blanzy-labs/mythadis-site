# MYTH-WEB-003R — Fantasy identity recovery

This remediation replaces the original MYTH-WEB-003 gradient-led composition. The header and hero are awaiting founder/design review on `rebuild/game-studio-v1`. The already-committed MYTH-WEB-004 feature, copy, data, and game route are preserved; no catalog or additional homepage section was added.

## Reference and composition

Both supplied references were inspected. The primary establishes brand prominence, a world-dominant environment, cold stone and mist, restrained bronze, and warm distant light. The secondary establishes the future studio/multiple-world relationship only. Local copies live in `_design-reference/`; the original filenames and README also remain in the user-requested `design-reference/`. Both directories are excluded through `.git/info/exclude`, with no reference imagery shipped or committed.

`BrandLockup` adds a `sigil` variant with a larger real-text wordmark, the existing Mythadis mark, and a restrained bronze seal. The integrated absolute header keeps navigation visually subordinate. Existing lockup variants remain available.

`HeroWorld` is an original, temporary inline SVG composition: layered mountains, distant ruins, a fortress above a deep valley, a broken bridge, fog, warm windows, rocky foreground, and a small traveler. There are no downloaded images, reference crops, filters, animation, canvas, or new dependencies. Its visibly faceted illustration is a staging composition, not approved final game art.

Desktop uses a roughly 94vh environment with text shaded into the left side. The world occupies approximately 60–65% of perceived composition. Mobile gives the environment its own substantial upper area and fades into the copy below. The studio label, seal, and lower waymark provide limited ornament. The exact approved headline, description, brand, tagline, and CTA wording remain HTML text.

The new `ButtonLink` `realm` variant uses a dark surface and thin clipped metallic edge. The outer link is not clipped, preserving its keyboard outline. Other button variants remain unchanged for the committed feature and existing specimens.

## Navigation

Games and Enter the Realm lead to `/#games`, the committed Ember Vault feature. Studio leads to the existing `/#studio` Coming soon marker. Journal remains an unavailable, visibly labeled link without a keyboard stop. The hero links to `#games` and `#studio`.

The mobile menu remains a native `details` disclosure. Its existing isolated script synchronizes `aria-expanded`, closes on Escape with focus restored to the summary, closes after navigation or outside interaction, and resets at the desktop breakpoint. Without JavaScript the disclosure and links remain usable. The page retains its skip link and focusable fragment destinations.

## Replacing temporary artwork

Pass an `artwork` object to `Hero`; the picture automatically replaces `HeroWorld`. Supply intrinsic dimensions for the final fallback asset, responsive sources, and crop positions. For example, after the approved files exist:

```astro
<Hero artwork={{
  src: "/brand/hero/mythadis-hero.webp",
  width: 2400,
  height: 1600,
  position: "68% 45%",
  mobilePosition: "72% 45%",
  sources: [
    { srcset: "/brand/hero/mythadis-hero-mobile.avif", type: "image/avif", media: "(max-width: 1023px)" },
    { srcset: "/brand/hero/mythadis-hero-mobile.webp", type: "image/webp", media: "(max-width: 1023px)" },
    { srcset: "/brand/hero/mythadis-hero.avif", type: "image/avif" },
    { srcset: "/brand/hero/mythadis-hero.webp", type: "image/webp" },
  ],
}} />
```

Place these under `public/brand/hero/`. The example dimensions must match the supplied image. No absent image is currently requested. The picture uses `object-fit: cover`, separate desktop/mobile object positions, eager loading, high fetch priority, and an empty alt attribute. All decoration is hidden from accessibility APIs. Recheck contrast and crops when final artwork arrives.

## Review evidence — 12 September 2026

Responsive checks cover 360, 390, 430, 768, 1024, 1440, and 1920px: no horizontal overflow or brand/navigation collisions, one H1, loaded local fonts, and 52px primary CTA targets. Actual screenshots at 1920×1080, 1440×1000, and 390×844 were reviewed against the primary reference. Captures live outside source in `../mythadis-review/MYTH-WEB-003R/` and are not committed.

The fortress, valley, and traveler communicate fictional adventure without relying on the headline. Brand prominence, world dominance, restrained ornament, and the cold/warm palette recover the intended family. The reference's painterly detail, richer lighting, and material texture remain a known compromise pending approved production artwork.

Keyboard review verified Enter, Tab order with unavailable Journal skipped, Escape returning focus, and navigation closing at the Games destination. Reduced-motion emulation removed CTA transitions; visible focus was reviewed on the new variant. The homepage, review route, and shared game-route header were inspected without browser errors. `corepack pnpm check` passed with zero errors, warnings, or hints; `corepack pnpm build` generated all four routes. Feature sources and the mobile-menu script remain byte-for-byte unchanged.

Stop for founder/design review of the recovered first screen. Do not begin another slice automatically.
