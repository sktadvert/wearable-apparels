"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] border-t border-slate-200 pt-16 pb-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0f172a] flex items-center justify-center text-white font-extrabold text-xs">
                WA
              </div>
              <div>
                <span className="text-base font-bold text-[#0f172a] block leading-tight">WEARABLE APPARELS</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Welcome to Wearable Apparels, a trusted manufacturer of premium-quality custom apparel — your one-stop partner for streetwear and independent brands worldwide.
            </p>
            {/* Social icons — small, inline */}
            <div className="flex gap-2">
              <a href="https://facebook.com/wearableapparels" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-[#0f172a] flex items-center justify-center hover:bg-[#67e500] transition-colors" title="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://instagram.com/wearable_apparels" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-[#0f172a] flex items-center justify-center hover:bg-[#67e500] transition-colors" title="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://tiktok.com/@wearable_apparels" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-[#0f172a] flex items-center justify-center hover:bg-[#67e500] transition-colors" title="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-[#0f172a] mb-5">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Catalogue", href: "/catalog/tshirts" },
                { label: "Contact Us", href: "#contact" },
                { label: "How It Works", href: "#process" },
                { label: "Client Portal", href: "/login" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="flex items-center gap-2 text-slate-500 text-sm hover:text-[#67e500] transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#67e500]" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base font-bold text-[#0f172a] mb-5">Products</h4>
            <div className="space-y-3">
              {[
                { label: "T-Shirts", href: "/catalog/tshirts" },
                { label: "Hoodies", href: "/catalog/hoodies" },
                { label: "Joggers", href: "/catalog/joggers" },
                { label: "Jackets", href: "/catalog/jackets" },
                { label: "Tracksuits", href: "/catalog/tracksuits" },
                { label: "Caps & Hats", href: "/catalog/caps" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="flex items-center gap-2 text-slate-500 text-sm hover:text-[#67e500] transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#67e500]" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-base font-bold text-[#0f172a] mb-5">Contact Us</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="text-[#67e500] mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-[#0f172a]">Phone</p>
                  <a href="https://wa.me/923000836201" className="text-sm text-[#67e500] hover:underline">0300 0836201</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#67e500] mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-[#0f172a]">Email</p>
                  <a href="mailto:info@wearableapparels.com" className="text-sm text-[#67e500] hover:underline">info@wearableapparels.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#67e500] mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-[#0f172a]">Website</p>
                  <a href="https://wearableapparels.com" className="text-sm text-[#67e500] hover:underline">wearableapparels.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-200 text-center">
          <span className="text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} Wearable Apparels. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
