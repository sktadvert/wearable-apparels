"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16">

          {/* Brand — 4 cols */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 flex items-center justify-center">
                <img src="/images/wa-icon.png" alt="WA" className="w-full h-full object-contain" style={{ filter: "invert(1) brightness(2)" }} />
              </div>
              <span className="text-sm font-bold tracking-wide">WEARABLE APPARELS</span>
            </div>
            <p className="text-slate-400 text-[13px] leading-relaxed mb-6 max-w-xs">
              Premium custom apparel manufacturing for independent brands. From design to delivery — we handle everything.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/wearable_apparels" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E1306C] transition-colors" title="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com/wearableapparels" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors" title="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://tiktok.com/@wearable_apparels" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" title="TikTok">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a href="mailto:info@wearableapparels.com"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#67e500] transition-colors" title="Email">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
              </a>
              <a href="https://wa.me/923000836201" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors" title="WhatsApp">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links — 2 cols */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Company</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "How It Works", href: "#process" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="text-slate-400 text-[13px] hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Products — 2 cols */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Products</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "T-Shirts", href: "/catalog/tshirts" },
                { label: "Hoodies", href: "/catalog/hoodies" },
                { label: "Joggers", href: "/catalog/joggers" },
                { label: "Jackets", href: "/catalog/jackets" },
                { label: "Tracksuits", href: "/catalog/tracksuits" },
                { label: "Caps & Beanies", href: "/catalog/caps" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="text-slate-400 text-[13px] hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact — 4 cols */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Get in Touch</h4>
            <div className="space-y-4">
              <a href="https://wa.me/923000836201" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <span className="text-slate-300 text-[13px] group-hover:text-white transition-colors">0300 0836201</span>
              </a>
              <a href="mailto:info@wearableapparels.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#67e500]/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#67e500" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
                </div>
                <span className="text-slate-300 text-[13px] group-hover:text-white transition-colors">info@wearableapparels.com</span>
              </a>
              <a href="https://wearableapparels.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#67e500]/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#67e500" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                </div>
                <span className="text-slate-300 text-[13px] group-hover:text-white transition-colors">wearableapparels.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Wearable Apparels. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
