import React, { useEffect, useRef, useState } from 'react';
import { X, Check } from 'lucide-react';

export default function WhyRyzeSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const traditionalFeatures = [
    'Static forms',
    'One-size-fits-all questions',
    'Delayed follow-ups',
    'Manual qualification',
    'Low context, low intent'
  ];

  const ryzeFeatures = [
    'Real-time AI conversations',
    'Context-aware questions',
    'Instant lead qualification',
    'Auto booking & CRM sync',
    'Intent-driven workflows'
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center max-w-4xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Why Ryze</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Most Tools Capture Leads.{' '}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Ryze Captures Intent
            </span>
          </h2>

          {/* Supporting Line */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
            Ryze isn't another chatbot or form replacement.
            <br className="hidden sm:block" />
            It's an AI system built to understand, qualify, and route intent in real time.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-12">
          {/* Center Divider */}
          <div 
            ref={dividerRef}
            className={`hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-slate-700 to-transparent transition-all duration-1000 ${
              isInView ? 'animate-dividerGrow' : 'opacity-0 scale-y-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          ></div>

          {/* Left Card - Traditional Tools */}
          <div 
            className={`relative p-8 lg:p-10 rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500/5 border border-red-500/20 mb-3">
                <X className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400">Traditional Tools</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {traditionalFeatures.map((feature, index) => (
                <li 
                  key={index}
                  className={`flex items-start gap-3 text-slate-400 transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  <X className="w-5 h-5 text-red-400/50 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Caption */}
            <p className="text-sm text-slate-500 italic border-t border-slate-800 pt-4">
              Optimized for collection — not conversion.
            </p>

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-red-500/0 to-slate-900/20 rounded-2xl pointer-events-none"></div>
          </div>

          {/* Right Card - Ryze AI */}
          <div 
            className={`relative p-8 lg:p-10 rounded-2xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm transition-all duration-700 hover:border-slate-600 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50"></div>

            {/* Content */}
            <div className="relative">
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 mb-3">
                  <Check className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-400">Ryze AI</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {ryzeFeatures.map((feature, index) => (
                  <li 
                    key={index}
                    className={`flex items-start gap-3 text-slate-200 transition-all duration-500 ${
                      isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Caption */}
              <p className="text-sm text-blue-400 font-medium border-t border-slate-700 pt-4">
                Built for modern buyer behavior.
              </p>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl pointer-events-none"></div>
          </div>
        </div>

        {/* Key Line */}
        <div 
          className={`text-center max-w-3xl mx-auto transition-all duration-700 delay-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 backdrop-blur-sm">
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">
              Ryze works while your team sleeps —{' '}
              <span className="text-blue-400 font-semibold">and delivers leads worth talking to</span>.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dividerGrow {
          from {
            opacity: 0;
            transform: scaleY(0);
          }
          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        .animate-dividerGrow {
          animation: dividerGrow 0.8s ease-out forwards;
          transform-origin: top;
        }
      `}</style>
    </section>
  );
}