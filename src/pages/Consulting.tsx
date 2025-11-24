import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lightbulb, Target, BarChart3, CheckCircle2, Clock, TrendingUp, Users, FileText, Rocket, Search, ArrowRight, Star, Zap, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIAssessment from '../components/AIAssessment';

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
  'AI Strategy Document',
  'Technology Recommendations',
  'ROI Projections',
  'Implementation Roadmap',
  'Risk Assessment',
  'Success Metrics & KPIs'
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

export default function Consulting() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    let observer: IntersectionObserver | null = null;
    
    // Use setTimeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
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

      // Observe all animate-on-scroll elements
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer?.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-24 pt-28 pb-12 pb-16 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-raizing-maroon-600 hover:text-raizing-maroon-700 transition-colors mb-4 sm:mb-6 mb-6 sm:mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs sm:text-sm sm:text-base font-medium">Back to Home</span>
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-raizing-maroon-50 border border-raizing-maroon-200 rounded-xl mb-4 sm:mb-6">
              <Lightbulb className="w-8 h-8 text-raizing-maroon-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-6xl font-bold mb-3 sm:mb-4 mb-4 sm:mb-6">
              <span className="text-raizing-teal-900 dark:text-white">AI</span>{' '}
              <span className="text-raizing-maroon-600">Consulting</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Expert guidance to navigate the AI landscape and implement the right solutions for your business
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 rounded-2xl border border-raizing-teal-900 p-6 sm:p-8 lg:p-10 shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4 mb-4 sm:mb-6">
              Navigate Your AI Journey with Confidence
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                The AI landscape is complex and rapidly evolving. Our AI Consulting service provides you with expert guidance 
                to make informed decisions, avoid costly mistakes, and implement solutions that deliver real business value. 
                We help you understand which AI technologies are right for your business and how to implement them effectively.
              </p>
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                From initial strategy development to technology selection and implementation planning, our consultants work 
                closely with your team to create a roadmap that aligns with your business objectives, budget, and timeline.
              </p>
              <div className="mt-6 p-6 bg-gradient-to-br from-raizing-maroon-50 to-raizing-cream-50 rounded-lg border border-raizing-maroon-200">
                <h3 className="text-base sm:text-lg font-bold text-raizing-teal-900 dark:text-white mb-3">Why Choose Our Consulting?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-raizing-teal-800">
                    <CheckCircle2 className="w-5 h-5 text-raizing-maroon-500 flex-shrink-0 mt-0.5" />
                    <span>Expert consultants with 10+ years of AI implementation experience</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-raizing-teal-800">
                    <CheckCircle2 className="w-5 h-5 text-raizing-maroon-500 flex-shrink-0 mt-0.5" />
                    <span>Proven methodologies used in 500+ successful projects</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-raizing-teal-800">
                    <CheckCircle2 className="w-5 h-5 text-raizing-maroon-500 flex-shrink-0 mt-0.5" />
                    <span>Industry-specific expertise across 15+ sectors</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-raizing-teal-800">
                    <CheckCircle2 className="w-5 h-5 text-raizing-maroon-500 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive deliverables with actionable recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Our Consulting Services
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Comprehensive consulting services to guide your AI transformation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-lg text-white mb-3 sm:mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              What You'll Receive
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Comprehensive deliverables to guide your AI implementation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 gap-4 sm:gap-6">
            {deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 p-6 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-raizing-maroon-500 flex-shrink-0 mt-1" />
                  <span className="text-base sm:text-lg font-semibold text-raizing-teal-900 dark:text-white">{deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Why Choose Our Consulting
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              The benefits of working with our AI consultants
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-8 rounded-xl border border-raizing-teal-900 text-center hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-raizing-maroon-500 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-base sm:text-lg lg:text-xl font-semibold text-raizing-teal-900 dark:text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-xs sm:text-sm sm:text-base text-raizing-teal-900 dark:text-white">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Our Consulting Approach
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              A structured methodology that ensures successful AI transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Comprehensive evaluation of your current state, goals, and AI readiness.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop tailored AI strategy aligned with business objectives.'
              },
              {
                step: '03',
                title: 'Planning',
                description: 'Create detailed implementation roadmap with timelines and milestones.'
              },
              {
                step: '04',
                title: 'Execution',
                description: 'Ongoing support and guidance throughout implementation phase.'
              }
            ].map((step, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-raizing-maroon-500 mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Industries We Serve
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Deep expertise across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-3 sm:gap-4 gap-4 sm:gap-6">
            {['Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Education', 'Real Estate', 'Legal', 'Technology'].map((industry, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 p-6 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-lg text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Zap className="w-6 h-6 text-raizing-maroon-500 mx-auto mb-3" />
                <span className="text-base sm:text-lg font-semibold text-raizing-teal-900 dark:text-white">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Client Success Stories
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              How our consulting has transformed businesses
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                quote: 'The strategic guidance helped us avoid costly mistakes and implement AI solutions that delivered 300% ROI in the first year.',
                author: 'Robert Martinez',
                role: 'CTO',
                company: 'Enterprise Solutions',
                rating: 5
              },
              {
                quote: 'Raizing AI\'s consultants understood our business deeply and created a roadmap that was both ambitious and achievable.',
                author: 'Jennifer Lee',
                role: 'VP of Innovation',
                company: 'Global Tech Corp',
                rating: 5
              },
              {
                quote: 'The best consulting experience we\'ve had. Clear strategy, practical recommendations, and ongoing support made all the difference.',
                author: 'Thomas Anderson',
                role: 'CEO',
                company: 'Digital Ventures',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-raizing-maroon-500 text-raizing-maroon-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm sm:text-base text-raizing-teal-800 mb-4 sm:mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-raizing-maroon-400 to-raizing-maroon-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-raizing-teal-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-xs sm:text-sm text-raizing-teal-900 dark:text-white">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white">
              Common questions about AI consulting
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How long does a typical consulting engagement last?',
                answer: 'Consulting engagements typically range from 4-12 weeks, depending on scope and complexity. We offer both short-term strategic sessions and long-term transformation partnerships.'
              },
              {
                question: 'What deliverables will we receive?',
                answer: 'You\'ll receive comprehensive documentation including AI strategy documents, technology recommendations, ROI projections, implementation roadmaps, risk assessments, and success metrics tailored to your business.'
              },
              {
                question: 'Do you work with businesses of all sizes?',
                answer: 'Yes, we work with startups, mid-size companies, and large enterprises. Our consulting approach is scalable and tailored to your organization\'s size, industry, and specific needs.'
              },
              {
                question: 'Can you help with implementation after consulting?',
                answer: 'Absolutely! Many clients choose to work with us for both consulting and implementation. We can provide end-to-end support from strategy through execution and optimization.'
              },
              {
                question: 'What makes your consulting different?',
                answer: 'We combine deep technical expertise with business acumen. Our consultants have hands-on implementation experience, ensuring recommendations are both strategic and practical. We focus on measurable ROI and long-term success.'
              },
              {
                question: 'How do you ensure confidentiality?',
                answer: 'We sign comprehensive NDAs and follow strict confidentiality protocols. All client information is handled with the utmost security, and we comply with industry standards for data protection.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 p-6 rounded-xl border border-raizing-teal-900"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 mb-4 sm:mb-6">
            <span className="text-raizing-teal-900 dark:text-white">Ready to Start Your</span>
            <br className="block" />
            <span className="text-raizing-maroon-600">AI Journey?</span>
          </h2>
          <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white mb-4 sm:mb-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI consulting services can help you make the right decisions. Get in touch for a free consultation.
          </p>
          <div className="flex flex-col flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="group px-4 sm:px-6 px-6 sm:px-8 py-2 sm:py-3 py-3 sm:py-4 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/case-studies')}
              className="px-4 sm:px-6 px-6 sm:px-8 py-2 sm:py-3 py-3 sm:py-4 bg-raizing-cream-200/10 backdrop-blur-sm text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg border border-raizing-cream-200/20 hover:bg-raizing-cream-200/20 transition-all duration-300"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <AIAssessment />
      <Footer />
    </div>
  );
}

