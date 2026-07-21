"use client";

import { motion } from "framer-motion";
import { stagger, viewport } from "@/lib/animations";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 sm:px-10 lg:px-20 border-b border-[#2A2A28]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          {...stagger(0)}
          whileInView={stagger(0).animate}
          viewport={viewport}
          className="font-serif text-[clamp(2rem,4.2vw,2.8rem)] text-[#F0EFE9] leading-[1.1] mb-12"
        >
          Education
        </motion.h2>

        <motion.div
          {...stagger(1)}
          whileInView={stagger(1).animate}
          viewport={viewport}
          className="border border-[#2A2A28] rounded-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-[1fr_200px] divide-y md:divide-y-0 md:divide-x divide-[#2A2A28]">
            {/* main */}
            <div className="p-8 md:p-10 bg-[#161614]">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-mono text-[10px] border border-[#2A2A28] text-[#6B6B67] px-2.5 py-1 rounded">
                  Sep 2022 – present
                </span>
                <span className="font-mono text-[10px] border border-[#1D9E75]/30 text-[#1D9E75] bg-[#1D9E75]/8 px-2.5 py-1 rounded">
                  Software Engineering
                </span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl text-[#F0EFE9] leading-snug mb-6">
                Ho Chi Minh City University of Technology and Engineering
              </h3>

              <p className="font-mono text-[10px] tracking-[0.1em] text-[#6B6B67] mb-3">Key topics</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML, CSS, JavaScript/TypeScript, React, Tailwind CSS",
                  "Figma, Adobe Illustrator, Adobe Photoshop",
                  "Databases (SQL Server / MySQL / PostgreSQL)",
                ].map((t) => (
                  <span key={t} className="font-mono text-[10px] px-3 py-1.5 rounded border border-[#2A2A28] text-[#6B6B67] bg-[#0E0E0C]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* GPA */}
            <div className="p-8 flex flex-col justify-center gap-3 bg-[#161614]">
              <div>
                <p className="font-mono text-[10px] tracking-[0.1em] text-[#6B6B67] mb-1">GPA</p>
                <p className="font-serif text-5xl text-[#F0EFE9]">3.21</p>
                <p className="font-mono text-[10px] text-[#3A3A38] mt-1">out of 4.0</p>
              </div>
              <p className="text-[13px] text-[#6B6B67] leading-relaxed">
                Foundation supporting UI/UX and frontend work through dev collaboration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
