# Fast Strength Systems — design and change record

## 2026-09-09 — Research-led website redesign

### Scope and source control

Redesigned the existing Fast Strength Systems homepage in `index.html`, `styles.css`, and `script.js`. This Markdown file is the ongoing research and change record; Git remains the actual source-control system. No commits or deployments were made. Existing unrelated ZIP archive changes are outside this redesign.

### Verified research

Sources accessed September 9, 2026. These are public professional statements and research, not evidence of private beliefs, aesthetic preferences, or a grading rubric.

1. **Erskine faculty directory:** https://www.erskine.edu/faculty-staff-directory/
   - Lists Preston Menke as Assistant Professor of Business. His psychology background should not be confused with his current department.
2. **Menke, P. S. (2024), Peer-Assisted Learning in Miller Analogies Tasks:** https://corescholar.libraries.wright.edu/etd_all/2900/
   - The abstract reports benefits for lower-ability learners and a trust mechanism associated with identifying trustworthy peers. It also explicitly reports no significant overall difference between peer-assisted and individual learning conditions. Reviewed the abstract, not the full 124-page thesis. This is not a study validating strength coaching or this website.
3. **Menke (2026), Pro-Environmental Educational Outcomes in an Ecologically Inspired Game-Based Learning Environment:** https://etd.ohiolink.edu/acprod/odb_etd/r/etd/search/10?clear=10&p10_accession_num=wright1780266080296721
   - The repository abstract describes ecological psychology and systems thinking in an environmental driving task. It discusses conflicting design conventions and misaligned learning environments. Abstract-level review only; no claimed experimental results beyond the available abstract.
4. **Menke, From Cognitive Systems to User-Experience, January 8, 2026:** https://www.linkedin.com/pulse/from-cognitive-systems-user-experience-preston-menke-m-s-abd-zplqe
   - In his own article, Menke connects human factors training with applied UX, accessibility, and design in business. He describes leading UX and Impact research for Habits for a Better World.
5. **Public project descriptions:** https://www.linkedin.com/in/preston-menke
   - Lists game-based environmental learning, an organizational-constraints experiment, and peer-learning software built for his master's thesis. These are self-reported project descriptions, not independent evaluations.
6. **Personal research page:** https://www.prestonmenke.com/research.html
   - Located as a supporting route to his professional work. The substantive rationale above relies on the thesis/dissertation abstracts and his own UX article.

### Design interpretation

The research suggests useful interaction principles, not a signature color palette or an endorsement. The charcoal, warm white, electric lime, condensed typography, and monochrome competition photography are original art-direction decisions for this strength brand.

| Research connection | Implemented design decision |
| --- | --- |
| Human factors and context-sensitive design | Program finder asks about goals, experience, schedule, and equipment. |
| Trust and learning support | Show why a direction fits; explain coaching and use the owner's existing biography and photos. |
| Ecological / systems orientation | Make the relationship between goal, purposeful work, feedback, and adjustment visible. |
| Learning through meaningful interaction | Let visitors explore a goal and receive an explanatory starting point. No arbitrary points, badges, or scientific claims. |
| Accessibility and usable interfaces | Native labeled inputs, semantic headings, skip link, visible focus, native FAQ disclosures, reduced-motion support, and user-controlled media. |

### Implemented changes

- Replaced the crowded bordered layout with a responsive editorial sports design.
- Added four comparable program cards, coaching approach, coach profile, training playlist, FAQs, and consultation calls to action.
- Added a local-only program finder with explanatory output and copy-summary feedback. Changes to answers clear stale recommendations.
- Retained existing consultation, email, Instagram, and client-login destinations.
- Used existing yoke-carry and podium photographs; original media files remain intact.
- Removed automatic video rotation and autoplay background audio. Visitors select footage and control playback.
- Added page description, theme color, font fallbacks, and lazy loading for the lower-page photo. Google Fonts requires network access; system fonts remain available.
- No invented prices, testimonials, outcomes, credentials, professor endorsement, or ready-made program checkout.

### Known boundaries

- Existing `backend/index.php` deliberately returns HTTP 501: authentication is not implemented. The homepage retains the original client-login link. No credentials were submitted or backend authentication added.
- Finder suggestions are transparent category matching, not a personalized exercise prescription. Answers are not stored or transmitted; users can copy a summary into the existing external consultation form.
- Direct file-scheme browser preview was rejected by browser URL policy. A localhost preview serves only the homepage assets; backend files and repository metadata are excluded.
- This is a local revision, not a public deployment.

### Verification

See final verification results below.

### Final verification results

- Localhost browser preview loaded the complete homepage; DOM inspection confirmed headings, navigation, program controls, media controls, FAQs, and external contact destinations.
- Browser disconnected before screenshots and responsive visual QA could finish. No claim of completed desktop/mobile visual verification.
- Executed the actual script in a Node VM with a simulated DOM: all 96 goal/experience/day/equipment combinations passed, including equipment-specific explanations and clearing stale results.
- Verified all four program shortcuts, all four video selections and exclusive selected state, and clipboard success/failure feedback. These are logic checks, not substitutes for real-browser playback or accessibility testing.
- All local assets and fragment links resolve; all HTML IDs are unique. JavaScript parsed and executed successfully.
- Adjusted the hero heading to explicit lines and reduced narrow-screen type sizing to limit overflow, including with fallback fonts.
- Repository-wide Git diff inspection encountered an existing mmap error while reading the working tree. No commit was attempted.

- Targeted `git diff --check -- index.html styles.css script.js` passed. Git confirms the three modified site files and the new Markdown record.

## Readable source and editing comments

- Reformatted index.html into vertically arranged, indented elements and attributes. Added explanations for page sections, images, links, forms, accessibility attributes, and video controls.
- Expanded styles.css into one property per line, with explanations for selectors, layout properties, theme variables, and responsive overrides.
- Expanded script.js into commented sections describing the finder, input handling, result display, clipboard feedback, and video playlist. Long descriptions use readable string concatenation.
- Editing guide: change visible content in index.html, colors/layout in styles.css (start with :root), and finder descriptions or video paths in script.js. Keep HTML IDs, option values, and data attributes aligned with JavaScript.
- Verified HTML tags/attributes/text and CSS selectors/values against the prior source. Compared all 96 finder combinations against the original script, plus goal shortcuts, video selection, and copied summaries; behavior matched.
- These changes improve source readability; the website design and functionality are preserved.
