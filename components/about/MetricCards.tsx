import React, { useEffect, useRef, useState } from 'react';


interface MetricCardProps {
  value: string;
  text: string;
  icon: React.ElementType;
  index: number;
  isInView: boolean;
}

export default function MetricCard({ value, text, icon: Icon, index, isInView }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState('');
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
        isInView ? 'animate-fadeUp' : 'opacity-0'
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
          <span className={`inline-block w-1 h-8 bg-blue-400 ml-1 ${hasAnimated ? 'opacity-0' : 'animate-blink'}`}></span>
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