import type { MetadataRoute } from "next";

import { buildAbsoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: buildAbsoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: buildAbsoluteUrl("/gallery"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];
}
