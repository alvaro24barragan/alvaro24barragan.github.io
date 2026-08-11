import type { MetadataRoute } from "next";

const siteUrl = "https://alvaro24barragan.github.io/profile-preview-a7/";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
