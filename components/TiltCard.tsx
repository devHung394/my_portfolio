"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** max tilt in degrees, default 6 */
  strength?: number;
};

export function TiltCard({ children, className = "", strength = 6 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 220, damping: 22, mass: 0.4 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 220, damping: 22, mass: 0.4 });
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${px}px ${py}px, rgba(255,255,255,0.07), transparent 70%)`;

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    px.set(relX);
    py.set(relY);
    rotateYRaw.set((relX / rect.width - 0.5) * strength);
    rotateXRaw.set(-(relY / rect.height - 0.5) * strength);
  };

  const onPointerLeave = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`relative ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: spotlight }}
      />
      {children}
    </motion.div>
  );
}
