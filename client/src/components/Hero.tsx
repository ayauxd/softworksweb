import { useTheme } from "@/lib/theme-context";
import { scrollToSection } from "@/lib/utils";
import { Phone } from "lucide-react";

export default function Hero() {
  const { theme } = useTheme();
  
  // Removed local scrollToSection function, using imported utility

  return (
    <section id="hero" className={`pt-28 md:pt-36 pb-16 md:pb-24 px-4 sm:px-6 lg:px-12 ${
      theme === 'dark' ? 'bg-[#002B36]' : 'bg-white'
    }`}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8 ${
              theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
            }`}>
              Design Autonomous Systems That Think, Act, and Scale.
            </h1>
            <p className={`text-base sm:text-lg mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed ${
              theme === 'dark' ? 'text-[#E0E0E0]' : 'text-[#424242]'
            }`}>
              We don't just integrate AI—we rewire how your operations think using adaptive agentic workflows (AI systems that can act independently to achieve goals).
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <a 
                href="#consultation-form" 
                onClick={(e) => scrollToSection('consultation-form', e)}
                className="inline-flex items-center bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-medium py-3 px-6 md:px-8 h-[44px] rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                aria-label="Schedule a Consultation"
              >
                Schedule a Consultation
              </a>
              <a 
                href="#chatbot-section" 
                onClick={(e) => scrollToSection('chatbot-section', e)}
                className={`inline-flex items-center gap-2 font-medium py-3 px-6 md:px-8 h-[44px] rounded-md transition-all duration-300 transform hover:-translate-y-0.5 ${
                  theme === 'dark' 
                    ? 'border border-[#4DD0E1] text-[#4DD0E1] hover:bg-[#4DD0E1]/10' 
                    : 'border border-[#00BCD4] text-[#00BCD4] hover:bg-[#E0F7FA]'
                }`}
                aria-label="Speak to a Workflow Architect"
              >
                <Phone className="w-4 h-4" />
                <span>Speak to a Workflow Architect</span>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img 
              src="/images/hero-graphic.png" 
              alt="Abstract representation of AI network" 
              className="w-4/5 md:w-full max-w-lg relative z-10 rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
