// Categories.tsx
"use client";
import { useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { useGetCategoriesQuery } from "@/redux/features/product/product";

const Categories = () => {
  const { data } = useGetCategoriesQuery({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardWidth = () => {
    if (!scrollRef.current) return 280;
    const containerWidth = scrollRef.current.offsetWidth;
    const gap = 16;
    return (containerWidth - gap * 3) / 3.2 + gap;
  };

  const scrollLeft = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);
    scrollRef.current?.scrollBy({ left: -getCardWidth(), behavior: "smooth" });
  };

  const scrollRight = () => {
    const newIndex = Math.min(activeIndex + 1, (data?.length ?? 1) - 1);
    setActiveIndex(newIndex);
    scrollRef.current?.scrollBy({ left: getCardWidth(), behavior: "smooth" });
  };

  return (
    <section className="bg-[#1a1a1a] text-white pl-4 sm:pl-8 pt-8 sm:pt-12 font-['Barlow_Condensed',sans-serif]">
      <div className="ml-2 md:ml-20 xl:ml-32">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black tracking-widest uppercase">
            Categories
          </h2>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              disabled={activeIndex === 0}
              aria-label="Previous"
              className="w-9 h-9 flex items-center justify-center hover:bg-[#2a2a2a] bg-[#1c1b1b] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200 rounded-sm"
            >
              <FiArrowLeft size={16} />
            </button>
            <button
              onClick={scrollRight}
              disabled={activeIndex === (data?.length ?? 1) - 1}
              aria-label="Next"
              className="w-9 h-9 flex items-center justify-center hover:bg-[#2a2a2a] bg-[#1c1b1b] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200 rounded-sm"
            >
              <FiArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          ref={scrollRef}
          className="flex rounded-tl-[60px] overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {data?.slice(1, ).map((cat: { id: number; name: string; image: string }, i: number) => (
            <CategoryCard
              key={cat.id}
              category={{
                id: cat.id,
                title: cat.name,
                image: cat.image,
                alt: cat.name,
              }}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;