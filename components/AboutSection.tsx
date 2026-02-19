// components/AboutSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Code2,
  Layout,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import AboutPortrait from "./AboutPortrait";

export default function AboutSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setShow(true);
      },
      { threshold: 0.28 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fx = (delayMs = 0, extra = "") =>
    `${show ? "opacity-100 translate-y-0 blur-0 scale-100" : "opacity-0 translate-y-6 blur-[2px] scale-[0.98]"} 
     transition-all duration-700 ease-[cubic-bezier(.21,.62,.35,1)] will-change-transform will-change-opacity ${extra}`.trim();

  return (
    <section
      ref={rootRef}
      id="about"
      className="relative z-10 py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* BG */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(168,85,247,0.12),transparent),radial-gradient(50%_40%_at_80%_20%,rgba(56,189,248,0.10),transparent)]" />
        <div className="absolute inset-x-0 top-8 flex justify-center">
          <span className="select-none text-[16vw] leading-none font-extrabold tracking-tighter text-white/5">
            ABOUT
          </span>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT */}
          <div
            className={fx(0)}
            style={{ transitionDelay: show ? "0ms" : "0ms" }}
          >
            <AboutPortrait src="/avt.jpg" alt="Nông Quốc Hưng" />
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <p
              className={fx(100, "text-xs tracking-[0.35em] text-white/60")}
              style={{ transitionDelay: show ? "120ms" : "0ms" }}
            >
              ABOUT ME
            </p>

            <div className="space-y-3">
              <h2
                className={fx(
                  160,
                  "heading-shadow text-4xl sm:text-5xl font-extrabold tracking-tight",
                )}
                style={{ transitionDelay: show ? "180ms" : "0ms" }}
              >
                Hi, I&apos;m{" "}
                <span className="relative inline-block">
                  <span
                    className={`${
                      show ? "underline-sweep-text" : ""
                    } bg-gradient-to-r from-violet-400 to-orange-300 bg-clip-text text-transparent`}
                  >
                    Nông Quốc Hưng
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 block h-[6px] w-full rounded-full bg-gradient-to-r from-violet-500 to-orange-400 ${
                      show ? "underline-sweep" : "opacity-0"
                    }`}
                  />
                </span>
              </h2>

              {/* mini headline */}
              <div
                className={fx(
                  200,
                  "flex flex-wrap items-center justify-start gap-2",
                )}
                style={{ transitionDelay: show ? "220ms" : "0ms" }}
              >
                <Badge
                  className="rounded-full bg-white/10 text-white hover:bg-white/10"
                  variant="secondary"
                >
                  UI/UX Designer (with Frontend)
                </Badge>
                <Badge
                  className="rounded-full bg-white/10 text-white hover:bg-white/10"
                  variant="secondary"
                >
                  React / Next.js
                </Badge>
                <Badge
                  className="rounded-full bg-white/10 text-white hover:bg-white/10"
                  variant="secondary"
                >
                  Figma • Design System
                </Badge>
              </div>

              {/* paragraphs */}
              <div className="space-y-4 text-lg leading-relaxed text-white/80">
                <p
                  className={fx(240)}
                  style={{ transitionDelay: show ? "260ms" : "0ms" }}
                >
                  I&apos;m a UI/UX designer with a frontend background
                  (React/Next.js). I enjoy turning messy problems into simple
                  flows, clean screens, and consistent components—then helping
                  ship them smoothly.
                </p>

                <p
                  className={fx(280)}
                  style={{ transitionDelay: show ? "300ms" : "0ms" }}
                >
                  I&apos;m a Software Engineering student (HCMUTE), started in
                  2022. I&apos;ve built projects across web apps and e-commerce,
                  focusing on usability, responsive UI, and clean handoff
                  between design and development. I&apos;m currently seeking a
                  UI/UX internship to grow in a product team.
                </p>
              </div>
            </div>

            {/* What I Do */}
            <div className="space-y-3">
              <h3
                className={fx(320, "text-sm font-semibold text-white/80")}
                style={{ transitionDelay: show ? "340ms" : "0ms" }}
              >
                What I Do
              </h3>

              <div className="flex flex-wrap gap-2">
                <span
                  className={fx(
                    360,
                    "inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1.5 text-sm text-neutral-200",
                  )}
                  style={{ transitionDelay: show ? "360ms" : "0ms" }}
                >
                  <Layout className="h-4 w-4" /> UX Flows • IA • Wireframes
                </span>

                <span
                  className={fx(
                    400,
                    "inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1.5 text-sm text-neutral-200",
                  )}
                  style={{ transitionDelay: show ? "400ms" : "0ms" }}
                >
                  <Sparkles className="h-4 w-4" /> UI Design • Design System
                </span>

                <span
                  className={fx(
                    440,
                    "inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1.5 text-sm text-neutral-200",
                  )}
                  style={{ transitionDelay: show ? "440ms" : "0ms" }}
                >
                  <Code2 className="h-4 w-4" /> Frontend UI Implementation
                </span>

                <span
                  className={fx(
                    480,
                    "inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1.5 text-sm text-neutral-200",
                  )}
                  style={{ transitionDelay: show ? "480ms" : "0ms" }}
                >
                  <GraduationCap className="h-4 w-4" /> Software Engineering
                  (Student)
                </span>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-3">
              <h3
                className={fx(520, "text-sm font-semibold text-white/80")}
                style={{ transitionDelay: show ? "540ms" : "0ms" }}
              >
                Connect
              </h3>

              <div className="flex items-center gap-3">
                {[
                  {
                    href: "https://github.com/QuocHung-0309",
                    Icon: Github,
                    delay: 560,
                    label: "GitHub",
                  },
                  {
                    href: "https://linkedin.com/in/hungnqh",
                    Icon: Linkedin,
                    delay: 600,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://facebook.com/whuq394",
                    Icon: Facebook,
                    delay: 640,
                    label: "Facebook",
                  },
                  {
                    href: "mailto:nqhung394.work@gmail.com",
                    Icon: Mail,
                    delay: 680,
                    label: "Email",
                  },
                ].map(({ href, Icon, delay, label }) => (
                  <Link
                    key={href}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    className={`${fx(delay, "rounded-full p-3 ring-1 ring-neutral-800 hover:bg-neutral-900/60")} hover:-translate-y-0.5`}
                    style={{ transitionDelay: show ? `${delay}ms` : "0ms" }}
                  >
                    <Icon className="h-5 w-5 text-white/80" />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className={`${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"} 
                          transition-all duration-700 ease-[cubic-bezier(.21,.62,.35,1)]`}
              style={{ transitionDelay: show ? "740ms" : "0ms" }}
            >
              <div className="flex flex-wrap gap-3">
                <Button
                  className="h-11 rounded-full bg-gradient-to-r from-violet-600 to-orange-500 px-6 text-white shadow-lg shadow-violet-500/20 hover:opacity-95"
                  asChild
                >
                  {/* đặt file PDF trong /public để link này chạy */}
                  <a
                    href="/NONG-QUOC-HUNG-TopCV.vn-100226.165806.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
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

              <p className="mt-3 text-sm text-white/55">
                Prefer a quick chat? Email me at{" "}
                <a
                  className="underline underline-offset-4 hover:text-white"
                  href="mailto:nqhung394.work@gmail.com"
                >
                  nqhung394.work@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style jsx global>{`
        .underline-sweep {
          animation: underlineSweep 800ms cubic-bezier(0.21, 0.62, 0.35, 1)
            220ms both;
        }
        .underline-sweep-text {
          animation: textGlow 900ms ease-out 160ms both;
        }
        @keyframes underlineSweep {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
          }
          60% {
            opacity: 1;
          }
          100% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
        }
        @keyframes textGlow {
          0% {
            filter: drop-shadow(0 0 0 rgba(167, 139, 250, 0));
          }
          60% {
            filter: drop-shadow(0 6px 22px rgba(167, 139, 250, 0.25));
          }
          100% {
            filter: drop-shadow(0 0 0 rgba(167, 139, 250, 0));
          }
        }
      `}</style>
    </section>
  );
}
