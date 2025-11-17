"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { aboutContent } from "@/data/content";

export default function Workflow() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Process"
          title="How We Work"
          description="Our proven workflow ensures efficient delivery and exceptional results."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
          {aboutContent.workflow.map((step, index) => (
            <AnimatedReveal
              key={step.step}
              direction="up"
              delay={index * 0.1}
              className="relative"
            >
              {index < aboutContent.workflow.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple to-blue-electric z-0" />
              )}
              <div className="relative z-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue-electric mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

