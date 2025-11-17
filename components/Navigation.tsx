"use client";

import Link from "next/link";
import NavLinks from "./navigation/NavLinks";
import MobileMenu from "./navigation/MobileMenu";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple via-purple-light to-blue-electric flex items-center justify-center text-white font-bold text-lg shadow-glow-purple group-hover:scale-110 group-hover:shadow-glow-blue transition-all duration-300 group-hover:rotate-3">
              LE
            </div>
            <span className="font-display text-lg sm:text-xl font-bold text-gradient-purple hidden sm:inline-block group-hover:scale-105 transition-transform duration-300">
              Little Einstein
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-purple via-purple-light to-blue-electric text-white rounded-xl font-medium hover:shadow-glow-purple transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Start a Project
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
