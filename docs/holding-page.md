# Mythadis Holding Page

## Status

The public route `/` is the approved Mythadis holding page.

It communicates that Mythadis Swarm is private research and engineering, not production-ready, not a public volunteer network, and not offering a public Mythadis Agent.

## Source

- Page: `src/pages/index.astro`
- Shared document shell: `src/layouts/BaseLayout.astro`
- Shared primitives: `src/components/design-system/`
- Approved visual direction: `docs/design-system/luminous-archive.md`

## Public Navigation

The holding page navigation links only to public on-page sections:

- `#vision`
- `#current-state`
- `#collaborate`

Internal review routes remain available for controlled review, but are not linked from the public holding page navigation.

## Release Notes

Release validation and deployment steps are recorded in `docs/releases/mweb-005-production-release.md`.
