import React from 'react';
import { Sparkles, Zap, MessageSquare, Calendar, Target, RefreshCw } from 'lucide-react';

export default function MarqueeSection() {
  const items = [
    { text: 'AI LEAD QUALIFICATION', icon: Target },
    { text: 'REAL-TIME CONVERSATIONS', icon: MessageSquare },
    { text: '24/7 AUTOMATION', icon: Zap },
    { text: 'CRM SYNC', icon: RefreshCw },
    { text: 'BOOK DEMOS', icon: Calendar },
    { text: 'QUALIFY VISITORS', icon: Sparkles }
  ];

  return (
    <section className="relative bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 py-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-cyan-600 to-purple-600 opacity-50 animate-gradient"></div>
      
      <div className="relative">
        {/* First marquee */}
        <div className="flex whitespace-nowrap animate-marquee">
          {[...items, ...items, ...items].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="inline-flex items-center gap-3 mx-8">
                <Icon className="w-5 h-5 text-white shrink-0" />
                <span className="text-lg font-bold text-white tracking-wide">
                  {item.text}
                </span>
                <span className="text-white/50 text-2xl">•</span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }

        @media (hover: hover) {
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}