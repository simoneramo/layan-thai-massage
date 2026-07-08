import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarPlus, Phone, Heart, HandHeart, Smile, Scale, CheckCircle2,
  Shirt, MessageCircle, CalendarCheck, MapPin, Clock, ArrowUpRight,
} from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Layan Traditional Thai Massage in Frankston. The ancient art behind our work, our calm philosophy, and the qualified, caring therapists who look after you.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <nav className="hero-anim text-sm text-plum-500 dark:text-plum-300" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/home" className="hover:text-plum-700 dark:hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-plum-700 dark:text-plum-200" aria-current="page">About</li>
            </ol>
          </nav>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <h1 className="hero-anim d1 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-plum-900 sm:text-5xl dark:text-white">
                Calm, Considered, Genuinely Thai
              </h1>
              <p className="hero-anim d1 mt-5 max-w-2xl text-lg leading-relaxed text-plum-700/90 dark:text-gray-300">
                Layan is a small, welcoming Thai massage studio in the heart of Frankston. We practise an ancient healing art with patience and care — quiet rooms, qualified therapists, and time set aside entirely for you.
              </p>
            </div>
            <div className="hero-anim d2 lg:col-span-5">
              <div className="img-frame aspect-[4/3]">
                <Image src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80" alt="A peaceful, tidy massage room at Layan ready to welcome a guest" fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="bg-plum-50 py-20 dark:bg-neutral-800 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500 dark:text-plum-300">Our philosophy</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">Care That Begins Before the First Touch</h2>
            <p className="mt-4 text-lg leading-relaxed text-plum-700/90 dark:text-gray-300">
              Each session opens with a quiet moment of centering and connection — a chance to be mindful of breath and energy, and to give you our full, unhurried attention. It's guided by four simple intentions.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Heart, title: "Loving kindness", desc: "Every guest is met with genuine warmth and goodwill, exactly as they are." },
              { Icon: HandHeart, title: "Compassion", desc: "We listen first, then work gently with whatever aches or tension you carry in." },
              { Icon: Smile, title: "Joy", desc: "We take real delight in seeing you leave lighter, looser and more at ease." },
              { Icon: Scale, title: "Equanimity", desc: "A calm, balanced presence — steady hands and an unhurried, peaceful space." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="reveal card p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-plum-100 text-plum-700 dark:bg-white/10 dark:text-plum-200"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-4 font-heading text-lg font-bold text-plum-800 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-700/90 dark:text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR ROOTS */}
      <section id="story" className="bg-white py-20 dark:bg-neutral-900 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="reveal img-frame order-2 aspect-[4/5] lg:order-1">
            <Image src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80" alt="Smooth stones, soft towels and flowers arranged in a serene treatment room" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="reveal order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500 dark:text-plum-300">Our roots</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">An Ancient Healing Art</h2>
            <p className="mt-5 leading-relaxed text-plum-700/90 dark:text-gray-300">
              Traditional Thai massage has its roots in yoga, Ayurvedic medicine and Buddhist spiritual practice. It weaves together rhythmic massage, acupressure, gentle twisting, deep stretching and meditation to release tension, increase vitality, and bring a wholeness of mind, body and spirit.
            </p>
            <p className="mt-4 leading-relaxed text-plum-700/80 dark:text-gray-400">
              Flowing and rhythmical, a complete session is a sequence of unhurried presses, stretches and twists — drawn from more than a hundred traditional techniques. One movement melts into the next, smoothly and harmoniously. There is never a suggestion of haste.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="approach" className="bg-plum-50 py-20 dark:bg-neutral-800 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="reveal lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500 dark:text-plum-300">How we work</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">Traditional Technique, Tailored to You</h2>
            <p className="mt-5 leading-relaxed text-plum-700/90 dark:text-gray-300">
              Traditional Thai massage is an interactive therapy — passive stretching and gentle, firm pressure applied with the palms and thumbs along the body's energy lines. It works the skin, muscles, joints and deeper structures, encouraging blood and lymph circulation so you leave feeling relaxed and invigorated.
            </p>
            <ul className="mt-7 grid gap-3">
              {["Increases flexibility", "Relieves muscular & joint tension", "Improves circulation", "Helps balance the body's energy"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-plum-800 dark:text-gray-200"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-400" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="reveal lg:col-span-6">
            <div className="rounded-2xl bg-white p-7 ring-1 ring-plum-100 dark:bg-gray-900 dark:ring-white/10 sm:p-9">
              <h3 className="font-heading text-xl font-bold text-plum-800 dark:text-white">What to know before you arrive</h3>
              <dl className="mt-6 space-y-5">
                {[
                  { Icon: Shirt, dt: "Comfortable clothing", dd: "Traditional Thai massage is done fully clothed, with no oil — loose, comfy clothing is ideal." },
                  { Icon: MessageCircle, dt: "Your comfort leads", dd: "Pressure is always guided by you — let your therapist know any time and they'll adjust." },
                  { Icon: CalendarCheck, dt: "Booking is easy", dd: "A quick call secures your time, and walk-ins are welcome whenever we have space." },
                ].map(({ Icon, dt, dd }) => (
                  <div key={dt} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-plum-700 text-white dark:bg-plum-600"><Icon className="h-5 w-5" /></span>
                    <div>
                      <dt className="font-semibold text-plum-800 dark:text-gray-100">{dt}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-plum-700/90 dark:text-gray-400">{dd}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT US */}
      <section id="visit" className="bg-white py-20 dark:bg-neutral-900 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="reveal lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500 dark:text-plum-300">Find us</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">A Quiet Retreat in Frankston</h2>
            <p className="mt-5 leading-relaxed text-plum-700/90 dark:text-gray-300">
              You'll find us on Nepean Highway, an easy stop on the Mornington Peninsula. Pop in for a treatment between errands, after work, or whenever you need to slow down for an hour.
            </p>
            <ul className="mt-7 space-y-4 text-plum-800 dark:text-gray-200">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-plum-500 dark:text-plum-300" />
                <a href={site.maps} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-medium text-plum-700 hover:text-plum-900 dark:text-plum-200 dark:hover:text-white">
                  <span className="underline decoration-plum-300 underline-offset-2">3/459 Nepean Hwy, Frankston VIC 3199</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-plum-500 dark:text-plum-300" /><a href={`tel:${site.phoneTel}`} className="font-medium hover:text-plum-600 dark:hover:text-white">{site.phoneDisplay}</a></li>
              <li className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-plum-500 dark:text-plum-300" /><span>Mon–Fri 9am–6:00pm · Sat 9am–5:00pm · Sun closed</span></li>
            </ul>
          </div>
          <div className="reveal lg:col-span-5">
            <div className="img-frame aspect-[4/3]">
              <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80" alt="Soft pillows and warm lighting in Layan's relaxing wellness space" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-plum-50 py-20 dark:bg-neutral-800 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="reveal font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl dark:text-white">Come and See Us</h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-lg leading-relaxed text-plum-700/90 dark:text-gray-300">Book a treatment and feel the difference an unhurried hour can make. Send a request, or call us directly.</p>
          <div className="reveal mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/book" className="btn-primary w-full sm:w-auto"><CalendarPlus className="h-5 w-5" /> Book Online</Link>
            <a href={`tel:${site.phoneTel}`} className="btn-secondary w-full sm:w-auto"><Phone className="h-5 w-5" /> Call Now ({site.phoneDisplay})</a>
          </div>
        </div>
      </section>
    </>
  );
}
