import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-raizing-teal-900 dark:from-gray-900 via-raizing-teal-800 dark:via-gray-800 to-raizing-teal-900 dark:to-gray-900 transition-colors duration-300 text-raizing-cream-200 pt-12 pt-16 pb-24 pb-28 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-6 sm:gap-8 gap-10 gap-12 mb-6 sm:mb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="relative overflow-hidden rounded-lg p-0.5 p-1 bg-raizing-teal-900/85 backdrop-blur-sm">
                <img 
                  src="/RAIZING.AI LOGO.png" 
                  alt="Raizing AI Logo" 
                  className="h-10 sm:h-12 h-14 w-auto object-contain rounded"
                />
              </div>
            </div>
            <p className="text-xs sm:text-sm sm:text-base text-raizing-cream-400 mb-3 sm:mb-4 mb-4 sm:mb-6 leading-relaxed">
              Empowering businesses with cutting-edge AI automation, consulting, and training solutions.
            </p>
            <div className="flex gap-3">
              {['Li', 'Tw', 'Fb', 'Ig'].map((social, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 bg-raizing-cream-200/10 backdrop-blur-sm rounded-lg hover:bg-raizing-maroon-500 hover:scale-110 transition-all duration-300 flex items-center justify-center text-xs sm:text-sm font-semibold"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 space-y-3">
              {['AI Workflow Automation', 'AI Consulting', 'AI Training & Workshops', 'Custom Solutions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-raizing-cream-400 hover:text-raizing-maroon-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 space-y-3">
              {['About Us', 'Case Studies', 'Blog', 'Careers', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-raizing-cream-400 hover:text-raizing-maroon-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-raizing-cream-400 text-xs sm:text-sm sm:text-base">
                <Phone className="w-5 h-5 text-raizing-maroon-400 flex-shrink-0 mt-0.5" />
                <span className="break-all">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-raizing-cream-400 text-xs sm:text-sm sm:text-base">
                <Mail className="w-5 h-5 text-raizing-maroon-400 flex-shrink-0 mt-0.5" />
                <span className="break-all">contact@raizingai.com</span>
              </li>
              <li className="flex items-start gap-3 text-raizing-cream-400 text-xs sm:text-sm sm:text-base">
                <MapPin className="w-5 h-5 text-raizing-maroon-400 flex-shrink-0 mt-0.5" />
                <span>123 AI Boulevard<br />Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 pt-8 border-t border-raizing-cream-200/10">
          <div className="flex flex-col flex-row justify-between items-center gap-3 sm:gap-4 text-center text-left">
            <p className="text-raizing-cream-400 text-xs sm:text-sm">
              &copy; {currentYear} Raizing AI. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-raizing-cream-400 hover:text-raizing-maroon-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-raizing-cream-400 hover:text-raizing-maroon-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-raizing-cream-400 hover:text-raizing-maroon-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
