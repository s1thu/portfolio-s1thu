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
      icon: <FaGithub size={20} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/sithu5601",
      icon: <FaLinkedin size={20} />,
    },
    {
      name: "Email",
      href: "mailto:sithuwin.dev@gmail.com",
      icon: <FaEnvelope size={20} />,
    },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-border relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent text-white p-3 rounded-full hover:bg-accent/80 transition-all duration-200 shadow-lg hover:scale-105"
        aria-label="Back to top"
      >
        <FaArrowUp size={16} />
      </button>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-text-primary">Sithu Win</h3>
            <p className="text-text-secondary leading-relaxed">
              Full-stack developer passionate about creating efficient, scalable
              solutions and turning complex problems into elegant code.
            </p>
            <div className="flex gap-4">
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
                  className="text-text-secondary hover:text-accent transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollToSection(link.id)}
                  className="block text-text-secondary hover:text-accent transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">
              Get In Touch
            </h4>
            <div className="space-y-2 text-text-secondary">
              <p>📧 sithuwin.dev@gmail.com</p>
              <p>💼 linkedin.com/in/sithu5601</p>
              <p>🌍 Open to Remote Work</p>
              <Link
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-bg-tertiary text-text-primary border border-border rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-200"
              >
                📄 Download Resume
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © {currentYear} Sithu Win. All rights reserved.
            </p>
            <p className="text-text-secondary text-sm flex items-center gap-1">
              Made with <FaHeart className="text-red-500" size={12} /> using
              Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
