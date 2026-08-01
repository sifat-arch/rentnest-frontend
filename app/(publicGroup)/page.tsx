import { CTASection } from "./_components/home/CTASection";
import { FAQSection } from "./_components/home/FAQSection";
import { FeaturedProperties } from "./_components/home/FeaturedProperties";
import { Footer } from "./_components/home/Footer";
import { HeroSection } from "./_components/home/HeroSection";
import { HowItWorks } from "./_components/home/HowItWorks";
import { Testimonials } from "./_components/home/Testimonials";
import { WhyChooseSection } from "./_components/home/WhyChooseSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WhyChooseSection />
      <FeaturedProperties />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
