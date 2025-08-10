"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 md:px-6 max-w-6xl mx-auto bg-bg-primary text-text-primary min-h-screen py-8 md:py-0"
    >
      {/* Photo */}
      <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full overflow-hidden ring-4 ring-accent/20 hover:ring-accent/40 transition-all duration-300 flex-shrink-0">
        <Image
          src="/sithuwin.jpg"
          alt="Sithu Win"
          width={400}
          height={400}
          className="w-full h-full rounded-full shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-text-primary to-accent bg-clip-text text-transparent">
          Hi, I&apos;m Sithu Win
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-accent mb-6 md:mb-8 min-h-[2.25rem] font-medium">
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

        <ul className="list-none space-y-3 md:space-y-4 mb-8 md:mb-10 text-text-secondary text-sm sm:text-base">
          <li className="flex items-start gap-3">
            <span className="text-accent mt-1 flex-shrink-0">▶</span>
            <span>
              Full-stack developer with 3 years of experience across Go,
              React.js, and Java-based systems.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent mt-1 flex-shrink-0">▶</span>
            <span>
              Rewrote legacy C-based schedulers to event-driven Go applications
              with real-time file and socket-based execution.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent mt-1 flex-shrink-0">▶</span>
            <span>
              Delivered cross-platform automation tools (Linux/Windows) for
              enterprise Zabbix integration.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent mt-1 flex-shrink-0">▶</span>
            <span>
              Skilled in debugging, multithreading, and system design under
              tight delivery timelines.
            </span>
          </li>
        </ul>

        {/* Links */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
          <Link
            href="https://github.com/s1thu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base"
          >
            <FaGithub size={18} />
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/sithu5601"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </Link>

          <Link
            href="/cv.pdf"
            download
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-bg-secondary text-text-primary border border-border rounded-lg hover:bg-bg-tertiary hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base"
          >
            <FaDownload size={18} />
            Download CV
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-text-secondary text-xs sm:text-sm">
            Scroll to explore
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-border rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-accent rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
