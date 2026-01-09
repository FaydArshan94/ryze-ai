import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, TrendingUp, Clock, Target, Zap } from "lucide-react";
import Link from "next/link";

interface MetricCardProps {
  value: string;
  text: string;
  icon: React.ElementType;
  index: number;
  isInView: boolean;
}

function MetricCard({
  value,
  text,
  icon: Icon,
  index,
  isInView,
}: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      // Reveal text character by character
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= value.length) {
          setDisplayValue(value.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setHasAnimated(true);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isInView, value, hasAnimated]);

  return (
    <div
      className={`group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-slate-600 hover:bg-slate-900/70 transition-all duration-500 ${
        isInView ? "animate-fadeUp" : "opacity-0"
      }`}
      style={{ animationDelay: `${0.2 + index * 0.15}s` }}
    >
      {/* Gradient glow on hover */}
      <div className="absolute -inset-0.5 bg-linear-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>

      {/* Icon */}
      <div className="mb-4 inline-flex w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>

      {/* Value */}
      <div className="mb-4">
        <h3 className="text-3xl sm:text-4xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
          {displayValue}
          <span
            className={`inline-block w-1 h-8 bg-blue-400 ml-1 ${
              hasAnimated ? "opacity-0" : "animate-blink"
            }`}
          ></span>
        </h3>
      </div>

      {/* Text */}
      <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
        {text}
      </p>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-700 rounded-b-2xl"></div>
    </div>
  );
}

export default function SuccessMetricsSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const metrics = [
    {
      value: "+Qualified Leads",
      text: "We prioritize intent over volume — so sales teams talk to better prospects.",
      icon: Target,
    },
    {
      value: "Faster Response Time",
      text: "Every second matters. Ryze engages users instantly, 24/7.",
      icon: Clock,
    },
    {
      value: "Higher Conversion Rates",
      text: "Conversations convert better than forms — every time.",
      icon: TrendingUp,
    },
    {
      value: "Less Manual Work",
      text: "Automation reduces follow-ups, routing, and admin overhead.",
      icon: Zap,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-4xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              Our Focus
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Success Is Measured in{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Outcomes — Not Features
            </span>
          </h2>

          {/* Supporting Line */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
            Ryze is built around one goal: helping teams convert the right
            visitors into real business opportunities.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              text={metric.text}
              icon={metric.icon}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Closing Line */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.9s" }}
        >
          <div className="p-6 rounded-2xl bg-linear-to-r from-blue-500/5 via-cyan-500/5 to-purple-500/5 border border-blue-500/20 backdrop-blur-sm">
            <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed">
              If Ryze isn't improving conversion quality,{" "}
              <span className="text-blue-400">it isn't doing its job</span>.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1.1s" }}
        >
          <Link href="/">
            <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
              See Ryze in Action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/case-studies">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-slate-300 hover:text-white font-medium transition-colors duration-300">
              View Case Studies
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
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

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.7s ease-out forwards;
        }

        .animate-blink {
          animation: blink 0.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
