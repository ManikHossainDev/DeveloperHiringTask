"use client";

import { FiShoppingBag, FiArrowRight, FiStar } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Doitright from '@/assets/logo/Doitright.png'

const heroSlides = [
  {
    id: 1,
    src: "https://picsum.photos/seed/shoe1/700/400",
    alt: "Nike Air Max Side View",
    thumb: "https://picsum.photos/seed/shoe1/200/150",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/shoe2/700/400",
    alt: "Nike Air Max Top View",
    thumb: "https://picsum.photos/seed/shoe2/200/150",
  },
];

const HeroBannerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleThumbs = [
    heroSlides[(activeIndex + 1) % heroSlides.length],
    heroSlides[(activeIndex + 2) % heroSlides.length],
  ];

  return (
    <section className="xl:container flex flex-col py-8">
      {/* Headline */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          width={1200}
          height={900}
          src={Doitright}
          alt="logo"
          className="w-full h-full md:h-[160px]"
        />
      </motion.div>

      {/* Main Card */}
      <motion.div
        className="relative rounded-3xl overflow-hidden bg-[#2A2018] h-[300px] md:h-[560px] xl:h-[650px]"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          width={1200}
          height={900}
          src={heroSlides[activeIndex].src}
          alt={heroSlides[activeIndex].alt}
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-500"
          key={heroSlides[activeIndex].src}
        />

        {/* Side badge */}
        <motion.div
          className="absolute left-0 top-1/4 -translate-y-1/2 z-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <div
            className="bg-[#C8882A] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-r-md"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Nike product of the year
          </div>
        </motion.div>

        {/* Bottom left info */}
        <motion.div
          className="absolute bottom-8 left-10 z-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-1">
            <FiStar className="text-[#C8882A]" size={14} />
            <span className="text-[#C8882A] text-xs font-semibold uppercase tracking-widest">
              New Arrival
            </span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-1">
            Nike Air Max
          </h2>
          <p className="text-white/60 text-sm max-w-[220px] leading-relaxed mb-4">
            Nike introducing the new air max for everyone&apos;s comfort
          </p>
          <motion.button
            className="flex items-center gap-2 bg-[#3B5BFF] hover:bg-[#2A47E0] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiShoppingBag size={14} />
            Shop Now
            <FiArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </motion.button>
        </motion.div>

        {/* Bottom right thumbnails */}
        <motion.div
          className="absolute bottom-6 right-5 z-30 flex items-end gap-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-2">
            {visibleThumbs.map((slide, i) => (
              <motion.button
                key={slide.id}
                onClick={() =>
                  setActiveIndex(heroSlides.findIndex((s) => s.id === slide.id))
                }
                className="w-10 h-10 md:w-24 md:h-[72px] rounded-xl overflow-hidden border-2 border-white/25 hover:border-[#3B5BFF] transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
              >
                <Image
                  width={200}
                  height={150}
                  src={slide.thumb}
                  alt={slide.alt}
                  className="w-full h-[60px] md:h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroBannerSection;