import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    await new Promise(resolve => setTimeout(resolve, 1500));

    setStatus('success');
    setFormData({ name: '', email: '', company: '', message: '' });

    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-raizing-cream-50 dark:from-gray-900 via-white dark:via-gray-800 to-raizing-teal-900/30 dark:to-gray-800/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 bg-raizing-maroon-500/10 border border-raizing-maroon-500/30 rounded-full">
            <span className="text-raizing-maroon-600 text-xs sm:text-sm font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-raizing-teal-900 dark:text-white mb-3 sm:mb-4">
            Let's Start Your AI Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-raizing-teal-900 dark:text-white max-w-3xl mx-auto px-4">
            Ready to transform your business? Contact us for a free consultation and discover how AI can drive your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div className="animate-on-scroll opacity-0">
            <div className="bg-gradient-to-br from-raizing-maroon-500 to-raizing-maroon-700 rounded-xl sm:rounded-2xl text-raizing-cream-200 h-full relative overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80" 
                  alt="Professional team collaboration" 
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-raizing-cream-200/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-raizing-teal-900/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 p-6 sm:p-8 md:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Contact Information</h3>
                <p className="text-raizing-cream-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  Reach out to our team of AI experts. We're here to answer your questions and help you get started.
                </p>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-raizing-cream-200/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-raizing-cream-300 mb-1">Phone</div>
                      <div className="text-base sm:text-lg font-semibold break-all">+1 (555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-raizing-cream-200/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-raizing-cream-300 mb-1">Email</div>
                      <div className="text-base sm:text-lg font-semibold break-all">contact@raizingai.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-raizing-cream-200/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-raizing-cream-300 mb-1">Office</div>
                      <div className="text-base sm:text-lg font-semibold">123 AI Boulevard, Tech City, TC 12345</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-raizing-cream-200/20">
                  <div className="text-xs sm:text-sm text-raizing-cream-300 mb-3 sm:mb-4">Follow Us</div>
                  <div className="flex gap-3 sm:gap-4">
                    {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social) => (
                      <button
                        key={social}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-sm font-medium"
                      >
                        {social[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-raizing-teal-900 dark:border-gray-700 shadow-lg transition-colors duration-300">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-raizing-teal-900 dark:text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-raizing-teal-900 dark:border-gray-600 bg-white dark:bg-gray-700 text-raizing-teal-900 dark:text-white focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-raizing-teal-900 dark:text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-raizing-teal-900 dark:border-gray-600 bg-white dark:bg-gray-700 text-raizing-teal-900 dark:text-white focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-raizing-teal-900 dark:text-white mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-raizing-teal-900 dark:border-gray-600 bg-white dark:bg-gray-700 text-raizing-teal-900 dark:text-white focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-raizing-teal-900 dark:text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-raizing-teal-900 dark:border-gray-600 bg-white dark:bg-gray-700 text-raizing-teal-900 dark:text-white focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg font-semibold text-lg hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-raizing-maroon-50 border border-raizing-maroon-200 rounded-lg text-raizing-maroon-800 text-center">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
