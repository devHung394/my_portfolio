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
    <div className={`group relative mx-auto w-[240px] sm:w-[280px] md:w-[320px] ${className}`}>
      <div className="relative overflow-hidden rounded-xl border border-[#E5E4E1] bg-[#F2F1EE]">
        <div className="relative aspect-[4/5]">
          <Image src={src} alt={alt} fill priority className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        <span className="font-mono text-[10px] tracking-wide text-[#6B6B67] border border-[#E5E4E1] bg-[#F2F1EE] px-3 py-1 rounded-full">
          UI/UX Designer
        </span>
        <span className="font-mono text-[10px] tracking-wide text-[#B87355] border border-[#B87355]/30 bg-[#B87355]/5 px-3 py-1 rounded-full">
          CS Student · HCMUTE
        </span>
      </div>
    </div>
  );
}
