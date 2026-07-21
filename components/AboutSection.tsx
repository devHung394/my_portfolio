"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Facebook, Mail, Download, ArrowUpRight } from "lucide-react";
import AboutPortrait from "./AboutPortrait";
import { motion, useInView } from "framer-motion";

const TOOLS = [
  "Figma", "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Adobe Illustrator", "Git", "HTML/CSS", "Framer",
  "UI/UX Design", "Design System", "Prototyping",
  "Wireframing", "Responsive UI",
];

const STATS = [
  { value: "4+", label: "Projects" },
  { value: "1 yr", label: "Experience" },
  { value: "3.2", label: "GPA / 4.0" },
];

const SOCIALS = [
  { href: "https://github.com/QuocHung-0309", Icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/hungnqh", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com/whuq394", Icon: Facebook, label: "Facebook" },
  { href: "mailto:nqhung394.work@gmail.com", Icon: Mail, label: "Email" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
});

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-28 px-6 sm:px-10 lg:px-16 border-b border-[#E5E4E1]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid items-start gap-16 md:grid-cols-[1fr_1.15fr]">

          {/* portrait */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <AboutPortrait src="/avt.jpg" alt="Nông Quốc Hưng" />

            {/* stats under portrait */}
            <div className="mt-8 grid grid-cols-3 divide-x divide-[#E5E4E1] border border-[#E5E4E1] rounded-lg overflow-hidden">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col items-center py-4 px-2 text-center">
                  <span className="font-serif text-2xl text-[#1A1A18]">{s.value}</span>
                  <span className="font-mono text-[10px] text-[#6B6B67] mt-1 tracking-wide">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* text */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <p className="font-mono text-xs tracking-[0.12em] text-[#6B6B67] mb-4">
                About me
              </p>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] text-[#1A1A18]">
                Hi, I&apos;m{" "}
                <em style={{ fontStyle: "italic" }}>Nông Quốc Hưng</em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="space-y-4 text-base leading-[1.75] text-[#6B6B67] max-w-lg"
            >
              <p>
                A UI/UX designer with a frontend background in React and Next.js.
                I enjoy turning messy problems into simple flows, clean screens,
                and consistent components, then helping ship them smoothly.
              </p>
              <p>
                Software Engineering student at HCMUTE (2022 &ndash; present),
                building across web and mobile with a focus on usability and
                developer-friendly handoff.
              </p>
            </motion.div>

            {/* what I do */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <p className="font-mono text-xs tracking-[0.12em] text-[#6B6B67] mb-3">
                What I do
              </p>
              <div className="flex flex-wrap gap-2">
                {["UX flows & IA", "Wireframes to hi-fi", "UI systems", "Frontend implementation", "Dev-ready handoff"].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-[#E5E4E1] text-[#6B6B67] bg-[#F2F1EE]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="flex flex-wrap gap-5 pt-1"
            >
              <a
                href="/NongQuocHung-UXUI.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide
                  text-[#1A1A18] border-b border-[#1A1A18] pb-0.5
                  hover:text-[#B87355] hover:border-[#B87355] transition-colors"
              >
                <Download className="h-3 w-3" />
                Download CV
              </a>
              <Link
                href="#projects"
                className="inline-flex items-center gap-1 font-mono text-xs tracking-wide
                  text-[#6B6B67] hover:text-[#1A1A18] transition-colors"
              >
                View case studies
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </motion.div>

            {/* socials */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
              className="flex items-center gap-3 pt-1"
            >
              {SOCIALS.map(({ href, Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="p-2 rounded-full border border-[#E5E4E1] text-[#6B6B67]
                    hover:text-[#1A1A18] hover:border-[#1A1A18] transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Tools marquee */}
        <div className="mt-20 overflow-hidden">
          <p className="font-mono text-[10px] tracking-[0.18em] text-[#6B6B67] mb-5">
            Tools &amp; technologies
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#FAFAF8] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#FAFAF8] to-transparent" />
            <div className="flex animate-marquee-left whitespace-nowrap">
              {[...TOOLS, ...TOOLS].map((t, i) => (
                <span key={i} className="inline-flex items-center gap-5 mx-5 font-mono text-xs text-[#6B6B67]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
