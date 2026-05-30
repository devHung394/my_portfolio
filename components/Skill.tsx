"use client";

import Section from "./Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Skills() {
  return (
    <Section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <Badge className="border-white/10 bg-white/[0.04] text-white/70">
            Skills
          </Badge>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            UX/UI <span className="text-white/40">×</span> Frontend Execution
          </h2>

          <p className="mt-3 max-w-2xl text-neutral-400">
            I focus on clear flows, consistent UI systems, and dev-friendly
            handoff — with the ability to ship UI using React/Next.js.
          </p>
        </div>

        {/* Chỉ còn 2 khung lớn */}
        <div className="grid gap-4 sm:gap-5 lg:gap-6 xl:grid-cols-2">
          {/* Primary - UX/UI */}
          <Card className="relative overflow-hidden rounded-[28px] border border-cyan-400/15 bg-neutral-950/40 backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_20%_10%,rgba(34,211,238,0.18),transparent),radial-gradient(60%_50%_at_80%_0%,rgba(56,189,248,0.10),transparent)]" />
            <div className="relative p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-white/60">Primary</p>
                  <h3 className="mt-1 text-2xl font-bold text-white/90">
                    UX / UI
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    Case study • Flows • UI system • Handoff
                  </p>
                </div>
                <Badge className="border-white/10 bg-white/[0.04] text-white/70">
                  Design
                </Badge>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Problem framing",
                  "User journey",
                  "IA + Flows",
                  "Wireframe → Hi-fi",
                  "UI states",
                  "Design system",
                  "Handoff",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Figma", "Adobe Illustrator"].map((t) => (
                  <Badge
                    key={t}
                    className="border-white/10 bg-white/[0.05] text-white/75"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Supporting - Frontend */}
          <Card className="relative overflow-hidden rounded-[28px] border border-violet-400/15 bg-neutral-950/40 backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_20%_10%,rgba(168,85,247,0.18),transparent),radial-gradient(60%_50%_at_80%_0%,rgba(217,70,239,0.10),transparent)]" />
            <div className="relative p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-white/60">Supporting</p>
                  <h3 className="mt-1 text-2xl font-bold text-white/90">
                    Frontend
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    React/Next.js • TypeScript • Tailwind
                  </p>
                </div>
                <Badge className="border-white/10 bg-white/[0.04] text-white/70">
                  Engineering
                </Badge>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "React UI",
                  "Responsive layout",
                  "Component thinking",
                  "UI polish",
                  "Dev-friendly handoff",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Git/GitHub",
                ].map((t) => (
                  <Badge
                    key={t}
                    className="border-white/10 bg-white/[0.05] text-white/75"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
