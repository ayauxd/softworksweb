import { BrainCircuit, Puzzle, Zap, FileJson, Bot, Workflow } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { scrollToSection } from "@/lib/utils";

export default function ServicesSection() {
  const { theme } = useTheme();
  
  const services = [
    {
      icon: <BrainCircuit className="w-12 h-12 text-[#00BCD4] mb-5" />,
      title: "AI Strategy Consulting",
      description: "Get a tailored AI roadmap that maximizes ROI and transforms your business processes.",
      image: "/images/ai-strategy.jpg"
    },
    {
      icon: <Bot className="w-12 h-12 text-[#00BCD4] mb-5" />,
      title: "Autonomous Agents",
      description: "Build specialized AI assistants that handle complex, multi-step workflows with minimal oversight.",
      image: "/images/autonomous-agents.jpg"
    },
    {
      icon: <Workflow className="w-12 h-12 text-[#00BCD4] mb-5" />,
      title: "Workflow Automation",
      description: "Implement self-healing systems that operate continuously while adapting to changing conditions.",
      image: "/images/workflow-automation.jpg"
    }
  ];

  // Removed local scrollToSection function, using imported utility

  return (
    <section id="services-section" className={`py-24 md:py-32 px-6 lg:px-12 ${
      theme === 'dark' 
        ? 'bg-[#002B36]' 
        : 'bg-[#F5F5F5]'
    }`}>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
          }`}>
            AI Solutions for Modern Businesses
          </h2>
          <div className={`w-20 h-1 bg-[#00BCD4] mx-auto mb-6`}></div>
          <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-[#E0E0E0]' : 'text-[#424242]'
          }`}>
            From initial proof of concept to enterprise-scale deployment, our AI services help you achieve immediate value with long-term adaptability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 ${
                theme === 'dark'
                  ? 'bg-[#001B26] hover:shadow-[0_8px_30px_rgba(0,188,212,0.15)]' 
                  : 'bg-white hover:shadow-xl'
              }`}
            >
              <div className="flex flex-col">
                <img src={service.image} alt={`${service.title} illustration`} className="w-full h-40 object-cover rounded-t-xl mb-6" />
                <div className={`flex items-center mb-6 px-8`}>
                  <div className={`rounded-full w-16 h-16 flex items-center justify-center mr-4 flex-shrink-0 ${
                    theme === 'dark'
                      ? 'bg-[#00BCD4]/10'
                      : 'bg-[#E0F7FA]'
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
                  }`}>
                    {service.title}
                  </h3>
                </div>
                <p className={`mb-6 px-8 ${
                  theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#616161]'
                }`}>
                  {service.description}
                </p>
                <a 
                  href="#chatbot-section"
                  onClick={(e) => scrollToSection('chatbot-section', e)}
                  className={`mt-auto inline-flex items-center text-[#00BCD4] hover:underline font-medium px-8 pb-8 ${
                    theme === 'dark' ? 'hover:text-[#4DD0E1]' : 'hover:text-[#00ACC1]'
                  }`}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#consultation-form"
            onClick={(e) => scrollToSection('consultation-form', e)}
            className="inline-flex items-center bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-medium py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,188,212,0.4)]"
          >
            <span>Request a Custom Solution</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}