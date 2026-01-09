"use client";
import ProblemSolution from "@/components/sections/ProblemSolution";
import HeroSection from "../components/sections/Hero";
import React from "react";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import FinalCTA from "@/components/sections/CTA";
import MarqueeSection from "@/components/sections/Marquee";
import AIFlowSection from "@/components/sections/AIFlowSection";



const page = () => {
  return (
    <div className="overflow-hidden">

      <HeroSection />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <AIFlowSection />
      <MarqueeSection />
      <FinalCTA />
    </div>
  );
};

export default page;
