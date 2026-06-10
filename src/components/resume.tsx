import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { Avatar } from "@/components/avatar";
import { CommandMenu } from "@/components/command-menu";
import { HtmlLang } from "@/components/html-lang";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getResumeData, LOCALES, type Locale } from "@/data/resume-data";
import { generateResumeStructuredData } from "@/lib/structured-data";

interface ResumeProps {
  locale: Locale;
}

export function Resume({ locale }: ResumeProps) {
  const resumeData = getResumeData(locale);
  const structuredData = generateResumeStructuredData(locale);

  return (
    <>
      <HtmlLang locale={locale} />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from local resume data.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main
        className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16"
        id="main-content"
      >
        <section
          className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6"
          aria-label="Resume content"
        >
          <div className="flex items-center justify-between gap-6">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{resumeData.name}</h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
                {resumeData.about}
              </p>
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={resumeData.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlobeIcon className="h-3 w-3" aria-hidden="true" />
                  {resumeData.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {resumeData.contact.email ? (
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={`mailto:${resumeData.contact.email}`}
                      aria-label="Email"
                    >
                      <MailIcon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                ) : null}
                {resumeData.contact.tel ? (
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={`tel:${resumeData.contact.tel}`}
                      aria-label="Phone"
                    >
                      <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                ) : null}
                {resumeData.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={social.url}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                ))}
                <nav
                  aria-label="Language"
                  className="ml-1 inline-flex rounded-md border bg-white p-0.5 shadow-sm"
                >
                  {LOCALES.map((availableLocale) => (
                    <Button
                      key={availableLocale}
                      asChild
                      className="h-7 px-2.5 text-xs"
                      size="sm"
                      variant={availableLocale === locale ? "default" : "ghost"}
                    >
                      <Link href={`/${availableLocale}`}>
                        {availableLocale.toUpperCase()}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </div>
              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
                {resumeData.contact.email ? (
                  <a href={`mailto:${resumeData.contact.email}`}>
                    <span className="underline">
                      {resumeData.contact.email}
                    </span>
                  </a>
                ) : null}
                {resumeData.contact.tel ? (
                  <a href={`tel:${resumeData.contact.tel}`}>
                    <span className="underline">{resumeData.contact.tel}</span>
                  </a>
                ) : null}
              </div>
            </div>

            <Avatar
              alt={resumeData.name}
              className="h-28 w-28 ring-1 ring-muted"
              fallback={resumeData.initials}
              src={resumeData.avatarUrl}
            />
          </div>
          <Section className="animate-fade-in">
            <h2 className="text-xl font-bold">{resumeData.labels.about}</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground">
              {resumeData.summary}
            </p>
          </Section>
          <Section className="animate-fade-in">
            <h2 className="text-xl font-bold">
              {resumeData.labels.workExperience}
            </h2>
            {resumeData.work.map((work) => {
              return (
                <Card key={work.company}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>

                        <span className="inline-flex gap-x-1">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {work.start} - {work.end}
                      </div>
                    </div>

                    <h4 className="font-mono text-sm leading-none">
                      {work.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs">
                    {work.description}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
          <Section className="animate-fade-in">
            <h2 className="text-xl font-bold">{resumeData.labels.education}</h2>
            {resumeData.education.map((education) => {
              return (
                <Card key={education.school}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="font-semibold leading-none">
                        {education.school}
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2">{education.degree}</CardContent>
                </Card>
              );
            })}
          </Section>
          <Section className="animate-fade-in">
            <h2 className="text-xl font-bold">{resumeData.labels.skills}</h2>
            <div className="flex flex-wrap gap-1">
              {resumeData.skills.map((skill) => {
                return <Badge key={skill}>{skill}</Badge>;
              })}
            </div>
          </Section>

          {resumeData.projects.length > 0 ? (
            <Section className="print-force-new-page scroll-mb-16">
              <h2 className="text-xl font-bold">
                {resumeData.labels.projects}
              </h2>
              <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                {resumeData.projects.map((project) => {
                  return (
                    <ProjectCard
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      tags={project.techStack}
                      link={"link" in project ? project.link?.href : undefined}
                    />
                  );
                })}
              </div>
            </Section>
          ) : null}
        </section>

        <CommandMenu
          labels={resumeData.labels}
          links={[
            {
              url: resumeData.personalWebsiteUrl,
              title: resumeData.labels.personalWebsite,
            },
            ...resumeData.contact.social.map((socialMediaLink) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name,
            })),
          ]}
        />
      </main>
    </>
  );
}
