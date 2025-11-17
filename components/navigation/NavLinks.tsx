"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navItems } from "./config";
import { cn } from "@/lib/utils";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "text-xs sm:text-sm font-medium transition-all duration-300 relative tracking-wide uppercase text-[11px] font-playful px-2 py-1 rounded-lg",
            pathname === item.href
              ? "text-purple bg-purple/10 font-semibold"
              : "text-charcoal/70 hover:text-purple hover:bg-purple/5"
          )}
        >
          {item.name}
          {pathname === item.href && (
            <motion.div
              layoutId="activeNav"
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple to-blue-electric"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </Link>
      ))}
    </>
  );
}

