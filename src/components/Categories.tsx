"use client";

import { motion } from "framer-motion";

const categories = [
  { name: "t shirts", slug: "tshirts", img: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=500&fit=crop&crop=top" },
  { name: "hoodies", slug: "hoodies", img: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&h=500&fit=crop&crop=top" },
  { name: "caps & beanies", slug: "caps", img: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=600&h=500&fit=crop" },
  { name: "joggers", slug: "joggers", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=500&fit=crop&crop=top" },
  { name: "jackets", slug: "jackets", img: "/images/jacket 2.jpeg" },
  { name: "tracksuits", slug: "tracksuits", img: "/images/Tracksuit 2.jpeg" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Categories() {
  return (
    <section className="bg-white pt-24 lg:pt-36 pb-20 lg:pb-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#67e500] text-base md:text-lg tracking-[0.3em] uppercase font-bold mb-6"
          >
            Your Brand, Our Craftsmanship
          </motion.p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0f172a] leading-[1.15] font-semibold">
            We Manufacture <span className="font-extrabold italic">Custom</span>
            <br />
            <span className="font-extrabold italic">Apparel</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 text-xl sm:text-2xl md:text-3xl font-light mt-4"
          >
            for brands that demand excellence.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {categories.map((cat) => (
            <motion.a
              key={cat.name}
              href={`/catalog/${cat.slug}`}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-[6/5] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white uppercase tracking-widest text-center mb-6 drop-shadow-lg group-hover:tracking-[0.2em] transition-all duration-500">
                  {cat.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
