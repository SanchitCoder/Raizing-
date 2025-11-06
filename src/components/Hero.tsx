import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVideo = () => {
    document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-raizing-teal-900 via-raizing-teal-800 to-raizing-teal-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-raizing-maroon-500/5 animate-pulse-slow"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-raizing-maroon-500/20 rounded-full blur-3xl animate-float hidden sm:block"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-raizing-maroon-400/10 rounded-full blur-3xl animate-float-delayed hidden sm:block"></div>

      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center opacity-0">
        <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 bg-raizing-maroon-500/10 backdrop-blur-sm border border-raizing-maroon-500/30 rounded-full">
          <span className="text-raizing-maroon-400 text-xs sm:text-sm font-medium">AI-Powered Business Transformation</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-raizing-cream-200 via-raizing-cream-300 to-raizing-cream-400 leading-tight px-2">
          Empowering the Future<br className="hidden sm:block" /> with AI Automation
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-raizing-cream-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Transform your business with cutting-edge AI automation solutions. We help companies streamline workflows,
          integrate intelligent tools, and train teams for the AI-driven future.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <button
            onClick={scrollToContact}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 hover:scale-105 flex items-center justify-center gap-2"
          >
            Let's Connect
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToVideo}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-raizing-cream-200/10 backdrop-blur-sm text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg border border-raizing-cream-200/20 hover:bg-raizing-cream-200/20 transition-all duration-300"
          >
            Watch Demo
          </button>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '50+', label: 'Enterprise Clients' }
          ].map((stat, index) => (
            <div key={index} className="glass-card p-4 sm:p-6 rounded-xl border border-raizing-maroon-500/20 hover:border-raizing-maroon-500/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-raizing-maroon-400 mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-raizing-cream-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-raizing-maroon-500/50 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-raizing-maroon-400 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
