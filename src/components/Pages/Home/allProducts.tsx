/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    badge: "New",
    name: "Adidas 4DFWD X Parley Running Shoes",
    price: 125,
    image:
      "https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png",
    color: "Black / Orbit Grey",
  },
  {
    id: 2,
    badge: "New",
    name: "Adidas 4DFWD X Parley Running Shoes",
    price: 125,
    image:
      "https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png",
    color: "White / Vivid Red",
  },
  {
    id: 3,
    badge: "New",
    name: "Adidas 4DFWD X Parley Running Shoes",
    price: 125,
    image:
      "https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png",
    color: "Dark Green / Off White",
  },
  {
    id: 4,
    badge: "New",
    name: "Adidas 4DFWD X Parley Running Shoes",
    price: 125,
    image:
      "https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png",
    color: "Solar Orange / Black",
  },
];

const AllProducts = () => {
  return (
    <section
      className="w-full xl:container  font-sans"
      style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
    >
      {/* Header */}
      <motion.div
        className="flex items-end justify-between mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div>
          <h1
  className="text-md md:text-[74px] font-semibold uppercase leading-[95%] text-[#111]"
  style={{
    fontFamily: "'Rubik', sans-serif",
    letterSpacing: "0%",
  }}
>
  DON'T MISS OUT
  <br />
  NEW DROPS
</h1>
        </div>

        <div className="">
          <button className="flex items-center gap-1 md:gap-2 bg-[#4A69E2] text-white text-xs font-bold uppercase tracking-widest px-2 md:px-5 py-3 rounded-md transition-all duration-200 shadow-lg hover:shadow-blue-300/50">
            <HiSparkles className="text-sm" />
            Shop New Drops

          </button>
        </div>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
          <div
            className="bg-[#FAFAFA] border-2 border-[#FFFFFF] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Image area */}
            <div className="relative px-6 pt-6 pb-4">
              {/* Badge */}
              <span className="absolute top-3 left-3 bg-[#1a6eff] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-tl-full rounded-br-full z-10">
                {product.badge}
              </span>

              {/* Shoe image */}
              <div className="relative h-40 md:h-60 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={144}
                  className="h-36 md:h-48 w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = "none";
                    (target.nextSibling as HTMLElement).style.display = "flex";
                  }}
                />
                {/* Fallback placeholder */}
                <div
                  className="hidden absolute inset-0 items-center justify-center text-gray-300"
                  style={{ display: "none" }}
                >
                  <FiShoppingBag size={48} />
                </div>
              </div>
            </div>

          </div>
             {/* Info */}
            <div className="px-1 pt-3 pb-4">
              <p
                className="text-[11px] md:text-[13px] font-black text-[#111] uppercase leading-tight tracking-tight mb-3"
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  letterSpacing: "0.03em",
                }}
              >
                {product.name}
              </p>

              <button className="w-full flex items-center justify-between bg-[#111] hover:bg-[#333] text-white px-4 py-2.5 rounded-lg transition-colors duration-200 group/btn">
                <span
                  className="text-[11px] font-bold uppercase tracking-widest"
                  style={{
                    fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  View Product
                </span>
                <span className="flex items-center gap-1 text-[#f5c542] font-black text-sm">
                  <span>—</span>
                  <span className="text-[#f5c542]">${product.price}</span>
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;