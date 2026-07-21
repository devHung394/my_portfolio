"use client";

import { useRef } from "react";
import Section from "./Section";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

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
    subtitle: "E-commerce for fundraising",
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
      "Task management with clear navigation & layout.",
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

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <section id="projects" className="py-28 px-6 sm:px-10 lg:px-16 border-b border-[#E5E4E1]">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.12em] text-[#6B6B67] mb-3">Case studies</p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] text-[#1A1A18]">
            Selected work
          </h2>
        </motion.div>

        {/* featured card — 2 col */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="group grid md:grid-cols-[1fr_1fr] gap-0 border border-[#E5E4E1] rounded-xl overflow-hidden mb-6 hover:border-[#1A1A18]/20 transition-colors"
        >
          {/* image */}
          <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-[#F2F1EE]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* number badge */}
            <div className="absolute top-4 left-4 font-mono text-[10px] tracking-wider text-[#1A1A18] bg-[#FAFAF8]/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E5E4E1]">
              01
            </div>
          </div>

          {/* content */}
          <div className="p-8 md:p-10 flex flex-col justify-between bg-[#FAFAF8]">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {featured.period && (
                  <span className="font-mono text-[10px] tracking-wide text-[#6B6B67] border border-[#E5E4E1] px-2.5 py-1 rounded-full">
                    {featured.period}
                  </span>
                )}
                {featured.role && (
                  <span className="font-mono text-[10px] tracking-wide text-[#6B6B67] border border-[#E5E4E1] px-2.5 py-1 rounded-full">
                    {featured.role}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-2xl text-[#1A1A18] mb-1">{featured.title}</h3>
              {featured.subtitle && (
                <p className="font-mono text-xs text-[#6B6B67] mb-4">{featured.subtitle}</p>
              )}

              <ul className="space-y-2">
                {featured.bullets.map((b, i) => (
                  <li key={i} className="text-sm leading-relaxed text-[#6B6B67]">{b}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-1.5 mb-5">
                {featured.stack.map((t) => (
                  <span key={t} className="font-mono text-[10px] tracking-wide text-[#6B6B67] bg-[#F2F1EE] border border-[#E5E4E1] px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {featured.links?.live && (
                  <Link
                    href={featured.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#1A1A18] border-b border-[#1A1A18] pb-0.5 hover:text-[#B87355] hover:border-[#B87355] transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" /> Live site
                  </Link>
                )}
                {featured.links?.repo && (
                  <Link
                    href={featured.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#6B6B67] hover:text-[#1A1A18] transition-colors"
                  >
                    <Github className="h-3 w-3" /> Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* supporting cards — 3 col */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.18 + i * 0.08 }}
              className="group border border-[#E5E4E1] rounded-xl overflow-hidden hover:border-[#1A1A18]/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* image */}
              <div className="relative aspect-[3/2] overflow-hidden bg-[#F2F1EE]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] tracking-wider text-[#1A1A18] bg-[#FAFAF8]/90 backdrop-blur-sm px-2 py-0.5 rounded-full border border-[#E5E4E1]">
                  0{i + 2}
                </div>
              </div>

              {/* content */}
              <div className="p-5 bg-[#FAFAF8]">
                <h3 className="font-serif text-lg text-[#1A1A18] mb-0.5">{p.title}</h3>
                {p.subtitle && (
                  <p className="font-mono text-[10px] text-[#6B6B67] mb-3">{p.subtitle}</p>
                )}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-[#6B6B67] bg-[#F2F1EE] border border-[#E5E4E1] px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.links?.live && (
                    <Link href={p.links.live} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-[10px] text-[#1A1A18] border-b border-[#1A1A18] pb-0.5 hover:text-[#B87355] hover:border-[#B87355] transition-colors inline-flex items-center gap-1">
                      <ExternalLink className="h-2.5 w-2.5" /> Live
                    </Link>
                  )}
                  {p.links?.repo && (
                    <Link href={p.links.repo} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-[10px] text-[#6B6B67] hover:text-[#1A1A18] transition-colors inline-flex items-center gap-1">
                      <Github className="h-2.5 w-2.5" /> Code
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
