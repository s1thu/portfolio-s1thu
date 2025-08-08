"use client";

import {
  FaReact,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaVuejs,
  FaAws,
} from "react-icons/fa";
import {
  SiGo,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiC,
  SiPhp,
  SiGithubactions,
  SiGithub,
  SiDocker,
  SiReact,
  SiBootstrap,
  SiSpringboot,
  SiVuedotjs,
  SiMysql,
  SiSubversion,
} from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { BiSolidFolder } from "react-icons/bi";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Go", icon: <SiGo className="text-accent" /> },
        { name: "Java", icon: <FaJava className="text-orange-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-warning" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-primary" /> },
        { name: "C", icon: <SiC className="text-blue-500" /> },
        { name: "PHP", icon: <SiPhp className="text-purple-500" /> },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        {
          name: "Spring Boot",
          icon: <SiSpringboot className="text-green-500" />,
        },
        {
          name: "Spring Security",
          icon: <SiSpringboot className="text-green-500" />,
        },
        { name: "React.js", icon: <SiReact className="text-accent" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-text-primary" />,
        },
        { name: "Vue.js", icon: <SiVuedotjs className="text-green-500" /> },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-purple-500" />,
        },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-orange-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-primary" /> },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: <SiDocker className="text-accent" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-700" /> },
        {
          name: "GitHub Actions",
          icon: <SiGithubactions className="text-purple-500" />,
        },
        { name: "AWS", icon: <FaAws className="text-orange-400" /> },
        { name: "SVN", icon: <BiSolidFolder className="text-blue-500" /> },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-12 px-6 bg-bg-secondary min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-primary mb-3">
            Technical Skills
          </h2>
          <p className="text-text-secondary text-base max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-bg-tertiary rounded-lg p-4 border border-border hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-3 p-2 rounded-lg bg-bg-primary hover:bg-bg-secondary transition-all duration-300 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: `${
                        categoryIndex * 0.1 + skillIndex * 0.05
                      }s`,
                    }}
                  >
                    <div className="text-lg">{skill.icon}</div>
                    <span className="text-text-secondary font-medium text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-text-primary mb-6">
            Architectural Patterns & Concepts
          </h3>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              "MVC",
              "REST APIs",
              "Event-driven",
              "OOP",
              "Multithreading",
              "MVVM",
              "Microservices",
              "GraphQL",
              "WebSockets",
              "Agile/Scrum",
              "CI/CD",
              "Testing",
              "Performance Optimization",
              "System Design",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-bg-primary text-text-secondary rounded-full border border-border hover:border-accent/50 hover:text-accent transition-all duration-200 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Operating Systems
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {["Linux", "Windows", "macOS"].map((os) => (
              <span
                key={os}
                className="px-3 py-1.5 bg-bg-primary text-text-secondary rounded-full border border-border hover:border-accent/50 hover:text-accent transition-all duration-200 text-sm"
              >
                {os}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
