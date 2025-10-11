"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { useEffect } from "react";
import HeroBackground from "./HeroBackground";

export default function DynamicHeroBG() {
  // mouse spotlight
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 80, damping: 20, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  // spotlight radial position
  const bgPos = useTransform([sx, sy], ([x, y]) => `${x}px ${y}px`);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* spotlight */}
      <HeroBackground/> 
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(600px circle at var(--mx) var(--my), rgba(139,92,246,0.22), transparent 60%)",
          // map motion to CSS custom props
          // @ts-ignore
          ["--mx" as any]: sx,
          ["--my" as any]: sy,
        }}
      />

      {/* animated blobs (depth layers) */}
      <div className="absolute -left-10 top-20 h-[520px] w-[520px] animate-blob1 rounded-full bg-violet-600/25 blur-[120px]" />
      <div className="absolute right-[-120px] bottom-10 h-[640px] w-[640px] animate-blob2 rounded-full bg-fuchsia-500/20 blur-[130px]" />
      <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 animate-blob3 rounded-full bg-cyan-400/16 blur-[110px]" />

      {/* tech grid */}
      <div className="absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]">
        <Grid />
      </div>

      {/* film noise */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "url('/noise.png')", backgroundSize: "auto" }} />

      {/* keyframes */}
      <style jsx global>{`
        @keyframes floatA { 0%,100%{ transform: translateY(0) translateX(0) } 50%{ transform: translateY(-20px) translateX(10px) } }
        @keyframes floatB { 0%,100%{ transform: translateY(0) translateX(0) } 50%{ transform: translateY(16px) translateX(-12px) } }
        @keyframes floatC { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-14px) } }
        .animate-blob1 { animation: floatA 18s ease-in-out infinite; }
        .animate-blob2 { animation: floatB 24s ease-in-out infinite 3s; }
        .animate-blob3 { animation: floatC 20s ease-in-out infinite 6s; }
      `}</style>
    </div>
  );
}

function Grid() {
  // simple CSS grid via gradients (hiệu năng tốt)
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  );
}
