"use client";

/*
  Gallery section — 6-image grid, 3 columns on desktop, 2 on tablet, 1 on mobile.
  Images stagger in with a subtle scale effect as they enter the viewport.
*/

import { motion, useReducedMotion } from "framer-motion";

const PHOTOS = [
  { src: "/images/IMG_20260628_083538.webp", alt: "Finished dark-stained garden bridge ready for delivery" },
  { src: "/images/IMG_20260628_083515.webp", alt: "Custom outdoor lounge chairs and coffee table with CRCC Woodworks sign" },
  { src: "/images/IMG_20260628_083527.webp", alt: "Horizontal cedar fence with black metal posts" },
  { src: "/images/IMG_20260628_083530.webp", alt: "Fresh lumber loaded on trailer in the yard" },
  { src: "/images/IMG_20260628_083551.webp", alt: "Custom carved Welcome To Our Lake House decorative sign" },
  { src: "/images/IMG_20260628_083605.webp", alt: "Cedar gate with Z-brace design and black hardware" },
  { src: "/images/IMG_20260628_083559.webp", alt: "Finished stained Kelowna Motorcycle Shop custom sign" },
  { src: "/images/IMG_20260628_083536.webp", alt: "Small garden bridge with CRCC Woodworks sign" },
  { src: "/images/lumber2.webp", alt: "Fresh Coastal Douglas Fir lumber stacked and ready" },
];

export default function Gallery() {
  const reduce = useReducedMotion();

  return (
    <section id="gallery" className="bg-parchment py-20 sm:py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 sm:mb-14"
        >
          <span className="inline-block font-sans text-xs font-semibold uppercase tracking-widest text-forest mb-4">
            Portfolio
          </span>
          <h2 className="font-heading text-ink text-4xl sm:text-5xl mb-3">
            See the Work
          </h2>
          <p className="font-sans text-wood text-base sm:text-lg">
            A glimpse at what comes out of our yard and shop.
          </p>
        </motion.div>

        {/*
          Image grid — warm placeholder background shows until real
          photos are added. Each item has a hover zoom on the image.
        */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                /* 0.08s stagger between each photo so they cascade in */
                delay: i * 0.08,
                ease: "easeOut" as const,
              }}
              viewport={{ once: true, margin: "-60px" }}
              className="break-inside-avoid mb-4 overflow-hidden rounded-sm bg-bark/10 ring-1 ring-grain"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto block hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
