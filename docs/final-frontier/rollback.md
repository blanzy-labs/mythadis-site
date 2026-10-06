# Final Frontier rollback

No cutover is performed by FF-006. Before the approved release, record the current
successful Cloudflare **production** deployment ID/URL and Git SHA in the release
record. Preserve the existing Pages project, domain, build settings and history.

## Fastest recovery after a failed cutover

1. In the existing Cloudflare Pages project, open Deployments → All deployments.
2. Find the last known good successful **production** deployment recorded before
   cutover. Use its actions menu → **Rollback to this deployment**, and confirm.
   Preview deployments are not eligible rollback targets.
3. Verify `https://mythadis.com` serves that deployment, including its expected
   homepage/routes/assets. Leave DNS and archived Git refs unchanged.
4. Keep new release work off production until the failure is resolved. A deployment
   rollback is not a Git revert: create a reviewed revert/fix commit through the
   normal GitHub workflow before the next main build can redeploy the bad code.
   Never reset/force-push main to perform recovery.

Cloudflare describes this rollback as an immediate change to a previously
successful production deployment. Confirm the chosen deployment's actual SHA;
do not infer it merely from a branch name.

## Preserved Git recovery points

Known archived production SHA:
`3ae7334b7f958f11f3337606b0559cda79c7e427`.

- `archive/pre-final-frontier` (local preserved branch).
- `pre-final-frontier-2026-10-06` (local annotated tag).
- `archive/mythadis-platform-2026-09-12` (existing branch, also present remotely).
- `mythadis-platform-final-2026-09-12` (existing annotated tag).

All resolve to that SHA and must never be moved, rewritten or deleted. The new
pre-Final-Frontier refs have not been pushed in these slices; confirm accessible
backup refs before release through the approved workflow. Do not rely on a local
checkout being the only recovery copy. The remote historical archive branch
and unchanged origin/main currently retain the known SHA.

If the recorded deployment is no longer available, create a recovery branch
from the archived SHA, validate it, and restore the prior source through a normal
reviewed GitHub commit/PR to main. This is slower than Pages rollback and needs
release authorization. Do not create archive/old-site copies in active source.

## Data and redirects

Rolling back site code does not roll back KV records, external Turnstile settings
or browser-cached permanent redirects. Keep real submissions intact; do not
remove/rebind namespaces or rotate secrets as part of routine code rollback.
Inspect affected settings separately only when needed. Previously cached 301s
may still send some users to Final Frontier destinations after rollback; verify
those destinations on the restored site and use a reviewed fix if necessary.
No claim-data deletion or automation is part of this procedure.

Reference: [Cloudflare Pages rollbacks](https://developers.cloudflare.com/pages/configuration/rollbacks/).
