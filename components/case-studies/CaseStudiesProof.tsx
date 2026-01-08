"use client";

import CaseProofCard from "./CaseProofCard";

const CASES = [
  {
    industry: "SaaS",
    team: "12-person Sales Team",
    headline: "From cold leads to booked demos",
    problem: "Unqualified demo requests and slow follow-ups",
    setup: [
      "Website AI Chat",
      "Calendar Sync",
      "Lead Scoring",
    ],
    results: [
      { value: 132, suffix: "%", label: "Demo Bookings" },
      { value: 41, suffix: "%", label: "Faster Response", inverse: true },
      { value: 87, suffix: "%", label: "SQL Rate" },
    ],
  },
  {
    industry: "D2C",
    team: "Performance Marketing Team",
    headline: "Higher ROAS with less wasted spend",
    problem: "High CPA and poor intent matching",
    setup: [
      "Intent Detection",
      "Smart Routing",
      "AI Optimization",
    ],
    results: [
      { value: 4.3, suffix: "x", label: "ROAS" },
      { value: 36, suffix: "%", label: "Wasted Spend", inverse: true },
      { value: 58, suffix: "%", label: "Repeat Buyers" },
    ],
  },
  {
    industry: "B2B",
    team: "Inbound Lead Gen",
    headline: "Cleaner pipeline, faster sales",
    problem: "Low-quality inbound leads",
    setup: [
      "Multi-step Qualification",
      "CRM Sync",
      "AI Scoring",
    ],
    results: [
      { value: 2.6, suffix: "x", label: "Pipeline Value" },
      { value: 48, suffix: "%", label: "Sales Load", inverse: true },
      { value: 91, suffix: "%", label: "Lead Relevance" },
    ],
  },
];

export default function CaseStudiesProof() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Proven Results Across Teams
          </h2>
          <p className="text-lg text-slate-400">
            Real outcomes from companies running Ryze AI in production
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASES.map((c, i) => (
            <CaseProofCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
