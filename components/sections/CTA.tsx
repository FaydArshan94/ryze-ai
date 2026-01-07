import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleCTAClick = () => {
    // Scroll to demo booking or contact section
    const demoSection = document.getElementById("demo-booking");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      tl.from(".cta-heading", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".cta-sub",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".cta-button",
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".cta-trust",
          {
            opacity: 0,
            y: 10,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-950 py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Headline */}
          <h2 className="cta-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Start Converting Visitors Into Customers Today
          </h2>

          {/* Sub-headline */}
          <p className="cta-sub text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Book a free demo and see how Ryze AI engages, qualifies, and
            converts your website visitors automatically.
          </p>

          {/* CTA Button */}
          <div className="cta-button pt-4">
            <button
              onClick={handleCTAClick}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-linear-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-lg text-white shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
            >
              <span>Get Free Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Trust Line */}
          <div className="cta-trust flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400 pt-2">
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              No credit card required
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Setup in minutes
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Works 24/7
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
