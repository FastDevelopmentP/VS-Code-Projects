# IT 195 Project Changelog

## 2026-09-14

- Established this repository as the durable home for IT 195 e-commerce code and context.
- Added repository guidance, project state, handoff, decisions, requirements, and assignment tracking.
- Kept all IT 406 Capstone context separate.
- Recorded local commit `61eabd5` (`UI Changes`) as the current landing-page baseline.

For the detailed September 9 design rationale, sources, implementation notes, and verification evidence, see `DESIGN_CHANGELOG.md`.

## 2026-09-14 — Image library

- Renamed and moved three supplied training/analysis images into Images; verified unchanged file contents by SHA-256.
- Recorded preferred uses and image-selection feedback in HANDOFF.md. No website code changes.
- Copied the two approved generated offering-card images into Images and added a ready-to-use VS Code implementation prompt.

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

## 2026-09-17 — Six generated images prepared

- Verified that the two existing generated PNGs decoded correctly; their red X indicators came from OneDrive reparse/synchronization state, not corrupt image data.
- Rewrote both existing PNGs as ordinary local files while preserving their contents.
- Generated four additional FAST Strength-related landscape images using the built-in image-generation tool.
- Added all four new assets to `Images/` and assembled the authoritative six-file set in `Images/Generated-Images-Submission/`.
- Decoded and validated all six submission images as distinct 1536 × 1024 PNG files and recorded their SHA-256 hashes during verification.
