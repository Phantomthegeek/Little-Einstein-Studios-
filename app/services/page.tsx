import type { Metadata } from "next";
import ServicesHero from "@/sections/ServicesHero";
import ServiceDetail from "@/sections/ServiceDetail";
import { getServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Little Einstein Studio",
  description:
    "Comprehensive digital solutions including app development, UI/UX design, brand design, and digital strategy.",
  openGraph: {
    title: "Services | Little Einstein Studio",
    description: "Our comprehensive digital solutions and services.",
  },
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <ServicesHero />
      {services.map((service, index) => (
        <ServiceDetail
          key={service.id}
          service={{
            id: service.id,
            title: service.name,
            description: service.description,
            deliverables: service.deliverables as string[],
            tools: service.tools as string[],
            cta: service.highlight ?? "Plan a sprint",
            // Additional fields can be mapped here
          }}
          isEven={index % 2 === 0}
        />
      ))}
    </>
  );
}

