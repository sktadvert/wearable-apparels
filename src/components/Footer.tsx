"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-md bg-[#b8977e] flex items-center justify-center text-black font-black text-[10px]">
                WA
              </div>
              <span className="text-sm font-semibold text-white/60">
                Wearable Apparels
              </span>
            </div>
            <p className="text-white/25 text-sm leading-relaxed max-w-xs">
              Full-service custom apparel manufacturing for streetwear brands worldwide.
              Low MOQ, fast turnaround, quality-first production.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-white/40 text-xs tracking-widest uppercase font-medium mb-4">
              Services
            </p>
            <div className="space-y-2.5">
              {["Cut & Sew", "Screen Printing", "Embroidery", "Private Label", "Packaging", "Fabric Sourcing"].map((s) => (
                <a key={s} href="#services" className="block text-white/20 text-sm hover:text-white/40 transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-white/40 text-xs tracking-widest uppercase font-medium mb-4">
              Company
            </p>
            <div className="space-y-2.5">
              <a href="#about" className="block text-white/20 text-sm hover:text-white/40 transition-colors">About</a>
              <a href="#process" className="block text-white/20 text-sm hover:text-white/40 transition-colors">Process</a>
              <a href="#portfolio" className="block text-white/20 text-sm hover:text-white/40 transition-colors">Work</a>
              <a href="#contact" className="block text-white/20 text-sm hover:text-white/40 transition-colors">Contact</a>
              <Link href="/login" className="block text-white/20 text-sm hover:text-white/40 transition-colors">Client Portal</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/15 text-xs">
            &copy; {new Date().getFullYear()} Wearable Apparels. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/wearable_apparels" target="_blank" rel="noopener noreferrer" className="text-white/15 hover:text-[#b8977e] transition-colors text-xs">
              Instagram
            </a>
            <a href="#" className="text-white/15 hover:text-[#b8977e] transition-colors text-xs">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
