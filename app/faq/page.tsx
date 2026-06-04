import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, HandHeart, Tag } from "lucide-react";
import { site } from "@/lib/site";
import FaqItem from "@/components/FaqItem";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about Thai massage at Layan in Frankston — booking and walk-ins, what to wear, what to expect, pricing and opening hours.",
};

export default function FaqPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <nav className="hero-anim text-sm text-plum-500 dark:text-plum-300" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-plum-700 dark:hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-plum-700 dark:text-plum-200" aria-current="page">FAQ</li>
            </ol>
          </nav>
          <div className="mt-6 grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="hero-anim d1 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-plum-900 sm:text-5xl dark:text-white">
                Questions, Gently <span className="text-plum-600 dark:text-plum-300">Answered</span>
              </h1>
              <p className="hero-anim d1 mt-5 max-w-2xl text-lg leading-relaxed text-plum-700/90 dark:text-gray-300">
                New to Thai massage, or just planning your first visit to Layan? Here's everything you might be wondering — and if your question isn't here, we're only a phone call away.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="hero-anim d2 flex flex-wrap gap-2">
                <a href="#booking-faqs" className="chip"><CalendarClock className="h-4 w-4" /> Booking &amp; visiting</a>
                <a href="#treatment-faqs" className="chip"><HandHeart className="h-4 w-4" /> Your treatment</a>
                <a href="#pricing-faqs" className="chip"><Tag className="h-4 w-4" /> Pricing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING & VISITING */}
      <section id="booking-faqs" className="bg-white py-20 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="reveal flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-plum-700 text-white dark:bg-plum-600"><CalendarClock className="h-5 w-5" /></span>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-plum-900 sm:text-3xl dark:text-white">Booking &amp; Visiting</h2>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <FaqItem question="Do I need to book, or can I walk in?" defaultOpen>
              Walk-ins are warmly welcome whenever we have space. To be sure of your preferred time, a quick call to <a href={`tel:${site.phoneTel}`} className="font-semibold text-plum-700 underline decoration-plum-300 underline-offset-2 hover:text-plum-900 dark:text-plum-200">{site.phoneDisplay}</a> is the surest way to reserve a spot.
            </FaqItem>
            <FaqItem question="Where are you located?">
              We're at 3/459 Nepean Hwy, Frankston VIC 3199 — easy to reach on the Mornington Peninsula, with parking close by. You can <a href={site.maps} target="_blank" rel="noopener" className="font-semibold text-plum-700 underline decoration-plum-300 underline-offset-2 hover:text-plum-900 dark:text-plum-200">get directions here</a>.
            </FaqItem>
            <FaqItem question="What are your opening hours?">
              We're open Monday to Friday 9:30am–6:00pm and Saturday 9:30am–5:00pm. We're closed on Sundays.
            </FaqItem>
            <FaqItem question="How early should I arrive?">
              A few minutes early is perfect — just enough time to settle in, let us know how you're feeling, and mention any areas you'd like us to focus on.
            </FaqItem>
          </div>
        </div>
      </section>

      {/* YOUR TREATMENT */}
      <section id="treatment-faqs" className="bg-plum-50 py-20 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="reveal flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-plum-700 text-white dark:bg-plum-600"><HandHeart className="h-5 w-5" /></span>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-plum-900 sm:text-3xl dark:text-white">Your Treatment</h2>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <FaqItem question="I've never had Thai massage — what happens?" defaultOpen>
              There's nothing to prepare. You'll arrive and settle in with a short chat, enjoy an unhurried treatment at a pressure that suits you, then take a moment to rest and rehydrate before easing back into your day.
            </FaqItem>
            <FaqItem question="What should I wear, and is oil used?">
              Traditional Thai massage is done fully clothed with no oil, so loose, comfortable clothing is ideal. Our Essential Oil and Foot treatments do use warm oils — we'll have everything ready for you.
            </FaqItem>
            <FaqItem question="Is Thai massage painful?">
              It shouldn't be. Pressure is firm but always guided by your comfort — just let your therapist know any time and they'll adjust. Most guests leave feeling deeply relaxed and refreshed.
            </FaqItem>
            <FaqItem question="Can Thai massage help with specific aches?">
              Yes — it's a traditional treatment for relieving stress and tension, and for easing back pain, stiff necks, sore shoulders, sciatica and sports-related strain. Tell us where you're holding tension and we'll focus there.
            </FaqItem>
            <FaqItem question="Which treatment is right for me?">
              If you'd like a full reset, our Traditional Thai or Essential Oil massage is a lovely choice; for one stubborn spot, try a focused back, neck or shoulder session. Browse the full <Link href="/services" className="font-semibold text-plum-700 underline decoration-plum-300 underline-offset-2 hover:text-plum-900 dark:text-plum-200">treatments menu</Link>, or tell us how you feel and we'll advise.
            </FaqItem>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing-faqs" className="bg-white py-20 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="reveal flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-plum-700 text-white dark:bg-plum-600"><Tag className="h-5 w-5" /></span>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-plum-900 sm:text-3xl dark:text-white">Pricing</h2>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <FaqItem question="How much do treatments cost?" defaultOpen>
              Treatments range from a 15-minute head massage at $15 up to a 90-minute traditional session at $110. You'll find every option and price on the <Link href="/services#pricing" className="font-semibold text-plum-700 underline decoration-plum-300 underline-offset-2 hover:text-plum-900 dark:text-plum-200">full price list</Link>.
            </FaqItem>
            <FaqItem question="Can I choose how long my session runs?">
              Absolutely. Several treatments come in more than one length — for example, Traditional Thai is available as 60 or 90 minutes, and Foot &amp; Reflexology as 30 or 60. Pick what suits your day, or ask us to recommend a length.
            </FaqItem>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-plum-50 py-20 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="reveal font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">Still Have a <span className="text-plum-600 dark:text-plum-300">Question?</span></h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-lg leading-relaxed text-plum-700/90 dark:text-gray-300">We're happy to help you choose a treatment or find a time. Send a booking request, or give us a call — we'd love to hear from you.</p>
          <div className="reveal mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">Book Now</Link>
            <a href={`tel:${site.phoneTel}`} className="btn-secondary w-full sm:w-auto">Call Now ({site.phoneDisplay})</a>
          </div>
        </div>
      </section>
    </>
  );
}
