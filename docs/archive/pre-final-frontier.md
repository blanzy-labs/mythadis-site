# Pre-Final-Frontier production archive

- Archive date: 2026-10-06
- Archive branch: `archive/pre-final-frontier`
- Annotated archive tag: `pre-final-frontier-2026-10-06`
- Production commit: `3ae7334b7f958f11f3337606b0559cda79c7e427`
- Source: fetched `origin/main` before FF-001 changes.

This archive preserves the pre-media-pivot Mythadis production site exactly, so
the Final Frontier rebuild can be reviewed before any production cutover. The
archive contains no refactoring or new documentation; this document lives on the
FF-001 feature branch. The existing September archive references remain intact.

## Validation

Validated the production commit in an isolated detached worktree before creating
the archive references. Using the repository-pinned pnpm 11.12.0 through `npx`
(the installed pnpm launcher failed during version resolution):

```sh
npx --yes pnpm@11.12.0 install --frozen-lockfile
npx --yes pnpm@11.12.0 check
npx --yes pnpm@11.12.0 build
```

Installation succeeded. Astro check reported zero errors, warnings, or hints
across 33 files. The static build succeeded with 12 pages and `dist` output.

## Restore for inspection

```sh
git worktree add --detach ../mythadis-pre-final-frontier pre-final-frontier-2026-10-06
cd ../mythadis-pre-final-frontier
pnpm install --frozen-lockfile
pnpm build
```

The archive branch resolves to the same commit and can also be used as the
worktree source. Never move or rewrite these archive references.

Restoring production requires a separately approved release slice. Do not reset,
force-push, or directly modify `main`; prepare a reviewed restoration change and
use the normal merge and Cloudflare release process.

## Current scope

Archive references are local; no remote publication or deployment has occurred.
No public `/archive/` route is created. The approved V2.3 artifact is preserved in
`docs/reference/analog-future-v2-3.html`. FF-001 implements it on the feature
branch; founder acceptance remains required before any subsequent slice.
