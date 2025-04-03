import { useState } from "react";
import { Phone, Mic } from "lucide-react";

export default function AssistantSection() {
  const [inputValue, setInputValue] = useState("");
  
  const suggestions = [
    "Integrate agentic AI",
    "Automate business process",
    "Tune large language",
    "Enhance business",
    "Enhance workflow arch"
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleTalkToAgent = () => {
    // Implementation for talk to agent functionality
    console.log("Talk to agent clicked");
  };

  const handleMicInput = () => {
    // Implementation for microphone input functionality
    console.log("Microphone input clicked");
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#00202e]/50 backdrop-blur-md">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Hello</h2>
          <p className="text-xl text-slate-300">How can I assist you in optimizing your workflows today?</p>
        </div>

        {/* Suggestion Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {suggestions.map((suggestion, index) => (
            <button 
              key={index}
              className="transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg bg-[#003848]/50 border border-[#30D5E8]/30 text-white px-5 py-2 rounded-full text-sm hover:bg-[#003848] hover:border-[#30D5E8]/50"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>

        {/* Input Field */}
        <div className="relative mb-10">
          <input 
            type="text" 
            placeholder="Ask how we can assist you" 
            className="w-full bg-[#003848]/50 border border-[#30D5E8]/30 rounded-lg py-4 px-6 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#30D5E8]/50 focus:border-transparent"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button 
            className="flex items-center bg-[#003848]/70 hover:bg-[#003848] border border-[#30D5E8]/30 text-white px-4 py-3 rounded-full transition-colors"
            onClick={handleTalkToAgent}
          >
            <Phone className="h-5 w-5 mr-2" />
            Talk to an agent
          </button>
          
          <button 
            className="w-12 h-12 flex items-center justify-center bg-[#003848]/70 hover:bg-[#003848] border border-[#30D5E8]/30 text-white rounded-full transition-colors"
            onClick={handleMicInput}
          >
            <Mic className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
