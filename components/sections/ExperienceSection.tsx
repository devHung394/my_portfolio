"use client";

import { motion } from "framer-motion";
import { stagger, viewport } from "@/lib/animations";

const HIGHLIGHTS = [
  "Designed responsive websites for travel booking, service platforms, and e-commerce products.",
  "Developed user flows, wireframes, and high-fidelity interfaces aligned with product and business objectives.",
  "Contributed to design system development and maintained visual consistency across products.",
  "Worked closely with developers to ensure accurate implementation of design specifications.",
  "Implemented responsive interfaces from Figma designs using React.js, HTML, CSS, and JavaScript.",
  "Built and maintained reusable frontend components to support scalable product development.",
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 sm:px-10 lg:px-20 border-b border-[#2A2A28]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          {...stagger(0)}
          whileInView={stagger(0).animate}
          viewport={viewport}
          className="font-serif text-[clamp(2rem,4.2vw,2.8rem)] text-[#F0EFE9] leading-[1.1] mb-12"
        >
          Work Experience
        </motion.h2>

        <motion.div
          {...stagger(1)}
          whileInView={stagger(1).animate}
          viewport={viewport}
          className="border border-[#2A2A28] rounded-xl overflow-hidden bg-[#161614]"
        >
          <div className="p-8 md:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-8">
              <div>
                <h3 className="font-serif text-2xl text-[#F0EFE9] leading-snug">
                  UX/UI Designer &amp; Frontend Developer Intern
                </h3>
                <p className="font-mono text-[11px] text-[#6B6B67] mt-1.5 tracking-[0.04em]">
                  DuDi Software
                </p>
              </div>
              <span className="shrink-0 font-mono text-[10px] border border-[#2A2A28] text-[#6B6B67] px-2.5 py-1 rounded">
                Apr 2025 – Sep 2025
              </span>
            </div>

            <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {HIGHLIGHTS.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-[#6B6B67]">
                  <span className="mt-0.5 text-[#3A3A38] select-none">-</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
