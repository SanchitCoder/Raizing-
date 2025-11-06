import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lightbulb, Target, BarChart3, CheckCircle2, Clock, TrendingUp, Users, FileText, Rocket, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'AI Strategy Development',
    description: 'Comprehensive AI strategy aligned with your business goals and objectives.'
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Technology Stack Selection',
    description: 'Expert guidance in choosing the right AI tools and platforms for your needs.'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'ROI Analysis & Planning',
    description: 'Detailed financial analysis and ROI projections for AI initiatives.'
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Implementation Roadmaps',
    description: 'Step-by-step roadmaps for successful AI adoption and integration.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Team Assessment',
    description: 'Evaluation of your team\'s readiness and recommendations for skill development.'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Quick Wins Identification',
    description: 'Identify high-impact, low-effort AI opportunities for immediate results.'
  }
];

const deliverables = [
  {
    title: 'AI Strategy Document',
    description: 'Comprehensive strategy document outlining your AI vision, goals, and implementation plan.'
  },
  {
    title: 'Technology Recommendations',
    description: 'Detailed analysis and recommendations for AI tools, platforms, and vendors.'
  },
  {
    title: 'ROI Projections',
    description: 'Financial models showing expected returns, costs, and payback periods.'
  },
  {
    title: 'Implementation Roadmap',
    description: 'Phased approach with timelines, milestones, and resource requirements.'
  },
  {
    title: 'Risk Assessment',
    description: 'Identification of potential challenges and mitigation strategies.'
  },
  {
    title: 'Success Metrics',
    description: 'KPIs and metrics to measure the success of your AI initiatives.'
  }
];

const benefits = [
  {
    metric: '3-6 Months',
    label: 'Faster Implementation',
    description: 'Accelerate your AI journey with expert guidance'
  },
  {
    metric: '40%',
    label: 'Cost Savings',
    description: 'Avoid costly mistakes and optimize your AI investments'
  },
  {
    metric: '95%',
    label: 'Success Rate',
    description: 'Higher success rates with proven methodologies'
  },
  {
    metric: '24/7',
    label: 'Expert Support',
    description: 'Ongoing consultation and support throughout your journey'
  }
];

export default function AIConsulting() {
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
            <div className="inline-flex items-center justify-center p-4 bg-raizing-maroon-500/10 backdrop-blur-sm border border-raizing-maroon-500/30 rounded-xl mb-6">
              <Lightbulb className="w-8 h-8 text-raizing-maroon-400" />
            </div>
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 bg-raizing-maroon-500/10 backdrop-blur-sm border border-raizing-maroon-500/30 rounded-full">
              <span className="text-raizing-maroon-400 text-xs sm:text-sm font-semibold">Our Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-raizing-cream-200 mb-4 sm:mb-6">
              AI Consulting
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-raizing-cream-300 max-w-3xl mx-auto">
              Expert guidance to navigate the AI landscape and implement the right solutions for your business
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl sm:rounded-2xl border border-raizing-teal-200 p-6 sm:p-8 md:p-10 shadow-lg animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-4 sm:mb-6">
              Navigate Your AI Journey with Confidence
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed mb-4">
              The AI landscape is complex and rapidly evolving. Our AI Consulting service provides you with expert guidance 
              to make informed decisions, avoid costly mistakes, and implement solutions that deliver real business value. 
              We help you understand which AI technologies are right for your business and how to implement them effectively.
            </p>
            <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
              From initial strategy development to technology selection and implementation planning, our consultants work 
              closely with your team to create a roadmap that aligns with your business objectives, budget, and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Our Consulting Services
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-700 max-w-3xl mx-auto">
              Comprehensive consulting services to guide your AI transformation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-6 sm:p-8 rounded-xl border border-raizing-teal-200 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-lg text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              What You'll Receive
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-700 max-w-3xl mx-auto">
              Comprehensive deliverables to guide your AI implementation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white p-6 sm:p-8 rounded-xl border border-raizing-teal-200 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-raizing-maroon-500 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-raizing-teal-900">
                    {deliverable.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-raizing-teal-700 leading-relaxed">
                  {deliverable.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Why Choose Our Consulting
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-700 max-w-3xl mx-auto">
              The benefits of working with our AI consultants
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-6 sm:p-8 rounded-xl border border-raizing-teal-200 text-center hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-raizing-maroon-500 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg sm:text-xl font-semibold text-raizing-teal-900 mb-2">
                  {benefit.label}
                </div>
                <p className="text-sm sm:text-base text-raizing-teal-700">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-teal-900 via-raizing-teal-800 to-raizing-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-cream-200 mb-4 sm:mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-base sm:text-lg text-raizing-cream-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI consulting services can help you make the right decisions. Get in touch for a free consultation.
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
              Get Started Today
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-raizing-cream-200/10 backdrop-blur-sm text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg border border-raizing-cream-200/20 hover:bg-raizing-cream-200/20 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

