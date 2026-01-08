import { ReactNode } from "react";

interface Props {
  value: string;
  label: string;
  trend: "up" | "down";
  accent: string;
}

export default function CaseMetricCard({ value, label, trend, accent }: Props) {
  return (
    <div
      className="w-36 h-48 sm:w-40 sm:h-52 md:w-44 md:h-56 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center gap-2 text-center shadow-xl"
      style={{ boxShadow: `0 0 40px ${accent}22` }}
    >
      <span className="text-2xl sm:text-3xl font-bold text-white">{value}</span>
      <span className="text-xs sm:text-sm text-slate-400">{label}</span>
      <span
        className={`text-xs font-medium ${
          trend === "up" ? "text-green-400" : "text-red-400"
        }`}
      >
        {trend === "up" ? "▲ Improved" : "▼ Reduced"}
      </span>
    </div>
  );
}
