"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import BG from "@/images/foodshop2.webp";
import DinTaiImg from "@/images/dintaifung.webp";
import CheesecakeImg from "@/images/thecheesecakefactory.webp";

const foodOutlets = [
  { 
    name: "Din Tai Fung", 
    size: "col-span-2 row-span-1 md:row-span-2", 
    tag: "World-Class Dim Sum",
    para: "Globally acclaimed for its precision and craft, offering a high-volume flagship experience.",
    image: DinTaiImg
  },
  { 
    name: "Eataly", 
    size: "col-span-1 row-span-1", 
    tag: "Marketplace",
    para: "A multi-sensory Italian destination."
  },
  { 
    name: "The Cheesecake Factory", 
    size: "col-span-1 row-span-1 md:row-span-2", 
    tag: "High-Volume",
    para: "A powerhouse of casual dining and brand loyalty.",
    image: CheesecakeImg
  },
  { 
    name: "Social House", 
    size: "col-span-1 row-span-1", 
    tag: "Urban Dining",
    para: "Merging eclectic international flavors."
  },
  { 
    name: "Laduree", 
    size: "col-span-2 row-span-1", 
    tag: "Heritage Luxury",
    para: "The pinnacle of French patisserie and high-end tea service.",
    hideOnMobile: true 
  },
  { 
    name: "GIA", 
    size: "col-span-2 md:col-span-1 row-span-1", 
    tag: "Modern Italian",
    para: "Fashion-forward aesthetics and traditional flavors.",
    hideOnMobile: true 
  },
];

export default function FoodPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden text-white font-sans">
      <Image src={BG} alt="Background" fill className="object-cover opacity-20" priority />
      <div className="absolute inset-0 bg-linaer-to-b from-black via-transparent to-black z-0" />
      
      <AnimatePresence mode="wait">
        {!showContent ? (
          <motion.div 
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-100 bg-black"
          >
            <motion.h1 
              initial={{ letterSpacing: "10px" }}
              animate={{ letterSpacing: "20px" }}
              className="text-2xl md:text-6xl tracking-[20px] uppercase font-extralight text-center"
            >
              Flagship Dining Concepts
            </motion.h1>
          </motion.div>
        ) : (
          <motion.div 
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 flex flex-col pt-28 md:pt-24 pb-6 md:pb-10 px-4 md:px-16 min-h-screen w-full overflow-y-auto no-scrollbar"
          >
            <div className="mb-8 md:mb-10 text-center md:text-left">
              <h2 className="text-[#c9a84c] tracking-[6px] md:tracking-[12px] uppercase text-[9px] md:text-xs font-medium">
                The Gastronomy Collection
              </h2>
              <p className="text-white/40 text-[8px] md:text-[9px] uppercase tracking-[2px] mt-2 max-w-xl leading-relaxed mx-auto md:mx-0">
                Strategy: Curating high-yield flagship dining to maximize dwell time.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full auto-rows-min">
              {foodOutlets.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`
                    relative group overflow-hidden border border-white/10 bg-black/85 backdrop-blur-md p-4 md:p-8 flex-col justify-end
                    min-h-35 md:min-h-auto ${item.size}
                    ${item.hideOnMobile ? "hidden md:flex" : "flex"} 
                  `}
                >
                  {item.image && (
                    <div className="absolute inset-0 w-full h-[55%] md:h-[60%] top-0">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover opacity-90 " 
                      />
                      <div className="absolute inset-0 bg-linaer-to-t from-black via-black/20 to-transparent" />
                    </div>
                  )}

                  <div className="relative z-10">
                    <span className="text-[#c9a84c] text-[7px] md:text-[8px] tracking-[2px] uppercase block mb-1">
                      {item.tag}
                    </span>
                    <h3 className="uppercase tracking-[2px] md:tracking-[4px] text-[10px] md:text-xl font-light mb-1 md:mb-2">
                      {item.name}
                    </h3>
                    <p className="text-[7px] md:text-[9px] text-white/40 tracking-[1px] leading-tight md:leading-relaxed line-clamp-2 md:line-clamp-none">
                      {item.para}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 md:mt-auto flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 gap-4">
              <div className="flex gap-8 md:gap-12 text-center md:text-left">
                <div>
                  <p className="text-[#c9a84c] text-sm md:text-lg font-light tracking-widest">200+</p>
                  <p className="text-[7px] tracking-[2px] text-white/30 uppercase">Premium Dining</p>
                </div>
                <div>
                  <p className="text-[#c9a84c] text-sm md:text-lg font-light tracking-widest">45%</p>
                  <p className="text-[7px] tracking-[2px] text-white/30 uppercase">Market Share</p>
                </div>
              </div>
              <button className="w-full md:w-auto px-6 md:px-8 py-3 border border-[#c9a84c]/50 text-[#c9a84c] text-[8px] uppercase tracking-[4px] hover:bg-[#c9a84c] hover:text-black transition-all">
                View Portfolio
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8">
        <Link
          href="/dashboard/shop/luxury"
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
                i === 3 ? "bg-[#c9a84c]" : "bg-white/20"
              }`}
            />
          ))}
        </div>

        <Link
          href="/dashboard/entertain"
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