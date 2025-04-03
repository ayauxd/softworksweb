import { useState } from "react";
import { Phone, ArrowUp, X, Loader2 } from "lucide-react";

export default function AssistantSection() {
  const [inputValue, setInputValue] = useState("");
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [calling, setCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [discussTopic, setDiscussTopic] = useState("");
  
  const suggestions = [
    "Integrate agentic AI",
    "Automate business process",
    "Tune large language model",
    "Enhance workflow",
    "Book a voice consultation"
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Message submitted:", inputValue);
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
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {suggestions.map((suggestion, index) => (
            <button 
              key={index}
              className="transition-all duration-200 hover:shadow-[0_0_15px_rgba(48,213,232,0.3)] bg-[#003848]/50 border border-[#30D5E8]/30 text-white px-5 py-2 rounded-full text-sm hover:bg-[#003848] hover:border-[#30D5E8]/50"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>

        {/* Input Field */}
        <form onSubmit={handleSubmit} className="relative mb-12">
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
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#30D5E8] hover:bg-[#4cdfef] text-[#0C1F25] rounded-full transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(48,213,232,0.5)]"
              disabled={!inputValue.trim()}
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </form>

        {/* Talk to an AI Adoption Agent Section */}
        <div className="bg-[#001824] rounded-xl p-6 lg:p-8 border border-[#30D5E8]/20">
          {!showCallbackForm ? (
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-[#002836] rounded-full flex items-center justify-center border border-[#30D5E8]/30">
                  <Phone className="w-16 h-16 text-[#30D5E8]/70" />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-xl lg:text-2xl font-bold mb-3">Talk to an AI Adoption Agent</h3>
                <p className="text-slate-300 mb-5">
                  Not sure where to start with AI in your business? Our AI adoption agents are ready to assist with integration planning, workflow strategy, and custom automation.
                </p>
                
                <button 
                  className="flex items-center bg-[#30D5E8] hover:bg-[#4cdfef] text-[#0C1F25] font-medium px-6 py-3 rounded-md transition-colors"
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
                  className="text-slate-400 hover:text-white"
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
                  className="w-full bg-[#30D5E8] hover:bg-[#4cdfef] text-[#0C1F25] font-medium py-3 px-6 rounded-md transition-colors"
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
