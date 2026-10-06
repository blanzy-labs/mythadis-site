# FF-004 — video platform integration review

## Implementation

Branch: `feature/ff-004-video-platform-integration`, based on FF-003.
The supplied slice is implemented within the existing Astro/static site and
approved Retro TV language. Production, Cloudflare configuration, main and archive
references remain unchanged. No push, merge or deployment is performed.

`CaseVideo.astro` is shared by the homepage featured investigation and canonical
case broadcast module. `getCaseMedia()` validates the existing optional fields
without changing the content schema. Watch programmes show the available
platforms while their primary links still open canonical investigations.

| Stored media | TV and actions |
| --- | --- |
| Neither | VIDEO NOT YET ATTACHED; no play button or platform links |
| YouTube only | Load Video button; outbound Watch on YouTube |
| Rumble only | VIDEO ON RUMBLE; outbound Watch on Rumble; no embedded player |
| Both | YouTube loader plus both outbound platform links |

Only an 11-character YouTube ID forms the iframe URL. Rumble retains the exact
stored HTTPS URL, with defensive validation and no scraping or embedding. Every
external watch link opens a new tab with `noopener noreferrer` and a meaningful
accessible label. Empty/invalid values never produce broken actions.

## Loading and presentation

No iframe or YouTube request exists before the viewer activates Load Video.
Activation creates a titled, lazy iframe at `youtube-nocookie.com`, with
`autoplay=0`, `playsinline=1`, fullscreen support and a strict-origin referrer
policy. Autoplay permission is omitted. The viewer then uses the platform's Play
control. Privacy-enhanced mode is used; activation does contact YouTube.
No API keys, platform SDK, metadata lookup or thumbnail hotlink is introduced.
The small vanilla custom element is bundled by Astro. Without JavaScript, outbound
YouTube links remain usable and the inactive load button stays hidden.

The existing wood frame, silhouette, palette and decorative dials remain. Actual
labels replace the misleading placeholder play symbol. Local thumbnails are
optional. Loaded players have a rectangular screen without scanline overlays.
Desktop homepage TV geometry remains intact; playable TVs widen on phones and
hide decorative side controls. Canonical playable broadcasts use a larger screen
and place supporting copy below. Player viewports retain at least 200px width
and height across the tested sizes. No typography asset, artwork, animation or
new product capability beyond the authorized media integration is added.

## Files

Created:

- `src/components/final-frontier/CaseVideo.astro`
- `src/lib/media.ts`
- `src/styles/case-video.css`
- `docs/ff-004-review.md`

Modified:

- `src/pages/index.astro` — shared featured-case TV.
- `src/components/final-frontier/PlatformPlaceholder.astro` — shared canonical TV and state-aware supporting copy.
- `src/pages/watch.astro` — media availability labels; canonical navigation retained.
- `docs/final-frontier/case-authoring.md` — field syntax, platform behavior and local-thumbnail guidance.
- `AGENTS.md` — current slice and next-slice review gate.

Content/schema, fixtures, scores, verdicts, case navigation, other routes, legacy
source, assets, dependencies, lockfile and deployment configuration are untouched.
No unrelated real video is attached to any fixture. No temporary QA page or asset
is saved in this workspace. All existing preview noindex/mock-content safeguards
remain. There is no new collection, CMS, backend, database or framework.

## Validation

- Frozen-lockfile installation succeeds; no dependency or lockfile change.
- `pnpm check`: 53 files, zero errors, warnings or hints.
- `pnpm build`: static `dist`, 22 pages and the existing sitemap endpoint.
- Four required states plus invalid-input fallback tested in home/case variants
  at 1440, 820, 390 and 320px: 40 passing combinations.
- No external request/iframe before activation; keyboard Enter loads exactly one
  iframe. Privacy host, constructed ID, title, lazy loading, fullscreen, referrer
  policy and disabled autoplay verified. Focus styling and outbound labels checked.
- No horizontal overflow before/after loading; every tested player viewport is
  at least 200px in each dimension. Desktop and narrow TV screenshots reviewed.
- JavaScript-disabled outbound fallback verified. Optional local poster verified.
- Isolated temporary case metadata verifies featured-homepage wiring, four
  canonical states and Watch availability/mirror labels. Synthetic ID requests
  were intercepted with a local stub; no unrelated real video was played.
- Main-workspace smoke test: 14 representative routes return 200; home, Watch
  and canonical fixture tested at all four widths without overflow, iframe or
  unavailable media controls. Draft route returns 404; no page errors.
- `git diff --check` passes; content/schema/dependencies unchanged and archive
  references retain `3ae7334b7f958f11f3337606b0559cda79c7e427`.
- Temporary isolated QA sources were restored/deleted and its preview stopped.

Commands used the pinned `npx --yes pnpm@11.12.0` launcher because of the existing
local pnpm-launcher issue. The ignored local dependency-resolution workaround
remains environmental; no repository dependency changes were needed.

Real video playback remains unverified because no approved investigation video
is supplied. Current fixtures correctly show the no-video state. Component
loading, network timing and platform links are verified with isolated QA data.

## Preview and founder gate

Built preview: `http://127.0.0.1:4322/` and
`http://127.0.0.1:4322/cases/017-ai-investment-6732/`.
Watch: `http://127.0.0.1:4322/watch/`.
No public preview or production release is created. FF-005 does not begin
without a supplied and reviewed slice.
