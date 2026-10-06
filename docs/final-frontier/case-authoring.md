# Authoring a Mythadis case

Create a Markdown file in `src/content/cases/`, for example
`019-descriptive-investigation-title.md`. Its filename (without `.md`) becomes
`/cases/019-descriptive-investigation-title/`. Keep filenames flat and stable.
The repository is the content source; no separate publishing system is required.

## Front matter

Required fields:

```yaml
case: 19
title: "Working investigation title"
summary: "A short description of the claim and investigation."
published: 2026-10-12
visibility: draft
preliminary_bs: 0
featured: false
```

This is a draft template, not a real release or finding. Replace every illustrative
value with supported editorial information before using it for an investigation.

Optional fields:

```yaml
final_bs: 0
verdict: "Supported editorial verdict"
category: "Display category"
tags: [example]
youtube_id: ""
rumble_url: ""
thumbnail: ""
updated: 2026-10-12
```

- `case` is a unique positive integer across both drafts and published records.
- `title` and `summary` must be nonempty. Dates must be valid dates.
- `visibility` is `draft` or `published`. Only `published` cases get public pages,
  archive/feed entries and case-navigation links. Publication dates do not schedule
  releases: visibility alone controls exposure.
- Exactly one **published** case must remain `featured: true` under the current
  FF-002 rules. Duplicate case numbers or zero/multiple featured published cases
  fail the build.
- BS scores are nonnegative numbers with no upper cap. Values such as 10.2 or 10.9
  are valid. Omit `final_bs` until supported; an absent final score produces no
  final assessment. Do not use a zero as an absence placeholder.
- `verdict` is free text, not an enum. A verdict without a final score renders as
  recorded verdict metadata, without inventing a score.
- Optional category/tags help select related cases; tags have no archive routes.
- `youtube_id` stores an 11-character video ID, not a URL. `rumble_url` is an HTTPS
  URL. Either may be empty or omitted. YouTube enables an inline click-to-load player;
  Rumble enables an outbound mirror link. Do not add iframe/embed HTML to the
  Markdown or store video files in the repository.
- `thumbnail`, when provided, is a root-relative local public image path such as
  `/images/cases/example.webp`, not a remote URL. Empty values use CSS placeholders.

## Video fields

```yaml
youtube_id: "XXXXXXXXXXX" # Replace with the approved 11-character video ID.
rumble_url: "https://..." # Replace with the approved full HTTPS mirror URL.
```

These are syntax illustrations, not playable fixture media. Do not paste a full
YouTube URL into `youtube_id`. YouTube loads only after the viewer selects LOAD
VIDEO, with autoplay disabled; the viewer then presses play in YouTube's controls.
Rumble opens the stored URL in a new tab. Either field may be omitted independently.
Leave fixture media empty until an approved Mythadis video exists. A local
thumbnail supplies the poster; otherwise the CSS television is used. No remote
thumbnails are fetched. Keep embed HTML and video files out of case Markdown/Git.

## Editorial body

Recommended headings (not required):

```markdown
## The Claim

## Why We Were Suspicious

## The Test

## What Happened

## The Verdict

## The Receipts
```

Write the sections the investigation actually needs. Native Markdown renders
paragraphs, lists, links, quotes and code. Arbitrary H2 headings are supported.
The page index uses Astro's rendered H2 headings; established headings get stage
styling and `The Receipts` gets an evidence treatment. Keep H1 for the page title
and use H2/H3 in the body. Use unique headings for clear section anchors.

Do not invent evidence, sources, quotes, statistics, observations or release dates.
State what was tested, what happened, and the limitations only when supported.
Link to genuine source material when it exists. A sparse receipts section is
better than fabricated material. The BS Meter is editorial language, not a
scientific probability.

The current fixture files are fictional examples. Keep their mock labels and
`noindex, nofollow` safeguards until real-content/release work explicitly removes
them. Run `pnpm check` and `pnpm build`, then review the generated case page.
