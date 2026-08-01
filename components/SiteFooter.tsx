"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const ITEMS = [
  { href: "/",           vi: "Trang chủ",  en: "Home" },
  { href: "/work",       vi: "Công việc",  en: "Work" },
  { href: "/projects",   vi: "Dự án",      en: "Projects" },
  { href: "/activities", vi: "Hoạt động",  en: "Activities" },
  { href: "/contact",    vi: "Liên hệ",    en: "Contact" },
] as const;

export default function SiteFooter() {
  const { lang } = useLanguage();

  return (
    <footer className="px-6 sm:px-10 lg:px-20 py-6 border-t border-rim">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <span className="font-mono text-[10px] text-dust tracking-[0.08em]">
          &copy; {new Date().getFullYear()} Nông Quốc Hưng
        </span>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {ITEMS.map((item) => (
            <Link key={item.href} href={item.href}
              className="font-mono text-[10px] text-dust hover:text-snow tracking-[0.08em] transition-colors"
            >
              {item[lang]}
            </Link>
          ))}
        </nav>

        <span className="hidden lg:block font-mono text-[10px] text-dust tracking-[0.08em]">
          {lang === "vi" ? "Xây dựng bằng Next.js · Tailwind · Framer Motion" : "Built with Next.js · Tailwind · Framer Motion"}
        </span>
      </div>
    </footer>
  );
}
