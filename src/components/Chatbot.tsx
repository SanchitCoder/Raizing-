import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Raizing AI Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('YOUR_N8N_WEBHOOK_URL_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          timestamp: new Date().toISOString()
        })
      });

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "I'm here to help! Could you please provide more details?",
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! Our team will get back to you shortly.",
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-full shadow-lg shadow-raizing-maroon-500/50 hover:shadow-raizing-maroon-500/70 hover:scale-110 transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-0' : 'rotate-0'
        }`}
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />}
      </button>

      <div
        className={`fixed bottom-20 right-4 left-4 sm:bottom-24 sm:right-6 sm:left-auto z-50 w-auto sm:w-96 h-[calc(100vh-6rem)] sm:h-[600px] max-h-[600px] bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-raizing-teal-200 flex flex-col overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 p-4 sm:p-6 text-raizing-cream-200 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-raizing-cream-200/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-base sm:text-lg truncate">Raizing AI Assistant</h3>
              <p className="text-xs sm:text-sm text-raizing-cream-300 truncate">Always here to help</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4 bg-raizing-cream-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200'
                    : 'bg-white text-raizing-teal-900 border border-raizing-teal-200'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-raizing-cream-300' : 'text-raizing-teal-600'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-raizing-teal-200 px-4 py-3 rounded-2xl">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-raizing-maroon-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-raizing-maroon-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-raizing-maroon-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 sm:p-4 bg-white border-t border-raizing-teal-200 flex-shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-raizing-teal-300 focus:border-raizing-maroon-500 focus:ring-2 focus:ring-raizing-maroon-500/20 outline-none transition-all"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-raizing-maroon-500 to-raizing-maroon-600 text-raizing-cream-200 rounded-lg hover:from-raizing-maroon-600 hover:to-raizing-maroon-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
