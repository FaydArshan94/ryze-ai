"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  rows: number;
};

export default function AILine({ rows }: { rows: number }) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    gsap.to(
      lineRef.current,
      {
        scaleY: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="relative h-full flex justify-center">
      <div ref={lineRef} className="w-px bg-linear-to-b scale-y-1 origin-top from-blue-500/30 via-cyan-500/60 to-blue-500/30" />
    </div>
  );
}
