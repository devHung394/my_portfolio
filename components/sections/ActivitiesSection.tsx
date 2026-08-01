"use client";

import { useRef, useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { leadership, events } from "@/app/data/activities";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { stagger, viewport } from "@/lib/animations";
import { useLanguage, type Lang } from "@/components/LanguageProvider";

const TEXT = {
  vi: {
    heading: "Hoạt động",
    intro:
      "Ngoài màn hình, phần lớn thời gian của mình dành để tổ chức mọi thứ cho người khác. Nó cho cảm giác giống thiết kế: biến thứ hỗn loạn thành thứ hoạt động được cho bất kỳ ai xuất hiện.",
    leadership: "Lãnh đạo",
    leadershipDesc: "Dẫn dắt đội nhóm, lên kế hoạch & vận hành",
  },
  en: {
    heading: "Activities",
    intro:
      "Outside of screens, most of my time goes into organizing things for other people. It scratches the same itch as design: taking something chaotic and making it work for whoever shows up.",
    leadership: "Leadership",
    leadershipDesc: "Team leadership, planning & operations",
  },
};

export default function ActivitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const { lang } = useLanguage();
  const t = TEXT[lang];

  return (
    <section id="activities" className="py-24 px-6 sm:px-10 lg:px-20 border-b border-[#2A2A28]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          {...stagger(0)}
          whileInView={stagger(0).animate}
          viewport={viewport}
          className="font-serif text-[clamp(2rem,4.2vw,2.8rem)] text-[#F0EFE9] leading-[1.1] mb-4"
        >
          {t.heading}
        </motion.h2>

        <motion.p
          {...stagger(0.5)}
          whileInView={stagger(0.5).animate}
          viewport={viewport}
          className="text-[14px] text-[#6B6B67] leading-relaxed max-w-[560px] mb-12"
        >
          {t.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
        >
          <RolesCarousel lang={lang} t={t} />
        </motion.div>

        <div className="mt-8 space-y-4">
          {events.map((ev, i) => {
            const c = ev[lang];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.16 + i * 0.08 }}
                className="border border-[#2A2A28] rounded-2xl p-6 md:p-8 bg-[#161614]
                  hover:border-[#3A3A38] transition-colors duration-300"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-5">
                  <div>
                    <h3 className="font-serif text-xl text-[#F0EFE9]">{c.title}</h3>
                    <p className="font-mono text-[10px] text-[#6B6B67] mt-1">
                      {c.org}{c.location ? ` · ${c.location}` : ""}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <span className="font-mono text-[10px] text-[#6B6B67] border border-[#2A2A28] px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                      <Calendar className="h-2.5 w-2.5" /> {c.period}
                    </span>
                    <span className="font-mono text-[10px] text-[#6B6B67] border border-[#2A2A28] px-2.5 py-1 rounded-full">
                      {c.role}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {c.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[13px] leading-relaxed text-[#8A8A86]">
                      <span className="mt-[7px] h-[3px] w-[3px] rounded-full bg-[#4A4A46] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {ev.images?.length ? (
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {ev.images.slice(0, 3).map((src, idx) => (
                      <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#2A2A28]">
                        <Image src={src} alt="" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
                      </div>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RolesCarousel({ lang, t }: { lang: Lang; t: typeof TEXT["vi"] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const total = leadership.length;

  const move = (dir: "prev" | "next") => {
    const el = scroller.current;
    if (!el) return;
    const delta = dir === "next" ? el.clientWidth * 0.9 : -el.clientWidth * 0.9;
    el.scrollTo({ left: el.scrollLeft + delta, behavior: "smooth" });
    setIndex((p) => dir === "next" ? Math.min(p + 1, total - 1) : Math.max(p - 1, 0));
  };

  const dots = useMemo(() => Math.min(total, 6), [total]);
  const activeDot = useMemo(() => {
    return Math.round((index / Math.max(total - 1, 1)) * (dots - 1));
  }, [index, total, dots]);

  return (
    <div className="border border-[#2A2A28] rounded-2xl p-5 bg-[#161614]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.12em] text-[#6B6B67]">{t.leadership}</p>
          <p className="text-[13px] text-[#6B6B67] mt-0.5">{t.leadershipDesc}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {["prev", "next"].map((dir) => (
              <button key={dir} aria-label={dir}
                onClick={() => move(dir as "prev" | "next")}
                className="rounded-full border border-[#2A2A28] p-1.5 text-[#6B6B67] hover:text-[#F0EFE9] hover:border-[#3A3A38] transition-colors">
                {dir === "prev" ? <ChevronLeft className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: dots }).map((_, i) => (
              <span key={i} className={`h-0.5 rounded-full transition-all ${i === activeDot ? "w-4 bg-[#F0EFE9]" : "w-1 bg-[#2A2A28]"}`} />
            ))}
          </div>
        </div>
      </div>

      <div ref={scroller} className="flex snap-x gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {leadership.map((r, i) => {
          const c = r[lang];
          return (
            <div key={i} className="group relative shrink-0 snap-start overflow-hidden rounded-xl border border-[#2A2A28] basis-[75%] sm:basis-[42%] lg:basis-[27%]">
              <div className="relative aspect-[3/4]">
                <Image src={r.image || "/placeholder-user.jpg"} alt={c.title} fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ filter: "brightness(0.85)" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0E0C]/90 via-[#0E0E0C]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-[15px] text-[#F0EFE9] leading-snug">{c.title}</p>
                  <p className="font-mono text-[10px] text-[#6B6B67] mt-1">{c.org}</p>
                  <span className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] text-[#6B6B67] border border-[#2A2A28] bg-[#0E0E0C]/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    <Calendar className="h-2.5 w-2.5" /> {c.period}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
