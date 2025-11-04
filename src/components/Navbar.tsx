import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

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
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'p-0.5 sm:p-1 bg-raizing-teal-900/95 shadow-sm' 
                : 'p-0.5 sm:p-1 bg-raizing-teal-900/80 backdrop-blur-sm'
            }`}>
              <img 
                src="/Raizing Logo.jpg" 
                alt="Raizing AI Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto object-contain rounded"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['About', 'Services', 'Showcase', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors duration-300 hover:text-raizing-maroon-400 ${
                  isScrolled ? 'text-raizing-cream-500' : 'text-raizing-cream-200'
                }`}
              >
                {item}
              </button>
            ))}
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
        <div className="md:hidden bg-raizing-teal-900 border-t border-raizing-teal-700 shadow-lg">
          <div className="px-4 sm:px-6 py-4 space-y-3">
            {['About', 'Services', 'Showcase', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-raizing-cream-500 font-medium hover:text-raizing-maroon-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-2.5 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 mt-2"
            >
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
