"use client";

import { motion } from "framer-motion";

const categories = [
  { name: "t shirts", slug: "tshirts", img: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=500&fit=crop&crop=top" },
  { name: "hoodies", slug: "hoodies", img: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&h=500&fit=crop&crop=top" },
  { name: "caps & beanies", slug: "caps", img: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=600&h=500&fit=crop" },
  { name: "joggers", slug: "joggers", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=500&fit=crop&crop=top" },
  { name: "jackets", slug: "jackets", img: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&h=500&fit=crop&crop=top" },
  { name: "tracksuits", slug: "tracksuits", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=500&fit=crop&crop=top" },
];

export default function Categories() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center"
        >
          <p className="text-[#67e500] text-base md:text-lg tracking-[0.3em] uppercase font-bold mb-6">
            Your Brand, Our Craftsmanship
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0f172a] leading-[1.1] text-center">
            We Manufacture <span className="font-extrabold italic">Custom Apparel</span>
            <br />
            <span className="text-slate-400 text-3xl md:text-4xl font-light">for brands that demand excellence.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href={`/catalog/${cat.slug}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group relative aspect-[6/5] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Dark gradient overlay on hover */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />

              {/* Label — center bottom */}
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-widest text-center mb-6 drop-shadow-lg">
                  {cat.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
