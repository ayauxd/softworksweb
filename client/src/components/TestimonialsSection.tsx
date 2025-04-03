import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Softworks has completely transformed how our business operates. Their agentic AI solutions have automated processes we never thought possible.",
      author: "Alex Chen",
      position: "CTO, TechSolutions Inc.",
      company: "TechSolutions Inc."
    },
    {
      quote: "The ROI we've seen from implementing Softworks' autonomous systems has exceeded our expectations by 300%. A game-changer for our operations.",
      author: "Sarah Johnson",
      position: "Operations Director",
      company: "GlobalTrade Ltd."
    },
    {
      quote: "We were skeptical about AI integration, but Softworks made the process seamless. Now our workflows are more efficient than ever.",
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
    <section id="testimonials-section" className="py-20 px-6 lg:px-12 bg-[#00202e]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        
        <div className="relative">
          <div className="bg-gradient-to-br from-[#003848] to-[#002836] p-8 lg:p-12 rounded-xl border border-[#30D5E8]/20 shadow-xl">
            <Quote className="w-16 h-16 text-[#30D5E8]/30 mb-6" />
            
            <div className="mb-8">
              <p className="text-xl lg:text-2xl italic mb-8">"{testimonials[currentIndex].quote}"</p>
              <div>
                <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                <p className="text-slate-300">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-[#003848] hover:bg-[#004858] border border-[#30D5E8]/20 transition-colors hover:shadow-[0_0_15px_rgba(48,213,232,0.3)]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-[#30D5E8] scale-125" : "bg-[#30D5E8]/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-[#003848] hover:bg-[#004858] border border-[#30D5E8]/20 transition-colors hover:shadow-[0_0_15px_rgba(48,213,232,0.3)]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}