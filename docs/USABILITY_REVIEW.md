# Usability heuristic review - 2026-09-30

Source: [Nielsen Norman Group: 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).

Scope: the public static index.html and products.html pages. Peter requested this review; it is not recorded as faculty feedback or a confirmed grading requirement. These principles guide evaluation, not a certification or a substitute for testing with visitors. The incomplete backend and external Google Form were not evaluated as working services.

## Acceptance criteria

Visitors can identify available services and their next step, find help without encountering an unfinished login, change or reset finder answers, recognize result and media status, recover from clipboard/media problems, and navigate both pages with a keyboard and on narrow screens. Existing coaching image work is preserved.

## Findings and implementation

| Principle | Website evidence and changes |
| --- | --- |
| 1. System status | Finder completion/change/reset announcements; copy feedback; selected-video state and buffering/play/pause/end messages. Software and programs visibly marked in development on both pages. |
| 2. Familiar language | Consulting and coaching links describe discussions, avoiding a promise of a booking or application. The inquiry explanation clarifies that no purchase or booking is made. |
| 3. User control | Added Start over; answers remain editable; native video controls and no autoplay. Links use normal same-tab navigation, with browser Back and user-selected new tabs available. |
| 4. Consistency | Shared header and direct Contact form destination on both pages; retained active-page indicators, shared visual styles, and consistent inquiry terminology. |
| 5. Error prevention | Removed public links into the incomplete login prototype. Select controls constrain finder inputs; changed answers hide stale results. Disabled controls prevent accidental form submission when JavaScript is unavailable. |
| 6. Recognition | Visible field labels retained; results now include the selected answers and copy them into the summary. Service cards explain audience, scope, and next action. |
| 7. Efficiency | Hero goes directly to the finder; training cards preselect a goal; copy-summary, skip-content, section links, and keyboard controls reduce extra steps. |
| 8. Focused presentation | Retained the existing design and native collapsible FAQs. Added short availability/help text and increased small finder text rather than adding more screens or dialogs. |
| 9. Recovery | Copy failure explains manual copying. Video failure suggests another clip and has an adjacent Instagram link. Public contact links use the existing inquiry form; no email address is exposed. |
| 10. Help | On-page FAQs include finder steps and account/product availability. Contact-form links and inquiry expectations are visible without creating an account. |

## Verification

Headless Microsoft Edge on a temporary local HTTP server:

- Both pages at 1440, 760, 375, and 320 CSS pixels: no document horizontal overflow; desktop/mobile screenshots reviewed.
- Local anchor destinations and file links resolve on both pages; no public backend links remain.
- Keyboard skip links, finder result focus, reset focus, and FAQ expansion checked.
- All four finder goals, selected-answer summaries, answer-change invalidation, reset defaults, and goal shortcuts passed.
- Clipboard success and denied-access branches tested with browser API stubs; actual operating-system clipboard permissions were not assessed.
- Video selection/pressed state, paused initial playback, and a simulated media error passed. Media audio/caption quality was not audited.
- JavaScript-disabled check: finder submission is disabled and the contact-form alternative remains available.
- No JavaScript page errors during the functional checks. git diff --check passed.
- Automated formatting could not run because the local Prettier dependency and npm executable are unavailable in this shell.

## Remaining validation

Ask representative visitors to find a service, use/reset the finder, and start an inquiry. Verify the Google Form end to end separately before relying on it for intake. This review does not certify accessibility, backend security, course completion, or third-party usability. Product details and pricing still require Peter's confirmed information.
