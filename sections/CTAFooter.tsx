"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import MascotBadge from "@/components/ui/MascotBadge";

export default function CTAFooter() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF1F2] to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple to-blue-electric rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden bg-noise-soft"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's work together to bring your digital vision to life. Get in
              touch and let's discuss how we can help.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  href="/contact"
                  variant="secondary"
                  className="bg-white text-purple hover:bg-gray-100"
                  showArrow
                  sparkle
                >
                  Get Started
                </Button>
                <Button
                  href="/portfolio"
                  variant="ghost"
                  className="text-white border-white hover:bg-white/10"
                  sparkle
                >
                  View Our Work
                </Button>
              </div>
              <MascotBadge
                emoji="🚀"
                title="launch concierge"
                message="Ping us for roadmaps, kickoff kits, or sticker bombs before go-live."
                accent="mint"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

