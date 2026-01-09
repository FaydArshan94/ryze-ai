"use client";

import PlansHero from "./../../components/plans/PlansHero";
import PlanTiers from "@/components/plans/PlanTiers";
import AllPlansFeatures from "@/components/plans/AllPlanFeatures";
import HowPricingWorks from "@/components/plans/HowPricingWorks";
import ROISection from "@/components/plans/ROISection";
import SoftComparison from "@/components/plans/SoftComparison";
import FinalCTA from "@/components/plans/PlanCta";


export default function PlansPage() {
  return (
    <div className="bg-linear-to-br from-slate-950 via-blue-950 to-slate-900">
      <PlansHero />
      <PlanTiers />
      <AllPlansFeatures />
      <HowPricingWorks />
      <ROISection />
      <SoftComparison />
      <FinalCTA />
    </div>
  );
}
