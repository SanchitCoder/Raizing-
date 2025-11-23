import { useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Workflow, Lightbulb, GraduationCap, Terminal, ArrowRight, CheckCircle2, Star, Zap, Shield, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIAssessment from '../components/AIAssessment';

const services = [
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'AI Workflow Automation',
    description: 'Transform manual processes into intelligent, automated workflows that run 24/7.',
    link: '/automation',
    color: 'from-raizing-maroon-400 to-raizing-maroon-600'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'AI Consulting',
    description: 'Expert guidance to navigate the AI landscape and implement the right solutions.',
    link: '/consulting',
    color: 'from-raizing-maroon-500 to-raizing-maroon-700'
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'AI Training & Workshops',
    description: 'Hands-on training programs that empower teams with practical AI skills.',
    link: '/training',
    color: 'from-raizing-maroon-600 to-raizing-maroon-800'
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: 'AI Development',
    description: 'Custom AI solutions and applications built to drive innovation.',
    link: '/development',
    color: 'from-raizing-maroon-500 to-raizing-maroon-700'
  }
];

const whyChooseUs = [
  {
    title: 'Comprehensive Solutions',
    description: 'End-to-end AI services from strategy to implementation and training.'
  },
  {
    title: 'Expert Team',
    description: 'Experienced professionals with deep expertise across AI technologies.'
  },
  {
    title: 'Proven Track Record',
    description: '500+ successful projects delivering measurable business value.'
  },
  {
    title: 'Customized Approach',
    description: 'Tailored solutions designed specifically for your business needs.'
  }
];

export default function AIServices() {
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
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-raizing-maroon-600 hover:text-raizing-maroon-700 transition-colors mb-6 sm:mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base font-medium">Back to Home</span>
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-raizing-maroon-50 border border-raizing-maroon-200 rounded-xl mb-6">
              <Sparkles className="w-8 h-8 text-raizing-maroon-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-raizing-teal-900 dark:text-white">AI</span>{' '}
              <span className="text-raizing-maroon-600">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Comprehensive AI solutions to transform your business and drive innovation
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-raizing-teal-900 overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80" 
                alt="AI Solutions and Technology" 
                className="w-full h-64 sm:h-80 object-cover"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.dataset.retried) {
                    target.dataset.retried = 'true';
                    target.src = 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80';
                  } else {
                    target.style.display = 'none';
                    const container = target.parentElement;
                    if (container) {
                      container.style.background = 'linear-gradient(135deg, #1a5f4a, #0d3d2e)';
                    }
                  }
                }}
              />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-raizing-teal-900 overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a0d7?w=800&h=600&fit=crop&q=80" 
                alt="Business Innovation with AI" 
                className="w-full h-64 sm:h-80 object-cover"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.dataset.retried) {
                    target.dataset.retried = 'true';
                    target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80';
                  } else {
                    target.style.display = 'none';
                    const container = target.parentElement;
                    if (container) {
                      container.style.background = 'linear-gradient(135deg, #1a5f4a, #0d3d2e)';
                    }
                  }
                }}
              />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-raizing-teal-900 p-6 sm:p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-4 sm:mb-6">
              Your Complete AI Solutions Partner
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                At Raizing AI, we offer a comprehensive suite of AI services designed to help businesses at every stage of their 
                AI journey. From initial consultation and strategy development to custom development, automation, and team training, 
                we provide end-to-end solutions that drive real business value.
              </p>
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                Our integrated approach ensures that all aspects of your AI transformation work together seamlessly, 
                maximizing ROI and accelerating your path to AI success.
              </p>
              <div className="mt-6 p-6 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 rounded-lg border border-raizing-teal-900">
                <h3 className="text-lg font-bold text-raizing-teal-900 dark:text-white mb-4">Our Comprehensive Service Portfolio</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Workflow className="w-6 h-6 text-raizing-maroon-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-raizing-teal-900 dark:text-white mb-1">Automation Services</h4>
                      <p className="text-sm text-raizing-teal-900 dark:text-white">Streamline operations with intelligent workflow automation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-raizing-maroon-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-raizing-teal-900 dark:text-white mb-1">Consulting Services</h4>
                      <p className="text-sm text-raizing-teal-900 dark:text-white">Strategic guidance for your AI transformation journey</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-6 h-6 text-raizing-maroon-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-raizing-teal-900 dark:text-white mb-1">Training Programs</h4>
                      <p className="text-sm text-raizing-teal-900 dark:text-white">Empower your team with practical AI skills and knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Terminal className="w-6 h-6 text-raizing-maroon-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-raizing-teal-900 dark:text-white mb-1">Development Services</h4>
                      <p className="text-sm text-raizing-teal-900 dark:text-white">Build custom AI solutions tailored to your needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Our AI Services
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Explore our comprehensive range of AI solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="animate-on-scroll opacity-0 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-gradient-to-br from-raizing-cream-100 to-white rounded-xl sm:rounded-2xl border border-raizing-teal-900 overflow-hidden hover:border-raizing-maroon-500/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}></div>

                  <div className="p-6 sm:p-8">
                    <div className={`inline-flex p-4 bg-gradient-to-r ${service.color} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3 group-hover:text-raizing-maroon-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-raizing-teal-900 dark:text-white mb-6 leading-relaxed">{service.description}</p>

                    <div className="flex items-center gap-2 text-raizing-maroon-600 font-semibold group-hover:gap-4 transition-all">
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className={`absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Why Choose Raizing AI
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              What makes us the right partner for your AI journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Which Service is Right for You?
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Understand which service best fits your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                service: 'Automation',
                bestFor: 'Streamlining repetitive processes',
                icon: <Workflow className="w-6 h-6" />,
                color: 'from-raizing-maroon-400 to-raizing-maroon-600'
              },
              {
                service: 'Training',
                bestFor: 'Upskilling your team',
                icon: <GraduationCap className="w-6 h-6" />,
                color: 'from-raizing-maroon-600 to-raizing-maroon-800'
              },
              {
                service: 'Consulting',
                bestFor: 'Strategic AI planning',
                icon: <Lightbulb className="w-6 h-6" />,
                color: 'from-raizing-maroon-500 to-raizing-maroon-700'
              },
              {
                service: 'Development',
                bestFor: 'Building custom solutions',
                icon: <Terminal className="w-6 h-6" />,
                color: 'from-raizing-maroon-500 to-raizing-maroon-700'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${item.color} rounded-lg text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-2">
                  {item.service}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-900 dark:text-white">
                  Best for: {item.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Unique advantages of working with Raizing AI
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: 'Integrated Approach',
                description: 'All services work together seamlessly for maximum impact',
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: 'Proven Expertise',
                description: '500+ successful projects across diverse industries',
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                title: 'Enterprise Security',
                description: 'Bank-level security and compliance standards',
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: 'Measurable ROI',
                description: 'Focus on delivering quantifiable business value',
                icon: <CheckCircle2 className="w-6 h-6" />
              }
            ].map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-lg text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Client Testimonials
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              What our clients say about working with Raizing AI
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: 'Raizing AI has been instrumental in our AI transformation. Their comprehensive services helped us automate processes, train our team, and develop custom solutions.',
                author: 'Christopher Taylor',
                role: 'CEO',
                company: 'Innovation Labs',
                rating: 5
              },
              {
                quote: 'The best AI partner we\'ve worked with. They understand both technology and business, delivering solutions that drive real value.',
                author: 'Maria Garcia',
                role: 'VP of Technology',
                company: 'Global Enterprises',
                rating: 5
              },
              {
                quote: 'From consulting to implementation to training, Raizing AI provided end-to-end support that transformed our operations. Highly recommended!',
                author: 'Daniel Park',
                role: 'Operations Director',
                company: 'Tech Solutions Inc.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-raizing-maroon-500 text-raizing-maroon-500" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-raizing-teal-800 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-raizing-maroon-400 to-raizing-maroon-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-raizing-teal-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-sm text-raizing-teal-900 dark:text-white">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white">
              Common questions about our AI services
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Can we use multiple services together?',
                answer: 'Absolutely! Many clients start with consulting to develop a strategy, then move to automation or development, and train their teams. Our services are designed to work together for maximum impact.'
              },
              {
                question: 'How do I know which service I need?',
                answer: 'We offer free consultations to assess your needs and recommend the best approach. Often, clients benefit from a combination of services tailored to their specific situation and goals.'
              },
              {
                question: 'Do you offer package deals for multiple services?',
                answer: 'Yes, we offer bundled packages that combine multiple services at a discounted rate. This is especially beneficial for comprehensive AI transformations.'
              },
              {
                question: 'What industries do you serve?',
                answer: 'We serve clients across all industries including healthcare, finance, retail, manufacturing, education, real estate, legal, and technology. Our solutions are tailored to industry-specific needs.'
              },
              {
                question: 'How quickly can you start a project?',
                answer: 'We can typically begin consulting and training projects within 1-2 weeks. Development and automation projects may require 2-4 weeks for planning and resource allocation.'
              },
              {
                question: 'What kind of support do you provide?',
                answer: 'We provide comprehensive support including 24/7 technical support, regular check-ins, performance monitoring, updates, and ongoing optimization. Support levels are customized to your needs.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl border border-raizing-teal-900"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            <span className="text-raizing-teal-900 dark:text-white">Ready to Transform Your Business</span>
            <br className="hidden sm:block" />
            <span className="text-raizing-maroon-600">with AI?</span>
          </h2>
          <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive AI services can help you achieve your business goals. Get in touch for a free consultation.
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
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/case-studies')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-raizing-cream-200/10 backdrop-blur-sm text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg border border-raizing-cream-200/20 hover:bg-raizing-cream-200/20 transition-all duration-300"
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

