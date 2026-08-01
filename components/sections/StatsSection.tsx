"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const STATS = {
  vi: [
    { to: 5, suffix: "+", decimals: 0, label: "Dự án đã làm" },
    { to: 2, suffix: "năm", decimals: 0, label: "Thiết kế & code" },
    { to: 3.21, suffix: "", decimals: 2, label: "GPA / 4.0" },
    { to: 4, suffix: "", decimals: 0, label: "Vai trò lãnh đạo" },
  ],
  en: [
    { to: 5, suffix: "+", decimals: 0, label: "Projects shipped" },
    { to: 2, suffix: "yr", decimals: 0, label: "Design & dev" },
    { to: 3.21, suffix: "", decimals: 2, label: "GPA / 4.0" },
    { to: 4, suffix: "", decimals: 0, label: "Leadership roles" },
  ],
};

function Counter({
  to, suffix, decimals, duration = 1400,
}: { to: number; suffix: string; decimals: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parseFloat((eased * to).toFixed(decimals));
      setVal(current);
      if (progress < 1) requestAnimationFrame(tick);
      else setVal(to);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration, decimals]);

  return (
    <p ref={ref} className="font-serif text-[2.4rem] leading-none text-snow">
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val)}{suffix}
    </p>
  );
}

export default function StatsSection() {
  const { lang } = useLanguage();
  const stats = STATS[lang];

  return (
    <section className="border-b border-rim px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 py-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Counter to={s.to} suffix={s.suffix} decimals={s.decimals} />
            <p className="font-mono text-[10px] text-dust tracking-[0.08em] mt-1.5">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
