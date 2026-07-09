"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarPlus, Phone, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href.startsWith("/") && !href.includes("#") && pathname === href;

  // Shrink the logo and reveal the border/shadow once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/85 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-plum-100/70 shadow-sm" : "border-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "py-2.5" : "py-5"
        }`}
        aria-label="Primary"
      >
        {/* Brand */}
        <Link href="/home" className="flex items-center rounded-lg bg-white p-1.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-plum-300/40" aria-label="Layan Traditional Thai Massage — home">
          <Logo className={`text-plum-900 transition-all duration-300 ${scrolled ? "h-11 sm:h-12" : "h-16 sm:h-20"}`} />
        </Link>

        {/* Everything else: right-aligned, vertically centred */}
        <div className="flex items-center gap-6 lg:gap-8">
          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={
                  isActive(item.href)
                    ? "nav-link font-semibold text-plum-900"
                    : "nav-link"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="hidden items-center gap-2 text-sm font-semibold text-plum-700 transition-colors hover:text-plum-900 md:inline-flex"
            >
              <Phone className="h-4 w-4" /> {site.phoneDisplay}
            </a>
            <Link href="/book" className="btn-primary hidden sm:inline-flex">
              <CalendarPlus className="h-5 w-5" /> Book Online
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className="grid h-10 w-10 place-items-center rounded-xl border border-plum-200 text-plum-700 transition hover:bg-plum-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-plum-300/40 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-plum-100 bg-white px-5 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`py-3 ${i < nav.length - 1 ? "border-b border-plum-100/70" : ""} ${ isActive(item.href) ? "font-semibold text-plum-900" : "text-plum-700" }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3">
            <Link href="/book" onClick={() => setOpen(false)} className="btn-primary w-full">
              <CalendarPlus className="h-5 w-5" /> Book Online
            </Link>
            <a href={`tel:${site.phoneTel}`} onClick={() => setOpen(false)} className="btn-secondary w-full">
              <Phone className="h-5 w-5" /> Call Now ({site.phoneDisplay})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
