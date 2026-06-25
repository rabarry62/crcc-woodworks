"use client";

/*
  Hero section — full viewport height, background image with Ken Burns zoom,
  dark overlay, and staggered Framer Motion entrance animations.

  Background image: drop crcc_image_1.webp into public/images/hero.webp
  to replace the placeholder.
*/

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  /*
    useReducedMotion() respects the user's OS "reduce motion" setting.
    When true, we skip translateY so the fade still plays but nothing moves.
  */
  const reduce = useReducedMotion();

  /*
    Builds a Framer Motion variant object for a fade + upward drift.
    delay   — how long to wait before this element starts animating
    y       — how many pixels it rises from (defaults to 30)
  */
  const fadeUp = (delay: number, y = 30) => ({
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: "easeOut" as const },
    },
  });

  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center overflow-hidden bg-bark"
    >
      {/*
        Background image layer.
        CSS background-image gracefully shows nothing if the file is missing;
        the bark fallback color keeps the overlay looking intentional.
        The .animate-ken-burns class (defined in globals.css) slowly zooms
        from scale(1) to scale(1.08) over 10 seconds.
      */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{ backgroundImage: "url('/images/crcc image 1.webp')" }}
      />

      {/* Semi-transparent dark overlay so text stays readable over any photo */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.55)" }}
      />

      {/* Hero text content — sits above both background layers */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">

        {/* Headline — delay 0.2s */}
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="visible"
          className="font-display text-cream text-5xl sm:text-6xl lg:text-7xl leading-tight max-w-3xl"
        >
          Built From the Ground Up
        </motion.h1>

        {/* Subheading — delay 0.4s */}
        <motion.p
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="visible"
          className="mt-5 font-sans text-cream/85 text-lg sm:text-xl max-w-xl leading-relaxed"
        >
          Quality Coastal Douglas Fir lumber, custom woodworking, and
          one-of-a-kind pieces — proudly serving the Okanagan Valley.
        </motion.p>

        {/* CTA buttons — delay 0.6s, shorter rise (20px) */}
        <motion.div
          variants={fadeUp(0.6, 20)}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center"
        >
          {/* Primary CTA — tap-to-call on mobile */}
          <a
            href="tel:2508785987"
            className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gold text-bark font-sans font-semibold text-base rounded-sm hover:brightness-110 transition-all"
          >
            Call Us
          </a>

          {/* Secondary CTA — opens Google Maps */}
          <a
            href="https://maps.google.com/maps?q=1501+Stevens+Rd,+West+Kelowna,+BC+V1Z+1G2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full sm:w-auto px-8 py-4 border-2 border-cream/80 text-cream font-sans font-semibold text-base rounded-sm hover:bg-cream hover:text-bark transition-all"
          >
            Visit Our Yard
          </a>
        </motion.div>
      </div>


    </section>
  );
}
