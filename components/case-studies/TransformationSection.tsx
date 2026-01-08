"use client";

import React from "react";
import TransformationRow from "./TransformationRow";
import AILine from "./AILine";

const DATA = [
  {
    stage: "Traffic",
    before: ["Broad targeting", "High bounce rates", "No intent signals"],
    after: ["Intent-aware visitors", "Qualified entry points", "Smart routing"],
  },
  {
    stage: "Leads",
    before: ["Form spam", "Unscored leads", "Delayed follow-ups"],
    after: ["AI-qualified leads", "Real-time scoring", "Instant routing"],
  },
  {
    stage: "Spend",
    before: ["Manual bid changes", "Reactive optimization", "Budget waste"],
    after: ["Autonomous budget shifts", "Continuous learning", "Lower CPA"],
  },
  {
    stage: "Revenue",
    before: ["Inconsistent ROAS", "Sales chasing noise", "Slow growth"],
    after: ["Predictable ROAS", "Clean pipeline", "Scalable revenue"],
  },
];

export default function TransformationSection() {
  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            From Guesswork to Growth
          </h2>
          <p className="text-lg text-slate-400">
            See how Ryze AI transforms your funnel at every stage
          </p>
        </div>

        {/* Grid */}
        <div className="relative space-y-16 lg:space-y-0 lg:grid lg:grid-cols-[1fr_40px_1fr] lg:gap-8">
          {/* Before */}
          <div className="space-y-12">
            {DATA.map((row, i) => (
              <TransformationRow
                key={i}
                type="before"
                stage={row.stage}
                points={row.before}
              />
            ))}
          </div>

          {/* AI Line */}
          <div className="hidden lg:block left-1/2 top-0  h-full">
            <AILine rows={DATA.length} />
          </div>

          {/* After */}
          <div className="space-y-12 ">
            {DATA.map((row, i) => (
              <TransformationRow
                key={i}
                type="after"
                stage={row.stage}
                points={row.after}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
