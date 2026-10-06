# FF-010 — Legal and editorial guardrails review

Founder requested implementation and production publication after checks pass.
Baseline is current main after CASE 005. The supplied brief names CASE 004/005
as Clone Me/Human Enough, which differs from the actually published Magic
Sticker/Amnesia Machine. Its explicit no-rewrite requirement is applied to the
actual case files: no case file, URL, rating, evidence, plan or conclusion changed.

Public `/editorial-standards/` uses the supplied nine sections and exact copy,
with existing route heading, document/index layout, palette and typography.
A separate Corrections / Evidence block uses the supplied supporting text and
links to existing `/submit/` intake status. Founder confirmed no contact endpoint
is ready and approved a placeholder. No mailbox or working correction intake is
invented; the public pending state is explicit.

Every public case uses shared CaseEditorialNote after its final assessment/
verdict or pending document. Exact BS Meter text is centralized in editorial.ts.
`experiment_performed` is optional/default false; only actual documented Mythadis
experimental testing should set it true. Planned tests and mock fixtures do not
qualify. The shared note renders below the case document only for true. No current
CASE 001–005 has performed testing, so none shows that note. Authoring guide
explains this metadata. A temporary isolated true case validated the positive
render path and was restored; root case source never changed.

Global footer adds only the compact opinion sentence and Editorial Standards
link. No header warning/modal, dependencies, analytics, media or backend change.
Standards route uses existing metadata/canonical/noindex behavior and is included
in publicRoutes/sitemap. launchReady=false remains. Four required internal files
under docs/editorial hold public copy, correction procedure, escalation triggers,
response templates, checklist and channel boilerplate; they are not public routes.
No legal responses were sent or external channels modified.

Validation: frozen pnpm install, Astro check (65 files, zero diagnostics), static
build, all 44 tests (42 existing plus copy-sync and explicit testing gate), 28
responsive standards/home/CASE 001–005 combinations at 1440, 820, 390, 320 pixels.
Footer links, section anchors/keyboard focus, note placement, conditional absence,
canonical/noindex, no overflow/console errors, internal-doc 404 and disabled
intake checked. Desktop/mobile standards captures inspected. Isolated performed
experiment rendered its note while omitted metadata did not. Git diff verified
all case content unchanged; whitespace check passes. There is no separate lint
script; Astro check is the repository's configured static validation.

Production deployment and live smoke results are recorded after publication.
