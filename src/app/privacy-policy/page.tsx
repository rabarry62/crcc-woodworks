import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneCallBar from "@/components/PhoneCallBar";

/*
  Privacy Policy page — required since the contact form collects
  name, email/phone, and message (PIPEDA applies in Canada).
*/
export const metadata: Metadata = {
  title: "Privacy Policy | CRCC Woodworks",
  description:
    "How CRCC Woodworks collects, uses, and protects the personal information submitted through our contact form.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main className="bg-parchment py-28 sm:py-32 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-ink text-4xl sm:text-5xl mb-3">
            Privacy Policy
          </h1>
          <p className="font-sans text-wood text-sm mb-12">
            Last updated: July 3, 2026
          </p>

          <div className="font-sans text-ink/85 text-base leading-relaxed space-y-8">
            <p>
              CRCC Woodworks (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
              crccwoodworks.ca. This page explains what personal information we
              collect through this website, how we use it, and how we protect it.
            </p>
            <p>
              This policy is written to align with Canada&apos;s Personal Information
              Protection and Electronic Documents Act (PIPEDA).
            </p>

            <section>
              <h2 className="font-heading text-ink text-2xl mb-3">
                Information We Collect
              </h2>
              <p className="mb-3">
                When you use the contact form on this website, we collect:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your name</li>
                <li>Your email address or phone number</li>
                <li>Any message or details you submit</li>
              </ul>
              <p className="mt-3">
                We do not collect any other personal information through this
                website. We do not use tracking cookies or analytics that
                identify individual visitors.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-ink text-2xl mb-3">
                How We Use Your Information
              </h2>
              <p className="mb-3">
                Information submitted through the contact form is used only to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to your inquiry</li>
                <li>Provide a quote or discuss a potential project</li>
                <li>Follow up regarding services you&apos;ve requested</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to
                third parties. We do not use your information for marketing
                purposes unless you separately opt in.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-ink text-2xl mb-3">
                How We Store and Protect Your Information
              </h2>
              <p>
                Information submitted through the contact form is sent via
                email using Resend and is not stored in a public or searchable
                database. We take reasonable steps to protect your information
                from unauthorized access, but no method of electronic
                transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-ink text-2xl mb-3">
                How Long We Keep Your Information
              </h2>
              <p>
                We retain contact form submissions only as long as necessary
                to respond to your inquiry or complete a related project,
                after which they may be deleted.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-ink text-2xl mb-3">
                Your Rights
              </h2>
              <p className="mb-3">
                Under Canadian privacy law, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ask what personal information we hold about you</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request that your information be deleted</li>
              </ul>
              <p className="mt-3">
                To make a request, contact us using the information below.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-ink text-2xl mb-3">
                Third-Party Links
              </h2>
              <p>
                This website may contain links to other websites (such as
                social media). We are not responsible for the privacy
                practices of those external sites.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-ink text-2xl mb-3">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Changes
                will be posted on this page with an updated &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-ink text-2xl mb-3">
                Contact Us
              </h2>
              <p>
                If you have questions about this privacy policy or how your
                information is handled, contact us at:
              </p>
              <p className="mt-3 not-italic">
                <strong>CRCC Woodworks</strong>
                <br />
                rabarry62@icloud.com
                <br />
                (250) 878-5987
                <br />
                1501 Stevens Rd, West Kelowna, BC V1Z 1G2
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <PhoneCallBar />
    </>
  );
}
