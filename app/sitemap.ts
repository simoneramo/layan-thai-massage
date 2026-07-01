import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://layanthaimassage.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Holding-page mode: only the root (holding page) is public. The full site
  // under /home is noindexed, so it is intentionally left out of the sitemap.
  // Restore the full route list once /home is promoted back to the root.
  const routes = [""];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  }));
}
