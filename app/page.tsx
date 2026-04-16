import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { AboutPreview } from "@/components/sections/about-preview";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { Clients } from "@/components/sections/clients";
import { Stats } from "@/components/sections/stats";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <ServicesGrid />
      <AboutPreview />
      <CaseStudies />
      <Stats />
      <Testimonials />
      <CTASection />
      <ContactSection />
    </>
  );
}
