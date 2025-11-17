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

export default function Home() {
  return (
    <>
      <Hero />
      <ConfettiDivider />
      <WhatWeDo />
      <FeaturedProjects />
      <ConfettiDivider />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <TeamSpotlight />
      <StudioCulture />
      <CTAFooter />
    </>
  );
}

