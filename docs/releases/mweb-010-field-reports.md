# MWEB-010 Field Reports Landing Page

## Summary

- Built the public `/field-reports/` landing page for Mythadis Field Reports.
- Added `src/data/field-reports.ts` for the initial report-preview and category data.
- Added non-dominant Field Reports links to existing public page footers.
- Added an optional canonical URL override to `BaseLayout` so this page can use the requested canonical URL.

## Validation

- `pnpm check`: passed, 0 errors, 0 warnings, 0 hints.
- `pnpm build`: passed, 11 static pages built.
- `pnpm audit`: passed, no known vulnerabilities.
- Lighthouse built preview for `/field-reports/`: Accessibility 100, Performance 99.
- Lighthouse accessibility findings: none.
- Performance notes: FCP 1.7s, LCP 1.7s, CLS 0.005, TBT 0ms; remaining opportunities are render-blocking CSS and network dependency tree.

## Screenshots

- Desktop: `docs/releases/mweb-010/screenshots/field-reports-desktop.png`
- Mobile: `docs/releases/mweb-010/screenshots/field-reports-mobile.png`

## Known Limitations

- No individual Field Report article routes exist in this release.
- Report 001 and Report 002 are explicitly marked as in preparation.
- No fake dates, reading times, authors, metrics, screenshots, or report links are included.
