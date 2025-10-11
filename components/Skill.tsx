"use client";

import { useState } from "react";
import Section from "./Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Code2, Braces, Type, Bolt, Component, Boxes, Server, Database, GitBranch, Cloud,
  Palette, PenTool, Ruler, Accessibility, Layout, MousePointer, Sparkles
} from "lucide-react";

/** Small gradient/glass icon holder */
function IconBadge({ children, tone = "violet" }: { children: React.ReactNode; tone?: "violet" | "cyan" | "amber" }) {
  const tones = {
    violet: "from-violet-600/25 to-fuchsia-600/15 ring-violet-500/30",
    cyan:   "from-cyan-500/25 to-sky-500/15 ring-cyan-400/30",
    amber:  "from-amber-500/25 to-orange-500/15 ring-amber-400/30",
  } as const;
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 bg-gradient-to-br ${tones[tone]}`}
    >
      <span className="text-white/90">{children}</span>
    </span>
  );
}

type SkillItem = { name: string; icon: React.ReactNode; level?: number };
type Group = {
  key: "coding" | "uxui";
  title: string;
  subtitle: string;
  tone: "violet" | "cyan";
  stacks: SkillItem[];
  tools?: string[];
};

const GROUPS: Group[] = [
  {
    key: "coding",
    title: "Coding",
    subtitle: "Frontend • Full-stack • Performance",
    tone: "violet",
    stacks: [
      { name: "HTML",           icon: <Code2 className="h-5 w-5" />, level: 90 },
      { name: "CSS / Tailwind",  icon: <Braces className="h-5 w-5" />, level: 88 },
      { name: "JavaScript",      icon: <Bolt className="h-5 w-5" />, level: 85 },
      { name: "React",           icon: <Component className="h-5 w-5" />, level: 84 },
      { name: "Next.js",         icon: <Boxes className="h-5 w-5" />, level: 83 },
      { name: "Node.js",         icon: <Server className="h-5 w-5" />, level: 50 },
      { name: "MongoDB",         icon: <Database className="h-5 w-5" />, level: 68 },
      { name: "My SQL",      icon: <Database className="h-5 w-5" />, level: 65 },
      { name: "Git / Workflow",  icon: <GitBranch className="h-5 w-5" />, level: 78 },
    ],
    tools: ["Zustand", "Framer Motion", "Axios", "Prisma", "Vitest/Jest"],
  },
  {
    key: "uxui",
    title: "UX / UI",
    subtitle: "Design systems • Prototyping • A11y",
    tone: "cyan",
    stacks: [
      { name: "Design Systems",        icon: <Layout className="h-5 w-5" />,       level: 78 },
      { name: "Wireframing",           icon: <PenTool className="h-5 w-5" />,      level: 80 },
      { name: "Prototyping",           icon: <MousePointer className="h-5 w-5" />, level: 76 },
      { name: "Adobe Illustrator",  icon: <Accessibility className="h-5 w-5" />,level: 72 },
      { name: "Information Architecture", icon: <Ruler className="h-5 w-5" />,     level: 70 },
      { name: "Micro-interactions",    icon: <Sparkles className="h-5 w-5" />,     level: 74 },
    ],
    tools: ["Figma", "FigJam", "Radix/Material", "Tailwind UI"],
  },
];

export default function Skills() {
  const [active, setActive] = useState<"all" | "coding" | "uxui">("all");
  const visible = active === "all" ? GROUPS : GROUPS.filter(g => g.key === active);

  return (
    <Section id="skills" className="py-24">
      <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Skills</h2>
        <p className="mt-2 text-neutral-400">Code that ships • Design that feels right</p>

        <div className="mt-6 flex items-center justify-center gap-2">
          {(["all","coding","uxui"] as const).map(k => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`rounded-full px-4 py-1.5 text-sm border transition-all ${
                active === k
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:bg-neutral-900"
              }`}
            >
              {k === "all" ? "All" : k.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map(group => (
          <Card key={group.title} className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 md:p-8">
            {/* header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IconBadge tone={group.tone}>
                  {group.key === "coding" ? <Code2 className="h-5 w-5" /> : <Palette className="h-5 w-5" />}
                </IconBadge>
                <div>
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <p className="text-sm text-neutral-400">{group.subtitle}</p>
                </div>
              </div>
              <Badge className="hidden sm:inline-flex border-neutral-800 bg-neutral-800/60 text-neutral-200">
                {group.key === "coding" ? "Engineering" : "Design"}
              </Badge>
            </div>

            {/* grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.stacks.map((s, i) => (
                <div
                  key={s.name}
                  className="group rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 transition hover:-translate-y-0.5 hover:border-primary/40"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <IconBadge tone={group.tone === "violet" ? "violet" : "cyan"}>{s.icon}</IconBadge>
                    <Badge className="border-neutral-800 bg-neutral-800/60 text-neutral-200">
                      {group.key === "coding" ? "Code" : "UX"}
                    </Badge>
                  </div>
                  <div className="text-sm font-medium">{s.name}</div>
                  {typeof s.level === "number" && (
                    <div className="mt-2">
                      <div className="mb-1 flex items-center justify-between text-[11px] text-neutral-400">
                        <span>Proficiency</span><span>{s.level}%</span>
                      </div>
                      <Progress value={s.level} className="h-2" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {group.tools?.length ? (
              <div className="mt-6">
                <p className="mb-2 text-xs uppercase tracking-wider text-neutral-400">Tools & Libraries</p>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map(t => (
                    <Badge key={t} variant="secondary" className="border-neutral-800 bg-neutral-800/60 text-neutral-200">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}
