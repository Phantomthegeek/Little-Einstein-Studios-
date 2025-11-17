"use client";

import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { aboutContent } from "@/data/content";

export default function Mission() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <AnimatedReveal direction="up">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
            {aboutContent.mission.title}
          </h2>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
            {aboutContent.mission.description}
          </p>
        </AnimatedReveal>
      </div>
    </section>
  );
}

