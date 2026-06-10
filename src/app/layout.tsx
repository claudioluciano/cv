import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import "./globals.css";
import type React from "react";
import { DEFAULT_LOCALE, getResumeData, isLocale } from "@/data/resume-data";

const resumeData = getResumeData(DEFAULT_LOCALE);

export const metadata: Metadata = {
  metadataBase: new URL(resumeData.personalWebsiteUrl),
  title: {
    default: `${resumeData.name} | ${resumeData.about}`,
    template: `%s | ${resumeData.name}`,
  },
  description: resumeData.summary,
  keywords: [
    "resume",
    "cv",
    "portfolio",
    resumeData.name,
    "software engineer",
    "golang",
    "microservices",
    "distributed systems",
  ],
  authors: [{ name: resumeData.name }],
  creator: resumeData.name,
  publisher: resumeData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "/cv",
    siteName: `${resumeData.name} CV`,
    title: `${resumeData.name} | ${resumeData.about}`,
    description: resumeData.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary",
    title: `${resumeData.name} | ${resumeData.about}`,
    description: resumeData.summary,
  },
  alternates: {
    canonical: "/cv",
    languages: {
      pt: "/cv/pt",
      en: "/cv/en",
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: Promise<{
    locale?: string;
  }>;
}) {
  const resolvedParams = await params;
  const locale = isLocale(resolvedParams?.locale)
    ? resolvedParams.locale
    : DEFAULT_LOCALE;

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
