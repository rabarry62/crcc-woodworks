# CRCC Woodworks — DESIGN.md

> Single-page landing site for a West Kelowna lumber yard and custom woodworking shop specializing in Coastal Douglas Fir — built for contractors, homeowners, and hobbyists who want quality Canadian timber and bespoke craftsmanship.
> Stack: Next.js / TypeScript / Tailwind CSS / Framer Motion / Vercel
> Scope: Single-page landing (5 sections + footer)
> Status: Planning

---

## Pages / Sections

| # | Name | Purpose |
|---|---|---|
| 1 | Hero | Immediate impression of the yard and lumber; primary CTA to call or visit |
| 2 | About | Who CRCC is, their roots, their values (local, Canadian, quality) |
| 3 | Products & Services | Lumber inventory (Douglas Fir timbers, beams, posts) + custom woodworking shop |
| 4 | Gallery | Real photos from the yard and workshop |
| 5 | Contact / Find Us | Phone, address, hours, Google Maps embed, CTA |

---

## Color Tokens

Pulled from the CRCC logo (dark brown shield, warm gold lettering, forest green trees) and the yard photography (golden fir lumber, grey concrete, Okanagan hillside).

```css
--color-primary:     #3D1F0A   /* deep bark brown — dark section backgrounds, nav */
--color-secondary:   #C8932A   /* warm golden tan — CTAs, highlights, accent */
--color-forest:      #2D5A1B   /* forest green — logo-pulled, used sparingly */
--color-bg:          #FAF6EF   /* light warm background — alternate light sections */
--color-surface:     #F5ECD7   /* off-white/cream — body text on dark, card surfaces */
--color-text:        #1A1008   /* near-black brown — text on light backgrounds */
--color-text-muted:  #7A5C3E   /* medium brown — captions, secondary labels */
--color-border:      #D4C4B0   /* warm grey-tan — dividers, input borders */
```

> Source: Derived from CRCC Woodworks logo and client photos (crcc_image_1.webp, ccrc.jpg)

---

## Typography

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display / H1 | Rozha One | 400 (only weight) | Chunky, warm serif — feels handcrafted and substantial |
| H2–H3 | Playfair Display | 700 | Strong editorial serif for section headings |
| Body | DM Sans | 400 / 500 | Clean, friendly, very readable at small sizes |
| Labels / UI | DM Sans | 600 | Caps-spaced for category tags, nav items |
| Mono (prices / specs) | — | — | Not needed for this scope |

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Rozha+One&family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

---

## Components Used

- [x] btn-primary
- [x] btn-secondary
- [x] btn-ghost
- [x] card (default)
- [ ] card (featured)
- [x] badge / tag
- [x] form (input, textarea)
- [x] nav
- [ ] quote / testimonial
- [x] callout
- [x] divider
- [x] footer

**Project-specific components:**

| Component | Description |
|---|---|
| ProductCard | Image + category tag + title + short description — used in Products & Services section |
| YardPhotoGrid | Masonry-style gallery grid using real client photos |
| PhoneCallBar | Sticky mobile bottom bar: tap-to-call button + "Get Directions" |

---

## Section Specs

---

### 1. Hero

**Layout:** Full-bleed photo background (yard with lumber stacks + Okanagan hills). Dark overlay gradient from bottom. Text left-aligned, vertically centered.

**Headline:** `Built From the Ground Up`
*(Rozha One, large — from Claude Code brief)*

**Subheading:** `Quality Coastal Douglas Fir lumber, custom woodworking, and one-of-a-kind pieces — proudly serving the Okanagan Valley.`

**CTA:** `Call Us` (primary, links to `tel:2508785987`) + `Visit Our Yard` (secondary, links to Google Maps: 1501 Stevens Rd, West Kelowna, BC)

> ✅ Phone confirmed: (250) 878-5987

**Media:** `crcc_image_1.webp` — the yard shot with stacked lumber and the CAT forklift in the Okanagan landscape. Dark overlay `rgba(0,0,0,0.55)`.

**Animation:** Staggered fade + upward drift on load (Framer Motion): headline delay 0.2s, subheading delay 0.4s, buttons delay 0.6s. Duration 0.6–0.8s, `easeOut`. Ken Burns effect on background image: CSS keyframe scale 1.0 → 1.08 over 10s.

**Notes:** The CRCC logo sits top-left in the nav. Phone number is the primary CTA — make it prominent and tappable.

---

### 2. About

**Layout:** Two-column on desktop (text left, accent image right). Single column on mobile.

**Headline:** `Local Wood. Real Craft.`

**Body copy:**
> CRCC Woodworks is a West Kelowna-based lumber yard and woodworking shop specializing in full dimension Coastal Douglas Fir. Whether you're a contractor sourcing timbers for your next build or a homeowner looking for a custom piece you won't find anywhere else, we're here to help. Locally owned, Canadian-made, and proud of it.

**CTA:** None — this is a trust section.

**Media:** Second client photo (ccrc.jpg — sign + yard) or a close-up crop of the lumber grain if available.

**Animation:** Fade-in on scroll (Framer Motion `whileInView`).

**Notes:** Keep copy punchy — Richard said "quality, service, friendly, local Canadian made." This section earns that trust without overselling.

---

### 3. Products & Services

**Layout:** Two sub-sections stacked:
1. **Lumber** — 3-column card row (Timbers, Beams & Posts, + More) on desktop; horizontal scroll on mobile.
2. **Custom Woodworking** — 2-column card row (Custom Furniture, Custom Signs) on desktop; stacked on mobile.

**Headline:** `What We Do`

**Subheading:** `Full-dimension Coastal Douglas Fir in the yard. One-of-a-kind pieces in the shop.`

**Cards (2, side by side on desktop / stacked on mobile):**

- **Lumber & Timber Sales** — We carry full dimension Coastal Douglas Fir including timbers, beams, and posts. Built for contractors, builders, and serious DIYers who won't settle for less. *(Badge: `In Yard`)*
- **Custom Woodworking** — From custom furniture to one-of-a-kind statement pieces and handcrafted signs — if you can dream it, we can build it. Every piece is made with care right here in West Kelowna. *(Badge: `Made to Order`)*

**CTA per card:** `Ask About This →` (anchors to #contact)

**Animation:** Cards stagger fade-up on scroll.

**Notes:** No pricing on-site (pricing varies; Richard wants people to call). Badge tags: `In Yard` vs `Made to Order` on each card.

---

### 4. Gallery

**Layout:** Asymmetric masonry grid — 3 columns desktop, 2 columns tablet, 1 column mobile. Mix portrait and landscape crops.

**Headline:** `See the Work`

**Subheading:** `A glimpse at what comes out of our yard and shop.`

**Media:** Client-supplied photos (crcc_image_1.webp + ccrc.jpg provided; more coming from Richard). Optimized with `next/image`.

**Animation:** Fade-in as grid items enter viewport, staggered.

**Notes:** Richard said he has photos — follow up to get higher-res versions and shop interior shots. This section will strengthen significantly with more assets.

---

### 5. Contact / Find Us

**Layout:** Two-column on desktop (contact info + form left, map right). Stacked on mobile.

**Headline:** `Come See Us`

**Subheading:** `We'd love to show you what we've got. Stop by the yard or give us a call.`

**Info block:**
- 📞 (250) 878-5987
- 📍 1501 Stevens Rd, West Kelowna, BC V1Z 1G2
- **Hours:** Mon–Fri: 8:00am – 3:00pm *(Hours subject to change — call ahead to confirm. Remaining days TBC.)*
- Instagram: [@richardbarry1820](https://instagram.com/richardbarry1820)
- Google Business profile link *(URL TBD)*

**Form fields:**

| Field | Type | Required | Notes |
|---|---|---|---|
| Name | text | Yes | |
| Phone or Email | text | Yes | Label: "Best way to reach you" |
| Message | textarea | No | Placeholder: "What are you looking for?" |

**Submission:** Resend via Next.js API route (or EmailJS as fallback)
**Success state:** Inline thank-you message — `"Thanks — we'll be in touch soon."`

**Map:** Google Maps embed of the West Kelowna location.

**Animation:** None — functional section, keep it clean.

---

## Navigation

- [x] Sticky
- [x] Transparent-on-hero, solid on scroll (bg: `--color-primary`)
- [x] Mobile hamburger menu
- [ ] No nav

**Links:** Logo (scroll to top) | Products | Gallery | Contact | `Call Now` (CTA button, always visible)

---

## Footer

**Content:**
- CRCC Woodworks logo (small)
- Tagline: `West Kelowna's local lumber yard & custom woodworking shop.`
- Links: Products | Gallery | Contact
- Phone number
- Social icons: Instagram [@richardbarry1820](https://instagram.com/richardbarry1820)
- Legal: `© 2026 CRCC Woodworks. All rights reserved.`

---

## Forms

| Field | Type | Required | Notes |
|---|---|---|---|
| Name | text | Yes | |
| Phone or Email | text | Yes | |
| Message | textarea | No | |

**Submission:** Resend via Next.js Route Handler
**Success state:** Inline thank-you — no redirect

---

## Animations & Motion

| Element | Trigger | Effect | Duration |
|---|---|---|---|
| Hero headline | Page load | Fade in + translateY 30px → 0 | 0.6s, delay 0.2s |
| Hero subheading | Page load | Fade in + translateY 30px → 0 | 0.6s, delay 0.4s |
| Hero buttons | Page load | Fade in + translateY 20px → 0 | 0.6s, delay 0.6s |
| Hero background | Page load | Ken Burns: CSS keyframe scale 1.0 → 1.08 | 10s loop |
| Section headings | Scroll into view | Fade in + translateY 20px → 0 | 0.7s, easeOut |
| About paragraph | Scroll into view | Fade in + translateY 20px → 0 | 0.7s, easeOut |
| Service cards | Scroll into view | Stagger: card 1 delay 0s, card 2 delay 0.1s | 0.7s, easeOut |
| Gallery images | Scroll into view | Stagger fade + scale 0.97 → 1.0 | 0.6s, 0.08s between each |
| Contact elements | Scroll into view | Fade in | 0.6s, easeOut |
| Nav background | Scroll past hero | Solid bg transition | 0.2s |

**Animation rules:** All easing `easeOut`. No spring physics, no bounce. Feel slow, heavy, deliberate — like the weight of real wood. Reduce/disable on mobile for performance (`useReducedMotion` hook).

`prefers-reduced-motion` respected: [x] Yes — wrap all Framer Motion variants with `useReducedMotion()` check.

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile (default) | < 640px | Build mobile-first |
| Tablet | 640px–1024px | 2-col layouts kick in |
| Desktop | > 1024px | Full layouts |

**Mobile-specific decisions:**
- Sticky bottom bar: tap-to-call + get directions (PhoneCallBar component)
- Product cards: horizontal scroll carousel
- Gallery: single column
- Nav: hamburger with slide-out drawer

---

## Assets

| Asset | Format | Status | Notes |
|---|---|---|---|
| Logo | PNG (circular) | ✅ Received (ccrc.jpg) | Request SVG from Richard for crisp scaling |
| Yard photo (hero) | WebP | ✅ Received (crcc_image_1.webp) | Good quality, use as hero BG |
| Yard / sign photo | JPG | ✅ Received (ccrc.jpg) | Use in About or Gallery |
| Additional photos | TBD | ⏳ Pending from Richard | Request shop interior + product close-ups |
| Reference screenshot | PNG | ✅ Reference only (WoodCrafters inspo) | Do not copy — aesthetic reference only |

**Image optimization:** `next/image` with WebP output, `priority` on hero image.

---

## One-Off Decisions

- No pricing on-site — all products prompt the user to call or message. Richard confirmed "call us" is the conversion goal.
- No Figma mockup stage per agreement — building directly in code from this brief.
- Domain needed — suggest `crccwoodworks.ca` or `crccwood.ca`. Follow up with Richard.
- No e-commerce, no booking, no account system.
- Referral discount ($450 CAD, referral from Mike) — not reflected on site.

---

## Out of Scope

- E-commerce / online ordering
- Inventory management system
- CMS / client self-editing (not in this scope; can be added later with Sanity)
- Blog or news section
- Multi-language support

---

## Open Questions

- [ ] Logo in SVG format (current circular PNG is adequate for now but SVG preferred for nav)
- [ ] Additional product/shop photos — request interior shots, close-ups of lumber grain, finished furniture pieces (6 total needed for gallery)
- [ ] Domain preference — suggest `crccwoodworks.ca` or `crccwood.ca`; confirm with Richard
- [ ] Weekend/holiday hours (Mon–Fri 8am–3pm confirmed; remaining days TBC)
- [ ] Google Business profile URL
- [ ] Delivery — does CRCC offer it? Should it be mentioned on-site?

---

## Deployment

**Host:** Vercel
**Domain:** TBD — pending Richard's decision (suggest `crccwoodworks.ca`)
**Repo:** GitHub — to be created
**Environment variables:**
- `RESEND_API_KEY` — for contact form email delivery
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY` — if using Maps embed API

---

## Handoff Notes

- Contact form submissions will arrive by email — no dashboard to manage.
- To update content (hours, phone, address), changes go through Mel — no CMS in this scope.
- If Richard wants to self-manage content in the future, Sanity CMS can be retrofitted.
- Logo: keep the circular PNG on hand; if CRCC gets a rebrand, request new files.
