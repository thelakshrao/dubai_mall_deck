"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BG from "@/images/new1.webp";
import FashionImg from "@/images/fashion.webp";
import FoodImg from "@/images/foodshop.webp";
import KidsImg from "@/images/kidsshop.webp";
import LuxuryImg from "@/images/luxuryshop.webp";

const categories = [
  { title: "Fashion", img: FashionImg, side: "left" },
  { title: "Food", img: FoodImg, side: "left" },
  { title: "Kids", img: KidsImg, side: "right" },
  { title: "Luxury", img: LuxuryImg, side: "right" },
];

export default function ShopPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0">
        <Image
          src={BG}
          alt="Background"
          fill
          className="object-cover opacity-40 grayscale-20"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-18 px-6 md:px-10">
        
        <motion.h1
          initial={{ y: "35vh", scale: 1.5, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-white text-5xl md:text-9xl font-light tracking-[10px] md:tracking-[20px] uppercase mb-10 md:mb-6 mt-10 md:mt-0"
        >
          Shop
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl pb-32">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ 
                x: cat.side === "left" ? -100 : 100, 
                opacity: 0 
              }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 1 + (i * 0.1), 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group relative h-64 md:h-112.5 cursor-pointer overflow-hidden rounded-sm"
            >
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <p className="text-[#c9a84c] text-[10px] md:text-xs tracking-[4px] uppercase mb-1 md:mb-2">0{i + 1}</p>
                <h3 className="text-white text-xl md:text-2xl uppercase tracking-[2px]">{cat.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8">
        <Link
          href="/dashboard/whatnew"
          className="flex items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="text-white/40 hover:text-[#c9a84c] transition-colors flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="block"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </motion.button>
        </Link>

        <div className="flex gap-2 items-center h-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-1 w-6 rounded-full transition-all ${
                i === 2 ? "bg-[#c9a84c]" : "bg-white/20"
              }`}
            />
          ))}
        </div>

        <Link
          href="/dashboard/shop/fashion"
          className="flex items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="text-white/40 hover:text-[#c9a84c] transition-colors flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="block"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </motion.button>
        </Link>
      </div>
    </main>
  );
}