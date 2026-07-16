# MWEB-012 Public Site Polish

## Summary

MWEB-012 reviewed the current public Mythadis site for visual consistency, responsive behavior, metadata, accessibility, performance, and sharing readiness.

Strategic filter: YES. This work improves trust before public LinkedIn and outreach sharing.

## Scope

Public routes audited:

- `/`
- `/why-mythadis/`
- `/proof/`
- `/current-state/`
- `/field-reports/`
- `/field-reports/why-unity-without-centralization/`
- Branded `404`

Shared surfaces audited:

- Site header and mobile navigation
- Public footers
- Page heroes
- Buttons and status labels
- Cards, panels, diagrams, and long-form report content
- Canonical metadata and social-sharing metadata

Internal visual-study and design-system routes were not redesigned.

## Route Audit

| Route | Typography | Spacing | Components | Mobile | Copy consistency | Metadata | Result |
|---|---|---|---|---|---|---|---|
| `/` | Approved fonts retained; canonical product description corrected in metadata and footer. | Existing hero rhythm retained. | Footer product line normalized. | Checked at 1440, 1280, 1024, 768, 412, 360. | Product sentence now uses approved wording. | Added global social image metadata. | Pass |
| `/why-mythadis/` | Approved display/body/mono roles retained. | Added minimal word-spacing on the page title. | Footer nav normalized. | 412 and 360 no title collision; nav wraps. | Canonical future declaration retained. | Added global social image metadata. | Pass |
| `/proof/` | Approved typography retained. | Existing rhythm retained. | Footer normalized to public route order. | 360 header no longer spills horizontally. | No proof-status contradiction found. | Added global social image metadata. | Pass |
| `/current-state/` | Approved typography retained. | Existing evidence-record rhythm retained. | Footer normalized to public route order. | 360 header no longer spills horizontally. | Status language remains bounded and factual. | Added global social image metadata. | Pass |
| `/field-reports/` | Approved typography retained. | Existing record rhythm retained. | Footer normalized; published report label changed to `Report focus`. | Checked at all required widths. | Published Report 001 no longer uses preparation language. | Added global social image metadata. | Pass |
| `/field-reports/why-unity-without-centralization/` | Long-form reading measure retained. | Existing report rhythm retained. | Footer normalized. | Checked at all required widths. | Replaced remaining review-language with published doctrine wording. | Indexable, canonical production URL, no `noindex`. | Pass |
| Branded `404` | Approved typography retained. | Existing centered rhythm retained. | Branded 404 left intentionally minimal. | Checked at required widths. | No contradictory public claims. | Has global social image metadata; remains `noindex`. | Pass |

## Changes Made

- Added one global social-sharing image:
  - `public/mythadis-social-card.svg`
  - `public/mythadis-social-card.png`
- Added `og:image`, `og:image:secure_url`, image dimensions, image alt text, and `twitter:image` in `BaseLayout`.
- Changed Twitter card type to `summary_large_image`.
- Tightened mobile header navigation below 420 px by wrapping links instead of relying on horizontal scroll.
- Added minimal `word-spacing` to the `/why-mythadis/` hero title to prevent the known `Why Mythadis` word collision.
- Normalized the canonical product-description line in public footers:
  - `Mythadis exists to coordinate intelligence—not just computation.`
- Updated Report 001 published-state language:
  - Replaced remaining doctrine-under-review copy.
  - Changed the published landing-card heading from `Planned focus` to `Report focus`.
  - Removed the Field Reports landing-page sentence that implied no report had been published yet.
- Normalized public footer link order where applicable:
  - Field Reports
  - Proof
  - Current State

## Deliberately Left Unchanged

- Page-specific hero compositions were not redesigned.
- Existing page-specific card and evidence panel treatments were retained where they represent different content types.
- Report 002 remains `IN PREPARATION` and has no public article route.
- The branded 404 remains intentionally minimal and `noindex`.
- No sitemap integration was added because this ticket excludes new infrastructure.
- Internal visual-study routes remain out of redesign scope.

## Screenshot Evidence

Baseline and after screenshots were captured at the required complete-review widths:

- `docs/mweb-012/screenshots/before/*-1440.jpg`
- `docs/mweb-012/screenshots/before/*-412.jpg`
- `docs/mweb-012/screenshots/after/*-1440.jpg`
- `docs/mweb-012/screenshots/after/*-412.jpg`

Additional responsive checks were run programmatically at:

- 1440 px
- 1280 px
- 1024 px
- 768 px
- 412 px
- 360 px

## Validation Results

Configured checks:

- `pnpm check`: passed, 0 errors, 0 warnings, 0 hints
- `pnpm build`: passed, 12 pages built
- `pnpm audit`: passed, no known vulnerabilities

Built-preview smoke tests:

- All public routes returned expected statuses.
- Report 001 is `PUBLISHED`, dated `2026-07-16`, canonicalized to production, and indexable.
- Report 002 article route returns `404`.
- Public routes include `og:image` and `twitter:image`.
- Social image returns HTTP 200 with `image/png`.
- No accidental links to internal visual-study or design-system routes were found from public pages.

Lighthouse on built preview:

| Route | Performance | Accessibility |
|---|---:|---:|
| `/` | 99 | 100 |
| `/why-mythadis/` | 99 | 100 |
| `/proof/` | 99 | 100 |
| `/current-state/` | 98 | 100 |
| `/field-reports/` | 99 | 100 |
| `/field-reports/why-unity-without-centralization/` | 98 | 100 |

Axe:

- `@axe-core/cli`: 0 violations across the six public content routes.

## Known Limitations

- Automatic accessibility tooling cannot detect every manual accessibility issue.
- No sitemap work was included.
- LinkedIn may cache older metadata until the production URLs are refreshed.

## Founder Post-Production Action

After deployment, refresh key URLs through LinkedIn's Post Inspector so LinkedIn does not retain old cached metadata.
