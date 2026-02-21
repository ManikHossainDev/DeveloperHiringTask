"use client";

import Image from "next/image";
import { useState } from "react";
import { FiHeart, FiChevronDown } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Rubik } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

type CartItem = {
  id: number;
  name: string;
  category: string;
  color: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
};

const initialItem: CartItem = {
  id: 1,
  name: "DROPSET TRAINER SHOES",
  category: "Men's Road Running Shoes",
  color: "Enamel Blue/ University White",
  price: 130.0,
  size: "10",
  quantity: 1,
  image:
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Dropset_Trainer_Shoes_Blue_GX7955_01_standard.jpg",
};

const sizes: string[] = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"];
const quantities: number[] = [1, 2, 3, 4, 5];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
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

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.15 },
  },
};

const Cartdealis = () => {
  const [item, setItem] = useState<CartItem | null>(initialItem);
  const [wished, setWished] = useState<boolean>(false);
  const [sizeOpen, setSizeOpen] = useState<boolean>(false);
  const [qtyOpen, setQtyOpen] = useState<boolean>(false);

  const delivery = 6.99;
  const subtotal = item ? item.price * item.quantity : 0;
  const total = subtotal + delivery;

  return (
    <div className={rubik.className}>
      <motion.div
        className="w-full xl:container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 pt-6 sm:pt-10 xl:pt-14 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >

        {/* Your Bag */}
        <motion.div
          className="flex-1 bg-white rounded-2xl p-5 sm:p-7 xl:p-9 shadow-sm"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {/* Heading */}
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-1 sm:mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Your Bag
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-500 mb-6 sm:mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Items in your bag not reserved — check out now to make them yours.
          </motion.p>

          {item && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Shoe image */}
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative flex-shrink-0 overflow-hidden bg-[#f5f5f5] self-start"
                style={{
                  width: "100%",
                  maxWidth: "260px",
                  aspectRatio: "208 / 225",
                  borderRadius: "20px",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 260px"
                  unoptimized
                />
              </motion.div>

              {/* Details */}
              <motion.div
                className="flex-1 min-w-0"
                variants={fadeInUp}
              >
                <motion.div
                  className="flex justify-between items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <div className="min-w-0">
                    {/* Item name */}
                    <motion.p
                      className="text-gray-900 font-semibold text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      {item.name}
                    </motion.p>
                    <motion.p
                      className="text-sm sm:text-base lg:text-lg text-gray-500 mt-1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35, duration: 0.4 }}
                    >
                      {item.category}
                    </motion.p>
                    <motion.p
                      className="text-sm sm:text-base lg:text-lg text-gray-500"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      {item.color}
                    </motion.p>
                  </div>

                  {/* Price */}
                  <motion.span
                    className="text-blue-600 font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-none whitespace-nowrap flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    ${(item.price * item.quantity).toFixed(2)}
                  </motion.span>
                </motion.div>

                {/* Size & Quantity dropdowns */}
                <motion.div
                  className="flex flex-wrap gap-3 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  {/* Size */}
                  <div className="relative">
                    <motion.button
                      onClick={() => { setSizeOpen(!sizeOpen); setQtyOpen(false); }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm sm:text-base lg:text-lg text-gray-700 border border-gray-300 rounded-lg px-3 py-2 bg-white hover:border-gray-600 transition-colors"
                    >
                      Size {item.size} <FiChevronDown size={15} />
                    </motion.button>
                    <AnimatePresence>
                      {sizeOpen && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-20 py-1.5 w-28 max-h-44 overflow-y-auto"
                        >
                          {sizes.map((s) => (
                            <motion.button
                              key={s}
                              onClick={() => { setItem({ ...item, size: s }); setSizeOpen(false); }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`w-full text-left px-4 py-2 text-sm sm:text-base hover:bg-gray-50 transition-colors ${item.size === s ? "font-bold text-blue-600" : "text-gray-700"}`}
                            >
                              {s}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Quantity */}
                  <div className="relative">
                    <motion.button
                      onClick={() => { setQtyOpen(!qtyOpen); setSizeOpen(false); }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm sm:text-base lg:text-lg text-gray-700 border border-gray-300 rounded-lg px-3 py-2 bg-white hover:border-gray-600 transition-colors"
                    >
                      Quantity {item.quantity} <FiChevronDown size={15} />
                    </motion.button>
                    <AnimatePresence>
                      {qtyOpen && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-20 py-1.5 w-32"
                        >
                          {quantities.map((q) => (
                            <motion.button
                              key={q}
                              onClick={() => { setItem({ ...item, quantity: q }); setQtyOpen(false); }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`w-full text-left px-4 py-2 text-sm sm:text-base hover:bg-gray-50 transition-colors ${item.quantity === q ? "font-bold text-blue-600" : "text-gray-700"}`}
                            >
                              {q}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Icons */}
                <motion.div
                  className="flex gap-4 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <motion.button
                    onClick={() => setWished(!wished)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`transition-colors ${wished ? "text-red-500" : "text-gray-400 hover:text-gray-800"}`}
                  >
                    <FiHeart size={22} className={wished ? "fill-red-500" : ""} />
                  </motion.button>
                  <motion.button
                    onClick={() => setItem(null)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-gray-800 transition-colors"
                  >
                    <RiDeleteBin6Line size={22} />
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {!item && (
            <motion.p
              className="text-base sm:text-lg text-gray-400 text-center py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Your bag is empty.
            </motion.p>
          )}
        </motion.div>

        {/* Order Summary */}
        <motion.div
          className="w-full lg:w-[32%] xl:w-[30%]  rounded-2xl p-5 sm:p-7 xl:p-9 mt-3 h-fit"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-xl sm:text-2xl xl:text-3xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Order Summary
          </motion.h2>

          <motion.div
            className="space-y-4 text-sm sm:text-base lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex justify-between text-gray-700">
              <span>{item ? item.quantity : 0} ITEM</span>
              <span>${item ? (item.price * item.quantity).toFixed(2) : "0.00"}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Delivery</span>
              <span>${delivery.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Sales Tax</span>
              <span>-</span>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-between font-bold text-base sm:text-lg lg:text-xl text-gray-900 mt-5 pt-5 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span>Total</span>
            <span>${item ? total.toFixed(2) : delivery.toFixed(2)}</span>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 w-full bg-black hover:bg-gray-800 text-white text-sm sm:text-base lg:text-lg font-bold tracking-widest uppercase py-3.5 sm:py-4 rounded-xl transition-colors"
          >
            Checkout
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 hover:underline w-full text-left"
          >
            Use a promo code
          </motion.button>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Cartdealis;