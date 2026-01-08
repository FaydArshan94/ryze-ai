import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { useState } from 'react'

type Delta = 'up' | 'down'

type CaseResult = {
  metric: string
  label: string
  delta: Delta
  stage: string
  desc: string
}

type TabKey = 'saas' | 'd2c' | 'b2b';

export default function CaseResultCard({ metric, label, delta, stage, desc, index }: CaseResult & { index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const deltaColor = delta === 'up' ? 'from-green-500 to-emerald-500' : 'from-blue-500 to-cyan-500';
  const deltaTextColor = delta === 'up' ? 'text-green-400' : 'text-blue-400';
  const deltaBgColor = delta === 'up' ? 'bg-green-500/10' : 'bg-blue-500/10';
  const deltaBorderColor = delta === 'up' ? 'border-green-500/20' : 'border-blue-500/20';

  return (
    <div
      className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-xl hover:border-slate-600 transition-all duration-500 overflow-hidden animate-fadeInUp"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 bg-linear-to-br ${deltaColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Animated Border Glow */}
      <div className={`absolute -inset-0.5 bg-linear-to-br ${deltaColor} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>

      {/* Metric & Delta */}
      <div className="relative flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-bold text-white transition-transform duration-300 group-hover:scale-105">
            {metric}
          </span>
          <div className={`w-10 h-10 rounded-lg ${deltaBgColor} border ${deltaBorderColor} flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
            {delta === 'up' ? (
              <ArrowUpRight className={`w-5 h-5 ${deltaTextColor}`} />
            ) : (
              <ArrowDownRight className={`w-5 h-5 ${deltaTextColor}`} />
            )}
          </div>
        </div>

        {/* Stage Badge */}
        <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            {stage}
          </span>
        </div>
      </div>

      {/* Label */}
      <p className="text-lg font-medium text-slate-200 mb-4 transition-colors duration-300 group-hover:text-white">
        {label}
      </p>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-300">
        {desc}
      </p>

      {/* Bottom Accent Line */}
      <div className={`absolute bottom-0 left-0 h-1 bg-linear-to-r ${deltaColor} w-0 group-hover:w-full transition-all duration-500`}></div>
    </div>
  );
}