"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  type: "before" | "after";
  stage: string;
  points: string[];
};

export default function TransformationRow({ type, stage, points }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 30,
        filter: type === "before" ? "blur(4px)" : "blur(0px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      }
    );
  }, [type]);

  const isBefore = type === "before";

  return (
    <>
      <div
        ref={ref}
        className={`rounded-2xl p-6 border ${
          isBefore
            ? "bg-slate-900/40 border-slate-800"
            : "bg-linear-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30"
        }`}
      >
        <div className="text-sm uppercase tracking-wide text-slate-400 mb-2">
          {stage}
        </div>

        <ul className="space-y-3">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className={`mt-1 ${
                  isBefore ? "text-red-400" : "text-green-400"
                }`}
              >
                {isBefore ? <X size={14} /> : <Check size={14} />}
              </span>
              <span
                className={`text-sm ${
                  isBefore ? "text-slate-400" : "text-slate-200"
                }`}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {type === "before" && (
        <div className="lg:hidden my-10 flex justify-center ">
          <div className="h-8 w-px bg-linear-to-b from-blue-500/40 to-cyan-500/40" />
        </div>
      )}
    </>
  );
}
