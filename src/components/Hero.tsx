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
    <section className="relative min-h-screen flex items-center justify-center bg-raizing-cream-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-raizing-maroon-500/10 rounded-full blur-3xl animate-float hidden sm:block"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-raizing-teal-900/10 rounded-full blur-3xl animate-float-delayed hidden sm:block"></div>

      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center opacity-0">
        <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 bg-raizing-maroon-50 border border-raizing-maroon-200 rounded-full">
          <span className="text-raizing-maroon-600 text-xs sm:text-sm font-semibold">AI-Powered Business Transformation</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight px-2 hover:scale-105 transition-transform duration-500">
          <span className="text-raizing-teal-900">Empowering the Future</span>
          <br className="hidden sm:block" />
          <span className="text-raizing-maroon-600"> with AI Automation</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-raizing-teal-900 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Transform your business with cutting-edge AI automation solutions. We help companies streamline workflows,
          integrate intelligent tools, and train teams for the AI-driven future.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <button
            onClick={scrollToContact}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 hover:scale-110 hover:shadow-2xl flex items-center justify-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">Let's Connect</span>
            <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-raizing-maroon-600 to-raizing-maroon-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"></div>
          </button>
          <button
            onClick={scrollToVideo}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-raizing-teal-900 rounded-lg font-semibold text-base sm:text-lg border border-raizing-teal-900/20 hover:bg-raizing-teal-900 hover:text-raizing-cream-50 hover:border-raizing-teal-900 hover:scale-110 transition-all duration-300 hover:shadow-xl"
          >
            <span className="relative z-10">Watch Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '50+', label: 'Enterprise Clients' }
          ].map((stat, index) => (
            <div key={index} className="group bg-white p-4 sm:p-6 rounded-xl border border-raizing-teal-900/20 hover:border-raizing-maroon-500/60 hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-raizing-maroon-500/20 animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-3xl sm:text-4xl font-bold text-raizing-maroon-600 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
              <div className="text-sm sm:text-base text-raizing-teal-900 group-hover:text-raizing-teal-800 transition-colors duration-300">{stat.label}</div>
              <div className="absolute inset-0 bg-gradient-to-br from-raizing-maroon-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-raizing-maroon-500/50 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-raizing-maroon-600 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
