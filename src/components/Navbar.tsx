import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isAboutOpen && !target.closest('.about-dropdown')) {
        setIsAboutOpen(false);
      }
    };

    if (isAboutOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAboutOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setIsAboutOpen(false);
  };

  const handleNavigation = (path: string) => {
    if (path.startsWith('/')) {
      navigate(path);
    } else {
      // If it's a section ID, scroll to it on home page
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(path);
        }, 100);
      } else {
        scrollToSection(path);
      }
    }
    setIsMobileMenuOpen(false);
    setIsAboutOpen(false);
  };

  const handleAboutClick = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const aboutSubItems = [
    { label: 'Case Study', path: '/case-studies' },
    { label: 'Try AI', path: '/try-ai' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Our Team', path: '/our-team' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-raizing-teal-900/95 backdrop-blur-lg shadow-lg border-b border-raizing-teal-900'
          : 'bg-raizing-teal-900/98 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div 
            className="flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer group flex-shrink-0 min-w-0 flex-1 hover:scale-105 transition-transform duration-300" 
            onClick={() => navigate('/')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-raizing-teal-900/30 rounded-full blur-xl group-hover:bg-raizing-teal-900/50 transition-all duration-500 animate-pulse-slow"></div>
              <img 
                src="/RAIZING.AI LOGO.png" 
                alt="Raizing AI Logo" 
                className="relative h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain flex-shrink-0 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col min-w-0 gap-0.5 sm:gap-1 flex-1">
              <span className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold leading-tight group-hover:text-raizing-maroon-400 transition-colors duration-300 ${
                isScrolled ? 'text-raizing-cream-200' : 'text-raizing-cream-200'
              }`}>
                Raizing AI
              </span>
              <span className={`text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm font-medium leading-tight group-hover:translate-x-1 transition-transform duration-300 ${
                isScrolled ? 'text-raizing-maroon-400' : 'text-raizing-maroon-400'
              }`}>
                Transform. Streamline. Succeed.
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => handleNavigation('/automation')}
              className={`font-medium transition-all duration-300 hover:text-raizing-maroon-400 hover:scale-110 relative group/nav ${
                isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'
              }`}
            >
              <span className="relative z-10">Automation</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-raizing-maroon-400 group-hover/nav:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/training')}
              className={`font-medium transition-all duration-300 hover:text-raizing-maroon-400 hover:scale-110 relative group/nav ${
                isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'
              }`}
            >
              <span className="relative z-10">Training</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-raizing-maroon-400 group-hover/nav:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/consulting')}
              className={`font-medium transition-all duration-300 hover:text-raizing-maroon-400 hover:scale-110 relative group/nav ${
                isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'
              }`}
            >
              <span className="relative z-10">Consulting</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-raizing-maroon-400 group-hover/nav:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/development')}
              className={`font-medium transition-all duration-300 hover:text-raizing-maroon-400 hover:scale-110 relative group/nav ${
                isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'
              }`}
            >
              <span className="relative z-10">Development</span>
              <span className="absolute bottom-0 left-0 w-0 h-0 h-0.5 bg-raizing-maroon-400 group-hover/nav:w-full transition-all duration-300"></span>
            </button>
            
            <button
              onClick={() => handleNavigation('/ai-services')}
              className={`font-bold transition-all duration-300 hover:text-raizing-maroon-400 hover:scale-110 relative group/nav ${
                isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'
              }`}
            >
              <span className="relative z-10">AI Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-raizing-maroon-400 group-hover/nav:w-full transition-all duration-300"></span>
            </button>

            <div className="relative about-dropdown">
              <button
                onClick={handleAboutClick}
                className={`flex items-center gap-1 font-medium transition-colors duration-300 hover:text-raizing-maroon-400 ${
                  isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'
                }`}
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-raizing-teal-900 rounded-lg shadow-xl border border-raizing-teal-900 py-2 z-50">
                  {aboutSubItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left px-4 py-2 text-sm text-raizing-cream-300 hover:text-raizing-maroon-400 hover:bg-raizing-teal-800 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="relative px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/30 hover:shadow-raizing-maroon-500/50 hover:scale-105 hover:shadow-2xl overflow-hidden group/btn"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-raizing-maroon-600 to-raizing-maroon-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover/btn:opacity-100"></div>
            </button>
          </div>

          <button
            className={`md:hidden flex-shrink-0 ml-2 p-2 ${isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'} hover:text-raizing-maroon-400 transition-colors`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-raizing-teal-900/98 backdrop-blur-sm border-t border-raizing-teal-900 shadow-lg">
          <div className="px-4 sm:px-6 py-5 sm:py-6">
            <div className="flex items-center justify-between mb-6 pb-5 border-b border-raizing-teal-900">
              <div className="flex items-center gap-3 sm:gap-4">
                <img 
                  src="/RAIZING.AI LOGO.png" 
                  alt="Raizing AI Logo" 
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-base sm:text-lg font-bold text-raizing-cream-200 leading-tight">
                    Raizing AI
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-raizing-maroon-400 leading-tight">
                    Transform. Streamline. Succeed.
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-raizing-cream-300 hover:text-raizing-cream-200 transition-colors p-1"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => handleNavigation('/automation')}
                className="block w-full text-left py-3 px-4 rounded-md text-raizing-cream-300 font-medium hover:text-raizing-cream-200 hover:bg-raizing-teal-800/50 transition-colors"
              >
                Automation
              </button>
              <button
                onClick={() => handleNavigation('/training')}
                className="block w-full text-left py-3 px-4 rounded-md text-raizing-cream-300 font-medium hover:text-raizing-cream-200 hover:bg-raizing-teal-800/50 transition-colors"
              >
                Training
              </button>
              <button
                onClick={() => handleNavigation('/consulting')}
                className="block w-full text-left py-3 px-4 rounded-md text-raizing-cream-300 font-medium hover:text-raizing-cream-200 hover:bg-raizing-teal-800/50 transition-colors"
              >
                Consulting
              </button>
              <button
                onClick={() => handleNavigation('/development')}
                className="block w-full text-left py-3 px-4 rounded-md text-raizing-cream-300 font-medium hover:text-raizing-cream-200 hover:bg-raizing-teal-800/50 transition-colors"
              >
                Development
              </button>
              
              <button
                onClick={() => handleNavigation('/ai-services')}
                className="block w-full text-left py-3 px-4 rounded-md text-raizing-cream-200 font-bold hover:text-raizing-cream-100 hover:bg-raizing-teal-800/50 transition-colors"
              >
                AI Services
              </button>

              <div className="pt-2">
                <button
                  onClick={handleAboutClick}
                  className="flex items-center justify-between w-full text-left py-3 px-4 rounded-md text-raizing-cream-300 font-medium hover:text-raizing-cream-200 hover:bg-raizing-teal-800/50 transition-colors"
                >
                  <span>About</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAboutOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {aboutSubItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavigation(item.path)}
                        className="block w-full text-left py-2.5 px-4 rounded-md text-sm text-raizing-cream-400 hover:text-raizing-cream-200 hover:bg-raizing-teal-800/50 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3.5 mt-5 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/30"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
