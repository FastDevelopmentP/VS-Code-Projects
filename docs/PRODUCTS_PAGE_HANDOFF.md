# Products & Services page — September 19, 2026

## Project location

The active IT 195 project is `C:\Users\pete5\OneDrive\IT 195 Eccomerce\VS Code Projects`. The similarly named checkout under IT Capstone is not the active website for this task.

## Implemented

- `products.html`: two comparison cards (independent programs and personal coaching), four existing training focuses, consultation process, and closing consultation CTA.
- `products.css`: additional responsive layouts using the original theme variables and component classes; visible, wrapping navigation on small screens.
- `index.html`: updated navigation, active Home marker, and additional stylesheet reference. Main landing-page content and original styles/script are unchanged.
- Reused header/footer markup and the two existing PNGs `Program.png` and `Personalized-Strength-Coaching.png`. No new images were generated.
- Separate Brightspace draft with three specific decisions and three common conventions.

## Sources and copy limits

The active landing page's program cards, approach section, coach biography, FAQ, and existing script were the source of truth. Its FAQ establishes independent programs versus coaching, discussion of current options and pricing, and consultation before commitment. No confirmed prices, named program packages, delivery format, fixed coaching schedule, testimonials, or checkout functionality were available; none were invented.

## Verification

Headless Microsoft Edge checked both pages at 375, 768, and 1440 CSS pixels. All six page/viewport combinations had no horizontal overflow, visible navigation, one H1, correct active-page markers, and no missing same-page fragments. All page images decoded, including the landing page's lazy-loaded podium photo. Local linked files and cross-page anchors resolve. Keyboard Tab reaches the visible skip link with a solid focus outline. Full-page desktop/mobile screenshots were inspected. The existing Google consultation form returned HTTP 200 with the title Contact information. No form was submitted. Git whitespace check for the modified landing page passed.

Screenshots and browser result JSON are retained in the task workspace's `products-page-work` folder, outside the public website.

## Known limitation

The original Client login navigation item still points at an unfinished PHP prototype; backend authentication returns HTTP 501. This pre-existing feature was preserved per the request to limit landing-page changes. It is not a functioning checkout or account system. New product/service CTAs use the verified consultation destination.

## Exact next action

Peter: open products.html through VS Code Live Server, review the offering copy, and adapt the Brightspace draft. Supply actual inspiration websites if specific attribution is required. Program package names, duration, format, prices, and coaching frequency remain unconfirmed; supply these before expanding those details. The course deadline was stated as Monday (September 21).

Code and draft prepared with AI assistance. No deployment, email, checkout, or form submission performed. The six pre-existing generated image files were already untracked on arrival; preserve them when reviewing Git changes.
