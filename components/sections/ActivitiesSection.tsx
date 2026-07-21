"use client";

import { useRef, useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { leadership, events } from "@/app/data/activities";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { stagger, viewport } from "@/lib/animations";

export default function ActivitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section id="activities" className="py-24 px-6 sm:px-10 lg:px-20 border-b border-[#2A2A28]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          {...stagger(0)}
          whileInView={stagger(0).animate}
          viewport={viewport}
          className="font-serif text-[clamp(2rem,4.2vw,2.8rem)] text-[#F0EFE9] leading-[1.1] mb-12"
        >
          Activities
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
        >
          <RolesCarousel />
        </motion.div>

        <div className="mt-8 space-y-4">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.16 + i * 0.08 }}
              className="relative border border-[#2A2A28] rounded-xl p-6 md:p-8 bg-[#161614]
                hover:border-[#3A3A38] transition-colors"
            >
              {/* number badge */}
              <span className="absolute top-5 right-5 font-mono text-[11px] text-[#3A3A38] select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-5 pr-8">
                <div>
                  <h3 className="font-serif text-xl text-[#F0EFE9]">{ev.title}</h3>
                  <p className="font-mono text-[10px] text-[#6B6B67] mt-1">
                    {ev.org}{ev.location ? ` · ${ev.location}` : ""}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className="font-mono text-[10px] text-[#6B6B67] border border-[#2A2A28] px-2.5 py-1 rounded inline-flex items-center gap-1">
                    <Calendar className="h-2.5 w-2.5" /> {ev.period}
                  </span>
                  <span className="font-mono text-[10px] text-[#6B6B67] border border-[#2A2A28] px-2.5 py-1 rounded">
                    {ev.role}
                  </span>
                </div>
              </div>

              <ul className="space-y-1.5 mb-5">
                {ev.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[13px] text-[#6B6B67]">
                    <span className="mt-0.5 text-[#3A3A38] select-none">-</span>
                    {b}
                  </li>
                ))}
              </ul>

              {ev.images?.length ? (
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {ev.images.slice(0, 3).map((src, idx) => (
                    <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#2A2A28]">
                      <Image src={src} alt="" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
                    </div>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RolesCarousel() {
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
    <div className="border border-[#2A2A28] rounded-xl p-5 bg-[#161614]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.12em] text-[#6B6B67]">Leadership</p>
          <p className="text-[13px] text-[#6B6B67] mt-0.5">Team leadership, planning &amp; operations</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {["prev", "next"].map((dir) => (
              <button key={dir} aria-label={dir}
                onClick={() => move(dir as "prev" | "next")}
                className="rounded border border-[#2A2A28] p-1.5 text-[#6B6B67] hover:text-[#F0EFE9] hover:border-[#3A3A38] transition-colors">
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
        {leadership.map((r, i) => (
          <div key={i} className="group relative shrink-0 snap-start overflow-hidden rounded-lg border border-[#2A2A28] basis-[82%] sm:basis-[46%] lg:basis-[30%]">
            <div className="relative h-[200px] sm:h-[220px]">
              <Image src={r.image || "/placeholder-user.jpg"} alt={r.title} fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ filter: "brightness(0.8)" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0E0C]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-[14px] text-[#F0EFE9]">{r.title}</p>
                <p className="font-mono text-[10px] text-[#6B6B67] mt-0.5">{r.org}</p>
                <span className="mt-1.5 inline-flex items-center gap-1 font-mono text-[10px] text-[#6B6B67] border border-[#2A2A28] px-2 py-0.5 rounded">
                  <Calendar className="h-2.5 w-2.5" /> {r.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
