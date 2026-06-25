# CRCC Woodworks 2026 — Claude Code Brief

## Project Overview
Build a single-page landing page for CRCC Woodworks, a West Kelowna lumber yard and custom woodworking shop. The site should feel rugged, warm, and authentically local — not corporate or tech-startup-like.

---

## Design Priority
**Mobile-first.** The target customer — contractors, homeowners, hobbyists — will almost certainly find this site on their phone. The two primary CTAs ("Call Us" and "Visit Our Yard") are phone-native actions. Design for the mobile experience first and scale up to desktop. Every section should look and feel great on a 375px screen before considering larger viewports.

---

## Stack
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

---

## Business Info
- **Business name:** CRCC Woodworks (2026)
- **Address:** 1501 Stevens Rd, West Kelowna, BC V1Z 1G2
- **Phone:** (250) 878-5987
- **Hours:** Mon–Fri 8:00am – 3:00pm (remaining days TBC — add note to call ahead)
- **Instagram:** @richardbarry1820

---

## Colour Palette
| Name | Hex | Usage |
|---|---|---|
| Deep brown | `#3D1F0A` | Primary dark backgrounds |
| Warm golden tan | `#C8932A` | Primary accent, CTAs, highlights |
| Forest green | `#2D5A1B` | Secondary accent |
| Off-white/cream | `#F5ECD7` | Body text on dark backgrounds |
| Light warm background | `#FAF6EF` | Alternate light sections |
| Dark text | `#1A1008` | Text on light backgrounds |

---

## Typography
- **Headings:** Rozha One or Playfair Display (Google Fonts) — bold, heritage feel
- **Body:** DM Sans or Inter — clean and readable
- **Feel:** Heritage, craftsmanship, rugged but approachable. Not sleek or modern.

---

## Page Sections

### 1. Hero
- Full viewport height (`100vh`)
- Background: placeholder image (real lumber yard photo coming from client) with dark overlay (`rgba(0,0,0,0.55)`)
- Logo: centered or top-left (placeholder — SVG/PNG coming from client)
- Headline + subheading
- Two CTA buttons side by side:
  - **"Call Us"** → `tel:2508785987`
  - **"Visit Our Yard"** → Google Maps link for 1501 Stevens Rd, West Kelowna
- Framer Motion: staggered fade + upward drift on headline, subheading, and buttons (0.15s delay between each)
- Subtle Ken Burns effect on background image (slow scale from 1.0 → 1.08 over 10s, CSS keyframe)

### 2. About
- Light warm background (`#FAF6EF`)
- Short heading + 2–3 sentence paragraph
- Centered or left-aligned, max width `prose`
- Framer Motion: fade in + slide up on scroll enter

### 3. Products & Services
- Dark background (`#3D1F0A`)
- Two cards side by side on desktop, stacked on mobile
- Each card: icon or small illustration placeholder, heading, body text
- Card border or subtle warm glow using accent colour
- Framer Motion: staggered card entrance left to right on scroll enter, 0.1s delay between cards

### 4. Gallery
- Light warm background
- 6-image grid: 3 columns desktop / 2 columns mobile
- Placeholder images for now (real photos coming from client)
- Framer Motion: staggered fade in + subtle scale from `0.97` to `1.0` on scroll enter

### 5. Contact & Find Us
- Dark background (`#3D1F0A`)
- Large tappable phone number at top
- Hours
- Google Maps embed: 1501 Stevens Rd, West Kelowna, BC V1Z 1G2 (full width on mobile)
- Simple contact form: Name, Email or Phone, Message, Submit button
- Instagram link: @richardbarry1820
- Framer Motion: fade in on scroll enter

---

## Animations (Framer Motion)

**General rules:**
- All animations: `easeOut` easing, no spring physics, no bounce
- Feel: slow, heavy, deliberate — like the weight of real wood. Not snappy.
- Duration: 0.6–0.8s for scroll reveals
- Reduce or disable animations on mobile for performance (`useReducedMotion` hook)

**Per section:**
| Element | Animation |
|---|---|
| Hero headline | Fade in + translateY 30px → 0, delay 0.2s |
| Hero subheading | Fade in + translateY 30px → 0, delay 0.4s |
| Hero buttons | Fade in + translateY 20px → 0, delay 0.6s |
| Hero background | Ken Burns: CSS keyframe scale 1.0 → 1.08 over 10s |
| Section headings | Fade in + translateY 20px → 0 on scroll enter |
| About paragraph | Fade in + translateY 20px → 0 on scroll enter |
| Service cards | Staggered: card 1 delay 0s, card 2 delay 0.1s |
| Gallery images | Staggered fade + scale 0.97 → 1.0, 0.08s between each |
| Contact elements | Fade in on scroll enter |

---

## Mobile
- Fully responsive
- CTA buttons full width and stacked on mobile
- Service cards stacked single column
- Gallery 2 columns
- Google Maps embed full width
- Phone number large and easily tappable (`text-2xl` minimum)
- Smooth scroll navigation

---

## Copy

### Hero
- **Headline:** Built From the Ground Up
- **Subheading:** Quality Coastal Douglas Fir lumber, custom woodworking, and one-of-a-kind pieces — proudly serving the Okanagan Valley.
- **CTA 1:** Call Us
- **CTA 2:** Visit Our Yard

### About
- **Heading:** Local Wood. Real Craft.
- **Body:** CRCC Woodworks is a West Kelowna-based lumber yard and woodworking shop specializing in full dimension Coastal Douglas Fir. Whether you're a contractor sourcing timbers for your next build or a homeowner looking for a custom piece you won't find anywhere else, we're here to help. Locally owned, Canadian-made, and proud of it.

### Products & Services
- **Section heading:** What We Do

**Card 1 — Lumber & Timber Sales**
- Heading: Lumber & Timber Sales
- Body: We carry full dimension Coastal Douglas Fir including timbers, beams, and posts. Built for contractors, builders, and serious DIYers who won't settle for less.

**Card 2 — Custom Woodworking**
- Heading: Custom Woodworking
- Body: From custom furniture to one-of-a-kind statement pieces and handcrafted signs — if you can dream it, we can build it. Every piece is made with care right here in West Kelowna.

### Gallery
- **Heading:** See the Work
- **Subheading:** A glimpse at what comes out of our yard and shop.

### Contact & Find Us
- **Heading:** Come See Us
- **Subheading:** We'd love to show you what we've got. Stop by the yard or give us a call.
- **Hours:** Mon–Fri: 8:00am – 3:00pm *(Hours subject to change — call ahead to confirm)*
- **Form heading:** Send Us a Message
- **Form fields:**
  - Name placeholder: Your name
  - Email/Phone placeholder: Best way to reach you
  - Message placeholder: What are you looking for?
  - Submit button: Send Message

---

## Placeholders (to be swapped in later)
- Hero background photo — real lumber yard photo coming from client
- Logo — high res PNG or SVG coming from client
- Gallery — 6 real product/shop photos coming from client
- Exact business hours for all days of the week
- Final approved copy (written collaboratively with client)

---

## Tone Reference
Rugged, quality-focused, friendly, local, Canadian-made. Not corporate. Not sleek tech. Think authentic lumber yard with serious craftsmanship behind it. The logo has a strong heritage badge feel — the site should match that energy.
