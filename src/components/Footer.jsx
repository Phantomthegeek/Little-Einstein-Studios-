/**
 * Footer.jsx - Site footer component
 * 
 * Enhanced footer with social links, copyright notice, and brand information.
 * Year is dynamically generated.
 * 
 * @param {Object} brand - Brand information (name, socials)
 */

import React from "react";
import { motion } from "framer-motion";

const Footer = ({ brand }) => {
  const socialLinks = [
    { name: "Twitter", url: brand.socials?.twitter, icon: "🐦" },
    { name: "Instagram", url: brand.socials?.instagram, icon: "📸" },
    { name: "GitHub", url: brand.socials?.github, icon: "💻" },
  ];

  return (
    <footer className="mt-20 md:mt-32 pt-12 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 flex items-center justify-center shadow-lg">
                <span className="text-lg font-extrabold text-white">LE</span>
              </div>
              <div className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {brand.logoText || brand.name}
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learning games & creative digital experiences for kids aged 5–8
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link === "Home" ? "hero" : link.toLowerCase()}`}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {brand.name} — Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block"
            >
              ❤️
            </motion.span>
            {" "}for kids.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

