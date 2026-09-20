# Brightspace submission draft — review and adapt

## A. Three project-specific design decisions

1. **Compare the level of support before the training goal.** The Products & Services page first places training programs and personalized strength coaching in matching cards. Each uses the same labels: who it is for, what is included, and next step. This helps visitors compare independent training with personal support before considering a training focus.
2. **Carry the FAST Strength design into the second page.** Both pages use the same charcoal, warm cream, and lime palette, condensed headings, body type, bordered cards, and arrow buttons. The shared appearance helps visitors recognize that the products page belongs to the same business as the landing page.
3. **Use relevant illustrations at a readable size.** Two generated homework images appear above the offering details: a program clipboard and a coaching conversation. They give each option a visual identity. Captions identify them as AI-generated illustrations so they are not mistaken for actual client photographs.

## B. Three familiar website conventions

1. **Consistent navigation with a current-page marker.** Both pages have Home and Products & Services links in the header. An underline and bold text show the current page, while `aria-current` makes the same information available to assistive technology. Visitors can move between pages and understand where they are.
2. **Responsive card layouts.** The two offering cards sit side by side on wider screens and stack on phones. The training-focus grid also reduces its columns as space decreases. This keeps the content readable without sideways scrolling.
3. **Clear, repeated calls to action.** Each offering has a descriptive consultation link, and the page ends with a consultation button. Visitors can take the next step after comparing an option or after reading the whole page.

These conventions are described generally. No inspiration websites have been attributed: Peter has been asked which websites he visited and should add only his actual sources and reasons.

## How to explain the implementation in class

HTML supplies the content and links. The existing stylesheet provides the shared visual theme. The additional products stylesheet provides the comparison layout and keeps navigation visible on small screens. Both pages use the same header and footer markup, with the active-page attribute changed. This is a static two-page site: it does not need a build tool or a new JavaScript framework. The new page links to the existing consultation form; it does not claim to process purchases.

## Review before submitting

- Add the websites you actually visited for inspiration if the assignment requires them.
- Pricing, individual program names, durations, delivery formats, and service frequency have not been confirmed. The page therefore invites a consultation about current options rather than listing unsupported specifics.
- The pre-existing client-login link leads to an unfinished PHP prototype. It is not a functioning customer account system and should not be presented as one.
- Draft prepared with AI assistance; adapt it to your own understanding and follow the course's disclosure requirements.
