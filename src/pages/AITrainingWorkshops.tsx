import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap, BookOpen, CheckCircle2, Clock, Users, Award, Video, FileText, Target, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIAssessment from '../components/AIAssessment';

const trainingTypes = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Customized Training Programs',
    description: 'Tailored training programs designed specifically for your team\'s needs and skill levels.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Hands-on Workshops',
    description: 'Interactive, practical workshops where participants learn by doing with real-world scenarios.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Certification Courses',
    description: 'Comprehensive certification programs that validate your team\'s AI expertise.'
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Online Learning Modules',
    description: 'Self-paced online courses with video tutorials, exercises, and assessments.'
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Resource Library',
    description: 'Access to comprehensive documentation, guides, and best practices.'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Ongoing Support',
    description: 'Continuous support and follow-up sessions to ensure long-term success.'
  }
];

const topics = [
  {
    title: 'AI Fundamentals',
    description: 'Introduction to AI concepts, machine learning, and neural networks for beginners.'
  },
  {
    title: 'AI Tools & Platforms',
    description: 'Hands-on training on popular AI tools like ChatGPT, Claude, Midjourney, and more.'
  },
  {
    title: 'Prompt Engineering',
    description: 'Master the art of crafting effective prompts for AI models to get optimal results.'
  },
  {
    title: 'AI Integration',
    description: 'Learn how to integrate AI tools into your existing workflows and systems.'
  },
  {
    title: 'AI Ethics & Best Practices',
    description: 'Understand ethical considerations and best practices for responsible AI use.'
  },
  {
    title: 'AI for Business',
    description: 'Strategic applications of AI to solve business problems and drive growth.'
  }
];

const benefits = [
  {
    metric: '85%',
    label: 'Skill Improvement',
    description: 'Measurable improvement in AI proficiency and confidence'
  },
  {
    metric: '100+',
    label: 'Hours of Content',
    description: 'Comprehensive training materials and resources'
  },
  {
    metric: '500+',
    label: 'Trained Professionals',
    description: 'Professionals certified through our programs'
  },
  {
    metric: '98%',
    label: 'Satisfaction Rate',
    description: 'High satisfaction and positive feedback from participants'
  }
];

const formats = [
  {
    title: 'In-Person Workshops',
    description: 'Interactive, hands-on sessions conducted at your location or our training facilities.'
  },
  {
    title: 'Virtual Training',
    description: 'Live online sessions with real-time interaction and collaboration tools.'
  },
  {
    title: 'Hybrid Programs',
    description: 'Combination of in-person and virtual sessions for maximum flexibility.'
  },
  {
    title: 'Self-Paced Learning',
    description: 'Online modules that participants can complete at their own pace.'
  }
];

export default function AITrainingWorkshops() {
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
              <GraduationCap className="w-8 h-8 text-raizing-maroon-600" />
            </div>
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 bg-raizing-maroon-50 border border-raizing-maroon-200 rounded-full">
              <span className="text-raizing-maroon-600 text-xs sm:text-sm font-semibold">Our Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-raizing-teal-900 dark:text-white">AI Training</span>
              <br className="hidden sm:block" />
              <span className="text-raizing-maroon-600">& Workshops</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Hands-on training programs that empower teams with practical AI skills and knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 rounded-xl sm:rounded-2xl border border-raizing-teal-900 p-6 sm:p-8 md:p-10 shadow-lg animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-4 sm:mb-6">
              Empower Your Team with AI Skills
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed mb-4">
              The success of AI implementation depends on your team's ability to effectively use AI tools and technologies. 
              Our comprehensive training and workshop programs are designed to equip your team with the practical skills and 
              knowledge they need to leverage AI in their daily work.
            </p>
            <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
              From foundational AI concepts to advanced applications, our programs are tailored to different skill levels 
              and roles. Whether you're looking for executive briefings, technical deep-dives, or hands-on workshops, 
              we have programs that will transform how your team works with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Training Types Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Training Formats
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Flexible training options to suit your team's needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {trainingTypes.map((type, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-600 to-raizing-maroon-800 rounded-lg text-white mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {type.title}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Training Topics
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Comprehensive coverage of AI concepts and applications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-raizing-maroon-500 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-raizing-teal-900 dark:text-white">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Delivery Formats
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Choose the format that works best for your team
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {formats.map((format, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-6 sm:p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {format.title}
                </h3>
                <p className="text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {format.description}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Training Impact
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Measurable results from our training programs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 p-6 sm:p-8 rounded-xl border border-raizing-teal-900 text-center hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-raizing-maroon-500 mb-2">
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

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            <span className="text-raizing-teal-900 dark:text-white">Ready to Upskill</span>
            <br className="hidden sm:block" />
            <span className="text-raizing-maroon-600">Your Team?</span>
          </h2>
          <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how our training programs can empower your team with AI skills. Get in touch for a free consultation.
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

      <AIAssessment />
      <Footer />
    </div>
  );
}

