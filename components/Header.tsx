"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flower2, CalendarHeart, Phone, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href.startsWith("/") && !href.includes("#") && pathname === href;

  return (
    <header className="sticky top-0 z-40 border-b border-plum-100/70 bg-cream/85 backdrop-blur-md dark:border-white/10 dark:bg-gray-900/85">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Primary">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 focus:outline-none" aria-label="Layan Traditional Thai Massage — home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-plum-700 text-white shadow-sm dark:bg-plum-600">
            <Flower2 className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-base font-extrabold tracking-tight text-plum-800 dark:text-white">Layan</span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-plum-500 dark:text-plum-300">Traditional Thai Massage</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={
                isActive(item.href)
                  ? "nav-link font-semibold text-plum-900 dark:text-white"
                  : "nav-link"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            <CalendarHeart className="h-5 w-5" /> Book Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-plum-200 text-plum-700 transition hover:bg-plum-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-plum-300/40 lg:hidden dark:border-white/15 dark:text-gray-200 dark:hover:bg-white/5"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-plum-100 bg-cream px-5 pb-6 pt-2 lg:hidden dark:border-white/10 dark:bg-gray-900">
          <div className="flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`py-3 ${i < nav.length - 1 ? "border-b border-plum-100/70 dark:border-white/10" : ""} ${
                  isActive(item.href)
                    ? "font-semibold text-plum-900 dark:text-white"
                    : "text-plum-700 dark:text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">
              <CalendarHeart className="h-5 w-5" /> Book Now
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
