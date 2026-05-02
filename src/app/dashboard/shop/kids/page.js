"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BG from "@/images/new4.webp";
import HamleysImg from "@/images/hamleys.webp";
import LegoImg from "@/images/LEGO.webp";
import GeekayImg from "@/images/geekaygames.webp";
import ELCImg from "@/images/earlylearningcentre.webp";
import ToyStoreImg from "@/images/thetoystorewebp.jpg";

const kidShops = [
  {
    name: "Hamleys",
    level: "Level 2",
    desc: "Interactive play, 100,000+ toys",
    img: HamleysImg,
    side: "left",
  },
  {
    name: "LEGO Store",
    level: "Lower Ground",
    desc: "Custom builds, Technic sets",
    img: LegoImg,
    side: "right",
  },
  {
    name: "Geekay Games",
    level: "Level 2",
    desc: "Video games, collectibles",
    img: GeekayImg,
    side: "left",
  },
  {
    name: "ELC",
    level: "Level 2",
    desc: "Educational and toddler toys",
    img: ELCImg,
    side: "right",
  },
  {
    name: "The Toy Store",
    level: "Level 2",
    desc: "Board games, RC cars, puzzles",
    img: ToyStoreImg,
    side: "left",
  },
];

export default function KidsShopPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden text-white font-light">
      <div className="fixed inset-0 z-0">
        <Image
          src={BG}
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black" />
      </div>

      <div className="relative z-10 w-full py-28 md:py-34">
        <div className="text-center mb-12 md:mb-20 px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#c9a84c] tracking-[6px] md:tracking-[10px] uppercase text-[8px] md:text-[10px] mb-2"
          >
            Premium Retail Showcase
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-7xl uppercase tracking-[10px] md:tracking-[15px] font-extralight"
          >
            Kids & <span className="text-[#c9a84c]">Games</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-2 md:flex md:overflow-x-auto pb-16 md:pb-20 px-4 md:px-10 gap-4 md:gap-12 no-scrollbar items-start">
          {kidShops.map((shop, i) => (
            <div
              key={shop.name}
              className="flex-none md:w-87.5 flex flex-col items-center"
            >
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-72 md:h-72 rounded-full border border-[#c9a84c] p-1 md:p-2 mb-4 md:mb-10 overflow-hidden bg-black/50 shadow-[0_0_15px_rgba(201,168,76,0.1)]"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={shop.img}
                    alt={shop.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                className="text-center px-1"
              >
                <span className="text-[#c9a84c] text-[7px] md:text-[10px] tracking-[2px] md:tracking-[4px] uppercase">
                  {shop.level}
                </span>
                <h2 className="text-[10px] sm:text-xs md:text-3xl uppercase tracking-[2px] md:tracking-[6px] mt-1 font-normal line-clamp-1">
                  {shop.name}
                </h2>
                <div className="hidden md:block h-px w-12 bg-[#c9a84c] mx-auto my-4" />
                <p className="hidden md:block text-[11px] leading-relaxed tracking-[2.5px] text-white/70 uppercase px-4 italic">
                  {shop.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-32 text-center px-4 md:px-6"
        >
          <div className="max-w-4xl mx-auto border border-[#c9a84c]/30 py-8 md:py-16 px-6 md:px-8 bg-black/40 backdrop-blur-sm">
            <h3 className="text-lg md:text-5xl font-extralight uppercase tracking-[6px] md:tracking-[10px] mb-4">
              Our <span className="text-[#c9a84c]">Global</span> Portfolio
            </h3>
            <p className="text-[8px] md:text-xs tracking-[2px] md:tracking-[4px] uppercase text-white/50 leading-relaxed max-w-2xl mx-auto mb-6 md:mb-10">
              Beyond these featured highlights, we host over 500+ world-class
              labels and exclusive entertainment concepts.
            </p>
            <Link href="/dashboard/shop">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#c9a84c",
                  color: "#000",
                }}
                className="px-6 md:px-14 py-3 md:py-4 border border-[#c9a84c] text-[#c9a84c] text-[8px] md:text-[10px] tracking-[4px] md:tracking-[6px] uppercase transition-all duration-300"
              >
                Explore Full Directory
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8">
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
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </motion.button>
        </Link>
      </div>
    </main>
  );
}
