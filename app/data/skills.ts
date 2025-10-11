export type SkillGroup = {
  title: string;
  icon: "cpu" | "rocket" | "globe";  // chỉ là key
  items: string[];
  confidence?: number;
};

export const skills: SkillGroup[] = [
  { title: "Core Web",   icon: "cpu",    items: ["HTML", "CSS", "TypeScript", "Accessibility"], confidence: 85 },
  { title: "Frameworks", icon: "rocket", items: ["Next.js", "React", "Framer Motion", "Zustand"], confidence: 80 },
  { title: "Back & Infra", icon: "globe", items: ["Node/Express", "MongoDB", "Vercel", "CI/CD"], confidence: 75 },
];
