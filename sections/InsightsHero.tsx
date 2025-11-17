"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function InsightsHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            tag="Insights"
            title="Thoughts, Insights & Ideas"
            description="Stay updated with our latest insights on app development, design, strategy, and digital innovation."
            align="center"
          />
        </motion.div>
      </div>
    </section>
  );
}

