"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutHero() {
  return (
    <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFF2CC] via-[#FFE0F0] to-[#DFF2FF] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
          className="absolute -top-20 -left-10 w-72 h-72 bg-gradient-to-br from-[#C4B5FD] to-[#FB7185] rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, delay: 1 }}
          className="absolute top-32 right-10 w-64 h-64 bg-gradient-to-br from-[#6EE7B7] to-[#3B82F6] rounded-full blur-2xl opacity-30"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            tag="About"
            title="We're a creative tech company pushing boundaries in digital innovation"
            description="Combining technical expertise with creative vision to deliver solutions that exceed expectations."
            align="center"
          />
        </motion.div>
      </div>
    </section>
  );
}

