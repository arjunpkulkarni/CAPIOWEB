'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User } from 'lucide-react';
import Image from 'next/image';
import marcPic from '@/app/artists/marc.png';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          text: "Hi, I'm Marc! I'm here to help with any questions you might have. How can I assist you today?",
          sender: 'bot',
        },
      ]);
    }
  }, [isOpen]);

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes('booking') || lowerInput.includes('appointment')) {
      return 'You can book an appointment through our booking page. Would you like me to redirect you?';
    }
    if (lowerInput.includes('price') || lowerInput.includes('cost')) {
      return 'Pricing depends on the artist, size, and complexity of the tattoo. For a detailed quote, please fill out the form on our booking page.';
    }
    if (lowerInput.includes('hours') || lowerInput.includes('open')) {
      return 'Our studio is open from 12 PM to 8 PM, Tuesday through Saturday. We are closed on Sundays and Mondays.';
    }
    if (lowerInput.includes('location') || lowerInput.includes('address')) {
      return 'We are located in the heart of Westchester. You can find our exact address on the booking page.';
    }
    if (lowerInput.includes('aftercare') || lowerInput.includes('care')) {
      return 'Proper aftercare is crucial for your new tattoo. We have a dedicated page with detailed instructions. You can find it in the navigation menu.';
    }
    if (lowerInput.includes('artists')) {
      return 'We have several talented artists, including Nightone and Tati. You can view their portfolios on the artists page.';
    }

    return "I'm sorry, I'm not sure how to help with that. Try asking about booking, prices, hours, or our artists.";
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    const botResponse: Message = {
      text: getBotResponse(inputValue),
      sender: 'bot',
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 2, duration: 0.3, ease: 'easeOut' }}
              className="bg-gray-800/80 backdrop-blur-md text-white py-2 px-4 rounded-full shadow-lg"
            >
              <p className="font-luxury text-sm whitespace-nowrap">
                Have a question?
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-amber-400 text-black rounded-full w-[56px] h-[56px] shadow-lg flex items-center justify-center relative"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <>
              <Image
                src={marcPic}
                alt="Chat with Marc"
                width={56}
                height={56}
                className="rounded-full object-cover"
              />              
            </>
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-8 w-[calc(100vw-4rem)] max-w-sm h-[70vh] max-h-[600px] bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="p-4 bg-gray-800/50 border-b border-white/10">
              <h3 className="font-heraldic text-2xl text-white text-center">
                Chat with Marc
              </h3>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="flex flex-col gap-4">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start gap-3 ${
                      msg.sender === 'user' ? 'justify-end' : ''
                    }`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="bg-amber-400 text-black rounded-full w-10 h-10 flex items-center justify-center">
                        <Image
                          src={marcPic}
                          alt="Marc"
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 text-white font-luxury ${
                        msg.sender === 'user'
                          ? 'bg-gray-700 rounded-br-none'
                          : 'bg-gray-800 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                     {msg.sender === 'user' && (
                      <div className="bg-gray-600 text-white rounded-full p-2">
                        <User size={20} />
                      </div>
                    )}
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-gray-800/50 border-t border-white/10">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 font-luxury"
                />
                <button
                  type="submit"
                  className="bg-amber-400 text-black rounded-full p-3 hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!inputValue.trim()}
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 