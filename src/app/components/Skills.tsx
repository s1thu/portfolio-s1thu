"use client";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaJava,
} from "react-icons/fa";
import {
  SiGo,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiNextdotjs,
} from "react-icons/si";
import { useEffect, useRef, useState } from "react";

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
        { name: "Go", icon: <SiGo className="text-accent" />, level: 90 },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-warning" />,
          level: 85,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-primary" />,
          level: 80,
        },
        {
          name: "Java",
          icon: <FaJava className="text-orange-500" />,
          level: 75,
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "React.js",
          icon: <FaReact className="text-accent" />,
          level: 85,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-text-primary" />,
          level: 80,
        },
        {
          name: "HTML/CSS",
          icon: <div className="text-orange-500">🌐</div>,
          level: 90,
        },
        {
          name: "Tailwind CSS",
          icon: <div className="text-accent">💨</div>,
          level: 85,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-success" />,
          level: 80,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-primary" />,
          level: 75,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-success" />,
          level: 70,
        },
        {
          name: "Redis",
          icon: <SiRedis className="text-red-500" />,
          level: 65,
        },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        {
          name: "Docker",
          icon: <FaDocker className="text-accent" />,
          level: 80,
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-primary" />,
          level: 70,
        },
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-500" />,
          level: 85,
        },
        {
          name: "Linux",
          icon: <FaLinux className="text-text-primary" />,
          level: 80,
        },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 px-6 bg-bg-secondary"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-bg-tertiary rounded-lg p-6 border border-border hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="text-xl">{skill.icon}</div>
                      <span className="text-text-secondary font-medium">
                        {skill.name}
                      </span>
                    </div>

                    {/* Skill Level Bar */}
                    <div className="w-full bg-bg-primary rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${
                            categoryIndex * 0.2 + skillIndex * 0.1
                          }s`,
                        }}
                      />
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-text-muted">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-text-primary mb-8">
            Other Technologies & Methodologies
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Microservices",
              "REST APIs",
              "GraphQL",
              "WebSockets",
              "Agile/Scrum",
              "CI/CD",
              "Testing",
              "Performance Optimization",
              "System Design",
              "Multithreading",
              "Event-Driven Architecture",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-bg-primary text-text-secondary rounded-full border border-border hover:border-accent/50 hover:text-accent transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
