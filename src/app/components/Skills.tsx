"use client";

import {
  FaGitAlt,
  FaJava,
  FaAws,
  FaLinux,
  FaWindows,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiGo,
  SiJavascript,
  SiPostgresql,
  SiC,
  SiPhp,
  SiGithubactions,
  SiDocker,
  SiReact,
  SiSpringboot,
  SiVuedotjs,
  SiMysql,
  SiRedis,
  SiSubversion,
  SiGin,
  SiTypescript,
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
      },
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
        { name: "C", icon: <SiC className="text-blue-500" /> },
        { name: "PHP", icon: <SiPhp className="text-purple-500" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        {
          name: "Spring Boot",
          icon: <SiSpringboot className="text-emerald-500" />,
        },
        {
          name: "Spring Security",
          icon: <FaShieldAlt className="text-emerald-400" />,
        },
        { name: "React.js", icon: <SiReact className="text-accent" /> },
        { name: "Vue.js", icon: <SiVuedotjs className="text-emerald-500" /> },
        { name: "Gin", icon: <SiGin className="text-cyan-500" /> },
      ],
    },
    {
      title: "Databases & OS",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-orange-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-primary" /> },
        {
          name: "Linux Server",
          icon: <FaLinux className="text-text-primary" />,
        },
        { name: "Windows OS", icon: <FaWindows className="text-blue-400" /> },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", icon: <FaAws className="text-warning" /> },
        { name: "Docker", icon: <SiDocker className="text-accent" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
        {
          name: "Git & GitLab",
          icon: <FaGitAlt className="text-orange-500" />,
        },
        {
          name: "GitHub Actions",
          icon: <SiGithubactions className="text-purple-500" />,
        },
        { name: "SVN", icon: <SiSubversion className="text-blue-500" /> },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-6 bg-bg-primary relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="glow-spot-cyan top-40 right-10" />
      <div className="glow-spot-violet bottom-40 left-10" />

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs mb-4 uppercase tracking-widest font-semibold">
            <span>{"// SYSTEM SPECIFICATIONS"}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 tracking-tight">
            Technical Stack
          </h2>
          <p className="text-text-secondary text-sm max-w-2xl mx-auto">
            A directory of core technologies and operational tools that compose
            my development environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-panel border-border/80 rounded-xl p-5 hover:border-accent/35 hover:shadow-[0_4px_20px_-10px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col h-full group"
            >
              <h3 className="text-sm font-semibold text-accent/80 uppercase tracking-widest mb-5 border-b border-border/40 pb-2">
                📂 {category.title}
              </h3>

              <div className="space-y-2.5 flex-1">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-3 p-2.5 rounded-lg bg-bg-secondary/45 border border-border/40 hover:border-accent/25 hover:bg-bg-tertiary transition-all duration-300 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: `${
                        categoryIndex * 0.1 + skillIndex * 0.04
                      }s`,
                    }}
                  >
                    <div className="text-lg group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-text-secondary font-medium text-xs tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-20 text-center bg-bg-secondary/25 border border-border/60 rounded-2xl p-8 max-w-4xl mx-auto glass-panel">
          <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-6 flex items-center justify-center gap-2">
            <span className="text-accent">&lt;</span>
            <span>Architectural Patterns & Methodologies</span>
            <span className="text-accent">/&gt;</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "MVC",
              "REST APIs",
              "Event-driven Architecture",
              "OOP (Object Oriented Programming)",
              "Multithreading",
              "MVVM",
              "Repository Pattern",
              "Unix Domain Sockets",
              "TCP/IP Networking",
              "Testcontainers Testing",
              "VBA & Automation",
              "Agile/Scrum",
              "System Modernization",
              "High-Concurrency Performance",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-2 bg-bg-tertiary/40 text-text-secondary rounded-lg border border-border/80 hover:border-accent/40 hover:text-accent transition-all duration-300 text-xs font-medium cursor-default"
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
