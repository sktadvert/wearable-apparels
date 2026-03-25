"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed top-0 left-0 right-0 z-[998] transition-all duration-500 ${
        scrolled ? "glass-strong" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a96e] to-[#8a6d3b] flex items-center justify-center text-black font-black text-sm">
              WA
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold tracking-tight gradient-text">
                WEARABLE
              </span>
              <span className="text-lg font-light text-white/60 ml-1">
                APPARELS
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  active === link.href.slice(1)
                    ? "text-[#c9a96e]"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {link.name}
                {active === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-[#c9a96e]/10 border border-[#c9a96e]/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <a
              href="/login"
              className="hidden md:flex items-center px-4 py-2.5 text-white/40 text-sm font-medium hover:text-white/70 transition-all"
            >
              Sign In
            </a>
            <a
              href="/dashboard/rfq/new"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#c9a96e] text-black text-sm font-semibold rounded-full hover:bg-[#e0c992] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(201,169,110,0.3)]"
            >
              <span>Get a Quote</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
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
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden glass-strong mx-4 mb-4 rounded-2xl overflow-hidden"
        >
          <div className="p-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active === link.href.slice(1)
                    ? "bg-[#c9a96e]/10 text-[#c9a96e]"
                    : "text-white/50 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 bg-[#c9a96e] text-black text-sm font-semibold rounded-xl text-center"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
