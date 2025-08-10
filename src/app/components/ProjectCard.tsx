"use client";

import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Link from "next/link";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

export default function ProjectCard({
  project,
  index,
  isVisible,
}: ProjectCardProps) {
  return (
    <div
      className={`bg-bg-tertiary rounded-lg border border-border hover:border-accent/50 transition-all duration-300 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Project Image Placeholder */}
      <div className="h-48 bg-bg-primary rounded-t-lg flex items-center justify-center border-b border-border">
        <FaCode className="text-4xl text-accent opacity-50" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        <p className="text-text-secondary text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-bg-primary text-text-secondary rounded text-xs border border-border"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-bg-primary text-text-secondary rounded text-xs border border-border">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-bg-primary text-text-secondary hover:text-accent hover:bg-bg-secondary transition-all duration-200 rounded border border-border text-sm"
            >
              <FaGithub size={14} />
              Code
            </Link>
          ) : (
            <span className="flex items-center gap-2 px-3 py-2 bg-bg-primary text-text-muted rounded border border-border text-sm cursor-not-allowed">
              <FaGithub size={14} />
              Private
            </span>
          )}

          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-accent text-white hover:bg-accent/80 transition-all duration-200 rounded text-sm"
            >
              <FaExternalLinkAlt size={12} />
              Live
            </Link>
          ) : (
            <span className="flex items-center gap-2 px-3 py-2 bg-bg-primary text-text-muted rounded border border-border text-sm cursor-not-allowed">
              <FaExternalLinkAlt size={12} />
              N/A
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
