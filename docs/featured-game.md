# MYTH-WEB-004 — Ember Vault feature

The homepage now contains the approved header and hero, `FeaturedGame` for Ember Vault, and a minimal More Worlds insertion marker. `#games` targets the feature itself; `#studio` remains a Coming soon marker. No catalog, studio, journal, or footer is implemented.

## Data and composition

`src/data/games.ts` supplies Ember Vault's title, slug, status, featured flag, theme, approved tagline, description, eyebrow, and CTA label. The homepage selects the featured record and passes it to `FeaturedGame`. The component derives the game route from its slug. Concept records remain unchanged and have no invented copy.

The section continues the hero's dark base and faint bronze rule. Desktop devotes roughly three fifths of the composition to an abstract vault atmosphere on the right. Mobile orders the title and tagline, visual, description, status, and full-width CTA vertically. All typography, button behavior, and status styling reuse the design foundation. The `data-game-theme="ember"` hook provides a restrained ember accent without changing global colors.

The architectural silhouettes, rust light, and foreground fade are CSS placeholders, not final artwork or gameplay screenshots. They are hidden from accessibility APIs. There is no presentation JavaScript, video, remote image, new font, or added dependency.

## Artwork replacement

The optional centralized `GameArtwork` supports local `src`, `alt`, intrinsic `width` and `height`, `objectPosition`, `mobileObjectPosition`, and optional `sources` with `srcset`, MIME `type`, and breakpoint `media`. Supported source types are AVIF, WebP, and JPEG. Put mobile sources first and preferred formats before the local fallback `src`.

The picture occupies a reserved artwork area and uses `object-fit: cover`, lazy loading, and asynchronous decoding. Image dimensions do not determine text layout. Use meaningful alt text for an informative screenshot or empty alt for decorative atmosphere. Review crops and imagery again when approved assets arrive. No optional secondary CTA is rendered because there is no Journal route.

## Minimal destination

`/games/ember-vault/` contains only the game title, shared In Development status, and “A full game page is coming.” It reuses `BaseLayout` and `SiteHeader`. Navigation leads back to the real homepage anchors.

Its title is “Ember Vault — Mythadis” and description is “Ember Vault is an upcoming game from Mythadis.” It uses `noindex, follow` because it is a temporary placeholder. `BaseLayout` now accepts `nofollow={false}` alongside `noindex`; the existing review route retains its default `noindex, nofollow` behavior. The homepage remains indexable.

## Validation — 12 September 2026

- Dependency installation, Astro check, and static build pass using the pinned pnpm through Corepack. No dependencies changed.
- Chrome checks at 360, 390, 430, 768, 1024, 1440, and 1920px confirmed no horizontal overflow, correct mobile/desktop content order, a continuous hero-to-feature boundary, and a 48px CTA target.
- Desktop and mobile composition, the minimal route, keyboard focus, and CTA navigation were inspected. A keyboard user arriving at `#games` can Tab directly to Enter Ember Vault.
- Reduced-motion emulation produced zero animations and a zero-second CTA transition. Chrome showed no console errors or issues on the reviewed routes.
- The existing design-system cards were visually checked at mobile and desktop widths with the newly populated Ember Vault copy. Only explanatory review notes changed; the primitives and global styles remain intact.
- The approved `Hero` and `SiteHeader` source files are unchanged. Game metadata, route title/description, indexing, and fragment destinations were checked.

Review evidence is outside the repository at `../mythadis-review/MYTH-WEB-004/`. The desktop review crop is 1440×1400 and the mobile crop is 390×1440; both include hero copy, transition, and the entire feature. The `-full.png` originals retain the header and complete page at 2× density (1440×1654 and 390×1775 CSS pixels).

The visual compromise is deliberate CSS atmosphere awaiting approved artwork. The game destination remains minimal and noindex. Stop after this slice for review; MYTH-WEB-005 — Realms of Mythadis Multi-Game Catalog requires a separate instruction.
