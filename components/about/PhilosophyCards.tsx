import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Target, Zap } from 'lucide-react';

interface PhilosophyCardProps {
  title: string;
  text: string;
  icon: React.ElementType;
  index: number;
  isInView: boolean;
}

export default function PhilosophyCard({ title, text, icon: Icon, index, isInView }: PhilosophyCardProps) {
  return (
    <div
      className={`group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-slate-600 hover:bg-slate-900/70 transition-all duration-500 ${
        isInView ? 'animate-fadeUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.4 + index * 0.2}s` }}
    >
      {/* Subtle gradient on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative">
        {/* Icon */}
        <div className="mb-6 inline-flex w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-blue-400" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Text */}
        <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
          {text}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-700"></div>
    </div>
  );
}
