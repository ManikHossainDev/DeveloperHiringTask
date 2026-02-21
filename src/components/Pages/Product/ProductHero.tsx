"use client";

import Image from "next/image";
import { useState } from "react";

const COLORS = [
  { name: "Shadow Navy / Army Green", primary: "#1e3a5f", secondary: "#4a5e3a" },
  { name: "Core Black / White", primary: "#111111", secondary: "#e5e5e5" },
  { name: "Wonder White / Green", primary: "#e8e4da", secondary: "#2d7a4f" },
];

const SIZES = [36, 37, 40, 41, 42, 43, 44, 45, 46, 47];

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
    <div className="xl:container mx-auto  py-6 grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* LEFT: Images Grid */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Image
            width={250}
            height={250}
            alt="shoe side view"
            src="https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png"
            className="w-1/2 object-contain rounded-xl bg-[#f5f5f5]"
          />
          <Image
            width={250}
            height={250}
            alt="shoe three quarter"
            src="https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png"
            className="w-1/2 object-contain rounded-xl bg-[#f5f5f5]"
          />
        </div>
        <div className="flex gap-2">
          <Image
            width={250}
            height={250}
            alt="shoe top view"
            src="https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png"
            className="w-1/2 object-contain rounded-xl bg-[#f5f5f5]"
          />
          <Image
            width={250}
            height={250}
            alt="shoe sole"
            src="https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png"
            className="w-1/2 object-contain rounded-xl bg-[#f5f5f5]"
          />
        </div>
      </div>

      {/* RIGHT: Product Info */}
      <div>
        {/* Title */}
        <h1 className="text-[22px] md:text-[32px] font-bold text-black uppercase tracking-[0.01em] leading-tight mb-2 md:mb-4">
          ADIDAS 4DFWD X PARLEY<br />RUNNING SHOES
        </h1>

        {/* Price */}
        <p className="text-lg md:text-2xl font-semibold text-black mb-4 md:mb-6">$125.00</p>

        {/* Color */}
        <div className="mb-4 md:mb-6">
          <p className="text-[12px] md:text-[13px] font-semibold uppercase text-[#555] tracking-[0.08em] mb-2">COLOR</p>
          <div className="flex gap-2 md:gap-3">
            {COLORS.map((color, i) => (
              <button
                key={i}
                title={color.name}
                onClick={() => setSelectedColor(i)}
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
        </div>

        {/* Size */}
        <div className="mb-5 md:mb-7">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[12px] md:text-[13px] font-semibold uppercase text-[#555] tracking-[0.08em]">SIZE</p>
            <span className="text-[11px] md:text-[12px] text-[#555] underline cursor-pointer tracking-[0.05em]">SIZE CHART</span>
          </div>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-[46px] h-9 md:w-[56px] md:h-11 rounded text-xs md:text-sm font-semibold cursor-pointer transition-all duration-150 ${
                  selectedSize === size
                    ? "border-2 border-black bg-black text-white"
                    : "border border-[#ccc] bg-white text-black hover:border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className={`w-full py-3.5 md:py-4 text-white text-sm md:text-base font-bold uppercase tracking-[0.08em] rounded mb-2.5 transition-colors duration-200 ${
            selectedSize
              ? "bg-black cursor-pointer hover:bg-[#333]"
              : "bg-[#aaa] cursor-not-allowed"
          }`}
        >
          {addedToCart ? "ADDED!" : "ADD TO CART"}
        </button>

        {/* Buy Now */}
        <button className="w-full py-3.5 md:py-4 bg-white text-black border-2 border-black text-sm md:text-base font-bold uppercase tracking-[0.08em] rounded mb-5 cursor-pointer hover:bg-[#f5f5f5] transition-colors duration-200">
          BUY IT NOW
        </button>

        {/* About */}
        <div className="border-t border-[#e5e5e5] pt-4 md:pt-5">
          <p className="text-[13px] md:text-[15px] font-bold uppercase tracking-[0.08em] mb-1.5 text-black">
            ABOUT THE PRODUCT
          </p>
          <p className="text-xs md:text-md xl:text-lg text-[#555] mb-3">
            {COLORS[selectedColor].name}
          </p>
          <p className="text-xs md:text-md xl:text-lg text-[#555] mb-3 leading-relaxed">
            This product is excluded from all promotional discounts and offers.
          </p>
          <ul className="list-none p-0 m-0 text-xs md:text-md xl:text-lg text-[#555] leading-[1.8]">
            <li>• Pay over time in interest-free installments with Affirm, Klarna or Afterpay</li>
            <li>• Join adiClub to get unlimited free standard shipping, returns, &amp; exchanges</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;