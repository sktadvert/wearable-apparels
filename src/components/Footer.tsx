"use client";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 lg:px-8 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a96e] to-[#8a6d3b] flex items-center justify-center text-black font-black text-[10px]">
              WA
            </div>
            <span className="text-white/20 text-sm">
              &copy; {new Date().getFullYear()} Wearable Apparels
            </span>
          </div>

          <div className="flex items-center gap-8">
            {[
              { name: "Instagram", href: "https://instagram.com/wearable_apparels" },
              { name: "LinkedIn", href: "#" },
              { name: "Twitter", href: "#" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-white/20 hover:text-[#c9a96e] transition-colors text-xs tracking-wider uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
