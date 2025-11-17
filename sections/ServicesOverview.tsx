"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import Button from "@/components/ui/Button";
import { Service } from "@prisma/client";

export default function ServicesOverview({ services }: { services: Service[] }) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EFF6FF] to-white text-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Services"
          title="Comprehensive Digital Solutions"
          description="From concept to launch, we provide end-to-end services to bring your digital vision to life."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <AnimatedReveal
              key={service.id}
              direction="up"
              delay={index * 0.1}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow border border-white/80"
            >
              <h3 className="text-2xl font-display font-bold text-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-charcoal/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-charcoal mb-3">
                  Key Deliverables:
                </h4>
                <ul className="space-y-2">
                  {(service.deliverables as string[]).slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-charcoal/70">
                      <span className="text-purple mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                href={`/services#${service.slug}`}
                variant="outline"
                className="border-2 border-charcoal/20"
              >
                Learn More
              </Button>
            </AnimatedReveal>
          ))}
        </div>

        <div className="text-center">
          <Button href="/services" showArrow>
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

