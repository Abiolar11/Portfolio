"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile, marquee } from "@/lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-32 top-10 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[32rem] w-[32rem] rounded-full bg-volt/20 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 noise opacity-[0.15] mix-blend-soft-light" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item} className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-white/60">
                {profile.title} · {profile.location}
              </span>
            </span>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              {profile.clearance}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[15vw] font-bold leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]"
          >
            <span className="block">Umar</span>
            <span className="gradient-text block animate-shimmer">Odulaja</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-white/70 md:text-xl"
          >
            {profile.tagline} Eight years turning data, machine learning, and
            generative AI into products that ship — across{" "}
            <span className="text-white">financial services, defense, and consumer tech</span>.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group relative overflow-hidden rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-105"
            >
              <span className="relative z-10">View selected work</span>
              <span className="absolute inset-0 -translate-x-full bg-white/40 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Download résumé
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-y border-white/5 bg-ink-950/40 py-4 backdrop-blur-sm">
        <div className={`flex w-max ${reduce ? "" : "animate-marquee"} gap-8`}>
          {[...marquee, ...marquee].map((word, i) => (
            <span key={i} className="flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-white/40">
              {word}
              <span className="text-accent/60">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
