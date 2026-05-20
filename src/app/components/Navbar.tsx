"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navigationItems = [
    { name: "home" },
    { name: "skills" },
    { name: "about" },
    { name: "projects" },
    { name: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        scrolled
          ? "bg-bg-secondary/75 backdrop-blur-md border-b border-accent/15 shadow-lg shadow-black/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-wider text-text-primary hover:text-accent transition-all duration-300 flex items-center gap-1 group"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-accent group-hover:text-primary transition-colors">&lt;</span>
          <span>SithuWin</span>
          <span className="text-accent group-hover:text-primary transition-colors">/&gt;</span>
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse ml-1"></span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1 text-text-secondary font-medium">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScrollToSection(item.name)}
              className="capitalize px-4 py-2 hover:text-accent transition-all duration-300 relative group cursor-pointer"
            >
              <span className="opacity-0 group-hover:opacity-100 text-accent transition-all duration-300 mr-1 text-xs">
                [
              </span>
              <span>{item.name}</span>
              <span className="opacity-0 group-hover:opacity-100 text-accent transition-all duration-300 ml-1 text-xs">
                ]
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-1/2 transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 text-text-primary hover:text-accent focus:outline-none transition-colors border border-border/50 rounded-lg bg-bg-tertiary/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-bg-secondary/95 backdrop-blur-md shadow-2xl border-b border-accent/20 flex flex-col items-center space-y-4 py-8 md:hidden z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScrollToSection(item.name)}
              className="capitalize text-lg text-text-secondary hover:text-accent transition-all duration-300 cursor-pointer flex items-center"
            >
              <span className="text-accent/40 mr-1 text-sm">&lt;</span>
              <span>{item.name}</span>
              <span className="text-accent/40 ml-1 text-sm">/&gt;</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
