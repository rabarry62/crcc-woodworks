import type { MetadataRoute } from "next";

/*
  Generates /sitemap.xml at build time.
  This is a one-page site, so the sitemap just lists the homepage.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://crccwoodworks.ca",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
