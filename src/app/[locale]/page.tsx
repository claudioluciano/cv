import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Resume } from "@/components/resume";
import { getResumeData, isLocale, LOCALES } from "@/data/resume-data";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.locale)) {
    return {};
  }

  const resumeData = getResumeData(resolvedParams.locale);

  return {
    title: {
      absolute: `${resumeData.name} | ${resumeData.about}`,
    },
    description: resumeData.summary,
    openGraph: {
      title: `${resumeData.name} | ${resumeData.about}`,
      description: resumeData.summary,
      type: "profile",
      locale: resolvedParams.locale === "pt" ? "pt_PT" : "en_US",
    },
    twitter: {
      card: "summary",
      title: `${resumeData.name} | ${resumeData.about}`,
      description: resumeData.summary,
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  return <Resume locale={resolvedParams.locale} />;
}
