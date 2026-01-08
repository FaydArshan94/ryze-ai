"use client";

import PlansHero from "./../../components/plans/PlansHero";
import PlanTiers from "@/components/plans/PlanTiers";
import AllPlansFeatures from "@/components/plans/AllPlanFeatures";
import HowPricingWorks from "@/components/plans/HowPricingWorks";
import ROISection from "@/components/plans/ROISection";
import SoftComparison from "@/components/plans/SoftComparison";
import FinalCTA from "@/components/plans/PlanCta";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PlansPage() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <PlansHero />
      <PlanTiers />
      <AllPlansFeatures />
      <HowPricingWorks />
      <ROISection />
      <SoftComparison />
      <FinalCTA />
      <Footer />
    </div>
  );
}
