import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AIChat = ({ onNavigate }) => {
  const [messages] = useState([
    {
      id: 1,
      text: "Hello! I'm CarLingo AI. I'm currently under development and will be available soon to help you learn about cars!",
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  return (
    <div className="min-h-screen bg-background text-textPrimary pb-24">
      {/* Chat Messages */}
      <div className="container mx-auto max-w-3xl px-4 pt-6 pb-6 space-y-6">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
          >
            <div 
              className={`max-w-[80%] rounded-2xl p-4 ${
                message.sender === 'ai' 
                  ? 'bg-surface border border-white/10 rounded-tl-sm' 
                  : 'bg-accent/10 border border-accent/20 rounded-tr-sm'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs mt-1 text-textSecondary text-right">{message.timestamp}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Message */}
      <div className="fixed bottom-20 left-0 right-0 pointer-events-none">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="bg-surface/90 backdrop-blur-sm border border-white/10 rounded-xl p-4 mx-4">
            <p className="text-sm text-center text-textSecondary">AI feature coming soon. Stay tuned!</p>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="fixed inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-3xl px-4 pb-4">
          <div className="mx-auto flex items-center justify-between rounded-2xl border border-white/10 bg-surface/90 px-6 py-3 shadow-card backdrop-blur supports-[backdrop-filter]:bg-surface/70">
          <button
            aria-label="Home"
            onClick={() => onNavigate && onNavigate('home')}
            className="text-textSecondary hover:text-textPrimary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 3.172 2.25 12h1.5v8.25h5.25v-6H15v6h5.25V12h1.5L12 3.172z"/></svg>
          </button>
          <button
            aria-label="Learn"
            onClick={() => onNavigate && onNavigate('units')}
            className="text-textSecondary hover:text-textPrimary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.5 5.25h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5z"/></svg>
          </button>
          <button
            aria-label="AI Assistant"
            onClick={() => onNavigate && onNavigate('ai')}
            className="text-textPrimary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v7a3 3 0 01-3 3H9l-4 3v-3H6a3 3 0 01-3-3V6z"/></svg>
          </button>
          <button
            aria-label="Courses"
            onClick={() => onNavigate && onNavigate('brands')}
            className="text-textSecondary hover:text-textPrimary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4 5.25h7.5V12H4V5.25zm8.5 0H20V12h-7.5V5.25zM4 12.75h7.5V19.5H4v-6.75zM12.5 12.75H20V19.5h-7.5v-6.75z"/></svg>
          </button>
          <button
            aria-label="Profile"
            onClick={() => onNavigate && onNavigate('profile')}
            className="text-textSecondary hover:text-textPrimary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm-7.5 9a7.5 7.5 0 0 1 15 0H4.5z"/></svg>
          </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AIChat;
