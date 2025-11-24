import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Workflow, Zap, CheckCircle2, Clock, TrendingUp, BarChart3, Settings, Code, Database, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIAssessment from '../components/AIAssessment';

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
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Scalable Solutions',
    description: 'Architecture designed to grow with your business, handling increased volume without performance issues.'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Data Management',
    description: 'Intelligent data processing, transformation, and management across all your systems.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security measures and compliance with industry standards built into every solution.'
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
    title: 'Document Processing',
    description: 'Automate document classification, data extraction, and routing to reduce manual processing time by 90%.'
  },
  {
    title: 'Customer Service',
    description: 'Intelligent chatbots and automated ticket routing to improve response times and customer satisfaction.'
  },
  {
    title: 'Data Entry & Migration',
    description: 'Automated data entry, validation, and migration between systems with zero errors.'
  },
  {
    title: 'Report Generation',
    description: 'Automated report creation, scheduling, and distribution to stakeholders.'
  },
  {
    title: 'Invoice Processing',
    description: 'End-to-end invoice processing from receipt to payment approval and accounting.'
  },
  {
    title: 'Workflow Orchestration',
    description: 'Complex multi-step workflows that coordinate across multiple systems and departments.'
  }
];

export default function AIWorkflowAutomation() {
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
              <Workflow className="w-8 h-8 text-raizing-maroon-600" />
            </div>
            <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 mb-3 sm:mb-4 mb-4 sm:mb-6 bg-raizing-maroon-50 border border-raizing-maroon-200 rounded-full">
              <span className="text-raizing-maroon-600 text-xs sm:text-sm font-semibold">Our Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-6xl font-bold mb-3 sm:mb-4 mb-4 sm:mb-6">
              <span className="text-raizing-teal-900 dark:text-white">AI Workflow</span>
              <br className="block" />
              <span className="text-raizing-maroon-600">Automation</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Transform manual processes into intelligent, automated workflows that run 24/7, reducing costs and increasing efficiency
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 rounded-2xl border border-raizing-teal-900 p-6 sm:p-8 lg:p-10 shadow-lg animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4 mb-4 sm:mb-6">
              Transform Your Business Operations
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed mb-3 sm:mb-4">
              Our AI Workflow Automation service transforms your manual, time-consuming processes into intelligent, automated workflows. 
              By leveraging cutting-edge AI technologies, we help you eliminate repetitive tasks, reduce errors, and free up your team 
              to focus on strategic, high-value work.
            </p>
            <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
              Whether you're looking to automate document processing, customer service, data entry, or complex multi-step workflows, 
              our solutions are designed to integrate seamlessly with your existing systems while providing measurable ROI from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Comprehensive Features
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Everything you need to automate and optimize your business processes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-400 to-raizing-maroon-600 rounded-lg text-white mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Measurable Results
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              See the impact of automation on your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 p-8 rounded-xl border border-raizing-teal-900 text-center hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-raizing-maroon-500 mb-2">
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

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Common Use Cases
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Real-world applications of AI workflow automation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-raizing-maroon-500 flex-shrink-0 mt-1" />
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-raizing-teal-900 dark:text-white">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {useCase.description}
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
            <span className="text-raizing-teal-900 dark:text-white">Ready to Automate</span>
            <br className="block" />
            <span className="text-raizing-maroon-600">Your Workflows?</span>
          </h2>
          <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white mb-4 sm:mb-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how AI workflow automation can transform your business operations. Get in touch for a free consultation.
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
              className="px-4 sm:px-6 px-6 sm:px-8 py-2 sm:py-3 py-3 sm:py-4 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 hover:scale-105"
            >
              Get Started Today
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-4 sm:px-6 px-6 sm:px-8 py-2 sm:py-3 py-3 sm:py-4 bg-raizing-cream-200/10 backdrop-blur-sm text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg border border-raizing-cream-200/20 hover:bg-raizing-cream-200/20 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <AIAssessment />
      <Footer />
    </div>
  );
}

