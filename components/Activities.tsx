"use client";

import { ChevronLeft, ChevronRight, Calendar, Users } from "lucide-react";
import { leadership, events } from "@/app/data/activities";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Activities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section id="activities" className="py-28 px-6 sm:px-10 lg:px-16 border-b border-[#E5E4E1]">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.12em] text-[#6B6B67] mb-3">Involvement</p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] text-[#1A1A18]">
            Activities
          </h2>
        </motion.div>

        {/* carousel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <RolesCarousel />
        </motion.div>

        {/* events */}
        <div className="mt-10 space-y-5">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.06 }}
              className="border border-[#E5E4E1] rounded-xl p-6 md:p-8 bg-[#FAFAF8]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-5">
                <div>
                  <h3 className="font-serif text-xl text-[#1A1A18]">{ev.title}</h3>
                  <p className="font-mono text-[10px] text-[#6B6B67] mt-1">
                    {ev.org}{ev.location ? ` · ${ev.location}` : ""}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] tracking-wide text-[#6B6B67] border border-[#E5E4E1] px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {ev.period}
                  </span>
                  <span className="font-mono text-[10px] tracking-wide text-[#6B6B67] border border-[#E5E4E1] px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                    <Users className="h-3 w-3" /> {ev.role}
                  </span>
                </div>
              </div>

              <ul className="space-y-1.5">
                {ev.bullets.map((b, idx) => (
                  <li key={idx} className="text-sm leading-[1.7] text-[#6B6B67]">
                    {b}
                  </li>
                ))}
              </ul>

              {ev.images?.length ? (
                <>
                  <div className="mt-5 -mx-1 flex snap-x gap-3 overflow-x-auto px-1 pb-1 sm:hidden">
                    {ev.images.map((src, idx) => (
                      <div key={idx} className="relative aspect-[4/3] w-[82%] shrink-0 snap-start overflow-hidden rounded-lg border border-[#E5E4E1]">
                        <Image src={src} alt={`activity-${idx}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 hidden sm:grid grid-cols-2 gap-3 lg:grid-cols-3">
                    {ev.images.map((src, idx) => (
                      <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#E5E4E1]">
                        <Image src={src} alt={`activity-${idx}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </>
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
    setIndex((prev) => dir === "next" ? Math.min(prev + 1, total - 1) : Math.max(prev - 1, 0));
  };

  const dots = useMemo(() => Math.min(total, 6), [total]);
  const activeDot = useMemo(() => {
    const ratio = index / Math.max(total - 1, 1);
    return Math.round(ratio * (dots - 1));
  }, [index, total, dots]);

  return (
    <div className="border border-[#E5E4E1] rounded-xl p-5 sm:p-6 bg-[#FAFAF8]">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.12em] text-[#6B6B67]">Leadership</p>
          <p className="text-sm text-[#6B6B67] mt-0.5">Team leadership, planning, communication &amp; operations</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <button aria-label="Previous" onClick={() => move("prev")}
              className="rounded-full border border-[#E5E4E1] p-2 text-[#6B6B67] hover:text-[#1A1A18] hover:border-[#1A1A18]/30 transition-colors">
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button aria-label="Next" onClick={() => move("next")}
              className="rounded-full border border-[#E5E4E1] p-2 text-[#6B6B67] hover:text-[#1A1A18] hover:border-[#1A1A18]/30 transition-colors">
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: dots }).map((_, i) => (
              <span key={i} className={`h-1 rounded-full transition-all ${i === activeDot ? "w-4 bg-[#1A1A18]" : "w-1 bg-[#E5E4E1]"}`} />
            ))}
          </div>
        </div>
      </div>

      <div ref={scroller} className="flex snap-x gap-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {leadership.map((r, i) => (
          <div key={i} className="group relative shrink-0 snap-start overflow-hidden rounded-lg border border-[#E5E4E1] basis-[85%] sm:basis-[48%] lg:basis-[32%]">
            <div className="relative h-[220px] sm:h-[240px]">
              <Image
                src={r.image || "/placeholder-user.jpg"}
                alt={r.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A18]/60 via-[#1A1A18]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-white">{r.title}</p>
                <p className="font-mono text-[10px] text-white/70 mt-0.5">{r.org}</p>
                <span className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] text-white/70 border border-white/20 px-2 py-0.5 rounded-full">
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
