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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-raizing-cream-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
          <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 mb-3 sm:mb-4 bg-raizing-maroon-50 border border-raizing-maroon-200 rounded-full">
            <span className="text-raizing-maroon-600 text-xs sm:text-sm font-semibold">About Raizing AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4 px-4 sm:px-6">
            Your Partner in AI Transformation
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-raizing-teal-900 dark:text-white max-w-3xl mx-auto px-4 sm:px-6">
            We specialize in three core areas that drive business innovation and efficiency in the AI era
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              icon: <Bot className="w-10 h-10 sm:w-12 sm:h-12" />,
              title: 'AI Workflow Automation',
              description: 'Streamline repetitive tasks and optimize business processes with intelligent automation solutions that save time and reduce costs.',
              video: '/AI_Workflow_Automation_Video_Generation.mp4'
            },
            {
              icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12" />,
              title: 'AI Consulting',
              description: 'Strategic guidance on AI implementation, tool selection, and integration to maximize ROI and achieve your business objectives.',
              video: '/AI_Consulting_Video_Generation_Request.mp4'
            },
            {
              icon: <Users className="w-10 h-10 sm:w-12 sm:h-12" />,
              title: 'AI Training & Workshops',
              description: 'Comprehensive training programs that empower your team with the skills and knowledge to leverage AI tools effectively.',
              video: '/AI_Training_Video_Generation.mp4'
            }
          ].map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group relative bg-gradient-to-br from-raizing-cream-100 to-white rounded-2xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-raizing-maroon-500/20 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Service Video */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-raizing-cream-100 to-raizing-cream-50">
                <video 
                  src={service.video}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 max-w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-b from-raizing-maroon-500/20 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 relative inline-flex p-3 bg-gradient-to-br from-raizing-maroon-500 to-raizing-maroon-600 rounded-xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10">
                  {service.icon}
                </div>
              </div>

              <div className="p-8 relative z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-raizing-maroon-500/5 rounded-full blur-2xl group-hover:bg-raizing-maroon-500/20 group-hover:scale-150 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-raizing-teal-900/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4 group-hover:text-raizing-maroon-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-xs sm:text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed group-hover:text-raizing-teal-800 transition-colors duration-300">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
