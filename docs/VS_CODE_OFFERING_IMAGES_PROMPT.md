# VS Code prompt: add images to Four Ways Forward

Use the following prompt in the VS Code Codex chat while the `coaching-software` repository is open:

```text
Update the “Four Ways Forward” section of this FAST Strength Systems IT 195 ecommerce landing page so every offering card includes a contextual image.

Use these exact existing assets:

- 01 / Fast Strength Software: Images/fast-strength-software-card.png
- 02 / Static Program Templates: Images/static-program-templates-card.png
- 03 / Consulting: Images/deadlift-geometry-analysis.png
- 04 / One-On-One Coaching: Images/team-squat-coaching.jpg

Acceptance criteria:

1. In index.html, add a semantic image element to each `.offering-card` between its `h3` and its call-to-action link. Use a shared class such as `offering-image`.
2. Write concise, accurate alt text based only on what each image actually shows. Do not claim identities, client status, outcomes, or scientific validation. Suggested wording:
   - “Workout logging interface displayed on a tablet beside gym equipment.”
   - “Printed strength training template on a clipboard beside gym equipment.”
   - “Deadlift position diagram with estimated joint angles and force geometry.”
   - “Football players and coaches supporting a barbell squat in a weight room.”
3. In styles.css, make the images occupy the open middle area of each card while keeping all four cards equal height and preserving the existing headings, links, borders, charcoal/lime palette, and featured-card treatment.
4. Use `width: 100%`, a consistent shallow aspect ratio near `2.3 / 1`, `object-fit: cover`, and an appropriate `object-position`. The software and template images should remain clearly recognizable. Crop the team squat image around the lifter, barbell, and central coaching interaction rather than the room edges.
5. The consulting diagram contains useful labels. Use `object-fit: contain` for that card, give it a light/off-white image background, and keep the diagram legible. Do not crop off its angle values or limitation note. If the whole diagram cannot remain useful at card size, show the simplified central geometry area in the card and make the image a link to the full image in a new tab with accessible link text or an aria-label.
6. Add a subtle border or tonal separation around images that fits the existing design. Do not add gradients, decorative overlays, animation, stock-photo effects, new marketing copy, or generated people.
7. Preserve every current destination URL and email link exactly. Do not change the navigation, section order, headings, form links, or unrelated page sections.
8. Keep the existing responsive grid behavior: four columns on desktop, two columns at tablet widths, and one column on narrow mobile. Images must not overflow or distort at any breakpoint.
9. Preserve keyboard access and visible focus states. If the consulting image becomes clickable, it must be reachable by keyboard and clearly labeled for screen readers.
10. After editing, run the repository’s available checks. At minimum, verify all four image paths exist, inspect the section at desktop and narrow mobile sizes, check for horizontal overflow, and confirm all existing offering links still work. Summarize the files changed and the checks performed. Do not commit or push unless I separately ask.

Before editing, inspect the current index.html and styles.css rather than replacing the existing card implementation wholesale. Make the smallest clean change that satisfies these criteria.
```
