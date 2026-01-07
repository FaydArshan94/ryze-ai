import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.config({
  ignoreMobileResize: true,
});
import { Code, MessageSquareText, CalendarCheck } from 'lucide-react';

export default function HowItWorks() {

  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "Install Ryze",
      description: "Add Ryze to your website with a simple embed or integration.",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "AI Engages Visitors",
      description: "Ryze starts conversations, asks smart questions, and understands intent.",
      icon: MessageSquareText,
      color: "from-cyan-500 to-purple-500"
    },
    {
      number: "03",
      title: "Get Qualified Leads",
      description: "High-intent leads are sent to your CRM or booked directly on your calendar.",
      icon: CalendarCheck,
      color: "from-purple-500 to-pink-500"
    }
  ];


  useEffect(() => {
  if (!sectionRef.current) return;

  const ctx = gsap.context(() => {
    gsap.from('.how-heading', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    });

    gsap.from('.how-sub', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    });

    gsap.from('.how-step', {
      opacity: 0,
      y: 40,
      scale: 0.96,
      // stagger: 0.2,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
      },
    });

    gsap.from('.how-footer', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 50%',
      },
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);




  return (
    <section ref={sectionRef} className="bg-slate-950 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-16">
          <h2 className="how-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How Ryze AI Works
          </h2>
          <p className="how-sub text-lg sm:text-xl text-slate-400">
            Start capturing qualified leads in minutes — not days.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="how-step group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-slate-900">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`relative z-10 inline-flex w-14 group-hover:rotate-6  h-14 rounded-xl bg-linear-to-br ${step.color} items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 w-8 lg:w-12 h-0.5 bg-linear-to-r from-slate-700 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <div className="how-footer text-center mt-12 lg:mt-16">
          <p className="text-sm text-slate-500">
            No credit card required • Setup in under 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
}