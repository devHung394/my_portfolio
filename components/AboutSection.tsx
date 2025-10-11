// components/AboutSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Facebook, Mail, Code2, Server, GraduationCap } from "lucide-react";
import AboutPortrait from "./AboutPortrait";

export default function AboutSection() {
  // ---- In-view hook đơn giản ----
  const rootRef = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
        }
      },
      { threshold: 0.28 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // helper gắn class xuất hiện
  const fx = (delayMs = 0, extra = "") =>
    `${show ? "opacity-100 translate-y-0 blur-0 scale-100" : "opacity-0 translate-y-6 blur-[2px] scale-[0.98]"} 
     transition-all duration-700 ease-[cubic-bezier(.21,.62,.35,1)] will-change-transform will-change-opacity ${extra}`
      .trim();

  return (
    <section ref={rootRef} id="about" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      {/* BG: big text + gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(168,85,247,0.12),transparent),radial-gradient(50%_40%_at_80%_20%,rgba(56,189,248,0.10),transparent)]" />
        <div className="absolute inset-x-0 top-8 flex justify-center">
          <span className="select-none text-[16vw] leading-none font-extrabold tracking-tighter text-white/5">
            ABOUT ME
          </span>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* GRID: left avatar • right text */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT: avatar reveal */}
          <div
            className={fx(0)}
            style={{ transitionDelay: show ? "0ms" : "0ms" }}
          >
            <AboutPortrait src="/avt.jpg" alt="Quoc Hung" />
          </div>

          {/* RIGHT: text */}
          <div className="space-y-6">
            <p
              className={fx(100, "text-xs tracking-[0.35em] text-white/60")}
              style={{ transitionDelay: show ? "120ms" : "0ms" }}
            >
              MORE ABOUT ME
            </p>

            <div className="space-y-2">
              <h2
                className={fx(160, "heading-shadow text-4xl sm:text-5xl font-extrabold tracking-tight")}
                style={{ transitionDelay: show ? "180ms" : "0ms" }}
              >
                Hey! I&apos;m{" "}
                <span className="relative inline-block">
                  <span className={`${show ? "underline-sweep-text" : ""} bg-gradient-to-r from-violet-400 to-orange-300 bg-clip-text text-transparent`}>
                    Quoc Hung
                  </span>
                  {/* underline sweep khi vào view */}
                  <span
                    className={`absolute -bottom-1 left-0 block h-[6px] w-full rounded-full bg-gradient-to-r from-violet-500 to-orange-400 ${show ? "underline-sweep" : "opacity-0"}`}
                  />
                </span>
              </h2>

              {/* paragraphs */}
              <div className="space-y-4 text-lg leading-relaxed text-white/80">
                <p
                  className={fx(220)}
                  style={{ transitionDelay: show ? "240ms" : "0ms" }}
                >
                  I&apos;m a Web developer and Computer Science student with <strong>3+ years</strong> of experience.
                  I specialize in building clean, responsive, and dynamic websites using modern technologies
                  (HTML, CSS, JavaScript/TypeScript, React/Next.js).
                </p>
                <p
                  className={fx(260)}
                  style={{ transitionDelay: show ? "300ms" : "0ms" }}
                >
                  I&apos;m always leveling up my skills and currently diving deeper into backend and DevOps. Whether it&apos;s
                  full-time or freelance, I&apos;m open to opportunities where I can grow and build dope stuff with amazing people.
                </p>
              </div>
            </div>

            {/* What I Do */}
            <div className="space-y-3">
              <h3
                className={fx(300, "text-sm font-semibold text-white/80")}
                style={{ transitionDelay: show ? "340ms" : "0ms" }}
              >
                What I Do
              </h3>
              <div className="flex flex-wrap gap-2">
                <span
                  className={fx(340, "inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1.5 text-sm text-neutral-200")}
                  style={{ transitionDelay: show ? "360ms" : "0ms" }}
                >
                  <Code2 className="h-4 w-4" /> Frontend Development
                </span>
                <span
                  className={fx(380, "inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1.5 text-sm text-neutral-200")}
                  style={{ transitionDelay: show ? "400ms" : "0ms" }}
                >
                  <Server className="h-4 w-4" /> UX/UI Designer
                </span>
                <span
                  className={fx(420, "inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1.5 text-sm text-neutral-200")}
                  style={{ transitionDelay: show ? "440ms" : "0ms" }}
                >
                  <GraduationCap className="h-4 w-4" /> Computer Science
                </span>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-3">
              <h3
                className={fx(460, "text-sm font-semibold text-white/80")}
                style={{ transitionDelay: show ? "500ms" : "0ms" }}
              >
                Connect With Me
              </h3>
              <div className="flex items-center gap-3">
                {[
                  { href: "https://github.com/QuocHung-0309", Icon: Github, delay: 520 },
                  { href: "https://linkedin.com/in/hungnqh", Icon: Linkedin, delay: 560 },
                  { href: "https://facebook.com/whuq394", Icon: Facebook, delay: 600 },
                  { href: "mailto:nqhung394.work@gmail.com", Icon: Mail, delay: 640 },
                ].map(({ href, Icon, delay }) => (
                  <Link
                    key={href}
                    href={href}
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
              style={{ transitionDelay: show ? "700ms" : "0ms" }}
            >
              <Button
                className="h-11 rounded-full bg-gradient-to-r from-violet-600 to-orange-500 px-6 text-white shadow-lg shadow-violet-500/20 hover:opacity-95"
                asChild
              >
                <a href="/NongQuocHung.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* keyframes cho underline sweep & text glow */}
      <style jsx global>{`
        .underline-sweep {
          animation: underlineSweep 800ms cubic-bezier(.21,.62,.35,1) 220ms both;
        }
        .underline-sweep-text {
          animation: textGlow 900ms ease-out 160ms both;
        }
        @keyframes underlineSweep {
          0%   { clip-path: inset(0 100% 0 0); opacity: .0; }
          60%  { opacity: 1; }
          100% { clip-path: inset(0 0 0 0); opacity: 1; }
        }
        @keyframes textGlow {
          0%   { filter: drop-shadow(0 0 0 rgba(167,139,250,0)); }
          60%  { filter: drop-shadow(0 6px 22px rgba(167,139,250,.25)); }
          100% { filter: drop-shadow(0 0 0 rgba(167,139,250,0)); }
        }
      `}</style>
    </section>
  );
}
