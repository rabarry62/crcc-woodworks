"use client";

/*
  Products & Services section — dark bark background, two cards side by side
  on desktop, stacked on mobile. Cards stagger in from the left as you scroll.
*/

import { motion, useReducedMotion } from "framer-motion";

/* --- Inline SVG icons --- */

/* Three horizontal planks — represents the lumber inventory */
function LumberIcon() {
  return (
    <svg
      className="w-10 h-10"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
    >
      <rect x="4" y="10" width="32" height="6" rx="1.5" fill="currentColor" opacity="0.9" />
      <rect x="4" y="19" width="32" height="6" rx="1.5" fill="currentColor" opacity="0.65" />
      <rect x="4" y="28" width="32" height="6" rx="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

/* Simple workbench silhouette — represents the custom shop */
function WorkshopIcon() {
  return (
    <svg
      className="w-10 h-10"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
    >
      {/* Table top */}
      <rect x="5" y="19" width="30" height="5" rx="1.5" fill="currentColor" />
      {/* Legs */}
      <rect x="9"  y="24" width="4" height="11" rx="1.5" fill="currentColor" opacity="0.7" />
      <rect x="27" y="24" width="4" height="11" rx="1.5" fill="currentColor" opacity="0.7" />
      {/* Arch / finished piece on table */}
      <path
        d="M14 19 L14 11 Q20 6 26 11 L26 19"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  );
}

/* --- Card data --- */
const CARDS = [
  {
    Icon: LumberIcon,
    badge: "In Yard",
    heading: "Lumber & Timber Sales",
    body: "We carry full dimension Coastal Douglas Fir including timbers, beams, and posts. Built for contractors, builders, and serious DIYers who won't settle for less.",
  },
  {
    Icon: WorkshopIcon,
    badge: "Made to Order",
    heading: "Custom Woodworking",
    body: "From custom furniture to one-of-a-kind statement pieces and handcrafted signs — if you can dream it, we can build it. Every piece is made with care right here in West Kelowna.",
  },
];

export default function Products() {
  const reduce = useReducedMotion();

  return (
    <section id="products" className="bg-bark py-20 sm:py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block font-sans text-xs font-semibold uppercase tracking-widest text-gold/70 mb-4">
            What We Offer
          </span>
          <h2 className="font-heading text-cream text-4xl sm:text-5xl mb-4">
            What We Do
          </h2>
          <p className="font-sans text-cream/70 text-base sm:text-lg max-w-xl mx-auto">
            Full-dimension Coastal Douglas Fir in the yard. One-of-a-kind
            pieces in the shop.
          </p>
        </motion.div>

        {/* Two cards — stacked on mobile, side by side on desktop */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                /* card 1 starts immediately, card 2 starts 0.1s later */
                delay: i * 0.1,
                ease: "easeOut" as const,
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col p-8 sm:p-10 bg-bark border border-gold/20 rounded-sm hover:border-gold/50 transition-colors"
            >
              {/* Badge — "In Yard" or "Made to Order" */}
              <span className="self-start mb-6 px-3 py-1 bg-gold/15 text-gold font-sans text-xs font-semibold uppercase tracking-widest rounded-sm">
                {card.badge}
              </span>

              {/* Icon */}
              <div className="text-gold mb-5">
                <card.Icon />
              </div>

              <h3 className="font-heading text-cream text-2xl sm:text-3xl mb-4 leading-tight">
                {card.heading}
              </h3>

              <p className="font-sans text-cream/70 text-base leading-relaxed flex-1">
                {card.body}
              </p>

              {/* Card CTA — scrolls down to the contact section */}
              <a
                href="#contact"
                className="mt-8 self-start font-sans text-gold text-sm font-semibold uppercase tracking-wider hover:text-gold/80 transition-colors flex items-center gap-2"
              >
                Ask About This
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
