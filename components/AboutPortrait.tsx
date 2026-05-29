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
    <div
      className={`group relative mx-auto w-[240px] sm:w-[300px] md:w-[360px] ${className}`}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-8 -z-10">
        <div className="absolute -left-10 top-1/3 h-48 w-48 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute -right-8 bottom-0  h-56 w-56 rounded-full bg-fuchsia-500/18 blur-3xl" />
      </div>

      {/* outer rotating conic ring */}
      <div className="absolute -inset-[3px] rounded-[28px] animate-ring-cw overflow-hidden -z-[1]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(168,85,247,0.9) 55deg, transparent 110deg, transparent 230deg, rgba(236,72,153,0.7) 285deg, transparent 340deg)",
          }}
        />
      </div>

      {/* inner counter-rotating ring (thinner) */}
      <div className="absolute -inset-[6px] rounded-[30px] animate-ring-ccw overflow-hidden -z-[2]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "conic-gradient(from 180deg, transparent 0deg, rgba(56,189,248,0.8) 40deg, transparent 90deg, transparent 260deg, rgba(168,85,247,0.5) 310deg, transparent 360deg)",
          }}
        />
      </div>

      {/* glass frame */}
      <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-neutral-950/60 backdrop-blur shadow-[0_0_60px_-20px_rgba(168,85,247,0.4)]">
        {/* photo */}
        <div className="relative aspect-[4/5]">
          <Image src={src} alt={alt} fill priority className="object-cover" />
        </div>

        {/* top highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/8 to-transparent" />

        {/* hover shimmer */}
        <div className="pointer-events-none absolute -top-1/2 left-[-30%] h-[200%] w-[60%] rotate-[20deg] bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* chips */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-neutral-200">
          Software Developer
        </span>
        <span className="rounded-full border border-violet-500/30 bg-violet-600/10 px-3 py-1 text-violet-200">
          CS Student · HCMUTE
        </span>
      </div>

      <style jsx global>{`
        /* ring-rotate is in globals.css as .animate-ring-cw / .animate-ring-ccw */
      `}</style>
    </div>
  );
}
