"use client";

import { useMemo, useState } from "react";
import Section from "./Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ClipboardList,
  Route,
  Ruler,
  PenTool,
  MousePointer,
  Layers,
  Layout,
  Accessibility,
  Sparkles,
  Code2,
  Braces,
  Type,
  Component,
  Boxes,
  GitBranch,
  Wand2,
} from "lucide-react";

type Skill = {
  title: string;
  icon: React.ReactNode;
  tags: string[];
  kind: "uxui" | "engineering";
  emphasis?: boolean; // highlight for top strengths
};

const SKILLS: Skill[] = [
  // UX/UI (from your CV)
  {
    title: "Problem Framing",
    icon: <ClipboardList className="h-5 w-5" />,
    tags: ["Goals", "Constraints", "Metrics"],
    kind: "uxui",
    emphasis: true,
  },
  {
    title: "User Journey & Insights",
    icon: <Route className="h-5 w-5" />,
    tags: ["Pain points", "Opportunities", "Prioritize"],
    kind: "uxui",
    emphasis: true,
  },
  {
    title: "Information Architecture",
    icon: <Ruler className="h-5 w-5" />,
    tags: ["Sitemap", "Navigation", "Content"],
    kind: "uxui",
  },
  {
    title: "User Flows",
    icon: <Route className="h-5 w-5" />,
    tags: ["Happy path", "Edge cases", "Tasks"],
    kind: "uxui",
    emphasis: true,
  },
  {
    title: "Wireframe → Hi-fi",
    icon: <PenTool className="h-5 w-5" />,
    tags: ["Layout", "Hierarchy", "Responsive"],
    kind: "uxui",
    emphasis: true,
  },
  {
    title: "Prototyping",
    icon: <MousePointer className="h-5 w-5" />,
    tags: ["Micro UX", "Interactions", "Demo"],
    kind: "uxui",
  },
  {
    title: "UI States",
    icon: <Layers className="h-5 w-5" />,
    tags: ["Loading", "Empty", "Error"],
    kind: "uxui",
    emphasis: true,
  },
  {
    title: "Design System",
    icon: <Layout className="h-5 w-5" />,
    tags: ["Components", "Variants", "Tokens"],
    kind: "uxui",
    emphasis: true,
  },
  {
    title: "Handoff",
    icon: <Accessibility className="h-5 w-5" />,
    tags: ["Specs", "Notes", "Dev-ready"],
    kind: "uxui",
  },
  {
    title: "Micro-interactions",
    icon: <Sparkles className="h-5 w-5" />,
    tags: ["Feedback", "Clarity", "Delight"],
    kind: "uxui",
  },

  // Frontend (supporting)
  {
    title: "HTML",
    icon: <Code2 className="h-5 w-5" />,
    tags: ["Semantic", "SEO basics"],
    kind: "engineering",
  },
  {
    title: "CSS / Tailwind",
    icon: <Braces className="h-5 w-5" />,
    tags: ["Responsive", "Layout", "8pt"],
    kind: "engineering",
    emphasis: true,
  },
  {
    title: "JavaScript",
    icon: <Type className="h-5 w-5" />,
    tags: ["Async", "Fetch", "DOM"],
    kind: "engineering",
  },
  {
    title: "TypeScript",
    icon: <Type className="h-5 w-5" />,
    tags: ["Types", "DX", "Safer UI"],
    kind: "engineering",
    emphasis: true,
  },
  {
    title: "React",
    icon: <Component className="h-5 w-5" />,
    tags: ["Components", "Hooks", "State"],
    kind: "engineering",
    emphasis: true,
  },
  {
    title: "Next.js",
    icon: <Boxes className="h-5 w-5" />,
    tags: ["Routing", "SEO", "App patterns"],
    kind: "engineering",
  },
  {
    title: "Git / Workflow",
    icon: <GitBranch className="h-5 w-5" />,
    tags: ["Branching", "PRs", "Collab"],
    kind: "engineering",
  },
  {
    title: "UI Polish",
    icon: <Wand2 className="h-5 w-5" />,
    tags: ["Spacing", "States", "Consistency"],
    kind: "engineering",
  },
];

function Pill({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-sm transition",
        "border backdrop-blur",
        active
          ? "border-primary/40 bg-primary/10 text-primary"
          : "border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.05]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function SkillCard({ s, tone }: { s: Skill; tone: "ux" | "eng" }) {
  const toneCls =
    tone === "ux"
      ? {
          ring: "ring-cyan-400/20",
          border: "border-cyan-400/15 hover:border-cyan-300/30",
          glow: "from-cyan-500/15 via-sky-500/5 to-transparent",
          iconBg: "from-cyan-500/25 to-sky-500/10 ring-cyan-400/25",
        }
      : {
          ring: "ring-violet-400/20",
          border: "border-violet-400/15 hover:border-violet-300/30",
          glow: "from-violet-500/15 via-fuchsia-500/5 to-transparent",
          iconBg: "from-violet-500/25 to-fuchsia-500/10 ring-violet-400/25",
        };

  return (
    <Card
      className={[
        "group relative overflow-hidden rounded-3xl",
        "bg-neutral-950/40 backdrop-blur",
        "border transition",
        toneCls.border,
        "hover:-translate-y-0.5 hover:bg-neutral-950/55",
      ].join(" ")}
    >
      {/* spotlight gradient */}
      <div
        className={[
          "pointer-events-none absolute -top-24 left-1/2 h-56 w-[140%] -translate-x-1/2",
          "bg-gradient-to-b opacity-0 blur-2xl transition duration-500 group-hover:opacity-100",
          toneCls.glow,
        ].join(" ")}
      />

      {/* subtle ring */}
      <div
        className={[
          "pointer-events-none absolute inset-0 ring-1",
          toneCls.ring,
        ].join(" ")}
      />

      <div className="relative p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span
            className={[
              "inline-flex h-11 w-11 items-center justify-center rounded-2xl ring-1 bg-gradient-to-br",
              toneCls.iconBg,
            ].join(" ")}
          >
            <span className="text-white/90">{s.icon}</span>
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <p className="truncate text-[15px] font-semibold text-white/90">
                {s.title}
              </p>
              {s.emphasis ? (
                <Badge className="border-white/10 bg-white/[0.06] text-white/80">
                  Core
                </Badge>
              ) : (
                <Badge className="border-white/10 bg-white/[0.04] text-white/60">
                  Plus
                </Badge>
              )}
            </div>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {s.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function Skills() {
  const [active, setActive] = useState<"all" | "uxui" | "engineering">("uxui");

  const visible = useMemo(() => {
    if (active === "all") return SKILLS;
    return SKILLS.filter((s) => s.kind === active);
  }, [active]);

  const uxCount = useMemo(
    () => SKILLS.filter((s) => s.kind === "uxui").length,
    [],
  );
  const engCount = useMemo(
    () => SKILLS.filter((s) => s.kind === "engineering").length,
    [],
  );

  return (
    <Section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <Badge className="border-white/10 bg-white/[0.04] text-white/70">
            Skills
          </Badge>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            UX Thinking <span className="text-white/40">×</span> Frontend
            Execution
          </h2>

          <p className="mt-3 max-w-2xl text-neutral-400">
            I focus on clear flows, consistent UI systems, and dev-friendly
            handoff — with the ability to ship UI using React/Next.js.
          </p>

          {/* filters */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            <Pill active={active === "uxui"} onClick={() => setActive("uxui")}>
              UX / UI <span className="ml-1 text-white/40">({uxCount})</span>
            </Pill>
            <Pill
              active={active === "engineering"}
              onClick={() => setActive("engineering")}
            >
              Engineering{" "}
              <span className="ml-1 text-white/40">({engCount})</span>
            </Pill>
            <Pill active={active === "all"} onClick={() => setActive("all")}>
              All{" "}
              <span className="ml-1 text-white/40">({uxCount + engCount})</span>
            </Pill>
          </div>
        </div>

        {/* bento layout */}
        <div className="grid gap-4 sm:gap-5 lg:gap-6">
          {/* top row: two big panels */}
          <div className="grid gap-4 sm:gap-5 lg:gap-6 xl:grid-cols-2">
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

          {/* skills grid: responsive */}
          <div className="grid gap-4 sm:gap-5 lg:gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((s) => (
              <SkillCard
                key={s.title}
                s={s}
                tone={s.kind === "uxui" ? "ux" : "eng"}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
