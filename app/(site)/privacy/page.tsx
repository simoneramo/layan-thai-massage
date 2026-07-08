import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Layan Traditional Thai Massage in Frankston collects, uses and protects your personal information, in line with the Australian Privacy Principles.",
};

const updated = "22 June 2026";

export default function PrivacyPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <nav className="hero-anim text-sm text-plum-500" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/home" className="hover:text-plum-700">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-plum-700" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="hero-anim d1 mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-plum-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="hero-anim d1 mt-5 max-w-2xl text-lg leading-relaxed text-plum-700/90">
            Your privacy matters to us. This policy explains what personal information {site.name} collects, how we use it, and the choices you have.
          </p>
          <p className="hero-anim d1 mt-3 text-sm text-plum-500">Last updated: {updated}</p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white py-16 md:py-20">
        <div className="legal mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <p>
            {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy and handling your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs). This policy applies to our website and the services we provide at {site.address}.
          </p>

          <h2>Information we collect</h2>
          <p>We only collect personal information that you choose to give us, or that we need to provide our services. This may include:</p>
          <ul>
            <li><strong>Contact and booking details</strong> — your name, phone number and email address when you make a booking request or send us an enquiry through this website.</li>
            <li><strong>Appointment details</strong> — the treatment, date and time you request.</li>
            <li><strong>Health information you share</strong> — any health, injury or comfort information you choose to tell your therapist so we can treat you safely. This is sensitive information and is only used to provide your treatment.</li>
            <li><strong>Technical information</strong> — basic, non-identifying data your browser sends when visiting our website (such as your device type and pages viewed), used to keep the site working and secure.</li>
          </ul>

          <h2>How we use your information</h2>
          <p>We use your personal information to:</p>
          <ul>
            <li>respond to your booking requests and enquiries;</li>
            <li>confirm, manage, reschedule or cancel your appointments;</li>
            <li>provide your treatment safely and tailor it to your needs;</li>
            <li>contact you about your booking; and</li>
            <li>meet our legal and record-keeping obligations.</li>
          </ul>
          <p>We do not sell your personal information, and we do not use it for marketing unless you have asked us to.</p>

          <h2>Who we share it with</h2>
          <p>
            We do not disclose your personal information except to trusted service providers who help us operate this website and manage bookings, and only so they can perform those services for us. These include:
          </p>
          <ul>
            <li><strong>Resend</strong> — to deliver booking and enquiry emails to us and confirmation emails to you;</li>
            <li><strong>Neon</strong> — secure database hosting for booking records (hosted in Australia);</li>
            <li><strong>Vercel</strong> — website and application hosting.</li>
          </ul>
          <p>
            We may also disclose information where required or authorised by law. Some of these providers may store data outside Australia; where they do, we take reasonable steps to ensure your information is handled consistently with the APPs.
          </p>

          <h2>Keeping your information secure</h2>
          <p>
            We take reasonable steps to protect your personal information from misuse, loss, and unauthorised access, including secure, encrypted connections and access controls. No method of transmission over the internet is completely secure, but we work to safeguard the information you entrust to us.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep your personal information only for as long as needed to provide our services and to meet our legal obligations, after which it is securely deleted or de-identified.
          </p>

          <h2>Accessing or correcting your information</h2>
          <p>
            You can ask to see the personal information we hold about you, or ask us to correct it if it is inaccurate. To do so, or to make a privacy complaint, contact us using the details below. We will respond within a reasonable time. If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener">oaic.gov.au</a>.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The current version will always be available on this page, with the &ldquo;last updated&rdquo; date shown above.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have any questions about your privacy or this policy, please contact us:
          </p>
          <ul>
            <li>{site.name}</li>
            <li>{site.address}</li>
            <li>Phone: <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a></li>
            <li>Email: <a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
