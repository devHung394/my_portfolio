"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DESIGN_SKILLS = [
  "Problem framing", "User journey", "IA + Flows",
  "Wireframe to hi-fi", "UI states", "Design system", "Handoff",
];

const FRONTEND_SKILLS = [
  "React UI", "Responsive layout", "Component thinking",
  "UI polish", "Dev-friendly handoff",
];

const DESIGN_TOOLS = ["Figma", "Adobe Illustrator"];
const FRONTEND_TOOLS = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="skills" className="py-28 px-6 sm:px-10 lg:px-16 border-b border-[#E5E4E1]">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.12em] text-[#6B6B67] mb-3">Expertise</p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] text-[#1A1A18]">
            UX/UI &amp; frontend execution
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Design card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="border border-[#E5E4E1] rounded-xl p-7 bg-[#FAFAF8]"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-[#6B6B67] mb-1">Primary</p>
                <h3 className="font-serif text-xl text-[#1A1A18]">UX / UI</h3>
                <p className="font-mono text-[10px] text-[#6B6B67] mt-1">
                  Case study · Flows · UI system · Handoff
                </p>
              </div>
              <span className="font-mono text-[10px] tracking-wide text-[#6B6B67] border border-[#E5E4E1] px-2.5 py-1 rounded-full">
                Design
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {DESIGN_SKILLS.map((t) => (
                <span key={t} className="font-mono text-[10px] px-3 py-1.5 rounded-full border border-[#E5E4E1] text-[#6B6B67] bg-[#F2F1EE]">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E5E4E1]">
              <p className="font-mono text-[10px] tracking-[0.1em] text-[#6B6B67] mb-2">Tools</p>
              <div className="flex flex-wrap gap-2">
                {DESIGN_TOOLS.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-[#B87355]/40 text-[#B87355] bg-[#B87355]/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Frontend card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="border border-[#E5E4E1] rounded-xl p-7 bg-[#FAFAF8]"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-[#6B6B67] mb-1">Supporting</p>
                <h3 className="font-serif text-xl text-[#1A1A18]">Frontend</h3>
                <p className="font-mono text-[10px] text-[#6B6B67] mt-1">
                  React / Next.js · TypeScript · Tailwind
                </p>
              </div>
              <span className="font-mono text-[10px] tracking-wide text-[#6B6B67] border border-[#E5E4E1] px-2.5 py-1 rounded-full">
                Engineering
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {FRONTEND_SKILLS.map((t) => (
                <span key={t} className="font-mono text-[10px] px-3 py-1.5 rounded-full border border-[#E5E4E1] text-[#6B6B67] bg-[#F2F1EE]">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E5E4E1]">
              <p className="font-mono text-[10px] tracking-[0.1em] text-[#6B6B67] mb-2">Stack</p>
              <div className="flex flex-wrap gap-2">
                {FRONTEND_TOOLS.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-[#B87355]/40 text-[#B87355] bg-[#B87355]/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
