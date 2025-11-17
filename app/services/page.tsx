import type { Metadata } from "next";
import ServicesHero from "@/sections/ServicesHero";
import ServiceDetail from "@/sections/ServiceDetail";
import { servicesContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Services | Little Einstein Studio",
  description:
    "Comprehensive digital solutions including app development, UI/UX design, brand design, and digital strategy.",
  openGraph: {
    title: "Services | Little Einstein Studio",
    description: "Our comprehensive digital solutions and services.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      {servicesContent.map((service, index) => (
        <ServiceDetail
          key={service.id}
          service={service}
          isEven={index % 2 === 0}
        />
      ))}
    </>
  );
}

