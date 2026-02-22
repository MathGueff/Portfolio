export const profile = {
  name: "Matheus Augusto Santos Gueff",
  shortName: "Matheus Gueff",
  title: "Desenvolvedor de Software | Back-end",
  location: "Sorocaba, SP",
  avatar: "https://github.com/MathGueff.png",
  bio: "Atualmente estudando Desenvolvimento de Software Multiplataforma na Fatec Votorantim (2024-2026), com foco em criação de aplicativos web e mobile, trabalhando principalmente com React(Front-end) e Node.js(Back-end). Trabalho na área como Back-end developer utilizando MongoDB como banco de dados e TypeScript para desenvolvimento de APIs em Node.js.",
};

/** Ícones: Simple Icons CDN (https://cdn.simpleicons.org/{slug}). Slugs oficiais: https://github.com/simple-icons/simple-icons/blob/develop/slugs.md. SQL Server não existe no Simple Icons → Devicon (jsDelivr). */
export const technologies: Technology[] = [
  { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "MongoDB", iconUrl: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "HTML5", iconUrl: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS", iconUrl: "https://cdn.simpleicons.org/css/1572B6" },
  { name: "Angular", iconUrl: "https://cdn.simpleicons.org/angular/DD0031" },
  { name: "Bootstrap", iconUrl: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "Git", iconUrl: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", iconUrl: "https://cdn.simpleicons.org/github/181717" },
  { name: "Sequelize", iconUrl: "https://cdn.simpleicons.org/sequelize/52B0E7" },
  { name: "Figma", iconUrl: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "SQL Server", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" }
];

export interface ProjectDate {
  year: string;
  month?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  highlightColor: string;
  /** Logo do projeto (caminho em /public ou URL). Ex.: "/images/logos/projeto.png" */
  logo?: string;
  stack: string[];
  links: ProjectLink[];
  startDate: ProjectDate;
  endDate?: ProjectDate;
  lastUpdate: ProjectDate;
}

export interface Technology {
  name: string;
  iconUrl: string;
}

export const projects: Project[] = [
  {
    name: "SaneaSP",
    highlightColor: "blue",
    logo: "/images/logos/saneasp.png",
    description:
      "Projeto Integrador do curso de Desenvolvimento de Software Multiplataforma na FATEC Votorantim. Sistema relacionado à saneamento básico e comunicação entre prefeituras e cidadãos.",
    stack: ["Angular", "TypeScript", "Express.js", "Sequelize", "PostgreSQL", "Docker", "Github"],
    links: [
      { label: "Front-end", url: "https://github.com/MathGueff/Frontend-SaneaSP" },
      { label: "Back-end", url: "https://github.com/MathGueff/Backend-SaneaSP" },
    ],
    startDate: { year: "2024" },
    lastUpdate: { year: "2025" },
    endDate: { year: "2025" },
  },
  {
    name: "PvZ-Adventures-Fanmade",
    description:
      "Projeto pessoal desenvolvido como hobby para treinar lógica de programação, boas práticas e POO.",
    stack: ["C#", "POO", "Unity", "Aseprite"],
    highlightColor: 'green',
    links: [{ label: "Repositório", url: "https://github.com/MathGueff/PvZ-Adventures-Fanmade" }],
    startDate: { year: "2024" },
    lastUpdate: { year: "2025" }
  }
];

export const socialLinks = {
  github: "https://github.com/MathGueff",
  linkedin: "https://www.linkedin.com/in/matheus-gueff",
  email: "mailto:gueffmatheus@gmail.com",
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];
