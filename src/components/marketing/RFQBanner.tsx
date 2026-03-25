"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function RFQBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="fixed bottom-6 right-6 z-[997]"
        >
          <Link
            href="/dashboard/rfq/new"
            className="flex items-center gap-3 px-6 py-4 bg-[#c9a96e] text-black font-bold rounded-2xl shadow-[0_8px_40px_rgba(201,169,110,0.4)] hover:shadow-[0_8px_60px_rgba(201,169,110,0.5)] hover:scale-105 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="1" />
              <path d="M12 11v6M9 14h6" />
            </svg>
            <span className="text-sm">Request a Quote</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
