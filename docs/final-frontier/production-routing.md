# Final Frontier routing and indexing

## Intended production surface

`/`, `/watch/`, `/cases/`, `/cases/<real-published-slug>/`, `/evidence/`, `/submit/`,
`/about/`; unknown URLs use `404.html` with HTTP 404 and noindex. `/api/claims` is
POST-only intake, not a public content page. Sitemap/robots are supporting endpoints.
Primary navigation is WATCH, CLAIMS, EVIDENCE, ABOUT, SUBMIT.

## Legacy redirects

Cloudflare Pages reads `public/_redirects`, copied to `dist/_redirects`. Permanent
301 rules apply with and without trailing slash:

| Old path | Destination |
| --- | --- |
| `/why-mythadis/` | `/about/` |
| `/proof/` | `/evidence/` |
| `/current-state/` | `/` |
| `/field-reports/` | `/cases/` |
| `/field-reports/*` (individual old reports) | `/cases/` |
| `/visual-studies/` | `/` |
| `/visual-study-a/` | `/` |
| `/visual-study-b/` | `/` |
| `/visual-study-c/` | `/` |
| `/design-system/` | `/` |

The existing Unity/platform report has no honest one-to-one investigation match,
so it uses the archive fallback. Exact rules precede the wildcard. There are no
core-route redirects, loops, DNS changes or custom routing service. Existing
legacy source is retained; Cloudflare redirects take precedence over those
static files, preventing them from being normal production destinations. They
are excluded from new navigation and sitemap. Astro's static preview may still
serve those legacy files; test redirect behavior with Wrangler or deployed Pages.
Only `/api/claims` has a Function, so it does not intercept the legacy redirect
paths. Unknown URLs are not broadly redirected, preserving meaningful 404s.

## Indexing and content gate

`src/config/launch.ts` remains `launchReady = false`. The CASE 001 scaffold and four published development fixtures still generate clearly labelled **preview** files for ongoing design review;
draft 018 has no route. No real published case has been supplied. Changing them
all to draft now would violate the required featured-case invariant and break
the approved preview. Replace the CASE 001 scaffold with supported, reviewed content and draft/remove
the other fixtures in the eventual approved release. See the authoring guide for
explicit fixture-registry removal after real content approval.

The sitemap now includes the six core static routes and only published cases
that are not known fixture identities or marked FF-002 fixtures. It never lists
legacy, internal, draft or QA routes. Current sitemap contains six URLs and zero
case URLs. Preview HTML is independently non-indexable; listing core routes in
its sitemap does not override noindex.

robots permits `/` (including required CSS/assets) and disallows `/api/`, with
the production sitemap location. A robots disallow is not used as a replacement
for noindex; preview HTML has explicit `noindex, nofollow`. After launch, actual
production pages can index; 404 remains noindex and drafts remain absent.
Cloudflare feature-branch builds also retain meta noindex based on CF_PAGES /
CF_PAGES_BRANCH, and Pages preview deployments supply X-Robots-Tag noindex by
default. Confirm the actual response header during live acceptance.

All core/case canonicals use `https://mythadis.com` regardless of the request
host. OG metadata is present for all core pages; case metadata uses authored
content and optional local thumbnail. No approved Final Frontier default image
is available, so no new/generated/hotlinked or legacy product image is used.
404 has no misleading canonical.

Social URLs are all blank in `src/config/social.ts` until supplied. The shared
SocialLinks component renders only valid configured HTTPS destinations; header
and homepage no longer render fake platform icons. Existing personal LinkedIn
metadata in the archived legacy implementation is not assumed to be a studio URL.
