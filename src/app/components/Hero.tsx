"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-12 max-w-6xl mx-auto bg-base text-text">
      {/* Photo */}
      <Image
        src="/sithuwin.jpg"
        alt="Sithu Win"
        width={320}
        height={320}
        className="rounded-full shadow-lg object-cover"
        priority
      />

      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Sithu Win</h1>

        <p className="text-xl text-primary mb-6 min-h-[2.25rem]">
          <Typewriter
            words={["Software Engineer", "Full-Stack Developer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <ul className="list-disc pl-5 space-y-3 mb-8">
          <li>
            Full-stack developer with 3 years of experience across Go, React.js,
            and Java-based systems.
          </li>
          <li>
            Rewrote legacy C-based schedulers to event-driven Go applications
            with real-time file and socket-based execution.
          </li>
          <li>
            Delivered cross-platform automation tools (Linux/Windows) for
            enterprise Zabbix integration.
          </li>
          <li>
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
            className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-lg hover:bg-accent transition"
          >
            <FaGithub size={20} />
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/sithu5601"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-lg hover:bg-accent transition"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </Link>

          <Link
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-5 py-3 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition"
          >
            <FaDownload size={20} />
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
}
