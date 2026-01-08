import React from "react";
import {
  ArrowRight,
  Sparkles,
  MessageSquare,
  TrendingUp,
  Zap,
  Play,
} from "lucide-react";

import { motion,Variants } from "framer-motion";
export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]"></div>

      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8 xl:space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={item}
              className="inline-flex items-center hover:-rotate-2 transition-transform duration-200 gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                AI-Powered Lead Generation
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                variants={item}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl xl:leading-tighter font-bold leading-tight"
              >
                <span className="text-white">Turn Website</span>
                <br />
                <span className="text-white">Visitors Into</span>
                <br />
                <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text animate-gradient">
                  Qualified Leads Using AI
                </span>
              </motion.h1>

              <motion.p
                variants={item}
                className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0"
              >
                Ryze AI helps you capture, qualify, and convert visitors
                automatically — 24/7.
              </motion.p>
            </div>

            {/* Stats mini */}
            <div className="flex flex-wrap gap-6 justify-center  lg:justify-start text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-slate-300">3x More Leads</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-slate-300">24/7 Active</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">Instant Response</span>
              </div>
            </div>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col  sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  See How It Works
                </span>
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={item} className="pt-8">
              <p className="text-sm text-slate-400 mb-4">Trusted by teams at</p>
              <div className="flex flex-wrap gap-8 items-center justify-center lg:justify-start opacity-60">
                <div className="text-slate-400 font-semibold text-lg">
                  Google Ads
                </div>
                <div className="text-slate-400 font-semibold text-lg">
                  DTC Brands
                </div>
                <div className="text-slate-400 font-semibold text-lg">
                  Agencies
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Chat Bot Preview */}
          <div className="relative">
            <div className="relative z-10 bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    Ryze AI Assistant
                  </h3>
                  <p className="text-xs text-slate-400">
                    Online • Instant Reply
                  </p>
                </div>
              </div>

              {/* Chat Messages */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.25, delayChildren: 0.6 },
                  },
                }}
                className="space-y-6 py-6"
              >
                {/* AI Message */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 max-w-[80%] border border-white/10">
                    <p className="text-sm text-slate-200">
                      Hey! 👋 Looking to boost your conversions? I can help you
                      qualify leads instantly.
                    </p>
                  </div>
                </motion.div>

                {/* User Message */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex gap-3 justify-end"
                >
                  <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                    <p className="text-sm text-white">How does it work?</p>
                  </div>
                </motion.div>

                {/* AI Response */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 max-w-[80%] border border-white/10">
                    <p className="text-sm text-slate-200 mb-3">
                      I engage visitors, ask the right questions, and book
                      qualified demos automatically.
                    </p>
                    <div className="space-y-2">
                      <button className="w-full text-left px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs text-slate-300 transition-colors border border-white/10">
                        📊 See Analytics Dashboard
                      </button>
                      <button className="w-full text-left px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs text-slate-300 transition-colors border border-white/10">
                        🚀 Start Free Trial
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Typing Indicator */}
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 border border-white/10">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Input Field */}
              <div className="flex gap-2 pt-4 border-t border-white/10">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  disabled
                />
                <button className="px-4 py-3 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg hover:opacity-90 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -left-4 top-1/4 bg-slate-800/90 backdrop-blur-xl rounded-xl p-4 border border-white/10 shadow-md hidden lg:block animate-float">
              <div className="text-2xl font-bold text-white">87%</div>
              <div className="text-xs text-slate-400">Response Rate</div>
            </div>

            <div className="absolute -right-4 bottom-1/4 bg-slate-800/90 backdrop-blur-xl rounded-xl p-4 border border-white/10 shadow-md hidden lg:block animate-float-delayed">
              <div className="text-2xl font-bold text-green-400">+142%</div>
              <div className="text-xs text-slate-400">Lead Growth</div>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1.5s;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
