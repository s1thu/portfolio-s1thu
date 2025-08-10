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
    title: "Job Arranger for Zabbix",
    description:
      "Developed and maintained the core server and agent components of Job Arranger for Zabbix, enabling automated job scheduling, execution, and monitoring within enterprise IT environments.",
    longDescription:
      "Developed and maintained the core server and agent components of Job Arranger for Zabbix, enabling automated job scheduling, execution, and monitoring within enterprise IT environments. Focused on performance, stability, and seamless integration with Zabbix monitoring system for enterprise-grade automation.",
    technologies: [
      "Go",
      "C",
      "Zabbix",
      "Enterprise Systems",
      "Job Scheduling",
      "Monitoring",
      "Performance Optimization",
    ],
    githubUrl: "",
    liveUrl: "http://jobarranger.info/jpn/index.html",
    featured: true,
  },
  {
    id: 2,
    title: "Job Arranger Manager",
    description:
      "Built and maintained Job Arranger Manager, a modern web-based control panel for managing jobs, schedules, and agents.",
    longDescription:
      "Built and maintained Job Arranger Manager, a modern web-based control panel for managing jobs, schedules, and agents. Developed using PHP and React.js, delivering an intuitive interface for administrators to easily create, monitor, and manage tasks across enterprise environments.",
    technologies: [
      "PHP",
      "React.js",
      "JavaScript",
      "Web-based Control Panel",
      "Job Management",
      "UI/UX Design",
    ],
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Leave Taking Management System (OJT Project)",
    description:
      "A complete web application to manage employee leave requests and approvals. Built as part of on-the-job training using full-stack Java technologies.",
    longDescription:
      "A complete web application to manage employee leave requests and approvals, built during on-the-job training (02/2022 – 06/2022). Developed REST-based backend with Spring Boot and JPA for database interaction, designed responsive UI with Thymeleaf templates and Bootstrap, implemented authentication/authorization and leave workflows. Delivered a polished demo and won top internal prize for quality and innovation.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Thymeleaf",
      "HTML",
      "Bootstrap",
      "JavaScript",
    ],
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and TypeScript.",
    longDescription:
      "A fully responsive portfolio website showcasing my work and skills. Built with modern web technologies including Next.js for server-side rendering, TypeScript for type safety, and Tailwind CSS for styling. Features smooth scrolling, responsive design, and performance optimization.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Responsive Design",
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
