"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="w-full px-6 py-4 flex items-center justify-between relative z-10 shadow-lg bg-bg-secondary border-b border-border fixed top-0 left-0 right-0">
      <Link
        href="/"
        className="text-2xl font-semibold tracking-tight text-text-primary hover:text-accent transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Sithu Win
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-8 text-text-secondary font-medium">
        {navigationItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleScrollToSection(item.name)}
            className="capitalize hover:text-accent hover:underline underline-offset-4 transition-colors duration-200 cursor-pointer"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-bg-secondary shadow-lg border-b border-border flex flex-col items-center space-y-4 py-6 md:hidden z-20">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScrollToSection(item.name)}
              className="capitalize text-lg text-text-secondary hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
