"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// import { useSession } from "next-auth/react";

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

type MenuKey = "products" | "services" | null;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  // const { data: session } = useSession();

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
              <p className="text-[13px] font-semibold text-[#1a1a2e] group-hover:text-[#67e500] transition-colors leading-tight">{item.name}</p>
              <p className="text-[10.5px] text-slate-400 leading-tight mt-0.5">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[998] transition-all duration-300 border-b border-[#67e500]/30 ${
          scrolled
            ? "shadow-lg shadow-black/20"
            : ""
        }`}
        style={{ background: "#0f172a" }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">

            {/* ── Logo — Two-tone text ── */}
            <Link href="/" className="flex items-center shrink-0">
              <span className="text-[20px] font-extrabold tracking-[0.06em]">
                <span className="text-white">WEARABLE</span>
                <span className="text-[#67e500]">APPARELS</span>
              </span>
            </Link>

            {/* ── Desktop Nav Links (centered with wide spacing) ── */}
            <div className="hidden lg:flex items-center h-full gap-6">
              <Link href="/"
                className="h-full flex items-center px-7 text-white text-[15px] font-semibold hover:text-[#67e500] transition-colors"
                onMouseEnter={() => setActiveMenu(null)}>
                Home
              </Link>

              {/* Products */}
              <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu("products")}>
                <button className={`h-full flex items-center gap-1.5 px-10 text-[15px] font-semibold transition-colors ${activeMenu === "products" ? "text-[#67e500]" : "text-white/70 hover:text-white"}`}>
                  Products
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "products" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>

              {/* Services */}
              <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu("services")}>
                <button className={`h-full flex items-center gap-1.5 px-10 text-[15px] font-semibold transition-colors ${activeMenu === "services" ? "text-[#67e500]" : "text-white/70 hover:text-white"}`}>
                  Services
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "services" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>

              <a href="#process"
                className="h-full flex items-center px-7 text-white/70 text-[15px] font-semibold hover:text-white transition-colors"
                onMouseEnter={() => setActiveMenu(null)}>
                How It Works
              </a>
              <a href="#about"
                className="h-full flex items-center px-7 text-white/70 text-[15px] font-semibold hover:text-white transition-colors"
                onMouseEnter={() => setActiveMenu(null)}>
                About
              </a>
              <a href="#contact"
                className="h-full flex items-center px-7 text-white/70 text-[15px] font-semibold hover:text-white transition-colors"
                onMouseEnter={() => setActiveMenu(null)}>
                Contact
              </a>
            </div>

            {/* ── Right Side — Get a Free Quote button (outlined, rounded rectangle) ── */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => document.dispatchEvent(new Event("openQuoteModal"))}
                className="hidden md:inline-flex items-center px-10 py-4 bg-[#67e500] text-[#0f172a] text-[16px] font-semibold rounded-xl hover:bg-[#5acc00] transition-all duration-200 cursor-pointer"
              >
                Get a Free Quote
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
              className="lg:hidden overflow-hidden border-t border-white/[0.06]"
              style={{ background: "#0f172a" }}
            >
              <div className="p-5 space-y-1 max-h-[80vh] overflow-y-auto">
                <Link href="/" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-white/80 rounded-lg hover:bg-white/5">Home</Link>

                {/* Mobile Products */}
                <button onClick={() => setMobileAccordion(mobileAccordion === "products" ? null : "products")}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm text-white/80 rounded-lg hover:bg-white/5">
                  <span>Products</span>
                  <svg className={`w-3.5 h-3.5 transition-transform ${mobileAccordion === "products" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <AnimatePresence>
                  {mobileAccordion === "products" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      {products.map((p) => (
                        <Link key={p.name} href={p.href} onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-8 py-2.5 text-sm text-white/50 hover:text-white">
                          <span className="text-base">{p.icon}</span> {p.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile Services */}
                <button onClick={() => setMobileAccordion(mobileAccordion === "services" ? null : "services")}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm text-white/80 rounded-lg hover:bg-white/5">
                  <span>Services</span>
                  <svg className={`w-3.5 h-3.5 transition-transform ${mobileAccordion === "services" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <AnimatePresence>
                  {mobileAccordion === "services" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      {services.map((s) => (
                        <a key={s.name} href={s.href} onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-8 py-2.5 text-sm text-white/50 hover:text-white">
                          <span className="text-base">{s.icon}</span> {s.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <a href="#process" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-white/80 rounded-lg hover:bg-white/5">How It Works</a>
                <a href="#about" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-white/80 rounded-lg hover:bg-white/5">About</a>
                <a href="#contact" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-white/80 rounded-lg hover:bg-white/5">Contact</a>

                <div className="pt-3 border-t border-white/[0.06]">
                  <button onClick={() => { setMobileOpen(false); document.dispatchEvent(new Event("openQuoteModal")); }}
                    className="block w-full px-4 py-3.5 bg-[#67e500] text-[#0f172a] text-sm font-bold rounded-lg text-center hover:bg-[#5acc00] transition-colors">
                    Get a Free Quote
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
