import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

export default function AboutHero() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const supportingRef = useRef<HTMLParagraphElement>(null);
  const bulletsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple CSS-based animations with refs for potential GSAP integration
    const animateElements = () => {
      if (headingRef.current) {
        headingRef.current.style.animation = 'fadeUp 0.8s ease-out forwards';
      }
      if (subheadingRef.current) {
        subheadingRef.current.style.animation = 'fadeUp 0.8s ease-out 0.2s forwards';
        subheadingRef.current.style.opacity = '0';
      }
      if (supportingRef.current) {
        supportingRef.current.style.animation = 'fadeUp 0.8s ease-out 0.4s forwards';
        supportingRef.current.style.opacity = '0';
      }
      if (bulletsRef.current) {
        const bullets = bulletsRef.current.children;
        Array.from(bullets).forEach((bullet, i) => {
          (bullet as HTMLElement).style.animation = `fadeInLeft 0.6s ease-out ${0.6 + i * 0.15}s forwards`;
          (bullet as HTMLElement).style.opacity = '0';
        });
      }
      if (ctaRef.current) {
        ctaRef.current.style.animation = 'fadeUp 0.8s ease-out 1.2s forwards';
        ctaRef.current.style.opacity = '0';
      }
    };

    animateElements();
  }, []);

  const valueHighlights = [
    'Instant AI conversations, 24/7',
    'Smart qualification before lead capture',
    'Zero-friction setup for modern teams'
  ];

  return (
    <section className="relative min-h-[80vh] bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-0 xl:gap-10 items-center lg:items-start ">
          {/* LEFT - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">About Ryze AI</span>
            </div>

            {/* Main Heading */}
            <h1 
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            >
              We Build AI That Converts{' '}
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
                Attention Into Revenue
              </span>
            </h1>

            {/* Subheading */}
            <p 
              ref={subheadingRef}
              className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed"
            >
              Ryze AI is designed to engage visitors instantly, qualify intent intelligently, 
              and deliver high-quality leads — without slowing your team down.
            </p>

            {/* Supporting Line */}
            <p 
              ref={supportingRef}
              className="text-base sm:text-lg text-slate-400 leading-relaxed border-l-2 border-blue-500/30 pl-4"
            >
              Built for modern websites where speed, relevance, and automation decide growth.
            </p>

            {/* Value Highlights */}
            <div ref={bulletsRef} className="space-y-3 pt-4">
              {valueHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors duration-300">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
                Explore How Ryze Works
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-slate-300 hover:text-white font-medium transition-colors duration-300">
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT - Abstract AI Visual */}
          <div className="relative  lg:block ">
            <div ref={orbitRef} className="relative w-full h-125 perspective-distant">
              {/* Central Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.4)] animate-pulse-slow">
                 <span className='font-black font-[Inter] text-2xl text-white'>Ryze</span>
                </div>
              </div>

              {/* Orbiting Nodes */}
              <div className="absolute inset-0 animate-orbit-slow" style={{ transformStyle: 'preserve-3d' }}>
                {/* Node 1 */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    transform: 'translate(-50%, -50%) rotateY(0deg) translateZ(200px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="w-20 h-20 rounded-full bg-slate-800/80 backdrop-blur-xl border border-blue-500/30 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-blue-400">AI</span>
                  </div>
                </div>

                {/* Node 2 */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    transform: 'translate(-50%, -50%) rotateY(90deg) translateZ(200px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="w-20 h-20 rounded-full bg-slate-800/80 backdrop-blur-xl border border-cyan-500/30 flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold text-cyan-400">24/7</span>
                  </div>
                </div>

                {/* Node 3 */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    transform: 'translate(-50%, -50%) rotateY(180deg) translateZ(200px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="w-20 h-20 rounded-full bg-slate-800/80 backdrop-blur-xl border border-purple-500/30 flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold text-purple-400">Auto</span>
                  </div>
                </div>

                {/* Node 4 */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    transform: 'translate(-50%, -50%) rotateY(270deg) translateZ(200px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="w-20 h-20 rounded-full bg-slate-800/80 backdrop-blur-xl border border-green-500/30 flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold text-green-400">Lead</span>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <circle cx="50%" cy="50%" r="200" stroke="url(#lineGradient)" strokeWidth="1" fill="none" className="animate-dash" />
              </svg>
            </div>
          </div>
        </div>
      </div>

 
    </section>
  );
}