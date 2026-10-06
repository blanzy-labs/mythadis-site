# Claim intake — Cloudflare setup

FF-005 preserves Astro static generation and the existing Pages Git deployment.
The repository-root `functions/api/claims.ts` supplies `/api/claims`; no Astro
adapter or Worker deployment replaces the site. Main/production is not deployed
by this slice. Configure and validate a feature-branch preview before release.

## Required preview configuration

1. Create one Workers KV namespace for claim submissions. In the existing Pages
   project's **Preview** settings, add the KV binding `CLAIM_SUBMISSIONS` and select
   that namespace. No namespace ID is needed in source; dashboard configuration
   is authoritative. Preview and production can use separate namespace targets
   under the same binding name to keep test submissions separate.
2. Create a managed Turnstile widget. Allow the exact Pages preview hostname you
   will test (including the branch alias or deployment host you actually open).
   Keep pre-clearance off. The form supplies action `submit_claim` and uses the
   supported compact widget so narrow phone layouts fit.
3. Add `TURNSTILE_SECRET_KEY` as an encrypted Pages **Preview** secret. Never put
   it in a `PUBLIC_` variable, source, terminal command argument or documentation.
4. Set `PUBLIC_TURNSTILE_SITE_KEY` in the Preview build environment to that
   widget's public site key. Astro reads it at build time; changing it requires
   rebuilding the static site. This value is intentionally public. Missing key
   leaves an honest, disabled preview form, with no Turnstile script loaded.
5. Deploy the authorized feature branch through the existing Pages Git workflow,
   using the existing build command and `dist` output. The `functions/` directory
   is discovered by Pages separately from `dist`; uploading only static assets
   to a dashboard is not a substitute for a Functions-capable deployment.
6. Open `/submit/` on the configured preview host, complete verification and send
   one plainly marked test claim using a public example URL, with no private data.
7. Confirm CLAIM RECEIVED and inspect the namespace in Cloudflare's KV tooling.
   Exactly one key `claim:<ISO timestamp>:<UUID>` should contain the record below.
   Confirm there is no token, honeypot, IP, fingerprint or raw request header.
8. Confirm malformed input, failed/expired verification and populated honeypot
   do not create records. Repeated clicks while sending must issue one request.
   Check server-unavailable errors and keyboard/mobile behavior. Remove marked
   test records manually when finished.

For a later explicitly approved production release, configure **Production**
`CLAIM_SUBMISSIONS`, encrypted `TURNSTILE_SECRET_KEY`, and build-time public
`PUBLIC_TURNSTILE_SITE_KEY` separately. Allow the actual production hostname(s)
on its widget. Do not point a test widget at production. No production binding,
release or main merge is performed in FF-005.

## Local review and Functions development

UI-only review remains available with `pnpm dev --background` or a static preview.
Astro's server does not run Pages Functions. With no public key, the form explains
that submissions are unavailable and cannot pretend to store data.

For supported local Functions development, build and run Wrangler from the repo:

```sh
pnpm build
npx wrangler@4.148.0 pages dev dist --port 8788 --compatibility-date 2026-10-06 --kv CLAIM_SUBMISSIONS
```

Wrangler provides its own local KV emulator under ignored `.wrangler/`; no custom
local database is introduced. Open `http://localhost:8788/submit/`. To exercise
successful real verification locally, use a separate development Turnstile widget
that allows `localhost`. Put its public key in ignored `.env.local` before the
build, and its secret in ignored `.dev.vars` for Wrangler:

```text
# .env.local — public development widget key
PUBLIC_TURNSTILE_SITE_KEY=<development-site-key>

# .dev.vars — separate file; never commit
TURNSTILE_SECRET_KEY=<development-secret-key>
```

Cloudflare's documented public test site key `1x00000000000000000000AA` can be used
for widget-only UI review. Dummy Siteverify responses may omit action or return action `test` and
placeholder hostnames, so they are deliberately not a bypass for this endpoint's
strict `submit_claim`/request-hostname checks. Use the registered development
widget for complete local storage verification. No production secrets are needed
for the repository's mocked tests or isolated browser tests.

Run lightweight function tests with the supported Node 22.12+ / Node 24:

```sh
node --experimental-strip-types --test tests/claims.test.mjs
```

They import the TypeScript function through Node's native type stripping; no test
framework or runtime package is added. `pnpm check` and `pnpm build` remain the
required site checks. Missing runtime bindings returns a generic 503; local tests
must not interpret that as accepted storage.

## Request, response and limits

Only POST with `application/x-www-form-urlencoded` is accepted. The ordinary form
and enhanced client use the same encoding; uploads, multipart and JSON input are
not supported. Async requests set `Accept: application/json`; normal form posts
receive an accessible HTML confirmation/error page. Both receive no-store headers.
Unsupported methods return 405 with `Allow: POST`; wrong content type returns 415.
Requests from a different Origin are rejected with 403 when Origin is supplied.
Duplicate or unknown fields are rejected rather than stored.

| Field | Trimmed string limit |
| --- | --- |
| `claim_url` | 1–2,048; full HTTP/HTTPS URL, without embedded credentials |
| `claim_summary` | 10–1,200 |
| `why_interesting` | 10–1,600 |
| `name` | optional; 0–100 |
| `email` | optional; 0–254; valid email if present |
| `notes` | optional; 0–2,000 |
| `cf-turnstile-response` | required; 1–2,048 |
| `company` | honeypot; non-empty submissions confirm without storage |

Total encoded request body is capped at 32 KiB, including streaming bodies with
no Content-Length. Strings are trimmed; disallowed control characters are rejected.
Limits count JavaScript/HTML UTF-16 string units. Highly percent-encoded text may
reach the total byte cap before an individual text limit. User text is stored as
plain strings, never rendered as trusted HTML.

JSON success: `{ "ok": true, "submission_id": "<UUID>" }`. Honeypot responses
use `{ "ok": true }` without writing. Validation errors return 400 and
`{ "ok": false, "message": "...", "errors": { "field_name": "..." } }`.
Missing/failed/expired verification returns generic 403 retry guidance. Oversized
body returns 413; verification-service, configuration or storage failures return
generic 503. Responses never disclose secrets, KV identifiers or stack traces.

## Verification and storage

The Function POSTs `secret` and `response` to Cloudflare Siteverify, with a
10-second timeout. It sends no `remoteip`. Before storage it requires success to
be exactly true, hostname to match the request hostname, and action to equal
`submit_claim`. Failed, expired or replayed tokens cannot write a record. The
client resets verification after a failed attempt and retains form values. It
locks submission while sending; server-side token single-use semantics protect
against replay. There is no automatic retry or additional idempotency store.

Each successful KV `put` writes one record, with no expiration or secondary index:

```json
{
  "id": "<server-generated UUID>",
  "submitted_at": "<server-generated ISO-8601 timestamp>",
  "status": "new",
  "claim_url": "https://example.com/original-claim",
  "claim_summary": "The public claim to test.",
  "why_interesting": "Why the claim deserves testing.",
  "name": "",
  "email": "",
  "notes": "",
  "source": "mythadis.com/submit"
}
```

Optional fields consistently store empty strings when absent. Entries persist
until manually removed or a later retention policy is introduced. No IP,
fingerprint, tracking ID, token, honeypot or request headers are stored. Optional
contact information is for submission follow-up only. No email service, admin
interface, CMS, D1, automated research or case creation is introduced.

Official references: [Pages bindings](https://developers.cloudflare.com/pages/functions/bindings/),
[local Pages development](https://developers.cloudflare.com/pages/functions/local-development/),
[Turnstile Siteverify](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/),
[Turnstile test keys](https://developers.cloudflare.com/turnstile/troubleshooting/testing/),
[Astro public environment variables](https://docs.astro.build/en/guides/environment-variables/).
