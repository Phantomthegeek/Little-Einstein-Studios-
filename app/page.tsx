import Hero from "@/sections/Hero";
import WhatWeDo from "@/sections/WhatWeDo";
import FeaturedProjects from "@/sections/FeaturedProjects";
import ServicesOverview from "@/sections/ServicesOverview";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Testimonials from "@/sections/Testimonials";
import CTAFooter from "@/sections/CTAFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <FeaturedProjects />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CTAFooter />
    </>
  );
}

