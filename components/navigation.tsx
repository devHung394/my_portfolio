"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu } from "lucide-react";

type NavKey = "home" | "about" | "experience" | "skills" | "projects" | "activities" | "contact";

const ITEMS: { key: NavKey; label: string; href: `#${string}` }[] = [
  { key: "home",       label: "Home",       href: "#top" },
  { key: "about",      label: "About",      href: "#about" },
  { key: "experience", label: "Experience", href: "#experience" },
  { key: "skills",     label: "Skills",     href: "#skills" },
  { key: "projects",   label: "Projects",   href: "#projects" },
  { key: "activities", label: "Activities", href: "#activities" },
  { key: "contact",    label: "Contact",    href: "#contact" },
];

const SECTION_ID: Record<NavKey, string> = {
  home: "top", about: "about", experience: "experience", skills: "skills",
  projects: "projects", activities: "activities", contact: "contact",
};

const OFFSET = 64;

export function Navigation() {
  const [active, setActive]       = useState<NavKey>("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const sectionsRef = useRef<Record<string, HTMLElement>>({});
  const ticking     = useRef(false);

  useEffect(() => {
    const map: Record<string, HTMLElement> = {};
    Object.values(SECTION_ID).forEach((id) => {
      const el = document.getElementById(id);
      if (el) map[id] = el;
    });
    sectionsRef.current = map;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      // pill threshold
      setScrolled(window.scrollY > window.innerHeight * 0.8);

      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          const entries = Object.entries(sectionsRef.current);
          if (!entries.length) { ticking.current = false; return; }
          let bestId = entries[0][0];
          let bestDist = Infinity;
          for (const [id, el] of entries) {
            const top = el.getBoundingClientRect().top - OFFSET - 20;
            if (top <= 0 && Math.abs(top) < bestDist) {
              bestDist = Math.abs(top); bestId = id;
            }
          }
          const key = (Object.keys(SECTION_ID) as NavKey[]).find(
            (k) => SECTION_ID[k] === bestId,
          );
          if (key) setActive(key);
          ticking.current = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    window.addEventListener("scroll", close, { once: true, passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [mobileOpen]);

  const prefersNoMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  function smoothScroll(href: string, key: NavKey) {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;
    prefersNoMotion ? window.scrollTo(0, y) : window.scrollTo({ top: y, behavior: "smooth" });
    setActive(key);
    setMobileOpen(false);
  }

  return (
    <>
      {/* ── Full-width bar (always visible on mobile, fades out on desktop when scrolled) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-rim transition-all duration-500 ${
          scrolled ? "md:opacity-0 md:pointer-events-none" : ""
        }`}
        style={{ backgroundColor: "rgba(12,12,10,0.84)", backdropFilter: "blur(8px)" }}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 h-[52px] flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); smoothScroll("#top", "home"); }}
            className="font-serif italic text-[18px] text-snow hover:text-moss transition-colors duration-200 leading-none"
          >
            NQH
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {ITEMS.map((item) => (
              <a key={item.key} href={item.href}
                onClick={(e) => { e.preventDefault(); smoothScroll(item.href, item.key); }}
                className={`font-mono text-[11px] tracking-[0.1em] transition-colors duration-200 ${
                  active === item.key ? "text-snow" : "text-dust hover:text-snow"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-1.5 text-dust hover:text-snow transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* ── Floating pill nav — desktop only, fades in when scrolled */}
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            key="pill-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-3 z-50 hidden md:flex items-center gap-6 px-6 py-2 rounded-full border border-rim left-1/2 -translate-x-1/2"
            style={{ backgroundColor: "rgba(20,20,18,0.92)", backdropFilter: "blur(10px)" }}
          >
            {ITEMS.map((item) => (
              <a key={item.key} href={item.href}
                onClick={(e) => { e.preventDefault(); smoothScroll(item.href, item.key); }}
                className={`font-mono text-[11px] tracking-[0.1em] transition-colors duration-200 whitespace-nowrap ${
                  active === item.key ? "text-snow" : "text-dust hover:text-snow"
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-start justify-center px-10 md:hidden"
            style={{ backgroundColor: "rgba(12,12,10,0.97)", backdropFilter: "blur(12px)" }}
          >
            {ITEMS.map((item, i) => (
              <motion.a key={item.key} href={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                onClick={(e) => { e.preventDefault(); smoothScroll(item.href, item.key); }}
                className={`block py-3 font-serif text-[2rem] leading-tight transition-colors ${
                  active === item.key ? "text-snow" : "text-dust hover:text-snow"
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
