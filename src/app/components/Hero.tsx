"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-center gap-12 px-6 max-w-6xl mx-auto min-h-screen pt-28 pb-16 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="glow-spot-cyan top-20 left-10" />
      <div className="glow-spot-violet bottom-20 right-10" />

      {/* Left side: Terminal & Bio */}
      <div className="flex-1 order-2 lg:order-1 w-full max-w-xl z-10">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs mb-5 uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping"></span>
            System Active
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-primary">
              Sithu Win
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-accent font-semibold mb-6 flex items-center gap-2">
            <span className="text-text-secondary font-normal text-lg">
              &gt;
            </span>
            <Typewriter
              words={[
                "Software Engineer",
                "Backend & Systems Engineer",
                "Systems Modernizer",
              ]}
              loop={true}
              cursor
              cursorStyle="▊"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>

          {/* Terminal Dashboard Screen */}
          <div className="w-full glass-panel border-border rounded-xl shadow-2xl overflow-hidden mb-8">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-bg-secondary/60 border-b border-border/80">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs text-text-muted select-none">
                sithu_win.sh
              </span>
              <span className="w-4 h-4"></span>
            </div>

            {/* Terminal Content */}
            <div className="p-5 font-mono text-sm leading-relaxed space-y-4">
              <div>
                <span className="text-accent">$</span>{" "}
                <span className="text-primary">whoami</span>
                <p className="text-text-secondary ml-4">
                  sithu-win (Backend & Systems Engineer)
                </p>
              </div>

              <div>
                <span className="text-accent">$</span>{" "}
                <span className="text-primary">cat about.json</span>
                <div className="text-text-secondary ml-4 space-y-1">
                  <p className="text-emerald-500">{`{`}</p>
                  <p className="pl-4">
                    <span className="text-primary">&quot;experience&quot;</span>
                    : <span className="text-warning">&quot;4+ Years&quot;</span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-primary">
                      &quot;technical_stack&quot;
                    </span>
                    :{" "}
                    <span className="text-warning">
                      [&quot;Go&quot;, &quot;Java&quot;, &quot;AWS&quot;,
                      &quot;Docker&quot;, &quot;Redis&quot;]
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-primary">&quot;specialty&quot;</span>:{" "}
                    <span className="text-warning">
                      &quot;Legacy system modernization (C to Go)&quot;
                    </span>
                  </p>
                  <p className="text-emerald-500">{`}`}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-border/40 text-xs text-text-muted">
                System uptime: 100% | Location: Bangkok, Thailand (Open to
                relocate)
              </div>
            </div>
          </div>

          {/* Links / CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://github.com/s1thu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-bg-tertiary hover:bg-bg-primary text-text-primary border border-border hover:border-accent/40 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-xl text-sm font-medium"
            >
              <FaGithub size={16} className="text-accent" />
              <span>github.exe</span>
            </Link>

            <Link
              href="https://linkedin.com/in/sithu5601"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-primary/20 hover:bg-primary/30 text-text-primary border border-primary/40 hover:border-primary rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-xl text-sm font-medium"
            >
              <FaLinkedin size={16} className="text-primary" />
              <span>linkedin.lnk</span>
            </Link>

            <Link
              href="https://drive.google.com/drive/folders/1B7OhnEM6m-m3wIenDhtcrtPi-cLmuC0s?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-accent/20 hover:bg-accent/30 text-text-primary border border-accent/40 hover:border-accent rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-xl text-sm font-medium"
            >
              <FaDownload size={15} className="text-accent" />
              <span>download_cv.pdf</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right side: Portrait Photo */}
      <div className="flex-shrink-0 order-1 lg:order-2 w-64 h-64 sm:w-80 sm:h-80 relative z-10 flex items-center justify-center">
        {/* Glowing border backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-3xl opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute inset-2 bg-gradient-to-bl from-accent to-primary rounded-3xl opacity-15 blur-lg"></div>

        {/* Outer Frame with neon gradient border */}
        <div className="w-full h-full rounded-3xl p-1 bg-gradient-to-tr from-accent/40 via-border/50 to-primary/40 shadow-2xl relative">
          <div className="w-full h-full rounded-[20px] overflow-hidden bg-bg-secondary">
            <Image
              src="/sithuwin.jpg"
              alt="Sithu Win Portrait"
              width={400}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-out filter brightness-95 hover:brightness-100"
              priority
            />
          </div>
          {/* Subtle neon light overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-3xl border border-white/5 bg-gradient-to-b from-transparent via-transparent to-black/35"></div>
        </div>
      </div>
    </section>
  );
}
