"use client";

import { motion } from "framer-motion";
import { stagger, viewport } from "@/lib/animations";
import { useLanguage } from "@/components/LanguageProvider";

type Entry = {
  jobTitle: string;
  company: string;
  period: string;
  location?: string;
  reflection?: string;
  bullets: string[];
  current?: boolean;
};

const TEXT: { vi: { heading: string; entries: Entry[] }; en: { heading: string; entries: Entry[] } } = {
  vi: {
    heading: "Kinh nghiệm làm việc",
    entries: [
      {
        jobTitle: "Chuyên viên Thiết kế và Vận hành",
        company: "Trung tâm Hán ngữ KAT Education",
        period: "10/2025 – 03/2026",
        location: "Thủ Đức",
        bullets: [
          "Tham gia xây dựng và định hình thương hiệu cho trung tâm.",
          "Vận hành hệ thống của trung tâm.",
          "Thiết kế ấn phẩm truyền thông, nội dung mạng xã hội cho các chương trình của trung tâm.",
          "Hỗ trợ quản lý lịch học, thông tin học viên và các quy trình vận hành hàng ngày.",
        ],
      },
      {
        jobTitle: "Thực tập sinh UX/UI Designer & Frontend Developer",
        company: "DuDi Software",
        period: "04/2025 – 09/2025",
        reflection:
          "Công việc studio thực sự đầu tiên của mình. Mình học được rằng một giao diện đẹp chẳng có ý nghĩa gì nếu dev không build được, nên mình bắt đầu thiết kế với việc triển khai trong đầu ngay từ bước wireframe đầu tiên.",
        bullets: [
          "Thiết kế website responsive cho các sản phẩm đặt tour, nền tảng dịch vụ và thương mại điện tử.",
          "Xây dựng user flow, wireframe và giao diện hi-fi bám sát mục tiêu sản phẩm và kinh doanh.",
          "Góp phần xây dựng design system và giữ tính nhất quán hình ảnh xuyên suốt các sản phẩm.",
          "Làm việc sát với dev để đảm bảo triển khai đúng theo đặc tả thiết kế.",
          "Dựng giao diện responsive từ thiết kế Figma bằng React.js, HTML, CSS và JavaScript.",
          "Xây dựng và bảo trì các component frontend tái sử dụng được để hỗ trợ phát triển sản phẩm lâu dài.",
        ],
      },
      {
        jobTitle: "Ban Tổ chức Lễ tốt nghiệp",
        company: "Phòng Đào tạo, Trường Đại học Công nghệ Kỹ thuật TP.HCM",
        period: "12/2023 – 07/2026",
        bullets: [
          "Tham gia trực tiếp vào việc quản lý mảng setup hội trường, điều phối và đảm bảo trật tự, chạy chương trình trong các buổi lễ tốt nghiệp của Trường vào tháng 6 và tháng 12 hàng năm.",
          "Phối hợp với các phòng ban liên quan để chuẩn bị cơ sở vật chất trước mỗi kỳ lễ.",
          "Hướng dẫn, hỗ trợ tân cử nhân, tân kỹ sư và gia đình trong suốt buổi lễ.",
          "Xử lý các tình huống phát sinh tại chỗ để chương trình diễn ra đúng kịch bản.",
        ],
      },
      {
        jobTitle: "Bí thư Đoàn khoa, Ban Truyền thông",
        company: "Đoàn - Hội Khoa Công nghệ Thông tin, HCMUTE",
        period: "03/2023 – 06/2027",
        location: "Thủ Đức, TP.HCM",
        current: true,
        bullets: [
          "Lập kế hoạch, truyền thông, tổ chức và quản lý các hoạt động, chương trình tình nguyện (Chiến dịch Xuân Tình nguyện, Mùa Hè Xanh...) và các chương trình, cuộc thi học thuật dành cho sinh viên (Hackathon, Mastering IT...).",
          "Quản lý và điều phối đội ngũ Ban Chấp hành Đoàn khoa trong triển khai kế hoạch hoạt động.",
          "Xây dựng nội dung, hình ảnh truyền thông cho các chương trình của Đoàn - Hội Khoa.",
          "Kết nối với các đơn vị, doanh nghiệp để tổ chức chương trình hướng nghiệp cho sinh viên.",
        ],
      },
      {
        jobTitle: "Kênh TikTok YIT-HCMUTE, 10.000 followers",
        company: "Đoàn - Hội Khoa Công nghệ Thông tin, HCMUTE",
        period: "12/2022 – 07/2026",
        location: "Thủ Đức, TP.HCM",
        bullets: [
          "Sáng lập và vận hành kênh chia sẻ thông tin, giáo dục truyền thống lịch sử dân tộc, những sự kiện nổi bật đến Đoàn viên, thanh niên trong Trường thông qua việc lên ý tưởng kịch bản, tìm kiếm chất liệu, quay và dựng video.",
          "Lên kế hoạch nội dung định kỳ và theo dõi hiệu quả tương tác của từng video.",
          "Phối hợp với các thành viên trong Đoàn khoa để đa dạng hoá chủ đề và định dạng nội dung.",
          "Phát triển kênh từ con số 0 lên hơn 10.000 người theo dõi.",
        ],
      },
    ],
  },
  en: {
    heading: "Work Experience",
    entries: [
      {
        jobTitle: "Design & Operations Specialist",
        company: "KAT Education Chinese Language Center",
        period: "Oct 2025 – Mar 2026",
        location: "Thu Duc",
        bullets: [
          "Helped build and shape the center's brand identity.",
          "Operated and maintained the center's internal systems.",
          "Designed marketing materials and social media content for the center's programs.",
          "Supported class scheduling, student records, and day-to-day operating processes.",
        ],
      },
      {
        jobTitle: "UX/UI Designer & Frontend Developer Intern",
        company: "DuDi Software",
        period: "Apr 2025 – Sep 2025",
        reflection:
          "My first real studio job. I learned that a beautiful screen is worth nothing if a developer can't ship it, so I started designing with implementation in mind from the first wireframe.",
        bullets: [
          "Designed responsive websites for travel booking, service platforms, and e-commerce products.",
          "Developed user flows, wireframes, and high-fidelity interfaces aligned with product and business objectives.",
          "Contributed to design system development and maintained visual consistency across products.",
          "Worked closely with developers to ensure accurate implementation of design specifications.",
          "Implemented responsive interfaces from Figma designs using React.js, HTML, CSS, and JavaScript.",
          "Built and maintained reusable frontend components to support scalable product development.",
        ],
      },
      {
        jobTitle: "Graduation Ceremony Organizing Committee",
        company: "Training Department, Ho Chi Minh City University of Technology and Engineering",
        period: "Dec 2023 – Jul 2026",
        bullets: [
          "Directly involved in managing hall setup, coordinating order, and running the program for the university's graduation ceremonies held every June and December.",
          "Coordinated with related departments to prepare facilities ahead of each ceremony.",
          "Guided and assisted new graduates and their families throughout the event.",
          "Handled on-the-spot issues to keep the program running as planned.",
        ],
      },
      {
        jobTitle: "Faculty Youth Union Secretary, Communications Team",
        company: "Youth Union - Student Association, Faculty of IT, HCMUTE",
        period: "Mar 2023 – Jun 2027",
        location: "Thu Duc, Ho Chi Minh City",
        current: true,
        bullets: [
          "Planned, communicated, organized, and managed volunteer programs (Spring Volunteer Campaign, Green Summer...) and academic programs and competitions for students (Hackathon, Mastering IT...).",
          "Managed and coordinated the Faculty Youth Union executive committee in rolling out activity plans.",
          "Produced communications content and visuals for Youth Union and Student Association programs.",
          "Connected with partner organizations and businesses to run career-oriented programs for students.",
        ],
      },
      {
        jobTitle: "YIT-HCMUTE TikTok Channel, 10,000 followers",
        company: "Youth Union - Student Association, Faculty of IT, HCMUTE",
        period: "Dec 2022 – Jul 2026",
        location: "Thu Duc, Ho Chi Minh City",
        bullets: [
          "Founded and ran a channel sharing information and educating students on national history and traditions, and highlighting major school events, through scripting, sourcing material, filming, and editing video.",
          "Planned a regular content calendar and tracked engagement performance per video.",
          "Worked with fellow Youth Union members to diversify content topics and formats.",
          "Grew the channel from zero to more than 10,000 followers.",
        ],
      },
    ],
  },
};

export default function ExperienceSection() {
  const { lang } = useLanguage();
  const t = TEXT[lang];

  return (
    <section id="experience" className="py-24 px-6 sm:px-10 lg:px-20 border-b border-[#2A2A28]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          {...stagger(0)}
          whileInView={stagger(0).animate}
          viewport={viewport}
          className="font-serif text-[clamp(2rem,4.2vw,2.8rem)] text-[#F0EFE9] leading-[1.1] mb-12"
        >
          {t.heading}
        </motion.h2>

        <div className="relative pl-7 sm:pl-9">
          {/* timeline spine */}
          <div className="absolute left-[3px] sm:left-[4px] top-3 bottom-3 w-px bg-gradient-to-b from-[#2A2A28] via-[#2A2A28] to-transparent" />

          <div className="space-y-6">
            {t.entries.map((entry, i) => (
              <motion.div
                key={entry.jobTitle}
                {...stagger(1 + i * 0.4)}
                whileInView={stagger(1 + i * 0.4).animate}
                viewport={viewport}
                className="relative"
              >
                {/* marker */}
                <span className="absolute -left-7 sm:-left-9 top-8 flex h-[9px] w-[9px]">
                  {entry.current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1D9E75] opacity-60" />
                  )}
                  <span className={`relative inline-flex h-full w-full rounded-full ring-4 ring-[#0E0E0C] ${
                    entry.current ? "bg-[#1D9E75]" : "bg-[#4A4A46]"
                  }`} />
                </span>

                {/* card */}
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-2xl border border-[#2A2A28] bg-[#141412] p-6 md:p-7
                    hover:border-[#3A3A38] hover:bg-[#161614] transition-colors duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2 mb-1">
                    <h3 className="font-serif text-xl md:text-[1.7rem] text-[#F0EFE9] leading-snug">
                      {entry.jobTitle}
                    </h3>
                    <div className="shrink-0 flex items-center gap-2 pt-1">
                      {entry.current && (
                        <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.1em] uppercase text-[#1D9E75] bg-[#1D9E75]/10 border border-[#1D9E75]/25 rounded-full px-2.5 py-1">
                          <span className="h-1 w-1 rounded-full bg-[#1D9E75]" />
                          {lang === "vi" ? "Đang tham gia" : "Ongoing"}
                        </span>
                      )}
                      <span className="font-mono text-[10px] tracking-[0.06em] text-[#6B6B67] whitespace-nowrap">
                        {entry.period}
                      </span>
                    </div>
                  </div>

                  <p className="font-mono text-[11px] text-[#6B6B67] mb-5 tracking-[0.04em]">
                    {entry.company}{entry.location ? ` · ${entry.location}` : ""}
                  </p>

                  {entry.reflection && (
                    <p className="text-[13.5px] text-[#8A8A86] leading-relaxed max-w-[640px] mb-4 italic">
                      {entry.reflection}
                    </p>
                  )}

                  <ul className="space-y-2.5 max-w-2xl">
                    {entry.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-[#8A8A86]">
                        <span className="mt-[7px] h-[3px] w-[3px] rounded-full bg-[#4A4A46] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
