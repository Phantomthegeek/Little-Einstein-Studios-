"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteContent } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-blue-electric/5 to-transparent" />

      <div className="max-w-7xl mx-auto w-full py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple/10 text-purple rounded-full text-sm font-medium mb-8"
          >
            <Sparkles size={16} />
            Creative Tech Agency
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
            {siteContent.hero.headline.split(". ").map((line, i, arr) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="block"
              >
                {line}
                {i < arr.length - 1 && "."}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xl md:text-2xl text-charcoal/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {siteContent.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/contact" showArrow>
              {siteContent.hero.cta.primary}
            </Button>
            <Button href="/portfolio" variant="outline">
              {siteContent.hero.cta.secondary}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

