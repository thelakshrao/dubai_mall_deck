"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DMLogo from "@/images/DMlogo.png";
import { Flag } from "lucide-react";

const navItems = [
  { name: "Why Us", path: "/dashboard/whyus", hasArrow: false },
  { name: "What's New", path: "/dashboard/whatnew", hasArrow: false },
  { name: "Shop", path: "/dashboard/shop", hasArrow: true },
  { name: "Dine", path: "/dashboard/food", hasArrow: false },
  { name: "Entertain", path: "/dashboard/entertain", hasArrow: false },
  { name: "Plan Your Visit", path: "/dashboard/visit", hasArrow: false }
];

const shopSubItems = [
  { name: "Shop", path: "/dashboard/shop" },
  { name: "Fashion", path:"/dashboard/shop/fashion"  },
  { name: "Games for Kids", path: "/dashboard/shop/kids" },
  { name: "Luxury Items", path: "/dashboard/shop/luxury" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); 
  const pathname = usePathname();

  const isInternalPage = 
    pathname.includes("/whyus") || 
    pathname.includes("/whatnew") || 
    pathname.includes("/shop") || 
    pathname.includes("/food") ||
    pathname.includes("/entertain") ||
    pathname.includes("/visit") ||
    pathname.includes("/tags") 
    ;

  return (
    <>
      <motion.div
        initial={isInternalPage ? { y: -100 } : { y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onMouseLeave={() => setHoveredItem(null)}
        className={`fixed top-0 left-0 right-0 z-60 h-20 flex items-center transition-all duration-500 ${
          isInternalPage ? "bg-transparent backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6">
          
          <div className="flex-1">
            {isInternalPage ? (
              <Link href="/dashboard">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative w-10 h-10 cursor-pointer"
                >
                  <Image src={DMLogo} alt="DM Logo" fill className="object-contain" />
                </motion.div>
              </Link>
            ) : (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative text-[10px] tracking-[3px] uppercase text-white/70 hover:text-white transition-colors h-5 w-24 cursor-pointer z-70"
              >
                <motion.span
                  className="absolute inset-0 flex items-center justify-start"
                  animate={{ y: isOpen ? -20 : 0, opacity: isOpen ? 0 : 1 }}
                >
                  Menu
                </motion.span>
                <motion.span
                  className="absolute inset-0 flex items-center justify-start"
                  animate={{ y: isOpen ? 0 : 20, opacity: isOpen ? 1 : 0 }}
                >
                  Close
                </motion.span>
              </button>
            )}
          </div>

          <div className="hidden md:flex items-center gap-1 relative z-70">
            <AnimatePresence mode="wait">
              {(isOpen || isInternalPage) && (
                <div className="flex items-center">
                  {navItems.map((item, i) => (
                    <div 
                      key={item.name} 
                      className="relative"
                      onMouseEnter={() => setHoveredItem(item.name)}
                    >
                      <Link href={item.path}>
                        <motion.div
                          className={`group flex items-center gap-1.5 px-3 py-2 text-[9px] tracking-[2px] uppercase transition-colors whitespace-nowrap cursor-pointer ${
                            pathname === item.path ? "text-[#c9a84c]" : "text-white/70 hover:text-white"
                          }`}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: isInternalPage ? 0.6 + i * 0.08 : i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {item.name}
                          {item.hasArrow && (
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="text-white/30 group-hover:text-[#c9a84c]">
                              <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                          )}
                        </motion.div>
                      </Link>

                      <AnimatePresence>
                        {item.name === "Shop" && hoveredItem === "Shop" && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 w-48 bg-black/90 backdrop-blur-md border border-white/10 py-4 px-5 flex flex-col gap-3"
                          >
                            {shopSubItems.map((sub) => (
                              <div key={sub.name}>
                                {sub.path ? (
                                  <Link 
                                    href={sub.path} 
                                    className="text-[9px] tracking-[2px] uppercase text-white/50 hover:text-[#c9a84c] transition-colors block"
                                    onClick={() => setHoveredItem(null)}
                                  >
                                    {sub.name}
                                  </Link>
                                ) : (
                                  <span className="text-[9px] tracking-[2px] uppercase text-white/20 cursor-default block">
                                    {sub.name}
                                  </span>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          {isInternalPage && (
            <div className="md:hidden flex items-center z-70">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col gap-1.5 p-2"
              >
                <motion.span animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white block" />
                <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-white block" />
                <motion.span animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white block" />
              </button>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none">
          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 0.2 }} className="bg-white/10 h-full" />
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden flex flex-col justify-center px-8 bg-[#0a0a0a]/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <Link key={item.name} href={item.path} onClick={() => setIsOpen(false)} className="block w-full">
                  <motion.div
                    className={`group flex items-center justify-between py-4 border-b border-white/5 ${
                        pathname === item.path ? "text-[#c9a84c]" : "text-white/70"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <span className="text-sm tracking-[2px] uppercase">{item.name}</span>
                    {item.hasArrow && (
                        <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                            <path d="M4 2.5L6.5 5L4 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}