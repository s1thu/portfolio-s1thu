"use client";

import { useEffect, useRef, useState } from "react";
import { getAllProjects, Project } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [projects] = useState<Project[]>(getAllProjects());
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

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 px-6 bg-bg-primary relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="glow-spot-cyan top-20 left-20" />
      <div className="glow-spot-violet bottom-20 right-20" />

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs mb-4 uppercase tracking-widest font-semibold">
            <span>{"// DEPLOYED REPOSITORIES"}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 tracking-tight">
            My Projects
          </h2>
          <p className="text-text-secondary text-sm max-w-2xl mx-auto">
            A showcase of systems engineering, full-stack implementations, and structural problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Additional Information */}
        <div
          className={`mt-16 text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-800 delay-500`}
        >
          <div className="glass-panel border-border/80 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-sm font-bold text-text-primary mb-3 uppercase tracking-wider">
              📦 Additional Operational Modules
            </h3>
            <p className="text-text-secondary text-xs max-w-2xl mx-auto leading-relaxed">
              I am constantly developing utility systems and exploring new architectural standards. Some enterprise tools are restricted by NDAs, but I am excited to share modular packages as they become available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
