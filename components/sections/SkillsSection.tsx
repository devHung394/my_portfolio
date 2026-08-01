"use client";

import { motion } from "framer-motion";
import { stagger, viewport } from "@/lib/animations";
import { useLanguage } from "@/components/LanguageProvider";

type Segment = { text: string; bold?: boolean };
const b = (text: string): Segment => ({ text, bold: true });
const p = (text: string): Segment => ({ text });

const TEXT = {
  vi: {
    heading: "Mình làm những gì",
    skills: [
      {
        title: "UX / UI Design",
        desc: [p("Từ nghiên cứu người dùng, wireframe cho đến hệ thống UI hoàn chỉnh trong "), b("Figma"), p(", luôn sẵn sàng bàn giao cho dev.")],
      },
      {
        title: "Frontend",
        desc: [b("React"), p(" và "), b("Next.js"), p(" với "), b("TypeScript"), p(", kiến trúc component rõ ràng, animation mượt, và UI chuẩn từng pixel.")],
      },
      {
        title: "Triển khai hệ thống & BA",
        desc: [p("Thu thập yêu cầu nghiệp vụ, viết tài liệu đặc tả, và phối hợp cùng đội phát triển để hệ thống lên đúng tiến độ.")],
      },
    ],
  },
  en: {
    heading: "What I do",
    skills: [
      {
        title: "UX / UI Design",
        desc: [p("From user research and wireframes to a full UI system in "), b("Figma"), p(", always handed off dev-ready.")],
      },
      {
        title: "Frontend",
        desc: [b("React"), p(" and "), b("Next.js"), p(" with "), b("TypeScript"), p(", clean component architecture, smooth animation, pixel-perfect UI.")],
      },
      {
        title: "System Implementation & BA",
        desc: [p("Gathering business requirements, writing specs, and working with the dev team to ship systems on time.")],
      },
    ],
  },
};

const MARQUEE = [
  "Figma", "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Adobe Illustrator", "Git", "Framer Motion",
  "UI Design", "Design System", "Prototyping", "Wireframing",
  "Miro", "SQL Server", "MySQL", "PostgreSQL",
  "Jira", "Trello", "Postman", "Agile / Scrum",
];

export default function SkillsSection() {
  const { lang } = useLanguage();
  const t = TEXT[lang];

  return (
    <section id="skills" className="px-6 sm:px-10 lg:px-20 py-24 border-b border-rim">
      <div className="max-w-7xl mx-auto">
        {/* headline */}
        <motion.h2
          {...stagger(0)}
          whileInView={stagger(0).animate}
          viewport={viewport}
          className="font-serif text-[clamp(2rem,4.2vw,2.8rem)] text-snow leading-[1.1] mb-16"
        >
          {t.heading}
        </motion.h2>

        {/* capability list, editorial style */}
        <div className="border-t border-rim">
          {t.skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              {...stagger(i + 1)}
              whileInView={stagger(i + 1).animate}
              viewport={viewport}
              className="grid md:grid-cols-[260px_1fr] gap-3 md:gap-16 py-9 border-b border-rim items-baseline"
            >
              <div className="flex items-center gap-3">
                <span className="w-1 h-5 rounded-full bg-moss/60 shrink-0" />
                <h3 className="font-serif text-xl md:text-2xl leading-snug text-snow">
                  {skill.title}
                </h3>
              </div>
              <p className="text-dust text-[14px] leading-relaxed max-w-lg">
                {skill.desc.map((seg, j) =>
                  seg.bold ? (
                    <span key={j} className="text-snow font-medium">{seg.text}</span>
                  ) : (
                    <span key={j}>{seg.text}</span>
                  )
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* marquee, big statement band */}
      <div className="mt-16 border-y border-rim py-8 overflow-hidden">
        <div
          className="flex gap-10 animate-marquee whitespace-nowrap"
          style={{ animationDuration: "38s" }}
        >
          {[0, 1].map((copy) => (
            <span key={copy} className="flex items-center gap-10 shrink-0">
              {MARQUEE.map((skill, i) => (
                <span key={skill} className="flex items-center gap-10">
                  <span
                    className={`font-serif italic text-[clamp(1.4rem,3vw,2.1rem)] leading-none ${
                      i % 2 === 0 ? "text-snow/80" : "text-dust"
                    }`}
                  >
                    {skill}
                  </span>
                  <span className="text-moss text-lg leading-none">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
