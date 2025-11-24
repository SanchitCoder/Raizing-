import { useEffect, useRef, useState } from 'react';
import { Workflow, Lightbulb, GraduationCap, ArrowRight, X, Send, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFormOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFormOpen) {
        setIsFormOpen(false);
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: ''
          });
          setFormStatus('idle');
        }, 300);
      }
    };

    if (isFormOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isFormOpen]);

  const handleLearnMore = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setFormData(prev => ({ ...prev, service: serviceTitle }));
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setFormStatus('idle');
    }, 300);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setFormStatus('success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      handleCloseForm();
    }, 3000);
  };

  const services = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'AI Workflow Automation',
      description: 'Transform manual processes into intelligent, automated workflows that run 24/7.',
      video: '/AI_Workflow_Automation_Video_Generation.mp4',
      features: [
        'Custom automation development',
        'Integration with existing systems',
        'Process optimization & analysis',
        'Scalable solutions for growth'
      ],
      color: 'from-raizing-maroon-400 to-raizing-maroon-600'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'AI Consulting',
      description: 'Expert guidance to navigate the AI landscape and implement the right solutions.',
      video: '/AI_Consulting_Video_Generation_Request.mp4',
      features: [
        'AI strategy development',
        'Technology stack selection',
        'ROI analysis & planning',
        'Implementation roadmaps'
      ],
      color: 'from-raizing-maroon-500 to-raizing-maroon-700'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'AI Training & Workshops',
      description: 'Hands-on training programs that empower teams with practical AI skills.',
      video: '/AI_Training_Video_Generation.mp4',
      features: [
        'Customized training programs',
        'Hands-on workshops',
        'Certification courses',
        'Ongoing support & resources'
      ],
      color: 'from-raizing-maroon-600 to-raizing-maroon-800'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 dark:from-gray-900 to-raizing-teal-900/30 dark:to-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 bg-raizing-maroon-500/10 border border-raizing-maroon-500/30 rounded-full">
            <span className="text-raizing-maroon-600 text-xs sm:text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4 px-4">
            Comprehensive AI Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-raizing-teal-900 dark:text-white max-w-3xl mx-auto px-4">
            End-to-end services designed to accelerate your AI journey from strategy to execution
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] border border-transparent hover:border-raizing-teal-900/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} group-hover:h-1.5 transition-all duration-300`}></div>

              {/* Service Video */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-raizing-cream-100 to-raizing-cream-50">
                <video 
                  src={service.video}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 max-w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-25 group-hover:opacity-15 transition-opacity duration-500`}></div>
                <div className={`absolute top-4 right-4 relative inline-flex p-3 bg-gradient-to-r ${service.color} rounded-xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10`}>
                  {service.icon}
                </div>
              </div>

              <div className="p-8 relative z-10">

                <h3 className="text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3 group-hover:text-raizing-maroon-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-raizing-teal-900 dark:text-white mb-6 leading-relaxed group-hover:text-raizing-teal-800 transition-colors duration-300">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-raizing-maroon-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-raizing-maroon-500"></div>
                      </div>
                      <span className="text-raizing-teal-800">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleLearnMore(service.title)}
                  className="group/btn relative w-full px-6 py-3 bg-gradient-to-r from-raizing-teal-900 to-raizing-teal-800 text-raizing-cream-200 rounded-lg font-semibold hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10">Learn More</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-raizing-maroon-600 to-raizing-maroon-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 animate-shimmer opacity-0 group-hover/btn:opacity-100"></div>
                </button>
              </div>

              <div className={`absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 group-hover:scale-150`}></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-raizing-teal-900/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Form Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 transition-all duration-300 ${
          isFormOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleCloseForm}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-raizing-teal-900/80 backdrop-blur-sm transition-opacity duration-300 ${
            isFormOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Modal Content */}
        <div
          className={`relative w-full max-w-lg bg-white rounded-lg sm:rounded-xl shadow-2xl transform transition-all duration-300 max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col ${
            isFormOpen
              ? 'scale-100 translate-y-0 opacity-100'
              : 'scale-95 translate-y-10 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-t-lg sm:rounded-t-xl p-3 sm:p-4 text-raizing-cream-200 flex-shrink-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold mb-0.5 truncate">Request a Consultation</h3>
                <p className="text-raizing-cream-300 text-xs truncate">
                  {selectedService && `Interested in: ${selectedService}`}
                </p>
              </div>
              <button
                onClick={handleCloseForm}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-raizing-cream-200/20 hover:bg-raizing-cream-200/30 transition-colors duration-200 flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Form - Scrollable */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-5 overflow-y-auto flex-1">
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-raizing-teal-900 dark:text-white mb-1.5">
                  <User className="w-3.5 h-3.5 text-raizing-maroon-500" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-raizing-teal-900 focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email and Phone Row */}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-raizing-teal-900 dark:text-white mb-1.5">
                    <Mail className="w-3.5 h-3.5 text-raizing-maroon-500" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-raizing-teal-900 focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-raizing-teal-900 dark:text-white mb-1.5">
                    <Phone className="w-3.5 h-3.5 text-raizing-maroon-500" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-raizing-teal-900 focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-raizing-teal-900 dark:text-white mb-1.5">
                  <Building className="w-3.5 h-3.5 text-raizing-maroon-500" />
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-raizing-teal-900 focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-raizing-teal-900 dark:text-white mb-1.5">
                  <Workflow className="w-3.5 h-3.5 text-raizing-maroon-500" />
                  Service Interest *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-raizing-teal-900 focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="AI Workflow Automation">AI Workflow Automation</option>
                  <option value="AI Consulting">AI Consulting</option>
                  <option value="AI Training & Workshops">AI Training & Workshops</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-raizing-teal-900 dark:text-white mb-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-raizing-maroon-500" />
                  Project Details *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-raizing-teal-900 focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all resize-none"
                  placeholder="Describe your project requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className="w-full px-6 py-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold text-base hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-raizing-cream-200 border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Request Submitted!
                  </>
                ) : (
                  <>
                    Submit Request
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Success Message */}
              {formStatus === 'success' && (
                <div className="p-3 bg-raizing-maroon-50 border border-raizing-maroon-200 rounded-lg text-raizing-maroon-800 text-center animate-fade-in-up">
                  <p className="font-semibold text-sm mb-0.5">Thank you for your interest!</p>
                  <p className="text-xs">Our team will contact you within 24 hours.</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
