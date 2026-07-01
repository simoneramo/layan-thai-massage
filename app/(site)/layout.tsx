import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MessengerButton from "@/components/MessengerButton";
import ScrollReveal from "@/components/ScrollReveal";

// While the site is in "holding page" mode, keep the full site out of search
// engines. Remove this once /home is promoted back to the root.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-red-800 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <MessengerButton />
      <Footer />
      <ScrollReveal />
    </>
  );
}
