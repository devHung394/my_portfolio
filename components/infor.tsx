"use client";

import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { MagneticWrap } from "@/components/MagneticWrap";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
});

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-center px-6 sm:px-10 lg:px-16"
    >
      {/* subtle grain texture */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="w-full max-w-6xl mx-auto pt-20 pb-16">
        <div className="max-w-3xl">

          {/* role label */}
          <motion.p
            {...fadeUp(0.1)}
            className="font-mono text-xs tracking-[0.12em] text-[#6B6B67] mb-8"
          >
            UI/UX Designer &amp; Frontend Developer
          </motion.p>

          {/* main heading */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-serif text-[clamp(3rem,7.5vw,5.5rem)] leading-[1.06] tracking-[-0.02em] text-[#1A1A18]"
          >
            Nông Quốc Hưng
            <br />
            <em className="not-italic" style={{ fontStyle: "italic" }}>Portfolio</em>
          </motion.h1>

          {/* description */}
          <motion.p
            {...fadeUp(0.35)}
            className="mt-8 text-base sm:text-lg text-[#6B6B67] leading-[1.75] max-w-xl"
          >
            I design clear flows and consistent interfaces, then help ship them
            with React and Next.js. Currently seeking a UI/UX internship.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.5)}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticWrap>
              <Link
                href="#projects"
                className="inline-flex items-center gap-1.5 text-sm font-mono tracking-wide
                  text-[#1A1A18] border-b border-[#1A1A18] pb-0.5
                  hover:text-[#B87355] hover:border-[#B87355] transition-colors duration-200"
              >
                View case studies
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </MagneticWrap>

            <MagneticWrap>
              <a
                href="/NongQuocHung-UXUI.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-mono tracking-wide
                  text-[#6B6B67] hover:text-[#1A1A18] transition-colors duration-200"
              >
                <Download className="h-3.5 w-3.5" />
                Download CV
              </a>
            </MagneticWrap>
          </motion.div>

          {/* availability */}
          <motion.div
            {...fadeUp(0.65)}
            className="mt-16 flex items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs text-[#6B6B67] tracking-wide">
              Available for internship — Ho Chi Minh City
            </span>
          </motion.div>

        </div>
      </div>

      {/* bottom border */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-[#E5E4E1]" />
    </section>
  );
}
