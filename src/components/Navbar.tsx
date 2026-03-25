"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#process" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[998] transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#111827] flex items-center justify-center text-white font-bold text-[10px]">
              WA
            </div>
            <span className="text-[15px] font-semibold text-[#111827] hidden sm:block">
              Wearable Apparels
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 text-[13px] font-medium hover:text-[#111827] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden md:block text-gray-500 text-[13px] font-medium hover:text-[#111827] transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/dashboard/rfq/new"
              className="px-5 py-2.5 bg-[#111827] text-white text-[13px] font-semibold rounded-lg hover:bg-[#1f2937] transition-all"
            >
              Get a Free Quote
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2">
                {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
        >
          <div className="p-4 space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-gray-600 hover:text-[#111827] hover:bg-gray-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/dashboard/rfq/new"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-3 bg-[#111827] text-white text-sm font-semibold rounded-lg text-center"
            >
              Get a Free Quote
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
