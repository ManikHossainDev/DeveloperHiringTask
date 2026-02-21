"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiSelfLove } from "react-icons/gi";
import { motion } from "framer-motion";

const COLORS = [
  { name: "Shadow Navy / Army Green", primary: "#1e3a5f", secondary: "#4a5e3a" },
  { name: "Core Black / White", primary: "#111111", secondary: "#e5e5e5" },
  { name: "Wonder White / Green", primary: "#e8e4da", secondary: "#2d7a4f" },
];

const SIZES = [36, 37, 40, 41, 42, 43, 44, 45, 46, 47];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 },
};

const ProductHero = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <motion.div
      className="xl:container mx-auto py-6 md:py-10 xl:pt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >

      {/* LEFT: Images Grid */}
      <motion.div
        className="flex flex-col gap-2"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div className="flex gap-2 md:gap-5" variants={scaleIn}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="w-1/2"
          >
            <Image
              width={250}
              height={250}
              alt="shoe side view"
              src="https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png"
              className="w-full object-contain rounded-xl bg-[#f5f5f5]"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="w-1/2"
          >
            <Image
              width={250}
              height={250}
              alt="shoe three quarter"
              src="https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png"
              className="w-full object-contain rounded-xl bg-[#f5f5f5]"
            />
          </motion.div>
        </motion.div>
        <motion.div className="flex gap-2 md:gap-5" variants={scaleIn}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="w-1/2"
          >
            <Image
              width={250}
              height={250}
              alt="shoe top view"
              src="https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png"
              className="w-full object-contain rounded-xl bg-[#f5f5f5]"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="w-1/2"
          >
            <Image
              width={250}
              height={250}
              alt="shoe sole"
              src="https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png"
              className="w-full object-contain rounded-xl bg-[#f5f5f5]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* RIGHT: Product Info */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white px-4 py-3 rounded-md bg-[#4A69E2] font-semibold mb-4"
        >
            New Release
        </motion.button>
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[22px] md:text-[32px] font-bold text-black uppercase tracking-[0.01em] leading-tight mb-2 md:mb-4"
        >
          ADIDAS 4DFWD X PARLEY<br />RUNNING SHOES
        </motion.h1>

        {/* Price */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg md:text-2xl font-semibold text-black mb-4 md:mb-6"
        >
          $125.00
        </motion.p>

        {/* Color */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-4 md:mb-6"
        >
          <p className="text-[12px] md:text-[13px] font-semibold uppercase text-[#555] tracking-[0.08em] mb-2">COLOR</p>
          <div className="flex gap-2 md:gap-3">
            {COLORS.map((color, i) => (
              <motion.button
                key={i}
                title={color.name}
                onClick={() => setSelectedColor(i)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className={`w-7 h-7 md:w-9 md:h-9 rounded-full cursor-pointer box-border transition-all duration-150 ${
                  selectedColor === i
                    ? "border-[3px] border-black outline outline-1 outline-black"
                    : "border-[3px] border-transparent outline outline-1 outline-[#ccc]"
                }`}
                style={{
                  background: `linear-gradient(135deg, ${color.primary} 50%, ${color.secondary} 50%)`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Size */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-5 md:mb-7"
        >
          <div className="flex justify-between items-center mb-2">
            <p className="text-[12px] md:text-[13px] font-semibold uppercase text-black tracking-[0.08em]">SIZE</p>
            <span className="text-[11px] md:text-[12px] text-black font-semibold underline cursor-pointer tracking-[0.05em]">SIZE CHART</span>
          </div>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {SIZES.map((size, index) => (
              <motion.button
                key={size}
                onClick={() => setSelectedSize(size)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                className={`w-[46px] h-9 md:w-[56px] md:h-11 rounded text-xs md:text-sm font-semibold cursor-pointer transition-all duration-150 ${
                  selectedSize === size
                    ? "border-2 border-black bg-black text-white"
                    : "border border-[#ccc] bg-white text-black hover:border-black"
                }`}
              >
                {size}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Add to Cart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Link href="/cart"
          // onClick={handleAddToCart}
          className={`w-[90%] py-3.5 md:py-4 text-center text-white text-sm md:text-base font-bold uppercase rounded mb-2.5 transition-colors duration-200 ${
            selectedSize
              ? "bg-black cursor-pointer hover:bg-[#333]"
              : "bg-black cursor-not-allowed"
          }`}
        >
          {addedToCart ? "ADDED!" : "ADD TO CART"}
        </Link>
        <motion.button
          onClick={handleAddToCart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-[10%] py-3 md:py-4 flex justify-center items-center text-white text-sm md:text-base font-bold uppercase tracking-[0.08em] rounded mb-2.5 transition-colors duration-200 ${
            selectedSize
              ? "bg-black cursor-pointer hover:bg-[#333]"
              : "bg-black cursor-not-allowed"
          }`}
        >
          <GiSelfLove size={24} />
        </motion.button>
        </motion.div>

        {/* Buy Now */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-full py-3.5 md:py-4 bg-[#4A69E2] text-white text-sm md:text-base font-bold uppercase tracking-[0.08em] rounded mb-5 cursor-pointer transition-colors duration-200"
        >
          BUY IT NOW
        </motion.button>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="border-t border-[#e5e5e5] pt-4 md:pt-5"
        >
          <p className="text-[13px] md:text-[15px] lg:text-xl xl:text-2xl font-bold uppercase tracking-[0.08em] mb-1.5 text-black">
            ABOUT THE PRODUCT
          </p>
          <p className="text-xs md:text-md xl:text-lg text-[#555] mb-3">
            {COLORS[selectedColor].name}
          </p>
          <p className="text-xs md:text-md lg:text-lg xl:text-xl text-[#555] mb-3 leading-relaxed">
            This product is excluded from all promotional discounts and offers.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="list-none p-0 m-0 text-xs md:text-md lg:text-lg xl:text-xl text-[#555] leading-[1.8]"
          >
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.3 }}
            >
              • Pay over time in interest-free installments with Affirm, Klarna or Afterpay
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            >
              • Join adiClub to get unlimited free standard shipping, returns, &amp; exchanges
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
 
export default ProductHero;