"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import BG from "@/images/fountain_show.webp";
import AquariumImg from "@/images/dubaiaquariumtunnel.webp";
import FountainImg from "@/images/thedubaifountain.webp";
import GalaImg from "@/images/newyear’sevegala.webp";

const slides = [
  {
    image: AquariumImg,
    tag: "Immersive Discovery",
    title: "Aquatic Marvels",
    desc: "The world's largest suspended aquarium.",
  },
  {
    image: FountainImg,
    tag: "Nightly Spectacle",
    title: "Dubai Fountains",
    desc: "Choreographed light and water artistry.",
  },
  {
    image: GalaImg,
    tag: "Global Celebration",
    title: "NYE Gala",
    desc: "The world's most televised pyrotechnic show.",
  },
];

export default function EntertainPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden text-white font-sans">
      <Image
        src={BG}
        alt="Entertainment Background"
        fill
        className="object-cover opacity-30 brightness-75 scale-110"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/60 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-32 py-12 md:py-20 gap-10">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:max-w-xl text-center md:text-left mt-10 md:mt-0"
        >
          <h2 className="text-[#c9a84c] text-4xl md:text-8xl uppercase tracking-[10px] md:tracking-[22px] leading-[1.1] mb-6 md:mb-10 font-light">
            Infinite <br /> Wonder
          </h2>

          <div className="space-y-6 md:space-y-8">
            <p className="text-white/70 tracking-[2px] md:tracking-[4px] text-[8px] md:text-[10px] leading-loose uppercase max-w-md mx-auto md:mx-0">
              Transforming retail into a global stage. We host record-breaking
              spectacles that captivate millions and define modern culture.
            </p>

            <div className="hidden md:block h-px w-24 bg-[#c9a84c]/50" />

            <div className="flex flex-wrap justify-center md:justify-start gap-10 md:gap-16 pt-2">
              <div>
                <p className="text-xl md:text-4xl font-extralight tracking-tighter text-white">
                  10M+
                </p>
                <p className="text-[7px] md:text-[8px] tracking-[2px] text-[#c9a84c] uppercase mt-2">
                  Global Viewers
                </p>
              </div>
              <div>
                <p className="text-xl md:text-4xl font-extralight tracking-tighter text-white">
                  365
                </p>
                <p className="text-[7px] md:text-[8px] tracking-[2px] text-[#c9a84c] uppercase mt-2">
                  Annual Events
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative w-full max-w-70 md:max-w-105 bg-white/2 backdrop-blur-3xl border border-white/10 p-4 md:p-8 flex flex-col shadow-2xl overflow-hidden"
        >
          <div className="relative w-full h-35 md:h-55 overflow-hidden rounded-sm mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[index].image.src}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[index].image}
                  alt={slides[index].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="min-h-25 md:min-h-35 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[index].title}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[#c9a84c] text-[7px] md:text-[9px] tracking-[4px] md:tracking-[6px] uppercase block mb-2">
                  {slides[index].tag}
                </span>
                <h3 className="text-lg md:text-2xl uppercase tracking-[3px] md:tracking-[5px] font-extralight text-white/90">
                  {slides[index].title}
                </h3>
                <div className="w-8 h-px bg-white/20 my-3 md:my-5" />
                <p className="text-[7px] md:text-[9px] text-white/40 tracking-[2px] uppercase italic">
                  {slides[index].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-2 mt-4">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 transition-all duration-500 ${i === index ? "w-6 bg-[#c9a84c]" : "w-2 bg-white/10"}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8">
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
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </motion.button>
        </Link>

        <div className="flex gap-2 items-center h-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-1 w-6 rounded-full transition-all ${
                i === 4 ? "bg-[#c9a84c]" : "bg-white/20"
              }`}
            />
          ))}
        </div>

        <Link
          href="/dashboard/visit"
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
