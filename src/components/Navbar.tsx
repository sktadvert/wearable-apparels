"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Work", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-[998] transition-all duration-500 ${
        scrolled ? "glass-strong" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#b8977e] flex items-center justify-center text-black font-black text-xs">
              WA
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-semibold text-white tracking-wide">
                WEARABLE
              </span>
              <span className="text-sm font-light text-white/40 ml-1.5">
                APPARELS
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/40 text-[13px] font-medium hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden md:block text-white/40 text-[13px] font-medium hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard/rfq/new"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#b8977e] text-black text-[13px] font-semibold rounded-lg hover:bg-[#d4b896] transition-all"
            >
              Get a Quote
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 rounded-lg glass flex items-center justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6">
                {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass mx-4 mb-4 rounded-xl overflow-hidden"
        >
          <div className="p-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/[0.04] transition-all"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/dashboard/rfq/new"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 bg-[#b8977e] text-black text-sm font-semibold rounded-lg text-center"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
