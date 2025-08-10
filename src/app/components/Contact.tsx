"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
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
      icon: <FaMapMarkerAlt className="text-green-500" />,
      label: "Location",
      value: "Open to Remote",
      href: null,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 px-6 bg-bg-primary min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities, projects,
            or just having a conversation about technology. Feel free to reach
            out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`space-y-8 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            } transition-all duration-800 delay-200`}
          >
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Get In Touch
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Whether you have a project in mind, want to discuss
                opportunities, or just want to say hello, I'd love to hear from
                you. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className={`flex items-center gap-4 p-4 bg-bg-secondary rounded-lg border border-border hover:border-accent/50 transition-all duration-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-xl">{info.icon}</div>
                  <div className="flex-1">
                    <p className="text-text-primary font-medium">
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
                        className="text-text-secondary hover:text-accent transition-colors"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-text-secondary">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV */}
            {/* <div
              className={`${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } transition-all duration-800 delay-800`}
            >
              <Link
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <FaDownload size={18} />
                Download My Resume
              </Link>
            </div> */}
          </div>

          {/* Call to Action */}
          <div
            className={`flex flex-col justify-center ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            } transition-all duration-800 delay-400`}
          >
            <div className="bg-bg-secondary rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Ready to Work Together?
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-2">
                    What I'm Looking For:
                  </h4>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Full-stack development opportunities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      System architecture and optimization projects
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Remote or hybrid work arrangements
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Collaborative team environments
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-2">
                    Let's Discuss:
                  </h4>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Your project requirements
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Technical challenges you're facing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      How I can contribute to your team
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-text-secondary text-center">
                    I'm currently{" "}
                    <span className="text-accent font-medium">available</span>{" "}
                    for new opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
