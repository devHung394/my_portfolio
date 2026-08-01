"use client";

import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { stagger, viewport } from "@/lib/animations";
import { TiltCard } from "@/components/TiltCard";
import { PROJECTS, type Project } from "@/app/data/projects-data";
import { useLanguage, type Lang } from "@/components/LanguageProvider";

const TEXT = {
  vi: {
    heading: "Dự án nổi bật",
    intro: "Một vài sản phẩm mình đã tự tay thiết kế và code, từ khóa luận tốt nghiệp đến các dự án cá nhân ngoài giờ học.",
    productHeading: "Dự án sản phẩm",
    transformationHeading: "Dự án chuyển đổi số",
    transformationIntro: "Các hệ thống mình từng làm cho địa phương và trường: số hóa di tích, dữ liệu liệt sĩ, website sự kiện.",
    live: "Xem",
    code: "Code",
  },
  en: {
    heading: "Selected work",
    intro: "A few things I've designed and built myself, from my graduation thesis to personal side projects.",
    productHeading: "Product projects",
    transformationHeading: "Digital transformation",
    transformationIntro: "Systems I've built for local communities and my school: heritage site digitization, records lookup, event websites.",
    live: "Live",
    code: "Code",
  },
};

function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[10px] px-2.5 py-1 rounded border border-[#2A2A28] text-[#6B6B67] bg-[#161614]">
      {label}
    </span>
  );
}

function ProjectCard({
  project, lang, live, code, priority, delay,
}: {
  project: Project;
  lang: Lang;
  live: string;
  code: string;
  priority?: boolean;
  delay: number;
}) {
  const c = project.content[lang];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay }}
      className="border border-[#2A2A28] rounded-2xl overflow-hidden bg-[#161614]
        hover:border-[#3A3A38] hover:-translate-y-0.5 transition-all duration-200"
    >
      <TiltCard strength={5} className="group block">
        <div className="relative aspect-video overflow-hidden">
          <Image src={project.image} alt={project.title} fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, 33vw"
            style={{ filter: "brightness(0.85)" }}
            priority={priority}
          />
          <div className="absolute inset-0 bg-black/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
        </div>
        <div className="p-5">
          {c.period && (
            <p className="font-mono text-[9px] tracking-[0.06em] text-[#4A4A46] mb-1.5">{c.period}</p>
          )}
          <h3 className="font-serif text-lg text-[#F0EFE9] mb-0.5">{project.title}</h3>
          {c.subtitle && <p className="font-mono text-[10px] text-[#6B6B67] mb-3">{c.subtitle}</p>}
          {c.why && (
            <p className="font-serif italic text-[13px] leading-relaxed text-[#F0EFE9]/75 mb-4 pb-0.5">
              {c.why}
            </p>
          )}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.map((s) => <Tag key={s} label={s} />)}
          </div>
          <div className="flex gap-4">
            {project.links?.live && (
              <Link href={project.links.live} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[10px] text-[#F0EFE9] border-b border-[#F0EFE9]/40 pb-0.5 hover:text-[#1D9E75] hover:border-[#1D9E75] transition-colors inline-flex items-center gap-1">
                <ExternalLink className="h-2.5 w-2.5" /> {live}
              </Link>
            )}
            {project.links?.repo && (
              <Link href={project.links.repo} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[10px] text-[#6B6B67] hover:text-[#F0EFE9] transition-colors inline-flex items-center gap-1">
                <Github className="h-2.5 w-2.5" /> {code}
              </Link>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const { lang } = useLanguage();
  const t = TEXT[lang];

  const productProjects = PROJECTS.filter((p) => p.category === "product");
  const transformationProjects = PROJECTS.filter((p) => p.category === "transformation");

  return (
    <section id="projects" className="py-24 px-6 sm:px-10 lg:px-20 border-b border-[#2A2A28]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          {...stagger(0)}
          whileInView={stagger(0).animate}
          viewport={viewport}
          className="font-serif text-[clamp(2rem,4.2vw,2.8rem)] text-[#F0EFE9] leading-[1.1] mb-3"
        >
          {t.heading}
        </motion.h2>
        <motion.p
          {...stagger(0.5)}
          whileInView={stagger(0.5).animate}
          viewport={viewport}
          className="text-[14px] text-[#6B6B67] leading-relaxed max-w-[520px] mb-12"
        >
          {t.intro}
        </motion.p>

        {/* product grid */}
        <motion.h3
          {...stagger(0.6)}
          whileInView={stagger(0.6).animate}
          viewport={viewport}
          className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#6B6B67] mb-5"
        >
          {t.productHeading}
        </motion.h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {productProjects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              lang={lang}
              live={t.live}
              code={t.code}
              priority={i === 0}
              delay={0.08 + i * 0.08}
            />
          ))}
        </div>

        {/* transformation grid */}
        <motion.h3
          {...stagger(0)}
          whileInView={stagger(0).animate}
          viewport={viewport}
          className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-[#F0EFE9] leading-[1.1] mb-3"
        >
          {t.transformationHeading}
        </motion.h3>
        <motion.p
          {...stagger(0.5)}
          whileInView={stagger(0.5).animate}
          viewport={viewport}
          className="text-[14px] text-[#6B6B67] leading-relaxed max-w-[520px] mb-8"
        >
          {t.transformationIntro}
        </motion.p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {transformationProjects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              lang={lang}
              live={t.live}
              code={t.code}
              delay={0.08 + i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
