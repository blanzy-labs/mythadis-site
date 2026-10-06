# FF-005 — submit a claim workflow review

## State

Branch: `feature/ff-005-submit-claim-workflow`, based on approved FF-004.
The intake implementation is complete and locally validated. Live Cloudflare
preview storage validation remains pending configuration of the preview KV
binding and Turnstile keys. No real namespace, widget, secret, remote preview,
main merge, push or production deployment was created during this slice.
Production and archive references remain unchanged. FF-006 is not started.

## Implementation

`/submit/` now contains an Analog Future intake file with real labelled controls,
source/context guidance, concise disclosure and contact privacy copy. The existing
palette, poster typography, heavy rules and offset labels are retained. Other
page composition and the shared layout are unchanged.

A small vanilla script enhances the standard form POST with accessible success
and error states, progress text, an in-flight lock and retained field values on
failure. Native required/URL/email/length validation remains. Server field errors
are associated with their inputs and marked invalid; status receives focus and
is announced. Verification callbacks announce expiry/failure. No user content is
inserted as HTML. If the enhancement fails while Turnstile still works, an ordinary
POST receives a readable HTML confirmation or error. With JavaScript disabled,
the page explains verification requires JavaScript; it does not pretend to submit.

Only `functions/api/claims.ts` handles intake, using Pages Functions conventions.
Only POST `application/x-www-form-urlencoded` is supported, not uploads/multipart
or JSON input. Async requests ask for JSON; normal posts receive HTML. Accepted
JSON responses contain `ok: true` and a server-generated submission ID. Validation
returns 400 with fixed field-safe error messages; verification failures 403;
oversized bodies 413; unsupported media 415; unsupported methods 405 with Allow;
and service/storage/configuration failures a generic 503. Cross-origin requests
with an Origin header are rejected. All responses are no-store.

## Fields and limits

| Field | Validation |
| --- | --- |
| `claim_url` | Required; 1–2,048 characters; HTTP/HTTPS, no embedded credentials |
| `claim_summary` | Required; 10–1,200 characters |
| `why_interesting` | Required; 10–1,600 characters |
| `name` | Optional; up to 100 characters |
| `email` | Optional; up to 254 characters; email validation when present |
| `notes` | Optional; up to 2,000 characters |

Strings are trimmed and validated again server-side. Disallowed control
characters, duplicate/unknown fields and malformed/oversized bodies are rejected.
The streaming body is capped at 32 KiB regardless of declared Content-Length.
Text is stored as plain strings. No claim URL is fetched by the server.

`company` is a visually hidden, excluded-from-tab-order honeypot. Non-empty
submissions receive an ordinary confirmation without verification or storage;
normal submissions always require server-verified Turnstile.

## Turnstile and KV contract

Build-time `PUBLIC_TURNSTILE_SITE_KEY` renders the compact managed Turnstile widget
on this page only. Missing public configuration keeps the preview form disabled
with an explicit explanation and no external challenge script. Runtime
`TURNSTILE_SECRET_KEY` is exclusively read by the Function. Missing runtime
configuration fails safely, with no storage.

Siteverify receives only `secret` and `response`, with a ten-second timeout; no IP
is forwarded. Storage requires `success === true`, an exact match between returned
hostname and request hostname, and action `submit_claim`. Invalid, expired and
replayed tokens cannot write. Client failures reset verification; there is no
automatic retry or extra idempotency database. Production success relies on
Cloudflare's single-use token verification; the UI separately blocks repeated
clicks while the request is in flight.

`CLAIM_SUBMISSIONS.put` writes one JSON record under
`claim:<server ISO timestamp>:<server UUID>`, with no expiration or index:

```json
{
  "id": "<UUID>",
  "submitted_at": "<ISO-8601 timestamp>",
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

Optional fields consistently remain empty strings when absent. Claims persist
until manually removed or a later retention policy is introduced. No token,
honeypot, IP, fingerprint, tracking identifier or raw request header is stored.
No email/notification system, CMS, database application, D1, admin interface,
authentication, case creation or research automation is introduced.

## Files

Created:

- `functions/api/claims.ts` — bounded input parsing, validation, Siteverify, KV and safe responses.
- `src/scripts/submit-claim.ts` — vanilla form enhancement.
- `src/styles/submit-claim.css` — submit-only presentation.
- `tests/claims.test.mjs` — lightweight Node function tests using mocks.
- `docs/final-frontier/submit-claim-cloudflare.md` — preview/production bindings, local development and contract.
- `docs/ff-005-review.md` — this report.

Modified:

- `src/pages/submit.astro` — form, disclosures, Turnstile integration.
- `.gitignore` — local Cloudflare state and secret/environment file variants.
- `AGENTS.md` — current slice, narrow backend authorization and FF-006 gate.

No dependencies are added. Wrangler 4.148.0 was invoked through npx solely for
local supported tooling; no package manifest/lockfile or deployment configuration
change. Node's built-in runner/type stripping avoids introducing a test framework.

Legacy routes/source, homepage, Watch, case archive, canonical cases, Evidence,
About, all fixture content/schema, video components/styles/helpers, static assets,
shared layouts and scores/verdicts are unchanged.

## Validation

- Frozen-lockfile installation succeeds; no manifest/lockfile changes.
- `pnpm check`: 56 files; zero errors, warnings or hints.
- `pnpm build`: successful static `dist`; all 22 existing pages and sitemap build.
- 37 Node function tests pass: minimal/optional success, trim/plain-text storage,
  field failures, URL protocol/credentials, optional email, length/control
  characters, honeypot, missing/excessive tokens, invalid verification and wrong
  hostname/action, unavailable verification/storage/configuration, byte cap with
  and without Content-Length, duplicate/unknown fields, unsupported content type,
  Origin check, unsupported methods and normal HTML responses.
- Wrangler compiles the Pages Function successfully. Actual local HTTP requests
  at port 8788 return 405/Allow for GET and generic 503 for a structurally valid
  POST without bindings; no success is faked.
- Isolated browser tests at 1440, 820, 390 and 320px pass. Native required, malformed
  URL, unsupported URL scheme and optional-email feedback checked. Keyboard Enter
  activates the focused button with visible focus; in-flight duplicate events
  produce one request and one mock record. Success hides the form and focuses
  the announced receipt. Field, verification, storage and network failures retain
  the form text and reset verification. Plain POST fallback tested with the form
  enhancement removed. No page errors or horizontal overflow.
- The actual Cloudflare public test widget loads and produces a dummy token at
  320px without overflow; its compact dimensions and testing notice were reviewed.
  No actual claim was submitted through it. A direct documented dummy Siteverify
  request succeeds but returns a placeholder hostname and no action; strict
  endpoint checks intentionally reject such tokens for storage.
- Complete successful UI/server integration uses intercepted Siteverify/widget
  responses and an in-memory test stub, not a fake local database or live KV.
  Stored mock records contain only the documented keys. No real secrets needed.
- Main fixture regression smoke test: 14 representative routes return 200; home,
  Watch and canonical case checked at all four widths; draft 018 returns 404.
- FF-004 four media states plus invalid fallback are retested in an isolated QA
  page at all four widths, both variants (40 combinations), with intercepted
  YouTube frames. Privacy-before-load, keyboard activation, player attributes,
  no-JS outbound links and featured/canonical/Watch data wiring remain intact.
- Screenshots reviewed at desktop and narrow phone sizes. Form controls have
  real labels/help, 17px text and at least 50px control/56px submit height;
  responsive columns collapse in document order. Privacy/disclosure and essential
  instructions remain real text. The compact widget fits the narrow content area.
- Local secret file variants and Wrangler state are ignored. Diff/whitespace
  checks pass; only the files listed above are changed. No secret values committed.

Site commands use the pinned `npx --yes pnpm@11.12.0` launcher because of the
existing local pnpm-launcher issue. No related dependency changes were necessary.
Isolated QA media metadata/page/assets are restored or removed and its preview
stopped after testing. The normal root preview retains empty fixture media.

## Preview and remaining live validation

Local UI preview: `http://127.0.0.1:4322/submit/`. It deliberately displays the
unconfigured preview notice; real submissions require deployed Functions and
configured Cloudflare bindings. UI/source implementation is ready for founder
review; live Cloudflare acceptance is not claimed.

Follow `docs/final-frontier/submit-claim-cloudflare.md` to configure a feature-branch
preview, send a marked test claim and inspect one real KV entry, then verify
rejection/no-storage cases. Preview and production settings are explicitly
separate. No authenticated/configured preview was available for live storage
validation during this slice. No public preview URL is produced.
