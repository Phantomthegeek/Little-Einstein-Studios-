/**
 * About.jsx - About section component
 * 
 * Displays studio information, mission statement, and core values with icons and animations.
 * 
 * @param {Object} about - About section content (title, body, values array)
 */

import React from "react";
import { motion } from "framer-motion";

const valueIcons = {
  "Child-first design": "👶",
  "Research-driven": "🔬",
  "Accessible & inclusive": "♿",
  "Fun-first learning": "🎮",
};

const About = ({ about }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  };

  return (
    <section
      id="about"
      className="mt-20 md:mt-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative rounded-3xl p-8 md:p-12"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {about.title}
          </h2>
          <div className="mt-2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* Body text */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl"
        >
          {about.body}
        </motion.p>

        {/* Core values displayed as enhanced cards */}
        <motion.div
          variants={itemVariants}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {about.values.map((v, index) => (
            <motion.div
              key={v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all shadow-md hover:shadow-xl"
            >
              {/* Icon */}
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                {valueIcons[v] || "✨"}
              </div>
              
              {/* Value text */}
              <div className="font-semibold text-gray-900 dark:text-white">
                {v}
              </div>
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

