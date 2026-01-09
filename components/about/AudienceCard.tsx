interface AudienceCardProps {
  title: string;
  text: string;
  icon: React.ElementType;
  index: number;
  isInView: boolean;
}

export default function AudienceCard({ title, text, icon: Icon, index, isInView }: AudienceCardProps) {
  return (
    <div
      className={`group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-slate-600 hover:bg-slate-900/70 hover:-translate-y-2 transition-all duration-500 ${
        isInView ? 'animate-fadeUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.4 + index * 0.2}s` }}
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
      
      {/* Glow effect */}
      <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>

      {/* Content */}
      <div className="relative">
        {/* Icon */}
        <div className={`mb-6 inline-flex w-16 h-16 rounded-xl bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-500 ${
          isInView ? 'animate-scaleIn' : 'opacity-0 scale-90'
        }`} style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
          <Icon className="w-8 h-8 text-blue-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Text */}
        <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
          {text}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-bl-full transition-all duration-500"></div>
    </div>
  );
}