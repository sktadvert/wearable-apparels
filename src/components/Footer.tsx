"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-[#b8977e] flex items-center justify-center text-black font-bold text-[10px]">
                WA
              </div>
              <span className="text-sm font-semibold">Wearable Apparels</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Custom apparel manufacturing for independent and emerging streetwear brands.
              Low MOQ, fast turnaround, quality guaranteed.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs tracking-widest uppercase font-semibold text-gray-400 mb-4">Services</p>
            <div className="space-y-2.5">
              {["Cut & Sew", "Screen Printing", "Embroidery", "Private Labeling", "Packaging", "Fabric Sourcing"].map((s) => (
                <a key={s} href="#services" className="block text-gray-500 text-sm hover:text-white transition-colors">{s}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs tracking-widest uppercase font-semibold text-gray-400 mb-4">Company</p>
            <div className="space-y-2.5">
              <a href="#about" className="block text-gray-500 text-sm hover:text-white transition-colors">About Us</a>
              <a href="#process" className="block text-gray-500 text-sm hover:text-white transition-colors">How It Works</a>
              <a href="#portfolio" className="block text-gray-500 text-sm hover:text-white transition-colors">Our Work</a>
              <a href="#contact" className="block text-gray-500 text-sm hover:text-white transition-colors">Contact</a>
              <Link href="/login" className="block text-gray-500 text-sm hover:text-white transition-colors">Client Portal</Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs tracking-widest uppercase font-semibold text-gray-400 mb-4">Start Your Project</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Ready to manufacture? Get a free quote in under 2 minutes.
            </p>
            <Link
              href="/dashboard/rfq/new"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#b8977e] text-black text-sm font-semibold rounded-lg hover:bg-[#d4b896] transition-all"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Wearable Apparels. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/wearable_apparels" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8977e] transition-colors text-xs">
              Instagram
            </a>
            <a href="#" className="text-gray-600 hover:text-[#b8977e] transition-colors text-xs">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 hover:text-[#b8977e] transition-colors text-xs">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
