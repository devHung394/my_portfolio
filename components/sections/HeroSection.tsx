"use client";

import { useRef, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { Github, Linkedin, Facebook } from "lucide-react";
import { MagneticWrap } from "@/components/MagneticWrap";
import { Typewriter } from "@/components/Typewriter";
import { TiltCard } from "@/components/TiltCard";
import { useLanguage } from "@/components/LanguageProvider";

function KineticName({ text, delay = 0 }: { text: string; delay?: number }) {
  const letters = Array.from(text);
  return (
    <span aria-label={text} style={{ perspective: 500 }}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ y: "70%", opacity: 0, rotateX: -50 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.028,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: "bottom", willChange: "transform" }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

const CONTENT = {
  vi: {
    roles: [
      "UI/UX Designer",
      "Frontend Developer",
      "Lập trình viên React & Next.js",
      "Bí thư Đoàn khoa CNTT",
    ],
    greeting: "Xin chào, mình là",
    name: "Nông Quốc Hưng",
    subtext:
      "Kỹ sư Công nghệ Thông tin, chuyên ngành Công nghệ Phần mềm, Công nghệ Kỹ thuật TP.HCM.",
    cta: "Xem công việc của mình",
    availability: "TP. Hồ Chí Minh, sẵn sàng cho thực tập và dự án mới",
  },
  en: {
    roles: [
      "UI/UX Designer",
      "Frontend Developer",
      "React & Next.js Developer",
      "Faculty Youth Union Secretary",
    ],
    greeting: "Hello, I'm",
    name: "Nông Quốc Hưng",
    subtext:
      "Information Technology Engineer, majoring in Software Engineering, Ho Chi Minh City University of Technology and Engineering.",
    cta: "View my work",
    availability: "Ho Chi Minh City, open to internships and new projects",
  },
};

const SOCIALS = [
  { href: "https://github.com/QuocHung-0309", Icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/hungnqh", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com/whuq394", Icon: Facebook, label: "Facebook" },
];

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];
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
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-ink py-28"
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

      {/* split content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20
        grid gap-12 lg:gap-16 lg:grid-cols-[1fr_380px] items-center">

        {/* left: identity */}
        <div className="flex flex-col gap-4 order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="font-mono text-[10px] tracking-[0.18em] uppercase text-dust min-h-[1.4em]"
          >
            <Typewriter key={lang} words={t.roles} />
          </motion.span>

          {/* headline, line reveal */}
          <h1 className="space-y-0">
            <div className="overflow-hidden">
              <motion.span
                className="block font-serif italic text-[clamp(1.4rem,3vw,2rem)] text-dust leading-[1.2]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: 0.22 }}
              >
                {t.greeting}
              </motion.span>
            </div>
            <div className="pb-1">
              <span className="block font-serif text-[clamp(2.6rem,5.8vw,4.6rem)] text-snow leading-[1.05]">
                <KineticName text={t.name} delay={0.45} />
              </span>
            </div>
          </h1>

          {/* subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-dust text-[14px] max-w-[440px] leading-relaxed mt-2"
          >
            {t.subtext}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="mt-4"
          >
            <MagneticWrap strength={0.3}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                  border border-rim text-snow text-[13px] font-mono tracking-wide
                  hover:border-moss hover:text-moss transition-colors duration-200
                  active:scale-[0.97]"
              >
                {t.cta}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </MagneticWrap>
          </motion.div>
        </div>

        {/* right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="order-1 lg:order-2 w-full max-w-[280px] mx-auto lg:max-w-none lg:mx-0"
        >
          <TiltCard strength={6} className="group block rounded-2xl">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-rim">
              <Image
                src="/avt.jpg"
                alt="Nông Quốc Hưng"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 280px, 380px"
              />
            </div>
          </TiltCard>
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
              {t.availability}
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
