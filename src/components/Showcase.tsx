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
      results: [
        { icon: <Clock className="w-5 h-5" />, metric: '10x', label: 'Faster Analysis' },
        { icon: <BarChart3 className="w-5 h-5" />, metric: '95%', label: 'Accuracy Boost' },
        { icon: <DollarSign className="w-5 h-5" />, metric: '$5M', label: 'ROI Year 1' }
      ],
      color: 'from-raizing-maroon-500 to-raizing-maroon-700'
    },
    {
      company: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Patient scheduling inefficiencies and no-shows',
      solution: 'AI scheduling system with predictive reminders',
      results: [
        { icon: <TrendingUp className="w-5 h-5" />, metric: '60%', label: 'Fewer No-Shows' },
        { icon: <Clock className="w-5 h-5" />, metric: '40%', label: 'Time Saved' },
        { icon: <DollarSign className="w-5 h-5" />, metric: '$1.5M', label: 'Revenue Increase' }
      ],
      color: 'from-raizing-maroon-600 to-raizing-maroon-800'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 bg-raizing-maroon-50 border border-raizing-maroon-200 rounded-full">
            <span className="text-raizing-maroon-600 text-xs sm:text-sm font-semibold">Success Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-raizing-teal-900 mb-3 sm:mb-4 px-4">
            Real Results from Real Companies
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-raizing-teal-700 max-w-3xl mx-auto px-4">
            See how we've helped businesses achieve transformative results with AI automation
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative bg-gradient-to-br from-raizing-cream-100 to-white rounded-xl sm:rounded-2xl border border-raizing-teal-200 overflow-hidden hover:border-raizing-maroon-500/50 hover:shadow-2xl transition-all duration-500">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${study.color}`}></div>

                <div className="p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900">{study.company}</h3>
                        <span className="px-2 sm:px-3 py-1 bg-raizing-teal-100 text-raizing-teal-700 text-xs sm:text-sm rounded-full w-fit">
                          {study.industry}
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-raizing-teal-600 uppercase mb-2">Challenge</h4>
                          <p className="text-raizing-teal-800">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-raizing-teal-600 uppercase mb-2">Solution</h4>
                          <p className="text-raizing-teal-800">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <h4 className="text-sm font-semibold text-raizing-teal-600 uppercase mb-4">Key Results</h4>
                      <div className="grid gap-4">
                        {study.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-4 bg-white p-4 rounded-xl border border-raizing-teal-200 hover:border-raizing-maroon-500/50 transition-all duration-300 group-hover:shadow-lg"
                          >
                            <div className={`p-3 bg-gradient-to-r ${study.color} rounded-lg text-raizing-cream-200`}>
                              {result.icon}
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-raizing-teal-900">{result.metric}</div>
                              <div className="text-sm text-raizing-teal-700">{result.label}</div>
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

        <div className="mt-12 text-center animate-on-scroll opacity-0" style={{ animationDelay: '800ms' }}>
          <button
            onClick={() => navigate('/case-studies')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 hover:scale-105"
          >
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
