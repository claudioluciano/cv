import type { MetadataRoute } from "next";

import { DEFAULT_LOCALE, getResumeData, LOCALES } from "@/data/resume-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const resumeData = getResumeData(DEFAULT_LOCALE);
  const baseUrl = `${resumeData.personalWebsiteUrl}/cv`;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...LOCALES.map((locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: locale === DEFAULT_LOCALE ? 0.9 : 0.8,
    })),
  ];
}
