"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navItems } from "./config";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu when pathname changes (navigation occurs)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="md:hidden p-2 rounded-xl border border-purple/20 bg-white/90 hover:bg-purple/5 hover:border-purple/30 shadow-sm transition-all duration-200 active:scale-95"
      >
        {open ? <X size={22} className="text-purple" /> : <Menu size={22} className="text-charcoal" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed top-20 left-0 right-0 md:hidden bg-white/95 backdrop-blur-xl border-b border-purple/10 shadow-glow-soft z-50"
            >
              <div className="px-4 sm:px-6 py-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm sm:text-base font-medium font-playful tracking-wide uppercase transition-all duration-200",
                        pathname === item.href
                          ? "text-purple bg-purple/10 border border-purple/20"
                          : "text-charcoal/70 hover:text-purple hover:bg-purple/5"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-4 mt-4 border-t border-gray-200"
                >
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-purple via-purple-light to-blue-electric text-white rounded-xl text-center font-semibold hover:shadow-glow-purple transition-all duration-300 active:scale-95"
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

