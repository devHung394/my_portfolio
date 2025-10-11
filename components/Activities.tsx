"use client";

import Section from "@/components/Section";
import { ChevronLeft, ChevronRight, Users, Calendar } from "lucide-react";
import { leadership, events } from "@/app/data/activities";
import Image from "next/image";
import { useRef } from "react";

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

      <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Featured <span className="bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">Activities</span>
        </h2>
        <p className="mt-2 text-neutral-400">Highlights of leadership and volunteer work</p>
      </div>

      <RolesCarousel />

      <div className="mt-14 grid gap-8">
        {events.map((ev, i) => (
          <div key={i} className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 md:p-8">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-white/90">{ev.title}</h3>
              <div className="flex items-center gap-2 text-xs text-violet-300">
                <span className="inline-flex items-center gap-1 rounded-full border border-violet-500/30 bg-violet-600/10 px-3 py-1">
                  <Calendar className="h-3.5 w-3.5" /> {ev.period}
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400">
              {ev.org}{ev.location ? ` • ${ev.location}` : ""}
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/70 px-3 py-1 text-xs text-neutral-200">
              <Users className="h-3.5 w-3.5" />
              {ev.role}
            </div>

            <ul className="mt-5 space-y-2 text-neutral-300">
              {ev.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <p className="leading-relaxed">{b}</p>
                </li>
              ))}
            </ul>

            {ev.images?.length ? (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {ev.images.map((src, idx) => (
                  <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/60">
                    <Image src={src} alt={`activity-${idx}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* -------- Leadership carousel -------- */
function RolesCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const move = (dir: "prev" | "next") => {
    const el = scroller.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollTo({ left: el.scrollLeft + (dir === "next" ? w : -w), behavior: "smooth" });
  };

  return (
    <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs tracking-[0.35em] text-white/70">LEADERSHIP SUMMARY</p>
          <p className="text-neutral-400">Team leadership, planning, communication & operations</p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <IconBtn aria="Previous" onClick={() => move("prev")}><ChevronLeft className="h-4 w-4" /></IconBtn>
          <IconBtn aria="Next" onClick={() => move("next")}><ChevronRight className="h-4 w-4" /></IconBtn>
        </div>
      </div>

      <div ref={scroller} className="scrollbar-none -mx-1 flex snap-x gap-4 overflow-x-auto px-1 py-1">
        {leadership.map((r, i) => (
          <div key={i} className="group relative w-[230px] snap-start overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/60">
            <div className="relative h-[260px] w-full">
              <Image
                src={r.image || "/placeholder-user.jpg"}
                alt={r.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-[13px] text-white">
                <div className="font-semibold drop-shadow">{r.title}</div>
                <div className="text-white/80">{r.org}</div>
                <div className="mt-1 inline-flex items-center gap-1 rounded-md border border-violet-500/30 bg-violet-600/10 px-2 py-[2px] text-[11px] text-violet-300">
                  <Calendar className="h-3 w-3" />
                  {r.period}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IconBtn({ children, onClick, aria }: { children: React.ReactNode; onClick: () => void; aria: string }) {
  return (
    <button
      aria-label={aria}
      onClick={onClick}
      className="rounded-full border border-neutral-800 bg-neutral-900/70 p-2 text-neutral-200 hover:border-violet-500/40 hover:text-white"
    >
      {children}
    </button>
  );
}
