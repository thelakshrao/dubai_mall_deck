"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import BG from "@/images/luxuryshop.webp";
import DetailImg from "@/images/luxury_feature.jpg";

export default function LuxuryPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden text-white font-sans">
      <Image
        src={BG}
        alt="Luxury"
        fill
        className="object-cover opacity-20 grayscale-[0.4]"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent z-0" />

      <AnimatePresence mode="wait">
        <motion.div
          key="content"
          className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-24 py-20 gap-12 md:gap-20"
        >
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl text-center md:text-left pt-10 md:pt-0"
          >
            <h2 className="text-[#c9a84c] text-4xl md:text-7xl uppercase tracking-[8px] md:tracking-[15px] leading-tight mb-6 md:mb-10 font-light">
              Unrivaled <br /> Prestige
            </h2>

            <div className="space-y-6">
              <p className="text-white/70 tracking-[2px] md:tracking-[4px] text-[10px] md:text-xs leading-loose uppercase max-w-lg">
                Home to the world's most exclusive flagship boutiques. From the
                Fashion Avenue to the private salons, we define the global
                standard of high-luxury retail ecosystem.
              </p>

              <p className="text-[#c9a84c]/60 tracking-[3px] text-[9px] md:text-[10px] uppercase font-medium border-l border-[#c9a84c] pl-4 hidden md:block">
                Market Strategy: Target ultra-high-net-worth demographics via
                curated, invitation-only retail experiences.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-4">
                <div>
                  <p className="text-xl md:text-3xl font-light tracking-tighter">
                    1.2M+
                  </p>
                  <p className="text-[7px] md:text-[8px] tracking-[3px] text-white/30 uppercase mt-1 text-center md:text-left">
                    Annual VIP Visitors
                  </p>
                </div>
                <div>
                  <p className="text-xl md:text-3xl font-light tracking-tighter">
                    Top 1%
                  </p>
                  <p className="text-[7px] md:text-[8px] tracking-[3px] text-white/30 uppercase mt-1 text-center md:text-left">
                    Global Brand Density
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[320px] md:max-w-105 aspect-3/4 bg-white/3 backdrop-blur-2xl border border-white/10 p-6 md:p-10 flex flex-col justify-between shadow-2xl"
          >
            <div className="relative w-full h-[65%] overflow-hidden rounded-sm">
              <Image
                src={DetailImg}
                alt="Detail"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-2000 ease-in-out scale-110 hover:scale-100"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="pt-6 md:pt-10">
              <span className="text-[#c9a84c] text-[8px] md:text-[10px] tracking-[5px] uppercase block mb-2">
                Featured Selection
              </span>
              <h3 className="text-lg md:text-2xl uppercase tracking-[4px] md:tracking-[6px] font-extralight text-white/90">
                Private Collection
              </h3>
              <div className="w-12 h-px bg-[#c9a84c]/40 my-4 md:my-6" />
              <p className="text-[8px] md:text-[10px] text-white/40 tracking-[2px] md:tracking-[3px] uppercase italic leading-relaxed">
                Precision in every detail. <br className="hidden md:block" />{" "}
                Exclusivity in every stitch.
              </p>
            </div>

            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#c9a84c]/20" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8">
        <Link
          href="/dashboard/shop/kids"
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
          href="/dashboard/food"
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
