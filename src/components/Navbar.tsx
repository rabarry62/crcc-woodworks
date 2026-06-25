"use client";

/*
  Sticky navigation bar.
  - Transparent over the hero, solid bark-brown once you scroll past it.
  - Mobile: shows a "Call" CTA and an animated hamburger that opens a slide-down drawer.
  - Desktop: inline links + "Call Now" CTA button.
*/

import { useState, useEffect } from "react";

export default function Navbar() {
  /* true once the user scrolls more than 80px — triggers the solid background */
  const [scrolled, setScrolled] = useState(false);
  /* controls the mobile menu drawer */
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#products", label: "Products" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? "bg-bark shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo text — swap for <Image> once the client delivers an SVG */}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="font-display text-cream text-xl tracking-wide hover:text-gold transition-colors"
          >
            CRCC Woodworks
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-sm font-semibold uppercase tracking-widest text-cream/80 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:2508785987"
              className="ml-2 px-5 py-2.5 bg-gold text-bark font-sans font-semibold text-sm rounded-sm hover:brightness-110 transition-all"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile: compact "Call" button + hamburger toggle */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:2508785987"
              className="px-4 py-2 bg-gold text-bark font-sans font-semibold text-sm rounded-sm"
            >
              Call
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="p-1 text-cream"
            >
              <span className="sr-only">Menu</span>
              {/* Three bars that animate into an X when the menu is open */}
              <div className="w-6 flex flex-col gap-1.5" aria-hidden>
                <span
                  className={`block h-0.5 bg-cream origin-center transition-transform duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-cream transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-cream origin-center transition-transform duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-down drawer */}
      <div
        className={`md:hidden bg-bark overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-52 pb-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 pt-3 gap-5" aria-label="Mobile navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-base font-semibold uppercase tracking-widest text-cream/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
