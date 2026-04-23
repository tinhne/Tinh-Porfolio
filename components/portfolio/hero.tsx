"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const [time, setTime] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const vietnamTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(vietnamTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("levantrungtinh13@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8">
        {/* Terminal-style breadcrumb navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-mono text-sm text-muted-foreground mb-24 lg:mb-32"
        >
          <span className="text-primary">~</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">le.van.trung.tinh</span>
          <span className="text-muted-foreground">/</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 animate-pulse" />
            <span className="text-emerald-500">available</span>
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="text-muted-foreground">vietnam</span>
          <span className="text-muted-foreground ml-auto hidden md:block">
            {time} ICT
          </span>
        </motion.nav>

        {/* Main content - Asymmetric grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-balance">
              <span className="text-foreground">Building</span>
              <br />
              <span className="text-primary">full-stack</span>
              <br />
              <span className="text-foreground">applications</span>
              <br />
              <span className="italic text-muted-foreground">
                from scratch.
              </span>
            </h1>

            <div className="mt-12 max-w-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fresher Developer passionate about building
                <span className="text-foreground font-medium">
                  {" "}
                  Full Stack
                </span>{" "}
                applications with
                <span className="text-foreground font-medium"> Node.js</span>,
                <span className="text-foreground font-medium"> NestJS</span> &
                <span className="text-foreground font-medium"> Next.js</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Eager to learn and grow. Open to work anywhere, ready to take on
                new challenges.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 py-3 bg-primary text-primary-foreground font-mono text-sm 
                         border-2 border-primary hover:bg-transparent hover:text-primary
                         transition-colors duration-200"
              >
                <span className="flex items-center gap-2">
                  {copied ? (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Copy Email
                    </>
                  )}
                </span>
              </motion.button>

              <motion.a
                href="/LeVanTrungTinh_CV.pdf"
                download="SoftwareEngineer_LeVanTrungTinh_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 py-3 border-2 border-primary bg-transparent text-primary font-mono text-sm
                         hover:bg-primary hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </motion.a>

              <motion.a
                href="#works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border-2 border-border text-foreground font-mono text-sm
                         hover:border-primary hover:text-primary transition-colors duration-200 flex items-center h-[52px]"
              >
                View Selected Works
              </motion.a>
            </div>
          </motion.div>

          {/* Right column - Status cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* About card */}
            <div className="border border-border p-6 bg-card">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                About Me
              </span>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A curious developer who loves building things from scratch. Open
                to learning any technology that the job requires. Always ready
                to take on new challenges.
              </p>
            </div>

            {/* Code snippet card */}
            <div className="border border-border bg-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-secondary/50">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-xs text-muted-foreground ml-2">
                  developer.ts
                </span>
              </div>
              <div className="p-4 font-mono text-xs leading-relaxed">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span> = {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">name</span>:{" "}
                  <span className="text-amber-400">
                    &quot;Le Van Trung Tinh&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">role</span>:{" "}
                  <span className="text-amber-400">
                    &quot;Full Stack Developer&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">available</span>:{" "}
                  <span className="text-blue-400">true</span>,
                </p>
                {/* <p className="pl-4"><span className="text-emerald-400">skills</span>: [<span className="text-amber-400">&quot;Node.js&quot;</span>, <span className="text-amber-400">&quot;NestJS&quot;</span>, <span className="text-amber-400">&quot;Next.js&quot;</span>],</p> */}
                <p>{"}"};</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-auto">
              {[
                { name: "GitHub", href: "https://github.com/tinhne" },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/trung-t%C3%ADnh-l%C3%AA-v%C4%83n-b72669297/",
                },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-muted-foreground hover:text-primary 
                           transition-colors duration-200 underline underline-offset-4"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-3"
        >
          <div className="w-px h-16 bg-border relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-4 bg-primary"
              animate={{ y: [0, 48, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span
            className="font-mono text-xs text-muted-foreground uppercase tracking-widest 
                         writing-mode-vertical rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
