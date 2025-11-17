"use client";

import { motion } from "framer-motion";

const confetti = Array.from({ length: 24 }).map((_, index) => ({
  id: index,
  delay: Math.random() * 1.5,
  x: Math.random() * 100,
  size: Math.random() * 8 + 4,
}));

export default function ConfettiDivider() {
  return (
    <div className="relative py-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-70" />
      <motion.div
        className="relative mx-auto max-w-4xl h-1 bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#A5F3FC] rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      {confetti.map((piece) => (
        <motion.span
          key={piece.id}
          className="absolute top-0 text-sm"
          style={{
            left: `${piece.x}%`,
          }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: [0, 1, 0], y: [0, -10, -20] }}
          viewport={{ once: true }}
          transition={{
            delay: piece.delay,
            duration: 1.2,
            repeat: 0,
          }}
        >
          ✨
        </motion.span>
      ))}
    </div>
  );
}

