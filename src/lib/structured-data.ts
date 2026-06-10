import { DEFAULT_LOCALE, getResumeData, type Locale } from "@/data/resume-data";

function getResumeUrl(locale: Locale) {
  const suffix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;

  return `${getResumeData(locale).personalWebsiteUrl}/cv${suffix}`;
}

export function generatePersonStructuredData(locale: Locale) {
  const resumeData = getResumeData(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resumeData.name,
    alternateName: resumeData.initials,
    description: resumeData.about,
    url: resumeData.personalWebsiteUrl,
    image: resumeData.avatarUrl,
    sameAs: resumeData.contact.social.map((social) => social.url),
    address: {
      "@type": "Place",
      name: resumeData.location,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: resumeData.contact.email,
      telephone: resumeData.contact.tel,
      contactType: "personal",
    },
    jobTitle: resumeData.work[0]?.title,
    worksFor: resumeData.work[0]
      ? {
          "@type": "Organization",
          name: resumeData.work[0].company,
          url: resumeData.work[0].link,
        }
      : undefined,
    alumniOf: resumeData.education.map((education) => ({
      "@type": "EducationalOrganization",
      name: education.school,
    })),
    hasOccupation: resumeData.work.map((job) => ({
      "@type": "Occupation",
      name: job.title,
      occupationLocation: {
        "@type": "Place",
        name: resumeData.location,
      },
      occupationalCategory: "Software Engineering",
    })),
    knowsAbout: resumeData.skills,
    knowsLanguage: resumeData.languages.map((language) => language.language),
  };
}

export function generateResumeStructuredData(locale: Locale) {
  const resumeData = getResumeData(locale);
  const person = generatePersonStructuredData(locale);

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateModified: new Date().toISOString(),
    inLanguage: locale,
    mainEntity: person,
    about: person,
    name: `${resumeData.name} - CV`,
    description: resumeData.summary,
    url: getResumeUrl(locale),
  };
}
