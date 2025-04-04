import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { CSSProperties } from "react";

export default function TestimonialsSection() {
  const { theme } = useTheme();
  
  const testimonials = [
    {
      quote: "Softworks transformed our operations. Their agentic AI automated processes we never thought possible, boosting efficiency significantly.",
      author: "Alex Chen",
      position: "CTO",
      company: "TechSolutions Inc.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" // Professional male
    },
    {
      quote: "The ROI from Softworks' autonomous systems exceeded expectations by 300%. It's been a complete game-changer for our global logistics.",
      author: "Sarah Johnson",
      position: "Operations Director",
      company: "GlobalTrade Ltd.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" // Professional female
    },
    {
      quote: "Seamless AI integration and immediate workflow improvements. Softworks delivered exactly what they promised, making us far more agile.",
      author: "Michael Rodriguez",
      position: "CEO",
      company: "Innovate Partners",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" // Professional male in suit
    },
    {
      quote: "What impressed me most was how quickly their AI models adapted to our specific industry challenges. We've seen a 45% reduction in decision-making time.",
      author: "Emily Zhang",
      position: "Innovation Director",
      company: "NextGen Systems",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" // Professional female with glasses
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // For mobile swipe functionality
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Swipe threshold in pixels
  const swipeThreshold = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > swipeThreshold) {
      // Swipe left
      nextTestimonial();
    }
    
    if (touchEnd - touchStart > swipeThreshold) {
      // Swipe right
      prevTestimonial();
    }
  };

  const nextTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAnimating(false), 500);
  };

  // Get indices for visible testimonials (3 at a time, with wrapping)
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((currentIndex + i) % testimonials.length);
    }
    return indices;
  };

  return (
    <section id="testimonials-section" className={`py-8 md:py-12 px-4 ${
      theme === 'dark' ? 'bg-[#002B36]' : 'bg-white'
    }`}>
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${
            theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
          }`}>
            Client Feedback
          </h2>
          <div className={`w-20 h-1 bg-[#00BCD4] mx-auto`}></div>
        </div>
        
        {/* Desktop Carousel - Row of 3 */}
        <div className="relative hidden md:block">
          <div className="relative overflow-hidden mx-auto">
            <div 
              className="flex transition-all duration-500 ease-out"
              style={{ 
                transform: `translateX(0)`,
              }}
            >
              <div className="flex gap-4 w-full">
                {getVisibleIndices().map((index) => (
                  <div 
                    key={index} 
                    className="w-1/3 transition-all duration-500 ease-out p-1"
                  >
                    <div className={`h-full px-4 py-4 rounded-lg border transition-shadow duration-300 hover:shadow-md ${
                      theme === 'dark'
                        ? 'bg-[#001B26] border-[#00BCD4]/20 hover:shadow-[#00BCD4]/10'
                        : 'bg-[#F5F5F5] border-gray-200 hover:shadow-gray-300/50'
                    }`}>
                      <div className="flex items-start mb-3">
                        <Quote className={`w-6 h-6 mr-2 flex-shrink-0 opacity-50 mt-0.5 ${
                          theme === 'dark' ? 'text-[#4DD0E1]' : 'text-[#00BCD4]'
                        }`} />
                        <p className={`text-base italic line-clamp-4 ${
                          theme === 'dark' ? 'text-[#E0E0E0]' : 'text-[#424242]'
                        }`}>
                          "{testimonials[index].quote}"
                        </p>
                      </div>
                      
                      <div className="flex items-center mt-3 pt-2 border-t border-opacity-10 border-gray-400">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-3 border border-[#00BCD4] flex-shrink-0">
                          <img 
                            src={testimonials[index].avatar} 
                            alt={testimonials[index].author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="overflow-hidden">
                          <p className={`font-medium text-base truncate ${
                            theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
                          }`}>
                            {testimonials[index].author}
                          </p>
                          <p className={`text-sm truncate ${
                            theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#616161]'
                          }`}>
                            {testimonials[index].position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop Navigation Controls */}
            <button
              onClick={prevTestimonial}
              className={`absolute top-1/2 left-0 -translate-y-1/2 p-1.5 rounded-full transition-colors duration-300 border shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4] ${
                theme === 'dark'
                  ? 'bg-[#003747]/80 hover:bg-[#004757] border-[#00BCD4]/30 text-[#E0E0E0]'
                  : 'bg-white/90 hover:bg-[#E0F7FA] border-gray-200 text-[#212121]'
              }`}
              aria-label="Previous testimonial"
              disabled={animating}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className={`absolute top-1/2 right-0 -translate-y-1/2 p-1.5 rounded-full transition-colors duration-300 border shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4] ${
                theme === 'dark'
                  ? 'bg-[#003747]/80 hover:bg-[#004757] border-[#00BCD4]/30 text-[#E0E0E0]'
                  : 'bg-white/90 hover:bg-[#E0F7FA] border-gray-200 text-[#212121]'
              }`}
              aria-label="Next testimonial"
              disabled={animating}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* Desktop Dots */}
          <div className="flex justify-center mt-3 space-x-1.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (animating) return;
                  setAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setAnimating(false), 500);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  getVisibleIndices().includes(index)
                    ? "bg-[#00BCD4]" 
                    : theme === 'dark' ? "bg-[#00BCD4]/30" : "bg-[#00BCD4]/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Mobile Carousel */}
        <div 
          className="md:hidden relative overflow-hidden rounded-lg shadow-sm"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${testimonials.length * 100}%` 
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0"
              >
                <div className={`p-4 pb-12 relative ${
                  theme === 'dark'
                    ? 'bg-[#001B26]'
                    : 'bg-[#F5F5F5]'
                }`}>
                  <Quote className={`w-6 h-6 mb-2 opacity-50 ${
                    theme === 'dark' ? 'text-[#4DD0E1]' : 'text-[#00BCD4]'
                  }`} />
                  
                  <p className={`text-base italic mb-4 ${
                    theme === 'dark' ? 'text-[#E0E0E0]' : 'text-[#424242]'
                  }`}>
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/20 to-transparent">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-3 border border-[#00BCD4] bg-[#00BCD4]/10 flex-shrink-0">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <p className={`font-medium text-base truncate ${
                          theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
                        }`}>
                          {testimonial.author}
                        </p>
                        <p className={`text-sm truncate ${
                          theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#616161]'
                        }`}>
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Navigation Dots */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1 z-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (animating) return;
                  setAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setAnimating(false), 500);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#00BCD4]" 
                    : "bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}