"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteContent } from "@/data/content";
import MascotBadge from "@/components/ui/MascotBadge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF2CC] via-[#FFE0F0] to-[#DFF2FF]">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/80 text-sm font-semibold text-pink-500 shadow-lg"
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
              className="px-8 py-4 text-lg bg-gradient-to-r from-[#FF7FAB] via-[#FBBF24] to-[#4ADE80] text-charcoal"
              sparkle
            >
              {siteContent.hero.cta.primary}
            </Button>
            <Button
              href="/portfolio"
              variant="outline"
              className="border-2 border-charcoal/20 bg-white/80"
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
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/60"
            >
              <p className="text-3xl font-display font-bold text-charcoal">
                {stat.value}
              </p>
              <p className="text-sm uppercase tracking-[0.2em] text-charcoal/60 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

