"use client";

import { skills, certifications, education, languages, profile } from "@/lib/content";
import { Reveal, SectionLabel } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <div className="max-w-2xl">
        <Reveal>
          <SectionLabel>Capabilities</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            A full-stack data & AI toolkit.
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={(i % 3) * 0.06}>
            <div className="group h-full rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-ink-800/60">
              <h3 className="font-display text-lg font-semibold text-white">
                {group.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/70 transition-colors group-hover:border-white/15 hover:!border-accent hover:!text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Education & certifications */}
      <div className="mt-14 grid gap-4 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-accent/[0.07] to-transparent p-7">
            <SectionLabel>Education</SectionLabel>
            <div className="mt-6 space-y-6">
              {education.map((e) => (
                <div key={e.school} className="flex flex-col gap-1 border-l-2 border-accent/40 pl-5">
                  <span className="font-mono text-xs text-white/40">{e.period}</span>
                  <span className="font-display text-lg font-semibold text-white">{e.school}</span>
                  <span className="text-sm text-white/60">{e.degree}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-volt/[0.09] to-transparent p-7">
            <SectionLabel>Certifications</SectionLabel>
            <ul className="mt-6 space-y-4">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-accent/15 text-[10px] text-accent">
                    ✓
                  </span>
                  <span className="text-sm leading-snug text-white/75">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Clearance + languages */}
      <div className="mt-4 grid gap-4 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glow-ring flex h-full flex-col justify-between gap-4 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.1] to-transparent p-7">
            <SectionLabel>Clearance</SectionLabel>
            <div>
              <div className="font-display text-2xl font-bold text-white">
                {profile.clearance}
              </div>
              <p className="mt-2 text-sm text-white/60">
                Eligible for defense and regulated-industry engagements.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="h-full rounded-2xl border border-white/10 bg-ink-900/60 p-7">
            <SectionLabel>Languages</SectionLabel>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {languages.map((l) => (
                <div key={l.name} className="border-l-2 border-white/15 pl-4">
                  <div className="font-display text-lg font-semibold text-white">{l.name}</div>
                  <div className="mt-1 text-xs text-white/50">{l.level}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
