import type { Metadata } from "next";

import { Resume } from "@/components/resume";
import { DEFAULT_LOCALE, getResumeData } from "@/data/resume-data";

const resumeData = getResumeData(DEFAULT_LOCALE);

export const metadata: Metadata = {
  title: {
    absolute: `${resumeData.name} | ${resumeData.about}`,
  },
  description: resumeData.summary,
};

export default function Page() {
  return <Resume locale={DEFAULT_LOCALE} />;
}
