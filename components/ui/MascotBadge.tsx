"use client";

import { motion } from "framer-motion";

interface MascotBadgeProps {
  emoji?: string;
  title: string;
  message: string;
  accent?: "orange" | "mint" | "lilac";
}

const accentMap = {
  orange: "from-[#FED7AA] to-[#FDBA74]",
  mint: "from-[#6EE7B7] to-[#A5F3FC]",
  lilac: "from-[#DDD6FE] to-[#FBCFE8]",
};

export default function MascotBadge({
  emoji = "🤖",
  title,
  message,
  accent = "lilac",
}: MascotBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 backdrop-blur border border-white/80 rounded-3xl p-4 sm:p-5 shadow-2xl flex items-center gap-3 sm:gap-4 w-full sm:max-w-sm"
    >
      <div
        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${accentMap[accent]} flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0`}
      >
        {emoji}
      </div>
      <div className="text-left">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50 font-playful">
          {title}
        </p>
        <p className="text-sm text-charcoal/80 leading-relaxed">{message}</p>
      </div>
    </motion.div>
  );
}

