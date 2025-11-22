import { useEffect, useRef } from 'react';

export default function CompanyLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const companies = [
    { name: 'NexGen AI Solutions', logo: 'NexGen AI' },
    { name: 'QuantumTech Innovations', logo: 'QuantumTech' },
    { name: 'SynthMind Systems', logo: 'SynthMind' },
    { name: 'DataFlow Dynamics', logo: 'DataFlow' },
    { name: 'IntelliCore Technologies', logo: 'IntelliCore' },
    { name: 'CloudVault Enterprises', logo: 'CloudVault' },
    { name: 'AutoStream AI', logo: 'AutoStream' },
    { name: 'NeuralNet Works', logo: 'NeuralNet' },
    { name: 'TechPulse Global', logo: 'TechPulse' },
    { name: 'SmartBridge Solutions', logo: 'SmartBridge' },
  ];

  // Duplicate the array multiple times for seamless loop
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  useEffect(() => {
    // Intersection Observer for heading animation
    const headingElement = headingRef.current;
    if (headingElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.classList.remove('opacity-0');
            }
          });
        },
        { threshold: 0.1 }
      );

      // Use setTimeout to ensure DOM is ready
      const timer = setTimeout(() => {
        observer.observe(headingElement);

        // Make visible immediately if already in viewport
        const rect = headingElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          headingElement.classList.add('animate-fade-in-up');
          headingElement.classList.remove('opacity-0');
        }
      }, 100);

      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.8; // pixels per frame
    let animationId: number;

    // Calculate the width of one set of companies
    const calculateSingleSetWidth = () => {
      // Since we have 3 sets, divide by 3
      return scrollContainer.scrollWidth / 3;
    };

    let singleSetWidth = calculateSingleSetWidth();

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset to 0 when we've scrolled one full set for seamless loop
      if (scrollPosition >= singleSetWidth) {
        scrollPosition = scrollPosition - singleSetWidth;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Recalculate on resize
    const handleResize = () => {
      singleSetWidth = calculateSingleSetWidth();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-raizing-cream-50 to-white border-y border-raizing-teal-900/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headingRef} className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 bg-raizing-maroon-50 border border-raizing-maroon-200 rounded-full">
            <span className="text-raizing-maroon-600 text-xs sm:text-sm font-semibold">Our Partners</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-2 sm:mb-3">
            Companies That Work With Us
          </h2>
          <p className="text-base sm:text-lg text-raizing-teal-900/70 max-w-2xl mx-auto mb-4">
            Trusted brands that have integrated our AI solutions to transform their business operations
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-raizing-maroon-500 to-transparent mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 md:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 md:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={scrollRef}
            className="flex items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20"
            style={{ willChange: 'transform' }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-white rounded-lg sm:rounded-xl border border-raizing-teal-900/10 hover:border-raizing-teal-900/40 transition-all duration-500 hover:shadow-xl hover:scale-110 hover:-translate-y-1 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-raizing-cream-50">
                  <div className="text-gray-500 group-hover:text-raizing-teal-900 transition-all duration-300 font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap tracking-tight">
                    {company.logo}
                  </div>
                  {company.name !== company.logo && (
                    <div className="text-xs text-gray-400 group-hover:text-gray-600 mt-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {company.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

