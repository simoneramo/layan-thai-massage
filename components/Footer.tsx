import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}
import { site } from "@/lib/site";

const footerLinks = [
  { label: "Treatments", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/home#gallery" },
  { label: "Reviews", href: "/home#reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-plum-900 text-plum-200">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/layan-logo.jpg"
              alt="Layan Traditional Thai Massage"
              width={630}
              height={320}
              className="h-16 w-auto rounded-xl bg-cream p-2"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-plum-300">
              Authentic, unhurried Thai massage in Frankston — qualified therapists, quiet rooms, and time set aside just for you.
            </p>
            <a href={site.facebook} target="_blank" rel="noopener" aria-label="Layan Traditional Thai Massage on Facebook" className="mt-5 inline-flex items-center text-white hover:text-plum-200">
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-plum-300 transition-colors hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Visit us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-plum-400" /><span>{site.address}</span></li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-plum-400" /><a href={`tel:${site.phoneTel}`} className="hover:text-white">{site.phoneDisplay}</a></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-plum-400" /><a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a></li>
              <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-plum-400" /><span>Mon–Fri 9–6 · Sat 9–5 · Sun closed</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-plum-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Layan Traditional Thai Massage. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
