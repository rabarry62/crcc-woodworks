import type { MetadataRoute } from "next";

/*
  Generates /sitemap.xml at build time.
  Homepage is the primary page; privacy-policy is a secondary,
  lower-priority page that still needs to be indexable.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://crccwoodworks.ca",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://crccwoodworks.ca/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
