import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarPlus, Phone, Clock, CheckCircle2, List, PersonStanding, Bone, Waves, Brain } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Treatments & Pricing",
  description:
    "Explore Layan's Thai massage treatments in Frankston — Traditional Thai, Essential Oil, Foot Reflexology, back, neck, shoulder and head massage. Durations, pricing and what to expect.",
};

const chips = [
  ["Traditional Thai", "#traditional-thai"],
  ["Essential Oil", "#essential-oil"],
  ["Foot & Reflexology", "#foot-reflexology"],
  ["Back, Neck & Head", "#targeted"],
  ["Price list", "#pricing"],
];

const priceRows = [
  ["Traditional Thai Massage", "60 min", "$75"],
  ["Traditional Thai Massage", "90 min", "$115"],
  ["Essential Oil Massage", "60 min", "$75"],
  ["Thai Foot Massage & Reflexology", "30 min", "$40"],
  ["Thai Foot Massage & Reflexology", "60 min", "$65"],
  ["Full Back Massage", "30 min", "$45"],
  ["Shoulder & Neck Massage", "30 min", "$40"],
  ["Shoulder, Neck & Head Massage", "45 min", "$55"],
  ["Head Massage", "15 min", "$20"],
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <nav className="hero-anim text-sm text-plum-500 dark:text-plum-300" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/home" className="hover:text-plum-700 dark:hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-plum-700 dark:text-plum-200" aria-current="page">Treatments</li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <h1 className="hero-anim d1 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-plum-900 sm:text-5xl dark:text-white">
              Find Your Perfect Treatment
            </h1>
            <p className="hero-anim d1 mt-5 text-lg leading-relaxed text-plum-700/90 dark:text-gray-300">
              From a full traditional session to a quick neck-and-shoulder reset, every treatment is unhurried, tailored to you, and carried out by qualified therapists. Here's the full menu, with what to expect and clear pricing.
            </p>
            <div className="hero-anim d2 mt-8">
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-plum-900 dark:text-gray-400">Massage types</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {chips.map(([label, href]) => (
                  <a key={href} href={href} className="chip">{label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRADITIONAL THAI */}
      <section id="traditional-thai" className="bg-plum-50 py-20 dark:bg-gray-800 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="reveal img-frame order-2 aspect-[4/3] lg:order-1">
            <Image src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=80" alt="Therapist guiding a clothed traditional Thai massage stretch" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="reveal order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500 dark:text-plum-300">Signature treatment</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">Traditional Thai Massage</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="pill"><Clock className="h-4 w-4" /> 60 min · $75</span>
              <span className="pill"><Clock className="h-4 w-4" /> 90 min · $115</span>
            </div>
            <p className="mt-5 leading-relaxed text-plum-700/90 dark:text-gray-300">
              The ancient art of applying pressure to specific areas of the body. Performed fully clothed with no oil, it works on the tendons to relax the muscles, improves blood circulation and, combined with gentle assisted stretching, lifts your energy levels.
            </p>
            <h3 className="mt-6 font-heading text-sm font-bold uppercase tracking-wider text-plum-800 dark:text-gray-100">What to expect</h3>
            <ul className="mt-3 grid gap-2.5">
              {["Fully clothed, no oil", "Firm palm & thumb pressure", "Yoga-like assisted stretches", "Especially good for sport & work pain"].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-plum-700 dark:text-gray-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-400" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ESSENTIAL OIL */}
      <section id="essential-oil" className="bg-white py-20 dark:bg-gray-900 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500 dark:text-plum-300">Signature treatment</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">Essential Oil Massage</h2>
            <div className="mt-4 flex flex-wrap gap-2"><span className="pill"><Clock className="h-4 w-4" /> 60 min · $75</span></div>
            <p className="mt-5 leading-relaxed text-plum-700/90 dark:text-gray-300">
              An ancient Thai remedy that pairs the healing power of warm essential oils with flowing massage to stimulate blood flow. It relieves sore, tired muscles and leaves your whole body feeling calm and relaxed.
            </p>
            <h3 className="mt-6 font-heading text-sm font-bold uppercase tracking-wider text-plum-800 dark:text-gray-100">Lovely for</h3>
            <ul className="mt-3 grid gap-2.5">
              {["Deep relaxation & unwinding", "Sore, tired muscles", "Improving circulation", "A gentle, soothing experience"].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-plum-700 dark:text-gray-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-400" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="reveal img-frame aspect-[4/3]">
            <Image src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80" alt="Warm essential oils and a lit candle beside a massage bed" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* FOOT & REFLEXOLOGY */}
      <section id="foot-reflexology" className="bg-plum-50 py-20 dark:bg-gray-800 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="reveal img-frame order-2 aspect-[4/3] lg:order-1">
            <Image src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80" alt="Relaxing Thai foot massage and reflexology treatment" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="reveal order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500 dark:text-plum-300">Signature treatment</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">Thai Foot Massage &amp; Reflexology</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="pill"><Clock className="h-4 w-4" /> 30 min · $40</span>
              <span className="pill"><Clock className="h-4 w-4" /> 60 min · $65</span>
            </div>
            <p className="mt-5 leading-relaxed text-plum-700/90 dark:text-gray-300">
              The traditional art of applying pressure to specific points across your feet and lower legs. It improves blood circulation and releases the tension you carry with every step — grounding, restorative and deeply comforting.
            </p>
            <h3 className="mt-6 font-heading text-sm font-bold uppercase tracking-wider text-plum-800 dark:text-gray-100">What to expect</h3>
            <ul className="mt-3 grid gap-2.5">
              {["Stay relaxed in a reclined chair", "Pressure points on feet & lower legs", "Great after long days on your feet", "Eases tension & aids circulation"].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-plum-700 dark:text-gray-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-400" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TARGETED */}
      <section id="targeted" className="bg-plum-900 py-20 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-300">Focused relief</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">Back, Neck, Shoulder &amp; Head</h2>
            <p className="mt-4 text-lg leading-relaxed text-plum-200/90">Short on time, or carrying tension in one spot? These focused sessions zero in on exactly where you need it.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: PersonStanding, title: "Full Back Massage", price: "30 min · $45", desc: "Traditional Thai work concentrated on the back, from the neck down — ideal for lower-back and neck pain, including sciatica." },
              { icon: Bone, title: "Shoulder & Neck Massage", price: "30 min · $40", desc: "For tension and stiffness through the shoulders and neck — focused pressure-point work to ease soreness and relax tight muscles." },
              { icon: Waves, title: "Shoulder, Neck & Head", price: "45 min · $55", desc: "Everything in the shoulder & neck session, extended across the head and face to relieve built-up tension and headaches." },
              { icon: Brain, title: "Head Massage", price: "15 min · $20", desc: "A focused 15 minutes on the head, neck and face — pressure points to relieve tension and head pain and refresh circulation." },
            ].map(({ icon: Icon, title, price, desc }) => (
              <article key={title} className="reveal rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition duration-200 hover:bg-white/10">
                <Icon className="h-6 w-6 text-white" />
                <h3 className="mt-4 font-heading text-lg font-bold text-white">{title}</h3>
                <span className="mt-2 inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">{price}</span>
                <p className="mt-3 text-sm leading-relaxed text-plum-200/90">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW A SESSION FLOWS */}
      <section className="bg-cream py-20 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500 dark:text-plum-300">Your visit</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">How a Session Flows</h2>
            <p className="mt-4 text-lg leading-relaxed text-plum-700/90 dark:text-gray-300">First time with us? There's nothing to prepare — here's the gentle rhythm of a visit.</p>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              ["1", "Arrive & settle", "A warm welcome and a quick chat about how you're feeling and any areas to focus on. Wear loose, comfortable clothing."],
              ["2", "Your treatment", "Unhurried, attentive work at a pressure that suits you. Tell your therapist anytime if you'd like more or less."],
              ["3", "Rest & rehydrate", "Take a moment, sip some water, and ease back into your day feeling relaxed and invigorated."],
            ].map(([n, title, desc]) => (
              <li key={n} className="reveal flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-plum-700 font-heading text-lg font-bold text-white dark:bg-plum-600">{n}</span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-plum-800 dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-plum-700/90 dark:text-gray-400">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRICE LIST */}
      <section id="pricing" className="bg-white py-20 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500 dark:text-plum-300">At a glance</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">Full Price List</h2>
          </div>
          <div className="reveal mt-10 overflow-hidden rounded-2xl ring-1 ring-plum-100 dark:ring-white/10">
            <table className="w-full text-left">
              <caption className="sr-only">Treatments, durations and prices</caption>
              <thead>
                <tr className="bg-plum-50 text-plum-800 dark:bg-gray-800 dark:text-gray-100">
                  <th scope="col" className="px-5 py-3 text-sm font-bold">Treatment</th>
                  <th scope="col" className="px-5 py-3 text-right text-sm font-bold">Duration</th>
                  <th scope="col" className="px-5 py-3 text-right text-sm font-bold">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-plum-100 bg-white text-plum-700 dark:divide-white/10 dark:bg-gray-900 dark:text-gray-300">
                {priceRows.map(([t, dur, price], i) => (
                  <tr key={i}>
                    <td className="px-5 py-3.5 font-medium text-plum-900 dark:text-gray-100">{t}</td>
                    <td className="px-5 py-3.5 text-right">{dur}</td>
                    <td className="px-5 py-3.5 text-right font-semibold text-plum-700 dark:text-plum-200">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="reveal mt-4 text-sm text-plum-900 dark:text-gray-400">Prices are per session. Please call to book — walk-ins are welcome when space allows.</p>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-plum-50 py-20 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="reveal font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">Ready When You Are</h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-lg leading-relaxed text-plum-700/90 dark:text-gray-300">Choose your treatment and we'll find a time that suits. Send a request and we'll confirm by phone, or call us directly.</p>
          <div className="reveal mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/book" className="btn-primary w-full sm:w-auto"><CalendarPlus className="h-5 w-5" /> Book Online</Link>
            <a href={`tel:${site.phoneTel}`} className="btn-secondary w-full sm:w-auto"><Phone className="h-5 w-5" /> Call Now ({site.phoneDisplay})</a>
          </div>
        </div>
      </section>
    </>
  );
}
