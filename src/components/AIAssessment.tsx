import { useState } from 'react';
import { X, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
}

interface Answer {
  questionId: number;
  answer: string;
}

export default function AIAssessment() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0: closed, 1: form, 2-6: questions, 7: thank you
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: ''
  });
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const questions = [
    {
      id: 1,
      question: 'How would you rate your current understanding of AI and automation tools?',
      options: [
        'Beginner - I have limited knowledge',
        'Intermediate - I understand the basics',
        'Advanced - I have hands-on experience',
        'Expert - I implement AI solutions regularly'
      ]
    },
    {
      id: 2,
      question: 'What is the primary challenge your business faces that AI could help solve?',
      options: [
        'Manual and repetitive tasks',
        'Data analysis and insights',
        'Customer service and support',
        'Process optimization and efficiency'
      ]
    },
    {
      id: 3,
      question: 'How many employees does your organization have?',
      options: [
        '1-10 employees',
        '11-50 employees',
        '51-200 employees',
        '200+ employees'
      ]
    },
    {
      id: 4,
      question: 'What is your current budget allocation for AI/automation tools?',
      options: [
        'Less than $1,000/month',
        '$1,000 - $5,000/month',
        '$5,000 - $20,000/month',
        'More than $20,000/month'
      ]
    },
    {
      id: 5,
      question: 'What is your timeline for implementing AI solutions?',
      options: [
        'Immediately - within 1 month',
        'Short-term - within 3 months',
        'Medium-term - within 6 months',
        'Long-term - planning for next year'
      ]
    }
  ];

  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.email && userInfo.phone) {
      setCurrentStep(2); // Move to first question
    }
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      const currentQuestion = questions[currentStep - 2];
      setAnswers(prev => [...prev, { questionId: currentQuestion.id, answer: selectedAnswer }]);
      setSelectedAnswer('');
      
      if (currentStep < 6) {
        setCurrentStep(prev => prev + 1);
      } else {
        // All questions answered, show thank you
        setCurrentStep(7);
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setCurrentStep(0);
      setUserInfo({ name: '', email: '', phone: '', company: '', role: '' });
      setAnswers([]);
      setSelectedAnswer('');
    }, 300);
  };

  const handleStartAssessment = () => {
    setIsOpen(true);
    setCurrentStep(1);
  };

  const currentQuestion = questions[currentStep - 2];

  return (
    <>
      {/* Floating Banner */}
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-40 bg-gradient-to-r from-raizing-teal-900/95 via-raizing-teal-800/95 to-raizing-teal-900/95 backdrop-blur-lg text-raizing-cream-200 shadow-2xl rounded-xl sm:rounded-2xl border border-raizing-maroon-500/20 transform transition-transform duration-300 max-w-7xl mx-auto">
        <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              {/* AI Tool Logos - Smaller and sleeker */}
              <div className="hidden md:flex items-center gap-1.5 flex-shrink-0">
                {['ChatGPT', 'Zapier', 'Make', 'Airtable'].map((tool, idx) => (
                  <div key={idx} className="w-6 h-6 bg-raizing-cream-200/15 backdrop-blur-sm rounded-full flex items-center justify-center text-[10px] font-semibold border border-raizing-cream-200/20">
                    {tool[0]}
                  </div>
                ))}
              </div>
              
              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm md:text-base font-bold truncate text-raizing-cream-200 leading-tight">
                  Discover Your Business's AI Readiness Today
                </h3>
                <p className="hidden sm:block text-[10px] sm:text-xs text-raizing-cream-300/90 leading-tight truncate">
                  Free 10-minute assessment • Get personalized readiness score & insights
                </p>
              </div>
            </div>
            
            <button
              onClick={handleStartAssessment}
              className="w-full sm:w-auto px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-md sm:rounded-lg font-semibold text-xs sm:text-sm hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center gap-1.5 sm:gap-2 flex-shrink-0"
            >
              <span className="hidden sm:inline">Start The Assessment</span>
              <span className="sm:hidden">Start Assessment</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Assessment Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg sm:rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-raizing-teal-900 via-raizing-teal-800 to-raizing-teal-900 p-3 sm:p-4 md:p-5 text-raizing-cream-200 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-raizing-cream-200/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-raizing-cream-200" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-base sm:text-lg font-bold text-raizing-cream-200 truncate">AI Readiness Assessment</h2>
                  <p className="text-[10px] sm:text-xs text-raizing-cream-300 truncate">
                    {currentStep === 1 && 'Step 1 of 6: Your Information'}
                    {currentStep >= 2 && currentStep <= 6 && `Step ${currentStep} of 6: Question ${currentStep - 1}`}
                    {currentStep === 7 && 'Assessment Complete'}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-raizing-cream-200/20 hover:bg-raizing-cream-200/30 rounded-full flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-raizing-cream-200" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-gray-200">
              <div
                className="h-full bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 transition-all duration-500"
                style={{ width: `${(currentStep / 7) * 100}%` }}
              ></div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6">
              {/* Step 1: User Info Form */}
              {currentStep === 1 && (
                <form onSubmit={handleUserInfoSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-raizing-teal-900 mb-1.5 sm:mb-2">Let's Get Started</h3>
                    <p className="text-xs sm:text-sm text-raizing-teal-800 mb-4 sm:mb-5">
                      Please provide your information to begin the assessment.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-raizing-teal-900 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={userInfo.name}
                      onChange={handleUserInfoChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-md sm:rounded-lg border border-raizing-teal-900 focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-raizing-teal-900 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={userInfo.email}
                      onChange={handleUserInfoChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-md sm:rounded-lg border border-raizing-teal-900 focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all text-sm"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-raizing-teal-900 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={userInfo.phone}
                      onChange={handleUserInfoChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-md sm:rounded-lg border border-raizing-teal-900 focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all text-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-raizing-teal-900 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={userInfo.company}
                      onChange={handleUserInfoChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-md sm:rounded-lg border border-raizing-teal-900 focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all text-sm"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-raizing-teal-900 mb-1.5">
                      Your Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={userInfo.role}
                      onChange={handleUserInfoChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-md sm:rounded-lg border border-raizing-teal-900 focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all text-sm"
                      placeholder="CEO, Manager, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-md sm:rounded-lg font-semibold text-sm hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-4"
                  >
                    Start Assessment
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </form>
              )}

              {/* Steps 2-6: Questions */}
              {currentStep >= 2 && currentStep <= 6 && currentQuestion && (
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-raizing-teal-900 mb-3 sm:mb-4 leading-tight">
                      {currentQuestion.question}
                    </h3>
                  </div>

                  <div className="space-y-2 sm:space-y-2.5">
                    {currentQuestion.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(option)}
                        className={`w-full text-left px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 rounded-md sm:rounded-lg border-2 transition-all duration-300 ${
                          selectedAnswer === option
                            ? 'border-raizing-maroon-500 bg-raizing-maroon-50 text-raizing-maroon-900 shadow-sm'
                            : 'border-gray-200 hover:border-raizing-maroon-300 hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs sm:text-sm md:text-base font-medium leading-relaxed">{option}</span>
                          {selectedAnswer === option && (
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-raizing-maroon-600 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer}
                    className="w-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-md sm:rounded-lg font-semibold text-sm hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                  >
                    {currentStep === 6 ? 'Complete Assessment' : 'Next Question'}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}

              {/* Step 7: Thank You */}
              {currentStep === 7 && (
                <div className="text-center py-6 sm:py-8 md:py-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-raizing-cream-200" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-raizing-teal-900 mb-3 sm:mb-4">
                    Thank You for Taking the Assessment!
                  </h3>
                  <p className="text-sm sm:text-base text-raizing-teal-800 mb-4 sm:mb-5 max-w-md mx-auto leading-relaxed">
                    We've received your responses and will analyze your AI readiness score. Our team will contact you shortly with personalized insights and recommendations.
                  </p>
                  <div className="bg-raizing-cream-50 border border-raizing-maroon-200 rounded-md sm:rounded-lg p-3 sm:p-4 md:p-5 mb-4 sm:mb-5">
                    <p className="text-xs sm:text-sm font-semibold text-raizing-teal-900 mb-2">
                      What's Next?
                    </p>
                    <ul className="text-xs sm:text-sm text-raizing-teal-800 space-y-1 text-left max-w-md mx-auto">
                      <li>• Our AI experts will review your assessment</li>
                      <li>• You'll receive a detailed readiness report via email</li>
                      <li>• We'll schedule a consultation to discuss your results</li>
                    </ul>
                  </div>
                  <button
                    onClick={handleClose}
                    className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-md sm:rounded-lg font-semibold text-sm hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

