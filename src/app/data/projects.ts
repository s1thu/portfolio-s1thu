export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Job Arranger for Zabbix (JAZ)",
    description:
      "Open source job scheduling solution integrated with Zabbix. Led the modernization of the core engine from C to Go for high-concurrency event-driven performance.",
    longDescription:
      "Led the architectural transformation and migration of the core legacy batch job scheduler from C to Go. Implemented high-performance event-driven mechanisms utilizing Unix Domain Sockets, TCP, and real-time file monitoring. Engineered comprehensive automated test suites using Testcontainers to ensure environment parity and robustness during rewrites across Linux and Windows environments.",
    technologies: [
      "Go",
      "C",
      "Unix Sockets",
      "TCP/IP",
      "Testcontainers",
      "Docker",
      "Linux Server",
      "Windows OS",
      "Zabbix Monitoring",
    ],
    githubUrl: "https://github.com/s1thu",
    liveUrl: "http://jobarranger.info/jpn/index.html",
    featured: true,
  },
  {
    id: 2,
    title: "Job Arranger Manager UI",
    description:
      "Enhanced user experience of job scheduling and schedule management tools by building components in React.js and PHP.",
    longDescription:
      "Maintained and enhanced the web-based monitoring interface of JAZ. Extended the frontend using React.js and improved PHP backend interactions for real-time schedule management, job creation, and live agent status visualization, streamlining administrative operations for Japanese enterprise clients.",
    technologies: [
      "React.js",
      "PHP",
      "JavaScript",
      "REST APIs",
      "Web-based Control Panel",
      "MVC Pattern",
    ],
    githubUrl: "https://github.com/s1thu",
    liveUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Leave Taking Management System",
    description:
      "A complete enterprise web application for leave management and approvals. Awarded 1st Prize for innovation and execution during OJT.",
    longDescription:
      "Designed and developed a robust Leave Taking Management System from scratch. Implemented a REST-based backend using Java, Spring Boot, and Spring Security for authentication and authorization. Created a responsive user interface using Thymeleaf templates, HTML, and Bootstrap. Awarded 1st Prize in the final demo competition for exceptional design and architecture.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "MySQL",
      "Thymeleaf",
      "Bootstrap",
      "JavaScript",
    ],
    githubUrl: "https://github.com/s1thu",
    liveUrl: "",
    featured: true,
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing systems engineering credentials, powered by Next.js and JetBrains Mono.",
    longDescription:
      "Designed and implemented this custom dark-themed workstation developer portfolio. Fully optimized using Next.js for statically exported deployment, styled with Obsidian and glowing Neon gradient blurs, utilizing JetBrains Mono as the site-wide monospace typeface, and fully responsive across all device breakpoints.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "JetBrains Mono",
      "Responsive Layout",
      "Glassmorphism UI",
    ],
    githubUrl: "https://github.com/s1thu/portfolio-s1thu",
    liveUrl: "https://sithuwin.me",
    featured: true,
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getAllProjects = (): Project[] => {
  return projects;
};
