import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Code, Terminal, Layers, GitBranch, Database, Cloud, Shield, Zap, ArrowRight, Star, CheckCircle2, FileText, Rocket } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIAssessment from '../components/AIAssessment';

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Custom AI Solutions',
    description: 'Bespoke AI applications built from the ground up to meet your specific business requirements.'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Full-Stack Development',
    description: 'End-to-end development services from frontend to backend, ensuring seamless integration.'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'AI Model Development',
    description: 'Custom machine learning models trained on your data for optimal performance.'
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud Integration',
    description: 'Deploy and scale your AI solutions on leading cloud platforms with best practices.'
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: 'API Development',
    description: 'Robust APIs that enable seamless integration with existing systems and third-party services.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure Development',
    description: 'Security-first approach with code reviews, testing, and compliance standards.'
  }
];

const technologies = [
  'Python & TensorFlow',
  'React & Next.js',
  'Node.js & Express',
  'AWS & Azure',
  'Docker & Kubernetes',
  'PostgreSQL & MongoDB'
];

const benefits = [
  {
    metric: '100%',
    label: 'Custom Solutions',
    description: 'Tailored to your exact business needs'
  },
  {
    metric: '24/7',
    label: 'Support',
    description: 'Round-the-clock technical support and maintenance'
  },
  {
    metric: 'Agile',
    label: 'Methodology',
    description: 'Iterative development with continuous feedback'
  },
  {
    metric: 'Enterprise',
    label: 'Grade Quality',
    description: 'Production-ready code with comprehensive testing'
  }
];

export default function Development() {
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
              <Terminal className="w-8 h-8 text-raizing-maroon-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-raizing-teal-900 dark:text-white">AI Development</span>
              <br className="hidden sm:block" />
              <span className="text-raizing-maroon-600">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Build custom AI solutions and applications that drive innovation and transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 rounded-xl sm:rounded-2xl border border-raizing-teal-900 p-6 sm:p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-4 sm:mb-6">
              Custom AI Development for Your Business
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                Our AI Development services focus on creating custom solutions that perfectly align with your business objectives. 
                Whether you need a complete AI application, integration with existing systems, or specialized AI models, 
                our experienced development team delivers high-quality, scalable solutions.
              </p>
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                We follow industry best practices, use cutting-edge technologies, and ensure your solutions are secure, 
                scalable, and maintainable. From concept to deployment, we're with you every step of the way.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="p-5 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 rounded-lg border border-raizing-teal-900">
                  <h3 className="font-bold text-raizing-teal-900 dark:text-white mb-2 flex items-center gap-2">
                    <Code className="w-5 h-5 text-raizing-maroon-500" />
                    Clean, Maintainable Code
                  </h3>
                  <p className="text-sm text-raizing-teal-900 dark:text-white">Well-documented, tested code following industry standards</p>
                </div>
                <div className="p-5 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 rounded-lg border border-raizing-teal-900">
                  <h3 className="font-bold text-raizing-teal-900 dark:text-white mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-raizing-maroon-500" />
                    Security First
                  </h3>
                  <p className="text-sm text-raizing-teal-900 dark:text-white">Built with security and compliance from the ground up</p>
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
              Development Services
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Comprehensive development solutions for your AI needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-lg text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Technologies We Use
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Modern tech stack for building robust AI solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 p-5 sm:p-6 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-lg text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Zap className="w-6 h-6 text-raizing-maroon-500 mx-auto mb-3" />
                <span className="text-base sm:text-lg font-semibold text-raizing-teal-900 dark:text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Why Choose Our Development Services
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              What sets our development approach apart
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-6 sm:p-8 rounded-xl border border-raizing-teal-900 text-center hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-raizing-maroon-500 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg sm:text-xl font-semibold text-raizing-teal-900 dark:text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-sm sm:text-base text-raizing-teal-900 dark:text-white">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Our Development Process
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Agile methodology ensuring quality and timely delivery
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: '01',
                title: 'Requirements Gathering',
                description: 'Deep dive into your needs, goals, and technical requirements to create detailed specifications.'
              },
              {
                step: '02',
                title: 'Architecture Design',
                description: 'Design scalable, secure architecture that aligns with best practices and your infrastructure.'
              },
              {
                step: '03',
                title: 'Development & Coding',
                description: 'Agile development with regular sprints, code reviews, and continuous integration.'
              },
              {
                step: '04',
                title: 'Testing & QA',
                description: 'Comprehensive testing including unit, integration, and user acceptance testing.'
              },
              {
                step: '05',
                title: 'Deployment',
                description: 'Smooth deployment with zero downtime, monitoring, and rollback capabilities.'
              },
              {
                step: '06',
                title: 'Maintenance & Support',
                description: 'Ongoing maintenance, updates, and 24/7 support to ensure optimal performance.'
              }
            ].map((step, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-raizing-maroon-500 mb-3">
                  {step.step}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Types of Projects We Build
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Comprehensive development services for various AI applications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'AI-Powered Web Applications',
                description: 'Full-stack web applications with integrated AI capabilities, modern UIs, and scalable backends.',
                icon: <Layers className="w-6 h-6" />
              },
              {
                title: 'Custom AI Models',
                description: 'Machine learning models trained on your data for specific business use cases and requirements.',
                icon: <Database className="w-6 h-6" />
              },
              {
                title: 'API Development',
                description: 'RESTful and GraphQL APIs that enable seamless integration with existing systems and third-party services.',
                icon: <GitBranch className="w-6 h-6" />
              },
              {
                title: 'Mobile AI Applications',
                description: 'Native and cross-platform mobile apps with AI features for iOS and Android devices.',
                icon: <Terminal className="w-6 h-6" />
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable cloud-based AI solutions deployed on AWS, Azure, or GCP with auto-scaling and monitoring.',
                icon: <Cloud className="w-6 h-6" />
              },
              {
                title: 'Enterprise Integrations',
                description: 'Seamless integration of AI capabilities into existing ERP, CRM, and business systems.',
                icon: <Shield className="w-6 h-6" />
              }
            ].map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-lg text-white mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Client Success Stories
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Real projects, real results from our development work
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: 'The custom AI solution they built transformed our operations. Clean code, excellent documentation, and ongoing support.',
                author: 'Patricia Brown',
                role: 'Product Manager',
                company: 'Tech Innovations',
                rating: 5
              },
              {
                quote: 'Outstanding development team. They delivered on time, within budget, and the solution exceeded our expectations.',
                author: 'Mark Davis',
                role: 'Founder',
                company: 'Startup Ventures',
                rating: 5
              },
              {
                quote: 'Professional, skilled, and responsive. The AI application they developed is now core to our business operations.',
                author: 'Amanda White',
                role: 'CTO',
                company: 'Enterprise Systems',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
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
      <section className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white">
              Common questions about AI development services
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How long does development typically take?',
                answer: 'Development timelines vary based on project complexity. Simple applications can be completed in 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during project planning.'
              },
              {
                question: 'What technologies do you use?',
                answer: 'We use modern, industry-standard technologies including Python, React, Node.js, TensorFlow, PyTorch, AWS, Azure, Docker, and Kubernetes. We choose the best stack for each project\'s specific requirements.'
              },
              {
                question: 'Do you provide source code and documentation?',
                answer: 'Yes, you receive complete source code, comprehensive documentation, deployment guides, and API documentation. All code is well-documented and follows best practices for maintainability.'
              },
              {
                question: 'Can you work with our existing development team?',
                answer: 'Absolutely! We excel at collaborative development. We can work alongside your team, provide technical leadership, or handle the entire project. We adapt to your preferred working style.'
              },
              {
                question: 'What kind of support do you provide after launch?',
                answer: 'We offer comprehensive post-launch support including bug fixes, updates, feature enhancements, performance optimization, and 24/7 monitoring. Support packages are tailored to your needs.'
              },
              {
                question: 'How do you ensure code quality and security?',
                answer: 'We follow strict coding standards, conduct regular code reviews, implement comprehensive testing, perform security audits, and use automated CI/CD pipelines. All code is reviewed for security vulnerabilities before deployment.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-5 sm:p-6 rounded-xl border border-raizing-teal-900"
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
            <span className="text-raizing-teal-900 dark:text-white">Ready to Build Your</span>
            <br className="hidden sm:block" />
            <span className="text-raizing-maroon-600">AI Solution?</span>
          </h2>
          <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss your development needs and create a custom AI solution that drives results. Get in touch for a free consultation.
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
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/case-studies')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-raizing-cream-200/10 backdrop-blur-sm text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg border border-raizing-cream-200/20 hover:bg-raizing-cream-200/20 transition-all duration-300"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <AIAssessment />
      <Footer />
    </div>
  );
}

