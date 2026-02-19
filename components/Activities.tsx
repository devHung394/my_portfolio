"use client";

import Section from "@/components/Section";
import { ChevronLeft, ChevronRight, Users, Calendar } from "lucide-react";
import { leadership, events } from "@/app/data/activities";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";

export default function Activities() {
  return (
    <Section id="activities" className="relative py-24">
      {/* Big background word */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 flex justify-center">
          <span className="select-none text-[12vw] leading-none font-extrabold tracking-tighter text-white/5">
            ACTIVITIES
          </span>
        </div>
      </div>

      <div className="mb-10 text-center px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Featured{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
            Activities
          </span>
        </h2>
        <p className="mt-2 text-neutral-400">
          Highlights of leadership and volunteer work
        </p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <RolesCarousel />
      </div>

      <div className="mt-14 grid gap-8 px-4 sm:px-6 lg:px-8">
        {events.map((ev, i) => (
          <div
            key={i}
            className="rounded-3xl border border-neutral-800/70 bg-neutral-900/40 p-5 sm:p-6 md:p-8 backdrop-blur"
          >
            {/* header responsive */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-white/90">
                  {ev.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  {ev.org}
                  {ev.location ? ` • ${ev.location}` : ""}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-violet-500/25 bg-violet-600/10 px-3 py-1 text-xs text-violet-200">
                  <Calendar className="h-3.5 w-3.5" /> {ev.period}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/75">
                  <Users className="h-3.5 w-3.5" />
                  {ev.role}
                </span>
              </div>
            </div>

            {/* bullets */}
            <ul className="mt-5 space-y-2 text-neutral-200">
              {ev.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <p className="leading-relaxed text-[15px] text-white/80">
                    {b}
                  </p>
                </li>
              ))}
            </ul>

            {/* images responsive: mobile scroll, desktop grid */}
            {ev.images?.length ? (
              <>
                {/* Mobile/Tablet: horizontal scroll */}
                <div className="mt-6 -mx-1 flex snap-x gap-4 overflow-x-auto px-1 pb-1 sm:hidden scrollbar-none">
                  {ev.images.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60"
                    >
                      <Image
                        src={src}
                        alt={`activity-${idx}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* >= sm: grid */}
                <div className="mt-6 hidden sm:grid grid-cols-2 gap-4 lg:grid-cols-3">
                  {ev.images.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60"
                    >
                      <Image
                        src={src}
                        alt={`activity-${idx}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* -------- Leadership carousel (responsive) -------- */
function RolesCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const total = leadership.length;

  const move = (dir: "prev" | "next") => {
    const el = scroller.current;
    if (!el) return;

    // each step scroll by ~90% container width for mobile, ~60% for larger
    const w = el.clientWidth;
    const delta = dir === "next" ? w * 0.9 : -w * 0.9;

    el.scrollTo({ left: el.scrollLeft + delta, behavior: "smooth" });

    setIndex((prev) => {
      if (dir === "next") return Math.min(prev + 1, total - 1);
      return Math.max(prev - 1, 0);
    });
  };

  // dots count: clamp for aesthetics
  const dots = useMemo(() => Math.min(total, 6), [total]);
  const activeDot = useMemo(() => {
    if (total <= dots) return index;
    // map index to dot range
    const ratio = index / Math.max(total - 1, 1);
    return Math.round(ratio * (dots - 1));
  }, [index, total, dots]);

  return (
    <div className="relative rounded-3xl border border-neutral-800/70 bg-neutral-900/40 p-4 sm:p-6 backdrop-blur">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="px-1">
          <p className="text-xs tracking-[0.35em] text-white/70">
            LEADERSHIP SUMMARY
          </p>
          <p className="text-neutral-400 text-sm">
            Team leadership, planning, communication & operations
          </p>
        </div>

        {/* controls: visible on all sizes */}
        <div className="flex items-center justify-between gap-3 sm:justify-end">
          <div className="flex items-center gap-2">
            <IconBtn aria="Previous" onClick={() => move("prev")}>
              <ChevronLeft className="h-4 w-4" />
            </IconBtn>
            <IconBtn aria="Next" onClick={() => move("next")}>
              <ChevronRight className="h-4 w-4" />
            </IconBtn>
          </div>

          {/* dots */}
          <div className="flex items-center gap-1.5 sm:ml-2">
            {Array.from({ length: dots }).map((_, i) => (
              <span
                key={i}
                className={[
                  "h-1.5 rounded-full transition-all",
                  i === activeDot ? "w-5 bg-white/70" : "w-1.5 bg-white/25",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="scrollbar-none -mx-1 flex snap-x gap-4 overflow-x-auto px-1 py-1"
      >
        {leadership.map((r, i) => (
          <div
            key={i}
            className={[
              "group relative snap-start overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60",
              // responsive width: almost full on mobile, then 2/3, then 1/3
              "basis-[86%] sm:basis-[48%] lg:basis-[32%]",
            ].join(" ")}
          >
            <div className="relative h-[240px] sm:h-[260px] w-full">
              <Image
                src={r.image || "/placeholder-user.jpg"}
                alt={r.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 text-[13px] text-white">
                <div className="font-semibold drop-shadow">{r.title}</div>
                <div className="text-white/80">{r.org}</div>
                <div className="mt-2 inline-flex items-center gap-1 rounded-md border border-violet-500/30 bg-violet-600/10 px-2 py-[2px] text-[11px] text-violet-200">
                  <Calendar className="h-3 w-3" />
                  {r.period}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* mobile hint */}
      <p className="mt-3 text-xs text-white/45 sm:hidden">
        Tip: swipe left/right to browse
      </p>
    </div>
  );
}

function IconBtn({
  children,
  onClick,
  aria,
}: {
  children: React.ReactNode;
  onClick: () => void;
  aria: string;
}) {
  return (
    <button
      aria-label={aria}
      onClick={onClick}
      className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/75 hover:bg-white/[0.07] hover:text-white"
    >
      {children}
    </button>
  );
}
