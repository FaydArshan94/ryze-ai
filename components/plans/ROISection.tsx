export default function ROISection() {
  const metrics = [
    { value: '2.8×', label: 'lead qualification rate', trend: 'up' },
    { value: '60%', label: 'manual follow-ups', trend: 'down' },
    { value: '35%', label: 'demo bookings', trend: 'up' }
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          Think Investment, Not Cost
        </h2>
        <p className="text-xl text-slate-400 text-center mb-12">
          Average results our customers see within 90 days
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 text-center hover:border-slate-600 transition-all duration-300"
            >
              <div className={`text-5xl font-bold mb-2 ${
                metric.trend === 'up' ? 'text-green-400' : 'text-blue-400'
              }`}>
                {metric.trend === 'down' && '↓ '}{metric.value}{metric.trend === 'up' && ' ↑'}
              </div>
              <div className="text-slate-300">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}