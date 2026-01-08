import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  Target,
  BarChart3,
  ArrowDown,
} from "lucide-react";
import CaseOrbit from "../case-studies/CaseOrbit";

interface MetricCard {
  value: string;
  label: string;
  trend: "up" | "down";
  icon: React.ElementType;
  color: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay: number;
}

export default function CaseStudiesHero() {
  const trustTags: string[] = ["B2B", "D2C", "SaaS", "Performance Marketing"];

  return (
    <section className="relative min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-80 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-12rem)]">
          {/* LEFT - Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white mb-1 sm:mb-2">
                  Real Growth,
                </span>
                <span className="block text-white mb-3 sm:mb-4">
                  Proven by Data.
                </span>
                <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text animate-gradient">
                  AI-Driven Case Studies
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-6 sm:mt-8">
                See how modern teams use Ryze AI to qualify leads, increase
                ROAS, and automate growth — without guesswork.
              </p>
            </div>

            {/* Trust Tags */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-center lg:justify-start">
              {trustTags.map((tag, index) => (
                <div
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
                >
                  <span className="text-xs sm:text-sm font-medium text-slate-300">
                    • {tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Scroll Hint */}
            <div className="hidden lg:flex items-center gap-3 text-slate-400 pt-8">
              <ArrowDown className="w-5 h-5 animate-bounce" />
              <span className="text-sm font-medium">
                Scroll to explore results
              </span>
            </div>
          </div>

          {/* RIGHT - Orbit */}
          <div className="relative flex items-center justify-center mt-8 lg:mt-0">
            <CaseOrbit />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
