import { useState, useEffect, useRef } from "react";
import { ArrowUp, X, Loader2, Bot, HeadsetIcon, User } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export default function AssistantSection() {
  const { theme } = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [calling, setCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [discussTopic, setDiscussTopic] = useState("");
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // All possible suggestions organized by category
  const allSuggestions = {
    initial: [
      "Integrate agentic AI",
      "Automate business process",
      "Tune large language model",
    ],
    agent: [
      "Agent capabilities",
      "Implementation timeline",
      "ROI calculations",
    ],
    automation: [
      "Process assessment",
      "AI workflow tools",
      "Automation pricing",
    ],
    llm: [
      "Fine-tuning process",
      "Custom LLM solutions",
      "Model evaluation",
    ],
    workflow: [
      "Bottleneck analysis",
      "Optimization approach",
      "Use cases",
    ],
    general: [
      "Performance metrics",
      "Integration with existing systems",
      "Project roadmap",
    ]
  };

  // Set initial suggestions when component mounts
  useEffect(() => {
    setCurrentSuggestions(allSuggestions.initial);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isChatModalOpen) {
      inputRef.current?.focus();
    }
  }, [isChatModalOpen]);

  // Function to update suggestions based on the user's interaction
  const updateSuggestions = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes("integrate") || input.includes("agent")) {
      setCurrentSuggestions(allSuggestions.agent);
    } else if (input.includes("automate") || input.includes("process")) {
      setCurrentSuggestions(allSuggestions.automation);
    } else if (input.includes("tune") || input.includes("language model") || input.includes("llm")) {
      setCurrentSuggestions(allSuggestions.llm);
    } else if (input.includes("workflow") || input.includes("enhance")) {
      setCurrentSuggestions(allSuggestions.workflow);
    } else {
      setCurrentSuggestions(allSuggestions.general);
    }
  };

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
    
    // Update suggestions based on the selected suggestion
    updateSuggestions(suggestion);
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
      if (userMessage.toLowerCase().includes("integrate") || userMessage.toLowerCase().includes("agent")) {
        botResponse = "Our agentic AI integration services help businesses implement autonomous AI systems that can make decisions and take actions with minimal human supervision. Would you like to learn more about our integration process?";
      } else if (userMessage.toLowerCase().includes("automate") || userMessage.toLowerCase().includes("process")) {
        botResponse = "We can help automate your business processes using our AI-powered workflow tools. This typically reduces manual work by 70% and improves accuracy. What specific processes are you looking to automate?";
      } else if (userMessage.toLowerCase().includes("tune") || userMessage.toLowerCase().includes("language model") || userMessage.toLowerCase().includes("llm")) {
        botResponse = "We offer custom LLM fine-tuning services to make AI models specifically trained on your business data and use cases. Would you like to discuss how this could benefit your specific industry?";
      } else if (userMessage.toLowerCase().includes("workflow") || userMessage.toLowerCase().includes("enhance")) {
        botResponse = "Our workflow enhancement solutions identify bottlenecks and implement AI-driven optimizations. On average, our clients see a 40% improvement in process efficiency. What workflows are you currently looking to enhance?";
      } else if (userMessage.toLowerCase().includes("implementation") || userMessage.toLowerCase().includes("timeline")) {
        botResponse = "Our typical implementation timeline is 4-8 weeks depending on the complexity of your requirements. We follow an agile methodology with iterative deployments to ensure you see value quickly.";
      } else if (userMessage.toLowerCase().includes("roi") || userMessage.toLowerCase().includes("cost")) {
        botResponse = "Our clients typically see full ROI within 6-9 months. We can provide detailed ROI calculations based on your specific business metrics during a consultation.";
      } else {
        botResponse = "Thank you for your message. Our AI experts can help you with that. Would you like to discuss your specific requirements with one of our AI adoption agents?";
      }
      
      setMessages(prev => [...prev, {text: botResponse, isUser: false}]);
      
      // Update suggestions based on the user's message
      updateSuggestions(userMessage);
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
    
    // Open the modal when the first message is submitted
    if (!isChatModalOpen) {
       setIsChatModalOpen(true);
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
    }, 1000); // Reduced delay slightly
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset the form and show success message
    setPhoneNumber("");
    setDiscussTopic("");
    setShowCallbackForm(false);
    
    // Add confirmation message to chat
    setMessages(prev => [...prev, {
      text: "Thanks! One of our AI adoption agents will call you shortly.",
      isUser: false
    }]);
    
    if (!conversationStarted) {
      setConversationStarted(true);
    }
  };

  return (
    <section
      id="chatbot-section"
      className={`${
        isChatModalOpen
          ? 'fixed inset-0 z-50 flex flex-col justify-center items-center p-4 sm:p-8 bg-black/70 backdrop-blur-sm'
          : 'py-24 md:py-32 px-6 lg:px-12'
      } ${
        theme === 'dark' ? 'bg-[#002B36]' : 'bg-[#F5F5F5]'
      }`}
      style={isChatModalOpen ? { WebkitBackdropFilter: 'blur(4px)' } : {}}
      onClick={() => { if (isChatModalOpen) setIsChatModalOpen(false); }}
    >
      {isChatModalOpen && (
        <div
          className="absolute top-4 right-4 z-10"
          onClick={(e) => { e.stopPropagation(); setIsChatModalOpen(false); }}
        >
          <button
            className={`p-2 rounded-full ${
              theme === 'dark' ? 'bg-[#003747] text-white' : 'bg-white text-[#212121]'
            } shadow-md`}
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
      <div className={`container mx-auto max-w-3xl ${isChatModalOpen ? 'h-full max-h-[85vh] flex flex-col' : 'flex-grow flex flex-col'}`}>
        {!isChatModalOpen && (
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
            }`}>
              Need Help Building Your AI Solution?
            </h2>
            <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-[#E0E0E0]' : 'text-[#424242]'
            }`}>
              Ask our AI assistant below, or connect directly with one of our agents.
            </p>
          </div>
        )}

        {/* Chat Interface */}
        <div 
          onClick={(e) => { if (isChatModalOpen) e.stopPropagation(); }}
          className={`rounded-xl border shadow-lg transition-all duration-300 overflow-hidden flex flex-col ${
            isChatModalOpen
              ? 'flex-grow w-full h-full'
              : 'mb-10'
          } ${
            theme === 'dark'
              ? 'bg-[#001B26] border-[#00BCD4]/20'
              : 'bg-white border-gray-200'
          }`}
        >
          {/* Suggestion Chips - Visible on top */}
          <div className="p-4 flex justify-center border-b border-gray-200 dark:border-[#00BCD4]/20">
            <div className="flex-wrap flex gap-3 justify-between w-full max-w-lg">
              {currentSuggestions.slice(0, 3).map((suggestion, index) => (
                <button 
                  key={index} 
                  className={`px-3 py-1.5 rounded-full text-sm suggestion-button flex-grow text-center ${
                    theme === 'dark' 
                      ? 'bg-[#002B36] border border-[#00BCD4]/30 text-[#E0E0E0] hover:bg-[#003747]' 
                      : 'bg-[#E0F7FA] text-[#00838F] hover:bg-[#B2EBF2]'
                  }`}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
          
          {/* Messages Area */}
          <div className={`p-4 overflow-y-auto flex-grow space-y-4 ${!conversationStarted ? 'min-h-[120px]' : ''}`}>
            {conversationStarted && messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex items-end gap-2 animate-fadeIn ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!message.isUser && (
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-[#003747]' : 'bg-[#E0F7FA]'}`}>
                    <img src="./assets/logo.png" alt="Bot Avatar" className="w-full h-full object-cover" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-xl px-4 py-2.5 break-words ${
                    message.isUser 
                      ? 'bg-[#00BCD4] text-white ml-auto rounded-br-none'
                      : `${theme === 'dark' ? 'bg-[#003747] text-[#E0E0E0]' : 'bg-[#E0F7FA] text-[#212121]'} mr-auto rounded-bl-none`
                  }`}
                >
                  {message.text}
                </div>
                {message.isUser && (
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}>
                    <User className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="self-start animate-fadeIn">
                <div className={`rounded-xl px-4 py-3 rounded-bl-none inline-block ${
                  theme === 'dark' ? 'bg-[#003747] text-[#E0E0E0]' : 'bg-[#E0F7FA] text-[#212121]'
                }`}>
                  <div className="flex space-x-1.5 items-center">
                    <div className={`w-2 h-2 rounded-full bg-[#00BCD4] animate-pulse`}></div>
                    <div className={`w-2 h-2 rounded-full bg-[#00BCD4] animate-pulse delay-150`}></div>
                    <div className={`w-2 h-2 rounded-full bg-[#00BCD4] animate-pulse delay-300`}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Field */}
          <form onSubmit={handleSubmit} className={`p-4 border-t ${
            theme === 'dark' ? 'border-[#00BCD4]/20' : 'border-gray-200'
          }`}>
            <div className="relative">
              <input
                type="text"
                placeholder="Ask about AI integration or workflow automation..."
                className={`w-full rounded-lg py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] transition-shadow ${
                  theme === 'dark'
                    ? 'bg-[#003747] border border-[#00BCD4]/30 text-[#F5F5F5] placeholder-gray-400 focus:ring-offset-[#001B26]'
                    : 'bg-white border border-gray-300 text-[#212121] placeholder-gray-500 focus:ring-offset-white'
                }`}
                value={inputValue}
                onChange={handleInputChange}
                ref={inputRef}
              />
              <button
                type="submit"
                className={`absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                  inputValue.trim()
                    ? 'bg-[#00BCD4] hover:bg-[#00ACC1] text-white'
                    : theme === 'dark' ? 'bg-[#003747] text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Call Center CTA - Only show if not in modal */}
        {!isChatModalOpen && (
          <div className={`mt-8 flex flex-col md:flex-row-reverse items-center rounded-xl border shadow-md overflow-hidden ${
            theme === 'dark' 
              ? 'bg-[#001B26] border-[#00BCD4]/20' 
              : 'bg-white border-gray-200'
          }`}>
            {/* Image Area - Now on the right */}
            <div className="w-full md:w-1/2 h-64 md:h-full flex-shrink-0">
              <div className="w-full h-auto rounded-xl overflow-hidden my-6">
                <img 
                  src="./assets/call-center-workstation.png" 
                  alt="AI-powered call center workstation" 
                  className="w-full h-full object-cover shadow-md"
                />
              </div>
            </div>
            {/* Content Area - Now on the left */}
            <div className="flex-grow p-6 md:p-8 flex flex-col items-center md:items-start justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className={`text-xl lg:text-2xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
                }`}>
                  Speak Directly to an Agent
                </h3>
                <p className={`text-base mb-6 ${
                  theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#616161]'
                }`}>
                  Get personalized guidance for your AI project from our implementation specialists.
                </p>
              </div>
              {/* CTA Button */}
              <button
                className={`inline-flex items-center bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-medium py-3 px-6 md:px-8 h-[44px] rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] whitespace-nowrap ${theme === 'dark' ? 'focus:ring-offset-[#001B26]' : 'focus:ring-offset-white'} ${
                  !(calling || showCallbackForm) ? 'animate-pulse' : '' 
                }`}
                onClick={handleTalkToAgent}
                disabled={calling || showCallbackForm}
              >
                {calling ? (
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <HeadsetIcon className={`w-5 h-5 mr-2`} />
                )}
                {calling ? 'Connecting...' : showCallbackForm ? 'Request Sent' : 'Request Callback'}
              </button>
            </div>
          </div>
        )}

        {/* Callback Form */}
        {showCallbackForm && (
          <div className={`fixed inset-0 z-50 flex items-center justify-center p-4`}>
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowCallbackForm(false)}></div>
            <div className={`relative w-full max-w-md p-6 rounded-xl border shadow-lg ${
              theme === 'dark' ? 'bg-[#001B26] border-[#00BCD4]/20' : 'bg-white border-gray-200'
          }`}>
             <div className="flex justify-between items-center mb-4">
               <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'}`}>
                 Request a Callback
               </h3>
               <button 
                 onClick={() => setShowCallbackForm(false)}
                 className={`p-1.5 rounded-full transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-[#003747]' : 'text-gray-500 hover:text-black hover:bg-gray-100'}`}
                 aria-label="Close callback form"
               >
                 <X className="h-5 w-5" />
               </button>
             </div>
             <form onSubmit={handleCallbackSubmit} className="space-y-4">
               <div>
                 <label htmlFor="phone" className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#424242]'}`}>
                   Your Phone Number
                 </label>
                 <input 
                   id="phone"
                   type="tel" 
                   placeholder="+1 (555) 123-4567"
                   className={`w-full rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] transition-shadow ${
                     theme === 'dark' 
                       ? 'bg-[#003747] border border-[#00BCD4]/30 text-[#F5F5F5] placeholder-gray-400 focus:ring-offset-[#001B26]' 
                       : 'bg-white border border-gray-300 text-[#212121] placeholder-gray-500 focus:ring-offset-white'
                   }`}
                   value={phoneNumber}
                   onChange={(e) => setPhoneNumber(e.target.value)}
                   required
                 />
               </div>
               <div>
                 <label htmlFor="topic" className={`block text-sm font-medium mb-1 ${
                   theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#424242]'
                 }`}>
                   What would you like to discuss?
                 </label>
                 <textarea 
                   id="topic"
                   placeholder="Briefly describe your project or question..."
                   className={`w-full rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] transition-shadow resize-none ${
                     theme === 'dark' 
                       ? 'bg-[#003747] border border-[#00BCD4]/30 text-[#F5F5F5] placeholder-gray-400 focus:ring-offset-[#001B26]' 
                       : 'bg-white border border-gray-300 text-[#212121] placeholder-gray-500 focus:ring-offset-white'
                   }`}
                   rows={3}
                   value={discussTopic}
                   onChange={(e) => setDiscussTopic(e.target.value)}
                   required
                 />
               </div>
               <div className="flex justify-between">
                 <button 
                   type="button"
                   className={`font-medium text-sm ${
                     theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'
                   }`}
                   onClick={() => setShowCallbackForm(false)}
                 >
                   Cancel
                 </button>
                 <button 
                   type="submit"
                   className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-medium py-2 px-4 rounded-md transition-all duration-300 shadow hover:shadow-lg"
                 >
                   Request Callback
                 </button>
               </div>
             </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
