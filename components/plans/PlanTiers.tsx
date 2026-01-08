import {
  Check,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock,
  Users,
  Shield,
  Zap,
  ChevronDown,
} from "lucide-react";

export default function PlanTiers() {
  const plans = [
    {
      name: "Starter",
      tagline: "For early-stage teams validating demand",
      features: [
        "Website AI assistant",
        "Pre-built AI flows",
        "Lead capture (email + form)",
        "Basic analytics",
        "Standard support",
      ],
      bestFor: ["Small websites", "MVPs", "Early SaaS"],
      cta: "Start with Starter",
      highlight: false,
      icon: Sparkles,
    },
    {
      name: "Growth",
      tagline: "For teams converting traffic into revenue",
      features: [
        "Advanced AI qualification",
        "Custom AI flows",
        "CRM & calendar sync",
        "Conversion analytics",
        "Multi-page deployment",
      ],
      bestFor: ["Growing startups", "Agencies", "Marketing teams"],
      cta: "Talk to Sales",
      highlight: true,
      icon: TrendingUp,
      badge: "Most Popular",
    },
    {
      name: "Scale",
      tagline: "For high-traffic & enterprise teams",
      features: [
        "Fully custom AI workflows",
        "High-volume conversations",
        "Priority onboarding",
        "Dedicated support",
        "SLA & compliance options",
      ],
      bestFor: [
        "Enterprises",
        "High traffic websites",
        "Revenue-critical funnels",
      ],
      cta: "Book Strategy Call",
      highlight: false,
      icon: Zap,
    },
  ];

  return (
    <section
      id="plans-section"
      className="py-20 sm:py-24 lg:py-32 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 animate-fadeInUp ${
                  plan.highlight
                    ? "bg-linear-to-br from-blue-600/10 to-cyan-600/10 border-2 border-blue-500/50 shadow-xl shadow-blue-500/20"
                    : "bg-slate-800/50 border border-slate-700/50"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full text-xs font-semibold text-white shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      plan.highlight
                        ? "bg-linear-to-br from-blue-500 to-cyan-500"
                        : "bg-slate-700/50"
                    }`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                </div>

                <p className="text-slate-300 mb-6">{plan.tagline}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                    Includes
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                    Best for
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {plan.bestFor.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-slate-700/50 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlight
                      ? "bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
                      : "bg-slate-700/50 text-white hover:bg-slate-700"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
