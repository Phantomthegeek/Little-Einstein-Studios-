"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import MascotBadge from "@/components/ui/MascotBadge";

export default function CTAFooter() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF1F2] to-white text-charcoal">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center text-charcoal relative overflow-hidden shadow-2xl border border-gray-100"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-blue-electric/5 rounded-3xl" />
          <div className="relative z-10">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-charcoal">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-charcoal/80 max-w-2xl mx-auto px-2">
              Let's work together to bring your digital vision to life. Get in
              touch and let's discuss how we can help.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  href="/contact"
                  variant="secondary"
                  className="bg-gradient-to-r from-purple to-blue-electric text-white hover:opacity-90"
                  showArrow
                  sparkle
                >
                  Get Started
                </Button>
                <Button
                  href="/portfolio"
                  variant="ghost"
                  className="text-charcoal border-charcoal/20 hover:bg-charcoal/5"
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

