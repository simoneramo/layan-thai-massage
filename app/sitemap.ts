import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://layanthaimassage.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/services",
    "/about",
    "/faq",
    "/contact",
    "/book",
    "/privacy",
    "/terms",
  ];
  const legal = ["/privacy", "/terms"];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/book" ? 0.9 : legal.includes(path) ? 0.3 : 0.7,
  }));
}
