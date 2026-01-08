export default function HowPricingWorks() {
  const factors = [
    'Monthly conversations',
    'AI flow complexity',
    'Integrations',
    'Support level'
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          How Pricing Actually Works
        </h2>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          Ryze pricing depends on how much value it delivers to your business.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
          {factors.map((factor, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200"
            >
              {factor}
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
          <p className="text-lg text-slate-300 leading-relaxed">
            During your demo, we recommend the most cost-effective plan based on your needs.
          </p>
        </div>
      </div>
    </section>
  );
}
