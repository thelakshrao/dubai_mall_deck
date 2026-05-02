"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import BooBooLand from "@/images/boobooland.jpg";
import ChinaTown from "@/images/chinatown.webp";
import HouseOfHype from "@/images/houseofhype.webp";
import New1 from "@/images/new2.webp";

const FeatureSection = ({ image, title, description, stats, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="flex flex-col space-y-5"
    >
      <div className="relative aspect-4/5 w-full max-w-[320px] mx-auto rounded-3xl overflow-hidden shadow-2xl group">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <Image src={image} alt={title} fill className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
            <span className="text-[10px] text-white uppercase tracking-tighter font-light">
              Featured
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 text-center px-4">
        <motion.h3
          className="text-xl md:text-2xl font-light text-white tracking-wide italic"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title}
        </motion.h3>
        <p className="text-white/60 text-[11px] md:text-xs leading-relaxed font-light max-w-70 mx-auto">
          {description}
        </p>

        <div className="flex justify-center gap-6 pt-2">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-[9px] uppercase text-[#c9a84c] tracking-[0.2em] font-bold">
                {stat.label}
              </span>
              <span className="text-xs text-white/90 font-light">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Page() {
  const { scrollYProgress } = useScroll();
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <motion.div
        style={{ scale: backgroundScale }}
        className="fixed inset-0 z-0"
      >
        <Image
          src={New1}
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-black/90" />
      </motion.div>

      <div className="relative z-10 pt-28 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-5 md:mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#c9a84c] text-[10px] uppercase tracking-[0.6em] mb-4 block font-bold">
                Discover
              </span>
              <h1 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-[0.15em] leading-tight">
                What&apos;s{" "}
                <span
                  className="italic font-light text-[#c9a84c]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  New
                </span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-px bg-white/30 mx-auto mt-8"
            />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <FeatureSection
              index={0}
              image={BooBooLand}
              title="Boo Boo Laand"
              description="A whimsical flagship universe designed to spark pure imagination. A curated journey for our youngest icons."
              stats={[
                { label: "Area", value: "25k" },
                { label: "Level", value: "02" },
              ]}
            />

            <FeatureSection
              index={1}
              image={ChinaTown}
              title="Chinatown Dubai"
              description="A meticulously themed zone bringing the soul of the Far East to Downtown. An avant-garde cultural portal."
              stats={[
                { label: "Floor", value: "01" },
                { label: "Theme", value: "East" },
              ]}
            />

            <FeatureSection
              index={2}
              image={HouseOfHype}
              title="House of Hype"
              description="Where gaming, fashion, and digital art converge. A high-energy environment for the creators of tomorrow."
              stats={[
                { label: "Type", value: "Tech" },
                { label: "Genre", value: "Art" },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8">
        <Link
          href="/dashboard/whyus"
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
                i === 1 ? "bg-[#c9a84c]" : "bg-white/20"
              }`}
            />
          ))}
        </div>

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
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
