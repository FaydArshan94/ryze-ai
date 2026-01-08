import { ArrowRight } from "lucide-react";



export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-linear-to-br from-slate-950 via-blue-950/30 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Not sure which plan fits you?
        </h2>
        <p className="text-xl sm:text-2xl text-slate-300 mb-10 leading-relaxed">
          Book a free demo and we'll map Ryze to your exact use case.
        </p>
        <button className="group px-10 py-5 bg-linear-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-lg text-white shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
          <span className="flex items-center gap-3">
            Book Free Demo
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </section>
  );
}