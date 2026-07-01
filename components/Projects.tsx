"use client";

import { useState, MouseEvent } from "react";
import { projects, profile } from "@/lib/content";
import { Reveal, SectionLabel } from "./Reveal";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  };

  return (
    <Reveal delay={(index % 2) * 0.08}>
      <div
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 p-8 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_40px_120px_-50px_rgba(55,230,180,0.55)]"
      >
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
        <div className="relative">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-white/30">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
              ↗
            </span>
          </div>
          <h3 className="mt-6 font-display text-2xl font-bold text-white">
            {project.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {project.blurb}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-white/10 bg-ink-950/60 px-2.5 py-1 font-mono text-[11px] text-white/55"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>Selected Work</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                Side projects, shipped.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-white/60">
                A sample of the things I build after hours — from autonomous
                agents to predictive pipelines.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              More on GitHub
              <span>↗</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
