import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Clock, DollarSign, BarChart3 } from 'lucide-react';

export default function Showcase() {
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

  const caseStudies = [
    {
      company: 'Global E-Commerce Leader',
      industry: 'Retail',
      challenge: 'Manual order processing causing delays and errors',
      solution: 'Implemented AI-powered order automation system',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&q=80',
      results: [
        { icon: <Clock className="w-5 h-5" />, metric: '85%', label: 'Time Saved' },
        { icon: <DollarSign className="w-5 h-5" />, metric: '$2M', label: 'Annual Savings' },
        { icon: <TrendingUp className="w-5 h-5" />, metric: '99.8%', label: 'Accuracy Rate' }
      ],
      color: 'from-raizing-maroon-400 to-raizing-maroon-600'
    },
    {
      company: 'Financial Services Firm',
      industry: 'Finance',
      challenge: 'Complex data analysis taking weeks to complete',
      solution: 'Deployed ML-driven analytics and reporting system',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80',
      results: [
        { icon: <Clock className="w-5 h-5" />, metric: '10x', label: 'Faster Analysis' },
        { icon: <BarChart3 className="w-5 h-5" />, metric: '95%', label: 'Accuracy Boost' },
        { icon: <DollarSign className="w-5 h-5" />, metric: '$5M', label: 'ROI Year 1' }
      ],
      color: 'from-raizing-maroon-500 to-raizing-maroon-700'
    },
    {
      company: 'Travel Solution Provider',
      industry: 'Travel & Tourism',
      challenge: 'Booking management inefficiencies and high cancellation rates',
      solution: 'AI-powered booking system with intelligent itinerary management',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop&q=80',
      results: [
        { icon: <TrendingUp className="w-5 h-5" />, metric: '55%', label: 'Reduced Cancellations' },
        { icon: <Clock className="w-5 h-5" />, metric: '50%', label: 'Faster Bookings' },
        { icon: <DollarSign className="w-5 h-5" />, metric: '$2.1M', label: 'Revenue Increase' }
      ],
      color: 'from-raizing-maroon-600 to-raizing-maroon-800'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-raizing-cream-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
          <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 mb-3 sm:mb-4 bg-raizing-maroon-50 border border-raizing-maroon-200 rounded-full">
            <span className="text-raizing-maroon-600 text-xs sm:text-sm font-semibold">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4 px-4 sm:px-6">
            Real Results from Real Companies
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-raizing-teal-900 dark:text-white max-w-3xl mx-auto px-4 sm:px-6">
            See how we've helped businesses achieve transformative results with AI automation
          </p>
        </div>

        <div className="space-y-6 space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative bg-gradient-to-br from-raizing-cream-100 to-white rounded-2xl border border-raizing-teal-900 overflow-hidden hover:border-raizing-maroon-500/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] group/card">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${study.color} group-hover/card:h-1.5 transition-all duration-300`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-raizing-teal-900/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                {/* Case Study Image */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-raizing-cream-100 to-raizing-cream-50">
                  <img 
                    src={study.image}
                    alt={`${study.company} - ${study.industry}`}
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700 max-w-full"
                    loading="eager"
                    onError={(e) => {
                      // Fallback to alternative image sources if the first one fails
                      const target = e.target as HTMLImageElement;
                      if (!target.dataset.retried) {
                        target.dataset.retried = 'true';
                        // Try alternative image URLs based on industry
                        const altImages: { [key: string]: string } = {
                          'Travel & Tourism': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop&q=80',
                          'Healthcare': 'https://images.unsplash.com/photo-1573164574230-7d8e1c4c71d2?w=1200&h=600&fit=crop&q=80',
                          'Retail': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&q=80',
                          'Finance': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80'
                        };
                        // Try travel-specific fallbacks if Travel & Tourism
                        if (study.industry === 'Travel & Tourism' && !target.dataset.travelRetried) {
                          target.dataset.travelRetried = 'true';
                          const travelFallbacks = [
                            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop&q=80',
                            'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop&q=80',
                            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=600&fit=crop&q=80'
                          ];
                          target.src = travelFallbacks[0] || altImages[study.industry] || study.image;
                        } else {
                          target.src = altImages[study.industry] || study.image;
                        }
                      } else {
                        // If all images fail, hide the image and show a colored background instead
                        target.style.display = 'none';
                        const container = target.parentElement;
                        if (container) {
                          container.style.background = `linear-gradient(135deg, ${study.color.replace('from-', '').replace('to-', ', ')})`;
                        }
                      }
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-25 group-hover/card:opacity-15 transition-opacity duration-500`}></div>
                  <div className="absolute top-4 left-4 px-3 sm:px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-md border border-raizing-teal-900/10">
                    <span className="text-xs sm:text-sm font-semibold text-raizing-teal-900 dark:text-white">{study.industry}</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3 sm:mb-4">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-raizing-teal-900 dark:text-white group-hover/card:text-raizing-maroon-600 transition-colors duration-300 break-words">{study.company}</h3>
                        <span className="px-2 sm:px-3 lg:px-4 py-1 bg-raizing-teal-900 text-white text-xs sm:text-sm rounded-full w-fit group-hover/card:bg-raizing-maroon-500 group-hover/card:scale-110 transition-all duration-300 break-words">
                          {study.industry}
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-raizing-teal-900 dark:text-white uppercase mb-1.5 sm:mb-2 break-words">Challenge</h4>
                          <p className="text-xs sm:text-sm lg:text-base text-raizing-teal-800 leading-relaxed break-words">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-raizing-teal-900 dark:text-white uppercase mb-1.5 sm:mb-2 break-words">Solution</h4>
                          <p className="text-xs sm:text-sm lg:text-base text-raizing-teal-800 leading-relaxed break-words">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0 w-auto sm:w-full lg:w-auto">
                      <h4 className="text-xs sm:text-sm font-semibold text-raizing-teal-900 dark:text-white uppercase mb-3 sm:mb-4 break-words">Key Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4">
                        {study.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 sm:gap-4 bg-white p-4 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 group-hover:shadow-lg hover:scale-105 hover:-translate-y-1 group/result"
                          >
                            <div className={`relative p-2 p-3 bg-gradient-to-r ${study.color} rounded-lg text-raizing-cream-200 flex-shrink-0 group-hover/result:scale-110 group-hover/result:rotate-3 transition-all duration-300 shadow-lg`}>
                              <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover/result:opacity-100 transition-opacity duration-300"></div>
                              <div className="relative z-10">{result.icon}</div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-lg sm:text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white group-hover/result:text-raizing-maroon-600 transition-colors duration-300">{result.metric}</div>
                              <div className="text-xs sm:text-sm text-raizing-teal-900 dark:text-white group-hover/result:text-raizing-teal-800 transition-colors duration-300">{result.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 mt-12 text-center animate-on-scroll opacity-0" style={{ animationDelay: '800ms' }}>
          <button
            onClick={() => navigate('/case-studies')}
            className="group relative w-auto px-4 sm:px-6 px-6 sm:px-8 py-2 sm:py-3 py-3 sm:py-4 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 hover:scale-110 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">View All Case Studies</span>
            <div className="absolute inset-0 bg-gradient-to-r from-raizing-maroon-600 to-raizing-maroon-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
