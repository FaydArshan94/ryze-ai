"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IndustryTabs from "./Tabs";
import CaseResultCard from "./CaseResultCard";


type TabKey = "saas" | "d2c" | "b2b";


type CaseResult = {
  metric: string;
  label: string;
  delta: "up" | "down";
  stage: string;
  desc: string;
};
const DATA: Record<"saas" | "d2c" | "b2b", CaseResult[]> = {
  saas: [
    {
      metric: "+142%",
      label: "Conversion Rate",
      delta: "up",
      stage: "Demo",
      desc: "AI-qualified leads routed instantly to sales",
    },
    {
      metric: "-32%",
      label: "CPA",
      delta: "down",
      stage: "Lead",
      desc: "Waste spend eliminated via intent detection",
    },
  ],
  d2c: [
    {
      metric: "+4.3x",
      label: "ROAS",
      delta: "up",
      stage: "Sale",
      desc: "Autonomous budget shifts across Meta & Google",
    },
  ],
  b2b: [
    {
      metric: "+87%",
      label: "SQL Rate",
      delta: "up",
      stage: "Pipeline",
      desc: "AI scoring filters low-intent accounts",
    },
  ],
};

export default function IndustryResultsSection() {
  const [active, setActive] = useState<TabKey>('saas');

  const DATA: Record<TabKey, CaseResult[]> = {
    saas: [
      {
        metric: '+142%',
        label: 'Conversion Rate',
        delta: 'up',
        stage: 'Demo',
        desc: 'AI-qualified leads routed instantly to sales'
      },
      {
        metric: '-32%',
        label: 'CPA',
        delta: 'down',
        stage: 'Lead',
        desc: 'Waste spend eliminated via intent detection'
      }
    ],
    d2c: [
      {
        metric: '+4.3x',
        label: 'ROAS',
        delta: 'up',
        stage: 'Sale',
        desc: 'Autonomous budget shifts across Meta & Google'
      },
      {
        metric: '+89%',
        label: 'AOV',
        delta: 'up',
        stage: 'Cart',
        desc: 'Smart upsells powered by behavioral AI'
      }
    ],
    b2b: [
      {
        metric: '+87%',
        label: 'SQL Rate',
        delta: 'up',
        stage: 'Pipeline',
        desc: 'AI scoring filters low-intent accounts'
      },
      {
        metric: '-45%',
        label: 'Sales Cycle',
        delta: 'down',
        stage: 'Close',
        desc: 'Automated qualification accelerates deals'
      }
    ]
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-linear-to-b from-slate-950 via-blue-950/20 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Results by Industry
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            See how Ryze AI delivers measurable impact across different business models.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
          {/* LEFT - Tabs */}
          <IndustryTabs active={active} onChange={setActive} />

          {/* RIGHT - Results */}
          <div className="relative min-h-100">
            <div
              key={active}
              className="grid sm:grid-cols-2 gap-6 animate-fadeIn"
            >
              {DATA[active].map((item, i) => (
                <CaseResultCard key={i} {...item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes borderPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.5s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }

        .animate-borderPulse {
          animation: borderPulse 2s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}