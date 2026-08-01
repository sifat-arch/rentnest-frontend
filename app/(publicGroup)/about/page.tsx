import { CTASection } from "../_components/about/CTASection";
import { FAQSection } from "../_components/about/FAQSection";
import { HeroSection } from "../_components/about/HeroSection";
import { MissionVision } from "../_components/about/MissionVision";
import { StatisticsSection } from "../_components/about/StatisticsSection";
import { StorySection } from "../_components/about/StorySection";
import { TeamSection } from "../_components/about/TeamSection";
import { ValuesSection } from "../_components/about/ValuesSection";
import { WhyChooseUs } from "../_components/about/WhyChooseUs";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StorySection />
      <MissionVision />
      <WhyChooseUs />
      <ValuesSection />
      <TeamSection />
      <StatisticsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
