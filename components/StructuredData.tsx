import { site } from "@/lib/site";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://layanthaimassage.com.au";

/**
 * Schema.org LocalBusiness markup for Layan. Helps Google show the business as a
 * rich result (name, address, hours, rating, price). Rendered once on the home
 * page. Keep the data here in sync with lib/site.ts and lib/booking/config.ts.
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: site.name,
    image: `${baseUrl}/opengraph-image`,
    url: baseUrl,
    telephone: site.phoneDisplay,
    email: site.email,
    priceRange: "$20–$115",
    currenciesAccepted: "AUD",
    sameAs: [site.facebook],
    address: {
      "@type": "PostalAddress",
      streetAddress: "3/459 Nepean Hwy",
      addressLocality: "Frankston",
      addressRegion: "VIC",
      postalCode: "3199",
      addressCountry: "AU",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
