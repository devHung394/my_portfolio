// app/data/activities.ts
export type ActivityRoleContent = {
  title: string;
  org: string;
  period: string;
};

export type ActivityRole = {
  image?: string;
  vi: ActivityRoleContent;
  en: ActivityRoleContent;
};

export type ActivityEventContent = {
  title: string;
  org: string;
  location?: string;
  period: string;
  role: string;
  bullets: string[];
};

export type ActivityEvent = {
  images?: string[];
  vi: ActivityEventContent;
  en: ActivityEventContent;
};

export const leadership: ActivityRole[] = [
  {
    image: "/bithu.jpg",
    vi: { title: "Bí thư Đoàn khoa CNTT", org: "Khoa CNTT - HCMUTE", period: "01/2025 – hiện tại" },
    en: { title: "Faculty Youth Union Secretary", org: "Faculty of IT – HCMUTE", period: "01/2025 – Now" },
  },
  {
    image: "/uvdoantruong.jpg",
    vi: { title: "Ủy viên BCH Đoàn trường", org: "HCMUTE", period: "05/2024 – hiện tại" },
    en: { title: "Executive Member, University Youth Union", org: "HCMUTE", period: "05/2024 – Now" },
  },
  {
    image: "/phobithu.jpg",
    vi: { title: "Phó Bí thư Đoàn khoa", org: "Khoa CNTT - HCMUTE", period: "03/2024 – 01/2025" },
    en: { title: "Deputy Secretary, Faculty Youth Union", org: "Faculty of IT – HCMUTE", period: "03/2024 – 01/2025" },
  },
  {
    image: "/uvdoankhoa.jpg",
    vi: { title: "Ủy viên BCH Đoàn khoa", org: "Khoa CNTT - HCMUTE", period: "2022 – 2024" },
    en: { title: "Executive Member, Faculty Youth Union", org: "Faculty of IT – HCMUTE", period: "2022 – 2024" },
  },
  {
    image: "/lch.jpg",
    vi: { title: "Ủy viên BCH Liên Chi Hội (LCH)", org: "Khoa CNTT - HCMUTE", period: "11/2022 – 09/2024" },
    en: { title: "Executive Member, Student Association (LCH)", org: "Faculty of IT – HCMUTE", period: "11/2022 – 09/2024" },
  },
];

export const events: ActivityEvent[] = [
  {
    images: ["/svstartup-1.jpg", "/svstartup-2.jpg", "/svstartup-2.jpg"],
    vi: {
      title: "SV.Startup 2025 (Lần thứ 7)",
      org: "Trường Đại học Công nghệ Kỹ thuật TP.HCM",
      location: "HCMUTE",
      period: "2025",
      role: "Trưởng nhóm Tình nguyện viên",
      bullets: [
        "Dẫn dắt và điều phối đội tình nguyện viên cho cuộc thi.",
        "Đảm bảo sự kiện vận hành trơn tru và trải nghiệm tốt cho người tham gia.",
      ],
    },
    en: {
      title: "SV.Startup 2025 (7th Edition)",
      org: "Ho Chi Minh City University of Technology and Engineering",
      location: "HCMUTE",
      period: "2025",
      role: "Team Leader of Volunteers",
      bullets: [
        "Led and coordinated the volunteer team for the competition.",
        "Ensured smooth event operations and a positive experience for participants.",
      ],
    },
  },
  {
    images: ["/volunteer-1.jpg", "/volunteer-2.jpg", "/volunteer-3.jpg"],
    vi: {
      title: "Hoạt động tình nguyện",
      org: "Đoàn - Hội Sinh viên",
      period: "2022 – hiện tại",
      role: "Tình nguyện viên / Tổ chức",
      bullets: [
        "Tham gia và tổ chức nhiều chiến dịch tình nguyện khác nhau.",
        "Chiến dịch Xuân Tình Nguyện, Mùa Hè Xanh, và các hoạt động khác hướng đến sinh viên.",
      ],
    },
    en: {
      title: "Volunteer Activities",
      org: "Youth Union & Student Association",
      period: "2022 – Present",
      role: "Volunteer / Organizer",
      bullets: [
        "Participated in and organized diverse volunteer campaigns.",
        "Spring Volunteer campaign, Green Summer volunteer campaign, and other student-focused initiatives.",
      ],
    },
  },
  {
    images: ["/academic-1.jpg", "/academic-2.jpg", "/academic-3.jpg"],
    vi: {
      title: "Ban Tổ chức Cuộc thi Học thuật",
      org: "Khoa CNTT - HCMUTE",
      period: "2023 – 2025",
      role: "Tổ chức / Hỗ trợ giám khảo",
      bullets: [
        "Hỗ trợ tổ chức và quản lý các cuộc thi học thuật cho sinh viên.",
        "Các sự kiện gồm Hackathon, Mastering IT, và CTF dành cho sinh viên.",
      ],
    },
    en: {
      title: "Academic Competition Committee",
      org: "Faculty of IT – HCMUTE",
      period: "2023 – 2025",
      role: "Organizer / Judge Support",
      bullets: [
        "Helped organize and manage student academic competitions.",
        "Events included Hackathon, Mastering IT, and CTF for students.",
      ],
    },
  },
];
