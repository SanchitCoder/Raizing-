import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Shield, Award, Rocket, CheckCircle2, Clock, Users, TrendingUp, Lock, Code, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const detailedFeatures = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning Fast Implementation',
    shortDescription: 'Our proven methodologies ensure rapid deployment without compromising quality or security.',
    gradient: 'from-raizing-maroon-400 to-raizing-maroon-600',
    fullDescription: 'At Raizing AI, we understand that time-to-market is critical for your business success. Our streamlined implementation process leverages industry best practices, pre-built frameworks, and agile methodologies to deliver results in weeks, not months.',
    keyPoints: [
      {
        icon: <Clock className="w-5 h-5" />,
        title: 'Rapid Deployment',
        description: 'Average implementation time reduced by 60% compared to traditional methods'
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        title: 'Quality Assurance',
        description: 'Comprehensive testing protocols ensure zero compromise on quality standards'
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: 'Proven Frameworks',
        description: 'Reusable components and templates accelerate development cycles'
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: 'Agile Methodology',
        description: 'Iterative approach allows for quick adjustments and continuous improvement'
      }
    ],
    benefits: [
      'Faster ROI realization',
      'Reduced project costs',
      'Minimal business disruption',
      'Quick adaptation to market changes'
    ]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Enterprise-Grade Security',
    shortDescription: 'Bank-level security protocols and compliance standards protect your data and operations.',
    gradient: 'from-raizing-maroon-500 to-raizing-maroon-700',
    fullDescription: 'Security is not an afterthought—it\'s built into every layer of our solutions. We implement military-grade encryption, multi-factor authentication, and comprehensive compliance frameworks to protect your most sensitive data and ensure regulatory adherence.',
    keyPoints: [
      {
        icon: <Lock className="w-5 h-5" />,
        title: 'End-to-End Encryption',
        description: 'AES-256 encryption for data at rest and in transit, ensuring maximum protection'
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: 'Compliance Standards',
        description: 'GDPR, HIPAA, SOC 2, and ISO 27001 certified infrastructure and processes'
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: 'Access Control',
        description: 'Role-based access management with multi-factor authentication and audit trails'
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        title: 'Regular Audits',
        description: 'Continuous security monitoring, penetration testing, and compliance verification'
      }
    ],
    benefits: [
      'Protection against cyber threats',
      'Regulatory compliance guaranteed',
      'Customer trust and confidence',
      'Reduced liability and risk exposure'
    ]
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Industry Expertise',
    shortDescription: 'Decades of combined experience across multiple industries and AI technologies.',
    gradient: 'from-raizing-maroon-600 to-raizing-maroon-800',
    fullDescription: 'Our team brings together decades of hands-on experience across diverse industries—from healthcare and finance to manufacturing and retail. This deep domain knowledge, combined with cutting-edge AI expertise, enables us to deliver solutions that truly understand your business context.',
    keyPoints: [
      {
        icon: <Users className="w-5 h-5" />,
        title: 'Expert Team',
        description: '50+ specialists with advanced degrees and industry certifications'
      },
      {
        icon: <BarChart3 className="w-5 h-5" />,
        title: 'Industry Knowledge',
        description: 'Proven track record across 15+ industries including healthcare, finance, retail, and more'
      },
      {
        icon: <Award className="w-5 h-5" />,
        title: 'Continuous Learning',
        description: 'Regular training on latest AI technologies, frameworks, and industry best practices'
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: 'Proven Results',
        description: '500+ successful implementations with measurable business impact'
      }
    ],
    benefits: [
      'Solutions tailored to your industry',
      'Faster problem identification',
      'Best practices from multiple sectors',
      'Reduced learning curve'
    ]
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Scalable Solutions',
    shortDescription: 'Architecture designed to grow with your business from startup to enterprise scale.',
    gradient: 'from-raizing-maroon-400 to-raizing-maroon-600',
    fullDescription: 'Your business will grow, and so should your AI infrastructure. Our solutions are architected with scalability at their core, using cloud-native technologies and microservices architecture that can seamlessly scale from handling thousands to millions of transactions without requiring complete redesigns.',
    keyPoints: [
      {
        icon: <Rocket className="w-5 h-5" />,
        title: 'Cloud-Native Architecture',
        description: 'Built on scalable cloud platforms that automatically adjust to your workload demands'
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: 'Horizontal Scaling',
        description: 'Add capacity by adding resources, not by replacing entire systems'
      },
      {
        icon: <BarChart3 className="w-5 h-5" />,
        title: 'Performance Optimization',
        description: 'Continuous monitoring and optimization ensure consistent performance at any scale'
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        title: 'Future-Proof Design',
        description: 'Modular architecture allows easy integration of new technologies and features'
      }
    ],
    benefits: [
      'Grow without technical debt',
      'Cost-effective scaling',
      'No downtime during expansion',
      'Support for global operations'
    ]
  }
];

export default function FeaturesDetail() {
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
              <span className="text-raizing-maroon-400 text-xs sm:text-sm font-semibold">Features</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-raizing-cream-200 mb-4 sm:mb-6">
              The Raizing AI Advantage
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-raizing-cream-300 max-w-3xl mx-auto">
              Discover what sets us apart in the competitive AI automation landscape
            </p>
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {detailedFeatures.map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl border border-raizing-teal-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Feature Header */}
                  <div className={`bg-gradient-to-r ${feature.gradient} p-6 sm:p-8 md:p-10`}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-xl text-white">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                          {feature.title}
                        </h2>
                        <p className="text-base sm:text-lg text-white/90 max-w-3xl">
                          {feature.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div className="p-6 sm:p-8 md:p-10">
                    {/* Full Description */}
                    <div className="mb-8 sm:mb-10">
                      <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                        {feature.fullDescription}
                      </p>
                    </div>

                    {/* Key Points Grid */}
                    <div className="mb-8 sm:mb-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 mb-6 sm:mb-8">
                        Key Highlights
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        {feature.keyPoints.map((point, idx) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-br from-raizing-cream-50 to-white p-5 sm:p-6 rounded-xl border border-raizing-teal-200 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                          >
                            <div className={`inline-flex p-2.5 bg-gradient-to-r ${feature.gradient} rounded-lg text-white mb-3 sm:mb-4`}>
                              {point.icon}
                            </div>
                            <h4 className="text-lg sm:text-xl font-bold text-raizing-teal-900 mb-2 sm:mb-3">
                              {point.title}
                            </h4>
                            <p className="text-sm sm:text-base text-raizing-teal-700 leading-relaxed">
                              {point.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits List */}
                    <div className="bg-gradient-to-br from-raizing-teal-50 to-raizing-cream-50 p-6 sm:p-8 rounded-xl border border-raizing-teal-200">
                      <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 mb-4 sm:mb-6">
                        Business Benefits
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 text-raizing-maroon-500 mt-0.5 flex-shrink-0`} />
                            <span className="text-base sm:text-lg text-raizing-teal-800">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-teal-900 via-raizing-teal-800 to-raizing-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-cream-200 mb-4 sm:mb-6">
            Ready to Experience These Advantages?
          </h2>
          <p className="text-base sm:text-lg text-raizing-cream-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring these benefits to your business. Get in touch for a free consultation.
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

