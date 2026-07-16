# MWEB-011 Field Report 001

## Summary

- Added the first complete Mythadis Field Report: `Why Unity Without Centralization`.
- Added an Astro content collection for Field Reports.
- Added a reusable long-form report layout at `src/layouts/FieldReportLayout.astro`.
- Added the dynamic report route at `src/pages/field-reports/[slug].astro`.
- Updated the Field Reports landing page to read report previews from the content collection and link Report 001.

## Review State

- Report 001 status: `IN REVIEW`.
- Report 001 route: `/field-reports/why-unity-without-centralization`.
- Report 001 uses `noindex, nofollow`.
- No publication date is set.
- Report 002 remains `IN PREPARATION` and does not generate an article route.

## Validation

- `pnpm check`: passed, 0 errors, 0 warnings, 0 hints.
- `pnpm build`: passed, 12 static pages built.
- `pnpm audit`: passed, no known vulnerabilities.
- Lighthouse built preview for Report 001: Accessibility 100, Performance 98.
- Lighthouse accessibility findings: none.
- Performance notes: FCP 1.8s, LCP 1.8s, CLS 0.004, TBT 0ms; remaining opportunities are render-blocking CSS and network dependency tree.

## Screenshots

- Desktop report: `docs/releases/mweb-011/screenshots/field-report-001-desktop.png`
- Mobile report: `docs/releases/mweb-011/screenshots/field-report-001-mobile.png`
- Updated landing page: `docs/releases/mweb-011/screenshots/field-reports-updated-desktop.png`

## Known Limitations

- This branch is stacked on MWEB-010 because the Field Reports landing page is not yet on `main`.
- The report is not production-published until founder approval changes its state to `PUBLISHED`.
- No sitemap integration exists in the current repository.
- No wider Evidence architecture, Annals, search, categories, feeds, comments, or full publishing platform is included.
