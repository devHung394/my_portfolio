"use client";

import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { stagger, viewport } from "@/lib/animations";
import { TiltCard } from "@/components/TiltCard";

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
    title: "AHH Travel",
    subtitle: "Travel booking platform, UX/UI + Frontend",
    period: "2025",
    role: "Team of 2 · UX/UI Designer & Frontend Developer",
    bullets: [
      "Designed and developed a responsive travel platform for exploring destinations, tour info, and trip planning.",
      "Owned the full loop: wireframes → high-fidelity UI in Figma → React implementation.",
      "Improved layout structure and user flow to make browsing and trip-planning more intuitive.",
    ],
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Figma"],
    links: { live: "https://ahhtravel.netlify.app", repo: "https://github.com/QuocHung-0309/TLCN-FE.git" },
    image: "/ahhtravel.jpg",
  },
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
    bullets: ["Seamless listening, playlists; tested across screen sizes."],
    stack: ["Java", "Retrofit", "Spring Boot", "MySQL"],
    links: { repo: "https://github.com/QuocHung-0309/music_app_FE.git" },
    image: "/cisnw.jpg",
  },
  {
    title: "YOUTH-FIT",
    subtitle: "Electronic office for Youth Union",
    period: "Sep 2024 – Dec 2024",
    role: "Frontend developer",
    bullets: ["Task management with clear navigation; responsive UI for internal ops."],
    stack: ["TypeScript", "React", "Tailwind CSS"],
    links: { repo: "https://github.com/ITUTE/youth" },
    image: "/yfit.jpg",
  },
  {
    title: "OriShop",
    subtitle: "Beauty e-commerce",
    period: "Sep 2024 – Dec 2024",
    role: "Frontend developer",
    bullets: ["Intuitive shopping flows; implemented CSRF protection."],
    stack: ["Java", "Servlet/JSP", "Bootstrap", "SQL Server"],
    links: { repo: "https://github.com/QuocHung-0309/orishop.git" },
    image: "/orishop.jpg",
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[10px] px-2.5 py-1 rounded border border-[#2A2A28] text-[#6B6B67] bg-[#161614]">
      {label}
    </span>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <section id="projects" className="py-24 px-6 sm:px-10 lg:px-20 border-b border-[#2A2A28]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          {...stagger(0)}
          whileInView={stagger(0).animate}
          viewport={viewport}
          className="font-serif text-[clamp(2rem,4.2vw,2.8rem)] text-[#F0EFE9] leading-[1.1] mb-12"
        >
          Selected work
        </motion.h2>

        {/* featured */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
          className="border border-[#2A2A28] rounded-xl overflow-hidden mb-5
            hover:border-[#3A3A38] hover:-translate-y-0.5 transition-all duration-200"
        >
        <TiltCard strength={4} className="group grid md:grid-cols-2">
          {/* image */}
          <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-[#161614]">
            <Image
              src={featured.image} alt={featured.title} fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ filter: "brightness(0.9)" }}
              priority
            />
            <div className="absolute inset-0 transition-opacity duration-300"
              style={{ background: "rgba(0,0,0,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            />
            <div className="absolute top-4 left-4 font-mono text-[10px] tracking-wider text-[#F0EFE9]"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", padding: "3px 10px", borderRadius: "9999px" }}>
              01
            </div>
          </div>

          {/* content */}
          <div className="p-8 md:p-10 flex flex-col justify-between bg-[#161614]">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                {featured.period && <span className="font-mono text-[10px] px-2.5 py-1 rounded border border-[#2A2A28] text-[#6B6B67]">{featured.period}</span>}
                {featured.role   && <span className="font-mono text-[10px] px-2.5 py-1 rounded border border-[#2A2A28] text-[#6B6B67]">{featured.role}</span>}
              </div>
              <h3 className="font-serif text-2xl text-[#F0EFE9] mb-1">{featured.title}</h3>
              {featured.subtitle && <p className="font-mono text-[10px] text-[#6B6B67] mb-4">{featured.subtitle}</p>}
              <ul className="space-y-1.5">
                {featured.bullets.map((b, i) => (
                  <li key={i} className="text-[14px] leading-relaxed text-[#6B6B67]">{b}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <div className="flex flex-wrap gap-1.5 mb-5">
                {featured.stack.map((t) => <Tag key={t} label={t} />)}
              </div>
              <div className="flex gap-5">
                {featured.links?.live && (
                  <Link href={featured.links.live} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[#F0EFE9] border-b border-[#F0EFE9]/40 pb-0.5 hover:text-[#1D9E75] hover:border-[#1D9E75] transition-colors inline-flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" /> Live site
                  </Link>
                )}
                {featured.links?.repo && (
                  <Link href={featured.links.repo} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[#6B6B67] hover:text-[#F0EFE9] transition-colors inline-flex items-center gap-1">
                    <Github className="h-3 w-3" /> Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        </TiltCard>
        </motion.div>

        {/* supporting grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.16 + i * 0.08 }}
              className="border border-[#2A2A28] rounded-xl overflow-hidden bg-[#161614]
                hover:border-[#3A3A38] hover:-translate-y-0.5 transition-all duration-200"
            >
            <TiltCard strength={5} className="group block">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image src={p.image} alt={p.title} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  style={{ filter: "brightness(0.85)" }}
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] tracking-wider text-[#F0EFE9]"
                  style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", padding: "2px 8px", borderRadius: "9999px" }}>
                  0{i + 2}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-[#F0EFE9] mb-0.5">{p.title}</h3>
                {p.subtitle && <p className="font-mono text-[10px] text-[#6B6B67] mb-3">{p.subtitle}</p>}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((t) => <Tag key={t} label={t} />)}
                </div>
                <div className="flex gap-4">
                  {p.links?.live && (
                    <Link href={p.links.live} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-[10px] text-[#F0EFE9] border-b border-[#F0EFE9]/40 pb-0.5 hover:text-[#1D9E75] hover:border-[#1D9E75] transition-colors inline-flex items-center gap-1">
                      <ExternalLink className="h-2.5 w-2.5" /> Live
                    </Link>
                  )}
                  {p.links?.repo && (
                    <Link href={p.links.repo} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-[10px] text-[#6B6B67] hover:text-[#F0EFE9] transition-colors inline-flex items-center gap-1">
                      <Github className="h-2.5 w-2.5" /> Code
                    </Link>
                  )}
                </div>
              </div>
            </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
