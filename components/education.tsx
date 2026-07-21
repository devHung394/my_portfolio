"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="education" className="py-28 px-6 sm:px-10 lg:px-16 border-b border-[#E5E4E1]">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.12em] text-[#6B6B67] mb-3">Background</p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] text-[#1A1A18]">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="border border-[#E5E4E1] rounded-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-[2fr_1fr] divide-y md:divide-y-0 md:divide-x divide-[#E5E4E1]">
            {/* main info */}
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="font-mono text-[10px] tracking-wide text-[#6B6B67] border border-[#E5E4E1] px-2.5 py-1 rounded-full">
                  Sep 2022 – present
                </span>
                <span className="font-mono text-[10px] tracking-wide text-[#B87355] border border-[#B87355]/30 bg-[#B87355]/5 px-2.5 py-1 rounded-full">
                  Software Engineering
                </span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl text-[#1A1A18] leading-snug mb-5">
                Ho Chi Minh City University of Technology and Engineering
              </h3>

              <p className="font-mono text-[10px] tracking-[0.1em] text-[#6B6B67] mb-3">Key topics</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML, CSS, JavaScript/TypeScript, React, Tailwind CSS",
                  "Figma, Adobe Illustrator, Adobe Photoshop",
                  "Databases (SQL Server / MySQL / PostgreSQL)",
                ].map((t) => (
                  <span key={t} className="font-mono text-[10px] px-3 py-1.5 rounded-full border border-[#E5E4E1] text-[#6B6B67] bg-[#F2F1EE]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* GPA + note */}
            <div className="p-8 flex flex-col justify-center gap-4 bg-[#F2F1EE]">
              <div>
                <p className="font-mono text-[10px] tracking-[0.1em] text-[#6B6B67] mb-1">GPA</p>
                <p className="font-serif text-4xl text-[#1A1A18]">3.2</p>
                <p className="font-mono text-[10px] text-[#6B6B67]">out of 4.0</p>
              </div>
              <p className="text-sm text-[#6B6B67] leading-relaxed">
                This foundation supports my UI/UX and frontend work by helping
                me collaborate smoothly with developers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
