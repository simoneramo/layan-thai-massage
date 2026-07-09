import Image from "next/image";
import Link from "next/link";
import {
  MapPin, CalendarPlus, Phone, Leaf, Clock, HeartHandshake,
  CheckCircle2, Waves, HeartPulse, Move, Activity, MoonStar, Sparkles,
  Star, StarHalf, ArrowRight, ArrowUpRight, Mail, Camera,
} from "lucide-react";
import { site } from "@/lib/site";
import FaqItem from "@/components/FaqItem";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      {/* ===== HERO ===== */}
      <section id="home" className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-6 md:py-20 lg:grid-cols-12 lg:gap-10 lg:px-8">
          <div className="lg:col-span-7">
            <span className="hero-anim inline-flex items-center gap-2 text-sm font-medium text-plum-700">
              <MapPin className="h-4 w-4" /> Frankston, Melbourne 3199
            </span>
            <h1 className="hero-anim d1 mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-plum-900 sm:text-5xl">
              Unwind, Restore, Breathe Again
            </h1>
            <p className="hero-anim d1 mt-5 max-w-xl text-lg leading-relaxed text-plum-700/90">
              Authentic Thai massage in the heart of Frankston. Gentle hands, quiet rooms, and time set aside just for you — so tension melts and calm returns.
            </p>
            <div className="hero-anim d2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/book" className="btn-primary w-full sm:w-auto">
                <CalendarPlus className="h-5 w-5" /> Book Online
              </Link>
            </div>
            <div className="hero-anim d2 mt-6 flex items-center gap-2.5">
              <span className="flex text-amber-400" aria-hidden="true">
                <Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><StarHalf className="h-5 w-5 fill-current" />
              </span>
              <span className="text-sm text-plum-700"><span className="font-bold text-plum-900">4.5</span> · 24 Google reviews</span>
            </div>
            <ul className="hero-anim d3 mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-plum-700">
              <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-emerald-500" /> Qualified therapists</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-amber-500" /> Open six days</li>
              <li className="flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-sky-500" /> Walk-ins welcome</li>
            </ul>
          </div>
          <div className="hero-anim d2 lg:col-span-5">
            <div className="img-frame aspect-[16/10] lg:aspect-[4/5]">
              <Image src="/layan-thai-massage-room.jpg" alt="A treatment room at Layan: a massage table dressed in traditional Thai patterned fabric with folded towels, beside a window with potted plants and soft daylight" fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="bg-plum-800">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div className="reveal">
              <p className="font-heading text-3xl font-extrabold text-white sm:text-4xl">4.5<span className="text-plum-300">★</span></p>
              <p className="mt-1 text-sm text-plum-200">Average Google rating</p>
            </div>
            <div className="reveal">
              <p className="font-heading text-3xl font-extrabold text-white sm:text-4xl">24</p>
              <p className="mt-1 text-sm text-plum-200">Google reviews</p>
            </div>
            <div className="reveal">
              <p className="font-heading text-3xl font-extrabold text-white sm:text-4xl">6<span className="text-plum-300"> days</span></p>
              <p className="mt-1 text-sm text-plum-200">Open Mon to Sat</p>
            </div>
            <div className="reveal">
              <p className="font-heading text-3xl font-extrabold text-white sm:text-4xl">100<span className="text-plum-300">%</span></p>
              <p className="mt-1 text-sm text-plum-200">Natural oils &amp; care</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500">Our treatments</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl">
              Massage Therapies for Every Need
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-plum-700/90">
              Traditional techniques, unhurried and tailored to you — choose the treatment that best fits what your body needs today.
            </p>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Traditional Thai Massage", img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80", alt: "Therapist performing a traditional clothed Thai massage stretch", desc: "Fully clothed, no oil. Firm palm-and-thumb pressure with assisted stretching to relax muscles, improve circulation and lift your energy. Ideal for sport or work-related pain.", prices: ["60 min · $75", "90 min · $115"] },
              { title: "Essential Oil Massage", img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80", alt: "Warm essential oils and a lit candle in a calm massage room", desc: "An ancient Thai remedy using the healing warmth of essential oils to stimulate blood flow, soothe sore and tired muscles, and leave the whole body calm and relaxed.", prices: ["60 min · $75"] },
              { title: "Thai Foot Massage & Reflexology", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80", alt: "Relaxing foot massage and reflexology treatment", desc: "Gentle, precise pressure on points across the feet and lower legs to improve circulation and release the tension you carry with every step.", prices: ["30 min · $40", "60 min · $65"] },
              { title: "Full Back Massage", img: null, alt: "Full back massage treatment", desc: "Focused relief for the lower back and neck, including sciatica — firm, targeted pressure right where you hold the most tension.", prices: ["30 min · $45"] },
              { title: "Shoulder & Neck Massage", img: null, alt: "Shoulder and neck massage treatment", desc: "Targeted work to ease stiffness and soreness through the shoulders and neck — ideal for desk, screen and everyday tension.", prices: ["30 min · $40"] },
              { title: "Head Massage", img: null, alt: "Head massage treatment", desc: "Gentle pressure-point work across the head, neck and face to relieve tension headaches and quiet a busy mind.", prices: ["15 min · $20"] },
            ].map((s) => (
              <article key={s.title} className="reveal card flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-lg">
                <div className="img-frame aspect-[4/3] rounded-none rounded-t-2xl ring-0">
                  {s.img ? (
                    <Image src={s.img} alt={s.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-plum-50 text-plum-400">
                      <Camera className="h-8 w-8" strokeWidth={1.5} />
                      <span className="text-xs font-medium">Photo coming soon</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold text-plum-800">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-plum-700/90">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.prices.map((p) => (
                      <span key={p} className="rounded-full bg-plum-100 px-3 py-1 text-sm font-semibold text-plum-700">{p}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal mt-10 flex justify-center">
            <Link href="/services" className="inline-flex items-center gap-1.5 font-semibold text-plum-700 underline decoration-plum-300 underline-offset-4 transition-colors hover:text-plum-900 focus:outline-none focus-visible:text-plum-900">
              See all treatments &amp; pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="bg-plum-50 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="reveal order-2 lg:order-1 lg:col-span-5">
            <div className="img-frame aspect-[4/5]">
              <Image src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80" alt="Smooth stones, soft towels and flowers arranged in a serene Thai massage room" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="reveal order-1 lg:order-2 lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500">Our practice</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl">
              Rooted in an Ancient Healing Art
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-plum-700/90">
              Traditional Thai massage draws on yoga, Ayurvedic medicine and Buddhist practice — rhythmic pressure, gentle stretching and quiet breath that bring body, mind and spirit back into balance.
            </p>
            <p className="mt-4 leading-relaxed text-plum-700/80">
              Every session begins with a moment of calm and care. There is never a suggestion of haste — one movement melts into the next, and time is set aside entirely for you.
            </p>
            <ul className="mt-7 grid gap-3">
              {["Qualified, caring therapists", "Quiet, private treatment rooms", "Natural oils & warm towels", "Tailored to your body, every time"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-plum-800"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" /> {t}</li>
              ))}
            </ul>
            <div className="mt-9">
              <Link href="/book" className="btn-primary w-full sm:w-auto"><CalendarPlus className="h-5 w-5" /> Book Online</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500">The benefits</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl">
              How Thai Massage Helps You
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-plum-700/90">
              More than muscle relief — Thai massage works on circulation and energy lines to support how your whole body feels.
            </p>
          </div>
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Waves, title: "Eases Stress & Tension", desc: "Slow, rhythmic pressure quiets a busy mind and lets tight muscles soften and let go." },
              { Icon: HeartPulse, title: "Improves Circulation", desc: "Pressure-point work and stretching encourage healthy blood flow and help clear tired tissues." },
              { Icon: Move, title: "Restores Flexibility", desc: "Assisted, yoga-like stretches gently open the joints and bring back a freer range of movement." },
              { Icon: Activity, title: "Soothes Aches & Injuries", desc: "A trusted way to ease back pain, stiff necks, sore shoulders and everyday sports strain." },
              { Icon: MoonStar, title: "Deeper, Calmer Sleep", desc: "Many leave feeling settled and unwound — the kind of calm that carries into a restful night." },
              { Icon: Sparkles, title: "Lifts Your Energy", desc: "Balancing the body's energy lines leaves you feeling relaxed yet invigorated, not drowsy." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="reveal">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-plum-100 text-plum-700"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-4 font-heading text-lg font-bold text-plum-800">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-700/90">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery" className="bg-plum-900 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-300">Our space</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A Calm, Quiet Retreat
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-plum-200/90">
              Soft light, warm towels and the gentle scent of essential oils — a small escape in the middle of Frankston.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            <div className="reveal img-frame aspect-[3/4] ring-0 lg:row-span-2">
              <Image src="https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=700&q=80" alt="Massage oils and fresh herbs laid out for an aromatherapy treatment" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="reveal img-frame aspect-[4/3] ring-0">
              <Image src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80" alt="Lit candles and rolled towels in a softly lit spa" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="reveal img-frame aspect-[4/3] ring-0">
              <Image src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=700&q=80" alt="Neatly folded towels and a single flower on a treatment bed" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="reveal img-frame aspect-[4/3] ring-0 sm:col-span-2">
              <Image src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80" alt="A peaceful, tidy massage room ready for a guest" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="reveal img-frame aspect-[3/4] ring-0">
              <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80" alt="Soft pillows and warm lighting in a relaxing wellness space" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="reviews" className="bg-plum-50 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500">Kind words</span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl">
                Loved by Frankston Locals
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-sm ring-1 ring-plum-100">
              <span className="font-heading text-3xl font-extrabold text-plum-800">4.5</span>
              <span className="leading-tight">
                <span className="flex text-amber-400" aria-hidden="true">
                  <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><StarHalf className="h-4 w-4 fill-current" />
                </span>
                <span className="text-sm text-plum-600">24 Google reviews</span>
              </span>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { initials: "CN", name: "Chris Nichols", meta: "Local Guide · 90-min session", quote: "The best massage I've had in a while — very thorough and polite, and targeted all the right areas. Came in as a walk-in and so glad I did." },
              { initials: "MA", name: "Matias Aquino", meta: "Local Guide", quote: "Hands down one of the best massages I've ever had. Precise, honest and great value. Will be a weekly occurrence — thank you very much." },
              { initials: "JG", name: "Joanne Garan", meta: "Essential oil regular", quote: "The best massage place. I always book the essential oil massage — it's relaxing, and the ladies smooth out all my aches and pains. I always walk away feeling great." },
              { initials: "KL", name: "Kristian Lambrecht", meta: "Google review", quote: "The girls are happy and friendly, and made me feel comfortable. Left feeling brand new. If you work hard, give yourself a treat — you won't regret it." },
              { initials: "SD", name: "Steven Davey", meta: "Local Guide", quote: "Best Thai massage on the Peninsula. Very welcoming and professional staff." },
              { initials: "SW", name: "Shae Wheeler", meta: "Local Guide · recent visit", quote: "Brilliant, relaxing and technically talented." },
            ].map((r) => (
              <figure key={r.name} className="reveal card flex flex-col p-6">
                <span className="mb-4 flex text-amber-400" aria-label="Rated 5 out of 5 stars">
                  <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
                </span>
                <blockquote className="flex-1 leading-relaxed text-plum-800">{r.quote}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-plum-700 text-sm font-bold text-white">{r.initials}</span>
                  <span>
                    <span className="block font-semibold text-plum-800">{r.name}</span>
                    <span className="block text-xs text-plum-500">{r.meta}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="reveal lg:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500">Good to know</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl">
              Your Questions, Answered
            </h2>
            <p className="mt-4 leading-relaxed text-plum-700/90">
              New to Thai massage? Here's what to expect. For anything else, just give us a call — or see the <Link href="/faq" className="font-semibold text-plum-700 underline decoration-plum-300 underline-offset-2 hover:text-plum-900">full FAQ</Link>.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-8">
            <FaqItem question="Do I need to book, or can I walk in?" defaultOpen>
              Walk-ins are warmly welcome when we have space, but a quick call to <a href={`tel:${site.phoneTel}`} className="font-semibold text-plum-700 underline decoration-plum-300 underline-offset-2 hover:text-plum-900">{site.phoneDisplay}</a> is the surest way to reserve your preferred time.
            </FaqItem>
            <FaqItem question="What should I wear, and is oil used?">
              Traditional Thai massage is done fully clothed with no oil — loose, comfortable clothing is ideal. Our Essential Oil and Foot treatments do use warm oils, and we'll have everything ready for you.
            </FaqItem>
            <FaqItem question="Is Thai massage painful?">
              It shouldn't be. Pressure is firm but always guided by your comfort — just let your therapist know, and they'll adjust. Most guests leave feeling deeply relaxed and refreshed.
            </FaqItem>
            <FaqItem question="How long are sessions, and what do they cost?">
              Treatments run from a 15-minute head massage ($20) to a 90-minute traditional session ($115). Full pricing is on the <Link href="/services" className="font-semibold text-plum-700 underline decoration-plum-300 underline-offset-2 hover:text-plum-900">treatments page</Link>.
            </FaqItem>
            <FaqItem question="Where are you, and when are you open?">
              You'll find us at 3/459 Nepean Hwy, Frankston VIC 3199. We're open Mon–Fri 9am–6:00pm and Sat 9am–5:00pm; closed Sundays.
            </FaqItem>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="bg-plum-50 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-500">Get in touch</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl">
              We&apos;d Love to Hear From You
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-plum-700/90">
              Send us a message with any questions and we&apos;ll get back to you soon. To book a treatment, just give us a call.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <aside className="reveal lg:col-span-5">
              <div className="flex h-full flex-col gap-6 rounded-2xl bg-plum-800 p-7 text-plum-100 shadow-sm sm:p-8">
                <h3 className="font-heading text-xl font-bold text-white">Visit Layan</h3>
                <ul className="flex flex-col gap-5 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-plum-300" />
                    <span>3/459 Nepean Hwy<br />Frankston VIC 3199
                      <a href={site.maps} target="_blank" rel="noopener" className="mt-1 flex w-fit items-center gap-1 font-medium text-white underline decoration-plum-400 underline-offset-2 hover:text-plum-200">Get directions <ArrowUpRight className="h-3.5 w-3.5" /></a>
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
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
