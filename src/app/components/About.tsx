"use client";

import { useEffect, useRef, useState } from "react";
import { FaCode, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

export default function About() {
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

  const highlights = [
    {
      icon: <FaCode className="text-accent" />,
      title: "Backend & Systems",
      description:
        "Specialized in Go, Java, C, and PHP with a strong emphasis on multithreading, sockets, and reliable low-level systems.",
    },
    {
      icon: <FaRocket className="text-primary" />,
      title: "System Modernization",
      description:
        "Led high-impact architectural migrations of legacy core batch engines from C to high-concurrency event-driven Go.",
    },
    {
      icon: <FaUsers className="text-emerald-500" />,
      title: "Testing & Environments",
      description:
        "Engineered robust testing frameworks using Testcontainers to ensure environment parity and eliminate service bugs.",
    },
    {
      icon: <FaLightbulb className="text-warning" />,
      title: "Incident Debugging",
      description:
        "Expertise in technical investigation, root-cause debugging of multi-threaded services, and maintaining uptime.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-6 bg-bg-secondary relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="glow-spot-cyan bottom-10 right-20" />
      <div className="glow-spot-violet top-10 left-20" />

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs mb-4 uppercase tracking-widest font-semibold">
            <span>{"// PROFILE OVERVIEW"}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-text-secondary text-sm max-w-2xl mx-auto">
            A look into my journey, core drivers, and technical philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Visual Editor journey mockup */}
          <div
            className={`lg:col-span-7 glass-panel border-border rounded-2xl overflow-hidden flex flex-col ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            } transition-all duration-700`}
          >
            {/* Editor Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-bg-secondary/70 border-b border-border/80 text-xs text-text-muted select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
              </div>
              <div className="flex items-center gap-1 bg-bg-primary/60 border border-border/40 px-2 py-0.5 rounded text-accent">
                <span>📄 journey.ts</span>
              </div>
              <span className="w-4 h-4"></span>
            </div>

            {/* Editor Lines Container */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-text-secondary bg-bg-primary/20 flex-1 flex">
              {/* Line numbers gutter */}
              <div className="text-text-muted/40 select-none text-right pr-4 border-r border-border/20 space-y-1.5 min-w-[2.5rem]">
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              {/* Code lines */}
              <div className="pl-4 space-y-1.5 text-text-secondary flex-1">
                <div>
                  <span className="text-text-muted">{"// Sithu Win - Core Architecture & Systems Philosophy"}</span>
                </div>
                <div>
                  <span className="text-primary">const</span> <span className="text-accent">myJourney</span> = {`{`}
                </div>
                <div className="pl-4">
                  <span className="text-primary">experience</span>: <span className="text-warning">&quot;3+ Years Backend & Systems Engineer&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary">specialty</span>: <span className="text-warning">&quot;Modernizing legacy architectures from C/Java to concurrent Go&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary">achievements</span>: [
                </div>
                <div className="pl-8 text-warning">
                  &quot;Migrated core legacy scheduler from C to event-driven Go&quot;,
                </div>
                <div className="pl-8 text-warning">
                  &quot;Engineered real-time socket and TCP communication modules&quot;,
                </div>
                <div className="pl-8 text-warning">
                  &quot;Integrated AWS, Docker, Redis and GitHub Actions CI/CD workflows&quot;,
                </div>
                <div className="pl-8 text-warning">
                  &quot;Won top Demo & Quality Control prizes for test suite tools&quot;
                </div>
                <div className="pl-4">
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-primary">values</span>: <span className="text-warning">&quot;Performant concurrency, socket design, and comprehensive test coverage&quot;</span>
                </div>
                <div>{`};`}</div>
                <div className="pt-2">
                  <span className="text-text-muted">{"/**"}</span>
                </div>
                <div>
                  <span className="text-text-muted">{" * @description Building high-performance system backends,"}</span>
                </div>
                <div>
                  <span className="text-text-muted">{" * resolving complex race conditions, and designing clean code."}</span>
                </div>
                <div>
                  <span className="text-text-muted">{" */"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Highlights Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className={`glass-panel border-border/80 hover:border-accent/40 rounded-xl p-5 hover:bg-bg-tertiary/40 transition-all duration-300 flex items-start gap-4 hover:shadow-[0_4px_20px_-10px_rgba(6,182,212,0.1)] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
              >
                <div className="p-3 bg-bg-primary border border-border rounded-xl text-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                  {highlight.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-text-primary tracking-wide">
                    {highlight.title}
                  </h4>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Looking For banner */}
        <div
          className={`mt-16 text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-800 delay-500`}
        >
          <div className="glass-panel border-border/80 rounded-2xl p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div>
              <h3 className="text-sm font-bold text-text-primary mb-1 uppercase tracking-wider">
                📡 Current Availability Status
              </h3>
              <p className="text-text-secondary text-xs">
                Actively looking for Backend & Systems Engineer roles in Bangkok, Thailand (or open to prompt relocation).
              </p>
            </div>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2.5 bg-accent/20 hover:bg-accent/35 text-accent border border-accent/40 rounded-xl transition-all duration-300 text-xs font-semibold uppercase tracking-wider flex-shrink-0 cursor-pointer"
            >
              Initialize Connection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
