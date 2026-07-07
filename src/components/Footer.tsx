/*
  Footer — near-black ink background, logo text, tagline, nav links,
  phone number, Instagram, and copyright line.
  Static — no interactivity needed here.
*/

export default function Footer() {
  const links = [
    { href: "#products", label: "Products" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ];

  return (
    /*
      pb-20 on mobile adds breathing room above the PhoneCallBar
      sticky bar so the copyright line isn't hidden behind it.
    */
    <footer className="bg-ink py-10 pb-24 sm:pb-10 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand name + tagline */}
        <div className="text-center sm:text-left">
          <span className="font-display text-cream text-lg tracking-wide block">
            CRCC Woodworks
          </span>
          <p className="font-sans text-wood text-sm mt-1">
            West Kelowna&apos;s local lumber yard &amp; custom woodworking shop.
          </p>
        </div>

        {/* Navigation links */}
        <nav className="flex gap-6" aria-label="Footer navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-cream/60 text-sm hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Phone */}
        <a
          href="tel:2508785987"
          className="font-sans text-gold font-semibold text-sm hover:text-gold/80 transition-colors"
        >
          (250) 878-5987
        </a>

      </div>

      {/* Divider + copyright */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-grain/15">
        <p className="text-center font-sans text-wood/40 text-xs">
          © 2026 CRCC Woodworks. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
