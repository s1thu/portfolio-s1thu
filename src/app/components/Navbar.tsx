"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between relative z-10 shadow-md bg-base">
      <Link
        href="/"
        className="text-2xl font-semibold tracking-tight text-text"
        onClick={() => setIsOpen(false)}
      >
        Sithu Win
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-8 text-text font-medium">
        {["about", "projects", "contact"].map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            className="capitalize hover:text-primary hover:underline underline-offset-4 transition"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-text focus:outline-none focus:ring-2 focus:ring-primary rounded"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-base shadow-md flex flex-col items-center space-y-4 py-6 md:hidden z-20">
          {["about", "projects", "contact"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              onClick={() => setIsOpen(false)}
              className="capitalize text-lg text-text hover:text-primary transition"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
