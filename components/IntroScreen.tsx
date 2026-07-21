"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem("nqh-intro-seen");
  });

  const handleEnter = () => {
    sessionStorage.setItem("nqh-intro-seen", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          onClick={handleEnter}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] cursor-pointer flex flex-col items-center justify-center bg-ink"
        >
          {/* dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #3A3A36 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              opacity: 0.5,
            }}
          />

          {/* center content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-serif italic text-[56px] leading-none tracking-tight text-snow"
            >
              NQH
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="border border-rim rounded-full px-7 py-2.5"
            >
              <p className="font-mono text-[11px] tracking-[0.16em] text-dust animate-pulse">
                Click anywhere to enter
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
