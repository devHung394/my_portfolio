"use client";

import Section from "./Section";
import { Github, Linkedin, Facebook, Mail, ArrowUp } from "lucide-react";

const SOCIALS = [
  { href: "https://github.com/QuocHung-0309", Icon: Github,   label: "GitHub" },
  { href: "https://linkedin.com/in/hungnqh",  Icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com/whuq394",     Icon: Facebook, label: "Facebook" },
  { href: "mailto:nqhung394.work@gmail.com",  Icon: Mail,     label: "Email" },
];

const NAV_LINKS = [
  { href: "#top",        label: "Home" },
  { href: "#about",      label: "About" },
  { href: "#skills",     label: "Skills" },
  { href: "#projects",   label: "Projects" },
  { href: "#activities", label: "Activities" },
  { href: "#contact",    label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-900/60 py-14 overflow-hidden">
      {/* gradient top edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-40 w-[600px] -translate-x-1/2 rounded-full bg-violet-600/8 blur-3xl" />
      </div>

      <Section>
        <div className="flex flex-col items-center gap-8">

          {/* logo / name */}
          <div className="text-center">
            <p className="text-2xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
                Nông Quốc Hưng
              </span>
            </p>
            <p className="mt-1 text-xs text-neutral-500 tracking-[0.3em]">
              UI/UX DESIGNER · FRONTEND DEVELOPER
            </p>
          </div>

          {/* nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-neutral-500 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* divider */}
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

          {/* social icons */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full p-2.5 ring-1 ring-white/10 bg-white/[0.03]
                  text-white/45 hover:text-white hover:bg-white/[0.08]
                  hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* copyright + tech */}
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Nông Quốc Hưng · All rights reserved
            </p>
            <p className="text-xs text-neutral-600">
              Built with Next.js · Tailwind CSS · Framer Motion
            </p>
          </div>

          {/* back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03]
              px-5 py-2 text-sm text-white/40 hover:text-white hover:bg-white/[0.08]
              hover:-translate-y-0.5 transition-all duration-200"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to top
          </button>

        </div>
      </Section>
    </footer>
  );
}
