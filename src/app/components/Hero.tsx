"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center gap-12 px-6 pt-20 max-w-6xl mx-auto bg-bg-primary text-text-primary min-h-screen">
      {/* Photo */}
      <div className="w-60 h-60 rounded-full overflow-hidden ring-4 ring-accent/20 hover:ring-accent/40 transition-all duration-300">
        <Image
          src="/sithuwin.jpg"
          alt="Sithu Win"
          width={400}
          height={400}
          className="rounded-full shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-text-primary to-accent bg-clip-text text-transparent">
          Hi, I&apos;m Sithu Win
        </h1>

        <p className="text-2xl text-accent mb-8 min-h-[2.25rem] font-medium">
          <Typewriter
            words={[
              "Software Engineer",
              "Full-Stack Developer",
              "Problem Solver",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <ul className="list-none space-y-4 mb-10 text-text-secondary">
          <li className="flex items-start gap-3">
            <span className="text-accent mt-1">▶</span>
            Full-stack developer with 3 years of experience across Go, React.js,
            and Java-based systems.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent mt-1">▶</span>
            Rewrote legacy C-based schedulers to event-driven Go applications
            with real-time file and socket-based execution.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent mt-1">▶</span>
            Delivered cross-platform automation tools (Linux/Windows) for
            enterprise Zabbix integration.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent mt-1">▶</span>
            Skilled in debugging, multithreading, and system design under tight
            delivery timelines.
          </li>
        </ul>

        {/* Links */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link
            href="https://github.com/s1thu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <FaGithub size={20} />
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/sithu5601"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </Link>

          <Link
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-bg-secondary text-text-primary border border-border rounded-lg hover:bg-bg-tertiary hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <FaDownload size={20} />
            Download CV
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-text-secondary text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
