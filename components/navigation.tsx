// components/navigation.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type NavKey = "home" | "about" | "skills" | "projects" | "activities" | "contact";

const ITEMS: { key: NavKey; label: string; href: `#${string}` }[] = [
  { key: "home",      label: "Home",      href: "#top" },
  { key: "about",     label: "About",     href: "#about" },
  { key: "skills",    label: "Skills",    href: "#skills" },
  { key: "projects",  label: "Projects",  href: "#projects" },
  { key: "activities",label: "Activities",href: "#activities" },
  { key: "contact",   label: "Contact",   href: "#contact" },
];

const SECTION_ID: Record<NavKey, string> = {
  home: "top",
  about: "about",
  skills: "skills",
  projects: "projects",
  activities: "activities", // ✅ sửa đúng
  contact: "contact",
};

export function Navigation() {
  const [active, setActive] = useState<NavKey>("home");
  const ticking = useRef(false);
  const sectionsRef = useRef<Record<string, HTMLElement>>({});
  const OFFSET = 88; // chiều cao nav (chỉnh nếu bạn đổi nav)

  // gom sẵn các section element
  useEffect(() => {
    const map: Record<string, HTMLElement> = {};
    Object.values(SECTION_ID).forEach((id) => {
      const el = document.getElementById(id);
      if (el) map[id] = el;
    });
    sectionsRef.current = map;
  }, []);

  // thuật toán chọn active mượt: section có top <= OFFSET và gần OFFSET nhất
  const computeActive = () => {
    const entries = Object.entries(sectionsRef.current);
    if (!entries.length) return;
    const pivot = OFFSET + 20; // nới thêm 20px cảm giác mượt hơn
    let bestId = entries[0][0];
    let bestDist = Infinity;

    for (const [id, el] of entries) {
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top - pivot);
      const isAbove = rect.top - pivot <= 0; // đã qua mép trên
      // ưu tiên section đã đi qua mép trên; nếu chưa có, chọn cái gần nhất
      if (isAbove && dist < bestDist) {
        bestDist = dist;
        bestId = id;
      }
    }

    // nếu chưa section nào vượt pivot, chọn section đầu
    if (bestDist === Infinity) bestId = entries[0][0];

    const key = (Object.keys(SECTION_ID) as NavKey[]).find(
      (k) => SECTION_ID[k] === bestId
    );
    if (key && key !== active) setActive(key);
  };

  // lắng nghe scroll/resize (rAF để mượt, tránh spam)
  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          computeActive();
          ticking.current = false;
        });
      }
    };
    const onResize = () => {
      sectionsRef.current = {}; // refetch sau resize
      Object.values(SECTION_ID).forEach((id) => {
        const el = document.getElementById(id);
        if (el) sectionsRef.current[id] = el;
      });
      onScroll();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll(); // init
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [active]);

  // cuộn mượt có OFFSET; tôn trọng reduce motion
  const prefersNoMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  function smoothScroll(href: string, key: NavKey) {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    const targetY = el.getBoundingClientRect().top + window.scrollY - OFFSET;

    if (prefersNoMotion) {
      window.scrollTo(0, targetY);
      setActive(key);
      return;
    }

    // native smooth
    window.scrollTo({ top: targetY, behavior: "smooth" });
    setActive(key);
  }

  return (
    <div
      className="fixed inset-x-0 z-[60] flex justify-center pointer-events-none"
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
                    transition={{ type: "spring", stiffness: 280, damping: 34 }} // mềm hơn
                  />
                )}
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(item.href, item.key);
                  }}
                  className={`block rounded-full px-4 py-2 text-sm transition ${
                    isActive ? "text-white" : "text-neutral-300 hover:text-white"
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
  );
}
