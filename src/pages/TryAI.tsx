import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Zap, CheckCircle2, ArrowRight, Play, Code, Brain, Rocket } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TryAI() {
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

  const aiTools = [
    {
      name: 'ChatGPT',
      description: 'Advanced conversational AI for content creation, analysis, and problem-solving',
      category: 'Text Generation',
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Claude',
      description: 'AI assistant for complex reasoning, writing, and analysis tasks',
      category: 'Analysis & Writing',
      icon: <Code className="w-6 h-6" />
    },
    {
      name: 'Midjourney',
      description: 'AI-powered image generation for creative visual content',
      category: 'Image Generation',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      name: 'DALL-E',
      description: 'Create images from text descriptions with advanced AI',
      category: 'Image Generation',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      title: 'Content Creation',
      description: 'Generate blog posts, social media content, and marketing copy in minutes',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Data Analysis',
      description: 'Analyze large datasets, generate insights, and create reports automatically',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Image Generation',
      description: 'Create custom images, graphics, and visual content for your brand',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Code Generation',
      description: 'Write, debug, and optimize code with AI assistance',
      icon: <Code className="w-6 h-6" />
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
              <Sparkles className="w-8 h-8 text-raizing-maroon-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-raizing-cream-200 mb-4 sm:mb-6">
              Try AI Tools
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-raizing-cream-300 max-w-3xl mx-auto">
              Experience the power of AI with our curated selection of cutting-edge tools
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl sm:rounded-2xl border border-raizing-teal-200 p-6 sm:p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-4 sm:mb-6">
              Discover AI Tools That Transform Your Work
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                Explore our handpicked selection of AI tools that can revolutionize how you work. From content creation to data analysis, 
                these powerful AI assistants can help you accomplish tasks faster, more accurately, and with greater creativity.
              </p>
              <p className="text-base sm:text-lg text-raizing-teal-800 leading-relaxed">
                Whether you're a business professional, creative, developer, or entrepreneur, discover how AI can enhance your productivity 
                and unlock new possibilities for your projects and workflows.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-raizing-cream-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-raizing-maroon-500 mb-1">50+</div>
                  <div className="text-sm text-raizing-teal-700">AI Tools Available</div>
                </div>
                <div className="p-4 bg-raizing-cream-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-raizing-maroon-500 mb-1">10x</div>
                  <div className="text-sm text-raizing-teal-700">Productivity Boost</div>
                </div>
                <div className="p-4 bg-raizing-cream-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-raizing-maroon-500 mb-1">24/7</div>
                  <div className="text-sm text-raizing-teal-700">Available Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Popular AI Tools
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-700 max-w-3xl mx-auto">
              Explore these powerful AI tools and see what they can do for you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {aiTools.map((tool, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-5 sm:p-6 lg:p-8 rounded-xl border border-raizing-teal-200 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-lg text-white mb-4">
                  {tool.icon}
                </div>
                <div className="px-2 py-1 bg-raizing-maroon-100 text-raizing-maroon-700 text-xs font-semibold rounded-full w-fit mb-2 sm:mb-3">
                  {tool.category}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-raizing-teal-900 mb-2 sm:mb-3">
                  {tool.name}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-raizing-teal-700 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 to-raizing-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              What You Can Do with AI
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-700 max-w-3xl mx-auto">
              Discover practical applications of AI tools in your daily work
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white p-5 sm:p-6 lg:p-8 rounded-xl border border-raizing-teal-200 hover:border-raizing-maroon-500/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-700 rounded-lg text-white mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-raizing-teal-900 mb-2 sm:mb-3">
                  {useCase.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-raizing-teal-700 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
              Getting Started with AI
            </h2>
            <p className="text-base sm:text-lg text-raizing-teal-700">
              Simple steps to begin your AI journey
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Choose Your Tool',
                description: 'Select the AI tool that best fits your needs from our curated selection'
              },
              {
                step: '02',
                title: 'Sign Up & Explore',
                description: 'Create an account and explore the tool\'s features and capabilities'
              },
              {
                step: '03',
                title: 'Start Creating',
                description: 'Begin using AI to enhance your work and boost productivity'
              },
              {
                step: '04',
                title: 'Get Support',
                description: 'Access our training resources and support to maximize your results'
              }
            ].map((step, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gradient-to-br from-raizing-cream-50 to-white p-5 sm:p-6 lg:p-8 rounded-xl border border-raizing-teal-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 sm:gap-4 w-full sm:w-auto">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-raizing-maroon-500 flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1 sm:flex-none">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-raizing-teal-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-raizing-teal-700 leading-relaxed">
                      {step.description}
                    </p>
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
            Ready to Experience AI?
          </h2>
          <p className="text-base sm:text-lg text-raizing-cream-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Start using AI tools today and transform how you work. Get personalized recommendations and training to maximize your results.
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
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/training')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-raizing-cream-200/10 backdrop-blur-sm text-raizing-cream-200 rounded-lg font-semibold text-base sm:text-lg border border-raizing-cream-200/20 hover:bg-raizing-cream-200/20 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

