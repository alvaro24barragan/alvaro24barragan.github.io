import type { MetadataRoute } from "next";

const siteUrl = "https://alvaro24barragan.github.io/profile-preview-a7/";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}sitemap.xml`,
    host: siteUrl,
  };
}
