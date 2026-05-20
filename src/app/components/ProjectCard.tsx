"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
      className={`glass-panel border-border/80 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500 group flex flex-col h-full hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.15)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Graphical Console Canvas (replacing simple placeholder) */}
      <div className="h-44 bg-bg-secondary/80 flex flex-col justify-between p-4 border-b border-border/60 relative overflow-hidden select-none">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-[0.15]" />
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between z-10">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-border/80"></span>
            <span className="w-2 h-2 rounded-full bg-border/80"></span>
            <span className="w-2 h-2 rounded-full bg-border/80"></span>
          </div>
          <span className="text-[10px] font-mono text-text-muted">Module {project.id}</span>
        </div>

        {/* Dynamic Center Graphic */}
        <div className="flex flex-col items-center justify-center py-4 z-10 flex-1">
          <div className="text-xl font-bold text-accent/20 group-hover:text-accent/60 group-hover:scale-105 transition-all duration-500 font-mono tracking-widest uppercase">
            {`[ ${project.title.substring(0, 3)} ]`}
          </div>
          <span className="text-[9px] text-text-muted/50 mt-1 font-mono tracking-widest">{"// COMPILED STATUS: OK"}</span>
        </div>

        {/* Mini Console Status Bar */}
        <div className="flex items-center justify-between text-[9px] font-mono text-text-muted z-10 border-t border-border/20 pt-2">
          <span>PORT: 808{project.id}</span>
          <span className="text-accent group-hover:animate-pulse">● ACTIVE</span>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base font-bold text-text-primary tracking-wide group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          {project.featured && (
            <span className="px-2 py-0.5 bg-accent/10 border border-accent/35 text-accent text-[9px] uppercase tracking-wider rounded font-bold">
              Featured
            </span>
          )}
        </div>

        <p className="text-text-secondary text-xs mb-5 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5 select-none">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-bg-secondary border border-border/80 text-text-secondary rounded text-[10px] font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-bg-secondary border border-border/80 text-accent rounded text-[10px] font-bold">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Executable Pills / Actions */}
        <div className="flex gap-2.5 mt-auto pt-4 border-t border-border/40">
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 bg-bg-tertiary/40 text-text-secondary hover:text-accent hover:border-accent/40 hover:bg-bg-primary rounded-lg border border-border text-[11px] font-mono transition-all duration-300 flex-1 justify-center"
            >
              <FaGithub size={12} />
              <span>./code.sh</span>
            </Link>
          ) : (
            <span className="flex items-center gap-1.5 px-3 py-2 bg-bg-secondary/45 border border-border/30 text-text-muted/60 rounded-lg text-[11px] font-mono cursor-not-allowed flex-1 justify-center">
              <FaGithub size={12} />
              <span>[private]</span>
            </span>
          )}

          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 bg-accent/15 hover:bg-accent/25 text-accent hover:border-accent rounded-lg border border-accent/30 text-[11px] font-mono transition-all duration-300 flex-1 justify-center"
            >
              <FaExternalLinkAlt size={10} />
              <span>./live.exe</span>
            </Link>
          ) : (
            <span className="flex items-center gap-1.5 px-3 py-2 bg-bg-secondary/45 border border-border/30 text-text-muted/60 rounded-lg text-[11px] font-mono cursor-not-allowed flex-1 justify-center">
              <FaExternalLinkAlt size={10} />
              <span>[offline]</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
