"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ShoppingMain from "@/images/shoppingmain.webp";
import Shopping1 from "@/images/shopping1.webp";
import Shopping2 from "@/images/shopping2.webp";
import Shopping3 from "@/images/shopping3.webp";

const LUXE_GOLD = "#c9a84c";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const StatCard = ({ children, className, imageSrc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -5, transition: { duration: 0.3 } }}
    transition={{ delay, duration: 0.8 }}
    className={`absolute z-20 bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col ${className}`}
    style={{ width: "260px" }}
  >
    {imageSrc && (
      <div className="relative h-32 w-full">
        <Image src={imageSrc} alt="Retail" fill className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent" />
      </div>
    )}
    <div className="p-5 text-black">{children}</div>
  </motion.div>
);

const Page = () => {
  return (
    <main className="relative min-h-screen w-full bg-[#050505] overflow-hidden font-sans text-[#f0ede8]">
      <div className="absolute inset-0 z-0">
        <Image
          src={ShoppingMain}
          alt="Dubai Mall Architecture"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/90" />
      </div>

      <StatCard
        imageSrc={Shopping1}
        className="hidden md:flex top-26 left-6"
        delay={0.2}
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">
          Annual Visitors
        </span>
        <h3 className="text-3xl font-extrabold mt-1 text-black">105M</h3>
        <p className="text-[#4ade80] text-[10px] font-bold mt-1">
          ↑ 19% vs 2025
        </p>
      </StatCard>

      <StatCard
        imageSrc={Shopping2}
        className="hidden md:flex top-26 right-6"
        delay={0.4}
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">
          Retail Stores
        </span>
        <h3 className="text-3xl font-extrabold mt-1 text-black">1,200+</h3>
        <p className="text-gray-400 text-[10px] mt-1">Elite Global Brands</p>
      </StatCard>

      <StatCard
        imageSrc={Shopping3}
        className="hidden md:flex bottom-6 left-6"
        delay={0.6}
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">
          Growth Trajectory
        </span>
        <div className="flex items-end gap-1 h-6 my-2">
          {[30, 50, 40, 60, 80, 55, 85, 100, 75, 90].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 1.2 + i * 0.04, duration: 0.4 }}
              className="flex-1 bg-[#c9a84c] rounded-t-[1px]"
            />
          ))}
        </div>
        <h3 className="text-xl font-extrabold text-black">13M sq ft</h3>
        <p className="text-gray-400 text-[10px] mt-0">Total GLA Area</p>
      </StatCard>

      <motion.section
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6"
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.8em] text-white/50 font-medium">
            Global Retail Leadership
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-7xl font-extrabold leading-[0.95] tracking-tighter mb-4"
        >
          The Ultimate <br />
          <span className="text-white">Retail Stage.</span>
        </motion.h1>

        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-8xl font-light italic mb-8"
          style={{ color: LUXE_GOLD }}
        >
          Where Iconic Brands Thrive.
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="max-w-xl text-base md:text-lg text-white/60 leading-relaxed font-light"
        >
          Position your brand at the epicenter of global commerce. Unmatched
          visibility. Unrivaled energy. The world&apos;s most prestigious
          address for the modern retailer.
        </motion.p>
      </motion.section>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8">
        <Link href="/dashboard" className="flex items-center justify-center">
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
                i === 0 ? "bg-[#c9a84c]" : "bg-white/20"
              }`}
            />
          ))}
        </div>

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
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </motion.button>
        </Link>
      </div>
    </main>
  );
};

export default Page;
