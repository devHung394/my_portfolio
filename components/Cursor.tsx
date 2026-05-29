"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isPointer, setIsPointer]   = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible,  setIsVisible]  = useState(false);
  const [isText,     setIsText]     = useState(false);

  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);

  /* dot – near-instant */
  const dotX = useSpring(mx, { stiffness: 900, damping: 38, mass: 0.1 });
  const dotY = useSpring(my, { stiffness: 900, damping: 38, mass: 0.1 });

  /* ring – noticeable lag */
  const ringX = useSpring(mx, { stiffness: 165, damping: 22, mass: 0.55 });
  const ringY = useSpring(my, { stiffness: 165, damping: 22, mass: 0.55 });

  /* faint glow – slowest */
  const glowX = useSpring(mx, { stiffness: 60, damping: 18, mass: 1.2 });
  const glowY = useSpring(my, { stiffness: 60, damping: 18, mass: 1.2 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setIsVisible(true);

      const t = e.target as Element;
      const interactive = !!t.closest(
        'a, button, [role="button"], [data-cursor="pointer"], label'
      );
      const textEl = !!t.closest("input, textarea");
      setIsPointer(interactive);
      setIsText(textEl);
    };

    const onDown  = () => setIsClicking(true);
    const onUp    = () => setIsClicking(false);
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener("mousemove",  onMove,  { passive: true });
    window.addEventListener("mousedown",  onDown,  { passive: true });
    window.addEventListener("mouseup",    onUp,    { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [mx, my]);

  return (
    <>
      {/* ── slow glow blob ───────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9990] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          width: 120,
          height: 120,
          background:
            "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* ── outer ring ───────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:  isText ? 3 : isPointer ? 48 : isClicking ? 24 : 34,
          height: isText ? 28 : isPointer ? 48 : isClicking ? 24 : 34,
          borderRadius: isText ? "2px" : "9999px",
          opacity: isVisible ? 1 : 0,
          borderWidth: "1.5px",
          borderStyle: "solid",
          borderColor: isPointer
            ? "rgba(168,85,247,0.9)"
            : isText
            ? "rgba(255,255,255,0.6)"
            : "rgba(255,255,255,0.38)",
          backgroundColor: isPointer
            ? "rgba(168,85,247,0.10)"
            : "transparent",
          scale: isClicking ? 0.82 : 1,
        }}
        transition={{ duration: 0.14, ease: "easeOut" }}
      />

      {/* ── inner dot ────────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:  isPointer || isText ? 0 : isClicking ? 4 : 6,
          height: isPointer || isText ? 0 : isClicking ? 4 : 6,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 1.6 : 1,
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </>
  );
}
