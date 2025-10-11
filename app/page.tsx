// app/page.tsx
"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import Skills from "@/components/Skill";
import Skill from "@/components/Skill";
import Education from "@/components/education";
import Project from "@/components/Projects";
import Contact from "@/components/Contact";
import Activities from "@/components/Activities";
import Footer from "@/components/Footer";
import DynamicHeroBG from "@/components/DynamicHeroBG";
import Infor from "@/components/infor";

export default function HomePage() {
  return (
    
    <div className="relative min-h-screen bg-black">
      
      {/* background glows */}
      <DynamicHeroBG /> 
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] animate-float" />
        <div
          className="absolute bottom-20 right-10 h-[700px] w-[700px] rounded-full bg-accent/15 blur-[120px] animate-float"
          style={{ animationDelay: "5s", animationDuration: "25s" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chart-3/10 blur-[100px] animate-float"
          style={{ animationDelay: "10s", animationDuration: "30s" }}
        />
      </div>

      {/* NAV */}
      <Navigation />
      {/* HERO */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <Infor /> 
        </div>
        
        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/20 p-2">
            <div className="h-3 w-1.5 animate-pulse rounded-full bg-muted-foreground/40" />
          </div>
        </div>
      </section>
      <AboutSection />
      <Skill />
      <Education />
      <Project />
      <Activities /> 
      <Contact />
      <Footer/>

    </div>
  );
}
