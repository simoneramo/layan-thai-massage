import type { Metadata } from "next";
import Link from "next/link";
import { Send, CalendarPlus, Phone, Mail, MessageCircle, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Get in touch with Layan Traditional Thai Massage in Frankston. Call 0451 250 064 to book, send us a message, or visit 3/459 Nepean Hwy. Open Mon–Sat.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <nav className="hero-anim text-sm text-plum-500" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/home" className="hover:text-plum-700">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-plum-700" aria-current="page">Contact</li>
            </ol>
          </nav>
          <div className="mt-6 max-w-2xl">
            <h1 className="hero-anim d1 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-plum-900 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="hero-anim d1 mt-5 text-lg leading-relaxed text-plum-700/90">
              Call us for the quickest response — especially to book a treatment — send a message below, or simply drop by. Walk-ins are welcome whenever we have space, and we'd love to help you unwind.
            </p>
            <div className="hero-anim d2 mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#booking" className="btn-primary w-full sm:w-auto"><Send className="h-5 w-5" /> Send a Message</a>
              <Link href="/book" className="btn-secondary w-full sm:w-auto"><CalendarPlus className="h-5 w-5" /> Book Online</Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT METHODS */}
      <section className="bg-plum-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <a href={`tel:${site.phoneTel}`} className="group reveal card flex flex-col gap-3 p-6 hover:-translate-y-0.5 hover:shadow-md">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-plum-100 text-plum-700 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-rotate-6"><Phone className="h-5 w-5" /></span>
              <span className="font-heading font-bold text-plum-800">Call us</span>
              <span className="text-sm text-plum-700/90">{site.phoneDisplay}</span>
            </a>
            <a href={`mailto:${site.email}`} className="group reveal card flex flex-col gap-3 p-6 hover:-translate-y-0.5 hover:shadow-md">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-plum-100 text-plum-700 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-rotate-6"><Mail className="h-5 w-5" /></span>
              <span className="font-heading font-bold text-plum-800">Email us</span>
              <span className="break-all text-sm text-plum-700/90">{site.email}</span>
            </a>
            <a href={site.messenger} target="_blank" rel="noopener" className="group reveal card flex flex-col gap-3 p-6 hover:-translate-y-0.5 hover:shadow-md">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-plum-100 text-plum-700 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-rotate-6"><MessageCircle className="h-5 w-5" /></span>
              <span className="font-heading font-bold text-plum-800">Message us</span>
              <span className="text-sm text-plum-700/90">Chat on Messenger</span>
            </a>
            <a href={site.maps} target="_blank" rel="noopener" className="group reveal card flex flex-col gap-3 p-6 hover:-translate-y-0.5 hover:shadow-md">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-plum-100 text-plum-700 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-rotate-6"><MapPin className="h-5 w-5" /></span>
              <span className="font-heading font-bold text-plum-800">Visit us</span>
              <span className="text-sm text-plum-700/90">3/459 Nepean Hwy, Frankston</span>
            </a>
          </div>
        </div>
      </section>

      {/* BOOKING FORM + INFO */}
      <section id="booking" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500">Send a message</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl">Send Us a Message</h2>
            <p className="mt-4 text-lg leading-relaxed text-plum-700/90">Have a question or want to know more? Send us a message and we'll get back to you as soon as we can.</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <aside className="reveal lg:col-span-5">
              <div className="flex h-full flex-col gap-6 rounded-2xl bg-plum-800 p-7 text-plum-100 shadow-sm sm:p-8">
                <h3 className="font-heading text-xl font-bold text-white">Visit Layan</h3>
                <ul className="flex flex-col gap-5 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-plum-300" />
                    <a href={site.maps} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-medium text-white hover:text-plum-200">
                      <span className="underline decoration-plum-400 underline-offset-2">3/459 Nepean Hwy, Frankston VIC 3199</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  </li>
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-plum-300" /><a href={`tel:${site.phoneTel}`} className="font-medium text-white hover:text-plum-200">{site.phoneDisplay}</a></li>
                  <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-plum-300" /><a href={`mailto:${site.email}`} className="font-medium text-white hover:text-plum-200">{site.email}</a></li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-plum-300" />
                    <span className="space-y-0.5">
                      <span className="flex justify-between gap-6"><span>Mon</span><span className="text-white">9am – 6:00pm</span></span>
                      <span className="flex justify-between gap-6"><span>Tue</span><span className="text-white">9am – 6:00pm</span></span>
                      <span className="flex justify-between gap-6"><span>Wed</span><span className="text-white">9am – 6:00pm</span></span>
                      <span className="flex justify-between gap-6"><span>Thurs</span><span className="text-white">9am – 6:00pm</span></span>
                      <span className="flex justify-between gap-6"><span>Fri</span><span className="text-white">9am – 6:00pm</span></span>
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
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="bg-plum-50 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500">Find us</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl">On Nepean Highway</h2>
            <p className="mt-4 text-lg leading-relaxed text-plum-700/90">Easy to reach on the Mornington Peninsula, with lots of parking close by.</p>
          </div>
          <div className="reveal mt-10 overflow-hidden rounded-2xl shadow-sm ring-1 ring-plum-100">
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
