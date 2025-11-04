import { useEffect, useRef } from 'react';
import { Bot, TrendingUp, Users } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 bg-raizing-maroon-50 border border-raizing-maroon-200 rounded-full">
            <span className="text-raizing-maroon-600 text-xs sm:text-sm font-semibold">About Raizing AI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-raizing-teal-900 mb-3 sm:mb-4 px-4">
            Your Partner in AI Transformation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-raizing-teal-700 max-w-3xl mx-auto px-4">
            We specialize in three core areas that drive business innovation and efficiency in the AI era
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: <Bot className="w-12 h-12" />,
              title: 'AI Workflow Automation',
              description: 'Streamline repetitive tasks and optimize business processes with intelligent automation solutions that save time and reduce costs.'
            },
            {
              icon: <TrendingUp className="w-12 h-12" />,
              title: 'AI Consulting',
              description: 'Strategic guidance on AI implementation, tool selection, and integration to maximize ROI and achieve your business objectives.'
            },
            {
              icon: <Users className="w-12 h-12" />,
              title: 'AI Training & Workshops',
              description: 'Comprehensive training programs that empower your team with the skills and knowledge to leverage AI tools effectively.'
            }
          ].map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group relative bg-gradient-to-br from-raizing-cream-100 to-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-raizing-teal-200 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-raizing-maroon-500/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-raizing-maroon-500/5 rounded-full blur-2xl group-hover:bg-raizing-maroon-500/10 transition-all duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-raizing-maroon-500 to-raizing-maroon-600 rounded-xl flex items-center justify-center text-raizing-cream-200 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-raizing-teal-700 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
