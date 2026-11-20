# FF-011 — Publish the first Mythadis short film

The site ships with **no published films**. No film title, student identity, video ID
or release date has been invented. The homepage and `/watch/` deliberately say the
first production is in progress. Existing investigation files remain archives.

## 1. Edit one content file

On a feature branch from current `main`, edit **`src/data/films.ts`**. Add one object
inside its `films` array. This is the only content record needed: the first
published record automatically supplies the homepage TV, catalogue and film page.
Array order controls which published film is featured. Draft records are never
listed and do not generate public film pages. Drafts committed to Git are still
visible to people who can read the repository; do not store private student data.

Copy this draft template, replacing the descriptive placeholders before release:

```ts
export const films: Film[] = [
  {
    slug: "replace-with-approved-permanent-slug",
    title: "", // Founder-approved film title
    synopsis: "", // Founder-approved description
    status: "draft",
    // youtubeId: "", // Leave absent until the finished video is approved
    // thumbnail: "/images/films/approved-thumbnail.webp",
    // date: "YYYY-MM-DD", // Optional actual publication date
    credit: "Created by Mythadis TY Creative Producer",
  },
];
```

Keep the existing `import type { Film } from "../lib/films";` line. For later films,
add another object to the same array. Use a unique lowercase slug with hyphens;
once published, keep it unchanged to preserve shared links.

## 2. Add approved media and credit

- Upload the finished, approved film to YouTube using the studio’s own workflow.
  Confirm the public video allows embedding. Copy only the **11-character video
  ID** after `v=` in its watch URL (or after `youtu.be/`), not the full URL. Set
  `youtubeId` to that ID. The build rejects malformed IDs, but cannot verify video
  availability or embed permission: check those manually.
- Optional thumbnail: put the approved image in `public/images/films/` (create the
  directory if needed); use `/images/films/filename.webp` in the record. JPEG,
  PNG and WebP are supported. A 16:9 image, e.g. 1280×720, suits the TV player.
  If omitted, the existing CSS TV artwork is used; no third-party image is fetched.
- Enter the approved title and synopsis. Add `date` only when the actual release
  date is known, using `YYYY-MM-DD`; otherwise omit it.
- The default visible credit is **Created by Mythadis TY Creative Producer**,
  also used if `credit` is omitted. Use a specific student name only after explicit
  founder approval. Do not add identifying information while seeking approval.
- Keep `status: "draft"` until the film and its metadata are finished and approved.
  After approval, change it to `status: "published"` on the feature branch.
  A published record requires a nonblank title, synopsis and valid YouTube ID.

The creator/founder remains responsible for film, music, artwork and AI-tool rights.

## 3. Check locally and obtain founder review

From the repository folder (Node 22.12+ and pnpm):

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
node --test tests/*.test.mjs
pnpm preview
```

Open the local URL printed by preview. Check `/`, `/watch/`, `/about/`, and
`/films/<your-slug>/`. The player loads YouTube only after **LOAD VIDEO** is clicked,
uses the privacy-enhanced YouTube domain and does not autoplay. **WATCH ON YOUTUBE**
is the direct fallback, including when JavaScript is disabled. No network video
request should occur before clicking. Test keyboard navigation and focus as well.

Review at desktop and mobile widths (1440, 820, 390 and 320px): header links, hero,
TV and controls, film title/description/credit/date, thumbnails and lower panels.
There should be no horizontal overflow or clipped text. Test the actual approved
YouTube film on a phone and desktop; a syntactically valid ID is not proof it plays.

Open one PR with the content changes and the check results. Ask the founder to
approve the film, metadata, credit, appearance **and production release**. Do not
merge or deploy until that approval. No upload UI, CMS or extra service is needed.

## 4. Indexing and release

`src/config/launch.ts` has separate gates:

- `studioLaunchReady = false` until founder approval of the studio’s public release.
  In that approved release PR, change **only this flag** to `true` if indexing is
  approved. It is a one-time release setting, not a per-film editing requirement.
- Leave the legacy `launchReady = false`. It controls investigation readiness and
  fixture assertions; it is unrelated to publishing films.

Studio pages are indexable only when the studio flag is true **and** Cloudflare
sets `CF_PAGES=1`, `CF_PAGES_BRANCH=main`. Local builds and all preview branches
stay noindex, including when the flag is true. Archives remain noindex regardless
of either gate. The sitemap contains only approved studio routes and published
films, and is empty before release or on previews.

After explicit founder approval, merge the reviewed PR into `main` and use the
existing GitHub → Cloudflare Pages production workflow (`pnpm build`, static
`dist`). No deployment configuration change is needed. Verify the deployment has
finished before announcing the film. This implementation PR does not authorize
merging or production deployment.

## 5. Verify the public release

Open **`https://www.mythadis.com/films/<your-slug>/`** directly on mobile and desktop.
Verify the URL works when shared, the title and synopsis are correct, the approved
credit/date appear, LOAD VIDEO plays the correct film and the YouTube fallback works.
Check the homepage player and WATCH OUR FILMS link, plus the `/watch/` listing.
Confirm canonical/OG URLs use the stable film URL; a supplied thumbnail also supplies
the share image. Check `sitemap.xml` and robots metadata against the release gate.
Check an old `/cases/` URL still loads with its archive notice and noindex.

If a film is not ready, leave it draft. To withdraw a release, change its status
back to draft through a reviewed PR: the page and listings will disappear after
the approved rebuild. Keep the slug reserved if it will return.

## Implementation validation

Automated tests cover empty/draft states, validation failures, the default credit,
single-record publication across all three surfaces, real generated canonical URLs,
internal links, archive noindex, and production/preview sitemap behavior. Synthetic
film data exists only in isolated temporary test builds; it is never site content.
Browser screenshots and visual mobile verification could not be completed in the
implementation sandbox because Chrome aborted on launch. Founder review must
include the visual/playback checks above before release.
