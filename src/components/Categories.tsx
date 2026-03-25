"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "T-Shirts",
    color: "#f0e6d6",
    icon: (
      <svg width="64" height="64" viewBox="0 0 100 100" fill="none" stroke="#3a3a5c" strokeWidth="1.5">
        <path d="M30 25L20 35L28 40V75H72V40L80 35L70 25" />
        <path d="M30 25C30 25 38 20 50 20C62 20 70 25 70 25" />
        <path d="M42 20V28C42 32 46 35 50 35C54 35 58 32 58 28V20" />
      </svg>
    ),
  },
  {
    name: "Hoodies",
    color: "#d6e6f0",
    icon: (
      <svg width="64" height="64" viewBox="0 0 100 100" fill="none" stroke="#3a3a5c" strokeWidth="1.5">
        <path d="M30 30L18 45V60L28 55V80H72V55L82 60V45L70 30" />
        <path d="M30 30C30 30 38 22 50 22C62 22 70 30 70 30" />
        <path d="M42 30C42 30 45 40 50 40C55 40 58 30 58 30" />
        <path d="M40 22C40 15 44 12 50 12C56 12 60 15 60 22" />
        <path d="M44 55H56V65C56 68 53 70 50 70C47 70 44 68 44 65V55Z" />
      </svg>
    ),
  },
  {
    name: "Joggers & Pants",
    color: "#e6f0d6",
    icon: (
      <svg width="64" height="64" viewBox="0 0 100 100" fill="none" stroke="#3a3a5c" strokeWidth="1.5">
        <path d="M32 20H68V35L60 80H55L50 50L45 80H40L32 35V20Z" />
        <path d="M32 28H68" />
        <path d="M42 20V25" />
        <path d="M50 20V25" />
        <path d="M58 20V25" />
      </svg>
    ),
  },
  {
    name: "Jackets",
    color: "#f0d6e6",
    icon: (
      <svg width="64" height="64" viewBox="0 0 100 100" fill="none" stroke="#3a3a5c" strokeWidth="1.5">
        <path d="M35 25L20 40V78H40V60H60V78H80V40L65 25" />
        <path d="M35 25C35 25 40 20 50 20C60 20 65 25 65 25" />
        <path d="M50 25V78" />
        <path d="M35 50H45" />
        <path d="M55 50H65" />
        <path d="M42 20V28" />
        <path d="M58 20V28" />
      </svg>
    ),
  },
  {
    name: "Tracksuits",
    color: "#e6d6f0",
    icon: (
      <svg width="64" height="64" viewBox="0 0 100 100" fill="none" stroke="#3a3a5c" strokeWidth="1.5">
        <path d="M35 15L22 28V45L30 42V52H44L42 80H47L50 55L53 80H58L56 52H70V42L78 45V28L65 15" />
        <path d="M35 15C35 15 40 10 50 10C60 10 65 15 65 15" />
        <path d="M50 15V52" />
        <line x1="30" y1="30" x2="38" y2="30" />
        <line x1="62" y1="30" x2="70" y2="30" />
      </svg>
    ),
  },
  {
    name: "Caps & Hats",
    color: "#f0eed6",
    icon: (
      <svg width="64" height="64" viewBox="0 0 100 100" fill="none" stroke="#3a3a5c" strokeWidth="1.5">
        <ellipse cx="50" cy="55" rx="30" ry="10" />
        <path d="M20 55C20 55 22 30 50 30C78 30 80 55 80 55" />
        <path d="M80 55C80 55 90 52 95 55" />
        <path d="M46 30V22C46 22 48 18 52 18" />
        <circle cx="50" cy="30" r="3" />
      </svg>
    ),
  },
];

export default function Categories() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-[#b8977e] text-xs tracking-widest uppercase font-semibold mb-3">
            What We Manufacture
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Choose Your Product Category
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="/dashboard/rfq/new"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group text-center cursor-pointer"
            >
              {/* Card with illustration */}
              <div
                className="aspect-square rounded-xl flex items-center justify-center mb-3 card-hover border border-transparent group-hover:border-gray-200"
                style={{ backgroundColor: cat.color }}
              >
                <div className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {cat.icon}
                </div>
              </div>

              {/* Label */}
              <p className="text-xs font-semibold tracking-wider uppercase text-gray-500 group-hover:text-[#111827] transition-colors">
                {cat.name}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
