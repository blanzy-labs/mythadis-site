# FF-005 live preview acceptance record

Status: **NOT RUN — launch gate remains open**.

On 2026-10-06, `wrangler@4.148.0 whoami` reported unauthenticated. No Cloudflare
connector or configured authenticated Pages preview was available. The founder
confirmed deployment uses `blanzy-labs/mythadis-site` → the existing Cloudflare
Git integration. Project settings, preview hostname, KV namespace and widget
bindings cannot be certified from repository source alone. No production
bindings, temporary unrelated account, DNS change or public release was used.

## Evidence to record when access/configuration is available

- Pages project name:
- Feature branch / Git SHA:
- Actual deployment URL / stable preview alias:
- Preview namespace binding verified as `CLAIM_SUBMISSIONS`:
- Preview Turnstile widget/site key configured for that hostname:
- Encrypted secret verified present (never record its value):
- Tester / date:
- `X-Robots-Tag: noindex` observed:

Follow `submit-claim-cloudflare.md` for setup. Deploy the feature branch through
the established GitHub → Pages preview workflow; main remains production.

## Successful test

1. Open `/submit/` on the exact configured preview host.
2. Use a public example URL, a summary beginning **FF-005 PREVIEW ACCEPTANCE TEST**,
   a clearly marked test reason and blank optional email/name. Complete Turnstile.
3. Submit once; also confirm repeated clicks while sending do not issue a second
   request. Observe CLAIM RECEIVED.
4. Match the returned ID to exactly one key `claim:<ISO timestamp>:<UUID>` in the
   **preview** namespace. Inspect its JSON fields, server time/ID, status `new` and
   source `mythadis.com/submit`.
5. Confirm no token, honeypot, IP, raw headers, fingerprint or tracking identifiers.

Record accepted test ID / KV key and observation (no private submitted content):

## Rejected test

Send the same valid structural fields with a deliberately invalid Turnstile token
using a standard URL-encoded request to the same preview `/api/claims`. Expect
403 and generic retry guidance. No test record should be written. An additional
validation failure should return 400 without storage. Do not bypass verification
or change the endpoint to make tests pass.

Record failure status / no-write observation:

## Completion

- [ ] Real success UI and exactly one correct preview record observed.
- [ ] Invalid verification/validation creates no record.
- [ ] No forbidden fields stored.
- [ ] Preview test record manually removed after evidence review.
- [ ] Deployment/commit and dated results recorded above.

Only then mark the live preview gate passed in `launch-checklist.md`. Local
Wrangler compilation, mock storage, a dummy widget or synthetic release-mode
build are useful code validation, but do not constitute this acceptance.
