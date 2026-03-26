"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const allOptions = [
  {
    title: "Fabric Selection",
    desc: "Our fabric selection is diverse, incorporating premium production lines and global sourcing from top brands, ensuring every textile meets our high-quality standards.",
    icon: "https://sialkotstride.com/build/assets/cust-6.png",
  },
  {
    title: "Pattern Making",
    desc: "Assuring perfection and maximum efficiency during the process of pattern making. Making sure that finished garment is based 100% on size chart and adhered to.",
    icon: "https://sialkotstride.com/build/assets/cust-10.png",
  },
  {
    title: "Screen Printing",
    desc: "Our screen printing services combine creativity and quality to produce stunning designs on various materials. Whether for apparel or promotional products, we ensure your vision stands out!",
    icon: "https://sialkotstride.com/build/assets/screen-5b2d6670.webp",
  },
  {
    title: "DTF Printing",
    desc: "DTF printing (Direct to Film) offers a versatile and high-quality solution for vibrant, detailed designs on various fabrics. Perfect for custom apparel, our process ensures durability and a soft feel.",
    icon: "https://sialkotstride.com/build/assets/dtf-15e71c6b.webp",
  },
  {
    title: "Puff Printing",
    desc: "Puff printing adds a unique, three-dimensional effect to your designs, creating a textured look that stands out. Ideal for adding depth to apparel, this technique brings your graphics to life with style!",
    icon: "https://sialkotstride.com/build/assets/puff-a306ca8a.webp",
  },
  {
    title: "Stitching",
    desc: "Expert stitching by skilled operators on industrial machines. Lock stitch, overlock, flatlock, coverstitch — every seam is reinforced for maximum durability and clean finish.",
    icon: "https://sialkotstride.com/build/assets/cust-2.png",
  },
  {
    title: "Quality Control",
    desc: "Multi-stage QC inspection on every single piece. Measurements, stitching, print quality, color matching — nothing ships without passing our rigorous quality standards.",
    icon: "https://sialkotstride.com/build/assets/cust-3.png",
  },
  {
    title: "Steam Press",
    desc: "Professional steam pressing gives every garment a crisp, retail-ready finish. Wrinkle-free and presentation-perfect before packaging — ready for your customers.",
    icon: "https://sialkotstride.com/build/assets/cust-1.png",
  },
  {
    title: "Packing & Dispatch",
    desc: "Custom branded packaging — polybags, tissue paper, hang tags, mailer boxes. Each order carefully packed and shipped worldwide with full tracking provided.",
    icon: "https://sialkotstride.com/build/assets/cust-2.png",
  },
];

export default function Customization() {
  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — same style as sialkotstride */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#0f172a] mb-2">
            Customization <span className="font-extrabold italic">Options</span>
          </h2>
          <p className="text-[#006837] text-xl md:text-2xl font-medium">How We Work</p>
        </motion.div>

        {/* Swiper Carousel — smooth like owl carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          speed={800}
          className="customization-swiper !pb-16"
        >
          {allOptions.map((item, i) => (
            <SwiperSlide key={item.title}>
              <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-slate-100 hover:shadow-xl transition-all h-[400px] flex flex-col items-center justify-start relative">
                {/* Number badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#67e500] flex items-center justify-center text-black text-sm font-extrabold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {/* Icon */}
                <div className="flex justify-center mb-8 h-[100px] items-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-[84px] w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper styles */}
      <style jsx global>{`
        .customization-swiper .swiper-button-prev,
        .customization-swiper .swiper-button-next {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid #d1d5db;
          background: white;
          top: auto;
          bottom: 0;
          color: #374151;
        }
        .customization-swiper .swiper-button-prev:hover,
        .customization-swiper .swiper-button-next:hover {
          border-color: #67e500;
          background: #67e500;
          color: black;
        }
        .customization-swiper .swiper-button-prev::after,
        .customization-swiper .swiper-button-next::after {
          font-size: 18px;
          font-weight: bold;
        }
        .customization-swiper .swiper-button-prev {
          left: 0;
          top: 45%;
        }
        .customization-swiper .swiper-button-next {
          right: 0;
          top: 45%;
        }
        .customization-swiper .swiper-pagination {
          bottom: 12px !important;
        }
        .customization-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
        }
        .customization-swiper .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 5px;
          background: #67e500;
        }
      `}</style>
    </section>
  );
}
