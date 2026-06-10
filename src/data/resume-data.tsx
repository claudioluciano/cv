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
    description: string;
    link?: string;
  }[];
  skills: string[];
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
      "Engenheiro de software especializado em Golang, microsservicos e sistemas distribuidos.",
    summary:
      "Engenheiro de software com mais de 8 anos de experiencia na criacao de produtos e plataformas distribuidas para empresas remotas e internacionais. Forte atuacao em Golang, arquitetura de microsservicos, gRPC, Kafka, cloud, observabilidade e testes automatizados. Tenho experiencia em dominios como varejo, pagamentos, compliance, governo digital e atendimento automatizado, sempre com foco em confiabilidade, manutencao evolutiva e entrega de valor tecnico para o negocio.",
    labels: {
      about: "Sobre",
      workExperience: "Experiencia Profissional",
      education: "Formacao",
      skills: "Competencias",
      projects: "Projetos",
      personalWebsite: "Site pessoal",
      actions: "Acoes",
      links: "Links",
      print: "Imprimir",
      noResults: "Nenhum resultado encontrado.",
      searchPlaceholder: "Digite um comando ou pesquise...",
      commandHintPrefix: "Pressione",
      commandHintSuffix: "para abrir o menu de comandos",
    },
    education: [
      {
        school: "Estacio",
        degree:
          "Analise e Desenvolvimento de Sistemas, Tecnologia da Informacao",
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
        description:
          "Desenvolvo microservicos em Golang com gRPC e Kafka, colaborando na evolucao de arquiteturas escalaveis e confiaveis. Trabalho na modelagem de bancos de dados, observabilidade, metricas e integracao com servicos AWS. Tambem contribuo para estrategias de qualidade com testes unitarios, de integracao e end-to-end.",
        link: "https://worten.pt",
      },
      {
        company: "Bexs",
        title: "Software Engineer",
        badges: ["Remoto"],
        start: "Agosto 2022",
        end: "Janeiro 2024",
        description:
          "Atuei no time de compliance, desenvolvendo microservicos em Golang e automacoes de testes para fluxos regulatorios. Implementei testes de integracao e end-to-end com Karate, alem de solucoes escalaveis na Google Cloud Platform para fortalecer a conformidade e a robustez dos sistemas.",
        link: "https://bexs.com.br",
      },
      {
        company: "Soma Tech",
        title: "Software Engineer",
        badges: ["Remoto"],
        start: "Junho 2021",
        end: "Janeiro 2024",
        description:
          "Desenvolvi microservicos com Golang e gRPC, aplicacoes moveis com Flutter e componentes para sistemas distribuidos. Colaborei na definicao de arquitetura, modelagem de dados, observabilidade, provisionamento em AWS e pipelines de testes automatizados.",
        link: "https://somatech.solutions/",
      },
      {
        company: "Dasa",
        title: "Software Engineer",
        badges: ["Remoto"],
        start: "Junho 2021",
        end: "Junho 2022",
        description:
          "Desenvolvi URAs, chatbots e automacoes de atendimento com Twilio Studio, TaskRouter, Functions, Flex e Autopilot. Criei aplicacoes serverless em Node.js e contribui para otimizar canais de atendimento automatizado, melhorando eficiencia operacional e experiencia do usuario.",
        link: "#",
      },
      {
        company: "Upnid",
        title: "Software Engineer",
        badges: ["Remoto"],
        start: "Maio 2020",
        end: "Maio 2021",
        description:
          "Contribui para a evolucao de um gateway de pagamento, construindo e mantendo microservicos em Golang e gRPC. Participei de componentes criticos como Single Sign-On, centralizacao de logs e integracao com WhatsApp via Twilio.",
        link: "#",
      },
      {
        company: "SGI - Superintendencia de Gestao da Informacao",
        title: "Software Engineer",
        badges: [],
        start: "Fevereiro 2019",
        end: "Maio 2020",
        description:
          "Atuei em projetos full-stack para servicos digitais governamentais, incluindo manutencao de sistemas legados e desenvolvimento de novas funcionalidades. Trabalhei no backend do aplicativo MS Digital com C#, Node.js, MSSQL e Docker.",
        link: "#",
      },
      {
        company: "Easynet",
        title: "Software Engineer",
        badges: [],
        start: "Janeiro 2018",
        end: "Janeiro 2019",
        description:
          "Desenvolvi sistemas internos e aplicacoes sob demanda para clientes, incluindo projetos para a Sanesul. Trabalhei com C#, Node.js e Vue.js em manutencao, novas funcionalidades e evolucao arquitetural.",
        link: "#",
      },
      {
        company: "CompNet",
        title: "Software Engineer",
        badges: [],
        start: "Janeiro 2017",
        end: "Janeiro 2018",
        description:
          "Participei do desenvolvimento de um sistema de gerenciamento de despacho de viaturas, implementando funcionalidades e prestando suporte tecnico. Trabalhei com C#, Node.js e Vue.js ao longo do ciclo de desenvolvimento do produto.",
        link: "#",
      },
    ],
    skills: [
      "Go",
      "Microservices Architecture",
      "Distributed Systems",
      "Protobuf",
      "gRPC",
      "Kafka",
      "Docker",
      "AWS",
      "Google Cloud Platform",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Twilio",
      "MongoDB",
      "Vue.js",
      "Flutter",
    ],
    projects: [],
  },
  en: {
    about:
      "Software engineer specialized in Golang, microservices, and distributed systems.",
    summary:
      "Software engineer with 8+ years of experience building distributed products and platforms for remote and international companies. Strong background in Golang, microservice architecture, gRPC, Kafka, cloud infrastructure, observability, and automated testing. I have worked across retail, payments, compliance, digital government, and automated customer-service domains, with a focus on reliability, maintainability, and practical technical value.",
    labels: {
      about: "About",
      workExperience: "Work Experience",
      education: "Education",
      skills: "Skills",
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
        school: "Estacio",
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
        description:
          "Build microservices in Golang with gRPC and Kafka, contributing to scalable and reliable architecture. Work on database design, observability, metrics, and AWS service integrations. Also contribute to quality strategy through unit, integration, and end-to-end testing.",
        link: "https://worten.pt",
      },
      {
        company: "Bexs",
        title: "Software Engineer",
        badges: ["Remote"],
        start: "August 2022",
        end: "January 2024",
        description:
          "Worked on the compliance team, building Golang microservices and test automation for regulatory workflows. Implemented integration and end-to-end tests with Karate, along with scalable Google Cloud Platform solutions that improved system robustness and regulatory reliability.",
        link: "https://bexs.com.br",
      },
      {
        company: "Soma Tech",
        title: "Software Engineer",
        badges: ["Remote"],
        start: "June 2021",
        end: "January 2024",
        description:
          "Built microservices with Golang and gRPC, mobile applications with Flutter, and components for distributed systems. Collaborated on architecture, data modeling, observability, AWS provisioning, and automated testing pipelines.",
        link: "https://somatech.solutions/",
      },
      {
        company: "Dasa",
        title: "Software Engineer",
        badges: ["Remote"],
        start: "June 2021",
        end: "June 2022",
        description:
          "Built IVRs, chatbots, and customer-service automations with Twilio Studio, TaskRouter, Functions, Flex, and Autopilot. Created serverless Node.js applications and helped optimize automated service channels to improve operational efficiency and user experience.",
        link: "#",
      },
      {
        company: "Upnid",
        title: "Software Engineer",
        badges: ["Remote"],
        start: "May 2020",
        end: "May 2021",
        description:
          "Contributed to a payment gateway by building and maintaining Golang and gRPC microservices. Worked on critical components including Single Sign-On, centralized logging, and WhatsApp integration through Twilio.",
        link: "#",
      },
      {
        company: "SGI - Superintendencia de Gestao da Informacao",
        title: "Software Engineer",
        badges: [],
        start: "February 2019",
        end: "May 2020",
        description:
          "Worked on full-stack projects for government digital services, including legacy maintenance and new feature development. Contributed to the backend of the MS Digital application using C#, Node.js, MSSQL, and Docker.",
        link: "#",
      },
      {
        company: "Easynet",
        title: "Software Engineer",
        badges: [],
        start: "January 2018",
        end: "January 2019",
        description:
          "Built internal systems and custom applications for clients, including strategic projects for Sanesul. Worked with C#, Node.js, and Vue.js on maintenance, new features, and architectural improvements.",
        link: "#",
      },
      {
        company: "CompNet",
        title: "Software Engineer",
        badges: [],
        start: "January 2017",
        end: "January 2018",
        description:
          "Helped develop a vehicle dispatch management system, implementing product features and providing technical support. Worked with C#, Node.js, and Vue.js throughout the product development lifecycle.",
        link: "#",
      },
    ],
    skills: [
      "Go",
      "Microservices Architecture",
      "Distributed Systems",
      "Protobuf",
      "gRPC",
      "Kafka",
      "Docker",
      "AWS",
      "Google Cloud Platform",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Twilio",
      "MongoDB",
      "Vue.js",
      "Flutter",
    ],
    projects: [],
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
