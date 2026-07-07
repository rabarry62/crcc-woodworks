# CRCC Woodworks — SEO Update Brief

Goal: improve ranking for "lumber sales west kelowna" and related local searches.
Site: crccwoodworks.ca (Next.js, deployed on Netlify)

---

## 1. Add LocalBusiness / LumberYard Schema (JSON-LD)

Add this to the site's `<head>` (e.g. in `layout.tsx` or a dedicated SEO component). Replace placeholder values with real business info before shipping.

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "additionalType": "https://schema.org/LumberYard",
  "name": "CRCC Woodworks",
  "image": "https://crccwoodworks.ca/og-image.jpg",
  "url": "https://crccwoodworks.ca",
  "telephone": "(250) 878-5987",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1501 Stevens Rd",
    "addressLocality": "West Kelowna",
    "addressRegion": "BC",
    "postalCode": "V1Z 1G2",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "REPLACE_WITH_LAT",
    "longitude": "REPLACE_WITH_LNG"
  },
  "areaServed": {
    "@type": "City",
    "name": "West Kelowna"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "REPLACE_WITH_OPEN_TIME",
      "closes": "REPLACE_WITH_CLOSE_TIME"
    }
  ],
  "sameAs": [
    "REPLACE_WITH_GOOGLE_BUSINESS_PROFILE_URL",
    "REPLACE_WITH_FACEBOOK_URL_IF_ANY",
    "REPLACE_WITH_INSTAGRAM_URL_IF_ANY"
  ]
}
```

Implementation note for Claude Code: use Next.js's `<script type="application/ld+json">` pattern in the root layout so it's present on every page, or scope it to the homepage if that's the primary local-search target.

---

## 2. New Page Section / Page: "Lumber Sales in West Kelowna"

Add this as either a new `<section id="lumber-sales">` on the homepage (simplest, keeps single-page structure) or a standalone route like `/lumber-sales` (better for targeting the keyword directly, more indexable surface area). Recommend the standalone route if Richard's open to expanding beyond single-page.

**H2:** Lumber Sales in West Kelowna

**Body copy (draft, adjust to match actual inventory):**

> CRCC Woodworks supplies quality lumber to homeowners, contractors, and hobbyist woodworkers throughout West Kelowna and the surrounding Okanagan Valley. Whether you're sourcing framing lumber for a build, rough-cut boards for a custom project, or specialty wood species for fine woodworking, our yard carries a range of stock to match the job.
>
> We're a local, West Kelowna-based supplier — stop by the yard to see what's in stock, or reach out to check availability before you make the trip.

**CTA button:** "Contact Us About Lumber Availability" → links to existing contact section/form

Notes for Claude Code:
- Swap in real specifics (species carried, dimensional lumber vs. rough cut, delivery or pickup only, etc.) — ask Richard for actual inventory details before publishing generic copy
- Keep "West Kelowna" and "lumber" in the copy naturally, don't force repeat it awkwardly

---

## 3. Metadata Updates

Update the page (or new route's) metadata:

```ts
export const metadata = {
  title: "Lumber Sales West Kelowna | CRCC Woodworks",
  description: "CRCC Woodworks supplies lumber and custom woodworking materials to West Kelowna and the Okanagan Valley. Visit our yard or contact us for stock availability.",
};
```

If keeping it as a homepage section instead of a new route, fold "lumber sales" into the existing homepage title/description instead of duplicating.

---

## 4. Sitemap / Indexing Check

- Confirm `sitemap.xml` exists (Next.js: `app/sitemap.ts`) and includes any new route
- Confirm site is added to Google Search Console and submit for indexing after changes go live

---

## 5. Add Honeypot Spam Protection to Contact Form

Prevents bot spam submissions without adding friction (like a CAPTCHA) for real users.

**Step 1 — Add hidden field to the form component:**

```tsx
<input
  type="text"
  name="company"
  autoComplete="off"
  tabIndex={-1}
  aria-hidden="true"
  style={{
    position: 'absolute',
    left: '-9999px',
    width: '1px',
    height: '1px',
    opacity: 0,
  }}
/>
```

- Name it something plausible bots might auto-fill, e.g. `company` or `website`
- Do NOT use `display: none` or `visibility: hidden` — some bots specifically skip fields hidden that way. Off-screen positioning is more reliable.
- `tabIndex={-1}` and `aria-hidden="true"` keep it invisible to keyboard nav and screen readers so real users never see or interact with it

**Step 2 — Track it in form state like any other field** (if using controlled inputs):

```tsx
const [honeypot, setHoneypot] = useState('');
// value={honeypot} onChange={(e) => setHoneypot(e.target.value)}
```

**Step 3 — Enforce server-side in the API route that sends via Resend:**

```ts
// app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message, company } = body; // 'company' is the honeypot

  if (company) {
    // Bot detected — return fake success, don't send the email
    return Response.json({ success: true });
  }

  // ... existing Resend send logic
}
```

Important: the client-side hiding alone does nothing — the real protection is the server-side check, since a bot could bypass the UI entirely and POST straight to the API route.

---

## 6. Add Privacy Policy Page

Contact form collects name, email, phone, and message — a privacy policy should be published since personal information is being collected (PIPEDA applies in Canada).

- Create a new route, e.g. `/privacy-policy`
- Add the policy content (full draft attached separately: `crcc-privacy-policy.md`) — Richard needs to fill in the bracketed placeholders (contact email, form provider name, etc.) before publishing
- Add a link to the privacy policy page in the site footer, near the contact form itself, or both

---

## 7. Off-site (not a code task — flag for Richard)

These won't be done by Claude Code but should be mentioned to Richard since they matter more than on-page changes for this specific query:
- Claim/verify Google Business Profile, category set to "Lumber Store" or "Building Materials Store"
- Add "lumber sales" to the GBP description
- Get a handful of Google reviews mentioning lumber/materials
- List on local directories (Yelp, BBB, West Kelowna Chamber of Commerce) with consistent name/address/phone
