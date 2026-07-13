# MWEB-005 Production Release Record

## Scope

Validate and prepare the approved Mythadis public holding page for production deployment to `https://mythadis.com/`.

This release does not redesign the page, add public pages, or change approved MWEB-004 content.

## Approved Source

- Source branch: `feature/mweb-004-public-holding-page`
- Source commit: `ee84e77966c50a9540bf6902734fa5002abac9cd`
- Release branch: `feature/mweb-005-production-release`
- Approved visual direction: The Luminous Archive

## Pre-Production Validation

Required checks:

- `pnpm check` - passed, 0 errors, 0 warnings, 0 hints
- `pnpm build` - passed, 6 static pages built
- Browser smoke test for `/` - passed locally, `200 OK`
- Internal route noindex verification - passed for `/design-system/`
- Desktop screenshot for `/` - captured at `docs/releases/mweb-005/screenshots/holding-desktop.png`
- Mobile screenshot for `/` - captured at `docs/releases/mweb-005/screenshots/holding-mobile.png`

Expected public route:

- `/`

Internal review routes preserved and marked noindex:

- `/design-system/`
- `/visual-studies/`
- `/visual-study-a/`
- `/visual-study-b/`
- `/visual-study-c/`

## Cloudflare Preview Validation

Before merge, confirm:

- A Cloudflare preview deployment exists for this pull request.
- Preview route `/` returns `200`.
- Preview route `/` renders the approved public holding page.
- Internal review routes include `noindex, nofollow`.
- No public header or footer links expose internal review routes.

## Founder Approval Gate

Do not merge this release branch until explicit founder approval is recorded on the pull request.

## Production Deployment Steps

After approval:

1. Merge the release pull request into `main`.
2. Confirm Cloudflare starts a production deployment from `main`.
3. Confirm production deployment succeeds.
4. Validate `https://mythadis.com/`.
5. Record production deployment URL, commit, timestamp, and smoke-test result.

## Production Smoke Test

Validate:

- `https://mythadis.com/` returns `200`.
- The root page is the Mythadis public holding page.
- The page uses the Luminous Archive visual system.
- The page states that Mythadis Swarm is private research and engineering.
- The page states that the project is not production-ready.
- The page states that no public Mythadis Agent is available.
- Collaboration path is present.
- No internal review routes appear in public navigation.

## Rollback Procedure

Rollback reference before production merge:

- Current approved holding-page commit: `ee84e77966c50a9540bf6902734fa5002abac9cd`

If production validation fails after merge:

1. Revert the merge commit on `main`, or restore the last known-good production commit.
2. Push the rollback commit through the same reviewed release flow unless emergency rollback is required.
3. Confirm Cloudflare production redeploys the rollback commit.
4. Smoke test `https://mythadis.com/`.
5. Record the rollback commit and reason in this release record or a follow-up release record.

## Current Blockers

- The GitHub repository currently has no `main` branch.
- No Cloudflare deployment records are currently visible through the GitHub deployments API.
- Production deployment cannot be completed until the repository has the approved `main` release target and Cloudflare is connected to that branch.
- Current live-domain check failed before deployment:
  - `https://mythadis.com/` returned a TLS connection error.
  - `http://mythadis.com/` reset the connection.
