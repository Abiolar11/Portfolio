"use client";

import { profile } from "@/lib/content";
import { Reveal, SectionLabel } from "./Reveal";

const socials = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "in/umarodulaja", href: profile.linkedin },
  { label: "GitHub", value: "Abioar11", href: profile.github },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^0-9]/g, "")}` },
];

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel>Let&apos;s build</SectionLabel>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
            Have a problem worth <span className="gradient-text">solving?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            I&apos;m always open to conversations about ambitious data, ML, and
            generative AI work. Reach out — I read every message.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-ink-950 transition-transform hover:scale-105"
          >
            {profile.email}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-ink-900/60 p-5 text-left transition-all hover:border-accent/40 hover:bg-ink-800/60"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-white/40">
                  {s.label}
                </div>
                <div className="mt-2 truncate text-sm font-medium text-white transition-colors group-hover:text-accent">
                  {s.value}
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/40 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-accent">◆</span>
          <span>{profile.name} · {profile.title}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Résumé
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
        </div>
        <span>© {new Date().getFullYear()} — Built with Next.js</span>
      </div>
    </footer>
  );
}
