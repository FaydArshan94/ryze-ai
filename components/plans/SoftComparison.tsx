import { Check} from 'lucide-react';



export default function SoftComparison() {
  return (
    <section className="py-20 sm:py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Why teams choose Ryze
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* vs SDRs */}
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-6">Ryze vs Hiring SDRs</h3>
            <ul className="space-y-3">
              {['No salaries', 'No training', 'No sick days', 'Works 24/7', 'Scales instantly'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-green-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* vs Forms */}
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-6">Ryze vs Forms</h3>
            <ul className="space-y-3">
              {['Conversations > static forms', 'Intent detection', 'Real-time engagement', 'Qualify while chatting', 'Higher conversion'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-green-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
