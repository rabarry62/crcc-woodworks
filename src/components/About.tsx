"use client";

/*
  About section — warm background, two columns on desktop (text left, image right),
  single column on mobile. Fades in when scrolled into view.

  Accent image: drop ccrc.jpg into public/images/about.jpg to replace the placeholder.
*/

import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const reduce = useReducedMotion();

  /* Fade up on scroll — same easing as hero but triggered by scroll, not page load */
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="bg-parchment py-20 sm:py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Text side */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Small location label above the heading */}
          <span className="inline-block font-sans text-xs font-semibold uppercase tracking-widest text-forest mb-4">
            West Kelowna, BC
          </span>

          <h2 className="font-heading text-ink text-4xl sm:text-5xl leading-tight mb-6">
            Local Wood.{" "}
            <em className="not-italic text-gold">Real Craft.</em>
          </h2>

          <p className="font-sans text-wood text-base sm:text-lg leading-relaxed">
            CRCC Woodworks is a West Kelowna-based lumber yard and woodworking
            shop specializing in full dimension Coastal Douglas Fir. Whether
            you&apos;re a contractor sourcing timbers for your next build or a
            homeowner looking for a custom piece you won&apos;t find anywhere
            else, we&apos;re here to help. Locally owned, Canadian-made, and
            proud of it.
          </p>
        </motion.div>

        {/*
          Accent image — shows a warm placeholder colour until the real
          photo (ccrc.jpg) is placed at public/images/about.jpg.
          The ring adds a subtle warm border around the image.
        */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-sm overflow-hidden ring-1 ring-grain"
        >
          <img
            src="/images/customsign.jpg"
            alt="CRCC Woodworks yard and sign"
            className="w-full h-auto block"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
}
