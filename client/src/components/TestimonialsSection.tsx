import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export default function TestimonialsSection() {
  const { theme } = useTheme();
  
  const testimonials = [
    {
      quote: "Softworks transformed our operations. Their agentic AI automated processes we never thought possible, boosting efficiency significantly.",
      author: "Alex Chen",
      position: "CTO",
      company: "TechSolutions Inc."
    },
    {
      quote: "The ROI from Softworks' autonomous systems exceeded expectations by 300%. It's been a complete game-changer for our global logistics.",
      author: "Sarah Johnson",
      position: "Operations Director",
      company: "GlobalTrade Ltd."
    },
    {
      quote: "Seamless AI integration and immediate workflow improvements. Softworks delivered exactly what they promised, making us far more agile.",
      author: "Michael Rodriguez",
      position: "CEO",
      company: "Innovate Partners"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials-section" className={`py-24 md:py-32 px-6 lg:px-12 ${
      theme === 'dark' ? 'bg-[#002B36]' : 'bg-white'
    }`}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
          }`}>
            Trusted by Industry Leaders
          </h2>
          <div className={`w-20 h-1 bg-[#00BCD4] mx-auto`}></div>
        </div>
        
        <div className="relative">
          <div className={`p-8 md:p-12 rounded-xl border transition-shadow duration-300 hover:shadow-lg ${
            theme === 'dark'
              ? 'bg-[#001B26] border-[#00BCD4]/20 hover:shadow-[#00BCD4]/10'
              : 'bg-[#F5F5F5] border-gray-200 hover:shadow-gray-300/50'
          }`}>
            <Quote className={`w-12 h-12 md:w-16 md:h-16 mb-6 opacity-50 ${
              theme === 'dark' ? 'text-[#4DD0E1]' : 'text-[#00BCD4]'
            }`} />
            
            <div className="mb-8 min-h-[150px] md:min-h-[120px]">
              <p className={`text-lg md:text-xl italic mb-8 font-medium leading-relaxed ${
                theme === 'dark' ? 'text-[#E0E0E0]' : 'text-[#424242]'
              }`}>
                "{testimonials[currentIndex].quote}"
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-8">
              <div>
                <p className={`font-semibold text-lg ${
                  theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
                }`}>
                  {testimonials[currentIndex].author}
                </p>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#616161]'
                }`}>
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className={`p-2 rounded-full transition-colors duration-300 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] ${
                    theme === 'dark'
                      ? 'bg-[#003747] hover:bg-[#004757] border-[#00BCD4]/30 text-[#E0E0E0] focus:ring-offset-[#001B26]'
                      : 'bg-[#E0F7FA] hover:bg-[#B2EBF2] border-gray-200 text-[#212121] focus:ring-offset-[#F5F5F5]'
                  }`}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#00BCD4] ${
                        index === currentIndex 
                          ? "bg-[#00BCD4] scale-110" 
                          : theme === 'dark' ? "bg-[#00BCD4]/30 hover:bg-[#00BCD4]/50" : "bg-[#00BCD4]/40 hover:bg-[#00BCD4]/60"
                      } ${theme === 'dark' ? 'focus:ring-offset-[#001B26]' : 'focus:ring-offset-[#F5F5F5]'}`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className={`p-2 rounded-full transition-colors duration-300 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] ${
                    theme === 'dark'
                      ? 'bg-[#003747] hover:bg-[#004757] border-[#00BCD4]/30 text-[#E0E0E0] focus:ring-offset-[#001B26]'
                      : 'bg-[#E0F7FA] hover:bg-[#B2EBF2] border-gray-200 text-[#212121] focus:ring-offset-[#F5F5F5]'
                  }`}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}