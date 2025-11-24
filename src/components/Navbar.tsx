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
      className={`fixed z-40 will-change-transform ${
        isScrolled
          ? 'top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 bg-raizing-teal-900 backdrop-blur-lg shadow-2xl rounded-2xl sm:rounded-3xl border border-raizing-teal-900/50'
          : 'top-0 left-0 right-0 bg-raizing-teal-900 backdrop-blur-sm'
      }`}
      style={{
        transition: 'top 0.4s cubic-bezier(0.4, 0, 0.2, 1), left 0.4s cubic-bezier(0.4, 0, 0.2, 1), right 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div 
        className="max-w-7xl mx-auto"
        style={{
          transition: 'padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          paddingLeft: isScrolled ? '1rem' : '0.75rem',
          paddingRight: isScrolled ? '1rem' : '0.75rem',
          paddingTop: isScrolled ? '0.5rem' : '0',
          paddingBottom: isScrolled ? '0.5rem' : '0'
        }}
      >
        <div 
          className="flex items-center justify-between"
          style={{
            transition: 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            height: isScrolled ? '3.5rem' : '4rem'
          }}
        >
          <div 
            className={`${isMobileMenuOpen ? 'hidden md:flex' : 'flex'} items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer flex-shrink-0 min-w-0 flex-1`}
            onClick={() => navigate('/')}
          >
            <div className="relative">
              <img 
src="/IMG_20251122_195044.jpg" 
                alt="Raizing AI Logo" 
                className="relative w-auto object-contain flex-shrink-0"
                style={{
                  transition: 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  height: isScrolled ? '2.5rem' : '3rem'
                }}
              />
            </div>
          </div>

          <div 
            className="hidden md:flex items-center"
            style={{
              transition: 'gap 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              gap: isScrolled ? '1rem' : '1.5rem'
            }}
          >
            <button
              onClick={() => handleNavigation('/automation')}
              className="font-medium text-raizing-cream-200 hover:text-raizing-cream-100 hover:scale-110 relative group/nav transition-transform duration-300"
              style={{
                fontSize: isScrolled ? '0.875rem' : '1rem',
                transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <span className="relative z-10">Automation</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-raizing-cream-200 group-hover/nav:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/training')}
              className="font-medium text-raizing-cream-200 hover:text-raizing-cream-100 hover:scale-110 relative group/nav transition-transform duration-300"
              style={{
                fontSize: isScrolled ? '0.875rem' : '1rem',
                transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <span className="relative z-10">Training</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-raizing-cream-200 group-hover/nav:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/consulting')}
              className="font-medium text-raizing-cream-200 hover:text-raizing-cream-100 hover:scale-110 relative group/nav transition-transform duration-300"
              style={{
                fontSize: isScrolled ? '0.875rem' : '1rem',
                transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <span className="relative z-10">Consulting</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-raizing-cream-200 group-hover/nav:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/development')}
              className="font-medium text-raizing-cream-200 hover:text-raizing-cream-100 hover:scale-110 relative group/nav transition-transform duration-300"
              style={{
                fontSize: isScrolled ? '0.875rem' : '1rem',
                transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <span className="relative z-10">Development</span>
              <span className="absolute bottom-0 left-0 w-0 h-0 h-0.5 bg-raizing-cream-200 group-hover/nav:w-full transition-all duration-300"></span>
            </button>
            
            <button
              onClick={() => handleNavigation('/ai-services')}
              className="font-bold text-raizing-cream-200 hover:text-raizing-cream-100 hover:scale-110 relative group/nav transition-transform duration-300"
              style={{
                fontSize: isScrolled ? '0.875rem' : '1rem',
                transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <span className="relative z-10">AI Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-raizing-cream-200 group-hover/nav:w-full transition-all duration-300"></span>
            </button>

            <div className="relative about-dropdown">
              <button
                onClick={handleAboutClick}
                className="flex items-center gap-1 font-medium text-raizing-cream-200 hover:text-raizing-cream-100 transition-colors duration-300"
                style={{
                  fontSize: isScrolled ? '0.875rem' : '1rem',
                  transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
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
                      className="block w-full text-left px-4 py-2 text-sm text-raizing-cream-200 hover:text-raizing-cream-100 hover:bg-raizing-teal-800 transition-colors font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="relative bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 shadow-lg shadow-raizing-maroon-500/30 hover:shadow-raizing-maroon-500/50 hover:scale-105 hover:shadow-2xl overflow-hidden group/btn transition-transform duration-300"
              style={{
                transition: 'padding 0.4s cubic-bezier(0.4, 0, 0.2, 1), font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                paddingLeft: isScrolled ? '0.75rem' : '1rem',
                paddingRight: isScrolled ? '0.75rem' : '1rem',
                paddingTop: isScrolled ? '0.375rem' : '0.5rem',
                paddingBottom: isScrolled ? '0.375rem' : '0.5rem',
                fontSize: isScrolled ? '0.75rem' : '0.875rem'
              }}
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-raizing-maroon-600 to-raizing-maroon-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover/btn:opacity-100"></div>
            </button>
          </div>

          <button
            className="md:hidden flex-shrink-0 ml-2 p-2.5 min-w-[44px] min-h-[44px] text-raizing-cream-200 hover:text-raizing-cream-100 transition-colors flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className={`md:hidden fixed left-0 right-0 bottom-0 ${isScrolled ? 'top-[3.5rem]' : 'top-[4rem]'} bg-black/20 backdrop-blur-sm z-40`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Mobile Menu */}
          <div className={`md:hidden fixed left-0 right-0 bottom-0 ${isScrolled ? 'top-[3.5rem]' : 'top-[4rem]'} bg-raizing-teal-900 backdrop-blur-sm shadow-lg z-50 overflow-y-auto`}>
            <div className="px-4 sm:px-6 py-5 sm:py-6">
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-raizing-teal-900/50">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img 
                    src="/IMG_20251122_195044.jpg" 
                    alt="Raizing AI Logo" 
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-raizing-cream-200 hover:text-raizing-cream-100 transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-2 relative z-10">
              <button
                onClick={() => handleNavigation('/automation')}
                className="block w-full text-left py-3.5 px-4 min-h-[44px] rounded-md text-raizing-cream-200 font-medium hover:text-raizing-cream-100 hover:bg-raizing-teal-800/50 transition-colors"
              >
                Automation
              </button>
              <button
                onClick={() => handleNavigation('/training')}
                className="block w-full text-left py-3.5 px-4 min-h-[44px] rounded-md text-raizing-cream-200 font-medium hover:text-raizing-cream-100 hover:bg-raizing-teal-800/50 transition-colors"
              >
                Training
              </button>
              <button
                onClick={() => handleNavigation('/consulting')}
                className="block w-full text-left py-3.5 px-4 min-h-[44px] rounded-md text-raizing-cream-200 font-medium hover:text-raizing-cream-100 hover:bg-raizing-teal-800/50 transition-colors"
              >
                Consulting
              </button>
              <button
                onClick={() => handleNavigation('/development')}
                className="block w-full text-left py-3.5 px-4 min-h-[44px] rounded-md text-raizing-cream-200 font-medium hover:text-raizing-cream-100 hover:bg-raizing-teal-800/50 transition-colors"
              >
                Development
              </button>
              
              <button
                onClick={() => handleNavigation('/ai-services')}
                className="block w-full text-left py-3.5 px-4 min-h-[44px] rounded-md text-raizing-cream-200 font-bold hover:text-raizing-cream-100 hover:bg-raizing-teal-800/50 transition-colors"
              >
                AI Services
              </button>

              <div className="pt-2">
                <button
                  onClick={handleAboutClick}
                  className="flex items-center justify-between w-full text-left py-3.5 px-4 min-h-[44px] rounded-md text-raizing-cream-200 font-medium hover:text-raizing-cream-100 hover:bg-raizing-teal-800/50 transition-colors"
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
                        className="block w-full text-left py-3 px-4 min-h-[44px] rounded-md text-sm text-raizing-cream-200 hover:text-raizing-cream-100 hover:bg-raizing-teal-800/50 transition-colors font-medium"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3.5 mt-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/30"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
        </>
      )}
    </nav>
  );
}
