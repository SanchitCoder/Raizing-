import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Workflow, Zap, CheckCircle2, Clock, TrendingUp, BarChart3, Settings, Code, Database, Shield, ArrowRight, FileText, MessageSquare, Receipt, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Custom Automation Development',
    description: 'Tailored automation solutions designed specifically for your business processes and workflows.'
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'System Integration',
    description: 'Seamless integration with your existing systems, tools, and platforms for unified operations.'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Process Optimization',
    description: 'Comprehensive analysis and optimization of workflows to maximize efficiency and reduce bottlenecks.'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'RPA Implementation',
    description: 'Robotic Process Automation to automate repetitive, rule-based tasks across various applications.'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Data Automation',
    description: 'Automating data collection, processing, and reporting to ensure accuracy and timely insights.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Security & Compliance',
    description: 'Automated security checks and compliance reporting to maintain high standards and reduce risk.'
  }
];

const benefits = [
  {
    metric: '80%',
    label: 'Time Saved',
    description: 'Automate repetitive tasks and free up your team for strategic work'
  },
  {
    metric: '95%',
    label: 'Accuracy Rate',
    description: 'Eliminate human errors with intelligent automation systems'
  },
  {
    metric: '60%',
    label: 'Cost Reduction',
    description: 'Significant reduction in operational costs and resource allocation'
  },
  {
    metric: '24/7',
    label: 'Operations',
    description: 'Round-the-clock automation that never stops working'
  }
];

const useCases = [
  {
    title: 'Document Processing Automation',
    description: 'Automate document classification, data extraction, OCR processing, and routing to reduce manual processing time by 90%.',
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: 'Customer Service Automation',
    description: 'Intelligent chatbots, automated ticket routing, and response systems to improve response times and customer satisfaction.',
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: 'Data Entry & Migration',
    description: 'Automated data entry, validation, and migration between systems with zero errors and real-time synchronization.',
    icon: <Database className="w-6 h-6" />
  },
  {
    title: 'Invoice Processing',
    description: 'End-to-end invoice processing from receipt to payment approval, accounting, and reporting.',
    icon: <Receipt className="w-6 h-6" />
  },
  {
    title: 'Report Generation',
    description: 'Automated report creation, scheduling, distribution, and dashboard updates for stakeholders.',
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: 'Workflow Orchestration',
    description: 'Complex multi-step workflows that coordinate across multiple systems, departments, and external partners.',
    icon: <Workflow className="w-6 h-6" />
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We analyze your current processes, identify automation opportunities, and assess ROI potential.'
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description: 'Develop a comprehensive automation strategy with clear milestones, timelines, and success metrics.'
  },
  {
    step: '03',
    title: 'Design & Development',
    description: 'Build custom automation solutions using best practices, ensuring scalability and maintainability.'
  },
  {
    step: '04',
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing in controlled environments to ensure reliability and accuracy before deployment.'
  },
  {
    step: '05',
    title: 'Deployment & Integration',
    description: 'Seamless deployment with your existing systems, minimal disruption, and comprehensive documentation.'
  },
  {
    step: '06',
    title: 'Monitoring & Optimization',
    description: 'Continuous monitoring, performance optimization, and iterative improvements for maximum efficiency.'
  }
];

const technologies = [
  'UiPath RPA Platform',
  'Microsoft Power Automate',
  'Python & Automation Scripts',
  'API Integration Tools',
  'Machine Learning Models',
  'Cloud Automation Services'
];

export default function Automation() {
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
      elements.forEach((el) => {
        observer?.observe(el);
        // Make visible immediately if already in viewport
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate-fade-in-up');
          el.classList.remove('opacity-0');
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
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
              <Workflow className="w-8 h-8 text-raizing-maroon-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-raizing-cream-200 mb-4 sm:mb-6">
              AI Workflow Automation
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-raizing-cream-300 max-w-3xl mx-auto">
              Transform manual processes into intelligent, automated workflows that run 24/7, reducing costs and increasing efficiency
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl sm:rounded-2xl border border-raizing-teal-900 p-6 sm:p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-4 sm:mb-6">
              Transform Your Business Operations
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                Our AI Workflow Automation service transforms your manual, time-consuming processes into intelligent, automated workflows. 
                By leveraging cutting-edge AI technologies, we help you eliminate repetitive tasks, reduce errors, and free up your team 
                to focus on strategic, high-value work.
              </p>
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                Whether you're looking to automate document processing, customer service, data entry, or complex multi-step workflows, 
                our solutions are designed to integrate seamlessly with your existing systems while providing measurable ROI from day one.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 bg-raizing-cream-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-raizing-maroon-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-raizing-teal-900 mb-1">Seamless Integration</h3>
                    <p className="text-sm text-raizing-teal-900">Works with your existing software and systems without disruption</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-raizing-cream-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-raizing-maroon-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-raizing-teal-900 mb-1">Quick Implementation</h3>
                    <p className="text-sm text-raizing-teal-900">Deploy solutions in weeks, not months, with minimal business disruption</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-raizing-cream-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-raizing-maroon-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-raizing-teal-900 mb-1">Scalable Architecture</h3>
                    <p className="text-sm text-raizing-teal-900">Grows with your business from startup to enterprise scale</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-raizing-cream-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-raizing-maroon-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-raizing-teal-900 mb-1">24/7 Monitoring</h3>
                    <p className="text-sm text-raizing-teal-900">Continuous monitoring and optimization for peak performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Our Automation Capabilities
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 max-w-3xl mx-auto">
              Comprehensive automation solutions tailored to your business needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-400 to-raizing-maroon-600 rounded-lg text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-900 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Measurable Results
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 max-w-3xl mx-auto">
              See the impact of automation on your business
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white p-6 sm:p-8 rounded-xl border border-raizing-teal-900 text-center hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-raizing-maroon-500 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg sm:text-xl font-semibold text-raizing-teal-900 mb-2">
                  {benefit.label}
                </div>
                <p className="text-sm sm:text-base text-raizing-teal-900">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Real-World Applications
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 max-w-3xl mx-auto">
              See how automation transforms different business processes across industries
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-400 to-raizing-maroon-600 rounded-lg text-white mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-raizing-teal-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-900 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Our Automation Process
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 max-w-3xl mx-auto">
              A proven methodology that ensures successful automation implementation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-raizing-maroon-500 mb-3">
                  {step.step}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-900 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Technologies We Use
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 max-w-3xl mx-auto">
              Industry-leading tools and platforms for robust automation solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-5 sm:p-6 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-lg text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Zap className="w-6 h-6 text-raizing-maroon-500 mx-auto mb-3" />
                <span className="text-base sm:text-lg font-semibold text-raizing-teal-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 max-w-3xl mx-auto">
              Real feedback from businesses that transformed with our automation solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: 'The automation solution reduced our processing time by 85% and eliminated errors completely. ROI was achieved in just 3 months.',
                author: 'Sarah Johnson',
                role: 'Operations Director',
                company: 'TechCorp Industries',
                rating: 5
              },
              {
                quote: 'Raizing AI transformed our entire workflow. The team was professional, the solution was robust, and the results exceeded our expectations.',
                author: 'Michael Chen',
                role: 'CEO',
                company: 'Global Logistics Inc.',
                rating: 5
              },
              {
                quote: 'Best investment we made this year. The automation handles 24/7 operations flawlessly, and our team can now focus on strategic initiatives.',
                author: 'Emily Rodriguez',
                role: 'VP of Operations',
                company: 'Finance Solutions Group',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
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
                    <div className="font-semibold text-raizing-teal-900">{testimonial.author}</div>
                    <div className="text-sm text-raizing-teal-900">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900">
              Common questions about AI workflow automation
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How long does it take to implement an automation solution?',
                answer: 'Implementation time varies based on complexity, but most automation projects are completed within 4-12 weeks. Simple automations can be deployed in as little as 2-4 weeks, while complex enterprise solutions may take 3-6 months.'
              },
              {
                question: 'Will automation replace our employees?',
                answer: 'No, automation is designed to augment your workforce, not replace it. It eliminates repetitive, time-consuming tasks, allowing your team to focus on strategic, creative, and high-value work that requires human judgment and expertise.'
              },
              {
                question: 'What ROI can we expect from automation?',
                answer: 'Most clients see ROI within 6-12 months. Typical benefits include 60-80% time savings, 50-70% cost reduction in automated processes, and 95%+ accuracy improvements. We provide detailed ROI projections during the consultation phase.'
              },
              {
                question: 'Can automation integrate with our existing systems?',
                answer: 'Yes, our solutions are designed to integrate seamlessly with your existing systems, including ERP, CRM, databases, and cloud platforms. We use APIs, webhooks, and standard integration protocols to ensure compatibility.'
              },
              {
                question: 'What happens if the automation fails?',
                answer: 'Our solutions include comprehensive error handling, monitoring, and alerting systems. We provide 24/7 support and maintenance, with automatic failover mechanisms and detailed logging for quick issue resolution.'
              },
              {
                question: 'How do you ensure data security and compliance?',
                answer: 'Security is built into every solution. We implement encryption, access controls, audit trails, and comply with industry standards like GDPR, HIPAA, and SOC 2. All data processing follows your organization\'s security policies.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-5 sm:p-6 rounded-xl border border-raizing-teal-900"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-raizing-teal-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-900 leading-relaxed">
                  {faq.answer}
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
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-base sm:text-lg text-raizing-cream-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how AI workflow automation can transform your business operations. Get in touch for a free consultation.
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

      <Footer />
    </div>
  );
}

