import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, DollarSign, TrendingUp, BarChart3, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const caseStudies = [
  {
    id: 1,
    company: 'Global E-Commerce Leader',
    industry: 'Retail',
    challenge: 'Manual order processing causing delays and errors',
    solution: 'Implemented AI-powered order automation system',
    results: [
      { icon: <Clock className="w-5 h-5" />, metric: '85%', label: 'Time Saved' },
      { icon: <DollarSign className="w-5 h-5" />, metric: '$2M', label: 'Annual Savings' },
      { icon: <TrendingUp className="w-5 h-5" />, metric: '99.8%', label: 'Accuracy Rate' }
    ],
    color: 'from-raizing-maroon-400 to-raizing-maroon-600',
    description: 'A leading e-commerce platform struggled with manual order processing that resulted in delays, errors, and customer dissatisfaction. We implemented a comprehensive AI automation system that transformed their entire order fulfillment workflow.',
    technologies: ['Machine Learning', 'Process Automation', 'API Integration', 'Data Analytics'],
    timeline: '6 months',
    teamSize: '8 specialists'
  },
  {
    id: 2,
    company: 'Financial Services Firm',
    industry: 'Finance',
    challenge: 'Complex data analysis taking weeks to complete',
    solution: 'Deployed ML-driven analytics and reporting system',
    results: [
      { icon: <Clock className="w-5 h-5" />, metric: '10x', label: 'Faster Analysis' },
      { icon: <BarChart3 className="w-5 h-5" />, metric: '95%', label: 'Accuracy Boost' },
      { icon: <DollarSign className="w-5 h-5" />, metric: '$5M', label: 'ROI Year 1' }
    ],
    color: 'from-raizing-maroon-500 to-raizing-maroon-700',
    description: 'A major financial services firm needed to accelerate their data analysis processes. Traditional methods took weeks to complete complex reports. Our ML-driven solution reduced analysis time by 90% while improving accuracy.',
    technologies: ['Machine Learning', 'Natural Language Processing', 'Cloud Computing', 'Real-time Analytics'],
    timeline: '8 months',
    teamSize: '12 specialists'
  },
  {
    id: 3,
    company: 'Healthcare Provider',
    industry: 'Healthcare',
    challenge: 'Patient scheduling inefficiencies and no-shows',
    solution: 'AI scheduling system with predictive reminders',
    results: [
      { icon: <TrendingUp className="w-5 h-5" />, metric: '60%', label: 'Fewer No-Shows' },
      { icon: <Clock className="w-5 h-5" />, metric: '40%', label: 'Time Saved' },
      { icon: <DollarSign className="w-5 h-5" />, metric: '$1.5M', label: 'Revenue Increase' }
    ],
    color: 'from-raizing-maroon-600 to-raizing-maroon-800',
    description: 'A large healthcare network faced significant challenges with patient scheduling. High no-show rates and inefficient booking systems were impacting both patient care and revenue. Our AI-powered solution transformed their scheduling operations.',
    technologies: ['Predictive Analytics', 'Mobile Integration', 'Automated Messaging', 'CRM Integration'],
    timeline: '5 months',
    teamSize: '6 specialists'
  },
  {
    id: 4,
    company: 'Manufacturing Corporation',
    industry: 'Manufacturing',
    challenge: 'Supply chain disruptions and inventory management issues',
    solution: 'AI-powered supply chain optimization platform',
    results: [
      { icon: <TrendingUp className="w-5 h-5" />, metric: '75%', label: 'Efficiency Gain' },
      { icon: <DollarSign className="w-5 h-5" />, metric: '$3.2M', label: 'Cost Reduction' },
      { icon: <CheckCircle2 className="w-5 h-5" />, metric: '98%', label: 'On-Time Delivery' }
    ],
    color: 'from-raizing-maroon-400 to-raizing-maroon-600',
    description: 'A manufacturing corporation struggled with supply chain inefficiencies leading to production delays and excess inventory costs. Our AI solution optimized their entire supply chain from procurement to delivery.',
    technologies: ['Predictive Analytics', 'IoT Integration', 'Supply Chain Optimization', 'Real-time Monitoring'],
    timeline: '10 months',
    teamSize: '15 specialists'
  },
  {
    id: 5,
    company: 'Real Estate Platform',
    industry: 'Real Estate',
    challenge: 'Property valuation inconsistencies and slow processing',
    solution: 'ML-based property valuation and recommendation engine',
    results: [
      { icon: <Clock className="w-5 h-5" />, metric: '80%', label: 'Faster Processing' },
      { icon: <TrendingUp className="w-5 h-5" />, metric: '92%', label: 'Accuracy Rate' },
      { icon: <DollarSign className="w-5 h-5" />, metric: '$4.5M', label: 'Revenue Growth' }
    ],
    color: 'from-raizing-maroon-500 to-raizing-maroon-700',
    description: 'A real estate platform needed to improve property valuation accuracy and speed up their recommendation process. Our ML solution analyzes market trends, property features, and historical data to provide accurate valuations instantly.',
    technologies: ['Machine Learning', 'Computer Vision', 'Market Analysis', 'Recommendation Systems'],
    timeline: '7 months',
    teamSize: '10 specialists'
  },
  {
    id: 6,
    company: 'Educational Institution',
    industry: 'Education',
    challenge: 'Student engagement and personalized learning paths',
    solution: 'AI-driven personalized learning platform',
    results: [
      { icon: <TrendingUp className="w-5 h-5" />, metric: '45%', label: 'Engagement Increase' },
      { icon: <CheckCircle2 className="w-5 h-5" />, metric: '88%', label: 'Completion Rate' },
      { icon: <BarChart3 className="w-5 h-5" />, metric: '35%', label: 'Performance Boost' }
    ],
    color: 'from-raizing-maroon-600 to-raizing-maroon-800',
    description: 'A large educational institution wanted to improve student outcomes through personalized learning. Our AI platform analyzes learning patterns and adapts content delivery to match each student\'s needs and learning style.',
    technologies: ['Adaptive Learning', 'Natural Language Processing', 'Learning Analytics', 'Content Personalization'],
    timeline: '9 months',
    teamSize: '14 specialists'
  }
];

export default function CaseStudies() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
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
    <div className="min-h-screen bg-raizing-cream-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-raizing-teal-900 via-raizing-teal-800 to-raizing-teal-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-raizing-cream-200 hover:text-raizing-maroon-400 transition-colors mb-6 sm:mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base font-medium">Back to Home</span>
          </button>
          
          <div className="text-center">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 bg-raizing-maroon-500/10 backdrop-blur-sm border border-raizing-maroon-500/30 rounded-full">
              <span className="text-raizing-maroon-400 text-xs sm:text-sm font-semibold">Case Studies</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-raizing-cream-200 mb-4 sm:mb-6">
              Our Success Stories
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-raizing-cream-300 max-w-3xl mx-auto">
              Real projects, real results. Discover how we've transformed businesses across industries with AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="animate-on-scroll opacity-0 group relative bg-white rounded-xl sm:rounded-2xl border border-raizing-teal-200 overflow-hidden hover:border-raizing-maroon-500/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${study.color}`}></div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 mb-2">{study.company}</h3>
                      <span className={`inline-block px-2 sm:px-3 py-1 bg-raizing-teal-100 text-raizing-teal-700 text-xs sm:text-sm rounded-full`}>
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6">
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-raizing-teal-600 uppercase mb-1.5">Challenge</h4>
                      <p className="text-sm sm:text-base text-raizing-teal-800">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-raizing-teal-600 uppercase mb-1.5">Solution</h4>
                      <p className="text-sm sm:text-base text-raizing-teal-800">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-raizing-teal-600 uppercase mb-3">Key Results</h4>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {study.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="bg-raizing-cream-50 p-2 sm:p-3 rounded-lg border border-raizing-teal-200 hover:border-raizing-maroon-500/50 transition-all duration-300 text-center"
                        >
                          <div className={`inline-flex p-1.5 sm:p-2 bg-gradient-to-r ${study.color} rounded-lg text-raizing-cream-200 mb-1.5 sm:mb-2`}>
                            {result.icon}
                          </div>
                          <div className="text-lg sm:text-xl font-bold text-raizing-teal-900">{result.metric}</div>
                          <div className="text-xs sm:text-sm text-raizing-teal-700">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-raizing-teal-200 space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-raizing-teal-600 font-medium">Timeline:</span>
                      <span className="text-raizing-teal-800">{study.timeline}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-raizing-teal-600 font-medium">Team Size:</span>
                      <span className="text-raizing-teal-800">{study.teamSize}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-raizing-teal-200">
                    <h4 className="text-xs sm:text-sm font-semibold text-raizing-teal-600 uppercase mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-3 py-1 text-xs bg-raizing-maroon-50 text-raizing-maroon-700 rounded-full border border-raizing-maroon-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r ${study.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-teal-900 via-raizing-teal-800 to-raizing-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-cream-200 mb-4 sm:mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-base sm:text-lg text-raizing-cream-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your business with AI automation. Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 hover:scale-105"
            >
              Let's Connect
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-raizing-cream-200/10 backdrop-blur-sm text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg border border-raizing-cream-200/20 hover:bg-raizing-cream-200/20 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

