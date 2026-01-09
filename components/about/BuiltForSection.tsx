
import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Users, TrendingUp } from 'lucide-react';
import AudienceCard from './AudienceCard';




export default function BuiltForSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const trustLineRef = useRef<HTMLParagraphElement>(null);

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

  const audiences = [
    {
      title: 'SaaS & Product Teams',
      text: 'Capture high-intent users, qualify them instantly, and book demos without slowing down growth.',
      icon: Rocket
    },
    {
      title: 'Sales & Growth Teams',
      text: 'Let AI handle first-touch conversations while your team focuses on closing.',
      icon: Users
    },
    {
      title: 'High-Traffic Websites',
      text: "Turn anonymous visitors into actionable leads at the exact moment they're ready to talk.",
      icon: TrendingUp
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 bg-slate-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size:-[2px_32px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headingRef}
          className={`text-center max-w-4xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Built For</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Teams That Care About{' '}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Real Conversion
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
            Ryze AI is designed for fast-moving teams that want better leads — not more noise.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {audiences.map((audience, index) => (
            <AudienceCard
              key={index}
              title={audience.title}
              text={audience.text}
              icon={audience.icon}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Trust Line */}
        <p 
          ref={trustLineRef}
          className={`text-center text-slate-400 text-lg max-w-3xl mx-auto border-t border-slate-800 pt-8 transition-all duration-700 delay-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          If your website gets traffic but not enough qualified leads —{' '}
          <span className="text-blue-400 font-semibold">Ryze is for you</span>.
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.7s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}