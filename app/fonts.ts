import localFont from "next/font/local";

// Self-hosted Varela Round (from @fontsource/varela-round, copied into /fonts)
export const varelaRound = localFont({
  src: [
    {
      path: "../fonts/varela-round-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/varela-round-latin-ext-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-varela",
  display: "swap",
});
