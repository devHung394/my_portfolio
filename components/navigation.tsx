// components/navigation.tsx — with custom cursor + magnetic hamburger
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

/* ── Magnetic hamburger helper ────────────────────────────────────── */
function HamburgerMagnetic({ open, onClick }: { open: boolean; onClick: () => void }) {
  const ref  = useRef<HTMLButtonElement>(null);
  const x    = useMotionValue(0);
  const y    = useMotionValue(0);
  const sx   = useSpring(x, { stiffness: 260, damping: 22, mass: 0.5 });
  const sy   = useSpring(y, { stiffness: 260, damping: 22, mass: 0.5 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    x.set((e.clientX - (left + width  / 2)) * 0.45);
    y.set((e.clientY - (top  + height / 2)) * 0.45);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy, top: "calc(env(safe-area-inset-top, 0px) + 12px)" }}
      className="fixed right-4 z-[65] flex md:hidden h-11 w-11 items-center justify-center
                 rounded-full border border-neutral-800/70 bg-neutral-900/80 text-white backdrop-blur"
    >
      <AnimatePresence mode="wait" initial={false}>
        {open ? (
          <motion.span key="x"
            initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
            <X className="h-5 w-5" />
          </motion.span>
        ) : (
          <motion.span key="menu"
            initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
            <Menu className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

type NavKey =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "activities"
  | "contact";

const ITEMS: { key: NavKey; label: string; href: `#${string}` }[] = [
  { key: "home",       label: "Home",       href: "#top" },
  { key: "about",      label: "About",      href: "#about" },
  { key: "skills",     label: "Skills",     href: "#skills" },
  { key: "projects",   label: "Projects",   href: "#projects" },
  { key: "activities", label: "Activities", href: "#activities" },
  { key: "contact",    label: "Contact",    href: "#contact" },
];

const SECTION_ID: Record<NavKey, string> = {
  home: "top",
  about: "about",
  skills: "skills",
  projects: "projects",
  activities: "activities",
  contact: "contact",
};

export function Navigation() {
  const [active,     setActive]     = useState<NavKey>("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress,   setProgress]   = useState(0);
  const ticking      = useRef(false);
  const sectionsRef  = useRef<Record<string, HTMLElement>>({});
  const OFFSET       = 88;

  /* collect section elements once */
  useEffect(() => {
    const map: Record<string, HTMLElement> = {};
    Object.values(SECTION_ID).forEach((id) => {
      const el = document.getElementById(id);
      if (el) map[id] = el;
    });
    sectionsRef.current = map;
  }, []);

  /* active section tracker */
  const computeActive = () => {
    const entries = Object.entries(sectionsRef.current);
    if (!entries.length) return;
    const pivot  = OFFSET + 20;
    let bestId   = entries[0][0];
    let bestDist = Infinity;

    for (const [id, el] of entries) {
      const rect   = el.getBoundingClientRect();
      const dist   = Math.abs(rect.top - pivot);
      const isAbove = rect.top - pivot <= 0;
      if (isAbove && dist < bestDist) {
        bestDist = dist;
        bestId   = id;
      }
    }
    if (bestDist === Infinity) bestId = entries[0][0];

    const key = (Object.keys(SECTION_ID) as NavKey[]).find(
      (k) => SECTION_ID[k] === bestId
    );
    if (key && key !== active) setActive(key);
  };

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          computeActive();
          /* scroll progress */
          const max = document.body.scrollHeight - window.innerHeight;
          setProgress(max > 0 ? window.scrollY / max : 0);
          ticking.current = false;
        });
      }
    };
    const onResize = () => {
      sectionsRef.current = {};
      Object.values(SECTION_ID).forEach((id) => {
        const el = document.getElementById(id);
        if (el) sectionsRef.current[id] = el;
      });
      onScroll();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [active]);

  /* close mobile menu on scroll */
  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    window.addEventListener("scroll", close, { once: true, passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [mobileOpen]);

  const prefersNoMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  function smoothScroll(href: string, key: NavKey) {
    const id  = href.slice(1);
    const el  = document.getElementById(id);
    if (!el) return;
    const targetY = el.getBoundingClientRect().top + window.scrollY - OFFSET;
    prefersNoMotion
      ? window.scrollTo(0, targetY)
      : window.scrollTo({ top: targetY, behavior: "smooth" });
    setActive(key);
  }

  return (
    <>
      {/* ── Scroll progress bar ───────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-[70] h-[2px] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-violet-500 transition-[width] duration-100 ease-linear"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* ── Desktop pill nav (md+) ────────────────────────────────── */}
      <div
        className="fixed inset-x-0 z-[60] hidden md:flex justify-center pointer-events-none"
        style={{ top: "calc(env(safe-area-inset-top, 0px) + 16px)" }}
      >
        <nav
          className="pointer-events-auto rounded-full border border-neutral-800/70 bg-neutral-900/60
                     px-2 py-1 shadow-[0_6px_30px_-12px_rgba(0,0,0,.7),inset_0_1px_0_rgba(255,255,255,.04)]
                     backdrop-blur supports-[backdrop-filter]:backdrop-blur"
        >
          <ul className="relative flex items-center gap-1">
            {ITEMS.map((item) => {
              const isActive = active === item.key;
              return (
                <li key={item.key} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full ring-1 ring-violet-500/30
                                 bg-gradient-to-b from-violet-600/20 to-fuchsia-600/10"
                      transition={{ type: "spring", stiffness: 280, damping: 34 }}
                    />
                  )}
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScroll(item.href, item.key);
                    }}
                    className={`block rounded-full px-4 py-2 text-sm transition ${
                      isActive
                        ? "text-white"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* ── Mobile: hamburger button ──────────────────────────────── */}
      <HamburgerMagnetic
        open={mobileOpen}
        onClick={() => setMobileOpen((o) => !o)}
      />

      {/* ── Mobile full-screen overlay menu ──────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-1
                       bg-black/92 backdrop-blur-xl md:hidden"
          >
            {/* gradient accent blobs */}
            <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-fuchsia-600/15 blur-3xl" />

            {ITEMS.map((item, i) => (
              <motion.a
                key={item.key}
                href={item.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0,    y: 12 }}
                transition={{ delay: i * 0.055, duration: 0.22 }}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  setTimeout(() => smoothScroll(item.href, item.key), 280);
                }}
                className={`relative flex items-center gap-3 rounded-2xl px-10 py-4 text-[2rem]
                            font-extrabold tracking-tight transition-colors ${
                  active === item.key
                    ? "text-white"
                    : "text-white/40 hover:text-white/80"
                }`}
              >
                {active === item.key && (
                  <span className="absolute left-4 h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 shadow-[0_0_8px_2px_rgba(168,85,247,0.6)]" />
                )}
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
