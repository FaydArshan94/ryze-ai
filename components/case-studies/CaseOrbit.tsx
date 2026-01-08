"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CaseMetricCard from "./CaseMetricCard";
export default function CaseOrbit() {
  return (
    <div className="relative w-full max-w-[320px] h-[320px] sm:max-w-[400px] sm:h-[400px] md:max-w-[480px] md:h-[480px] lg:max-w-[520px] lg:h-[520px] mx-auto perspective-[1200px] overflow-visible">
      {/* AI Core (Center) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 xl:w-40 xl:h-40 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl shadow-[0_0_50px_rgba(34,211,238,0.4)] z-20">
          Ryze AI
        </div>
      </div>

      {/* Rotating Orbit Container */}
      <div
        className="absolute top-[70%] left-1/2 preserve-3d  flex items-center justify-center animate-orbit"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Card 1 */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 card-1"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <CaseMetricCard
            value="+4.3x"
            label="ROAS"
            trend="up"
            accent="#22d3ee"
          />
        </div>

        {/* Card 2 */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 card-2"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <CaseMetricCard
            value="+142%"
            label="Conversion"
            trend="up"
            accent="#60a5fa"
          />
        </div>

        {/* Card 3 */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 card-3"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <CaseMetricCard
            value="-32%"
            label="CPA"
            trend="down"
            accent="#34d399"
          />
        </div>

        {/* Card 4 */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 card-4"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <CaseMetricCard
            value="87%"
            label="AI Leads"
            trend="up"
            accent="#a78bfa"
          />
        </div>
      </div>

      <style jsx>{`
        
      `}</style>
    </div>
  );
}

