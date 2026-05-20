"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/s1thu",
      icon: <FaGithub size={18} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/sithu5601",
      icon: <FaLinkedin size={18} />,
    },
    {
      name: "Email",
      href: "mailto:sithuwin.dev@gmail.com",
      icon: <FaEnvelope size={18} />,
    },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-border/60 relative py-12 mt-12">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-bg-tertiary text-accent p-3.5 rounded-lg border border-accent/20 hover:border-accent hover:text-white transition-all duration-300 shadow-xl shadow-black/80 hover:scale-110 flex items-center justify-center cursor-pointer group"
        aria-label="Back to top"
      >
        <FaArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-1 text-lg font-bold text-text-primary">
              <span className="text-accent">&lt;</span>
              <span>SithuWin</span>
              <span className="text-accent">/&gt;</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              Full-stack developer passionate about creating efficient, scalable
              solutions and turning complex problems into elegant code.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-2.5 bg-bg-tertiary border border-border hover:border-accent/50 hover:text-accent rounded-lg text-text-secondary transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              {"// Navigation"}
            </h4>
            <nav className="flex flex-col space-y-2.5">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollToSection(link.id)}
                  className="text-text-secondary hover:text-accent transition-all duration-200 text-left text-sm flex items-center gap-1.5 group cursor-pointer"
                >
                  <span className="text-accent/0 group-hover:text-accent/100 transition-all duration-200">&gt;</span>
                  <span>{link.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              {"// Directory"}
            </h4>
            <div className="space-y-2 text-text-secondary text-sm">
              <p className="flex items-center gap-2">
                <span className="text-accent">email:</span>
                <a href="mailto:sithuwin.dev@gmail.com" className="hover:text-accent transition-colors">
                  sithuwin.dev@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-accent">status:</span>
                <span>Open to Remote</span>
              </p>
              <div className="pt-2">
                <Link
                  href="https://drive.google.com/drive/folders/1B7OhnEM6m-m3wIenDhtcrtPi-cLmuC0s?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-bg-tertiary hover:bg-bg-primary text-text-primary border border-border hover:border-accent/40 rounded-lg transition-all duration-300 text-sm font-medium"
                >
                  <span>cat resume.txt</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/40 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-xs">
              © {currentYear} Sithu Win. All rights reserved.
            </p>
            <p className="text-text-muted text-xs flex items-center gap-1.5 justify-center">
              <span>Made with</span>
              <FaHeart className="text-primary animate-pulse" size={10} />
              <span>using Next.js & TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
