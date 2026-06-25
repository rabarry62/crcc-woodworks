"use client";

/*
  PhoneCallBar — sticky bottom bar, visible on mobile only (hidden md+).
  Two equal-width buttons: tap-to-call and get directions.
  Sits above the OS home bar thanks to safe-area padding.
*/

export default function PhoneCallBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Tap-to-call — gold/primary action */}
      <a
        href="tel:2508785987"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-gold text-bark font-sans font-semibold text-sm"
      >
        {/* Phone icon */}
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.35h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
        </svg>
        Call Us
      </a>

      {/* Get directions — opens Google Maps */}
      <a
        href="https://maps.google.com/maps?q=1501+Stevens+Rd,+West+Kelowna,+BC+V1Z+1G2"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-bark text-cream font-sans font-semibold text-sm border-l border-grain/20"
      >
        {/* Map pin icon */}
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Get Directions
      </a>
    </div>
  );
}
