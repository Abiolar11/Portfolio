"use client";

import { profile, stats } from "@/lib/content";
import { Reveal, SectionLabel } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel>About</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Engineer by training,{" "}
              <span className="gradient-text">scientist</span> by craft.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-white/70">{profile.summary}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              I started on the factory floor solving F-16 hardware problems, moved
              into building the data platforms behind a $500M defense program, and
              now design the LLM-powered products and risk models that a global bank
              runs in production. The throughline: I make complex systems
              legible — and profitable.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="group h-full bg-ink-900 p-8 transition-colors hover:bg-ink-800">
              <div className="font-display text-4xl font-bold text-white transition-colors group-hover:text-accent md:text-5xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm leading-snug text-white/50">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
