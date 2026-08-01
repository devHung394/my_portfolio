"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Facebook } from "lucide-react";
import { stagger, viewport } from "@/lib/animations";
import { MagneticWrap } from "@/components/MagneticWrap";
import { useLanguage } from "@/components/LanguageProvider";

const SOCIALS = [
  { href: "https://github.com/QuocHung-0309", Icon: Github,   label: "GitHub" },
  { href: "https://linkedin.com/in/hungnqh",  Icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com/whuq394",     Icon: Facebook, label: "Facebook" },
];

const TEXT = {
  vi: { line1: "Cùng làm ra", line2: "điều gì đó thật hay." },
  en: { line1: "Let's build", line2: "something good." },
};

export default function ContactSection() {
  const { lang } = useLanguage();
  const t = TEXT[lang];
  return (
      <section
        id="contact"
        className="relative px-6 sm:px-10 lg:px-20 py-32 border-t border-rim overflow-hidden"
      >
        {/* grid bg */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* headline */}
          <motion.h2
            {...stagger(0)}
            whileInView={stagger(0).animate}
            viewport={viewport}
            className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.0] text-snow mb-16"
          >
            {t.line1}<br />
            <em className="not-italic italic text-dust">{t.line2}</em>
          </motion.h2>

          {/* email + socials row */}
          <motion.div
            {...stagger(2)}
            whileInView={stagger(2).animate}
            viewport={viewport}
            className="flex items-end justify-between flex-wrap gap-8"
          >
            <MagneticWrap strength={0.25}>
              <a
                href="mailto:nqhung394.work@gmail.com"
                className="font-serif italic text-[clamp(1rem,2.2vw,1.6rem)] text-dust
                  hover:text-snow transition-colors duration-200
                  underline underline-offset-4 decoration-rim hover:decoration-dust"
              >
                nqhung394.work@gmail.com
              </a>
            </MagneticWrap>

            <div className="flex gap-3">
              {SOCIALS.map(({ href, Icon, label }) => (
                <MagneticWrap key={href} strength={0.5}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center
                      border border-rim rounded-full text-dust
                      hover:text-snow hover:border-moss active:scale-[0.94] transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </MagneticWrap>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  );
}
