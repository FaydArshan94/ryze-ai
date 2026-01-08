import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight, Sparkles, TrendingUp, Clock, Users, Shield, Zap, ChevronDown } from 'lucide-react';

// 1. Plans Hero
export default function PlansHero() {
  const scrollToPlans = () => {
    document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] bg-linear-to-br from-slate-950 via-blue-950/20 to-slate-900 overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          Flexible plans designed<br />around your growth
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Ryze adapts to your traffic, AI usage, and business goals — so you only pay for real value.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
            <span className="flex items-center gap-2">
              Book Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button 
            onClick={scrollToPlans}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              See what's included
              <ChevronDown className="w-5 h-5" />
            </span>
          </button>
        </div>

        {/* Tier Visualization */}
        <div className="mt-16 flex items-end justify-center gap-4">
          <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center mb-2">
              <span className="text-sm font-semibold text-blue-400">S</span>
            </div>
            <span className="text-xs text-slate-400">Starter</span>
          </div>
          <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-blue-500/30 to-cyan-500/30 border-2 border-blue-500/50 flex items-center justify-center mb-2 shadow-lg shadow-blue-500/30">
              <span className="text-base font-bold text-blue-300">G</span>
            </div>
            <span className="text-sm font-medium text-slate-300">Growth</span>
          </div>
          <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center mb-2">
              <span className="text-sm font-semibold text-blue-400">S</span>
            </div>
            <span className="text-xs text-slate-400">Scale</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
}
