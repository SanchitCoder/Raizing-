import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Target, Award, Users, TrendingUp, ArrowRight, CheckCircle2, Globe, Heart, Lightbulb } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
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

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay at the forefront of AI technology, constantly exploring new possibilities and solutions.',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the value we deliver to you.',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from strategy to execution.',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Integrity',
      description: 'Transparency, honesty, and ethical practices guide all our business relationships.',
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to democratize AI for businesses of all sizes'
    },
    {
      year: '2021',
      title: 'First 100 Clients',
      description: 'Reached our first milestone of 100 successful client implementations'
    },
    {
      year: '2022',
      title: 'Enterprise Expansion',
      description: 'Launched enterprise solutions and expanded our service portfolio'
    },
    {
      year: '2023',
      title: '500+ Projects',
      description: 'Completed over 500 successful AI transformation projects'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a leading AI solutions provider across multiple industries'
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
              <Users className="w-8 h-8 text-raizing-maroon-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-raizing-cream-200 mb-4 sm:mb-6">
              About Raizing AI
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-raizing-cream-300 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge AI solutions since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl sm:rounded-2xl border border-raizing-teal-200 p-6 sm:p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-4 sm:mb-6">
              Our Story
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                Raizing AI was founded in 2020 with a simple yet powerful mission: to make artificial intelligence accessible 
                and practical for businesses of all sizes. We recognized that while AI technology was advancing rapidly, 
                many companies struggled to understand how to implement it effectively.
              </p>
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                Today, we've grown into a trusted partner for over 500 companies, helping them transform their operations 
                through intelligent automation, strategic consulting, comprehensive training, and custom AI development. 
                Our team of experts combines deep technical knowledge with business acumen to deliver solutions that drive real results.
              </p>
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                We believe that AI should enhance human capabilities, not replace them. Our approach focuses on creating 
                solutions that empower teams, streamline processes, and unlock new possibilities for growth and innovation.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-raizing-cream-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-raizing-maroon-500 mb-1">500+</div>
                  <div className="text-sm text-raizing-teal-700">Projects Completed</div>
                </div>
                <div className="p-4 bg-raizing-cream-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-raizing-maroon-500 mb-1">50+</div>
                  <div className="text-sm text-raizing-teal-700">Team Members</div>
                </div>
                <div className="p-4 bg-raizing-cream-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-raizing-maroon-500 mb-1">15+</div>
                  <div className="text-sm text-raizing-teal-700">Industries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-700 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-5 sm:p-6 lg:p-8 rounded-xl border border-raizing-teal-200 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-lg text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="animate-on-scroll opacity-0 bg-white p-5 sm:p-6 lg:p-8 rounded-xl border border-raizing-teal-200 shadow-lg">
              <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-lg text-white mb-3 sm:mb-4">
                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-raizing-teal-800 leading-relaxed">
                To democratize AI technology and empower businesses worldwide to achieve their full potential through 
                intelligent automation, strategic guidance, and transformative solutions.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 bg-white p-5 sm:p-6 lg:p-8 rounded-xl border border-raizing-teal-200 shadow-lg" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex p-3 bg-gradient-to-r from-raizing-teal-700 to-raizing-teal-800 rounded-lg text-white mb-3 sm:mb-4">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-raizing-teal-800 leading-relaxed">
                To become the world's most trusted AI solutions partner, recognized for innovation, excellence, 
                and the transformative impact we create for our clients and their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Our Journey
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-700 max-w-3xl mx-auto">
              Key milestones in our growth and evolution
            </p>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-start bg-gradient-to-br from-raizing-cream-50 to-white p-5 sm:p-6 lg:p-8 rounded-xl border border-raizing-teal-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-raizing-teal-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-raizing-teal-700 leading-relaxed">
                    {milestone.description}
                  </p>
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
            Join Us on Our Mission
          </h2>
          <p className="text-base sm:text-lg text-raizing-cream-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Whether you're looking to transform your business with AI or join our team, we'd love to hear from you.
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
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/case-studies')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-raizing-cream-200/10 backdrop-blur-sm text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg border border-raizing-cream-200/20 hover:bg-raizing-cream-200/20 transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

