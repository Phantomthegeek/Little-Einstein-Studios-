/**
 * Hero.jsx - Hero/landing section component
 * 
 * Main landing section with headline, call-to-action buttons, stats, and hero image.
 * Uses Framer Motion for engaging entrance animations and hover effects.
 * 
 * @param {Object} hero - Hero section content (headline, sub, ctaPrimary, ctaSecondary, illustration)
 * @param {Function} setActive - Function to update active navigation when CTAs are clicked
 */

import React from "react";
import { motion } from "framer-motion";

const Hero = ({ hero, setActive }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(sectionId === "projects" ? "Projects" : "Contact");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center py-12 md:py-20"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
      {/* Left column: Headline, description, CTAs, and stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated headline with gradient text */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {hero.headline.split("—")[0]}
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              {hero.headline.includes("—") ? "— " + hero.headline.split("—")[1] : ""}
            </span>
        </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            {hero.sub}
          </motion.p>

        {/* Call-to-action buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            {/* Primary CTA - links to projects section */}
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 px-8 py-4 rounded-xl font-semibold text-gray-900 shadow-lg hover:shadow-xl transition-all"
          >
            {hero.ctaPrimary}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>
          {/* Secondary CTA - links to contact section */}
            <motion.a
            href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border-2 border-gray-300 dark:border-gray-600 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {hero.ctaSecondary}
            </motion.a>
          </motion.div>

          {/* Stats grid - displays key metrics with animations */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            {[
              { value: "3", label: "Live games" },
              { value: "10k+", label: "Downloads" },
              { value: "4.7★", label: "Avg rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
        </div>
                <div className="mt-1 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
          </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column: Hero illustration with enhanced animations */}
      <motion.div
          initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02, rotate: 2 }}
          className="relative w-full"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 z-10" />
        <img
          src={hero.illustration}
              alt="Little Einstein Studio - Educational games for kids"
              className="w-full h-auto rounded-3xl relative z-0"
            />
          </div>
          {/* Floating decorative elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl opacity-20 blur-xl -z-10"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-20 blur-xl -z-10"
        />
      </motion.div>
      </div>
    </section>
  );
};

export default Hero;

