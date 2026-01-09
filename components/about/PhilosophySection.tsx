import React, { useEffect, useRef, useState } from "react";
import { MessageSquare, Target, Zap } from "lucide-react";
import PhilosophyCard from "./PhilosophyCards";

export default function PhilosophySection() {
  const [isInView, setIsInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

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

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const offset = (window.innerHeight - rect.top) * 0.1;
        setScrollY(offset);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const beliefs = [
    {
      title: "Engage First",
      text: "Visitors shouldn't hunt for answers. AI should meet them instantly — at the moment of intent.",
      icon: MessageSquare,
    },
    {
      title: "Qualify Intelligently",
      text: "Not every lead is equal. Ryze filters noise and surfaces high-intent prospects automatically.",
      icon: Target,
    },
    {
      title: "Convert Without Friction",
      text: "No delays. No handoffs. Qualified leads flow directly into calendars and CRMs.",
      icon: Zap,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Neural Lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ transform: `translateY(${scrollY}px)` }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <linearGradient
              id="neuralGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {/* Neural network pattern */}
          <g stroke="url(#neuralGradient)" strokeWidth="1.5" opacity="0.6">
            <line x1="100" y1="400" x2="300" y2="200" />
            <line x1="100" y1="400" x2="300" y2="400" />
            <line x1="100" y1="400" x2="300" y2="600" />

            <line x1="300" y1="200" x2="500" y2="300" />
            <line x1="300" y1="400" x2="500" y2="300" />
            <line x1="300" y1="600" x2="500" y2="500" />
            <line x1="300" y1="400" x2="500" y2="500" />

            <line x1="500" y1="300" x2="700" y2="400" />
            <line x1="500" y1="500" x2="700" y2="400" />

            <line x1="700" y1="400" x2="900" y2="300" />
            <line x1="700" y1="400" x2="900" y2="500" />

            <line x1="900" y1="300" x2="1100" y2="400" />
            <line x1="900" y1="500" x2="1100" y2="400" />
          </g>

          {/* Nodes */}
          <g fill="url(#neuralGradient)" opacity="0.8">
            <circle cx="100" cy="400" r="6" />
            <circle cx="300" cy="200" r="5" />
            <circle cx="300" cy="400" r="5" />
            <circle cx="300" cy="600" r="5" />
            <circle cx="500" cy="300" r="5" />
            <circle cx="500" cy="500" r="5" />
            <circle cx="700" cy="400" r="6" />
            <circle cx="900" cy="300" r="5" />
            <circle cx="900" cy="500" r="5" />
            <circle cx="1100" cy="400" r="6" />
          </g>
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headingRef}
          className={`text-center max-w-4xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              Our Philosophy
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Conversion Is a Conversation —{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Not a Form
            </span>
          </h2>

          {/* Supporting Line */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
            Most websites still rely on static forms and delayed follow-ups.
            <br className="hidden sm:block" />
            Ryze replaces that with real-time, intelligent conversations.
          </p>
        </div>

        {/* Belief Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {beliefs.map((belief, index) => (
            <PhilosophyCard
              key={index}
              title={belief.title}
              text={belief.text}
              icon={belief.icon}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
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

        .animate-fadeUp {
          animation: fadeUp 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
