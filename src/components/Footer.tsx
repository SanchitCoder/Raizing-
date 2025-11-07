import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-raizing-teal-900 via-raizing-teal-800 to-raizing-teal-900 text-raizing-cream-200 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="relative overflow-hidden rounded-lg p-0.5 sm:p-1 bg-raizing-teal-900/85 backdrop-blur-sm">
                <img 
                  src="/RAIZING.AI LOGO.png" 
                  alt="Raizing AI Logo" 
                  className="h-12 sm:h-14 w-auto object-contain rounded"
                />
              </div>
            </div>
            <p className="text-sm sm:text-base text-raizing-cream-400 mb-4 sm:mb-6 leading-relaxed">
              Empowering businesses with cutting-edge AI automation, consulting, and training solutions.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {['Li', 'Tw', 'Fb', 'Ig'].map((social, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 bg-raizing-cream-200/10 backdrop-blur-sm rounded-lg hover:bg-raizing-maroon-500 hover:scale-110 transition-all duration-300 flex items-center justify-center text-sm font-semibold"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
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
            <ul className="space-y-2 sm:space-y-3">
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
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3 text-raizing-cream-400 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-raizing-maroon-400 flex-shrink-0 mt-0.5" />
                <span className="break-all">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-raizing-cream-400 text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-raizing-maroon-400 flex-shrink-0 mt-0.5" />
                <span className="break-all">contact@raizingai.com</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-raizing-cream-400 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-raizing-maroon-400 flex-shrink-0 mt-0.5" />
                <span>123 AI Boulevard<br />Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-raizing-cream-200/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-raizing-cream-400 text-xs sm:text-sm">
              &copy; {currentYear} Raizing AI. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
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
