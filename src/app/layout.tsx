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

export const metadata: Metadata = {
  title: "CRCC Woodworks — West Kelowna Lumber & Custom Woodworking",
  description:
    "Quality Coastal Douglas Fir lumber, custom woodworking, and one-of-a-kind pieces — proudly serving the Okanagan Valley.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
