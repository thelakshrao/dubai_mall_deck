"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BG from "@/images/new3.webp";
import LVImg from "@/images/LouisVuitton.webp";
import DiorImg from "@/images/dior.webp";
import GucciImg from "@/images/gucci.webp";
import ChanelImg from "@/images/chanel.webp";
import PradaImg from "@/images/Prada.webp";

const topBrands = [
  {
    name: "Louis Vuitton",
    desc: "Luxury Leather & Ready-to-Wear",
    vibe: "Heritage and Travel",
    img: LVImg,
  },
  {
    name: "Dior",
    desc: "Haute Couture & Accessories",
    vibe: "French Sophistication",
    img: DiorImg,
  },
  {
    name: "Gucci",
    desc: "Contemporary Fashion",
    vibe: "Bold and Eclectic",
    img: GucciImg,
  },
];

const bottomBrands = [
  {
    name: "Chanel",
    desc: "Timeless Elegance",
    vibe: "Classic and High-Contrast",
    img: ChanelImg,
  },
  {
    name: "Prada",
    desc: "Modern Minimalism",
    vibe: "Intellectual and Sleek",
    img: PradaImg,
  },
];

export default function FashionPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden text-white">
      <div className="fixed inset-0 z-0">
        <Image
          src={BG}
          alt="Background"
          fill
          className="object-cover opacity-20 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#c9a84c] tracking-[8px] uppercase text-[10px] mb-4"
          >
            The Pinnacle of Style
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extralight uppercase tracking-tighter"
          >
            Fashion <br />
            <span className="font-serif italic text-white/40 ml-10 md:ml-20 text-5xl md:text-7xl">
              Avenue
            </span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {topBrands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col group"
            >
              <div className="relative w-full h-62.5 overflow-hidden rounded-sm mb-6">
                <Image
                  src={brand.img}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div>
                <h2 className="text-2xl font-light uppercase tracking-widest text-[#c9a84c]">
                  {brand.name}
                </h2>
                <p className="text-[10px] tracking-[2px] uppercase mt-2 text-white/70">
                  {brand.desc}
                </p>
                <p className="text-[9px] tracking-[3px] uppercase mt-1 text-white/30 italic">
                  {brand.vibe}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 max-w-5xl mx-auto">
          {bottomBrands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4 + i * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col md:w-1/2 group"
            >
              <div className="relative w-full h-62.5 overflow-hidden rounded-sm mb-6">
                <Image
                  src={brand.img}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-light uppercase tracking-[6px] text-[#c9a84c]">
                  {brand.name}
                </h2>
                <p className="text-[10px] tracking-[3px] uppercase mt-2 text-white/60">
                  {brand.desc}
                </p>
                <p className="text-[9px] tracking-[2px] uppercase mt-1 text-white/30 italic">
                  {brand.vibe}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center border-t border-white/10 pt-10"
        >
          <h2 className="text-3xl md:text-5xl font-extralight uppercase tracking-[8px]">
            And <span className="text-[#c9a84c]">500+</span> More{" "}
            <br className="md:hidden" /> Iconic Labels
          </h2>
          <Link href="/dashboard/shop">
            <button className="mt-12 px-10 py-4 border border-[#c9a84c] text-[#c9a84c] text-[10px] tracking-[5px] uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-500 cursor-pointer">
              Explore All
            </button>
          </Link>
        </motion.div>
      </div>
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8">
        <Link
          href="/dashboard/shop"
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
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </motion.button>
        </Link>
      </div>
    </main>
  );
}
