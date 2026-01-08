import { Sparkles, MonitorCloud, Handshake, Store } from "lucide-react";

type Props = {
  active: string;
  onChange: (v: any) => void;
};

type TabKey = "saas" | "d2c" | "b2b";


const tabs = [
  { id: "saas", label: "SaaS" },
  { id: "d2c", label: "D2C" },
  { id: "b2b", label: "B2B" },
];

export default function IndustryTabs({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (tab: TabKey) => void;
}) {
  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: "saas", label: "SaaS", icon: <MonitorCloud className="w-5 h-5" /> },
    { key: "d2c", label: "D2C", icon: <Store className="w-5 h-5" /> },
    { key: "b2b", label: "B2B", icon: <Handshake className="w-5 h-5" /> },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-blue-400" />
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
          Industry
        </h3>
      </div>

      {tabs.map((tab, index) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`relative w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden animate-fadeInLeft ${
            active === tab.key
              ? "bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
              : "bg-slate-800/40 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Active Indicator */}
          {active === tab.key && (
            <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-cyan-400 opacity-20 animate-pulse"></div>
          )}

          <div className="relative flex items-center gap-3">
            <span className="text-2xl">{tab.icon}</span>
            <span className="text-lg">{tab.label}</span>
          </div>

          {/* Animated Border */}
          {active === tab.key && (
            <div className="absolute inset-0 rounded-xl border-2 border-white/20 animate-borderPulse"></div>
          )}
        </button>
      ))}
    </div>
  );
}
