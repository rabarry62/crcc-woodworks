/*
  Main landing page — imports and assembles all five sections plus
  the persistent nav, footer, and mobile sticky call bar.
*/

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PhoneCallBar from "@/components/PhoneCallBar";

export default function Home() {
  return (
    <>
      {/* Sticky nav — transparent over hero, solid bark on scroll */}
      <Navbar />

      <main>
        {/* 1. Hero — full viewport, Ken Burns background, staggered CTAs */}
        <Hero />

        {/* 2. About — who CRCC is and what they stand for */}
        <About />

        {/* 3. Products & Services — lumber sales + custom woodworking */}
        <Products />

        {/* 4. Gallery — 6-photo grid, placeholder until client delivers photos */}
        <Gallery />

        {/* 5. Contact & Find Us — phone, hours, address, form, map */}
        <Contact />
      </main>

      {/* Footer — logo, links, copyright */}
      <Footer />

      {/* Mobile-only sticky bottom bar: tap-to-call + get directions */}
      <PhoneCallBar />
    </>
  );
}
