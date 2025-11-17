"use client";

import AnimatedReveal from "@/components/ui/AnimatedReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Experiment } from "@prisma/client";

export default function ExperimentShowcase({
  experiments,
}: {
  experiments: Experiment[];
}) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F0F9FF] via-[#FFF4EA] to-[#FBE7FF] text-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Lab Experiments"
          title="Fresh prototypes from the Little Einstein lab"
          description="Mini tools, sensory toys, and research sprints we’re currently shipping."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiments.map((experiment, index) => (
            <AnimatedReveal
              key={experiment.id}
              direction="up"
              delay={index * 0.1}
              className="bg-white rounded-3xl p-6 shadow-xl border border-white/70 flex flex-col gap-4"
            >
              <div className="rounded-2xl overflow-hidden h-48 bg-gradient-to-br from-purple/20 to-blue/20 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={experiment.image}
                  alt={experiment.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">
                  {experiment.impact}
                </p>
                <h3 className="text-xl font-display font-bold text-charcoal mt-2">
                  {experiment.name}
                </h3>
                <p className="text-sm text-charcoal/70 mt-3 leading-relaxed">
                  {experiment.description}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

