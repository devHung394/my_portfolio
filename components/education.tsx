// components/Education.tsx
"use client";

import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  // data rút từ CV (có thể tách ra data/education.ts sau)
  const items = [
    {
      period: " Sep 2022 – Present",
      title: "Major: Software Engineering",
      school: "Ho Chi Minh City University of Technology and Education (HCMUTE)",
      details: [
        "GPA: 3.13 / 4",
        "Core: HTML, CSS, JavaScript/TypeScript, React, Tailwind, DB (SQL Server/MySQL/PostgreSQL)",
      ],
      // tone cho gradient
      tone: "violet" as const,
    },
  ];

  const toneRing =
    "ring-1 ring-violet-500/40 bg-gradient-to-b from-violet-600/20 to-fuchsia-600/10";

  return (
    <Section id="education" className="relative py-24">
      {/* BG title lớn */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-4 flex justify-center">
          <span className="select-none text-[14vw] leading-none font-extrabold tracking-tighter text-white/5">
            EDUCATION
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Education</h2>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs tracking-[0.3em] text-white/70">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500" />
          <span>ACADEMIC JOURNEY</span>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-4xl">
        {/* Đường dọc timeline */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full -translate-x-1/2 border-l-2 border-violet-700/50" />

        <ul className="space-y-24">
          {items.map((ed, idx) => (
            <li key={idx} className="relative">
              {/* Dot giữa
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <div
                  className={`h-5 w-5 rounded-full ${toneRing} backdrop-blur`}
                />
              </div> */}

              {/* Nội dung */}
              <div className="mt-8 grid gap-4 px-4 text-center">
                <div className="mx-auto">
                  <Badge className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[11px] text-violet-300">
                    <Calendar className="mr-1.5 h-3.5 w-3.5" />
                    {ed.period}
                  </Badge>
                </div>

                <h3 className="mx-auto flex max-w-3xl items-center justify-center gap-2 text-xl sm:text-2xl font-bold">
                  <GraduationCap className="h-6 w-6 text-violet-400" />
                  {ed.title}
                </h3>

                <p className="text-white/70">{ed.school}</p>

                <div className="mx-auto flex flex-wrap items-center justify-center gap-3">
                  <Badge className="border border-violet-500/30 bg-violet-500/10 text-violet-200">
                    <Award className="mr-1.5 h-3.5 w-3.5" />
                    {ed.details[0]}
                  </Badge>
                </div>

                <p className="mx-auto max-w-2xl text-sm text-neutral-400">
                  {ed.details[1]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
