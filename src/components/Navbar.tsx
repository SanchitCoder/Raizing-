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
          ? 'bg-raizing-teal-900/95 backdrop-blur-lg shadow-lg border-b border-raizing-teal-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/RAIZING.AI LOGO.png" 
              alt="Raizing AI Logo" 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => handleNavigation('/automation')}
              className={`font-medium transition-colors duration-300 hover:text-raizing-maroon-400 ${
                isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'
              }`}
            >
              Automation
            </button>
            <button
              onClick={() => handleNavigation('/training')}
              className={`font-medium transition-colors duration-300 hover:text-raizing-maroon-400 ${
                isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'
              }`}
            >
              Training
            </button>
            <button
              onClick={() => handleNavigation('/consulting')}
              className={`font-medium transition-colors duration-300 hover:text-raizing-maroon-400 ${
                isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'
              }`}
            >
              Consulting
            </button>
            <button
              onClick={() => handleNavigation('/development')}
              className={`font-medium transition-colors duration-300 hover:text-raizing-maroon-400 ${
                isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'
              }`}
            >
              Development
            </button>
            
            <button
              onClick={() => handleNavigation('/ai-services')}
              className={`font-bold transition-colors duration-300 hover:text-raizing-maroon-400 ${
                isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'
              }`}
            >
              AI Services
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
                <div className="absolute top-full left-0 mt-2 w-48 bg-raizing-teal-900 rounded-lg shadow-xl border border-raizing-teal-700 py-2 z-50">
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
              className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/30 hover:shadow-raizing-maroon-500/50"
            >
              Let's Connect
            </button>
          </div>

          <button
            className={`md:hidden ${isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-raizing-teal-200 shadow-lg">
          <div className="px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-raizing-teal-200">
              <div className="flex items-center gap-2">
                <img 
                  src="/RAIZING.AI LOGO.png" 
                  alt="Raizing AI Logo" 
                  className="h-8 w-auto object-contain"
                />
                <span className="text-lg font-bold text-raizing-teal-900">Raizing AI</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-raizing-teal-700 hover:text-raizing-maroon-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-1">
            <button
              onClick={() => handleNavigation('/automation')}
              className="block w-full text-left py-3 text-raizing-teal-900 font-medium hover:text-raizing-maroon-500 transition-colors"
            >
              Automation
            </button>
            <button
              onClick={() => handleNavigation('/training')}
              className="block w-full text-left py-3 text-raizing-teal-900 font-medium hover:text-raizing-maroon-500 transition-colors"
            >
              Training
            </button>
            <button
              onClick={() => handleNavigation('/consulting')}
              className="block w-full text-left py-3 text-raizing-teal-900 font-medium hover:text-raizing-maroon-500 transition-colors"
            >
              Consulting
            </button>
            <button
              onClick={() => handleNavigation('/development')}
              className="block w-full text-left py-3 text-raizing-teal-900 font-medium hover:text-raizing-maroon-500 transition-colors"
            >
              Development
            </button>
            
            <button
              onClick={() => handleNavigation('/ai-services')}
              className="block w-full text-left py-3 text-raizing-teal-900 font-bold hover:text-raizing-maroon-500 transition-colors"
            >
              AI Services
            </button>

            <div>
              <button
                onClick={handleAboutClick}
                className="flex items-center justify-between w-full text-left py-3 text-raizing-teal-900 font-medium hover:text-raizing-maroon-500 transition-colors"
              >
                <span>About</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAboutOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {aboutSubItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left py-2 text-sm text-raizing-teal-700 hover:text-raizing-maroon-500 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 mt-4"
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
