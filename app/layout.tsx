import type { Metadata } from "next";
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

// Set theme before paint to avoid a flash of the wrong mode
const themeScript = `(function(){try{var m=localStorage.getItem('theme')||'auto';var d=m==='dark'||(m==='auto'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={varelaRound.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-white font-sans text-plum-900 antialiased dark:bg-gray-900 dark:text-gray-200">
        {children}
      </body>
    </html>
  );
}
