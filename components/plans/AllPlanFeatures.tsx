import { Check, ArrowRight, Sparkles, TrendingUp, Clock, Users, Shield, Zap, ChevronDown } from 'lucide-react';




export default function AllPlansFeatures() {
  const features = [
    { icon: Clock, text: '24/7 AI availability' },
    { icon: Shield, text: 'Secure & compliant' },
    { icon: Zap, text: 'Works across all pages' },
    { icon: Sparkles, text: 'No-code setup' },
    { icon: TrendingUp, text: 'Continuous AI improvements' },
    { icon: Users, text: 'Unlimited team members' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Every plan includes
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-slate-200 font-medium">{feature.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}