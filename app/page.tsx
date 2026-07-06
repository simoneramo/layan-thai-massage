import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Layan Traditional Thai Massage — Frankston, Melbourne",
  description:
    "Authentic Thai massage in Frankston, Melbourne. Our new website is on its way — call 0451 250 064 to book your visit.",
};

export default function HoldingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cream px-6 py-16 text-center dark:bg-neutral-900">

      <div className="relative flex w-full max-w-3xl flex-col items-center">
        <Image
          src="/layan-logo.jpg"
          alt="Layan Traditional Thai Massage"
          width={630}
          height={320}
          priority
          className="h-24 w-auto rounded-2xl bg-cream p-2 shadow-sm dark:bg-white/5 sm:h-28"
        />

        <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-plum-100 px-4 py-1.5 text-sm font-medium text-plum-700 dark:bg-white/10 dark:text-plum-200">
          <MapPin className="h-4 w-4" /> Frankston, Melbourne 3199
        </span>

        <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-plum-900 dark:text-white sm:text-5xl">
          Our new website is on its way
        </h1>

        <p className="mt-5 max-w-lg text-lg leading-relaxed text-plum-700/90 dark:text-gray-300">
          Authentic, unhurried Thai massage in the heart of Frankston. We&apos;re
          putting the finishing touches on our new site — in the meantime,
          we&apos;d love to welcome you in.
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <a href={`tel:${site.phoneTel}`} className="btn-primary w-full sm:w-auto">
            <Phone className="h-5 w-5" /> Call to Book ({site.phoneDisplay})
          </a>
          <a
            href={site.maps}
            target="_blank"
            rel="noopener"
            className="btn-secondary w-full sm:w-auto"
          >
            <MapPin className="h-5 w-5" /> Get Directions
          </a>
        </div>

        <dl className="mt-12 grid w-full gap-6 text-left sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-plum-500 dark:text-plum-300" />
            <div>
              <dt className="text-sm font-semibold text-plum-800 dark:text-white">Visit us</dt>
              <dd className="mt-1 text-sm text-plum-700/90 dark:text-gray-400">{site.address}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-plum-500 dark:text-plum-300" />
            <div>
              <dt className="text-sm font-semibold text-plum-800 dark:text-white">Opening hours</dt>
              <dd className="mt-1 text-sm text-plum-700/90 dark:text-gray-400">
                Mon–Fri 9am–6pm · Sat 9am–5pm · Sun closed
              </dd>
            </div>
          </div>
        </dl>

        <p className="mt-12 text-xs text-plum-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Layan Traditional Thai Massage · Frankston, Melbourne
        </p>
      </div>
    </main>
  );
}
