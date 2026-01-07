import React from 'react';
import { Target, Workflow, RefreshCw, BarChart3, Globe, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "AI Lead Qualification",
      description: "Automatically identifies high-intent visitors.",
      icon: Target
    },
    {
      title: "Custom AI Flows",
      description: "Design conversations that match your business.",
      icon: Workflow
    },
    {
      title: "CRM & Calendar Sync",
      description: "Push leads directly to your CRM or book demos.",
      icon: RefreshCw
    },
    {
      title: "Real-Time Analytics",
      description: "Track conversations, conversions, and performance.",
      icon: BarChart3
    },
    {
      title: "Multi-Channel Support",
      description: "Website, landing pages, and more.",
      icon: Globe
    },
    {
      title: "Fast Setup",
      description: "Live in minutes with no engineering effort.",
      icon: Zap
    }
  ];

  return (
    <section className="bg-slate-900 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need to Convert Visitors
          </h2>
          <p className="text-lg sm:text-xl text-slate-400">
            Ryze AI is built to capture, qualify, and deliver high-intent leads automatically.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 hover:bg-slate-800/60 transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex w-12 h-12 rounded-lg bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}