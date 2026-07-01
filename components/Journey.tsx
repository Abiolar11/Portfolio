"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/lib/content";
import { Reveal, SectionLabel } from "./Reveal";

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="relative scroll-mt-24 overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Career Journey</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              From the flight line to production AI.
            </h2>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-16 pl-8 md:pl-0">
          {/* Center rail */}
          <div className="absolute left-0 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div style={{ height }} className="w-full bg-gradient-to-b from-accent via-accent to-volt" />
          </div>

          <div className="space-y-16">
            {experience.map((role, i) => {
              const left = i % 2 === 0;
              return (
                <div key={`${role.company}-${role.period}`} className="relative md:grid md:grid-cols-2 md:gap-12">
                  {/* Node */}
                  <div className="absolute left-0 top-2 -translate-x-1/2 md:left-1/2">
                    <span className="block h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink-950 shadow-[0_0_20px_rgba(55,230,180,0.6)]" />
                  </div>

                  <div className={`${left ? "md:col-start-1 md:text-right md:pr-4" : "md:col-start-2 md:pl-4"}`}>
                    <Reveal>
                      <div className="glass card-hover rounded-2xl p-6 md:p-7">
                        <span className="font-mono text-xs uppercase tracking-widest text-accent">
                          {role.tag}
                        </span>
                        <h3 className="mt-3 font-display text-2xl font-bold text-white">
                          {role.company}
                        </h3>
                        <div className={`mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-white/60 ${left ? "md:justify-end" : ""}`}>
                          <span className="font-medium text-white/80">{role.role}</span>
                          <span className="text-white/30">·</span>
                          <span className="font-mono text-sm">{role.period}</span>
                        </div>
                        <ul className={`mt-5 space-y-3 text-left`}>
                          {role.points.map((p, j) => (
                            <li key={j} className="flex gap-3 text-sm leading-relaxed text-white/65">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
