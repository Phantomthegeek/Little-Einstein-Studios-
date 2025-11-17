/**
 * Header.jsx - Site header component
 * 
 * Displays logo, navigation menu, dark mode toggle, and contact button.
 * Includes fully functional mobile menu with smooth animations.
 * 
 * @param {Object} brand - Brand information (logoText, tagline)
 * @param {Array} nav - Navigation items array
 * @param {string} active - Currently active navigation item
 * @param {Function} setActive - Function to update active navigation
 * @param {boolean} dark - Dark mode state
 * @param {Function} setDark - Function to toggle dark mode
 * @param {Object} contact - Contact information (email)
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ brand, nav, active, setActive, dark, setDark, contact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (item) => {
    setActive(item);
    setMobileMenuOpen(false);
    const sectionId = item === "Home" ? "hero" : item.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto p-4 md:p-6 flex items-center justify-between">
        {/* Logo section with gradient badge */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("Home");
          }}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 flex items-center justify-center shadow-lg"
          >
            <span className="text-lg font-extrabold text-white">LE</span>
          </motion.div>
          <div>
            <div className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {brand.logoText}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
              {brand.tagline}
            </div>
          </div>
        </a>

        {/* Desktop navigation menu */}
        <nav className="hidden md:flex gap-2 items-center">
          {nav.map((n) => (
            <button
              key={n}
              onClick={() => handleNavClick(n)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                active === n
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {n}
              {active === n && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right side controls: dark mode toggle, contact button, mobile menu */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
            className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {dark ? "☀️" : "🌙"}
          </motion.button>
          
          {/* Contact button (hidden on mobile) */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${contact.email}`}
            className="hidden md:inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
          >
            Contact
          </motion.a>
          
          {/* Mobile hamburger menu */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 6 : 0,
                }}
                className="h-0.5 w-full bg-gray-900 dark:bg-gray-100 rounded"
              />
              <motion.span
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                className="h-0.5 w-full bg-gray-900 dark:bg-gray-100 rounded"
              />
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -6 : 0,
                }}
                className="h-0.5 w-full bg-gray-900 dark:bg-gray-100 rounded"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
              {nav.map((n, index) => (
                <motion.button
                  key={n}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(n)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active === n
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {n}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: nav.length * 0.1 }}
                href={`mailto:${contact.email}`}
                className="mt-2 px-4 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center"
              >
                Contact Us
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

