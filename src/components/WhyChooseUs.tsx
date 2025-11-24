import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Shield, Award, Rocket, ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const navigate = useNavigate();
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

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast Implementation',
      description: 'Our proven methodologies ensure rapid deployment without compromising quality or security.',
      gradient: 'from-raizing-maroon-400 to-raizing-maroon-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security protocols and compliance standards protect your data and operations.',
      gradient: 'from-raizing-maroon-500 to-raizing-maroon-700'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry Expertise',
      description: 'Decades of combined experience across multiple industries and AI technologies.',
      gradient: 'from-raizing-maroon-600 to-raizing-maroon-800'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Scalable Solutions',
      description: 'Architecture designed to grow with your business from startup to enterprise scale.',
      gradient: 'from-raizing-maroon-400 to-raizing-maroon-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-raizing-cream-50 dark:from-gray-900 to-raizing-teal-900/30 dark:to-gray-800/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
          <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 mb-3 sm:mb-4 bg-raizing-maroon-500/10 border border-raizing-maroon-500/30 rounded-full">
            <span className="text-raizing-maroon-600 text-xs sm:text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4 sm:px-6">
            <span className="text-raizing-teal-900 dark:text-white">The Raizing AI</span>
            <br className="block" />
            <span className="text-raizing-maroon-600 dark:text-raizing-maroon-400">Advantage</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-raizing-teal-900 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-6">
            What sets us apart in the competitive AI automation landscape
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 border border-raizing-teal-900/20 hover:border-raizing-maroon-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex p-3 sm:p-4 bg-gradient-to-r ${feature.gradient} rounded-xl text-white mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-raizing-teal-900 dark:text-white mb-3 group-hover:text-raizing-maroon-600 dark:group-hover:text-raizing-maroon-400 transition-colors break-words">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-raizing-teal-900 dark:text-gray-300 leading-relaxed break-words">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-raizing-maroon-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0" style={{ animationDelay: '600ms' }}>
          <div className="bg-white dark:bg-gray-800 inline-block px-6 sm:px-8 py-4 sm:py-6 rounded-2xl border border-raizing-teal-900/20 shadow-lg">
            <p className="text-raizing-teal-900 dark:text-white text-base sm:text-lg mb-3 sm:mb-4">
              Join <span className="text-raizing-maroon-600 dark:text-raizing-maroon-400 font-bold text-lg sm:text-xl sm:text-2xl">500+</span> companies already transforming their business with AI
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
              {[
                { name: 'ISO Certified', icon: '✓' },
                { name: 'GDPR Compliant', icon: '✓' },
                { name: 'SOC 2 Type II', icon: '✓' }
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 bg-raizing-cream-50 dark:bg-gray-700 rounded-lg border border-raizing-teal-900/20 dark:border-gray-600 transition-colors duration-300 break-words">
                  <span className="text-raizing-maroon-600 dark:text-raizing-maroon-400 font-bold">{badge.icon}</span>
                  <span className="text-xs sm:text-sm text-raizing-teal-900 dark:text-gray-200 break-words">{badge.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8 mt-6 mb-4 sm:mb-6">
              {['Microsoft', 'Google', 'Amazon', 'IBM'].map((company, idx) => (
                <div key={idx} className="text-raizing-teal-900 dark:text-gray-300 font-semibold text-xs sm:text-sm lg:text-base opacity-70 hover:opacity-100 hover:text-raizing-maroon-600 dark:hover:text-raizing-maroon-400 transition-all cursor-pointer break-words">
                  {company}
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/features')}
              className="group inline-flex items-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 hover:scale-105 break-words"
            >
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
