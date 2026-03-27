"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "150+", label: "Brands Served", num: 150 },
  { value: "10K+", label: "Pieces Produced", num: 10000 },
  { value: "6+", label: "Countries", num: 6 },
  { value: "100%", label: "QC Inspected", num: 100 },
];

const features = [
  {
    value: "50+",
    title: "Low Minimums",
    desc: "Start from just 50 pieces per style",
  },
  {
    value: "A+",
    title: "Premium Quality",
    desc: "Multi-stage QC on every single piece",
  },
  {
    value: "2-3W",
    title: "Fast Turnaround",
    desc: "From sample approval to delivery",
  },
];

function CountUp({ target, suffix, format }: { target: number; suffix: string; format?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display = format && count >= 1000 ? `${Math.floor(count / 1000)}K` : `${count}`;
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function TrustBar() {
  return (
    <section className="bg-[#0f172a]">
      {/* Stats ribbon */}
      <div className="border-t border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-2xl lg:text-3xl font-bold text-[#67e500] leading-none">
                  <CountUp target={s.num} suffix={s.value.includes("K") ? "+" : s.value.includes("%") ? "%" : "+"} format={s.num >= 1000} />
                </p>
                <p className="text-slate-500 text-[10px] mt-1.5 uppercase tracking-[0.15em] font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="px-0">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className={`text-center px-6 py-14 lg:py-16 border-b sm:border-b-0 border-white/[0.04] transition-colors duration-300 ${
                i < 2 ? "sm:border-r sm:border-white/[0.06]" : ""
              } ${
                i === 0
                  ? "bg-[#67e500]/[0.04] hover:bg-[#67e500]/[0.08]"
                  : i === 1
                  ? "bg-[#006837]/[0.08] hover:bg-[#006837]/[0.14]"
                  : "bg-[#004c28]/[0.08] hover:bg-[#004c28]/[0.14]"
              }`}
            >
              <motion.p
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.2, duration: 0.4, type: "spring", stiffness: 200 }}
                className={`text-4xl lg:text-5xl font-extrabold mb-4 ${
                  i === 0 ? "text-[#67e500]" : i === 1 ? "text-[#67e500]/80" : "text-[#67e500]/60"
                }`}
              >
                {f.value}
              </motion.p>
              <h3 className="text-white text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
