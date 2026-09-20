# Project State

Last updated: 2026-09-14

## Current priority

Capture the current landing-page state, then translate Professor Menke's latest UI comments into explicit acceptance criteria before editing.

## Current implementation

- Responsive FAST Strength Systems landing page in HTML, CSS, and JavaScript.
- Four training-program categories and a local guided program finder.
- Coaching overview, training media, FAQ content, consultation links, and client-login link.
- Local media assets stored in the repository.
- PHP files under `backend/` are prototypes; production authentication is not implemented.

## Repository status at organization time

- Branch: `main`
- Current commit: `61eabd50b2ee96fd3ff956cdb18c62cc6118403b` (`UI Changes`)
- Working tree was clean before these documentation changes.
- Local branch was two commits ahead of `origin/main`; those commits had not yet been pushed.

## Known blockers and unknowns

- Professor Menke's newest UI comments have not yet been recorded verbatim.
- Formal IT 195 rubric, milestones, and due dates are not yet stored in this repository.
- Production checkout, account access, and authentication requirements have not been confirmed.

## Media update — 2026-09-14

Imported three real user-supplied image assets with descriptive filenames: Images/team-squat-coaching.jpg, Images/barbell-hip-thrust-training.jpg, and Images/deadlift-geometry-analysis.png. File hashes verified after moving. Image placement remains pending; software/template generated concepts accepted, generic consulting/coaching images rejected. See HANDOFF.md for placement recommendations. Remote synchronization failed during this update.

The two approved generated concepts were also copied into the site as `Images/fast-strength-software-card.png` and `Images/static-program-templates-card.png`, with hashes verified against their originals. A complete implementation prompt is available at `docs/VS_CODE_OFFERING_IMAGES_PROMPT.md`. Website placement and responsive visual verification remain pending.

## Offering images implemented — 2026-09-14

Added all four approved images between offering headings and contact links. Shared responsive image styling preserves the charcoal/lime cards; the coaching photo centers on the barbell interaction. The consulting diagram remains uncropped and links to the full-size image with an accessible label and visible keyboard focus. Its labels are small at card size; use the full-size view for reading. No scientific validation is implied.

Validation: Prettier check passed. Headless Edge at 1440, 760, and 375 pixels loaded all four images with no horizontal overflow and the existing 4/2/1-column layout. Desktop and mobile screenshots inspected. Original contact URLs retained. No commit, push, or deployment performed. Existing local work preserved; no pull attempted because the working trees were dirty.

Next action: review the local landing page in Live Server; commit and publish only when Peter requests it. The earlier VS Code image implementation prompt is now completed.

## Icon revision — 2026-09-14 (supersedes card-image placement)

Peter found the detailed thumbnails unclear on a large screen and authorized the best simpler approach. Replaced all four thumbnails with inline vector icons: tablet checklist, program clipboard, conversation bubble, and two people. Icons are decorative beside explicit headings, 96 pixels wide, lime on charcoal and charcoal on the featured lime card. Increased contact-link text from 11 to 14 pixels. Original assets remain available for future larger placements; none were deleted or moved.

Verified in headless Edge at 1920, 760, and 375 pixels: four icons, expected 4/2/1 grid columns, no horizontal overflow. Desktop and mobile screenshots inspected. Keyboard Tab moves between contact links; visible focus styling included. All original destination URLs preserved; Prettier and git diff checks pass. No commit or publication.

Exact next action: Peter reviews the refreshed Live Server page. The prior photo implementation prompt is superseded by this approved icon design.

## Mountain background trial — 2026-09-14

Peter requested a reversible preview of a faint snowy mountain backdrop. Added an isolated CSS background behind Four Ways Forward using the existing Mountain.jpg with a cream overlay and top/bottom fade. Solid cards and all content remain unchanged. Headless Edge checks at desktop, tablet, and narrow mobile show no overflow and unchanged icon layout and keyboard navigation. Awaiting Peter's visual preference. To revert only this trial, remove the final CSS block labeled Reversible mountain background trial; retain the approved icons.


### Mountain approved; divider removed — 2026-09-14
Peter approved the mountain background and requested removal of the line above the green program finder. Removed only the finder top border; retained its bottom border and the mountain styling. CSS formatting check passed. Next action: review the refreshed local preview.

## Generated image requirement — 2026-09-17

The six-generated-image requirement now has a validated deliverable folder at `Images/Generated-Images-Submission/`. It contains two repaired pre-existing generated images and four newly generated FAST Strength website concepts. Each file is a valid 1536 × 1024 PNG. The website currently uses inline icons for the offering cards, so these assets are coursework evidence and an optional future image library rather than active page dependencies.
