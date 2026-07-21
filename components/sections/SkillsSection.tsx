"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stagger, viewport } from "@/lib/animations";

const MARQUEE = [
  "Figma", "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Adobe Illustrator", "Git", "Framer Motion",
  "UI Design", "Design System", "Prototyping", "Wireframing",
  "Miro", "SQL Server", "MySQL", "PostgreSQL",
  "Jira", "Trello", "Postman", "Agile / Scrum",
];

const GRADIENT_BORDER = {
  background: "linear-gradient(135deg, #2A2A26, #1A1A18)",
  borderRadius: "1rem",
  padding: "1px",
} as const;

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 sm:px-10 lg:px-20 py-24 border-b border-rim">
      <div className="max-w-7xl mx-auto">
        {/* headline */}
        <motion.h2
          {...stagger(0)}
          whileInView={stagger(0).animate}
          viewport={viewport}
          className="font-serif text-[clamp(2rem,4.2vw,2.8rem)] text-snow leading-[1.1] mb-16"
        >
          What I do
        </motion.h2>

        {/* 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">

          {/* ── Card 1: UX / UI Design ── */}
          <motion.div
            {...stagger(1)}
            whileInView={stagger(1).animate}
            viewport={viewport}
            className="flex flex-col"
            style={GRADIENT_BORDER}
          >
            <div className="flex-1 rounded-[15px] bg-surface flex flex-col min-h-[520px] group overflow-hidden">
              {/* top content */}
              <div className="p-8 flex flex-col gap-4 shrink-0">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-moss">
                  Full process
                </span>

                <h3 className="font-serif text-[2.25rem] leading-[1.1] text-snow">
                  UX / UI Design
                </h3>

                <p className="text-dust text-[13px] leading-relaxed max-w-[320px]">
                  From user research and wireframes to polished UI systems,
                  then dev-ready Figma handoff.
                </p>

                {/* tool icon boxes */}
                <div className="flex gap-3 mt-2">
                  {[
                    { abbr: "Fg", title: "Figma" },
                    { abbr: "Ai", title: "Adobe Illustrator" },
                    { abbr: "Mi", title: "Miro" },
                  ].map(({ abbr, title }) => (
                    <div
                      key={abbr}
                      title={title}
                      className="w-10 h-10 rounded-xl border border-rim bg-ink
                        flex items-center justify-center
                        font-mono text-[11px] text-dust
                        hover:border-dust hover:text-snow
                        transition-colors duration-200"
                    >
                      {abbr}
                    </div>
                  ))}
                </div>
              </div>

              {/* image mockup */}
              <div className="relative flex-1 mx-4 mb-4 rounded-xl overflow-hidden border border-rim bg-ink min-h-[220px]">
                <Image
                  src="/modern-ecommerce-interface.png"
                  alt="UI Design mockup"
                  fill
                  className="object-cover object-top opacity-60
                    group-hover:opacity-85 group-hover:scale-[1.02]
                    transition-all duration-700 ease-out"
                />
                {/* bottom gradient blend */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, #141412 0%, transparent 55%)" }}
                />
                {/* float label */}
                <div className="absolute top-3 left-3 flex items-center gap-2
                  bg-ink/80 backdrop-blur-sm border border-rim rounded-lg px-3 py-1.5">
                  <span className="font-mono text-[9px] tracking-[0.1em] text-dust uppercase">
                    Figma · Design System
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Card 2: Frontend ── */}
          <motion.div
            {...stagger(2)}
            whileInView={stagger(2).animate}
            viewport={viewport}
            className="flex flex-col"
            style={GRADIENT_BORDER}
          >
            <div className="flex-1 rounded-[15px] bg-surface flex flex-col min-h-[520px] group overflow-hidden">
              {/* top content */}
              <div className="p-8 flex flex-col gap-4 shrink-0">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-moss">
                  Build &amp; ship
                </span>

                <h3 className="font-serif text-[2.25rem] leading-[1.1] text-snow">
                  Frontend
                </h3>

                <p className="text-dust text-[13px] leading-relaxed max-w-[320px]">
                  React and Next.js with TypeScript, component architecture,
                  animations, and pixel-perfect UI implementation.
                </p>

                {/* tool chips */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Git"].map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-3 py-1.5 rounded-lg
                        border border-rim text-dust tracking-[0.06em]
                        hover:border-dust hover:text-snow transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* real project screenshot */}
              <div className="relative flex-1 mx-4 mb-4 rounded-xl overflow-hidden border border-rim bg-ink min-h-[220px]">
                <Image
                  src="/ahhtravel.jpg"
                  alt="AHH Travel interface"
                  fill
                  className="object-cover object-top opacity-60
                    group-hover:opacity-85 group-hover:scale-[1.02]
                    transition-all duration-700 ease-out"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, #141412 0%, transparent 55%)" }}
                />
                <div className="absolute top-3 right-3 flex items-center gap-2
                  bg-ink/80 backdrop-blur-sm border border-rim rounded-lg px-3 py-1.5">
                  <span className="font-mono text-[9px] tracking-[0.1em] text-dust uppercase">
                    Next.js · TypeScript
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* marquee */}
      <div className="mt-12 overflow-hidden border-t border-rim pt-8">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex gap-8 shrink-0">
              {MARQUEE.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[11px] tracking-[0.12em] uppercase text-dust"
                >
                  {skill}
                  <span className="text-rim mx-3">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
