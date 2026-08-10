# Mythadis Holding Page

## Status

Superseded by MWEB-010 on August 10, 2026.

This document records the earlier MWEB-004 holding-page phase. The public route `/` now represents the broader Mythadis platform: Operator, Mission Control, MDAP, and Swarm. The site continues to state that Mythadis is private R&D, not production-ready, and not a public volunteer network.

## Source

- Page: `src/pages/index.astro`
- Shared document shell: `src/layouts/BaseLayout.astro`
- Shared primitives: `src/components/design-system/`
- Approved visual direction: `docs/design-system/luminous-archive.md`

## Historical Public Navigation

The original holding page navigation linked only to public on-page sections:

- `#vision`
- `#current-state`
- `#collaborate`

Internal review routes remain historical controlled-review surfaces and are not linked from public navigation.

## Release Notes

Release validation and deployment steps are recorded in `docs/releases/mweb-005-production-release.md`.
