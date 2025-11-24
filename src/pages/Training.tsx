import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap, BookOpen, CheckCircle2, Users, Award, Video, FileText, Target, TrendingUp, ArrowRight, Star, Clock, Calendar, Globe } from 'lucide-react';
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
  'AI Fundamentals & Concepts',
  'AI Tools & Platforms (ChatGPT, Claude, etc.)',
  'Prompt Engineering Mastery',
  'AI Integration Strategies',
  'AI Ethics & Best Practices',
  'AI for Business Applications'
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

export default function Training() {
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
              <GraduationCap className="w-8 h-8 text-raizing-maroon-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-6xl font-bold mb-3 sm:mb-4 mb-4 sm:mb-6">
              <span className="text-raizing-teal-900 dark:text-white">AI Training</span>
              <br className="block" />
              <span className="text-raizing-maroon-600">& Workshops</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Hands-on training programs that empower teams with practical AI skills and knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 rounded-2xl border border-raizing-teal-900 p-6 sm:p-8 lg:p-10 shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4 mb-4 sm:mb-6">
              Empower Your Team with AI Skills
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                The success of AI implementation depends on your team's ability to effectively use AI tools and technologies. 
                Our comprehensive training and workshop programs are designed to equip your team with the practical skills and 
                knowledge they need to leverage AI in their daily work.
              </p>
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                From foundational AI concepts to advanced applications, our programs are tailored to different skill levels 
                and roles. Whether you're looking for executive briefings, technical deep-dives, or hands-on workshops, 
                we have programs that will transform how your team works with AI.
              </p>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6">
                <div className="p-4 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 rounded-lg text-center">
                  <div className="text-lg sm:text-xl sm:text-2xl font-bold text-raizing-maroon-500 mb-1">500+</div>
                  <div className="text-xs sm:text-sm text-raizing-teal-900 dark:text-white">Professionals Trained</div>
                </div>
                <div className="p-4 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 rounded-lg text-center">
                  <div className="text-lg sm:text-xl sm:text-2xl font-bold text-raizing-maroon-500 mb-1">98%</div>
                  <div className="text-xs sm:text-sm text-raizing-teal-900 dark:text-white">Satisfaction Rate</div>
                </div>
                <div className="p-4 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 rounded-lg text-center">
                  <div className="text-lg sm:text-xl sm:text-2xl font-bold text-raizing-maroon-500 mb-1">100+</div>
                  <div className="text-xs sm:text-sm text-raizing-teal-900 dark:text-white">Hours of Content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Types Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Training Formats
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Flexible training options to suit your team's needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {trainingTypes.map((type, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-600 to-raizing-maroon-800 rounded-lg text-white mb-3 sm:mb-4">
                  {type.icon}
                </div>
                <h3 className="text-lg sm:text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {type.title}
                </h3>
                <p className="text-xs sm:text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Training Topics
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Comprehensive coverage of AI concepts and applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 gap-4 sm:gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 p-6 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-raizing-maroon-500 flex-shrink-0 mt-1" />
                  <span className="text-base sm:text-lg font-semibold text-raizing-teal-900 dark:text-white">{topic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Training Impact
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Measurable results from our training programs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-8 rounded-xl border border-raizing-teal-900 text-center hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
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

      {/* Course Curriculum Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Comprehensive Course Curriculum
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Structured learning paths designed for different roles and skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                level: 'Beginner',
                title: 'AI Fundamentals',
                duration: '8 hours',
                modules: ['Introduction to AI', 'AI Tools Overview', 'Basic Prompting', 'AI Ethics'],
                color: 'from-raizing-maroon-400 to-raizing-maroon-600'
              },
              {
                level: 'Intermediate',
                title: 'Advanced AI Applications',
                duration: '16 hours',
                modules: ['Advanced Prompting', 'AI Integration', 'Workflow Automation', 'Data Analysis'],
                color: 'from-raizing-maroon-500 to-raizing-maroon-700'
              },
              {
                level: 'Advanced',
                title: 'AI Strategy & Leadership',
                duration: '24 hours',
                modules: ['AI Strategy Development', 'Team Management', 'ROI Analysis', 'Implementation Planning'],
                color: 'from-raizing-maroon-600 to-raizing-maroon-800'
              }
            ].map((course, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-block px-3 sm:px-4 py-1 bg-gradient-to-r ${course.color} text-white text-xs font-semibold rounded-full mb-3 sm:mb-4`}>
                  {course.level}
                </div>
                <h3 className="text-lg sm:text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-2">{course.title}</h3>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <ul className="space-y-2">
                  {course.modules.map((module, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-raizing-teal-800">
                      <CheckCircle2 className="w-4 h-4 text-raizing-maroon-500 mt-0.5 flex-shrink-0" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              What You'll Learn
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Practical skills and knowledge you'll gain from our training programs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: 'Master AI Tools',
                description: 'Become proficient with ChatGPT, Claude, Midjourney, and other leading AI platforms. Learn to leverage each tool\'s unique capabilities for maximum productivity.',
                icon: <Target className="w-6 h-6" />
              },
              {
                title: 'Advanced Prompting',
                description: 'Develop expert-level prompt engineering skills to get optimal results from AI models. Learn techniques for complex tasks and creative applications.',
                icon: <FileText className="w-6 h-6" />
              },
              {
                title: 'AI Integration',
                description: 'Learn how to integrate AI tools into your existing workflows and systems. Understand APIs, webhooks, and automation strategies.',
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                title: 'Strategic Implementation',
                description: 'Develop skills to identify AI opportunities, plan implementations, measure ROI, and lead AI transformation initiatives in your organization.',
                icon: <Award className="w-6 h-6" />
              }
            ].map((outcome, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-600 to-raizing-maroon-800 rounded-lg text-white mb-3 sm:mb-4">
                  {outcome.icon}
                </div>
                <h3 className="text-lg sm:text-xl sm:text-2xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {outcome.title}
                </h3>
                <p className="text-xs sm:text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Participant Testimonials
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white max-w-3xl mx-auto">
              Hear from professionals who transformed their work with our training
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                quote: 'The training completely changed how I work. I\'m now 3x more productive and can handle complex tasks that used to take hours in minutes.',
                author: 'David Kim',
                role: 'Marketing Manager',
                company: 'Digital Solutions Co.',
                rating: 5
              },
              {
                quote: 'Best investment in professional development. The hands-on approach and real-world examples made all the difference.',
                author: 'Lisa Thompson',
                role: 'Operations Lead',
                company: 'Innovation Labs',
                rating: 5
              },
              {
                quote: 'Our entire team went through the training and the impact was immediate. We\'re now using AI tools daily and seeing incredible results.',
                author: 'James Wilson',
                role: 'Director of Technology',
                company: 'Enterprise Systems',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-8 rounded-xl border border-raizing-teal-900 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-raizing-maroon-500 text-raizing-maroon-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm sm:text-base text-raizing-teal-800 mb-4 sm:mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-raizing-maroon-400 to-raizing-maroon-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-raizing-teal-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-xs sm:text-sm text-raizing-teal-900 dark:text-white">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white">
              Common questions about our training programs
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'What skill level is required to enroll?',
                answer: 'Our programs are designed for all skill levels. We offer beginner, intermediate, and advanced courses. No prior AI experience is required for beginner courses.'
              },
              {
                question: 'How long are the training programs?',
                answer: 'Program duration varies from 1-day workshops to 8-week comprehensive courses. Most programs range from 8-40 hours of instruction, with flexible scheduling options.'
              },
              {
                question: 'Are the courses available online or in-person?',
                answer: 'We offer both online and in-person options, as well as hybrid formats. Online courses include live sessions and self-paced modules. In-person training can be conducted at your location or our facilities.'
              },
              {
                question: 'Do you provide certificates upon completion?',
                answer: 'Yes, participants receive certificates of completion for all programs. Advanced programs include industry-recognized certifications that validate your AI expertise.'
              },
              {
                question: 'Can training be customized for our organization?',
                answer: 'Absolutely! We specialize in creating customized training programs tailored to your industry, use cases, and team needs. This ensures maximum relevance and immediate applicability.'
              },
              {
                question: 'What support is available after training?',
                answer: 'We provide ongoing support including access to resource libraries, follow-up Q&A sessions, community forums, and optional advanced workshops to continue skill development.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 p-6 rounded-xl border border-raizing-teal-900"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-raizing-teal-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm sm:text-base text-raizing-teal-900 dark:text-white leading-relaxed">
                  {faq.answer}
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
            <span className="text-raizing-teal-900 dark:text-white">Ready to Upskill</span>
            <br className="block" />
            <span className="text-raizing-maroon-600">Your Team?</span>
          </h2>
          <p className="text-base sm:text-lg text-raizing-teal-900 dark:text-white mb-4 sm:mb-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how our training programs can empower your team with AI skills. Get in touch for a free consultation.
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
              className="group px-4 sm:px-6 px-6 sm:px-8 py-2 sm:py-3 py-3 sm:py-4 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/case-studies')}
              className="px-4 sm:px-6 px-6 sm:px-8 py-2 sm:py-3 py-3 sm:py-4 bg-raizing-cream-200/10 backdrop-blur-sm text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg border border-raizing-cream-200/20 hover:bg-raizing-cream-200/20 transition-all duration-300"
            >
              View Success Stories
            </button>
          </div>
        </div>
      </section>

      <AIAssessment />
      <Footer />
    </div>
  );
}

