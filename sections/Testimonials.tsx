"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { Testimonial } from "@prisma/client";

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#E0F2FE] text-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what our clients have to say about working with us."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatar={testimonial.avatarUrl || "/1032569.png"}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

