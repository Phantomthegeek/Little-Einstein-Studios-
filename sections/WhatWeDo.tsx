"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { Code, Palette, Target } from "lucide-react";
import { Service } from "@prisma/client";

const defaultIcons = [Code, Palette, Target];

export default function WhatWeDo({ services }: { services: Service[] }) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="What we do"
          title="Lab services built for playful products"
          description="We shape ideas into colourful experiences with research, rapid prototyping, and production builds."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => {
            const IconComponent = defaultIcons[index % defaultIcons.length];
            const deliverables = (service.deliverables as string[]) || [];

            return (
              <AnimatedReveal
                key={service.id}
                direction="up"
                delay={index * 0.1}
                className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-purple/5 to-blue/5 shadow-glow-soft hover:shadow-glow-purple hover:-translate-y-2 transition-all duration-300 border border-purple/10 hover:border-purple/20 hover-lift"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple/10 to-blue/10 shadow-glow-soft flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-glow-purple transition-all duration-300">
                  <IconComponent size={28} className="sm:w-8 sm:h-8 text-gradient-purple" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-charcoal mb-2 group-hover:text-gradient-purple transition-all duration-300">
                  {service.name}
                </h3>
                <p className="text-charcoal/70 leading-relaxed font-playful mb-4">
                  {service.description}
                </p>
                <ul className="text-sm text-charcoal/60 space-y-1">
                  {deliverables.slice(0, 3).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

