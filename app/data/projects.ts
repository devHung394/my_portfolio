export type Project = {
title: string;
desc: string;
img: string;
tags: string[];
href?: string;
};


export const projects: Project[] = [
{
title: "SaiGondi – Booking Travel Tour",
desc: "Next.js + TS + Tailwind + Node/Express + MongoDB. Dynamic pricing, SEO‑friendly, responsive UI, Google OAuth.",
img: "https://images.unsplash.com/photo-1517954378124-4d0f0d1e2b3e?q=80&w=1200&auto=format&fit=crop",
tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
href: "#",
},
{
title: "Infix/Postfix/Prefix Visualizer",
desc: "Java Swing app visualizing expression conversion + evaluation (MyStack<E>).",
img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
tags: ["Java", "Swing", "DSA"],
},
{
title: "SV5T E‑learning Portal",
desc: "Student‑first portal with quizzes, progress, and dashboards.",
img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
tags: ["React", "Node", "PostgreSQL"],
},
{
title: "City Tour 2025 – Event Site",
desc: "Micro‑interactions, schedule, registration (QR). Built for FIT‑HCMUTE community.",
img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop",
tags: ["Next.js", "Framer Motion", "Design"],
},
];