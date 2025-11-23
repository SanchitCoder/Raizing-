import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Linkedin, Mail, ArrowRight, Award, Code, Lightbulb, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIAssessment from '../components/AIAssessment';

export default function OurTeam() {
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

  const leadership = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: '15+ years in AI and technology. Former VP at leading tech companies.',
      expertise: 'AI Strategy, Business Development',
      image: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Expert in machine learning and enterprise AI systems. PhD in Computer Science.',
      expertise: 'ML Engineering, System Architecture',
      image: 'MR'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Consulting',
      bio: 'Transformed 200+ businesses with AI solutions. MBA from Stanford.',
      expertise: 'AI Consulting, Strategy',
      image: 'EJ'
    }
  ];

  const teamMembers = [
    {
      name: 'David Kim',
      role: 'Senior AI Engineer',
      department: 'Development',
      expertise: 'Machine Learning, NLP',
      icon: <Code className="w-5 h-5" />
    },
    {
      name: 'Lisa Thompson',
      role: 'Automation Specialist',
      department: 'Automation',
      expertise: 'RPA, Workflow Design',
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      name: 'James Wilson',
      role: 'Training Director',
      department: 'Training',
      expertise: 'AI Education, Workshops',
      icon: <Users className="w-5 h-5" />
    },
    {
      name: 'Patricia Brown',
      role: 'Senior Consultant',
      department: 'Consulting',
      expertise: 'AI Strategy, Implementation',
      icon: <Award className="w-5 h-5" />
    },
    {
      name: 'Robert Martinez',
      role: 'Lead Developer',
      department: 'Development',
      expertise: 'Full-Stack AI Solutions',
      icon: <Code className="w-5 h-5" />
    },
    {
      name: 'Jennifer Lee',
      role: 'Client Success Manager',
      department: 'Operations',
      expertise: 'Client Relations, Project Management',
      icon: <Users className="w-5 h-5" />
    }
  ];

  const stats = [
    { value: '50+', label: 'Team Members' },
    { value: '15+', label: 'Years Avg Experience' },
    { value: '25+', label: 'Countries Represented' },
    { value: '500+', label: 'Projects Delivered' }
  ];

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
              <Users className="w-8 h-8 text-raizing-maroon-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-raizing-teal-900 dark:text-white">Our</span>{' '}
              <span className="text-raizing-maroon-600">Team</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Meet the experts driving AI transformation for businesses worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 rounded-xl sm:rounded-2xl border border-raizing-teal-900 p-6 sm:p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-4 sm:mb-6">
              World-Class Expertise
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                Our team brings together top talent from leading technology companies, research institutions, and consulting firms. 
                With diverse backgrounds spanning AI research, software engineering, business strategy, and industry expertise, 
                we're uniquely positioned to deliver exceptional results.
              </p>
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                We're passionate about AI and committed to continuous learning. Our team regularly contributes to open-source projects, 
                publishes research, and stays at the forefront of AI innovation to bring you the latest and most effective solutions.
              </p>
              <div className="grid sm:grid-cols-4 gap-4 mt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="p-4 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 rounded-lg text-center">
                    <div className="text-2xl font-bold text-raizing-maroon-500 mb-1">{stat.value}</div>
                    <div className="text-sm text-raizing-teal-900 dark:text-white">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Leadership Team
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Visionary leaders driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-5 sm:p-6 lg:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <img 
                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                    alt={leader.name}
                    className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-raizing-teal-900 dark:text-white text-center mb-1">
                  {leader.name}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-raizing-maroon-500 text-center font-semibold mb-2 sm:mb-3">
                  {leader.role}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-raizing-teal-900 dark:text-white text-center mb-2 sm:mb-3 leading-relaxed px-2">
                  {leader.bio}
                </p>
                <p className="text-xs sm:text-sm text-raizing-teal-900 dark:text-white text-center px-2">
                  {leader.expertise}
                </p>
                <div className="flex justify-center gap-3 mt-4">
                  <button className="p-2 bg-raizing-cream-100 hover:bg-raizing-maroon-500 hover:text-white rounded-lg transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-raizing-cream-100 hover:bg-raizing-maroon-500 hover:text-white rounded-lg transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Our Experts
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Talented professionals across all departments
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 p-4 sm:p-6 lg:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 group/avatar">
                    <div className="absolute inset-0 bg-gradient-to-r from-raizing-maroon-400 to-raizing-maroon-600 rounded-full blur-sm opacity-50 group-hover/avatar:opacity-75 transition-opacity"></div>
                    <img 
                      src={`https://i.pravatar.cc/150?img=${index + 10}`}
                      alt={member.name}
                      className="relative w-full h-full rounded-full object-cover border-2 border-white shadow-md group-hover/avatar:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-raizing-teal-900 dark:text-white mb-1 truncate">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-raizing-maroon-500 font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-xs sm:text-sm text-raizing-teal-900 dark:text-white">
                      {member.department}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-raizing-teal-900 dark:text-white">
                  {member.icon}
                  <span className="truncate">{member.expertise}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Our Culture
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              What makes us unique
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We encourage experimentation and embrace new ideas',
                icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
              },
              {
                title: 'Collaboration',
                description: 'We work together to achieve shared goals',
                icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              },
              {
                title: 'Excellence',
                description: 'We strive for the highest quality in everything',
                icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              },
              {
                title: 'Growth',
                description: 'We invest in continuous learning and development',
                icon: <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              }
            ].map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-5 sm:p-6 lg:p-8 rounded-xl border border-raizing-teal-900 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-lg text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {item.description}
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
            <span className="text-raizing-teal-900 dark:text-white">Join</span>{' '}
            <span className="text-raizing-maroon-600">Our Team</span>
          </h2>
          <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals passionate about AI. Check out our open positions or reach out to learn more.
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
              View Open Positions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/about-us')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-raizing-cream-200/10 backdrop-blur-sm text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg border border-raizing-cream-200/20 hover:bg-raizing-cream-200/20 transition-all duration-300"
            >
              Learn About Us
            </button>
          </div>
        </div>
      </section>

      <AIAssessment />
      <Footer />
    </div>
  );
}

