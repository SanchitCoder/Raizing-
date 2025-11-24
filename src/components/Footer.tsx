import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-raizing-teal-900 dark:from-gray-900 via-raizing-teal-800 dark:via-gray-800 to-raizing-teal-900 dark:to-gray-900 transition-colors duration-300 text-raizing-cream-200 pt-12 pb-8 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Company Info Column */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="relative overflow-hidden rounded-lg p-1 bg-raizing-teal-900/85 backdrop-blur-sm">
                <img 
                  src="/RAIZING.AI LOGO.png" 
                  alt="Raizing AI Logo" 
                  className="h-10 w-auto sm:h-12 md:h-14 object-contain rounded"
                />
              </div>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-raizing-cream-400 mb-0 sm:mb-4 lg:mb-6 leading-relaxed break-words max-w-sm">
              Empowering businesses with cutting-edge AI automation, consulting, and training solutions.
            </p>
          </div>

          {/* Services Column */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {['AI Workflow Automation', 'AI Consulting', 'AI Training & Workshops', 'Custom Solutions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs sm:text-sm md:text-base text-raizing-cream-400 hover:text-raizing-maroon-400 transition-colors duration-300 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {['About Us', 'Case Studies', 'Blog', 'Careers', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs sm:text-sm md:text-base text-raizing-cream-400 hover:text-raizing-maroon-400 transition-colors duration-300 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="mt-6 sm:mt-0 sm:col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-3 sm:space-y-3.5 md:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3 text-raizing-cream-400 text-xs sm:text-sm md:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-raizing-maroon-400 flex-shrink-0 mt-0.5" />
                <span className="break-words">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-raizing-cream-400 text-xs sm:text-sm md:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-raizing-maroon-400 flex-shrink-0 mt-0.5" />
                <span className="break-words">contact@raizingai.com</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-raizing-cream-400 text-xs sm:text-sm md:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-raizing-maroon-400 flex-shrink-0 mt-0.5" />
                <span className="break-words">123 AI Boulevard<br />Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 md:pt-10 border-t border-raizing-cream-200/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-raizing-cream-400 text-xs sm:text-sm md:text-base order-2 sm:order-1">
              &copy; {currentYear} Raizing AI. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base order-1 sm:order-2">
              <a href="#" className="text-raizing-cream-400 hover:text-raizing-maroon-400 transition-colors whitespace-nowrap">
                Privacy Policy
              </a>
              <a href="#" className="text-raizing-cream-400 hover:text-raizing-maroon-400 transition-colors whitespace-nowrap">
                Terms of Service
              </a>
              <a href="#" className="text-raizing-cream-400 hover:text-raizing-maroon-400 transition-colors whitespace-nowrap">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
