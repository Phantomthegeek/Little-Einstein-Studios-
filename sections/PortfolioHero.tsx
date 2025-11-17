"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function PortfolioHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            tag="Portfolio"
            title="Our Work Speaks for Itself"
            description="Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence."
            align="center"
          />
        </motion.div>
      </div>
    </section>
  );
}

