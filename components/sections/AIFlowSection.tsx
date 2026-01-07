import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  TrendingUp,
  Target,
  Database,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
} 

interface message {
  type: "ai" | "user";
  text: string;
  step: number;
  highlight?: boolean;
}

export default function AIFlowSection() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Visitor Lands",
      description: "Someone visits your website looking for a solution.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "AI Starts Conversation",
      description: "Ryze AI instantly engages with a personalized greeting.",
      icon: Sparkles,
      color: "from-cyan-500 to-purple-500",
    },
    {
      number: "03",
      title: "Qualifies Intent",
      description:
        "Smart questions identify high-value prospects automatically.",
      icon: Target,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "04",
      title: "Routes to CRM",
      description: "Qualified leads flow directly into your sales pipeline.",
      icon: Database,
      color: "from-pink-500 to-orange-500",
    },
  ];

  const chatMessages = [
    {
      type: "ai",
      text: "Hi! 👋 I'm here to help. What brings you to our site today?",
      step: 0,
    },
    {
      type: "user",
      text: "I'm looking for a solution to capture more leads from my website.",
      step: 1,
    },
    {
      type: "ai",
      text: "Great! I can help with that. What's your current monthly website traffic?",
      step: 2,
    },
    { type: "user", text: "Around 10,000 visitors per month.", step: 2 },
    {
      type: "ai",
      text: "Perfect! And what's your biggest challenge with lead generation right now?",
      step: 3,
    },
    {
      type: "user",
      text: "Most visitors leave without taking any action.",
      step: 3,
    },
    {
      type: "ai",
      text: "I understand. Based on your needs, I'd recommend booking a personalized demo. Would Tuesday or Wednesday work better for you?",
      step: 3,
    },
    { type: "user", text: "Tuesday works great!", step: 3 },
    {
      type: "ai",
      text: "✅ Perfect! I've captured your information and a demo specialist will reach out shortly. Check your email for confirmation.",
      step: 4,
      highlight: true,
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !stepsRef.current) return;

    const ctx = gsap.context(() => {
      const stepCards = gsap.utils.toArray(".ai-step");

      gsap.fromTo(
        stepCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.4,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: false,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  useEffect(() => {
  if (!chatRef.current) return;

  gsap.from(chatRef.current, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 65%',
    },
  });
}, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let currentStep = 0;
            const interval = setInterval(() => {
              if (currentStep < steps.length) {
                setActiveStep(currentStep);

                // Show messages for this step
                const messagesForStep = chatMessages.filter(
                  (msg) => msg.step <= currentStep
                );
                setVisibleMessages(messagesForStep);

                currentStep++;
              } else {
                clearInterval(interval);
              }
            }, 2000);

            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-slate-900 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How Ryze AI Thinks
          </h2>
          <p className="text-lg sm:text-xl text-slate-400">
            Watch how our AI transforms visitors into qualified leads in
            real-time.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Steps */}
          <div ref={stepsRef} className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= activeStep;
              const isCurrent = index === activeStep;

              return (
                <div
                  key={index}
                  className={`relative ai-step transition-all duration-700 ${
                    isActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-30 translate-x-4"
                  }`}
                >
                  <div
                    className={`flex gap-4 p-6 rounded-xl border transition-all duration-500 ${
                      isCurrent
                        ? "bg-slate-800/80 border-blue-500/50 shadow-lg shadow-blue-500/20"
                        : "bg-slate-800/40 border-slate-700/50"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`shrink-0 w-12 h-12 rounded-lg bg-linear-to-br ${
                        step.color
                      } flex items-center justify-center transition-transform duration-500 ${
                        isCurrent ? "scale-110" : "scale-100"
                      }`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-slate-500">
                          {step.number}
                        </span>
                        <h3 className="text-lg font-bold text-white">
                          {step.title}
                        </h3>
                        {isActive && index < activeStep && (
                          <CheckCircle className="w-4 h-4 text-green-400 ml-auto" />
                        )}
                      </div>
                      <p className="text-sm text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-10 top-full h-6 w-0.5 bg-linear-to-b from-slate-600 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right - Chat UI Mockup */}
          <div ref={chatRef} className="lg:sticky lg:top-24">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Chat Header */}
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/80 border-b border-slate-700/50">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Ryze AI</h3>
                  <p className="text-xs text-slate-400">
                    Online • Instant Reply
                  </p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 h-125 overflow-y-auto">
                {visibleMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 animate-fadeInUp ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {message.type === "ai" && (
                      <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                        message.type === "ai"
                          ? message.highlight
                            ? "bg-linear-to-r from-green-600 to-emerald-600 text-white"
                            : "bg-slate-700/50 text-slate-200 border border-slate-600/50"
                          : "bg-linear-to-r from-blue-600 to-cyan-600 text-white"
                      } ${
                        message.type === "ai"
                          ? "rounded-tl-none"
                          : "rounded-tr-none"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {activeStep < steps.length - 1 &&
                  visibleMessages.length > 0 && (
                    <div className="flex gap-3 animate-fadeInUp">
                      <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-slate-700/50 border border-slate-600/50 rounded-2xl rounded-tl-none px-4 py-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
