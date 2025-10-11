// app/data/activities.ts
export type ActivityRole = {
  title: string;
  org: string;
  period: string;
  image?: string;
};

export type ActivityEvent = {
  title: string;
  org: string;
  location?: string;
  period: string;
  role: string;
  bullets: string[];
  images?: string[];
};

export const leadership: ActivityRole[] = [
  {
    title: "Faculty Youth Union Secretary",
    org: "Faculty of IT – HCMUTE",
    period: "01/2025 – Now",
    image: "/bithu.jpg",
  },
  {
    title: "Executive Member, University Youth Union",
    org: "HCMUTE",
    period: "05/2024 – Now",
    image: "/uvdoantruong.jpg",
  },
  {
    title: "Deputy Secretary, Faculty Youth Union",
    org: "Faculty of IT – HCMUTE",
    period: "03/2024 – 01/2025",
    image: "/phobithu.jpg",
  },
  {
    title: "Executive Member, Faculty Youth Union",
    org: "Faculty of IT – HCMUTE",
    period: "2022 – 2024",
    image: "/uvdoankhoa.jpg",
  },
  {
    title: "Executive Member, Student Association (LCH)",
    org: "Faculty of IT – HCMUTE",
    period: "11/2022 – 09/2024",
    image: "/lch.jpg",
  },
];

export const events: ActivityEvent[] = [
    {
    title: "SV.Startup 2025 (7th Edition)",
    org: "Ho Chi Minh City University of Technology and Education",
    location: "HCMUTE",
    period: "2025",
    role: "Team Leader of Volunteers",
    bullets: [
        "Led and coordinated the volunteer team for the competition.",
        "Ensured smooth event operations and a positive experience for participants.",
    ],
    images: ["/svstartup-1.jpg", "/svstartup-2.jpg", "/svstartup-2.jpg"],
    },
    {
    title: "Volunteer Activities",
    org: "Youth Union & Student Association",
    period: "2022 – Present",
    role: "Volunteer / Organizer",
    bullets: [
        "Participated in and organized diverse volunteer campaigns.",
        "Spring Volunteer campaign, Green Summer volunteer campaign, and other student-focused initiatives.",
    ],
    images: ["/volunteer-1.jpg", "/volunteer-2.jpg", "/volunteer-3.jpg"],
    },
    {
    title: "Academic Competition Committee",
    org: "Faculty of IT – HCMUTE",
    period: "2023 – 2025",
    role: "Organizer / Judge Support",
    bullets: [
        "Helped organize and manage student academic competitions.",
        "Events included Hackathon, Mastering IT, and CTF for students.",
    ],
    images: ["/academic-1.jpg", "/academic-2.jpg", "/academic-3.jpg"],
    },

];
