"use client";

import Image from "next/image";
import { Download, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { stagger, viewport } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 sm:px-10 lg:px-20 border-b border-[#2A2A28]">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[360px_1fr] items-start">
          {/* left: portrait + stats */}
          <motion.div
            {...stagger(1)}
            whileInView={stagger(1).animate}
            viewport={viewport}
            className="space-y-4"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#2A2A28]">
              <Image
                src="/avt.jpg"
                alt="Nông Quốc Hưng"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "2022",  l: "Started" },
                { v: "HCMC",  l: "Based in" },
                { v: "3.21",  l: "GPA" },
                { v: "Open",  l: "For hire" },
              ].map(({ v, l }) => (
                <div key={l} className="border border-[#2A2A28] rounded-xl p-4 bg-[#161614]">
                  <p className="font-serif text-[1.4rem] text-[#F0EFE9] leading-none">{v}</p>
                  <p className="font-mono text-[9px] text-[#6B6B67] tracking-[0.1em] mt-1.5">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* right: bio */}
          <div className="flex flex-col gap-8 lg:pt-4">
            <motion.h2
              {...stagger(2)}
              whileInView={stagger(2).animate}
              viewport={viewport}
              className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-snow leading-[1.1]"
            >
              I design interfaces that{" "}
              <span className="text-snow font-medium">think clearly</span>
              {" "}and build the code that{" "}
              <span className="text-snow font-medium">ships them.</span>
            </motion.h2>

            <motion.div
              {...stagger(3)}
              whileInView={stagger(3).animate}
              viewport={viewport}
              className="space-y-4 text-[15px] text-dust leading-relaxed"
            >
              <p>
                I&apos;m Hưng, a{" "}
                <span className="text-snow font-medium">UI/UX Designer</span>
                {" "}and{" "}
                <span className="text-snow font-medium">Frontend Developer</span>
                {" "}currently studying Software Engineering at HCMUTE, Ho Chi Minh City.
              </p>
              <p>
                My process: understand the problem deeply, structure the information
                architecture, then design component by component until the system
                feels inevitable. I hand off with{" "}
                <span className="text-snow font-medium">dev-ready Figma specs</span>
                {" "}and can build what I design.
              </p>
              <p>
                Looking for a{" "}
                <span className="text-snow font-medium">UI/UX internship</span>
                {" "}where design quality matters.
                I want to work somewhere that ships things people actually use.
              </p>
            </motion.div>

            <motion.div
              {...stagger(4)}
              whileInView={stagger(4).animate}
              viewport={viewport}
              className="flex flex-wrap gap-2"
            >
              {[
                "Figma",
                "Adobe Illustrator",
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Git",
              ].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-3 py-1.5 border border-rim text-dust rounded bg-surface"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CV download */}
            <motion.div
              {...stagger(5)}
              whileInView={stagger(5).animate}
              viewport={viewport}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="/NongQuocHung-UXUI.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                  border border-moss/40 bg-moss/10 text-moss
                  font-mono text-[11px] tracking-wide
                  hover:bg-moss/20 hover:border-moss/60 transition-all duration-200"
              >
                <Download className="h-3.5 w-3.5" />
                Download CV
              </a>
              <a
                href="/NongQuocHung-UXUI.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full
                  border border-rim text-dust
                  font-mono text-[11px] tracking-wide
                  hover:text-snow hover:border-dust transition-all duration-200"
              >
                View online <ArrowUpRight className="h-3 w-3" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
