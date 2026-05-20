"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
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

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-accent" />,
      label: "Email",
      value: "sithuwin.dev@gmail.com",
      href: "mailto:sithuwin.dev@gmail.com",
    },
    {
      icon: <FaLinkedin className="text-primary" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sithu5601",
      href: "https://linkedin.com/in/sithu5601",
    },
    {
      icon: <FaGithub className="text-text-primary" />,
      label: "GitHub",
      value: "github.com/s1thu",
      href: "https://github.com/s1thu",
    },
    {
      icon: <FaMapMarkerAlt className="text-emerald-500" />,
      label: "Location",
      value: "Open to Remote",
      href: null,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-6 bg-bg-secondary relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="glow-spot-cyan top-10 right-20" />
      <div className="glow-spot-violet bottom-10 left-20" />

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs mb-4 uppercase tracking-widest font-semibold">
            <span>{"// INITIALIZE CONNECTION"}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-text-secondary text-sm max-w-2xl mx-auto">
            Operational gateways are open. Reach out via any of the secure communication channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Direct channels */}
          <div
            className={`space-y-6 flex flex-col justify-between ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            } transition-all duration-700`}
          >
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-2">
                {"// Communication Channels"}
              </h3>
              <p className="text-text-secondary text-xs leading-relaxed max-w-md">
                Feel free to trigger a direct connection via email, check my repositories on GitHub, or expand our network on LinkedIn. System response time: &lt; 24 hours.
              </p>
            </div>

            <div className="space-y-3.5">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className={`flex items-center gap-4 p-4 bg-bg-primary/45 border border-border/80 rounded-xl hover:border-accent/40 transition-all duration-300 group hover:shadow-[0_4px_20px_-10px_rgba(6,182,212,0.08)] ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                >
                  <div className="p-2.5 bg-bg-secondary border border-border/60 rounded-xl text-lg flex-shrink-0 group-hover:scale-105 transition-all">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-text-primary font-bold text-xs tracking-wider select-none uppercase text-text-muted">
                      {info.label}
                    </p>
                    {info.href ? (
                      <Link
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-text-secondary hover:text-accent font-mono text-xs sm:text-sm transition-colors block truncate"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-text-secondary font-mono text-xs sm:text-sm truncate">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Configuration / requirements board */}
          <div
            className={`flex flex-col justify-center ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            } transition-all duration-700`}
          >
            <div className="glass-panel border-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">
                    🛰️ Deployment Profile
                  </h4>
                  <ul className="space-y-2.5 text-text-secondary text-xs">
                    <li className="flex items-start gap-2.5">
                      <span className="text-accent font-mono">&gt;</span>
                      <span>Full-stack web & server engineering</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-accent font-mono">&gt;</span>
                      <span>Legacy backend modernization projects</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-accent font-mono">&gt;</span>
                      <span>Open to fully remote or hybrid assignments</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-accent font-mono">&gt;</span>
                      <span>Agile environments with strong dev cultures</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                    💬 Let&apos;s Debug Together
                  </h4>
                  <ul className="space-y-2.5 text-text-secondary text-xs">
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary font-mono">&gt;</span>
                      <span>System performance optimization challenges</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary font-mono">&gt;</span>
                      <span>REST & Socket integration specs</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary font-mono">&gt;</span>
                      <span>Go, React.js, and Java-based structures</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between text-xs">
                <span className="text-text-muted">{"// Availability Status:"}</span>
                <span className="text-emerald-500 font-bold uppercase tracking-widest animate-pulse flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Active / Open
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
