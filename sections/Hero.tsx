"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteContent } from "@/data/content";
import MascotBadge from "@/components/ui/MascotBadge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-candy bg-noise-soft">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
          className="absolute -top-20 -left-10 w-72 h-72 bg-gradient-to-br from-[#C4B5FD] to-[#FB7185] rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, delay: 1 }}
          className="absolute top-32 right-10 w-64 h-64 bg-gradient-to-br from-[#6EE7B7] to-[#3B82F6] rounded-full blur-2xl opacity-40"
        />
        <motion.span
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="absolute bottom-10 left-12 text-6xl opacity-50"
        >
          ✨
        </motion.span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 flex flex-col items-center text-center gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-white/90 backdrop-blur-md text-xs sm:text-sm font-semibold text-gradient-warm shadow-glow-soft hover-lift"
        >
          <Sparkles size={16} />
          Playful products for curious minds
        </motion.div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-charcoal leading-tight">
            {siteContent.hero.headline.split(". ").map((line, i, arr) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="block"
              >
                {line}
                {i < arr.length - 1 ? "." : ""}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-charcoal/70 leading-relaxed"
          >
            {siteContent.hero.description}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button
              href="/contact"
              showArrow
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-[#FF7FAB] via-[#FBBF24] to-[#4ADE80] text-charcoal"
              sparkle
            >
              {siteContent.hero.cta.primary}
            </Button>
            <Button
              href="/portfolio"
              variant="outline"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-charcoal/20 bg-white/80"
              sparkle
            >
              {siteContent.hero.cta.secondary}
            </Button>
          </motion.div>

          <MascotBadge
            emoji="🤖"
            title="pixel buddy"
            message="I guard the fun meter—expect stickers, singalongs, and surprise prototypes."
            accent="orange"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-10"
        >
          {[
            { label: "Playful launches", value: "28" },
            { label: "Mini users smiling", value: "120K+" },
            { label: "Brainstorms / week", value: "05" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-glow-soft border border-purple/10 hover:border-purple/20 hover-lift transition-all duration-300"
            >
              <p className="text-2xl sm:text-3xl font-display font-bold text-gradient-purple">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-charcoal/60 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

