// CategoryCard.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { useMemo } from "react";
import { motion } from "framer-motion";

const generateRandomColor = (index: number): string => {
  const hue = (index * 47 + 13) % 360;
  const saturation = 30 + (index * 11) % 20; // 30%–50% (কম saturated)
  const lightness = 88 + (index * 3) % 10;   // 88%–98% (অনেক হালকা)
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const CategoryCard = ({ category, index = 0 }: any) => {
  const bgColor = useMemo(() => generateRandomColor(index), [index]);

  return (
    <motion.div
      className="group shadow-sm relative flex-shrink-0 cursor-pointer min-w-[calc((100%_-_16px)/1.2)] sm:min-w-[calc((100%_-_32px)/2.2)] md:min-w-[calc((100%_-_48px)/3.2)] overflow-hidden rounded-none"
      style={{ backgroundColor: bgColor }}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Image Area */}
      <motion.div
        className="relative w-full h-[200px] sm:h-[230px] md:h-[260px] xl:h-[450px] overflow-hidden flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={category.image}
          alt={category.alt}
          fill
          className="object-contain p-6"
        />
      </motion.div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-4 ">
        <p className="text-[#111111] font-extrabold text-[13px] sm:text-[15px] leading-snug tracking-widest uppercase whitespace-pre-line">
          {category.title}
        </p>
        <button className="w-9 h-9 flex-shrink-0 bg-[#111111] rounded flex items-center justify-center hover:bg-[#ff2d8b] active:scale-95 transition-all duration-200 ml-3">
          <FiArrowUpRight size={16} className="text-white" />
        </button>
      </div>
    </motion.div>
  );
};

export default CategoryCard;