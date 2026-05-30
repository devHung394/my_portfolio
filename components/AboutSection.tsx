// components/AboutSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github, Linkedin, Facebook, Mail,
  Code2, Layout, GraduationCap, Sparkles,
} from "lucide-react";
import AboutPortrait from "./AboutPortrait";

const TOOLS = [
  "Figma", "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Adobe Illustrator", "Git", "HTML/CSS", "Framer", "UI/UX Design",
  "Design System", "Prototyping", "Wireframing", "Responsive UI",
];

const STATS = [
  { value: "4+",  label: "Projects" },
  { value: "1yr", label: "Coding" },
  { value: "2",   label: "Stacks" },
  { value: "3.2", label: "GPA / 4.0" },
];

export default function AboutSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => { if (entries.some((e) => e.isIntersecting)) setShow(true); },
      { threshold: 0.18 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fx = (extra = "") =>
    `${show
      ? "opacity-100 translate-y-0 blur-0 scale-100"
      : "opacity-0 translate-y-6 blur-[2px] scale-[0.98]"}
     transition-all duration-700 ease-[cubic-bezier(.21,.62,.35,1)] will-change-transform ${extra}`.trim();

  return (
    <section
      ref={rootRef}
      id="about"
      className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ── BG ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(168,85,247,0.12),transparent),radial-gradient(50%_40%_at_80%_20%,rgba(56,189,248,0.10),transparent)]" />
        <div className="absolute inset-x-0 top-8 flex justify-center">
          <span className="select-none text-[16vw] leading-none font-extrabold tracking-tighter text-white/[0.03]">
            ABOUT
          </span>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* ── LEFT: portrait ── */}
          <div className={fx()} style={{ transitionDelay: show ? "0ms" : "0ms" }}>
            <AboutPortrait src="/avt.jpg" alt="Nông Quốc Hưng" />
          </div>

          {/* ── RIGHT: text ── */}
          <div className="space-y-6">
            <p
              className={fx("text-xs tracking-[0.35em] text-white/55")}
              style={{ transitionDelay: show ? "120ms" : "0ms" }}
            >
              ABOUT ME
            </p>

            {/* name + underline */}
            <div className="space-y-3">
              <h2
                className={fx("text-4xl sm:text-5xl font-extrabold tracking-tight")}
                style={{ transitionDelay: show ? "180ms" : "0ms" }}
              >
                Hi, I&apos;m{" "}
                <span className="relative inline-block">
                  <span
                    className={`${show ? "underline-sweep-text" : ""}
                      bg-gradient-to-r from-violet-400 to-orange-300 bg-clip-text text-transparent`}
                  >
                    Nông Quốc Hưng
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 block h-[5px] w-full rounded-full
                      bg-gradient-to-r from-violet-500 to-orange-400 ${show ? "underline-sweep" : "opacity-0"}`}
                  />
                </span>
              </h2>

              {/* badges */}
              <div
                className={fx("flex flex-wrap items-center gap-2")}
                style={{ transitionDelay: show ? "220ms" : "0ms" }}
              >
                {["UI/UX Designer (with Frontend)", "React / Next.js", "Figma • Design System"].map((t) => (
                  <Badge key={t} className="rounded-full bg-white/8 text-white hover:bg-white/8" variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>

              {/* paragraphs */}
              <div className="space-y-4 text-base leading-relaxed text-white/75">
                <p className={fx()} style={{ transitionDelay: show ? "260ms" : "0ms" }}>
                  I&apos;m a UI/UX designer with a frontend background (React/Next.js).
                  I enjoy turning messy problems into simple flows, clean screens,
                  and consistent components — then helping ship them smoothly.
                </p>
                <p className={fx()} style={{ transitionDelay: show ? "300ms" : "0ms" }}>
                  Software Engineering student at HCMUTE (2022–), building projects
                  across web & mobile with a focus on usability and dev-friendly handoff.
                  Currently seeking a UI/UX internship to grow inside a real product team.
                </p>
              </div>
            </div>

            {/* ── Stats row ── */}
            <div
              className={fx("grid grid-cols-4 gap-2")}
              style={{ transitionDelay: show ? "320ms" : "0ms" }}
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center rounded-2xl border border-white/[0.07]
                    bg-white/[0.03] py-3 px-1 text-center ${show ? "animate-stat-pop" : "opacity-0"}`}
                  style={{ animationDelay: show ? `${320 + i * 80}ms` : "0ms" }}
                >
                  <span className="text-lg font-extrabold text-white">{s.value}</span>
                  <span className="mt-0.5 text-[10px] text-white/40 leading-tight">{s.label}</span>
                </div>
              ))}
            </div>

            {/* ── What I Do ── */}
            <div className="space-y-3">
              <h3 className={fx("text-sm font-semibold text-white/75")} style={{ transitionDelay: show ? "400ms" : "0ms" }}>
                What I Do
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { Icon: Layout,      text: "UX Flows • IA • Wireframes",        delay: 420 },
                  { Icon: Sparkles,    text: "UI Design • Design System",          delay: 460 },
                  { Icon: Code2,       text: "Frontend UI Implementation",         delay: 500 },
                  { Icon: GraduationCap, text: "Software Engineering (Student)",   delay: 540 },
                ].map(({ Icon, text, delay }) => (
                  <span
                    key={text}
                    className={fx("inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1.5 text-sm text-neutral-200")}
                    style={{ transitionDelay: show ? `${delay}ms` : "0ms" }}
                  >
                    <Icon className="h-4 w-4 shrink-0" /> {text}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Connect ── */}
            <div className="space-y-3">
              <h3 className={fx("text-sm font-semibold text-white/75")} style={{ transitionDelay: show ? "560ms" : "0ms" }}>
                Connect
              </h3>
              <div className="flex items-center gap-3">
                {[
                  { href: "https://github.com/QuocHung-0309", Icon: Github,   label: "GitHub",   delay: 580 },
                  { href: "https://linkedin.com/in/hungnqh",  Icon: Linkedin, label: "LinkedIn", delay: 610 },
                  { href: "https://facebook.com/whuq394",     Icon: Facebook, label: "Facebook", delay: 640 },
                  { href: "mailto:nqhung394.work@gmail.com",  Icon: Mail,     label: "Email",    delay: 670 },
                ].map(({ href, Icon, label, delay }) => (
                  <Link
                    key={href}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    className={`${fx("rounded-full p-3 ring-1 ring-neutral-800 hover:bg-neutral-900/60 hover:-translate-y-0.5 transition-transform")}`}
                    style={{ transitionDelay: show ? `${delay}ms` : "0ms" }}
                  >
                    <Icon className="h-5 w-5 text-white/75" />
                  </Link>
                ))}
              </div>
            </div>

            {/* ── CTA ── */}
            <div
              className={`${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"}
                          transition-all duration-700 ease-[cubic-bezier(.21,.62,.35,1)]`}
              style={{ transitionDelay: show ? "720ms" : "0ms" }}
            >
              <div className="flex flex-wrap gap-3">
                <Button
                  className="h-11 rounded-full bg-gradient-to-r from-violet-600 to-orange-500 px-6 text-white shadow-lg shadow-violet-500/20 hover:opacity-95"
                  asChild
                >
                  <a href="/NONG-QUOC-HUNG-TopCV.vn-100226.165806.pdf" target="_blank" rel="noreferrer">
                    Download CV
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="h-11 rounded-full border-border/50 bg-transparent px-6 text-white/90 backdrop-blur-sm hover:bg-white/5"
                  asChild
                >
                  <Link href="#projects">View Case Studies</Link>
                </Button>
              </div>
              <p className="mt-3 text-sm text-white/45">
                Quick chat?{" "}
                <a className="underline underline-offset-4 hover:text-white transition-colors" href="mailto:nqhung394.work@gmail.com">
                  nqhung394.work@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ── Tools marquee ── */}
        <div
          className={`mt-16 overflow-hidden ${show ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
          style={{ transitionDelay: show ? "800ms" : "0ms" }}
        >
          <p className="mb-4 text-center text-xs tracking-[0.35em] text-white/30">TOOLS & TECHNOLOGIES</p>
          <div className="relative">
            {/* left / right fade masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-black to-transparent" />

            <div className="flex animate-marquee-left whitespace-nowrap will-change-transform">
              {/* duplicate for seamless loop */}
              {[...TOOLS, ...TOOLS].map((t, i) => (
                <span key={i} className="inline-flex items-center gap-2 mx-4 text-sm text-white/40 hover:text-white/70 transition-colors cursor-default">
                  <span className="h-1 w-1 rounded-full bg-violet-500/60" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style jsx global>{`
        .underline-sweep { animation: underlineSweep 800ms cubic-bezier(0.21,0.62,0.35,1) 220ms both; }
        .underline-sweep-text { animation: textGlow 900ms ease-out 160ms both; }
        @keyframes underlineSweep {
          0%  { clip-path: inset(0 100% 0 0); opacity: 0; }
          60% { opacity: 1; }
          100%{ clip-path: inset(0 0 0 0); opacity: 1; }
        }
        @keyframes textGlow {
          0%  { filter: drop-shadow(0 0 0 rgba(167,139,250,0)); }
          60% { filter: drop-shadow(0 6px 22px rgba(167,139,250,0.25)); }
          100%{ filter: drop-shadow(0 0 0 rgba(167,139,250,0)); }
        }
      `}</style>
    </section>
  );
}
