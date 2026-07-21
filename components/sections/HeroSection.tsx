"use client";

import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { Github, Linkedin, Facebook } from "lucide-react";
import { MagneticWrap } from "@/components/MagneticWrap";

const SOCIALS = [
  { href: "https://github.com/QuocHung-0309", Icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/hungnqh", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com/whuq394", Icon: Facebook, label: "Facebook" },
];

function scrollTo(href: string) {
  const id = href.startsWith("#") ? href.slice(1) : href;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mvX}px ${mvY}px,
    rgba(255,255,255,0.04) 0%,
    rgba(255,255,255,0.015) 30%,
    transparent 70%)`;

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mvX.set(e.clientX - rect.left);
    mvY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={heroRef}
      id="top"
      onMouseMove={onMouseMove}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-ink"
    >
      {/* grain texture */}
      <div className="grain-overlay" />

      {/* grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* spotlight cursor, driven by a motion value so the hero never re-renders on mousemove */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlight }}
      />

      {/* center content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 px-6">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="font-mono text-[10px] tracking-[0.18em] uppercase text-dust"
        >
          UI/UX Designer &amp; Frontend Developer
        </motion.span>

        {/* headline, line reveal */}
        <h1 className="space-y-0">
          <div className="overflow-hidden">
            <motion.span
              className="block font-serif text-[clamp(2.4rem,6.5vw,5.5rem)] text-snow leading-[1.05]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay: 0.22 }}
            >
              Designing &amp; developing
            </motion.span>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.span
              className="block font-serif italic text-[clamp(2.4rem,6.5vw,5.5rem)] text-dust leading-[1.1]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
            >
              beyond the ordinary
            </motion.span>
          </div>
        </h1>

        {/* subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-dust text-[14px] max-w-[420px] leading-relaxed mt-2"
        >
          I design clear flows and consistent interfaces, then help ship
          them with React and Next.js.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-4"
        >
          <MagneticWrap strength={0.3}>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollTo("#projects"); }}
              className="flex items-center gap-2 px-6 py-3 rounded-full
                border border-rim text-snow text-[13px] font-mono tracking-wide
                hover:border-moss hover:text-moss transition-colors duration-200
                active:scale-[0.97]"
            >
              View my work
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </MagneticWrap>
        </motion.div>
      </div>

      {/* utility bar: availability + socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.05 }}
        className="absolute bottom-0 left-0 right-0 border-t border-rim px-6 sm:px-10 lg:px-20"
      >
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.1em] text-dust">
              Available for internship, Ho Chi Minh City
            </span>
          </div>

          <div className="flex items-center gap-4">
            {SOCIALS.map(({ href, Icon, label }) => (
              <a key={href} href={href} aria-label={label}
                target="_blank" rel="noreferrer"
                className="text-dust hover:text-snow transition-colors duration-200">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
