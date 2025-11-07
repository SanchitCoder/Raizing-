import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowRight, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Pricing() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    let observer: IntersectionObserver | null = null;
    
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

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        observer?.observe(el);
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

  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Up to 5 automation workflows',
        'Basic AI tool training (8 hours)',
        'Email support',
        'Monthly strategy consultation',
        'Access to AI tool library',
        'Basic analytics & reporting'
      ],
      popular: false,
      color: 'from-raizing-teal-500 to-raizing-teal-600'
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses scaling AI operations',
      features: [
        'Up to 20 automation workflows',
        'Comprehensive training (24 hours)',
        'Priority support',
        'Weekly strategy consultation',
        'Custom AI integrations',
        'Advanced analytics & reporting',
        'Dedicated account manager',
        'Quarterly ROI review'
      ],
      popular: true,
      color: 'from-raizing-maroon-500 to-raizing-maroon-600'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited automation workflows',
        'Unlimited training hours',
        '24/7 dedicated support',
        'Daily strategy consultation',
        'Full custom development',
        'Enterprise-grade security',
        'Dedicated support team',
        'Custom SLA agreements',
        'On-site training available',
        'White-glove implementation'
      ],
      popular: false,
      color: 'from-raizing-teal-700 to-raizing-teal-800'
    }
  ];

  const addOns = [
    {
      name: 'Additional Training',
      price: '$500',
      description: 'Per 8-hour training session',
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'Custom Development',
      price: 'Starting at $5,000',
      description: 'Per project',
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: 'Priority Support',
      price: '$1,500',
      description: 'Per month',
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: 'Advanced Analytics',
      price: '$800',
      description: 'Per month',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

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
              <TrendingUp className="w-8 h-8 text-raizing-maroon-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-raizing-cream-200 mb-4 sm:mb-6">
              Pricing Plans
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-raizing-cream-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI services with flexible options to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl sm:rounded-2xl border border-raizing-teal-200 p-6 sm:p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-4 sm:mb-6">
              Transparent, Flexible Pricing
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                We offer flexible pricing plans designed to grow with your business. Whether you're just starting your AI journey 
                or scaling enterprise-wide operations, we have a plan that fits your needs and budget.
              </p>
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                All plans include access to our AI tools, training resources, and expert support. Upgrade or customize your plan 
                at any time as your needs evolve.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-raizing-cream-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-raizing-maroon-500 mb-1">No Setup Fees</div>
                  <div className="text-sm text-raizing-teal-700">Get started immediately</div>
                </div>
                <div className="p-4 bg-raizing-cream-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-raizing-maroon-500 mb-1">Cancel Anytime</div>
                  <div className="text-sm text-raizing-teal-700">Flexible commitments</div>
                </div>
                <div className="p-4 bg-raizing-cream-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-raizing-maroon-500 mb-1">30-Day Trial</div>
                  <div className="text-sm text-raizing-teal-700">Risk-free start</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Choose Your Plan
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-700 max-w-3xl mx-auto">
              Select the plan that best fits your business size and AI needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`animate-on-scroll opacity-0 relative bg-gradient-to-br from-raizing-cream-50 to-white rounded-xl sm:rounded-2xl border-2 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-raizing-maroon-500 shadow-xl lg:scale-105' 
                    : 'border-raizing-teal-200 hover:border-raizing-maroon-500/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-white text-xs sm:text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-raizing-teal-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-raizing-maroon-500">{plan.price}</span>
                    {plan.period !== 'pricing' && (
                      <span className="text-sm sm:text-base text-raizing-teal-700 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-raizing-teal-700 px-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-raizing-maroon-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-raizing-teal-800">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className={`w-full py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-white hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 shadow-lg shadow-raizing-maroon-500/50 hover:scale-105'
                      : 'bg-gradient-to-r from-raizing-teal-900 to-raizing-teal-800 text-white hover:from-raizing-teal-800 hover:to-raizing-teal-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Additional Services
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-700 max-w-3xl mx-auto">
              Enhance your plan with these optional add-ons
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {addOns.map((addOn, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white p-5 sm:p-6 lg:p-8 rounded-xl border border-raizing-teal-200 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-lg text-white mb-4">
                  {addOn.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-raizing-teal-900 mb-2">
                  {addOn.name}
                </h3>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-raizing-maroon-500 mb-2">
                  {addOn.price}
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-raizing-teal-700">
                  {addOn.description}
                </p>
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
            <p className="text-base sm:text-lg text-raizing-teal-700">
              Common questions about our pricing
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Can I change my plan later?',
                answer: 'Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.'
              },
              {
                question: 'Do you offer discounts for annual plans?',
                answer: 'Yes, we offer a 15% discount for annual commitments. Contact us to learn more about annual pricing options.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, ACH transfers, and wire transfers for enterprise plans. All payments are processed securely.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No, there are no setup fees for any of our plans. You only pay the monthly subscription fee.'
              },
              {
                question: 'What happens if I exceed my plan limits?',
                answer: 'We\'ll notify you before you reach your limits. You can upgrade your plan or purchase additional capacity as needed.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied within the first 30 days, we\'ll provide a full refund.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-5 sm:p-6 rounded-xl border border-raizing-teal-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-raizing-teal-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-700 leading-relaxed">
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
            Need a Custom Solution?
          </h2>
          <p className="text-base sm:text-lg text-raizing-cream-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact us for enterprise pricing, custom plans, or to discuss your specific requirements. We'll create a solution tailored to your needs.
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
              Contact Sales
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

