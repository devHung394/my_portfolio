"use client";

import { Download, Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { stagger, viewport } from "@/lib/animations";
import { MagneticWrap } from "@/components/MagneticWrap";
import { useLanguage } from "@/components/LanguageProvider";

const SOCIALS = [
  { href: "https://github.com/QuocHung-0309", Icon: Github,   label: "GitHub" },
  { href: "https://linkedin.com/in/hungnqh",  Icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com/whuq394",     Icon: Facebook, label: "Facebook" },
];

const TOOLS = [
  "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Figma", "Adobe Illustrator", "Adobe Premiere", "CapCut", "Git",
];

type Segment = { text: string; bold?: boolean };

function b(text: string): Segment { return { text, bold: true }; }
function p(text: string): Segment { return { text }; }

const TEXT = {
  vi: {
    heading: "Giới thiệu bản thân",
    paragraphs: [
      [p("👋 Xin chào! Mình là "), b("Nông Quốc Hưng"), p(" (sinh năm 2004), tốt nghiệp "), b("Kỹ sư Công nghệ Thông tin"), p(", chuyên ngành "), b("Công nghệ Phần mềm"), p(".")],
      [p("Mình yêu thích việc xây dựng các sản phẩm số từ ý tưởng đến khi hoàn thiện. Thế mạnh của mình là phát triển website với "), b("JavaScript"), p(", đặc biệt là "), b("React.js"), p(" và "), b("Next.js"), p(", kết hợp cùng tư duy thiết kế để tạo ra những giao diện hiện đại, trực quan và mang lại trải nghiệm tốt cho người dùng.")],
      [p("Bên cạnh lập trình, mình đam mê sáng tạo nội dung và truyền thông. Mình yêu thích kể chuyện qua hình ảnh và video, có kinh nghiệm thiết kế các ấn phẩm bằng "), b("Adobe Illustrator"), p(", dựng video với "), b("CapCut"), p(" và "), b("Adobe Premiere"), p(", đồng thời phát triển nội dung trên các nền tảng số như "), b("TikTok"), p(".")],
      [p("Ngoài chuyên môn, mình còn tích cực tham gia tổ chức và điều phối các chương trình, sự kiện dành cho sinh viên. Những trải nghiệm này giúp mình rèn luyện khả năng lãnh đạo, làm việc nhóm, quản lý dự án và giao tiếp hiệu quả.")],
      [p("Mình luôn mong muốn không ngừng học hỏi, phát triển bản thân và tạo ra những sản phẩm không chỉ hoạt động tốt về mặt kỹ thuật mà còn mang đến giá trị thực sự cho người sử dụng.")],
    ],
    statusLabel: "Hiện tại",
    statusValue: "Vừa tốt nghiệp Kỹ sư CNTT, sẵn sàng nhận việc mới",
    location: "Thủ Đức, TP. Hồ Chí Minh",
    downloadCv: "Tải CV",
  },
  en: {
    heading: "About me",
    paragraphs: [
      [p("👋 Hi there! I'm "), b("Nông Quốc Hưng"), p(" (born 2004), a graduate "), b("Information Technology Engineer"), p(", majoring in "), b("Software Engineering"), p(".")],
      [p("I love building digital products from idea to finished thing. My strength is building websites with "), b("JavaScript"), p(", especially "), b("React.js"), p(" and "), b("Next.js"), p(", paired with a design mindset to create interfaces that feel modern, intuitive, and genuinely good to use.")],
      [p("Beyond code, I'm into content creation and media. I like telling stories through images and video, I design print and digital materials in "), b("Adobe Illustrator"), p(", edit video in "), b("CapCut"), p(" and "), b("Adobe Premiere"), p(", and create content for platforms like "), b("TikTok"), p(".")],
      [p("Outside my main field, I actively help organize and coordinate programs and events for students. That experience has sharpened my leadership, teamwork, project management, and communication skills.")],
      [p("I'm always looking to keep learning and growing, and to build things that don't just work well technically, but actually deliver value to the people using them.")],
    ],
    statusLabel: "Currently",
    statusValue: "Freshly graduated IT Engineer, open to new work",
    location: "Thu Duc, Ho Chi Minh City",
    downloadCv: "Download CV",
  },
};

export default function AboutSection() {
  const { lang } = useLanguage();
  const t = TEXT[lang];

  return (
    <section id="about" className="py-24 px-6 sm:px-10 lg:px-20 border-b border-[#2A2A28]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          {...stagger(0)}
          whileInView={stagger(0).animate}
          viewport={viewport}
          className="font-serif text-[clamp(2rem,4.2vw,2.8rem)] text-snow leading-[1.1] mb-12"
        >
          {t.heading}
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px] items-start">
          {/* left: narrative */}
          <div>
            <motion.div
              {...stagger(1)}
              whileInView={stagger(1).animate}
              viewport={viewport}
              className="space-y-4 text-[15px] text-dust leading-relaxed max-w-2xl"
            >
              {t.paragraphs.map((segments, i) => (
                <p key={i}>
                  {segments.map((seg, j) =>
                    seg.bold ? (
                      <span key={j} className="text-snow font-medium">{seg.text}</span>
                    ) : (
                      <span key={j}>{seg.text}</span>
                    )
                  )}
                </p>
              ))}
            </motion.div>

            <motion.div
              {...stagger(2)}
              whileInView={stagger(2).animate}
              viewport={viewport}
              className="flex flex-wrap gap-2 mt-8"
            >
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-[10px] px-3 py-1.5 border border-rim text-dust rounded bg-surface"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>

          {/* right: facts card */}
          <motion.div
            {...stagger(1.5)}
            whileInView={stagger(1.5).animate}
            viewport={viewport}
            className="border border-rim rounded-2xl bg-surface p-6 space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss" />
                </span>
                <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-moss">
                  {t.statusLabel}
                </p>
              </div>
              <p className="text-snow text-[14px] leading-snug">{t.statusValue}</p>
            </div>

            <div className="space-y-2.5 pt-5 border-t border-rim">
              <MagneticWrap strength={0.15}>
                <a
                  href="mailto:nqhung394.work@gmail.com"
                  className="flex items-center gap-2.5 text-[13px] text-dust hover:text-snow transition-colors duration-200"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  nqhung394.work@gmail.com
                </a>
              </MagneticWrap>
              <p className="flex items-center gap-2.5 text-[13px] text-dust">
                <Phone className="h-3.5 w-3.5 shrink-0" />
                0764.396.306
              </p>
              <p className="flex items-center gap-2.5 text-[13px] text-dust">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {t.location}
              </p>
            </div>

            <div className="flex gap-2 pt-5 border-t border-rim">
              {SOCIALS.map(({ href, Icon, label }) => (
                <MagneticWrap key={href} strength={0.5}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 flex items-center justify-center
                      border border-rim rounded-full text-dust
                      hover:text-snow hover:border-moss active:scale-[0.94] transition-all duration-200"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                </MagneticWrap>
              ))}
            </div>

            <a
              href="/NongQuocHung-UXUI.pdf"
              download
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full
                border border-moss/40 bg-moss/10 text-moss
                font-mono text-[11px] tracking-wide
                hover:bg-moss/20 hover:border-moss/60 transition-all duration-200"
            >
              <Download className="h-3.5 w-3.5" />
              {t.downloadCv}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
