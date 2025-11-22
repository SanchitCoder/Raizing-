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
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-teal-900 via-raizing-teal-800 to-raizing-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-raizing-maroon-500/10 rounded-full blur-3xl animate-pulse-slow hidden sm:block"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-raizing-maroon-400/10 rounded-full blur-3xl animate-pulse-slow hidden sm:block" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 bg-raizing-maroon-500/10 backdrop-blur-sm border border-raizing-maroon-500/30 rounded-full">
            <span className="text-raizing-maroon-400 text-xs sm:text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-raizing-cream-200 mb-3 sm:mb-4 px-4">
            The Raizing AI Advantage
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-raizing-cream-300 max-w-3xl mx-auto px-4">
            What sets us apart in the competitive AI automation landscape
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full bg-gradient-to-br from-raizing-cream-200/5 to-raizing-cream-200/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-raizing-cream-200/10 hover:border-raizing-maroon-500/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex p-3 sm:p-4 bg-gradient-to-r ${feature.gradient} rounded-lg sm:rounded-xl text-raizing-cream-200 mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-raizing-cream-200 mb-2 sm:mb-3 group-hover:text-raizing-maroon-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-raizing-cream-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-raizing-maroon-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0" style={{ animationDelay: '600ms' }}>
          <div className="glass-card inline-block px-8 py-6 rounded-2xl border border-raizing-maroon-500/20">
            <p className="text-raizing-cream-300 text-lg mb-4">
              Join <span className="text-raizing-maroon-400 font-bold text-2xl">500+</span> companies already transforming their business with AI
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
              {[
                { name: 'ISO Certified', icon: '✓' },
                { name: 'GDPR Compliant', icon: '✓' },
                { name: 'SOC 2 Type II', icon: '✓' }
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-raizing-cream-200/10 backdrop-blur-sm rounded-lg border border-raizing-cream-200/20">
                  <span className="text-raizing-maroon-400 font-bold">{badge.icon}</span>
                  <span className="text-sm text-raizing-cream-300">{badge.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6 mb-6">
              {['Microsoft', 'Google', 'Amazon', 'IBM'].map((company, idx) => (
                <div key={idx} className="text-raizing-cream-400 font-semibold text-sm sm:text-base opacity-50 hover:opacity-100 hover:text-raizing-maroon-400 transition-all cursor-pointer">
                  {company}
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/features')}
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 hover:scale-105"
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
