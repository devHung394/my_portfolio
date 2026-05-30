"use client";

import Link from "next/link";
import { ArrowRight, Download, Mail, Github, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticWrap } from "@/components/MagneticWrap";
import { useEffect, useState } from "react";

const ROLES = ["UI/UX Designer", "Frontend Developer", "Product Thinker"];

const STATS = [
  { value: "4+", label: "Projects" },
  { value: "1yr", label: "Experience" },
  { value: "∞", label: "Ideas" },
];

const SOCIALS = [
  { href: "https://github.com/QuocHung-0309",  Icon: Github,   label: "GitHub" },
  { href: "https://linkedin.com/in/hungnqh",   Icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com/whuq394",      Icon: Facebook, label: "Facebook" },
  { href: "mailto:nqhung394.work@gmail.com",   Icon: Mail,     label: "Email" },
];

export default function HeroSection() {
  const [roleIdx, setRoleIdx]   = useState(0);
  const [fadeIn,  setFadeIn]    = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setFadeIn(true);
      }, 350);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const left  = ["U", "X", "/", "U", "I"];
  const right = ["P", "o", "r", "t", "f", "o", "l", "i", "o"];

  return (
    <section
      id="top"
      className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* ── Available badge ── */}
        <div
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300 backdrop-blur-sm animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open for UI/UX Internship
        </div>

        {/* ── Name label ── */}
        <p
          className="mt-5 text-xs font-semibold tracking-[0.42em] text-white/35 uppercase animate-fade-up"
          style={{ animationDelay: "0.12s" }}
        >
          Nông Quốc Hưng
        </p>

        {/* ── Big animated title ── */}
        <h1 className="mt-2 text-balance text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          {left.map((ch, i) => (
            <span
              key={`l${i}`}
              className="inline-block animate-hero-reveal"
              style={{ animationDelay: `${0.18 + i * 0.05}s` }}
            >
              {ch}
            </span>
          ))}

          {/* × brand mark */}
          <span
            className="relative mx-3 inline-flex items-center justify-center align-middle animate-hero-pop"
            aria-hidden="true"
          >
            <span className="absolute -inset-5 rounded-full bg-primary/10 blur-2xl" />
            <span className="absolute -inset-3 rounded-full opacity-60 animate-xPulse bg-primary/10" />
            <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 bg-[length:220%_220%] animate-xShimmer" />
              <span className="relative text-3xl font-extrabold text-primary">×</span>
            </span>
          </span>

          {right.map((ch, i) => (
            <span
              key={`r${i}`}
              className="inline-block animate-hero-reveal"
              style={{ animationDelay: `${0.18 + (left.length + 1 + i) * 0.05}s` }}
            >
              {ch}
            </span>
          ))}
        </h1>

        {/* ── Rotating role ── */}
        <div
          className="mt-5 h-7 overflow-hidden animate-fade-up"
          style={{ animationDelay: "0.85s" }}
        >
          <span
            className={`gradient-text text-lg font-semibold inline-block transition-all duration-300 ${
              fadeIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            {ROLES[roleIdx]}
          </span>
        </div>

        {/* ── Subtitle ── */}
        <p
          className="mx-auto mt-4 max-w-xl text-base font-light text-white/45 sm:text-lg animate-fade-up leading-relaxed"
          style={{ animationDelay: "0.95s" }}
        >
          I turn complex problems into clean, consistent UIs — then help ship
          them with React & Next.js.
        </p>

        {/* ── Stats strip ── */}
        <div
          className="mt-8 flex items-stretch divide-x divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm animate-fade-up"
          style={{ animationDelay: "1.05s" }}
        >
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center px-7 py-3">
              <span className="text-2xl font-extrabold text-white">{s.value}</span>
              <span className="text-[11px] text-white/40 mt-0.5 tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── CTA buttons ── */}
        <div
          className="flex flex-wrap justify-center gap-3 pt-8 animate-fade-up"
          style={{ animationDelay: "1.15s" }}
        >
          <MagneticWrap>
            <Button
              size="lg"
              asChild
              className="h-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 text-base font-medium text-white shadow-[0_8px_40px_-10px_rgba(139,92,246,0.7)] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Link href="#projects">
                View Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </MagneticWrap>
          <MagneticWrap>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 rounded-full border-white/15 bg-white/[0.04] px-8 text-base font-medium text-foreground backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/[0.08] transition-all duration-200"
            >
              <a
                href="/NONG-QUOC-HUNG-TopCV.vn-100226.165806.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </MagneticWrap>
        </div>

        {/* ── Social icons ── */}
        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "1.3s" }}
        >
          {SOCIALS.map(({ href, Icon, label }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-full p-2.5 ring-1 ring-white/10 bg-white/[0.03] text-white/55 hover:text-white hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all duration-200"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <span className="text-xs text-white/25 ml-1 hidden sm:inline">
            nqhung394.work@gmail.com
          </span>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/20 p-2">
          <div className="h-3 w-1.5 animate-pulse rounded-full bg-muted-foreground/40" />
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style jsx global>{`
        @keyframes hero-reveal {
          0%  { opacity: 0; transform: translateY(18px) rotateX(35deg); filter: blur(6px); }
          60% { filter: blur(0); }
          100%{ opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        .animate-hero-reveal {
          animation: hero-reveal 0.6s cubic-bezier(0.21, 0.62, 0.35, 1) both;
          will-change: transform, opacity, filter;
        }
        @keyframes hero-pop {
          0%  { transform: scale(0.92); opacity: 0; }
          60% { transform: scale(1.06); opacity: 1; }
          100%{ transform: scale(1); }
        }
        .animate-hero-pop { animation: hero-pop 0.5s ease-out both; animation-delay: 0.35s; }
        @keyframes xShimmer {
          0%  { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100%{ background-position: 0% 50%; }
        }
        .animate-xShimmer { animation: xShimmer 3.2s ease-in-out infinite; }
        @keyframes xPulse {
          0%, 100%{ opacity: 0.35; transform: scale(1); }
          50%     { opacity: 0.6;  transform: scale(1.15); }
        }
        .animate-xPulse { animation: xPulse 2.6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
