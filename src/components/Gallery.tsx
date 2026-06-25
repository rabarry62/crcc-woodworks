"use client";

/*
  Gallery section — 6-image grid, 3 columns on desktop, 2 on tablet, 1 on mobile.
  Images stagger in with a subtle scale effect as they enter the viewport.

  To add real photos: place them in public/images/ and update the src paths below.
  Filenames: gallery-1.jpg through gallery-6.jpg
*/

import { motion, useReducedMotion } from "framer-motion";

/* Placeholder items — replace src and alt when the client delivers photos */
const PHOTOS = [
  { src: "/images/gallery-1.jpg", alt: "Coastal Douglas Fir timber stack in the yard" },
  { src: "/images/gallery-2.jpg", alt: "Custom woodworking piece from the shop" },
  { src: "/images/gallery-3.jpg", alt: "Lumber yard overview with stacked beams" },
  { src: "/images/gallery-4.jpg", alt: "Handcrafted furniture detail" },
  { src: "/images/gallery-5.jpg", alt: "Beams and posts ready for pickup" },
  { src: "/images/gallery-6.jpg", alt: "Custom handcrafted sign" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              className="relative aspect-[4/3] overflow-hidden rounded-sm bg-bark/10 ring-1 ring-grain"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
