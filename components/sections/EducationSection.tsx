"use client";

import { motion } from "framer-motion";
import { stagger, viewport } from "@/lib/animations";
import { useLanguage } from "@/components/LanguageProvider";

const TEXT = {
  vi: {
    heading: "Học vấn",
    period: "09/2022 – 07/2026",
    major: "Công nghệ Phần mềm",
    school: "Trường Đại học Công nghệ Kỹ thuật TP.HCM (HCM-UTE)",
    graduated: "Đã tốt nghiệp",
    keyTopics: "Chủ đề chính",
    topics: [
      "HTML, CSS, JavaScript/TypeScript, React, Tailwind CSS",
      "Figma, Adobe Illustrator, Adobe Photoshop",
      "Cơ sở dữ liệu (SQL Server / MySQL / PostgreSQL)",
    ],
    outOf: "trên thang 4.0",
    reflection:
      "Những năm này cho mình nền tảng, nhưng phần lớn những gì mình dùng hàng ngày lại đến từ các dự án cá nhân và công việc ở Đoàn - Hội song song với việc học.",
  },
  en: {
    heading: "Education",
    period: "Sep 2022 – Jul 2026",
    major: "Software Engineering",
    school: "Ho Chi Minh City University of Technology and Engineering",
    graduated: "Graduated",
    keyTopics: "Key topics",
    topics: [
      "HTML, CSS, JavaScript/TypeScript, React, Tailwind CSS",
      "Figma, Adobe Illustrator, Adobe Photoshop",
      "Databases (SQL Server / MySQL / PostgreSQL)",
    ],
    outOf: "out of 4.0",
    reflection:
      "These years taught me the fundamentals, but most of what I actually use day to day came from side projects and the student union work happening alongside classes.",
  },
};

export default function EducationSection() {
  const { lang } = useLanguage();
  const t = TEXT[lang];

  return (
    <section id="education" className="py-24 px-6 sm:px-10 lg:px-20 border-b border-[#2A2A28]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          {...stagger(0)}
          whileInView={stagger(0).animate}
          viewport={viewport}
          className="font-serif text-[clamp(2rem,4.2vw,2.8rem)] text-[#F0EFE9] leading-[1.1] mb-12"
        >
          {t.heading}
        </motion.h2>

        <motion.div
          {...stagger(1)}
          whileInView={stagger(1).animate}
          viewport={viewport}
          className="border border-[#2A2A28] rounded-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-[1fr_200px] divide-y md:divide-y-0 md:divide-x divide-[#2A2A28]">
            {/* main */}
            <div className="p-8 md:p-10 bg-[#161614]">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-mono text-[10px] border border-[#2A2A28] text-[#6B6B67] px-2.5 py-1 rounded">
                  {t.period}
                </span>
                <span className="font-mono text-[10px] border border-[#1D9E75]/30 text-[#1D9E75] bg-[#1D9E75]/8 px-2.5 py-1 rounded">
                  {t.major}
                </span>
                <span className="font-mono text-[10px] border border-[#2A2A28] text-[#6B6B67] px-2.5 py-1 rounded">
                  {t.graduated}
                </span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl text-[#F0EFE9] leading-snug mb-6">
                {t.school}
              </h3>

              <p className="font-mono text-[10px] tracking-[0.1em] text-[#6B6B67] mb-3">{t.keyTopics}</p>
              <div className="flex flex-wrap gap-2">
                {t.topics.map((topic) => (
                  <span key={topic} className="font-mono text-[10px] px-3 py-1.5 rounded border border-[#2A2A28] text-[#6B6B67] bg-[#0E0E0C]">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* GPA */}
            <div className="p-8 flex flex-col justify-center gap-3 bg-[#161614]">
              <div>
                <p className="font-mono text-[10px] tracking-[0.1em] text-[#6B6B67] mb-1">GPA</p>
                <p className="font-serif text-5xl text-[#F0EFE9]">3.21</p>
                <p className="font-mono text-[10px] text-[#3A3A38] mt-1">{t.outOf}</p>
              </div>
              <p className="text-[13px] text-[#6B6B67] leading-relaxed">
                {t.reflection}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
