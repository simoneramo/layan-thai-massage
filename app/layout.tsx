import type { Metadata } from "next";
import "./globals.css";
import { varelaRound } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MessengerButton from "@/components/MessengerButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://layanthaimassage.com.au"),
  title: {
    default: "Layan Traditional Thai Massage — Frankston, Melbourne",
    template: "%s — Layan Traditional Thai Massage",
  },
  description:
    "Calm, restorative Thai massage in Frankston, Melbourne. Traditional Thai, essential oil, foot reflexology, back, neck and head treatments. Book your unwind — 0451 250 064.",
  openGraph: {
    type: "website",
    siteName: "Layan Traditional Thai Massage",
    locale: "en_AU",
  },
};

// Set theme before paint to avoid a flash of the wrong mode
const themeScript = `(function(){try{var m=localStorage.getItem('theme')||'auto';var d=m==='dark'||(m==='auto'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={varelaRound.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-cream font-sans text-plum-900 antialiased dark:bg-gray-900 dark:text-gray-200">
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
      </body>
    </html>
  );
}
