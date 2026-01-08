"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  value: number;
  suffix: string;
  label: string;
  inverse?: boolean;
};

export default function MetricPill({ value, suffix, label, inverse }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: 0.2,
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-lg bg-slate-800/60 p-3 text-center"
    >
      <div
        className={`text-xl font-bold ${
          inverse ? "text-green-400" : "text-blue-400"
        }`}
      >
        {inverse ? "−" : "+"}
        {value}
        {suffix}
      </div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}
