"use client";

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
    <footer className="py-14 px-6 sm:px-10 lg:px-16 border-t border-[#E5E4E1]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          <div className="max-w-xs">
            <p className="font-serif text-lg text-[#1A1A18]">Nông Quốc Hưng</p>
            <p className="font-mono text-[10px] tracking-wide text-[#6B6B67] mt-1">
              UI/UX Designer &middot; Frontend Developer
            </p>
            <p className="text-sm text-[#6B6B67] mt-3 leading-relaxed">
              Designing clear interfaces and shipping them with React and Next.js.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <a key={href} href={href}
                  className="font-mono text-xs text-[#6B6B67] hover:text-[#1A1A18] transition-colors">
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {SOCIALS.map(({ href, Icon, label }) => (
                <a key={href} href={href} aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="p-2 rounded-full border border-[#E5E4E1] text-[#6B6B67]
                    hover:text-[#1A1A18] hover:border-[#1A1A18]/30 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E5E4E1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-[#6B6B67] tracking-wide">
            &copy; {new Date().getFullYear()} Nông Quốc Hưng. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-[#6B6B67]
              hover:text-[#1A1A18] transition-colors"
          >
            <ArrowUp className="h-3 w-3" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
