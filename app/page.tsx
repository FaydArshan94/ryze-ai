"use client";
import ProblemSolution from "@/components/sections/ProblemSolution";
import HeroSection from "../components/sections/Hero";
import React from "react";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import FinalCTA from "@/components/sections/CTA";
import Navbar from "@/components/layout/Navbar";
import MarqueeSection from "@/components/sections/Marquee";
import AIFlowSection from "@/components/sections/AIFlowSection";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const page = () => {
  return (
    <div>
      <SmoothScroll />
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <AIFlowSection />
      <MarqueeSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default page;
