import type { Metadata } from "next";
import Link from "next/link";
import { CalendarHeart, Phone, Mail, MessageCircle, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Book your Thai massage at Layan in Frankston. Call 0451 250 064, send a booking request, or visit us at 3/459 Nepean Hwy. Open Mon–Sat.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <nav className="hero-anim text-sm text-plum-500 dark:text-plum-300" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-plum-700 dark:hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-plum-700 dark:text-plum-200" aria-current="page">Contact</li>
            </ol>
          </nav>
          <div className="mt-6 max-w-2xl">
            <h1 className="hero-anim d1 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-plum-900 sm:text-5xl dark:text-white">
              Let's Get You Booked <span className="text-plum-600 dark:text-plum-300">In</span>
            </h1>
            <p className="hero-anim d1 mt-5 text-lg leading-relaxed text-plum-700/90 dark:text-gray-300">
              Call for the quickest response, send a booking request below, or simply drop by — walk-ins are welcome whenever we have space. We'd love to help you unwind.
            </p>
            <div className="hero-anim d2 mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#booking" className="btn-primary w-full sm:w-auto"><CalendarHeart className="h-5 w-5" /> Book Now</a>
              <a href={`tel:${site.phoneTel}`} className="btn-secondary w-full sm:w-auto"><Phone className="h-5 w-5" /> Call Now ({site.phoneDisplay})</a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT METHODS */}
      <section className="bg-plum-50 py-16 dark:bg-gray-800 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <a href={`tel:${site.phoneTel}`} className="reveal card flex flex-col gap-3 p-6 hover:-translate-y-1 hover:shadow-lg">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-plum-100 text-plum-700 dark:bg-white/10 dark:text-plum-200"><Phone className="h-5 w-5" /></span>
              <span className="font-heading font-bold text-plum-800 dark:text-white">Call us</span>
              <span className="text-sm text-plum-700/90 dark:text-gray-300">{site.phoneDisplay}</span>
            </a>
            <a href={`mailto:${site.email}`} className="reveal card flex flex-col gap-3 p-6 hover:-translate-y-1 hover:shadow-lg">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-plum-100 text-plum-700 dark:bg-white/10 dark:text-plum-200"><Mail className="h-5 w-5" /></span>
              <span className="font-heading font-bold text-plum-800 dark:text-white">Email us</span>
              <span className="break-all text-sm text-plum-700/90 dark:text-gray-300">{site.email}</span>
            </a>
            <a href={site.messenger} target="_blank" rel="noopener" className="reveal card flex flex-col gap-3 p-6 hover:-translate-y-1 hover:shadow-lg">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-plum-100 text-plum-700 dark:bg-white/10 dark:text-plum-200"><MessageCircle className="h-5 w-5" /></span>
              <span className="font-heading font-bold text-plum-800 dark:text-white">Message us</span>
              <span className="text-sm text-plum-700/90 dark:text-gray-300">Chat on Messenger</span>
            </a>
            <a href={site.maps} target="_blank" rel="noopener" className="reveal card flex flex-col gap-3 p-6 hover:-translate-y-1 hover:shadow-lg">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-plum-100 text-plum-700 dark:bg-white/10 dark:text-plum-200"><MapPin className="h-5 w-5" /></span>
              <span className="font-heading font-bold text-plum-800 dark:text-white">Visit us</span>
              <span className="text-sm text-plum-700/90 dark:text-gray-300">3/459 Nepean Hwy, Frankston</span>
            </a>
          </div>
        </div>
      </section>

      {/* BOOKING FORM + INFO */}
      <section id="booking" className="bg-white py-20 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500 dark:text-plum-300">Booking request</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">Send Us a <span className="text-plum-600 dark:text-plum-300">Message</span></h2>
            <p className="mt-4 text-lg leading-relaxed text-plum-700/90 dark:text-gray-300">Tell us what you'd like and when suits you. We'll call back to confirm your appointment.</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <aside className="reveal lg:col-span-5">
              <div className="flex h-full flex-col gap-6 rounded-2xl bg-plum-800 p-7 text-plum-100 shadow-sm dark:bg-gray-800 sm:p-8">
                <h3 className="font-heading text-xl font-bold text-white">Visit Layan</h3>
                <ul className="flex flex-col gap-5 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-plum-300" />
                    <span>3/459 Nepean Hwy<br />Frankston VIC 3199
                      <a href={site.maps} target="_blank" rel="noopener" className="mt-1 inline-flex items-center gap-1 font-medium text-white underline decoration-plum-400 underline-offset-2 hover:text-plum-200">Get directions <ArrowUpRight className="h-3.5 w-3.5" /></a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-plum-300" /><a href={`tel:${site.phoneTel}`} className="font-medium text-white hover:text-plum-200">{site.phoneDisplay}</a></li>
                  <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-plum-300" /><a href={`mailto:${site.email}`} className="font-medium text-white hover:text-plum-200">{site.email}</a></li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-plum-300" />
                    <span className="space-y-0.5">
                      <span className="flex justify-between gap-6"><span>Mon – Fri</span><span className="text-white">9am – 6:00pm</span></span>
                      <span className="flex justify-between gap-6"><span>Saturday</span><span className="text-white">9am – 5:00pm</span></span>
                      <span className="flex justify-between gap-6"><span>Sunday</span><span className="text-white">Closed</span></span>
                    </span>
                  </li>
                </ul>
                <div className="mt-auto border-t border-white/15 pt-6">
                  <a href={`tel:${site.phoneTel}`} className="btn-secondary w-full border-plum-300/60 text-white hover:bg-white/10"><Phone className="h-5 w-5" /> Call Now ({site.phoneDisplay})</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="bg-plum-50 py-20 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500 dark:text-plum-300">Find us</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">On Nepean <span className="text-plum-600 dark:text-plum-300">Highway</span></h2>
            <p className="mt-4 text-lg leading-relaxed text-plum-700/90 dark:text-gray-300">Easy to reach on the Mornington Peninsula, with parking close by.</p>
          </div>
          <div className="reveal mt-10 overflow-hidden rounded-2xl shadow-sm ring-1 ring-plum-100 dark:ring-white/10">
            <iframe
              title="Map showing Layan Traditional Thai Massage, 3/459 Nepean Hwy, Frankston VIC 3199"
              src={site.mapEmbed}
              className="h-[380px] w-full md:h-[460px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
