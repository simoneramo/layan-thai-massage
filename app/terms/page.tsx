import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms for booking and receiving treatments at Layan Traditional Thai Massage in Frankston, including bookings, cancellations, conduct and health information.",
};

const updated = "22 June 2026";

export default function TermsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <nav className="hero-anim text-sm text-plum-500 dark:text-plum-300" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-plum-700 dark:hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-plum-700 dark:text-plum-200" aria-current="page">Terms &amp; Conditions</li>
            </ol>
          </nav>
          <h1 className="hero-anim d1 mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-plum-900 sm:text-5xl dark:text-white">
            Terms &amp; <span className="text-plum-600 dark:text-plum-300">Conditions</span>
          </h1>
          <p className="hero-anim d1 mt-5 max-w-2xl text-lg leading-relaxed text-plum-700/90 dark:text-gray-300">
            These terms apply to bookings made and treatments received at {site.name}. By booking with us or using this website, you agree to them.
          </p>
          <p className="hero-anim d1 mt-3 text-sm text-plum-500 dark:text-plum-300">Last updated: {updated}</p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white py-16 dark:bg-gray-900 md:py-20">
        <div className="legal mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <h2>Bookings &amp; appointments</h2>
          <p>
            You can request an appointment online through this website or by phoning us on <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>. A booking request is confirmed once you receive our confirmation. We will do our best to accommodate your preferred treatment, therapist and time, but availability is not guaranteed. Please arrive a few minutes before your appointment so your full session time can be enjoyed.
          </p>

          <h2>Cancellations &amp; changes</h2>
          <p>
            Plans change — we simply ask that you give us as much notice as possible if you need to cancel or reschedule, so we can offer the time to someone else. You can cancel an online booking using the link in your confirmation email, or by calling us. Repeated missed appointments without notice may affect future bookings.
          </p>

          <h2>Prices &amp; payment</h2>
          <p>
            Current treatments and prices are shown on our <Link href="/services">services page</Link>. Prices are in Australian dollars (AUD) and include GST where applicable. Payment is made at the studio at the time of your treatment. We may update our prices from time to time; the price that applies is the one current at the time of your visit.
          </p>

          <h2>Health information &amp; your wellbeing</h2>
          <p>
            Please tell your therapist about any injuries, medical conditions, allergies, pregnancy, or areas of discomfort before your treatment, so we can care for you safely. Our treatments are intended for relaxation and general wellbeing. They are <strong>not a substitute for medical advice, diagnosis or treatment</strong>. If you have a health concern, please consult a qualified medical professional. We may decline or adjust a treatment where we believe it is not appropriate for your health and safety.
          </p>

          <h2>Respectful conduct</h2>
          <p>
            We provide professional, therapeutic massage only. Any request for services of a sexual nature, or any inappropriate, threatening or disrespectful behaviour towards our staff, will result in the treatment being stopped immediately and full payment being required. We reserve the right to refuse service at our discretion.
          </p>

          <h2>Children &amp; minors</h2>
          <p>
            Clients under 18 must be accompanied by a parent or guardian who provides consent for the treatment.
          </p>

          <h2>Liability</h2>
          <p>
            We take care to provide our services with reasonable skill and care. Nothing in these terms excludes any rights or guarantees you have under the Australian Consumer Law. To the extent permitted by law, we are not liable for any loss or harm arising from your failure to disclose relevant health information, or from use of our services contrary to our advice.
          </p>

          <h2>This website</h2>
          <p>
            The content, branding and images on this website belong to us or our licensors and may not be copied or reused without permission. We aim to keep information such as treatments, prices and opening hours accurate and up to date, but it may change without notice.
          </p>

          <h2>Privacy</h2>
          <p>
            Any personal information you give us is handled in accordance with our <Link href="/privacy">Privacy Policy</Link>.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of Victoria, Australia, and any disputes are subject to the jurisdiction of the courts of Victoria.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have any questions about these terms, please contact us:
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
