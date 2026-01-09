import MetricCard from "./PlanMetricCards";


export default function ROISection() {
  const metrics = [
    { 
      value: '2.8×', 
      label: 'lead qualification rate', 
      trend: 'up' as const,
      details: 'AI qualification delivers 2.8x more qualified leads compared to traditional form-based approaches.'
    },
    { 
      value: '60%', 
      label: 'manual follow-ups', 
      trend: 'down' as const,
      details: 'Automation eliminates 60% of manual follow-up tasks, freeing your team to focus on closing deals.'
    },
    { 
      value: '35%', 
      label: 'demo bookings', 
      trend: 'up' as const,
      details: 'Real-time AI conversations convert 35% more visitors into scheduled demo appointments.'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Think Investment, Not Cost
          </h2>
          <p className="text-xl text-slate-400 mb-2">
            Average results our customers see within 90 days
          </p>
          <p className="text-sm text-slate-500">
            💡 Click the cards to see more details
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}