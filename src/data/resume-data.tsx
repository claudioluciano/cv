// import {AmbitLogo} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

interface ResumeData {
  personalWebsiteUrl: string;
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  avatarUrl: string;
  about: string;
  summary: string;
  contact: {
    email: string;
    tel: string;
    social: {
      name: string;
      url: string;
      icon: any;
    }[];
  };
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
    }
    techStack: string[];
  }[];
}

export const RESUME_DATA: ResumeData = {
  personalWebsiteUrl: "https://claudioluciano.dev",
  name: "Claudio Luciano",
  initials: "CL",
  location: "World",
  locationLink: "https://www.google.com/maps/place/Porto",
  avatarUrl: "https://media.licdn.com/dms/image/v2/C4D03AQFWrthTQQjx-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1578338150825?e=1756339200&v=beta&t=HUWr18_HBK0wfzt4JidmZaM6kHMJphKklsrEtEUk28Y",
  about: "Engenheiro de software experiente especializado em Golang e arquitetura de microsserviços.",
  summary: "Como engenheiro de software, foco na criação de soluções completas, transformando conceitos em produtos concretos. Minha expertise concentra-se principalmente em Golang, arquitetura de microsserviços e soluções de conformidade. Conto com mais de 8 anos de experiência em colaborações remotas com empresas ao redor do mundo, buscando sempre impulsionar a inovação e a confiabilidade nos projetos em que me envolvo.",
  contact: {
    email: "claudio_luciano@live.com",
    tel: "+351 916 448 661",
    social: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/claudioluciano",
        icon: LinkedInIcon
      },
      {
        name: "GitHub",
        url: "https://github.com/claudioluciano",
        icon: GitHubIcon
      }
    ]
  },
  education: [
    {
      school: "Estácio",
      degree: "Análise e Desenvolvimento de Sistemas, Tecnologia da Informação",
      start: "2018",
      end: "2021"
    }
  ],
  work: [
     {
      company: "Worten",
      title: "Software Engineer",
      badges: ["Remoto"],
      start: "Maio 2024",
      end: "Presente",
      description: "Atuo no desenvolvimento de microserviços utilizando Golang, gRPC e Kafka, colaborando na construção de arquiteturas robustas e escaláveis. Participo da estruturação de bancos de dados e implementação de métricas para observabilidade, contribuindo para o monitoramento e performance dos sistemas. Trabalho com a plataforma AWS, auxiliando no fortalecimento da infraestrutura necessária para suportar os microserviços. Colaboro ativamente na implementação de estratégias de testes abrangentes, incluindo testes unitários, de integração e End-to-End, garantindo junto à equipe a qualidade e confiabilidade dos produtos entregues.",
      link: "https://worten.pt"
    },
    {
      company: "Bexs",
      title: "Software Engineer",
      badges: ["Remoto"],
      start: "Agosto 2022",
      end: "Janeiro 2024",
      description: "Integrei o time de compliance, focando no desenvolvimento de microserviços e automação de testes. Desenvolvi soluções em Golang e implementei testes de integração e End-to-End utilizando Karate. Trabalhei com Google Cloud Platform para arquitetar e implementar soluções escaláveis, contribuindo para a conformidade regulatória e robustez dos sistemas de compliance da empresa.",
      link: "https://bexs.com.br"
    },
    {
      company: "Soma Tech",
      title: "Software Engineer",
      badges: ["Remoto"],
      start: "Junho 2021",
      end: "Janeiro 2024",
      description: "Desenvolvi microserviços utilizando Golang e gRPC, além de aplicações móveis com Flutter. Colaborei na arquitetura de sistemas distribuídos, estruturação de bancos de dados e implementação de métricas para observabilidade. Utilizei AWS para provisionamento e gerenciamento de infraestrutura cloud. Participei da implementação de pipelines de testes abrangentes, incluindo testes unitários, de integração e End-to-End, assegurando junto à equipe a qualidade e performance dos produtos desenvolvidos.",
      link: "https://somatech.solutions/"
    },
    {
      company: "Dasa",
      title: "Software Engineer",
      badges: ["Remoto"],
      start: "Junho 2021",
      end: "Junho 2022",
      description: "Desenvolvi URAs e Chatbots utilizando a plataforma Twilio, trabalhando com Studio, TaskRouter, Functions, Flex e Autopilot. Criei aplicações serverless em Node.js para automação de atendimento ao cliente. Colaborei na implementação e otimização de sistemas de atendimento automatizado, contribuindo para melhorar a experiência do usuário e eficiência operacional dos canais de comunicação da empresa.",
      link: "#"
    },
    {
      company: "Upnid",
      title: "Software Engineer",
      badges: ["Remoto"],
      start: "Maio 2020",
      end: "Maio 2021",
      description: "Contribuí para o desenvolvimento de um gateway de pagamento, construindo e mantendo microserviços utilizando gRPC e Golang. Participei da criação de componentes críticos como Single Sign-On (SSO), centralização de logs e integração com WhatsApp via Twilio. Colaborei na implementação de práticas de desenvolvimento ágil e design de sistemas distribuídos, fortalecendo a confiabilidade e segurança da plataforma de pagamentos.",
      link: "#"
    },
    {
      company: "SGI - Superintendência de Gestão da Informação",
      title: "Software Engineer",
      badges: [],
      start: "Fevereiro 2019",
      end: "Maio 2020",
      description: "Participei do desenvolvimento de projetos full-stack, desde novos sistemas até manutenção de aplicações legadas. Contribuí para o backend do Aplicativo MS Digital e colaborei na modernização de sistemas governamentais. Trabalhei com tecnologias como C# e Node.js, utilizando bancos de dados MSSQL e infraestrutura Docker. Participei de projetos que impactaram diretamente os serviços digitais do estado de Mato Grosso do Sul.",
      link: "#"
    },
    {
      company: "Easynet",
      title: "Software Engineer",
      badges: [],
      start: "Janeiro 2018",
      end: "Janeiro 2019",
      description: "Atuei no desenvolvimento full-stack de diversos projetos, participando da criação de novos sistemas e manutenção de aplicações legadas. Contribuí para o desenvolvimento de sistemas internos para clientes, incluindo projetos estratégicos na Sanesul. Trabalhei com tecnologias como C#, Node.js e Vue.js, participando da arquitetura de soluções e implementação de funcionalidades que atendiam às necessidades específicas dos clientes.",
      link: "#"
    },
    {
      company: "CompNet",
      title: "Software Engineer",
      badges: [],
      start: "Janeiro 2017",
      end: "Janeiro 2018",
      description: "Participei do desenvolvimento de um sistema de gerenciamento de despacho de viaturas (CADG), colaborando na criação de uma solução inovadora para o setor. Utilizei tecnologias como C#, Node.js e Vue.js para implementar funcionalidades do produto. Contribuí para o desenvolvimento de features e prestei suporte técnico, participando ativamente do ciclo completo de desenvolvimento do sistema.",
      link: "#"
    }
  ],
  skills: [
    "Go",
    "Microservices Architecture",
    "Protobuf",
    "gRPC",
    "Docker",
    "JavaScript",
    "TypeScript",
    "GraphQL",
    "Twilio (Studio, TaskRouter, Functions, Flex, Autopilot)",
    "MongoDB",
    "Vue.js"
  ],
  projects: []
} as const;
