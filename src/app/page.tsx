import Hero from "./_components/Hero";
import { Meteors } from "./_components/Meteors";
import TrustedByLogo from "./_components/TrustedByLogo";
import PowerFeatures from "./_components/PowerFeatures";
import SeamlessIntegrations from "./_components/SeamlessIntegrations";
import PricingSection from "./_components/PricingSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import CTASection from "./_components/CTASection";

export default function Home() {
  return (
    <>
      <div className="size-full relative overflow-hidden font-interTight">
        {/* Meteor effect overlay */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <Meteors number={30} />
        </div>
        <Hero />
      </div>
      <TrustedByLogo />
      <PowerFeatures />
      <SeamlessIntegrations />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
