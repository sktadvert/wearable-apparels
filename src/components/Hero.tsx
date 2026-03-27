"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=1920&h=1080&fit=crop&crop=top&q=90",
    line1: "PREMIUM",
    line2: "JACKETS",
  },
  {
    img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=1920&h=1080&fit=crop&crop=top&q=90",
    line1: "CUSTOM",
    line2: "JOGGERS",
  },
  {
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1920&h=1080&fit=crop&crop=faces&q=90",
    line1: "CUSTOM",
    line2: "T-SHIRTS",
  },
  {
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&h=1080&fit=crop&crop=top&q=90",
    line1: "PREMIUM",
    line2: "HOODIES",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section id="home">
      {/* ── Slider area ── */}
      <div className="relative h-screen overflow-hidden">
        {/* Background slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slide.img}
              alt={slide.line1}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Giant centered text */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-black leading-[0.9] text-white tracking-tight"
                style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
              >
                {slide.line1}
              </h1>
              <h1 className="text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-black leading-[0.9] tracking-tight"
                style={{ color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.5)" }}
              >
                {slide.line2}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Left/Right arrows */}
        <button
          onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-[#67e500] hover:border-[#67e500] transition-all group"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="group-hover:stroke-black"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-[#67e500] hover:border-[#67e500] transition-all group"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="group-hover:stroke-black"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-10 bg-[#67e500]" : "w-6 bg-white/30"}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
