"use client";

import { Navigation }      from "@/components/navigation";
import IntroScreen          from "@/components/IntroScreen";
import ScrollProgress       from "@/components/ScrollProgress";
import HeroSection          from "@/components/sections/HeroSection";
import StatsSection         from "@/components/sections/StatsSection";
import AboutSection         from "@/components/sections/AboutSection";
import ExperienceSection    from "@/components/sections/ExperienceSection";
import SkillsSection        from "@/components/sections/SkillsSection";
import ProjectsSection      from "@/components/sections/ProjectsSection";
import ActivitiesSection    from "@/components/sections/ActivitiesSection";
import ContactSection       from "@/components/sections/ContactSection";
import EducationSection     from "@/components/sections/EducationSection";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <IntroScreen />
      <div className="relative" style={{ backgroundColor: "#0E0E0C" }}>
        <Navigation />
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ActivitiesSection />
        <EducationSection />
        <ContactSection />
      </div>
    </>
  );
}
