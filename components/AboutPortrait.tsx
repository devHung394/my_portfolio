// components/AboutPortrait.tsx
"use client";

import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  className?: string;
};

export default function AboutPortrait({
  src = "/avt.jpg",
  alt = "Portrait",
  className = "",
}: Props) {
  return (
    <div className={`group relative mx-auto w-[260px] sm:w-[320px] md:w-[380px] ${className}`}>
      {/* glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10">
        <div className="absolute -left-10 top-1/3 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      {/* khung gradient */}
      <div className="relative rounded-3xl bg-gradient-to-b from-violet-500/40 via-violet-400/10 to-fuchsia-500/40 p-[1px]">
        {/* lớp kính */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/60 backdrop-blur">
          {/* ảnh */}
          <div className="relative aspect-[4/5]">
            <Image src={src} alt={alt} fill priority className="object-cover" />
          </div>

          {/* highlight trên */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/10 to-transparent" />

          {/* vệt sáng di chuyển – className 1 dòng */}
          <div
            className="pointer-events-none absolute -top-1/2 left-[-30%] h-[200%] w-[60%] rotate-[20deg] bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ animation: "aboutPortraitShine 2.2s ease-in-out 1" }}
          />
        </div>
      </div>

      {/* chips (tuỳ chọn) */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-neutral-200">
          Software Developer
        </span>
        <span className="rounded-full border border-violet-500/30 bg-violet-600/10 px-3 py-1 text-violet-200">
          CS Student
        </span>
      </div>

      {/* keyframes global để tránh styled-jsx concat lỗi */}
      <style jsx global>{`
        @keyframes aboutPortraitShine {
          0% { transform: translateX(-120%) rotate(20deg); }
          60% { transform: translateX(180%) rotate(20deg); }
          100% { transform: translateX(180%) rotate(20deg); }
        }
      `}</style>
    </div>
  );
}
