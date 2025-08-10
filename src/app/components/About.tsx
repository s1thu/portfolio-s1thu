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
      title: "Full-Stack Development",
      description:
        "3+ years of experience building scalable applications with Go, Java, React.js, and modern web technologies.",
    },
    {
      icon: <FaRocket className="text-primary" />,
      title: "Performance Optimization",
      description:
        "Specialized in rewriting legacy systems and improving application performance through modern architectures.",
    },
    {
      icon: <FaUsers className="text-green-500" />,
      title: "Team Collaboration",
      description:
        "Experienced in Agile/Scrum methodologies and delivering projects under tight deadlines.",
    },
    {
      icon: <FaLightbulb className="text-warning" />,
      title: "Problem Solving",
      description:
        "Passionate about debugging complex issues and implementing innovative solutions.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 px-6 bg-bg-primary min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            About Me
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            I'm a passionate software engineer who loves creating efficient,
            scalable solutions and turning complex problems into elegant code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            } transition-all duration-800 delay-200`}
          >
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                My Journey
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                I started my career with a passion for problem-solving and have
                since developed expertise in full-stack development. My
                experience spans across multiple technologies, from backend
                systems in Go and Java to modern frontend frameworks like
                React.js and Next.js.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I specialize in modernizing legacy systems, having successfully
                rewritten C-based schedulers into event-driven Go applications
                with real-time capabilities. I'm also experienced in delivering
                cross-platform automation tools and enterprise integrations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                What Drives Me
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I'm motivated by the challenge of creating clean, efficient code
                that solves real-world problems. Whether it's optimizing
                performance, implementing new features, or mentoring team
                members, I approach every project with dedication and attention
                to detail.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className={`bg-bg-secondary p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="text-2xl mb-3">{highlight.icon}</div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {highlight.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div
          className={`mt-16 text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-800 delay-1000`}
        >
          <div className="bg-bg-secondary rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Currently Looking For
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              I'm open to new opportunities where I can contribute my skills in
              full-stack development, system architecture, and team
              collaboration. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
