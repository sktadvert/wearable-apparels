"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";

const products = [
  { name: "T-Shirts", desc: "T-Shirt Manufacturers", href: "/catalog/tshirts" },
  { name: "Hoodies", desc: "Hoodie Manufacturers", href: "/catalog/hoodies" },
  { name: "Joggers", desc: "Jogger Manufacturers", href: "/catalog/joggers" },
  { name: "Jackets", desc: "Jacket Manufacturers", href: "/catalog/jackets" },
  { name: "Tracksuits", desc: "Tracksuit Manufacturers", href: "/catalog/tracksuits" },
  { name: "Caps & Beanies", desc: "Cap & Beanie Manufacturers", href: "/catalog/caps" },
];

const services = [
  { name: "Cut & Sew", href: "#services" },
  { name: "Screen Printing", href: "#services" },
  { name: "Embroidery", href: "#services" },
  { name: "Private Label", href: "#services" },
  { name: "Packaging", href: "#services" },
  { name: "Fabric Sourcing", href: "#services" },
];

const customization = [
  { name: "Screen Printing", href: "#services" },
  { name: "DTF Printing", href: "#services" },
  { name: "Puff Printing", href: "#services" },
  { name: "Sublimation", href: "#services" },
  { name: "Embroidery", href: "#services" },
  { name: "Heat Transfer", href: "#services" },
];

type MenuKey = "products" | "services" | "customization" | null;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top info bar — fixed above nav */}
      <div className="fixed top-0 left-0 right-0 z-[999] bg-[#006837] text-white text-xs h-9 hidden lg:flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:info@wearableapparels.com" className="flex items-center gap-1.5 hover:text-[#67e500] transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
              info@wearableapparels.com
            </a>
            <a href="https://wa.me/923000836201" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#67e500] transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              0300 0836201
            </a>
          </div>
          <span className="text-white/70">Live Chat Available</span>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`fixed lg:top-9 top-0 left-0 right-0 z-[998] transition-all duration-300 ${
          scrolled || activeMenu
            ? "bg-[#0f172a] shadow-lg"
            : "bg-[#0f172a]/80 backdrop-blur-md"
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-11 h-11 flex items-center justify-center">
                <img src="/images/wa-icon.png" alt="Wearable Apparels" className="w-full h-full object-contain" style={{filter: "invert(1)"}} />
              </div>
              <span className="text-sm font-bold text-white hidden sm:block">
                WEARABLE APPARELS
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center h-full gap-1">
              <Link href="/" className="h-full flex items-center px-4 text-white text-xs font-bold uppercase tracking-widest hover:text-[#67e500] transition-colors"
                onMouseEnter={() => setActiveMenu(null)}>
                Home
              </Link>

              <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu("products")}>
                <button className={`h-full flex items-center gap-1 px-4 text-xs font-bold uppercase tracking-widest transition-colors ${activeMenu === "products" ? "text-[#67e500]" : "text-white hover:text-[#67e500]"}`}>
                  Products
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>

              <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu("services")}>
                <button className={`h-full flex items-center gap-1 px-4 text-xs font-bold uppercase tracking-widest transition-colors ${activeMenu === "services" ? "text-[#67e500]" : "text-white hover:text-[#67e500]"}`}>
                  Our Services
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>

              <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu("customization")}>
                <button className={`h-full flex items-center gap-1 px-4 text-xs font-bold uppercase tracking-widest transition-colors ${activeMenu === "customization" ? "text-[#67e500]" : "text-white hover:text-[#67e500]"}`}>
                  Customization
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>

              <a href="#portfolio" className="h-full flex items-center px-4 text-white text-xs font-bold uppercase tracking-widest hover:text-[#67e500] transition-colors"
                onMouseEnter={() => setActiveMenu(null)}>
                Portfolio
              </a>
              <a href="#about" className="h-full flex items-center px-4 text-white text-xs font-bold uppercase tracking-widest hover:text-[#67e500] transition-colors"
                onMouseEnter={() => setActiveMenu(null)}>
                About Us
              </a>
              <a href="#contact" className="h-full flex items-center px-4 text-white text-xs font-bold uppercase tracking-widest hover:text-[#67e500] transition-colors"
                onMouseEnter={() => setActiveMenu(null)}>
                Contact
              </a>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Login / Dashboard link */}
              {session ? (
                <Link href="/dashboard"
                  className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#67e500] border border-[#67e500]/30 rounded-md hover:bg-[#67e500]/10 transition-all">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  Dashboard
                </Link>
              ) : (
                <Link href="/login"
                  className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/60 border border-white/10 rounded-md hover:text-white hover:border-white/30 transition-all">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Client Login
                </Link>
              )}
              <button
                onClick={() => document.dispatchEvent(new Event("openQuoteModal"))}
                className="hidden md:inline-flex items-center gap-2 px-7 py-3 bg-[#67e500] text-[#0f172a] text-sm font-extrabold uppercase tracking-wider rounded-md hover:bg-[#5acc00] hover:shadow-[0_0_20px_rgba(103,229,0,0.4)] transition-all cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                GET STARTED
              </button>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-9 h-9 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdowns */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 bg-white shadow-2xl border-t-[3px] border-[#67e500] hidden lg:block"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="max-w-5xl mx-auto px-8 py-6">
                {activeMenu === "products" && (
                  <div className="grid grid-cols-3 gap-3">
                    {products.map((p) => (
                      <Link key={p.name} href={p.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f0fce8] transition-all group">
                        <div className="w-10 h-10 rounded-lg bg-[#f0fce8] group-hover:bg-[#67e500] flex items-center justify-center transition-all">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006837" strokeWidth="1.5" className="group-hover:stroke-white">
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#0f172a] group-hover:text-[#006837]">{p.name}</p>
                          <p className="text-[11px] text-slate-400">{p.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {activeMenu === "services" && (
                  <div className="grid grid-cols-3 gap-3">
                    {services.map((s) => (
                      <a key={s.name} href={s.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f0fce8] transition-all group">
                        <div className="w-10 h-10 rounded-lg bg-[#f0fce8] group-hover:bg-[#67e500] flex items-center justify-center transition-all">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006837" strokeWidth="1.5" className="group-hover:stroke-white">
                            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                          </svg>
                        </div>
                        <p className="text-sm font-bold text-[#0f172a] group-hover:text-[#006837]">{s.name}</p>
                      </a>
                    ))}
                  </div>
                )}

                {activeMenu === "customization" && (
                  <div className="grid grid-cols-3 gap-3">
                    {customization.map((c) => (
                      <a key={c.name} href={c.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f0fce8] transition-all group">
                        <div className="w-10 h-10 rounded-lg bg-[#f0fce8] group-hover:bg-[#67e500] flex items-center justify-center transition-all">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006837" strokeWidth="1.5" className="group-hover:stroke-white">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <p className="text-sm font-bold text-[#0f172a] group-hover:text-[#006837]">{c.name}</p>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-[#0f172a] border-t border-white/[0.06] max-h-[80vh] overflow-y-auto">
            <div className="p-4 space-y-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-white rounded-lg">Home</Link>
              <p className="px-4 pt-3 pb-1 text-[#67e500] text-xs font-bold uppercase">Products</p>
              {products.map((p) => (
                <Link key={p.name} href={p.href} onClick={() => setMobileOpen(false)} className="block px-8 py-2 text-sm text-slate-400 hover:text-white rounded-lg">{p.name}</Link>
              ))}
              <p className="px-4 pt-3 pb-1 text-[#67e500] text-xs font-bold uppercase">Services</p>
              {services.map((s) => (
                <a key={s.name} href={s.href} onClick={() => setMobileOpen(false)} className="block px-8 py-2 text-sm text-slate-400 hover:text-white rounded-lg">{s.name}</a>
              ))}
              <a href="#portfolio" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-white rounded-lg">Portfolio</a>
              <a href="#about" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-white rounded-lg">About Us</a>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-white rounded-lg">Contact</a>
              {session ? (
                <Link href="/dashboard" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-[#67e500] font-bold rounded-lg border border-[#67e500]/20">📊 My Dashboard</Link>
              ) : (
                <Link href="/login" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-white/60 rounded-lg border border-white/10">Client Login</Link>
              )}
              <button onClick={() => { setMobileOpen(false); document.dispatchEvent(new Event("openQuoteModal")); }} className="block w-full mt-2 px-4 py-4 bg-[#67e500] text-[#0f172a] text-sm font-extrabold uppercase tracking-wider rounded-lg text-center">🚀 GET STARTED</button>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}
