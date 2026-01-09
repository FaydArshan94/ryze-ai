import React, { useState } from 'react';
import { TrendingUp, TrendingDown, RotateCcw } from 'lucide-react';

interface MetricCardProps {
  metric: {
    value: string;
    label: string;
    trend: 'up' | 'down';
    details: string;
  };
  index: number;
}

export default function MetricCard({ metric, index }: MetricCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setClickCount(prev => prev + 1);
    setIsFlipped(!isFlipped);
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getTrendColor = () => {
    return metric.trend === 'up' ? 'text-green-400' : 'text-blue-400';
  };

  const getTrendBg = () => {
    return metric.trend === 'up' 
      ? 'from-green-500/20 to-emerald-500/20' 
      : 'from-blue-500/20 to-cyan-500/20';
  };

  const getTrendBorder = () => {
    return metric.trend === 'up' 
      ? 'border-green-500/30' 
      : 'border-blue-500/30';
  };

  return (
    <div
      className="relative h-64 cursor-pointer perspective-1000"
      onClick={handleClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Card Container */}
      <div
        className={`relative w-full h-full transition-all duration-600 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        } ${isAnimating ? 'animate-wiggle' : ''}`}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm backface-hidden flex flex-col items-center justify-center group hover:border-slate-600 hover:bg-slate-900/70 transition-all duration-300 ${
            clickCount > 0 ? 'hover:scale-105' : ''
          }`}
        >
          {/* Particle effect on hover */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div className={`absolute -inset-2 bg-linear-to-br ${getTrendBg()} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>
          </div>

          {/* Click counter badge */}
          {clickCount > 0 && (
            <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs text-blue-300 font-semibold animate-fadeIn">
              {clickCount} {clickCount === 1 ? 'click' : 'clicks'}
            </div>
          )}

          <div className="relative z-10 text-center">
            {/* Value with trend arrow */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className={`text-5xl font-bold ${getTrendColor()} group-hover:scale-110 transition-transform duration-300`}>
                {metric.value}
              </span>
              {metric.trend === 'up' ? (
                <TrendingUp className={`w-8 h-8 ${getTrendColor()} animate-bounce-subtle`} />
              ) : (
                <TrendingDown className={`w-8 h-8 ${getTrendColor()} animate-bounce-subtle`} />
              )}
            </div>

            {/* Label */}
            <div className="text-slate-300 group-hover:text-white transition-colors duration-300">
              {metric.label}
            </div>

            {/* Click hint */}
            <div className="mt-4 text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-300 flex items-center gap-1 justify-center">
              <RotateCcw className="w-3 h-3" />
              <span>Click to flip</span>
            </div>
          </div>

          {/* Shine effect on hover */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute -inset-full bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 p-8 rounded-2xl bg-linear-to-br ${getTrendBg()} border ${getTrendBorder()} backdrop-blur-sm backface-hidden rotate-y-180 flex flex-col items-center justify-center`}
        >
          <div className="text-center space-y-4">
            {/* Icon */}
            <div className={`inline-flex w-16 h-16 rounded-full bg-linear-to-br ${getTrendBg()} border ${getTrendBorder()} items-center justify-center mb-2`}>
              {metric.trend === 'up' ? (
                <TrendingUp className={`w-8 h-8 ${getTrendColor()}`} />
              ) : (
                <TrendingDown className={`w-8 h-8 ${getTrendColor()}`} />
              )}
            </div>

            {/* Details */}
            <p className="text-white font-medium text-lg leading-relaxed">
              {metric.details}
            </p>

            {/* Flip back hint */}
            <div className="mt-4 text-xs text-slate-300 flex items-center gap-1 justify-center">
              <RotateCcw className="w-3 h-3" />
              <span>Click to flip back</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ripple effect */}
      {isAnimating && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/50 animate-ripple"></div>
        </div>
      )}

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        @keyframes wiggle {
          0%, 100% { transform: rotateY(0deg) rotateZ(0deg); }
          25% { transform: rotateY(0deg) rotateZ(-2deg); }
          75% { transform: rotateY(0deg) rotateZ(2deg); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-wiggle {
          animation: wiggle 0.6s ease-in-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .duration-600 {
          transition-duration: 600ms;
        }
      `}</style>
    </div>
  );
}
