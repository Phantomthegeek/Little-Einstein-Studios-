/**
 * Projects.jsx - Projects showcase component
 * 
 * Displays a grid of project cards with thumbnails, descriptions, tags, and ratings.
 * Enhanced with gradient overlays, better hover effects, and smooth animations.
 * 
 * @param {Array} projects - Array of project objects (id, title, short, tags, thumbnail, score)
 */

import React from "react";
import { motion } from "framer-motion";

const Projects = ({ projects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" className="mt-20 md:mt-32">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-center md:justify-between mb-10"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Showcasing our latest educational games
          </p>
        </div>
      </motion.div>

      {/* Responsive project grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {projects.map((p, index) => (
          <motion.article
            key={p.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            {/* Project thumbnail with gradient overlay */}
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={p.thumbnail}
                alt={p.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Rating badge */}
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                <span className="text-yellow-400">★</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {p.score}
                </span>
              </div>
            </div>
            
            {/* Project details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {p.short}
              </p>
              
              {/* Project tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              {/* View link */}
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Learn more
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

