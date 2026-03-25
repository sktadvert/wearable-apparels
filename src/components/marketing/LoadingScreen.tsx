"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    // Fallback: hide after 3 seconds no matter what
    const timeout = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="mb-10"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#c9a96e] to-[#8a6d3b] flex items-center justify-center shadow-[0_0_60px_rgba(201,169,110,0.3)]">
              <span className="text-black font-black text-2xl">WA</span>
            </div>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            <span className="text-sm font-bold tracking-[0.3em] uppercase gradient-text">
              Wearable Apparels
            </span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="h-[2px] bg-white/[0.06] rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#c9a96e] to-[#e0c992]"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
