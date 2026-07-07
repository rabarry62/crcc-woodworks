"use client";

/*
  Contact & Find Us section — dark bark background.
  Left: large phone number, address, hours, Instagram, and the contact form.
  Right: Google Maps embed showing 1501 Stevens Rd, West Kelowna.
  Stacks to single column on mobile.
*/

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* --- Inline SVG icons --- */

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.35h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}


export default function Contact() {
  const reduce = useReducedMotion();

  /* Tracks each form field value */
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  /*
    Honeypot field — real users never see or fill this in (it's positioned
    off-screen), but bots that auto-fill every input on the page will.
    If it comes back non-empty, the server treats the submission as spam.
  */
  const [honeypot, setHoneypot] = useState("");

  /* Tracks the form submission state: idle → sending → sent (or error) */
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  /* Updates a single field when the user types */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* POSTs the form to the Next.js API route, which sends it via Resend */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, company: honeypot }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", contact: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  /* Shared input styling — dark background to match the section */
  const inputClass =
    "w-full px-4 py-3 bg-bark border border-grain/30 text-cream placeholder:text-cream/35 font-sans text-base rounded-sm focus:outline-none focus:border-gold transition-colors";

  return (
    <section id="contact" className="bg-bark py-20 sm:py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 sm:mb-16"
        >
          <span className="inline-block font-sans text-xs font-semibold uppercase tracking-widest text-gold/70 mb-4">
            Get in Touch
          </span>
          <h2 className="font-heading text-cream text-4xl sm:text-5xl mb-4">
            Come See Us
          </h2>
          <p className="font-sans text-cream/70 text-base sm:text-lg max-w-xl">
            We&apos;d love to show you what we&apos;ve got. Stop by the yard or give us a call.
          </p>
        </motion.div>

        {/* Two-column layout: info + form left, map right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left column — contact details then form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-10"
          >
            {/* Contact info block */}
            <div className="space-y-5">

              {/* Large tappable phone number — primary CTA on mobile */}
              <a
                href="tel:2508785987"
                className="flex items-center gap-3 text-gold hover:text-gold/80 transition-colors"
              >
                <PhoneIcon />
                <span className="font-display text-3xl sm:text-4xl">(250) 878-5987</span>
              </a>

              {/* Address — opens Google Maps on tap */}
              <div className="flex items-start gap-3 text-cream/80 font-sans text-base">
                <MapPinIcon />
                <a
                  href="https://maps.google.com/maps?q=1501+Stevens+Rd,+West+Kelowna,+BC+V1Z+1G2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  1501 Stevens Rd, West Kelowna, BC V1Z 1G2
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 text-cream/80 font-sans text-base">
                <ClockIcon />
                <div>
                  <p>Mon–Fri: 8:00am – 3:00pm</p>
                  <p className="text-cream/45 text-sm mt-1">
                    Hours subject to change — call ahead to confirm.
                  </p>
                </div>
              </div>

            </div>

            {/* Contact form */}
            <div>
              <h3 className="font-heading text-cream text-2xl mb-6">
                Send Us a Message
              </h3>

              {/* Success state — replaces the form once sent */}
              {status === "sent" ? (
                <div className="p-6 bg-forest/20 border border-forest/40 rounded-sm text-cream font-sans">
                  Thanks — we&apos;ll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/*
                    Honeypot field — invisible to real users (off-screen,
                    not display:none since some bots skip that specifically),
                    but bots that auto-fill forms will fill it in.
                  */}
                  <input
                    type="text"
                    name="company"
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: "1px",
                      height: "1px",
                      opacity: 0,
                    }}
                  />

                  <div>
                    <label htmlFor="name" className="sr-only">Your name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="sr-only">Best way to reach you</label>
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      autoComplete="email tel"
                      placeholder="Your phone number or email to reach you"
                      value={form.contact}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">What are you looking for?</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="What are you looking for?"
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Error message if submission fails */}
                  {status === "error" && (
                    <p className="text-red-400 font-sans text-sm">
                      Something went wrong. Please call us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 bg-gold text-bark font-sans font-semibold text-base rounded-sm hover:brightness-110 disabled:opacity-60 transition-all"
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/*
            Right column — Google Maps embed.
            No API key needed for the basic iframe embed.
          */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-sm overflow-hidden ring-1 ring-grain/20 min-h-[300px]"
          >
            <iframe
              title="CRCC Woodworks — 1501 Stevens Rd, West Kelowna"
              src="https://maps.google.com/maps?q=1501+Stevens+Rd,+West+Kelowna,+BC+V1Z+1G2&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px", height: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
