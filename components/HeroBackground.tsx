"use client";

import { useEffect, useRef } from "react";

/** Canvas particles – tiny stars floating slowly */
function Particles() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);
  const dots = useRef<{x:number;y:number;vx:number;vy:number;size:number;alpha:number}[]>([]);

  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d")!;
    let w = (cv.width = window.innerWidth);
    let h = (cv.height = window.innerHeight);

    const create = () => {
      dots.current = [];
      const count = Math.min(140, Math.round((w * h) / 22000)); // mật độ theo màn hình
      for (let i = 0; i < count; i++) {
        dots.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 1.4 + 0.6,
          alpha: Math.random() * 0.6 + 0.2,
        });
      }
    };
    create();

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // soft radial vignette để tập trung mắt
      const g = ctx.createRadialGradient(w/2, h*0.45, 0, w/2, h*0.45, Math.max(w, h)*0.8);
      g.addColorStop(0, "rgba(0,0,0,0)");
      g.addColorStop(1, "rgba(0,0,0,0.15)");
      ctx.fillStyle = g;
      ctx.fillRect(0,0,w,h);

      ctx.globalCompositeOperation = "lighter";
      for (const p of dots.current) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w+10;
        if (p.x > w+10) p.x = -10;
        if (p.y < -10) p.y = h+10;
        if (p.y > h+10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
        ctx.fillStyle = `rgba(180,200,255,${p.alpha})`;
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
      raf.current = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = (cv.width = window.innerWidth);
      h = (cv.height = window.innerHeight);
      create();
    };
    window.addEventListener("resize", onResize);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 -z-10" />;
}

/** Main background combining Aurora + Rays + Particles */
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Aurora beams */}
      <div className="absolute inset-0 [filter:saturate(120%)_blur(22px)]">
        <div className="aurora a1" />
        <div className="aurora a2" />
        <div className="aurora a3" />
      </div>

      {/* Light rays */}
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        <div className="ray r1" />
        <div className="ray r2" />
      </div>

      {/* Particles */}
      <Particles />

      {/* Optional discrete noise (bỏ nếu chưa có /noise.png) */}
      {/* <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "url('/noise.png')" }} /> */}

      <style jsx global>{`
        /* AURORA */
        .aurora {
          position: absolute;
          width: 120vmax;
          height: 120vmax;
          background: radial-gradient(35% 45% at 50% 50%, rgba(99,102,241,0.55), rgba(99,102,241,0) 60%),
                      radial-gradient(28% 40% at 60% 45%, rgba(236,72,153,0.5), rgba(236,72,153,0) 60%),
                      radial-gradient(30% 38% at 42% 55%, rgba(34,211,238,0.4), rgba(34,211,238,0) 60%);
          transform: translate(-10%, -20%);
          animation: auroraMove 28s ease-in-out infinite;
        }
        .a1 { top: -20%; left: -15%; animation-delay: 0s; }
        .a2 { top: -10%; right: -20%; animation-delay: 6s; }
        .a3 { bottom: -25%; left: -10%; animation-delay: 12s; }

        @keyframes auroraMove {
          0%,100% { transform: translate(-10%,-20%) rotate(0deg); }
          50%     { transform: translate(5%,-15%) rotate(8deg); }
        }

        /* RAYS */
        .ray {
          position: absolute;
          width: 130vmax;
          height: 130vmax;
          background: conic-gradient(from 210deg at 50% 50%, rgba(255,255,255,0.0) 0deg, rgba(255,255,255,0.12) 20deg, rgba(255,255,255,0.0) 60deg);
          filter: blur(24px);
          opacity: .45;
        }
        .r1 { top: -40%; left: -30%; transform: rotate(18deg); animation: raySweep1 18s linear infinite; }
        .r2 { top: -35%; right: -35%; transform: rotate(-14deg); animation: raySweep2 22s linear infinite; }

        @keyframes raySweep1 { 
          0% { transform: rotate(18deg) translateX(0); } 
          50% { transform: rotate(22deg) translateX(2%); } 
          100% { transform: rotate(18deg) translateX(0); }
        }
        @keyframes raySweep2 { 
          0% { transform: rotate(-14deg) translateX(0); } 
          50% { transform: rotate(-10deg) translateX(-1%); } 
          100% { transform: rotate(-14deg) translateX(0); }
        }
      `}</style>
    </div>
  );
}
