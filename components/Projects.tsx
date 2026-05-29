"use client";

import { useRef } from "react";
import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type Project = {
  title: string;
  subtitle?: string;
  period?: string;
  role?: string;
  bullets: string[];
  stack: string[];
  links?: { live?: string; repo?: string };
  image: string;
};

const PROJECTS: Project[] = [
  {
    title: "FlowerGrad",
    subtitle: "E-commerce for fundraising (FIT HCMUTE)",
    period: "Apr 2025 – May 2025",
    role: "Solo developer",
    bullets: [
      "E-commerce platform selling flower bouquets to support Youth Union & Student Association.",
      "Clean UI, catalog, cart; intuitive checkout flow.",
    ],
    stack: ["TypeScript", "React", "Tailwind CSS"],
    links: { live: "https://flower-shop-five-wine.vercel.app/" },
    image: "/flowergrad.jpg",
  },
  {
    title: "CisnW Music App",
    subtitle: "Android music streaming",
    period: "Feb 2025 – Apr 2025",
    role: "Frontend developer",
    bullets: [
      "Seamless listening, playlists; tested across versions & screen sizes.",
      "Focused on performance & responsiveness.",
    ],
    stack: ["Java", "Retrofit", "Spring Boot", "MySQL"],
    links: { repo: "https://github.com/QuocHung-0309/music_app_FE.git" },
    image: "/cisnw.jpg",
  },
  {
    title: "YOUTH-FIT",
    subtitle: "Electronic office for Youth Union",
    period: "Sep 2024 – Dec 2024",
    role: "Frontend developer",
    bullets: [
      "Task management platform with clear navigation & layout.",
      "Responsive, accessible UI for internal operations.",
    ],
    stack: ["TypeScript", "React", "Tailwind CSS"],
    links: { repo: "https://github.com/QuocHung-0309/YOUTH-FIT" },
    image: "/yfit.jpg",
  },
  {
    title: "OriShop",
    subtitle: "Beauty e-commerce",
    period: "Sep 2024 – Dec 2024",
    role: "Frontend developer",
    bullets: [
      "Intuitive shopping flows; implemented CSRF protection.",
      "Clear product navigation & checkout.",
    ],
    stack: ["Java", "Servlet/JSP", "Bootstrap", "SQL Server"],
    links: { repo: "https://github.com/QuocHung-0309/orishop.git" },
    image: "/orishop.jpg",
  },
];

/* ── 3D Tilt wrapper ─────────────────────────────────────────────── */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) scale3d(1.015,1.015,1.015)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.12s ease", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

/* ── Main section ────────────────────────────────────────────────── */
export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const globalY = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <Section id="projects" className="py-24">
      {/* header */}
      <div className="mb-12 text-center">
        <Badge className="border-white/10 bg-white/[0.04] text-white/70">Projects</Badge>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
          Featured{" "}
          <span className="bg-gradient-to-r from-violet-400 to-sky-300 bg-clip-text text-transparent">
            Case Studies
          </span>
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-neutral-400 text-sm">
          A selection of projects spanning e-commerce, mobile apps, and internal tools.
        </p>
      </div>

      {/* layout */}
      <div ref={sectionRef} className="grid gap-8 md:grid-cols-2">

        {/* LEFT – sticky image viewer (desktop only) */}
        <div className="relative hidden md:block">
          <div className="sticky top-24">
            <Card className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60">
              <div className="border-b border-neutral-800/80 px-6 py-5">
                <p className="text-[15px] text-sky-200/80">Agency-style case studies</p>
              </div>
              <div className="relative h-[420px] w-full overflow-hidden bg-gradient-to-b from-neutral-900/40 to-neutral-900/0">
                <motion.div style={{ y: globalY }} className="absolute inset-0">
                  {PROJECTS.map((p, i) => (
                    <ProjectImage key={p.title} idx={i} src={p.image} />
                  ))}
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent" />
              </div>
            </Card>
          </div>
        </div>

        {/* RIGHT – scroll cards */}
        <div className="space-y-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} data={p} idx={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── Sticky image (desktop left panel) ─────────────────────────── */
function ProjectImage({ idx, src }: { idx: number; src: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center 80%", "center 20%"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    mass: 0.7,
  });

  const opacity = useTransform(smooth, [0, 0.55, 0.65, 0.9, 1], [0, 0, 1, 1, 0]);
  const y       = useTransform(smooth, [0, 1], [12, -12]);

  return (
    <motion.div
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={(node: HTMLDivElement | null) => {
        const anchor = document.querySelector(`[data-project-anchor='${idx}']`);
        if (anchor) (ref as React.MutableRefObject<HTMLElement | null>).current = anchor as HTMLElement;
      }}
      className="absolute inset-0"
      style={{ opacity, y }}
    >
      <Image
        src={src || "/placeholder.jpg"}
        alt={`Project ${idx + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </motion.div>
  );
}

/* ── Project card (right column, with 3D tilt) ──────────────────── */
function ProjectCard({ data, idx }: { data: Project; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 85%", "end 50%"],
  });
  const y       = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0,  1]);

  return (
    <motion.div ref={cardRef} style={{ y, opacity }}>
      {/* anchor for image sync */}
      <div
        data-project-anchor={idx}
        className="pointer-events-none absolute h-0 w-0"
      />

      <TiltCard>
        {/* mobile image (shows on < md) */}
        <div className="relative mb-0 block md:hidden aspect-[16/9] overflow-hidden rounded-t-2xl border-x border-t border-neutral-800">
          <Image
            src={data.image || "/placeholder.jpg"}
            alt={data.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
        </div>

        <Card
          className={`rounded-b-2xl md:rounded-2xl border-x border-b md:border
            border-neutral-800 bg-neutral-900/60 p-6 md:p-8
            hover:border-neutral-700 transition-colors duration-300`}
        >
          {/* meta badges */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {data.period && (
              <Badge className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[11px] text-violet-300">
                {data.period}
              </Badge>
            )}
            {data.role && (
              <Badge className="border border-neutral-700 bg-neutral-900/70 text-neutral-200">
                {data.role}
              </Badge>
            )}
          </div>

          <h3 className="text-2xl font-bold">{data.title}</h3>
          {data.subtitle && (
            <p className="text-sm text-neutral-400">• {data.subtitle}</p>
          )}

          <div className="mt-4 space-y-2 text-neutral-300">
            {data.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                <p className="leading-relaxed text-[15px] text-white/75">{b}</p>
              </div>
            ))}
          </div>

          {/* stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {data.stack.map((t) => (
              <Badge key={t} variant="secondary" className="border-neutral-800 bg-neutral-800/60 text-neutral-200">
                {t}
              </Badge>
            ))}
          </div>

          {/* links */}
          <div className="mt-5 flex gap-3">
            {data.links?.live && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="rounded-full bg-transparent border-neutral-700 hover:bg-white/5 hover:-translate-y-0.5 transition-all"
              >
                <Link href={data.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live
                </Link>
              </Button>
            )}
            {data.links?.repo && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="rounded-full bg-transparent border-neutral-700 hover:bg-white/5 hover:-translate-y-0.5 transition-all"
              >
                <Link href={data.links.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Code
                </Link>
              </Button>
            )}
          </div>
        </Card>
      </TiltCard>
    </motion.div>
  );
}
