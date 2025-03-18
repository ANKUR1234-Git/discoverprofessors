
import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Send, User, Bot, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChat = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI typing
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Hello I am an AI Assistant, how can I help you today?",
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const clearChat = () => {
    setMessages([]);
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative flex flex-col">
      {/* Global Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center z-0 opacity-15" 
        style={{ backgroundImage: `url('/images/scholarly-background.jpg')` }}
      ></div>
      
      <Navbar />
      
      <div className="flex-1 flex pt-20 relative z-10">
        {/* Chat History Sidebar */}
        <div className="w-72 border-r border-white/10 bg-black/20 backdrop-blur-sm hidden md:block overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Chat History</h2>
            
            <Button 
              variant="outline" 
              className="w-full justify-start mb-6"
              onClick={clearChat}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear chat
            </Button>
            
            {messages.length > 0 ? (
              <div className="space-y-2">
                {messages
                  .filter(msg => msg.sender === 'user')
                  .map((msg, index) => (
                    <div 
                      key={msg.id} 
                      className="p-2 hover:bg-white/5 rounded cursor-pointer truncate"
                      onClick={() => inputRef.current?.focus()}
                    >
                      <p className="text-sm truncate">
                        {msg.content.length > 30 
                          ? `${msg.content.substring(0, 30)}...` 
                          : msg.content}
                      </p>
                      <p className="text-xs text-gray-400">
                        {new Date(msg.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-10 text-gray-400">
                <p>No chat history yet</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="flex-1 flex flex-col h-[calc(100vh-72px)]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Bot className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Welcome to ScholarlyAI Chat</h2>
                <p className="text-gray-400 max-w-md">
                  I can help you find professors for your research interests. 
                  Just ask me about a topic you're interested in!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        {message.sender === 'user' ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                        <span className="text-xs opacity-75">
                          {message.sender === 'user' ? 'You' : 'ScholarlyAI'}
                        </span>
                      </div>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-2xl px-4 py-3 bg-secondary text-secondary-foreground">
                      <div className="flex items-center space-x-2 mb-1">
                        <Bot className="h-4 w-4" />
                        <span className="text-xs opacity-75">ScholarlyAI</span>
                      </div>
                      <div className="flex space-x-1 items-center h-5">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
          
          {/* Input */}
          <div className="border-t border-white/10 p-4 bg-background/60 backdrop-blur-sm">
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me about research topics..."
                  className="w-full p-3 pr-10 bg-secondary/30 border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  rows={1}
                  style={{ minHeight: '44px', maxHeight: '120px' }}
                />
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={input.trim() === '' || isTyping}
                className="h-11 w-11 rounded-full p-0 flex-shrink-0"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
