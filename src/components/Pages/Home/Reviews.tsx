"use client";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────
const reviews = [
  {
    id: 1,
    title: "Good Quality",
    text: "I highly recommend shopping from Niko",
    author: "Niko",
    avatar: "https://i.pravatar.cc/40?img=11",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Good Quality",
    text: "I highly recommend shopping from Niko",
    author: "Niko",
    avatar: "https://i.pravatar.cc/40?img=12",
    rating: 5.4,
    image:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Good Quality",
    text: "I highly recommend shopping from Kim",
    author: "Kim",
    avatar: "https://i.pravatar.cc/40?img=47",
    rating: 5.6,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop",
  },
];

// ─── Star Rating ──────────────────────────────────────────────────────────────
const StarRating = ({ rating }: any) => {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="text-amber-400 text-xl">
          {star <= full ? (
            <FaStar />
          ) : star === full + 1 && hasHalf ? (
            <FaStarHalf />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
      <span className="text-md text-gray-400 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const Reviews = () => {
  return (
    <div className="px-4 py-6 xl:container mx-auto">
      {/* Header */}
      <motion.div
        className="flex items-center justify-between mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-['Rubik'] text-2xl md:text-[50px] xl:text-[65px] font-semibold uppercase leading-[95%] tracking-normal">
  REVIEWS
</h2>
        <Link
          href="#"
          className="text-xs md:text-mg font-semibold text-white px-4 py-3 rounded-md  bg-[#4A69E2]"
        >
          SEE ALL
        </Link>
      </motion.div>

      {/* Cards — always 3 columns on ALL devices */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col cursor-pointer"
          >
            {/* Top info section */}
            <div className="p-3 relative flex-1">
              {/* Text — padded right to avoid avatar overlap */}
              <div className="pr-10">
                <p className="font-bold text-sm md:text-md xl:text-xl text-gray-900 mb-1">
                  {review.title}
                </p>
                <p className="text-xs md:text-base text-gray-500 mb-2">{review.text}</p>
                <StarRating rating={review.rating} />
              </div>

              {/* Avatar — top right */}
              <Image
                src={review.avatar}
                alt={review.author}
                width={60}
                height={60}
                className="absolute top-3 right-3 rounded-full object-cover border-2 border-gray-100"
              />
            </div>

            {/* Bottom product image */}
            <motion.div
              className="relative w-full h-[250px] md:h-[450px] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src={review.image}
                alt={review.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;