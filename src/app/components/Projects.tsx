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
      className="py-16 px-6 bg-bg-secondary min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            My Projects
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on, showcasing my
            experience in full-stack development, system architecture, and
            problem-solving.
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
          className={`mt-12 text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-800 delay-500`}
        >
          <div className="bg-bg-primary rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              I&apos;m constantly working on new projects and exploring emerging
              technologies. Some projects are private or under NDA, but I&apos;m
              excited to share more of my work as it becomes available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
