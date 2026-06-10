import type { ComponentType } from "react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const LOCALES = ["pt", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pt";

type SocialLink = {
  name: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
};

type ResumeLabels = {
  about: string;
  workExperience: string;
  education: string;
  skills: string;
  languages: string;
  projects: string;
  personalWebsite: string;
  actions: string;
  links: string;
  print: string;
  noResults: string;
  searchPlaceholder: string;
  commandHintPrefix: string;
  commandHintSuffix: string;
};

type ResumeCommonData = {
  personalWebsiteUrl: string;
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  avatarUrl: string;
  contact: {
    email: string;
    tel: string;
    social: SocialLink[];
  };
};

type ResumeLocaleData = {
  about: string;
  summary: string;
  labels: ResumeLabels;
  education: {
    school: string;
    degree: string;
    start: string;
    end: string;
  }[];
  work: {
    title: string;
    company: string;
    badges: string[];
    start: string;
    end: string;
    description?: string;
    highlights?: string[];
    link?: string;
  }[];
  skills: string[];
  languages: {
    language: string;
    fluency: string;
  }[];
  projects: {
    title: string;
    description: string;
    link?: {
      href: string;
    };
    techStack: string[];
  }[];
};

export type ResumeData = ResumeCommonData & ResumeLocaleData;

const COMMON_RESUME_DATA: ResumeCommonData = {
  personalWebsiteUrl: "https://claudioluciano.dev",
  name: "Claudio Luciano",
  initials: "CL",
  location: "Porto, Portugal",
  locationLink: "https://www.google.com/maps/place/Porto",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4E03AQHry9_keSqfUA/profile-displayphoto-scale_400_400/B4EZ6yTVyPKoAk-/0/1781107877326?e=1782950400&v=beta&t=hx4pFK4bbZ0poSVNh8_nfMao9WGasz36CwWkkCWadC4",
  contact: {
    email: "claudio_luciano@live.com",
    tel: "+351 916 448 661",
    social: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/claudioluciano",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/claudioluciano",
        icon: GitHubIcon,
      },
    ],
  },
};

const RESUME_LOCALE_DATA: Record<Locale, ResumeLocaleData> = {
  pt: {
    about:
      "Senior Software Engineer especializado em Golang, microsserviços e sistemas distribuídos.",
    summary:
      "Senior Software Engineer com mais de 8 anos de experiência na criação de produtos e plataformas distribuídas em times remotos, internacionais e cross-functional. Forte atuação em Golang, arquitetura de microsserviços, gRPC, Kafka, cloud, observabilidade e testes automatizados. Tenho experiência em domínios como varejo, pagamentos, compliance, governo digital e atendimento automatizado, sempre com foco em confiabilidade, manutenção evolutiva e entrega de valor técnico para o negócio.",
    labels: {
      about: "Sobre",
      workExperience: "Experiência Profissional",
      education: "Formação",
      skills: "Competências",
      languages: "Idiomas",
      projects: "Projetos",
      personalWebsite: "Site pessoal",
      actions: "Ações",
      links: "Links",
      print: "Imprimir",
      noResults: "Nenhum resultado encontrado.",
      searchPlaceholder: "Digite um comando ou pesquise...",
      commandHintPrefix: "Pressione",
      commandHintSuffix: "para abrir o menu de comandos",
    },
    education: [
      {
        school: "Estácio",
        degree:
          "Análise e Desenvolvimento de Sistemas, Tecnologia da Informação",
        start: "2018",
        end: "2021",
      },
    ],
    work: [
      {
        company: "Worten",
        title: "Software Engineer",
        badges: ["Remoto"],
        start: "Maio 2024",
        end: "Presente",
        highlights: [
          "Desenvolvo microsserviços em Go com gRPC e Kafka, contribuindo para arquiteturas escaláveis e confiáveis.",
          "Atuo em modelagem de dados, observabilidade, métricas e integrações com serviços AWS.",
          "Fortaleço a qualidade das entregas com testes unitários, de integração e end-to-end.",
        ],
        link: "https://www.worten.pt/",
      },
      {
        company: "Bexs",
        title: "Software Engineer",
        badges: ["Remoto"],
        start: "Agosto 2022",
        end: "Janeiro 2024",
        highlights: [
          "Desenvolvi microsserviços em Go para fluxos de compliance e processos regulatórios.",
          "Implementei automações de testes de integração e end-to-end com Karate.",
          "Contribuí para soluções na Google Cloud Platform com foco em robustez e confiabilidade regulatória.",
        ],
        link: "https://br.ebury.com/en",
      },
      {
        company: "Soma Tech",
        title: "Software Engineer",
        badges: ["Remoto"],
        start: "Junho 2021",
        end: "Janeiro 2024",
        highlights: [
          "Construí microsserviços com Go e gRPC, além de aplicações móveis com Flutter.",
          "Colaborei em arquitetura de sistemas distribuídos, modelagem de dados e observabilidade.",
          "Contribuí para provisionamento em AWS e pipelines de testes automatizados.",
        ],
        link: "https://somatech.solutions/",
      },
      {
        company: "Dasa",
        title: "Software Engineer",
        badges: ["Remoto"],
        start: "Junho 2021",
        end: "Junho 2022",
        highlights: [
          "Desenvolvi URAs, chatbots e automações de atendimento com Twilio Studio, TaskRouter, Functions, Flex e Autopilot.",
          "Criei aplicações serverless em Node.js para fluxos de atendimento automatizado.",
          "Contribuí para melhorar a eficiência operacional e a experiência do usuário em canais digitais.",
        ],
        link: "https://dasa.com.br/",
      },
      {
        company: "Upnid",
        title: "Software Engineer",
        badges: ["Remoto"],
        start: "Maio 2020",
        end: "Maio 2021",
        highlights: [
          "Construí e mantive microsserviços em Go e gRPC para um gateway de pagamento.",
          "Participei de componentes críticos como Single Sign-On, centralização de logs e integração com WhatsApp via Twilio.",
          "Colaborei na evolução de uma plataforma voltada a pagamentos e vendas online.",
        ],
        link: "https://upnid.com/",
      },
      {
        company: "SGI - Superintendência de Gestão da Informação",
        title: "Software Engineer",
        badges: [],
        start: "Fevereiro 2019",
        end: "Maio 2020",
        link: "https://www.setdig.ms.gov.br/",
      },
      {
        company: "Easynet",
        title: "Software Engineer",
        badges: [],
        start: "Janeiro 2018",
        end: "Janeiro 2019",
        link: "https://easynet.com.br/",
      },
      {
        company: "CompNet",
        title: "Software Engineer",
        badges: [],
        start: "Janeiro 2017",
        end: "Janeiro 2018",
        link: "https://cadg.sigo.ms.gov.br/",
      },
    ],
    skills: [
      "Go",
      "gRPC",
      "Kafka",
      "Protobuf",
      "Microsserviços",
      "Sistemas Distribuídos",
      "AWS",
      "Google Cloud Platform",
      "Docker",
      "Observabilidade",
      "Testes Automatizados",
      "Node.js",
      "TypeScript",
      "Twilio",
    ],
    languages: [
      {
        language: "Português",
        fluency: "Nativo",
      },
      {
        language: "Inglês",
        fluency: "Profissional (B2)",
      },
    ],
    projects: [
      {
        title: "VolumeHub",
        description:
          "Aplicativo nativo para macOS com controle de volume por app, visualização de áudio em tempo real e modos simples/pro, construído com SwiftUI sobre a Audio Tap API da Apple, sem kernel extensions ou drivers de áudio.",
        link: {
          href: "https://volumehub.app",
        },
        techStack: ["SwiftUI", "macOS", "Audio Tap API", "App Store"],
      },
    ],
  },
  en: {
    about:
      "Senior Software Engineer specialized in Golang, microservices, and distributed systems.",
    summary:
      "Senior Software Engineer with 8+ years of experience building distributed products and platforms in remote-first, international, and cross-functional teams. Strong background in Golang, microservice architecture, gRPC, Kafka, cloud infrastructure, observability, and automated testing. I have worked across retail, payments, compliance, digital government, and automated customer-service domains, with a focus on reliability, maintainability, and practical technical value.",
    labels: {
      about: "About",
      workExperience: "Work Experience",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      projects: "Projects",
      personalWebsite: "Personal Website",
      actions: "Actions",
      links: "Links",
      print: "Print",
      noResults: "No results found.",
      searchPlaceholder: "Type a command or search...",
      commandHintPrefix: "Press",
      commandHintSuffix: "to open the command menu",
    },
    education: [
      {
        school: "Estácio",
        degree: "Systems Analysis and Development, Information Technology",
        start: "2018",
        end: "2021",
      },
    ],
    work: [
      {
        company: "Worten",
        title: "Software Engineer",
        badges: ["Remote"],
        start: "May 2024",
        end: "Present",
        highlights: [
          "Build Go microservices with gRPC and Kafka, contributing to scalable and reliable architecture.",
          "Work on data modeling, observability, metrics, and AWS service integrations.",
          "Strengthen delivery quality with unit, integration, and end-to-end testing.",
        ],
        link: "https://www.worten.pt/",
      },
      {
        company: "Bexs",
        title: "Software Engineer",
        badges: ["Remote"],
        start: "August 2022",
        end: "January 2024",
        highlights: [
          "Built Go microservices for compliance workflows and regulatory processes.",
          "Implemented integration and end-to-end test automation with Karate.",
          "Contributed to Google Cloud Platform solutions focused on robustness and regulatory reliability.",
        ],
        link: "https://br.ebury.com/en",
      },
      {
        company: "Soma Tech",
        title: "Software Engineer",
        badges: ["Remote"],
        start: "June 2021",
        end: "January 2024",
        highlights: [
          "Built Go/gRPC microservices, Flutter mobile applications, and components for distributed systems.",
          "Collaborated on architecture, data modeling, and observability practices.",
          "Contributed to AWS provisioning and automated testing pipelines.",
        ],
        link: "https://somatech.solutions/",
      },
      {
        company: "Dasa",
        title: "Software Engineer",
        badges: ["Remote"],
        start: "June 2021",
        end: "June 2022",
        highlights: [
          "Built IVRs, chatbots, and customer-service automations with Twilio Studio, TaskRouter, Functions, Flex, and Autopilot.",
          "Created serverless Node.js applications for automated service workflows.",
          "Helped improve operational efficiency and user experience across digital service channels.",
        ],
        link: "https://dasa.com.br/",
      },
      {
        company: "Upnid",
        title: "Software Engineer",
        badges: ["Remote"],
        start: "May 2020",
        end: "May 2021",
        highlights: [
          "Built and maintained Go/gRPC microservices for a payment gateway.",
          "Worked on critical components including Single Sign-On, centralized logging, and WhatsApp integration through Twilio.",
          "Contributed to the evolution of a platform for online payments and digital sales.",
        ],
        link: "https://upnid.com/",
      },
      {
        company: "SGI - Superintendência de Gestão da Informação",
        title: "Software Engineer",
        badges: [],
        start: "February 2019",
        end: "May 2020",
        link: "https://www.setdig.ms.gov.br/",
      },
      {
        company: "Easynet",
        title: "Software Engineer",
        badges: [],
        start: "January 2018",
        end: "January 2019",
        link: "https://easynet.com.br/",
      },
      {
        company: "CompNet",
        title: "Software Engineer",
        badges: [],
        start: "January 2017",
        end: "January 2018",
        link: "https://cadg.sigo.ms.gov.br/",
      },
    ],
    skills: [
      "Go",
      "gRPC",
      "Kafka",
      "Protobuf",
      "Microservices",
      "Distributed Systems",
      "AWS",
      "Google Cloud Platform",
      "Docker",
      "Observability",
      "Automated Testing",
      "Node.js",
      "TypeScript",
      "Twilio",
    ],
    languages: [
      {
        language: "Portuguese",
        fluency: "Native",
      },
      {
        language: "English",
        fluency: "Professional (B2)",
      },
    ],
    projects: [
      {
        title: "VolumeHub",
        description:
          "Native macOS app for per-app volume control, live audio meters, and simple/pro modes, built with SwiftUI on Apple's Audio Tap API without kernel extensions or audio drivers.",
        link: {
          href: "https://volumehub.app",
        },
        techStack: ["SwiftUI", "macOS", "Audio Tap API", "App Store"],
      },
    ],
  },
} as const;

export function isLocale(locale: string | undefined): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export function getResumeData(locale: Locale = DEFAULT_LOCALE): ResumeData {
  return {
    ...COMMON_RESUME_DATA,
    ...RESUME_LOCALE_DATA[locale],
  };
}
