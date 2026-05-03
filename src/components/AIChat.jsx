import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { useGemini } from '../hooks/useGemini';
import { t } from '../utils/translations';
import { useLanguage } from '../hooks/useLanguage';

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const { generateResponse, loading } = useGemini();
  const { language } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { role: 'ai', content: t(language, 'chatWelcome') }
      ]);
    }
    scrollToBottom();
  }, [isOpen, messages, language]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    const systemPrompt = `You are an expert civic education assistant focused on explaining the Indian election process in simple, unbiased, beginner-friendly language. Answer in ${language === 'hi' ? 'Hindi' : 'English'}. Keep responses to 2-3 sentences max. Answer only questions related to Indian elections, voter registration, voting process, and election-related topics. If a question is not related to elections, politely redirect.`;

    const aiResponse = await generateResponse(userMessage, systemPrompt, 300);
    
    setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-saffron-500 text-white p-4 rounded-full shadow-xl hover:bg-saffron-600 hover:scale-110 transition-all duration-300 ${isOpen ? 'hidden' : 'flex'} items-center gap-2 group`}
        aria-label="Open AI Chat"
      >
        <MessageCircle size={24} className="animate-pulse-slow" />
        <span className="hidden md:inline font-semibold group-hover:pr-2 transition-all">{t(language, 'chatAskBtn')}</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 max-h-[80vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-indianBlue-600 to-indianBlue-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <MessageCircle size={20} />
              </div>
              <h3 className="font-semibold">{t(language, 'chatTitle')}</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/20 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 max-h-[400px]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-saffron-500 text-white rounded-br-none shadow-sm' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 mr-2">{t(language, 'chatTyping')}</span>
                    <div className="flex">
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t(language, 'chatPlaceholder')}
              className="flex-1 px-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 rounded-xl transition-all"
              disabled={loading}
            />
            <button 
              type="submit"
              disabled={!input.trim() || loading}
              className="bg-saffron-500 text-white p-2 rounded-xl hover:bg-saffron-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <Send size={20} className={input.trim() && !loading ? "transform translate-x-0.5 -translate-y-0.5" : ""} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
