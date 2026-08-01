import HeroSection   from "@/components/sections/HeroSection";
import StatsSection  from "@/components/sections/StatsSection";
import AboutSection  from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SkillsSection />
    </>
  );
}
