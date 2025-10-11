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


/** ---- DATA (bạn đổi theo ý) ---- */
type Project = {
  title: string;
  subtitle?: string;
  period?: string;
  role?: string;
  bullets: string[];
  stack: string[];
  links?: { live?: string; repo?: string };
  image: string; // /public path
};

const PROJECTS: Project[] = [
  {
    title: "FlowerGrad",
    subtitle: "E-commerce for fundraising (FIT HCMUTE)",
    period: "Apr 2025 – May 2025",
    role: "Solo developer",
    bullets: [
      "E-commerce platform selling flower bouquets to support Youth Union & Student Association.",
      "Clean UI, catalog, cart; intuitive checkout."
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
      "Seamless listening, playlists; tested across versions & sizes.",
      "Focused on performance & responsiveness."
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
      "Responsive, accessible UI for internal operations."
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
      "Clear product navigation & checkout."
    ],
    stack: ["Java", "Servlet/JSP", "Bootstrap", "SQL Server"],
    links: { repo: "https://github.com/QuocHung-0309/orishop.git" },
    image: "/orishop.jpg",
  },
];

/** ---- COMPONENT ---- */
export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  // tổng tiến trình toàn section (cho parallax nhẹ nếu muốn)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const globalY = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <Section id="projects" className="py-24">
      <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Projects</h2>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs tracking-[0.3em] text-white/70">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500" />
          <span>FEATURED CASE STUDIES</span>
        </div>
      </div>

      <div ref={sectionRef} className="grid gap-8 md:grid-cols-2">
        {/* LEFT: Sticky media stack */}
        <div className="relative">
          <div className="sticky top-24">
            <Card className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60">
              <div className="border-b border-neutral-800/80 px-6 py-5">
                <p className="text-[17px] text-sky-200/90">Agency-style case studies</p>
              </div>
              <div className="relative h-[420px] w-full overflow-hidden bg-gradient-to-b from-neutral-900/40 to-neutral-900/0">
                {/* Stack tất cả hình, điều khiển bằng tiến trình của mỗi card bên phải */}
                <motion.div style={{ y: globalY }} className="absolute inset-0">
                  {PROJECTS.map((p, i) => (
                    <ProjectImage key={p.title} idx={i} src={p.image} />
                  ))}
                </motion.div>
                {/* overlay gradient giống ảnh mẫu */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent" />
              </div>
            </Card>
          </div>
        </div>

        {/* RIGHT: Scroll cards – mỗi card điều khiển 1 ảnh */}
        <div className="space-y-10">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} data={p} idx={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/** ---- Helpers ---- */

// Ảnh stacked: opacity + y phụ thuộc progress của card i
function ProjectImage({ idx, src }: { idx: number; src: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // Dùng CENTER làm anchor để đổi muộn: khi tâm card đi qua vùng 80% -> 20% viewport
    // (tức phải kéo khá sâu rồi mới coi là "active")
    offset: ["center 80%", "center 20%"],
  });

  // làm mượt tiến trình
  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    mass: 0.7,
  });

  // Đổi MUỘN: giữ opacity=0 đến ~55% tiến trình, sau đó mới bật lên
  // và giữ 1 đến gần 90% rồi mới tắt.
  const opacity = useTransform(smooth, [0, 0.55, 0.65, 0.9, 1], [0, 0, 1, 1, 0]);

  // Trượt nhẹ, biên độ thấp để đỡ cảm giác "lao"
  const y = useTransform(smooth, [0, 1], [12, -12]);

  return (
    <motion.div
      // gắn chung anchor với card bên phải (data-project-anchor)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={(node) => {
        const anchor = document.querySelector(`[data-project-anchor='${idx}']`);
        if (anchor) (ref as any).current = anchor as HTMLDivElement;
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


// Card ở cột phải: có anchor vô hình để liên kết với ảnh
function ProjectCard({ data, idx }: { data: Project; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start 85%", "end 50%"] });
  const y = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={cardRef} style={{ y, opacity }}>
      {/* anchor dùng cho ProjectImage (đồng bộ progress) */}
      <div data-project-anchor={idx} className="pointer-events-none absolute h-0 w-0" />

      <Card className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {data.period && (
            <Badge className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[11px] text-violet-300">
              {data.period}
            </Badge>
          )}
          {data.role && (
            <Badge className="border border-neutral-700 bg-neutral-900/70 text-neutral-200">{data.role}</Badge>
          )}
        </div>

        <h3 className="text-2xl font-bold">{data.title}</h3>
        {data.subtitle && <p className="text-sm text-neutral-400">• {data.subtitle}</p>}

        <div className="mt-5 space-y-2 text-neutral-300">
          {data.bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
              <p className="leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {data.stack.map((t) => (
            <Badge key={t} variant="secondary" className="border-neutral-800 bg-neutral-800/60 text-neutral-200">
              {t}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {data.links?.live && (
            <Button asChild size="sm" variant="outline" className="rounded-full bg-transparent">
              <Link href={data.links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live
              </Link>
            </Button>
          )}
          {data.links?.repo && (
            <Button asChild size="sm" variant="outline" className="rounded-full bg-transparent">
              <Link href={data.links.repo} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Code
              </Link>
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
