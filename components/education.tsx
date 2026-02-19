// components/Education.tsx
"use client";

import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Award, School, BookOpen } from "lucide-react";

export default function Education() {
  const ed = {
    period: "Sep 2022 – Present",
    major: "Software Engineering",
    school: "Ho Chi Minh City University of Technology and Engineering (HCM-UTE)",
    gpa: "3.2 / 4.0",
    coursework: [
      "HTML, CSS, JavaScript/TypeScript, React, Tailwind CSS",
      "Figma, Adobe Illustrator, Adobe Photoshop",
      "Databases (SQL Server / MySQL / PostgreSQL)",
    ],
  };

  return (
    <Section id="education" className="relative py-24">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_20%_10%,rgba(168,85,247,0.14),transparent),radial-gradient(60%_40%_at_80%_20%,rgba(56,189,248,0.10),transparent)]" />
        <div className="absolute inset-x-0 top-8 flex justify-center">
          <span className="select-none text-[14vw] leading-none font-extrabold tracking-tighter text-white/5">
            EDUCATION
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="border-white/10 bg-white/[0.04] text-white/70">
            Education
          </Badge>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            Academic Background
          </h2>
          <p className="mt-3 text-neutral-400">
            Software Engineering foundation with a focus on web development and
            databases.
          </p>
        </div>

        {/* modern card */}
        <div className="mx-auto mt-12 max-w-4xl">
          <Card className="relative overflow-hidden rounded-[28px] border border-white/10 bg-neutral-950/40 backdrop-blur">
            {/* glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_0%,rgba(168,85,247,0.18),transparent),radial-gradient(60%_50%_at_85%_10%,rgba(217,70,239,0.10),transparent)]" />

            <div className="relative p-6 sm:p-8">
              {/* top row */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="rounded-full border border-white/10 bg-white/[0.04] text-white/70">
                      <Calendar className="mr-1.5 h-3.5 w-3.5" />
                      {ed.period}
                    </Badge>
                    <Badge className="rounded-full border border-violet-400/20 bg-violet-500/10 text-violet-200">
                      <GraduationCap className="mr-1.5 h-3.5 w-3.5" />
                      Major: {ed.major}
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white/90">
                    {ed.school}
                  </h3>
                </div>

                {/* GPA chip */}
                <div className="shrink-0">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <div className="flex items-center gap-2 text-white/80">
                      <Award className="h-4 w-4 text-violet-300" />
                      <span className="text-sm font-semibold">GPA</span>
                    </div>
                    <div className="mt-1 text-lg font-extrabold text-white/90">
                      {ed.gpa}
                    </div>
                  </div>
                </div>
              </div>

              {/* divider */}
              <div className="my-6 h-px w-full bg-white/10" />

              {/* content grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* left: highlights */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-white/80">
                    Highlights
                  </p>

                  <div className="grid gap-3">
                    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <School className="mt-0.5 h-5 w-5 text-violet-300" />
                      <div>
                        <p className="text-sm font-semibold text-white/90">
                          Software Engineering Program
                        </p>
                        <p className="mt-1 text-sm text-white/60">
                          Strong foundation in building web applications and
                          working with databases.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <BookOpen className="mt-0.5 h-5 w-5 text-violet-300" />
                      <div>
                        <p className="text-sm font-semibold text-white/90">
                          Relevant Coursework
                        </p>
                        <p className="mt-1 text-sm text-white/60">
                          Web fundamentals, modern frontend, and relational
                          databases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* right: coursework chips */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-white/80">
                    Key Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ed.coursework.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-2 text-sm text-neutral-400">
                    This background supports my UI/UX + Frontend work by helping
                    me collaborate smoothly with developers and ship designs.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
