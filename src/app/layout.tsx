import type { Metadata } from "next";
import { Rozha_One, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

/*
  Load the three brand fonts from Google Fonts.
  Each font is assigned a CSS variable that Tailwind picks up
  via the @theme block in globals.css.
*/

/* Rozha One — chunky serif for H1 / display text */
const rozhaOne = Rozha_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rozha",
  display: "swap",
});

/* Playfair Display — strong editorial serif for H2 / H3 */
const playfairDisplay = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

/* DM Sans — clean, readable body font */
const dmSans = DM_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

/*
  LocalBusiness structured data (JSON-LD) — helps Google understand this is
  a local lumber yard so it can surface the site for searches like
  "lumber sales west kelowna".
*/
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  additionalType: "https://schema.org/LumberYard",
  name: "CRCC Woodworks",
  image: "https://crccwoodworks.ca/images/customsign.jpg",
  url: "https://crccwoodworks.ca",
  telephone: "+1-250-878-5987",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1501 Stevens Rd",
    addressLocality: "West Kelowna",
    addressRegion: "BC",
    postalCode: "V1Z 1G2",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "49.86619",
    longitude: "-119.57692",
  },
  areaServed: {
    "@type": "City",
    name: "West Kelowna",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "15:00",
    },
  ],
  sameAs: [
    "https://maps.app.goo.gl/H3Viu2bEarijKabYA",
  ],
};

export const metadata: Metadata = {
  title: "CRCC Woodworks — West Kelowna Lumber & Custom Woodworking",
  description:
    "Quality Coastal Douglas Fir lumber, custom woodworking, and one-of-a-kind pieces — proudly serving the Okanagan Valley.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: { rel: "manifest", url: "/site.webmanifest" },
  },
  // Google Search Console site ownership verification
  verification: {
    google: "HNYtEUABWmjmd4wg1jMSEZ4Ov8wj0rk4tgZRcPvOrbs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*
      All three font CSS variables are applied to <html> so they're
      available throughout the entire page.
    */
    <html
      lang="en"
      className={`${rozhaOne.variable} ${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">
        {/*
          JSON-LD doesn't need to live in <head> — search engines read it
          anywhere in the document. Escaping "<" prevents anyone from
          breaking out of the script tag via the business name/address.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
