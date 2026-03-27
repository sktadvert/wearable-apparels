"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";

const products = [
  { name: "T-Shirts", desc: "Custom tees for every brand", icon: "👕", href: "/catalog/tshirts" },
  { name: "Hoodies", desc: "Premium hoodie manufacturing", icon: "🧥", href: "/catalog/hoodies" },
  { name: "Joggers", desc: "Athletic & casual joggers", icon: "👖", href: "/catalog/joggers" },
  { name: "Jackets", desc: "Outerwear built to last", icon: "🧥", href: "/catalog/jackets" },
  { name: "Tracksuits", desc: "Full sets for teams & brands", icon: "🏃", href: "/catalog/tracksuits" },
  { name: "Caps & Beanies", desc: "Headwear with custom branding", icon: "🧢", href: "/catalog/caps" },
];

const services = [
  { name: "Cut & Sew", desc: "Full garment construction", icon: "✂️", href: "#process" },
  { name: "Screen Printing", desc: "Vibrant, durable prints", icon: "🎨", href: "#customization" },
  { name: "Embroidery", desc: "Premium stitched logos", icon: "🪡", href: "#customization" },
  { name: "Private Labeling", desc: "Your brand, your labels", icon: "🏷️", href: "#about" },
  { name: "Custom Packaging", desc: "Branded unboxing experience", icon: "📦", href: "#about" },
  { name: "Fabric Sourcing", desc: "Global fabric procurement", icon: "🧵", href: "#process" },
];

const customization = [
  { name: "Fabric Selection", desc: "Choose from 100+ fabrics", icon: "🧶", href: "#customization" },
  { name: "Pattern Making", desc: "Custom patterns & templates", icon: "📐", href: "#customization" },
  { name: "DTF Printing", desc: "Direct-to-film transfers", icon: "🖨️", href: "#customization" },
  { name: "Puff Printing", desc: "Raised 3D print effects", icon: "💨", href: "#customization" },
  { name: "Screen Printing", desc: "Classic screen print method", icon: "🎨", href: "#customization" },
  { name: "Stitching", desc: "Precision stitch detailing", icon: "🪡", href: "#customization" },
];

type MenuKey = "products" | "services" | "customization" | null;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderDropdownGrid = (items: typeof products, label: string) => (
    <>
      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">{label}</p>
      <div className="grid grid-cols-3 gap-2">
        {items.map((item) => (
          <Link key={item.name} href={item.href}
            className="flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f5f5f5] transition-all duration-200 group">
            <span className="text-xl w-9 h-9 flex items-center justify-center rounded-lg bg-[#f0f0f0] group-hover:bg-white group-hover:shadow-sm transition-all shrink-0">{item.icon}</span>
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-[#1a1a2e] group-hover:text-[#006837] transition-colors leading-tight">{item.name}</p>
              <p className="text-[10.5px] text-slate-400 leading-tight mt-0.5">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );

  return (
    <>
      {/* ───── MAIN NAVIGATION BAR (no ribbon) ───── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[998] transition-all duration-500 ${
          scrolled ? "shadow-xl" : ""
        }`}
        style={{
          background: scrolled
            ? "linear-gradient(135deg, #1a365d 0%, #1e293b 40%, #0f172a 100%)"
            : "linear-gradient(135deg, #2d5a9e 0%, #1e3a6e 35%, #162544 65%, #0f172a 100%)"
        }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="w-full px-6 lg:px-8">
          <div className="flex items-center justify-between h-[50px]">
            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/images/wa-icon.png" alt="Wearable Apparels" className="w-full h-full object-contain" style={{ filter: "invert(1) brightness(2)" }} />
              </div>
              <span className="text-[13px] font-bold text-white hidden sm:block tracking-wide">
                WEARABLE APPARELS
              </span>
            </Link>

            {/* ── Desktop Nav Links (centered) ── */}
            <div className="hidden lg:flex items-center h-full flex-1 justify-center gap-1">
              <Link href="/"
                className="h-full flex items-center px-3 text-white/80 text-[12px] font-medium hover:text-white transition-colors"
                onMouseEnter={() => setActiveMenu(null)}>
                Home
              </Link>

              {/* Products */}
              <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu("products")}>
                <button className={`h-full flex items-center gap-1.5 px-3 text-[12px] font-medium transition-colors ${activeMenu === "products" ? "text-white" : "text-white/80 hover:text-white"}`}>
                  Products
                  <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === "products" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>

              {/* Services */}
              <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu("services")}>
                <button className={`h-full flex items-center gap-1.5 px-3 text-[12px] font-medium transition-colors ${activeMenu === "services" ? "text-white" : "text-white/80 hover:text-white"}`}>
                  Our Services
                  <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === "services" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>

              {/* Customization */}
              <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu("customization")}>
                <button className={`h-full flex items-center gap-1.5 px-3 text-[12px] font-medium transition-colors ${activeMenu === "customization" ? "text-white" : "text-white/80 hover:text-white"}`}>
                  Customization
                  <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === "customization" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>

              <a href="#portfolio"
                className="h-full flex items-center px-4 text-white/80 text-[12.5px] font-medium hover:text-white transition-colors"
                onMouseEnter={() => setActiveMenu(null)}>
                Portfolio
              </a>
              <a href="#about"
                className="h-full flex items-center px-4 text-white/80 text-[12.5px] font-medium hover:text-white transition-colors"
                onMouseEnter={() => setActiveMenu(null)}>
                About Us
              </a>
              <a href="#contact"
                className="h-full flex items-center px-4 text-white/80 text-[12.5px] font-medium hover:text-white transition-colors"
                onMouseEnter={() => setActiveMenu(null)}>
                Contact
              </a>
            </div>

            {/* ── Right Side Actions ── */}
            <div className="flex items-center gap-2.5 shrink-0">
              {/* Search */}
              <div className="hidden lg:flex items-center bg-white/10 rounded-full px-3.5 py-1.5 gap-2 hover:bg-white/15 transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="opacity-50">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-[12px] text-white placeholder-white/40 outline-none w-20 focus:w-32 transition-all duration-300"
                />
              </div>

              {/* Login / Dashboard */}
              {session ? (
                <Link href="/dashboard"
                  className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-medium text-white/70 hover:text-white border border-white/15 hover:border-white/30 rounded-full transition-all">
                  Dashboard
                </Link>
              ) : (
                <Link href="/login"
                  className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-medium text-white/70 hover:text-white border border-white/15 hover:border-white/30 rounded-full transition-all">
                  Sign In
                </Link>
              )}

              {/* GET STARTED */}
              <button
                onClick={() => document.dispatchEvent(new Event("openQuoteModal"))}
                className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#0f172a] text-[12px] font-bold rounded-full hover:bg-[#67e500] hover:text-[#0f172a] hover:shadow-[0_0_20px_rgba(103,229,0,0.3)] transition-all duration-300 cursor-pointer">
                Get Started
              </button>

              {/* Mobile Hamburger */}
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-9 h-9 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ───── MEGA MENU DROPDOWNS ───── */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)] hidden lg:block"
              style={{ borderTop: "2px solid #67e500" }}
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="max-w-5xl mx-auto px-8 py-6">
                {activeMenu === "products" && renderDropdownGrid(products, "Our Products")}
                {activeMenu === "services" && renderDropdownGrid(services, "Our Services")}
                {activeMenu === "customization" && renderDropdownGrid(customization, "Customization Options")}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ───── MOBILE MENU ───── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden"
              style={{ background: "linear-gradient(180deg, #162544 0%, #0f172a 100%)" }}
            >
              <div className="p-5 space-y-1 max-h-[80vh] overflow-y-auto">
                <Link href="/" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-white rounded-lg hover:bg-white/5">Home</Link>

                {/* Mobile Products Accordion */}
                <button onClick={() => setMobileAccordion(mobileAccordion === "products" ? null : "products")}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm text-white rounded-lg hover:bg-white/5">
                  <span>Products</span>
                  <svg className={`w-3.5 h-3.5 transition-transform ${mobileAccordion === "products" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <AnimatePresence>
                  {mobileAccordion === "products" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      {products.map((p) => (
                        <Link key={p.name} href={p.href} onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-8 py-2.5 text-sm text-white/60 hover:text-white">
                          <span className="text-base">{p.icon}</span> {p.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile Services Accordion */}
                <button onClick={() => setMobileAccordion(mobileAccordion === "services" ? null : "services")}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm text-white rounded-lg hover:bg-white/5">
                  <span>Our Services</span>
                  <svg className={`w-3.5 h-3.5 transition-transform ${mobileAccordion === "services" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <AnimatePresence>
                  {mobileAccordion === "services" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      {services.map((s) => (
                        <a key={s.name} href={s.href} onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-8 py-2.5 text-sm text-white/60 hover:text-white">
                          <span className="text-base">{s.icon}</span> {s.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile Customization Accordion */}
                <button onClick={() => setMobileAccordion(mobileAccordion === "customization" ? null : "customization")}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm text-white rounded-lg hover:bg-white/5">
                  <span>Customization</span>
                  <svg className={`w-3.5 h-3.5 transition-transform ${mobileAccordion === "customization" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <AnimatePresence>
                  {mobileAccordion === "customization" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      {customization.map((c) => (
                        <a key={c.name} href={c.href} onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-8 py-2.5 text-sm text-white/60 hover:text-white">
                          <span className="text-base">{c.icon}</span> {c.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <a href="#portfolio" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-white rounded-lg hover:bg-white/5">Portfolio</a>
                <a href="#about" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-white rounded-lg hover:bg-white/5">About Us</a>
                <a href="#contact" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-white rounded-lg hover:bg-white/5">Contact</a>

                <div className="pt-3 border-t border-white/10 space-y-2">
                  {session ? (
                    <Link href="/dashboard" onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-sm text-white/70 rounded-lg border border-white/10 text-center">Dashboard</Link>
                  ) : (
                    <Link href="/login" onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-sm text-white/70 rounded-lg border border-white/10 text-center">Sign In</Link>
                  )}
                  <button onClick={() => { setMobileOpen(false); document.dispatchEvent(new Event("openQuoteModal")); }}
                    className="block w-full px-4 py-3.5 bg-white text-[#0f172a] text-sm font-bold rounded-lg text-center hover:bg-[#67e500] transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
