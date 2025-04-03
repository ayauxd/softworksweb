import { useState, useEffect, useRef } from "react";
import { Phone, ArrowUp, X, Loader2, MessageCircle } from "lucide-react";

export default function AssistantSection() {
  const [inputValue, setInputValue] = useState("");
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [calling, setCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [discussTopic, setDiscussTopic] = useState("");
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const suggestions = [
    "Integrate agentic AI",
    "Automate business process",
    "Tune large language model",
    "Enhance workflow"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    
    // Add animation class then remove it
    const buttons = document.querySelectorAll('.suggestion-button');
    buttons.forEach(button => {
      if ((button as HTMLElement).innerText === suggestion) {
        button.classList.add('scale-click');
        setTimeout(() => {
          button.classList.remove('scale-click');
        }, 300);
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const simulateBotResponse = (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);
      
      let botResponse = "";
      if (userMessage.toLowerCase().includes("integrate")) {
        botResponse = "Our agentic AI integration services help businesses implement autonomous AI systems that can make decisions and take actions with minimal human supervision. Would you like to learn more about our integration process?";
      } else if (userMessage.toLowerCase().includes("automate")) {
        botResponse = "We can help automate your business processes using our AI-powered workflow tools. This typically reduces manual work by 70% and improves accuracy. What specific processes are you looking to automate?";
      } else if (userMessage.toLowerCase().includes("tune") || userMessage.toLowerCase().includes("language model")) {
        botResponse = "We offer custom LLM fine-tuning services to make AI models specifically trained on your business data and use cases. Would you like to discuss how this could benefit your specific industry?";
      } else if (userMessage.toLowerCase().includes("workflow") || userMessage.toLowerCase().includes("enhance")) {
        botResponse = "Our workflow enhancement solutions identify bottlenecks and implement AI-driven optimizations. On average, our clients see a 40% improvement in process efficiency. What workflows are you currently looking to enhance?";
      } else {
        botResponse = "Thank you for your message. Our AI experts can help you with that. Would you like to discuss your specific requirements with one of our AI adoption agents?";
      }
      
      setMessages(prev => [...prev, {text: botResponse, isUser: false}]);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, {text: inputValue, isUser: true}]);
    
    // Start conversation if it hasn't started yet
    if (!conversationStarted) {
      setConversationStarted(true);
    }
    
    // Simulate bot response
    simulateBotResponse(inputValue);
    
    // Clear input
    setInputValue("");
  };

  const handleTalkToAgent = () => {
    // Simulate calling animation
    setCalling(true);
    setTimeout(() => {
      setCalling(false);
      setShowCallbackForm(true);
    }, 1000);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Callback requested", { phoneNumber, discussTopic });
    // Reset the form and show success message
    setPhoneNumber("");
    setDiscussTopic("");
    setShowCallbackForm(false);
    
    // Add confirmation message to chat
    setMessages(prev => [...prev, {
      text: "Thanks! One of our AI adoption agents will call you shortly to discuss your needs.",
      isUser: false
    }]);
    
    if (!conversationStarted) {
      setConversationStarted(true);
    }
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#0C1F25]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">How can we help you today?</h2>
          <p className="text-lg text-slate-300">
            Ask us anything about AI workflows, automation, or agentic system design.
          </p>
        </div>

        {/* Suggestion Pills */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          {suggestions.map((suggestion, index) => (
            <button 
              key={index}
              className="suggestion-button transition-all duration-200 hover:shadow-[0_0_15px_rgba(48,213,232,0.3)] bg-[#003848]/50 border border-[#30D5E8]/30 text-white px-5 py-2 rounded-full text-sm hover:bg-[#003848] hover:border-[#30D5E8]/50 hover:scale-105"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>

        {/* Chat Area */}
        <div className={`bg-[#001824] rounded-xl border border-[#30D5E8]/20 shadow-lg transition-all duration-300 overflow-hidden ${conversationStarted ? 'mb-6' : 'mb-0'}`}>
          {/* Messages Area - Shows only when conversation has started */}
          {conversationStarted && (
            <div className="p-4 max-h-[300px] overflow-y-auto">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-4 ${message.isUser ? 'ml-auto' : 'mr-auto'} max-w-[85%] animate-fadeIn`}
                >
                  <div 
                    className={`rounded-2xl px-4 py-3 inline-block ${
                      message.isUser 
                        ? 'bg-[#30D5E8] text-[#0C1F25] ml-auto rounded-tr-none' 
                        : 'bg-[#002836] text-white mr-auto rounded-tl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="mb-4 max-w-[85%] mr-auto">
                  <div className="bg-[#002836] text-white rounded-2xl px-4 py-3 rounded-tl-none inline-block">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-[#30D5E8] animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-[#30D5E8] animate-pulse delay-100"></div>
                      <div className="w-2 h-2 rounded-full bg-[#30D5E8] animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input Field */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-[#30D5E8]/10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Type your question here..." 
                className="w-full bg-[#003848]/50 border border-[#30D5E8]/30 rounded-lg py-4 px-6 pr-16 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#30D5E8]/50 focus:border-transparent"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#30D5E8] hover:bg-[#4cdfef] text-[#0C1F25] rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(48,213,232,0.5)] group"
                disabled={!inputValue.trim()}
              >
                <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
              </button>
            </div>
          </form>
        </div>

        {/* Talk to an AI Adoption Agent Section */}
        <div className="bg-[#001824] rounded-xl p-6 lg:p-8 border border-[#30D5E8]/20 mt-10">
          {!showCallbackForm ? (
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-[#002836] rounded-full flex items-center justify-center border border-[#30D5E8]/30 shadow-[0_0_20px_rgba(48,213,232,0.2)]">
                  <MessageCircle className="w-16 h-16 text-[#30D5E8]/70" />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-xl lg:text-2xl font-bold mb-3">Talk to an AI Adoption Agent</h3>
                <p className="text-slate-300 mb-5">
                  Not sure where to start with AI in your business? Our AI adoption agents are ready to assist with integration planning, workflow strategy, and custom automation.
                </p>
                
                <button 
                  className="flex items-center bg-[#30D5E8] hover:bg-[#4cdfef] text-[#0C1F25] font-medium px-6 py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(48,213,232,0.5)] hover:translate-y-[-2px]"
                  onClick={handleTalkToAgent}
                  disabled={calling}
                >
                  {calling ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Calling...
                    </>
                  ) : (
                    <>Speak to an Agent</>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl lg:text-2xl font-bold">Request a Callback</h3>
                <button 
                  onClick={() => setShowCallbackForm(false)}
                  className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-[#002836] transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <form onSubmit={handleCallbackSubmit} className="space-y-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                    Your Phone Number
                  </label>
                  <input 
                    id="phone"
                    type="tel" 
                    className="w-full bg-[#003848]/50 border border-[#30D5E8]/30 rounded-lg py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#30D5E8]/50 focus:border-transparent"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-slate-300 mb-1">
                    What would you like to discuss?
                  </label>
                  <textarea 
                    id="topic"
                    className="w-full bg-[#003848]/50 border border-[#30D5E8]/30 rounded-lg py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#30D5E8]/50 focus:border-transparent"
                    rows={4}
                    value={discussTopic}
                    onChange={(e) => setDiscussTopic(e.target.value)}
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#30D5E8] hover:bg-[#4cdfef] text-[#0C1F25] font-medium py-3 px-6 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(48,213,232,0.5)]"
                >
                  Request Callback
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
