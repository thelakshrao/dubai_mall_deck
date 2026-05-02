"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Volume2, VolumeX, ChevronRight } from "lucide-react";

export default function CinematicEntry() {
  const router = useRouter();
  const [isMuted, setIsMuted] = useState(true);

  const stats = [
    { label: "Daily Visitors", value: "220,000+" },
    { label: "Experience", value: "World's Largest" },
    { label: "Retail Brands", value: "1,200+" },
  ];

  const handleEnter = () => {
    router.push("/dashboard");
  };

  return (
    <main className="relative h-screen w-full bg-black overflow-hidden font-sans selection:bg-[#C9A84C]/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80 z-10" />
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="h-full w-full object-cover contrast-[1.1]"
        >
          <source src="/video/intro.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "circOut" }}
        className="relative z-20 flex justify-between items-center
          /* mobile */
          p-5
          /* desktop */
          md:p-8"
      >
        <div className="flex items-center gap-3">
          <div
            className="h-px bg-[#C9A84C]
            w-6 md:w-12"
          />
          <span
            className="uppercase text-zinc-400 font-medium tracking-[0.3em]
            text-[8px] md:text-[10px]"
          >
            The Dubai Mall | Official Sales Deck
          </span>
        </div>

        <div className="flex gap-6 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-end ${i > 0 ? "hidden md:flex" : ""}`}
            >
              <span className="text-[8px] md:text-[9px] uppercase text-zinc-500 tracking-tighter">
                {stat.label}
              </span>
              <span className="text-[10px] md:text-[11px] text-white font-mono">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <div
        className="relative z-20 h-full flex flex-col justify-center items-center text-center
        px-6
        -mt-16 md:-mt-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center"
        >
          <motion.span
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0.2em", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-[#C9A84C] uppercase mb-4
              text-[10px] md:text-xs"
          >
            Where the world comes to life
          </motion.span>

          <h1
            className="font-black text-white uppercase tracking-tighter leading-none mb-6 md:mb-8
            text-[clamp(3rem,15vw,9rem)]"
          >
            The <br /> Epicenter
          </h1>

          <motion.button
            onClick={handleEnter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 bg-white text-black rounded-full font-bold uppercase tracking-widest cursor-pointer overflow-hidden transition-all
              px-7 py-3.5 text-[10px]
              md:px-10 md:py-5 md:text-xs md:gap-4"
          >
            <span className="relative z-10">Enter Experience</span>
            <ChevronRight className="relative z-10 w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-[#C9A84C] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute z-20 flex justify-between items-end
          bottom-6 left-6 right-6
          md:bottom-10 md:left-10 md:right-10"
      >
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="group flex items-center gap-2 md:gap-3 text-zinc-400 hover:text-white transition-colors"
        >
          <div className="p-1.5 md:p-2 rounded-full border border-zinc-800 group-hover:border-[#C9A84C] transition-colors">
            {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
          </div>
          <span
            className="uppercase tracking-widest
            text-[8px] md:text-[10px]"
          >
            {isMuted ? "Unmute" : "Mute"}
          </span>
        </button>

        <div
          className="uppercase tracking-widest text-zinc-600
          text-[7px] md:text-[9px]"
        >
          © 2026 Emaar Properties
        </div>
      </motion.div>

      <div
        className="absolute inset-0 z-10 border border-white/5 pointer-events-none
        m-2 md:m-4"
      />
    </main>
  );
}
