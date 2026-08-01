import { CTASection } from "../_components/services/CTASection";
import { FAQSection } from "../_components/services/FAQSection";
import { HeroSection } from "../_components/services/HeroSection";
import { LandlordServices } from "../_components/services/LandlordServices";
import { MainServices } from "../_components/services/MainServices";
import { ProcessSection } from "../_components/services/ProcessSection";
import { TenantServices } from "../_components/services/TenantServices";
import { WhyChooseSection } from "../_components/services/WhyChooseSection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MainServices />
      <TenantServices />
      <LandlordServices />
      <WhyChooseSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
