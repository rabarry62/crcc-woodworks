import type { MetadataRoute } from "next";

/*
  Generates /robots.txt at build time.
  Allows all crawlers and points them to the sitemap.
*/
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://crccwoodworks.ca/sitemap.xml",
  };
}
