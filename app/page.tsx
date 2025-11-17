import Hero from "@/sections/Hero";
import WhatWeDo from "@/sections/WhatWeDo";
import FeaturedProjects from "@/sections/FeaturedProjects";
import ServicesOverview from "@/sections/ServicesOverview";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Testimonials from "@/sections/Testimonials";
import CTAFooter from "@/sections/CTAFooter";
import TeamSpotlight from "@/sections/TeamSpotlight";
import StudioCulture from "@/sections/StudioCulture";
import ConfettiDivider from "@/components/ui/ConfettiDivider";
import ExperimentShowcase from "@/sections/ExperimentShowcase";
import { getExperiments, getServices, getTestimonials } from "@/lib/data";

export default async function Home() {
  const [services, experiments, testimonials] = await Promise.all([
    getServices(),
    getExperiments(),
    getTestimonials(),
  ]);

  return (
    <>
      <Hero />
      <ConfettiDivider />
      <WhatWeDo services={services} />
      <FeaturedProjects />
      <ConfettiDivider />
      <ServicesOverview services={services} />
      <ExperimentShowcase experiments={experiments} />
      <WhyChooseUs />
      <Testimonials testimonials={testimonials} />
      <TeamSpotlight />
      <StudioCulture />
      <CTAFooter />
    </>
  );
}

