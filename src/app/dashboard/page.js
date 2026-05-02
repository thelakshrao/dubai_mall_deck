"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Entrance from "@/images/entrance_feature.jpg";
import Dashboardbg from "@/images/dashboard_bg.jpg";
import Luxury from "@/images/luxury_feature.jpg";

const sectionFade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
});

const textFade = (delay = 0) => ({
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const imgReveal = (delay = 0) => ({
  initial: { scale: 1.15, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Page() {
  return (
    <main
      className="w-screen bg-[#0a0a0a] text-[#f0ede8]
      /* mobile: scrollable, padded */
      min-h-screen overflow-y-auto p-3 flex flex-col gap-3
      /* desktop: locked to screen, no scroll */
      md:h-screen md:overflow-hidden md:p-4 md:gap-4"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@200;300;400;500;600&display=swap');
        :root { --display-font: 'Cormorant Garamond', serif; --sans-font: 'Plus Jakarta Sans', sans-serif; --accent: #c9a84c; }
        * { font-family: var(--sans-font); }
        .font-display { font-family: var(--display-font) !important; }
      `}</style>

      <div
        className="flex gap-3 md:gap-4
        /* mobile: column stack */
        flex-col
        /* desktop: side by side, 65% height */
        md:flex-row md:h-[65%]"
      >
        <motion.div
          {...sectionFade(0)}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden group flex
            /* mobile: height */
            h-[52vh]
            /* desktop: grow */
            md:h-auto md:flex-[2.5]"
        >
          <div className="absolute inset-0 flex z-0">
            <motion.div
              {...imgReveal(0.4)}
              className="relative flex-1 overflow-hidden border-r border-white/10"
            >
              <Image
                src={Entrance}
                fill
                className="object-cover opacity-40"
                alt="View 1"
                priority
              />
            </motion.div>
            <motion.div
              {...imgReveal(0.5)}
              className="relative flex-1 overflow-hidden border-r border-white/10"
            >
              <Image
                src={Dashboardbg}
                fill
                className="object-cover opacity-30"
                alt="View 2"
              />
            </motion.div>
            <motion.div
              {...imgReveal(0.6)}
              className="relative flex-1 overflow-hidden"
            >
              <Image
                src={Luxury}
                fill
                className="object-cover opacity-20"
                alt="View 3"
              />
            </motion.div>
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/20 to-transparent z-10" />

          <div className="relative z-20 w-full flex flex-col justify-center items-center text-center p-6 md:p-12">
            <motion.div {...textFade(1.0)} className="mt-8 mb-1 md:mb-4">
              <span className="text-[9px] md:text-[10px] tracking-[0.6em] uppercase text-[#c9a84c] font-bold">
                The Epicenter of Luxury
              </span>
            </motion.div>
            <motion.h1
              {...textFade(1.2)}
              className="font-display text-4xl md:text-4xl font-light mb-4 md:mb-6 leading-tight"
            >
              Digital <br /> <span className="italic">Introduction</span>
            </motion.h1>
            <motion.p
              {...textFade(1.4)}
              className="max-w-xs md:max-w-xl text-white/60 font-light leading-relaxed mb-6 md:mb-8 text-xs md:text-sm"
            >
              Step into the world's premier retail destination. A unique
              exploration designed to showcase the scale, luxury, and unmatched
              opportunity of The Dubai Mall.
            </motion.p>
            <motion.div {...textFade(1.6)}>
              <Link
                href="dashboard/whyus"
                className="relative z-50 inline-block"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#c9a84c",
                    color: "#000",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 md:px-14 py-3 md:py-5 rounded-full bg-white text-black text-[10px] md:text-[12px] tracking-[0.3em] uppercase font-bold transition-all shadow-2xl cursor-pointer"
                >
                  Set Sail →
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          {...sectionFade(0.2)}
          className="hidden md:flex flex-1 rounded-3xl bg-[#121214] border border-white/5 pt-30 p-10 flex-col justify-between relative overflow-hidden"
        >
          <div className="z-10">
            <motion.span
              {...textFade(0.8)}
              className="text-[9px] tracking-widest uppercase text-white/30"
            >
              Location
            </motion.span>
            <motion.p
              {...textFade(1.0)}
              className="font-display text-3xl mt-2 italic"
            >
              Downtown Dubai
            </motion.p>
          </div>
          <div className="z-10">
            <motion.div
              {...textFade(1.2)}
              className="font-display text-8xl font-light leading-none"
            >
              105
              <span className="text-3xl text-[#c9a84c] align-top mt-4 inline-block">
                M+
              </span>
            </motion.div>
            <motion.p
              {...textFade(1.4)}
              className="text-[9px] tracking-widest uppercase text-white/40 mt-4"
            >
              Annual Global Visitors
            </motion.p>
            <div className="h-px w-full bg-white/10 mt-6 relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "81%" }}
                transition={{ duration: 1.5, delay: 1.6 }}
                className="absolute top-0 left-0 h-full bg-[#c9a84c]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className="flex gap-3 md:gap-4
        flex-col
        md:flex-row md:h-[35%]"
      >
        <motion.div
          {...sectionFade(0.3)}
          className="flex-1 rounded-2xl md:rounded-3xl bg-[#121214] border border-white/5 p-6 md:p-8 flex flex-col justify-center text-center"
        >
          <motion.h2
            {...textFade(1.2)}
            className="font-display text-2xl md:text-4xl mb-2 md:mb-4 italic"
          >
            "Every journey is unique"
          </motion.h2>
          <motion.p
            {...textFade(1.4)}
            className="text-[9px] text-white/40 uppercase tracking-[0.2em]"
          >
            Excellence in Design & Discovery
          </motion.p>
        </motion.div>

        <motion.div
          {...sectionFade(0.4)}
          className="hidden md:block flex-[1.5] relative rounded-3xl overflow-hidden group"
        >
          <Image
            src={Dashboardbg}
            alt="Dashboard Background"
            fill
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-between px-10">
            <div className="z-20">
              <motion.span
                {...textFade(1.3)}
                className="text-[9px] tracking-widest uppercase text-[#c9a84c]"
              >
                Official Sales Deck 2026
              </motion.span>
              <motion.p
                {...textFade(1.5)}
                className="font-display text-3xl mt-2"
              >
                Crafted for the Extraordinary
              </motion.p>
            </div>
            <motion.div
              {...textFade(1.7)}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center font-display text-2xl hover:bg-[#c9a84c] hover:text-black transition-all cursor-pointer z-20"
            >
              ✦
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          {...sectionFade(0.5)}
          className="flex-1 rounded-2xl md:rounded-3xl bg-[#c9a84c] p-6 md:p-8 flex flex-col justify-between text-black"
        >
          <div className="flex justify-between items-start">
            <motion.span
              {...textFade(1.2)}
              className="text-[9px] font-bold tracking-widest uppercase opacity-60"
            >
              Status
            </motion.span>
            <motion.span {...textFade(1.3)} className="text-xs font-bold">
              2026
            </motion.span>
          </div>
          <motion.p
            {...textFade(1.5)}
            className="font-display text-3xl md:text-4xl leading-tight"
          >
            Live <br /> Exploration
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}
