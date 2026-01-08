"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MetricPill from "./MetricPill";

type Result = {
  value: number;
  suffix: string;
  label: string;
  inverse?: boolean;
};

type Props = {
  industry: string;
  team: string;
  headline: string;
  problem: string;
  setup: string[];
  results: Result[];
};

export default function CaseProofCard(props: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-blue-500/30 transition-colors"
    >
      {/* Header */}
      <div className="mb-4">
        <div className="text-xs uppercase tracking-wide text-slate-400">
          {props.industry} · {props.team}
        </div>
        <h3 className="text-lg font-semibold text-white mt-1">
          {props.headline}
        </h3>
      </div>

      {/* Problem */}
      <div className="mb-4">
        <div className="text-xs font-semibold text-slate-500 mb-1">
          Problem
        </div>
        <p className="text-sm text-slate-400">{props.problem}</p>
      </div>

      {/* Setup */}
      <div className="mb-5">
        <div className="text-xs font-semibold text-slate-500 mb-2">
          Ryze AI Setup
        </div>
        <ul className="text-sm text-slate-300 space-y-1">
          {props.setup.map((s, i) => (
            <li key={i}>• {s}</li>
          ))}
        </ul>
      </div>

      {/* Results */}
      <div className="grid grid-cols-3 gap-3">
        {props.results.map((r, i) => (
          <MetricPill key={i} {...r} />
        ))}
      </div>
    </div>
  );
}
