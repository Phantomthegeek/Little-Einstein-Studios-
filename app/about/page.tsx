import type { Metadata } from "next";
import AboutHero from "@/sections/AboutHero";
import Mission from "@/sections/Mission";
import WhyUs from "@/sections/WhyUs";
import Values from "@/sections/Values";
import Workflow from "@/sections/Workflow";

export const metadata: Metadata = {
  title: "About Us | Little Einstein Studio",
  description:
    "Learn about Little Einstein Studio's mission, values, and approach to creating exceptional digital experiences.",
  openGraph: {
    title: "About Us | Little Einstein Studio",
    description:
      "Learn about Little Einstein Studio's mission, values, and approach.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <WhyUs />
      <Values />
      <Workflow />
    </>
  );
}

