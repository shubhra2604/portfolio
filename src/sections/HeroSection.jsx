import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";

const heroLottieUrl =
  "https://assets5.lottiefiles.com/packages/lf20_iorpbol0.json";
const terminalLines = [
  "$ ./portfolio --boot",
  "Initializing developer profile...",
  "System ready for impactful builds.",
];

export default function HeroSection({ profile }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const currentLine = terminalLines[lineIndex];
    let timeoutId;

    if (phase === "typing") {
      if (charIndex < currentLine.length) {
        timeoutId = setTimeout(() => setCharIndex((prev) => prev + 1), 36);
      } else {
        timeoutId = setTimeout(() => setPhase("hold"), 850);
      }
    } else if (phase === "hold") {
      timeoutId = setTimeout(() => {
        if (lineIndex === terminalLines.length - 1) {
          setPhase("reset");
        } else {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
          setPhase("typing");
        }
      }, 650);
    } else if (phase === "reset") {
      timeoutId = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
        setPhase("typing");
      }, 900);
    }

    return () => clearTimeout(timeoutId);
  }, [lineIndex, charIndex, phase]);

  const typedLines = terminalLines
    .slice(0, lineIndex)
    .concat(terminalLines[lineIndex]?.slice(0, charIndex) || "");

  return (
    <section id="hero" className="px-4 pt-6 md:px-8 md:pt-8">
      <header
        data-aos="fade-up"
        className="scan-lines relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2.2rem] border border-indigo-300/30 bg-gradient-to-br from-[#0b1020] via-[#111827] to-[#1e1b4b] py-12 shadow-[0_0_45px_rgba(99,102,241,0.12)] backdrop-blur-xl md:py-14"
      >
        <Motion.div
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl"
          animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          className="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-amber-400/14 blur-3xl"
          animate={{ y: [0, -14, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/16 blur-[110px]" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 md:px-14">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="terminal-panel !p-6 !pt-12 lg:!p-8 lg:!pt-12"
          >
            <div className="terminal-dots">
              <span className="bg-red-500" />
              <span className="bg-yellow-500" />
              <span className="bg-green-500" />
            </div>

            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                FULL STACK • AI SYSTEMS • SCALABLE WEB APPLICATIONS
              </p>

              <h1 className="text-4xl font-black leading-[1.1] text-white lg:text-5xl">
                <span className="block">Shubhra Kiran Bid</span>
              </h1>

              <p className="text-lg font-semibold text-slate-200">
                Full-Stack Developer • AI Builder
              </p>

              <p className="max-w-xl text-sm leading-relaxed text-slate-300 lg:max-w-lg lg:text-base">
                I build scalable web and AI-powered applications with React,
                Node.js, and Python—focused on clean architecture and
                high-performance user experiences.
              </p>

              <div className="inline-flex w-fit items-center rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-sm font-semibold text-emerald-200">
                🟢 Available for internships & freelance opportunities
              </div>

              <div className="rounded-xl border border-indigo-300/35 bg-slate-900/65 p-3 font-mono text-sm text-slate-300">
                <p className="text-amber-300">{typedLines[0] || "\u00A0"}</p>
                <p className="mt-1 text-slate-400">
                  {typedLines[1] || "\u00A0"}
                </p>
                <p className="mt-1 text-slate-300">
                  {typedLines[2] || "\u00A0"}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-amber-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-500/20"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full border border-amber-300/35 bg-slate-900/60 px-7 py-3 text-sm font-semibold text-amber-200 shadow-md backdrop-blur-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.28)]"
                >
                  Hire Me
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-300/30 bg-slate-900/60 text-slate-200 transition-all duration-300 hover:scale-105 hover:text-indigo-200 hover:shadow-[0_0_18px_rgba(99,102,241,0.35)]"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/30 bg-slate-900/60 text-slate-200 transition-all duration-300 hover:scale-105 hover:text-violet-200 hover:shadow-[0_0_18px_rgba(167,139,250,0.35)]"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
                <Link
                  to="/resume"
                  aria-label="Resume"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/30 bg-slate-900/60 text-slate-200 transition-all duration-300 hover:scale-105 hover:text-amber-200 hover:shadow-[0_0_18px_rgba(245,158,11,0.35)]"
                >
                  <HiOutlineDocumentText className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            className="relative mx-auto w-full max-w-xl"
            data-aos="zoom-in"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.08, duration: 0.55, ease: "easeOut" }}
          >
            <div className="rounded-3xl border border-indigo-300/30 bg-slate-900/55 p-5 shadow-[0_0_28px_rgba(99,102,241,0.16)] backdrop-blur-xl transition-transform duration-500 hover:scale-[1.03]">
              <Player
                autoplay
                loop
                src={heroLottieUrl}
                className="h-[280px] w-full max-h-[400px] object-contain md:h-[360px]"
              />
            </div>

            <Motion.div
              className="pointer-events-none absolute -left-6 top-8 hidden h-12 w-12 rounded-xl border border-indigo-300/35 bg-indigo-300/10 shadow-lg backdrop-blur-xl md:block"
              animate={{ y: [0, -12, 0], rotate: [12, 18, 12] }}
              transition={{
                duration: 6.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Motion.div
              className="pointer-events-none absolute -right-6 bottom-10 hidden h-14 w-14 rounded-2xl border border-amber-300/35 bg-amber-300/10 shadow-lg backdrop-blur-xl md:block"
              animate={{ y: [0, 11, 0], rotate: [-6, -12, -6] }}
              transition={{
                duration: 7.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Motion.div>
        </div>
      </header>
    </section>
  );
}
