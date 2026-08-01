"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useLanguage, type Lang } from "@/components/LanguageProvider";

const ITEMS = [
  { href: "/",           vi: "Trang chủ",  en: "Home" },
  { href: "/work",       vi: "Công việc",  en: "Work" },
  { href: "/projects",   vi: "Dự án",      en: "Projects" },
  { href: "/activities", vi: "Hoạt động",  en: "Activities" },
  { href: "/contact",    vi: "Liên hệ",    en: "Contact" },
] as const;

function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex items-center gap-0.5 border border-rim rounded-full p-0.5 ${className}`}>
      {(["vi", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2 py-0.5 rounded-full font-mono text-[10px] tracking-wide transition-colors duration-200 ${
            lang === l ? "bg-moss/15 text-moss" : "text-dust hover:text-snow"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <>
      {/* ── Full-width bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-rim transition-all duration-500 ${
          scrolled ? "md:opacity-0 md:pointer-events-none" : ""
        }`}
        style={{ backgroundColor: "rgba(12,12,10,0.84)", backdropFilter: "blur(8px)" }}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 h-[52px] flex items-center justify-between">
          <Link
            href="/"
            className="font-serif italic text-[18px] text-snow hover:text-moss transition-colors duration-200 leading-none"
          >
            NQH
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {ITEMS.map((item) => (
              <Link key={item.href} href={item.href}
                className={`relative pb-1 font-mono text-[11px] tracking-[0.1em] transition-colors duration-200 ${
                  isActive(item.href) ? "text-snow" : "text-dust hover:text-snow"
                }`}
              >
                {item[lang]}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-px bg-moss"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            ))}
            <LangSwitch />
          </nav>

          <button
            className="md:hidden p-1.5 text-dust hover:text-snow transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? (lang === "vi" ? "Đóng menu" : "Close menu") : (lang === "vi" ? "Mở menu" : "Open menu")}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* ── Floating pill nav, desktop only, fades in when scrolled */}
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
              <Link key={item.href} href={item.href}
                className={`relative pb-1 font-mono text-[11px] tracking-[0.1em] transition-colors duration-200 whitespace-nowrap ${
                  isActive(item.href) ? "text-snow" : "text-dust hover:text-snow"
                }`}
              >
                {item[lang]}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="pill-nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-px bg-moss"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            ))}
            <LangSwitch />
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
              <motion.div key={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={`block py-3 font-serif text-[2rem] leading-tight transition-colors ${
                    isActive(item.href) ? "text-snow" : "text-dust hover:text-snow"
                  }`}
                >
                  {item[lang]}
                </Link>
              </motion.div>
            ))}
            <LangSwitch className="mt-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
