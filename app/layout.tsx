import type { Metadata, Viewport } from "next";
import "./globals.css";
import { varelaRound } from "./fonts";

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

// The site is light-mode only. Declaring it stops browsers from auto-darkening
// form controls and scrollbars for visitors whose OS is set to dark.
export const viewport: Viewport = {
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={varelaRound.variable}>
      <body className="bg-white font-sans text-plum-900 antialiased">
        {children}
      </body>
    </html>
  );
}
