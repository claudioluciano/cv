// import {AmbitLogo} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Claudio Luciano",
  initials: "CL",
  location: "Campo Grande, Mato Grosso do Sul, Brazil",
  locationLink: "https://www.google.com/maps/place/Campo+Grande",
  avatarUrl: "https://avatars.githubusercontent.com/u/16817398?v=4",
  about: "Engenheiro de software experiente especializado em Golang e arquitetura de microsserviços.",
  summary: "Como engenheiro de software, foco na criação de soluções completas, transformando conceitos em produtos concretos. Minha expertise concentra-se principalmente em Golang, arquitetura de microsserviços e soluções de conformidade. Conto com mais de 8 anos de experiência em colaborações remotas com empresas ao redor do mundo, buscando sempre impulsionar a inovação e a confiabilidade nos projetos em que me envolvo.",
  contact: {
    email: "claudio_luciano@live.com",
    tel: "+5567992360754",
    social: [
      {
        name: "LinkedIn",
        url: "www.linkedin.com/in/claudioluciano",
        icon: LinkedInIcon
      },
      {
        name: "GitHub",
        url: "github.com/claudioluciano",
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
      company: "Bexs",
      title: "Software Engineer",
      badges: ["Remoto"],
      start: "August 2022",
      end: "Presente",
      description: "No Bexs, integro o time de compliance, focado no desenvolvimento de microserviços e testes automatizados. Utilizo Golang para construir os microserviços, além de empregar Karate para os testes de integração e End to End. Além disso, trabalho com a Google Cloud para viabilizar nossas soluções, contribuindo para a conformidade e robustez de nossos sistemas."
    },
    {
      company: "Soma Tech",
      title: "Software Engineer",
      badges: ["Remoto"],
      start: "Junho 2021",
      end: "Presente",
      description: "Na Soma Tech, meu foco principal está no desenvolvimento de microserviços utilizando Golang, gRPC, e na criação de soluções móveis com Flutter. Participo ativamente na construção de arquiteturas sólidas de microserviços, bem como na criação de aplicativos móveis com Flutter. Utilizo e gerencio a plataforma da AWS, fortalecendo a infraestrutura necessária para suportar esses sistemas. Também contribuo ativamente na implementação de testes abrangentes, incluindo testes unitários, de integração e End to End, assegurando, em conjunto com a equipe, a qualidade e robustez dos produtos entregues."
    },
    {
      company: "FCamara Consulting & Training (Dasa)",
      title: "Software Engineer",
      badges: ["Remoto"],
      start: "Junho 2021",
      end: "Junho 2022",
      description: "Na FCamara, atuei como Engenheiro de Software, trabalhando no desenvolvimento de URAs e Chatbots utilizando a plataforma Twilio. Utilizei ferramentas como Studio, TaskRouter, Functions, Flex e Autopilot, criando aplicações Serverless em Node.js. Meu papel envolveu a implementação e aprimoramento de sistemas de atendimento automatizado, garantindo interações eficientes e personalizadas para os usuários. Esta experiência demandou habilidades sólidas de programação, compreensão profunda da plataforma Twilio e foco na entrega de soluções inovadoras para melhorar a experiência do cliente."
    },
    {
      company: "Upnid",
      title: "Software Engineer",
      badges: ["Remoto"],
      start: "Maio 2020",
      end: "Maio 2021",
      description: "Na Upnid, atuei como Desenvolvedor Back End, contribuindo para o desenvolvimento de um gateway de pagamento seguro e eficiente. Contribuí com a construção e manutenção de microsserviços utilizando gRPC e Golang, garantindo funcionalidade contínua. Minhas responsabilidades incluíram a criação de componentes essenciais, como Single Sign-On (SSO), centralização de logs e integração do WhatsApp via Twilio. Esta função exigiu habilidades de resolução de problemas, expertise em design de sistemas e práticas ágeis de desenvolvimento, todas voltadas para fortalecer a confiabilidade e funcionalidade do nosso gateway de pagamento."
    },
    {
      company: "SGI - Superintendência de Gestão da Informação",
      title: "Software Engineer",
      badges: [],
      start: "Fevereiro 2019",
      end: "Maio 2020",
      description: "Na SGI - Superintendência de Gestão da Informação, atuei como Engenheiro de Software, desempenhando um papel crucial no desenvolvimento de projetos full-stack. Participei desde novos projetos até a gestão de sistemas legados, proporcionando contribuições essenciais para o backend do Aplicativo MS Digital. Minhas responsabilidades incluíram a manutenção de projetos legados, desenvolvimento de novos sistemas e apoio à infraestrutura de containers Docker. Esta experiência demandou habilidades multifacetadas, desde programação em C# e NodeJs até o trabalho com bancos de dados MSSQL, contribuindo significativamente para soluções tecnológicas de impacto no estado de Mato Grosso do Sul."
    },
    {
      company: "Easynet",
      title: "Software Engineer",
      badges: [],
      start: "Janeiro 2018",
      end: "Janeiro 2019",
      description: "Na easynet, atuei como Desenvolvedor .Net, desempenhando um papel integral no desenvolvimento full-stack de diversos projetos. Desde a criação de novos sistemas até a manutenção de projetos legados, participei ativamente no desenvolvimento e suporte de sistemas internos para clientes, incluindo projetos na Sanesul. Minhas responsabilidades abrangeram arquitetura de novos projetos, desenvolvimento e manutenção de sistemas, abrangendo tecnologias como C#, Node e Vue JS. Esta experiência exigiu habilidades versáteis de desenvolvimento e colaboração em equipe para fornecer soluções eficazes e suporte técnico consistente para os clientes da empresa."
    },
    {
      company: "CompNet",
      title: "Software Engineer",
      badges: [],
      start: "Janeiro 2017",
      end: "Janeiro 2018",
      description: "Na CompNet, atuei como Desenvolvedor Full-Stack, envolvido no desenvolvimento de um novo produto de gerenciamento de despacho de viaturas (CADG). Trabalhei com tecnologias como C#, Node e Vue JS para contribuir na criação dessas soluções, proporcionando suporte técnico e colaborando no desenvolvimento do produto."
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
