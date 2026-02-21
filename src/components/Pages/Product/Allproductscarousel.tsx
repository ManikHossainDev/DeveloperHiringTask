/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { useGetProductQuery } from "@/redux/features/product/product";

const Allproductscarousel = () => {
  const { data } = useGetProductQuery({});

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section
      className="w-full xl:container font-sans"
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
            className="text-md md:text-[34px] font-semibold uppercase leading-[95%] text-[#111]"
            style={{ fontFamily: "'Rubik', sans-serif", letterSpacing: "0%" }}
          >
            You may also like
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={scrollPrev}
            disabled={prevDisabled}
            className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-[#111] text-[#111] disabled:opacity-30 hover:bg-[#111] hover:text-white transition-all duration-200"
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            disabled={nextDisabled}
            className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-[#111] text-[#111] disabled:opacity-30 hover:bg-[#111] hover:text-white transition-all duration-200"
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Embla Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {data?.map((product: { id: number; title: string; price: number; images: string[] }, index: number) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="flex-shrink-0 w-[280px]"
            >
              <div className="bg-[#FAFAFA] border-2 border-[#FFFFFF] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                {/* Image area */}
                <div className="relative px-6 pt-6 pb-4">
                  {/* Shoe image */}
                  <div className="relative h-40 md:h-60 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      width={200}
                      height={144}
                      className="h-36 md:h-48 w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = "none";
                        (target.nextSibling as HTMLElement).style.display = "flex";
                      }}
                    />
                    {/* Fallback */}
                    <div className="hidden absolute inset-0 items-center justify-center text-gray-300">
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
                  {product.title.slice(0, 20)}{product.title.length > 10 ? "..." : ""}
                </p>

                <button className="w-full flex items-center justify-between bg-[#111] hover:bg-[#333] text-white px-4 py-2.5 rounded-lg transition-colors duration-200">
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
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "w-6 bg-[#111]" : "w-2 bg-[#ccc]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Allproductscarousel;