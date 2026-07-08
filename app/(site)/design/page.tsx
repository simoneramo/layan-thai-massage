"use client";

import { Calendar, Check, ChevronRight, Leaf, Sparkles } from "lucide-react";

/* ---- token data (mirrors @theme in globals.css) ---- */
const plum = [
  ["50", "#faf5f8"],
  ["100", "#f3e7ef"],
  ["200", "#e7cfe0"],
  ["300", "#d4aac6"],
  ["400", "#bd7fa8"],
  ["500", "#a3568b"],
  ["600", "#8b3f73"],
  ["700", "#722e5f"],
  ["800", "#5c2650"],
  ["900", "#451d3c"],
] as const;

const jade = [
  ["50", "#ecfdf5"],
  ["100", "#d1fae5"],
  ["200", "#a7f3d0"],
  ["300", "#6ee7b7"],
  ["400", "#34d399"],
  ["500", "#10b981"],
  ["600", "#059669"],
  ["700", "#047857"],
  ["800", "#065f46"],
  ["900", "#064e3b"],
] as const;

const neutrals = [
  ["cream", "#fbf7f5"],
  ["white", "#ffffff"],
] as const;

function Swatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-14 w-full rounded-xl ring-1 ring-black/5"
        style={{ background: hex }}
      />
      <div className="flex items-baseline justify-between gap-2 px-0.5">
        <span className="text-xs font-semibold text-plum-900">
          {name}
        </span>
        <span className="font-mono text-[11px] uppercase text-plum-700/60">
          {hex}
        </span>
      </div>
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-plum-100 py-10">
      <h2 className="font-heading text-2xl font-semibold text-plum-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 max-w-2xl text-sm text-plum-700/70">
          {subtitle}
        </p>
      )}
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-cream text-plum-900">
      <div className="mx-auto max-w-5xl px-5 py-12">
        {/* header */}
        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-plum-700/60">
              Layan Thai Massage
            </p>
            <h1 className="font-heading text-4xl font-bold text-plum-900">
              Design System
            </h1>
            <p className="mt-2 max-w-2xl text-plum-700/80">
              The living source of truth for colour, type, and components. Tokens
              live in{" "}
              <code className="rounded bg-plum-100 px-1.5 py-0.5 font-mono text-sm text-plum-800">
                app/globals.css
              </code>{" "}
              — edit them there and every example below updates.
            </p>
          </div>
        </header>

        {/* colours */}
        <Section
          title="Colour"
          subtitle="Plum is the brand red (CTAs, accents). Jade is the calming green for success and confirmed states. Cream and grays are the surfaces."
        >
          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-plum-800">
                Plum · brand red
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {plum.map(([n, hex]) => (
                  <Swatch key={n} name={`plum-${n}`} hex={hex} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-jade-700">
                Jade · success green
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {jade.map(([n, hex]) => (
                  <Swatch key={n} name={`jade-${n}`} hex={hex} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-plum-800">
                Neutrals · surfaces
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {neutrals.map(([n, hex]) => (
                  <Swatch key={n} name={n} hex={hex} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* typography */}
        <Section
          title="Typography"
          subtitle="Varela Round for everything — friendly and rounded."
        >
          <div className="space-y-3">
            <p className="font-heading text-4xl font-bold">Aa — Heading XL</p>
            <p className="font-heading text-2xl font-semibold">Aa — Heading L</p>
            <p className="text-lg font-medium">Aa — Subheading</p>
            <p className="max-w-2xl text-base text-plum-700/80">
              Body copy. A calm Thai massage studio in Frankston. The quick brown
              fox jumps over the lazy dog — 0123456789.
            </p>
            <p className="text-sm text-plum-700/60">
              Small / muted caption text.
            </p>
          </div>
        </Section>

        {/* buttons */}
        <Section
          title="Buttons"
          subtitle="Primary is reserved for Book Now. Secondary is the subordinate ghost."
        >
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-primary">
              <Calendar className="h-5 w-5" /> Book Now
            </button>
            <button className="btn-secondary">Learn more</button>
          </div>
        </Section>

        {/* pills & chips */}
        <Section
          title="Pills & chips"
          subtitle="Plum pill for prices. The new jade pill marks confirmed selections (used in the booking flow). Chips are navigation."
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="pill">$90 · 60 min</span>
            <span className="pill-success">
              <Check className="h-3.5 w-3.5" /> Tuesday 9 Jun · 12:30
            </span>
            <a className="chip" href="#">
              Foot massage <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </Section>

        {/* status & availability */}
        <Section
          title="Status & availability"
          subtitle="Jade signals positive, live, or available states. Plum stays the brand voice; jade is the calm accent beside it."
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-jade">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-jade-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-jade-500" />
              </span>
              Open now
            </span>
            <span className="badge badge-jade">
              <Check className="h-3.5 w-3.5" /> Available today
            </span>
            <span className="badge badge-jade">
              <Sparkles className="h-3.5 w-3.5" /> Most popular
            </span>
            <span className="badge badge-plum">Closed Sundays</span>
            <span className="text-sm font-medium text-jade-700">
              3 spots left today
            </span>
          </div>
        </Section>

        {/* notices */}
        <Section
          title="Notices"
          subtitle="Confirmation and positive feedback banners."
        >
          <div className="max-w-2xl space-y-3">
            <div className="notice-success">
              <Check className="mt-0.5 h-5 w-5 flex-none text-jade-600" />
              <div>
                <p className="font-semibold">You&apos;re booked in.</p>
                <p className="mt-0.5 text-jade-700/80">
                  Traditional Thai Massage · Tuesday 9 Jun · 12:30. A confirmation
                  is on its way to your inbox.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* feature list */}
        <Section
          title="Feature list"
          subtitle="Benefit / inclusion lists use jade check icons as the accent."
        >
          <ul className="grid max-w-xl gap-2.5 sm:grid-cols-2">
            {[
              "Qualified Thai therapists",
              "Hot towels included",
              "Walk-ins welcome",
              "Gift vouchers available",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm">
                <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-jade-100 text-jade-700">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* accent buttons */}
        <Section
          title="Actions"
          subtitle="Primary stays plum (reserved for Book Now). Jade is a tertiary action for positive, low-stakes choices."
        >
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-primary">
              <Calendar className="h-5 w-5" /> Book Now
            </button>
            <button className="btn-secondary">Learn more</button>
            <button className="btn-jade">
              <Leaf className="h-5 w-5" /> View treatments
            </button>
          </div>
        </Section>

        {/* surfaces */}
        <Section
          title="Surfaces"
          subtitle="The level-1 card used across the site, including a jade-accented service card."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card p-6">
              <h3 className="font-heading text-lg font-semibold">Card title</h3>
              <p className="mt-1 text-sm text-plum-700/80">
                A surface that floats on the cream background with a soft plum
                ring.
              </p>
            </div>
            {/* service card with jade accent */}
            <div className="card relative p-6">
              <span className="badge badge-jade absolute right-4 top-4">
                <Sparkles className="h-3.5 w-3.5" /> Popular
              </span>
              <h3 className="font-heading text-lg font-semibold">
                Traditional Thai Massage
              </h3>
              <p className="mt-1 text-sm text-plum-700/80">
                Deep, rhythmic pressure and assisted stretching to release
                tension.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="pill">$90 · 60 min</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-jade-700">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-jade-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-jade-500" />
                  </span>
                  Available today
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* forms */}
        <Section title="Form fields" subtitle="Used on contact and booking forms.">
          <div className="grid max-w-md gap-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold">
                Full name
              </span>
              <input className="field" placeholder="Jane Doe" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold">Email</span>
              <input
                className="field"
                type="email"
                placeholder="jane@example.com"
              />
            </label>
          </div>
        </Section>
      </div>
    </div>
  );
}
