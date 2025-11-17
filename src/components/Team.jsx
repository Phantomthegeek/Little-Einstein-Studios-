/**
 * Team.jsx - Team members section component
 * 
 * Displays team member cards with avatars, names, roles, and bios.
 * Enhanced with better card design, hover effects, and animations.
 * 
 * @param {Array} team - Array of team member objects (name, role, bio, avatar)
 */

import React from "react";
import { motion } from "framer-motion";

const Team = ({ team }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section id="team" className="mt-20 md:mt-32">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Meet the Team
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          The creative minds behind Little Einstein Studio
        </p>
      </motion.div>

      {/* Responsive grid: 1 column on mobile, 2 columns on tablet+ */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid sm:grid-cols-2 gap-6 md:gap-8"
      >
        {team.map((m, index) => (
          <motion.div
            key={m.name}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all rounded-3xl -z-10" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Team member avatar with border gradient */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                />
              </motion.div>

              {/* Team member info */}
              <div className="flex-1">
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  {m.name}
                </motion.h3>
                <div className="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {m.role}
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {m.bio}
                </p>
                
                {/* Social links placeholder */}
                <div className="mt-4 flex gap-3">
                  {["twitter", "github", "linkedin"].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={social}
                    >
                      <span className="text-xs">
                        {social === "twitter" && "🐦"}
                        {social === "github" && "💻"}
                        {social === "linkedin" && "💼"}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;

