"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BG from "@/images/luxury_parking.webp";

const operationalData = [
  { 
    title: "Opening Hours", 
    hook: "Maximum Availability", 
    data: [
      "Retailers: 10:00 AM - 11:00 PM (Mon-Thu)",
      "Retailers: 10:00 AM - 12:00 AM (Fri-Sun)",
      "Dining: 10:00 AM - 12:00 AM Daily",
      "Metro Link: 10:00 AM - 12:00 AM (Mon-Wed)",
      "Metro Link: 10:00 AM - 01:00 AM (Thu-Sat)"
    ],
    icon: "" 
  },
  { 
    title: "Getting Here", 
    hook: "Seamless Connectivity", 
    data: [
      "Burj Khalifa / Dubai Mall Metro Station",
      "Climate-controlled Metro Link Bridge",
      "Daily Bus & Coach Services",
      "Dedicated Taxi, Careem & Uber Ranks"
    ],
    icon: "" 
  },
  { 
    title: "Parking Zones", 
    hook: "Optimized Capacity", 
    data: [
      "Fashion Parking: 2,600 Slots",
      "Cinema Parking: 4,370 Slots",
      "Zabeel Parking: 2,141 Slots",
      "Fountain Views: 2,197 Slots"
    ],
    icon: "" 
  },
  { 
    title: "Paid Parking", 
    hook: "Salik Integration", 
    data: [
      "Weekdays: First 4 Hours Free",
      "Weekends: First 6 Hours Free",
      "Automated Salik Account Deductions",
      "Hassle-free Ticketless Entry & Exit"
    ],
    icon: "" 
  },
];

export default function PlanVisitPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden text-white font-sans">
      <Image src={BG} alt="Parking" fill className="object-cover opacity-20 brightness-75" priority />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/30 to-black z-0" />

      <AnimatePresence mode="wait">
        {!showContent ? (
          <motion.div 
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 flex items-center justify-center z-50 bg-black"
          >
            <motion.h1 
              initial={{ letterSpacing: "10px", opacity: 0 }}
              animate={{ letterSpacing: "25px", opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-2xl md:text-6xl uppercase font-thin text-center px-6"
            >
              Logistical Excellence
            </motion.h1>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-24 py-20"
          >
            <div className="w-full max-w-7xl mb-12 text-center md:text-left">
              <h2 className="text-[#c9a84c] text-3xl md:text-6xl uppercase tracking-[10px] md:tracking-[20px] leading-tight font-light">
                Plan Your <br/> Visit
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
              {operationalData.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 + 0.5, duration: 1 }}
                  className="bg-white/2 border border-white/5 backdrop-blur-3xl p-8 flex flex-col justify-between group hover:border-[#c9a84c]/20 transition-all duration-500"
                >
                  <div className="space-y-4">
                    <div className="text-3xl mb-4 text-[#c9a84c] opacity-60 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </div>
                    <span className="text-[#c9a84c] text-[9px] tracking-[4px] uppercase block">
                      {item.hook}
                    </span>
                    <h3 className="uppercase tracking-[5px] text-lg font-light text-white/90">
                      {item.title}
                    </h3>
                    
                    <div className="hidden group-hover:block h-px w-12 bg-white/20 my-5" />

                    <div className="space-y-3 pt-2">
                      {item.data.map((info) => (
                        <p key={info} className="text-[9px] text-white/40 tracking-[2px] uppercase">
                          {info}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-[7px] text-white/10 uppercase tracking-[2px] italic mt-8">
                    Data driven traffic management.
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="w-full max-w-7xl mt-16 border-t border-white/10 pt-8 flex justify-center text-center">
              <p className="text-white/30 text-[8px] tracking-[4px] uppercase max-w-2xl">
                Ensuring a seamless visitor flow from global destinations, maintaining a consistent, high-yield retail ecosystem 365 days a year.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8">
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
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </motion.button>
        </Link>
      </div>
    </main>
  );
}