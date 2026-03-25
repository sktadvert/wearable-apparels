"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1] as const },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden snap-section">
      <Scene3D />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0a] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none z-0" />

      {/* Stepper indicator — left side */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-4">
        {["Home", "Services", "Process", "Work", "About", "Contact"].map(
          (label, i) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="group flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#c9a96e] transition-all group-hover:scale-150" />
              <span className="text-[10px] text-white/0 group-hover:text-white/50 transition-all uppercase tracking-widest whitespace-nowrap">
                {label}
              </span>
            </a>
          )
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[#c9a96e] text-xs tracking-[0.25em] uppercase font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-pulse" />
                Premium Manufacturing Partner
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight mb-8"
            >
              <span className="block text-white">Your</span>
              <span className="block text-white">Vision.</span>
              <span className="block gradient-text">Our Craft.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/40 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
            >
              Premium cut &amp; sew manufacturing for streetwear brands
              worldwide. From first sample to full production.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-[#c9a96e] text-black font-semibold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-2xl glass text-white/70 font-medium hover:text-[#c9a96e] hover:border-[#c9a96e]/30 transition-all"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-24 flex gap-12"
          >
            {[
              { value: "50+", label: "Min Order" },
              { value: "2-3", label: "Week Turnaround" },
              { value: "100%", label: "QC Guarantee" },
            ].map((stat) => (
              <div key={stat.label} className="relative">
                <p className="text-4xl font-black gradient-text">{stat.value}</p>
                <p className="text-white/30 text-[10px] mt-1 tracking-[0.2em] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[#c9a96e]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
