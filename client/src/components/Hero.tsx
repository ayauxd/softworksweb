import { useState } from "react";
import { useTheme } from "@/lib/theme-context";
import { scrollToSection } from "@/lib/utils";
import { ArrowRight, X } from "lucide-react";

export default function Hero() {
  const { theme } = useTheme();
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  
  const handleOpenForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowConsultationForm(true);
  };
  
  const handleCloseForm = () => {
    setShowConsultationForm(false);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the data to your backend or API
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
    // Close modal
    setShowConsultationForm(false);
    // Show success message
    alert("Thank you! We'll be in touch shortly.");
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex items-center"
    >
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/hero-image.png"
          alt="AI Neural Network Visualization" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for better text contrast */}
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-black/60 to-[#001B26]/85' 
            : 'bg-gradient-to-b from-black/30 to-white/70'
        }`}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8 text-white drop-shadow-md">
            Design Autonomous Systems That Think, Act, and Scale.
          </h1>
          <p className="text-base sm:text-lg mb-8 md:mb-10 max-w-xl leading-relaxed text-white/90 drop-shadow">
            We don't just integrate AI—we rewire how your operations think using adaptive agentic workflows (AI systems that can act independently to achieve goals).
          </p>
          <div className="flex flex-wrap gap-5">
            <button
              onClick={handleOpenForm}
              className="inline-flex items-center bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-medium py-3 px-6 md:px-8 h-[44px] rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              aria-label="Schedule a Consultation"
            >
              Schedule a Consultation
            </button>
            <a 
              href="#services-section" 
              onClick={(e) => scrollToSection('services-section', e)}
              className="inline-flex items-center gap-2 font-medium py-3 px-6 md:px-8 h-[44px] rounded-md transition-all duration-300 transform hover:-translate-y-0.5 bg-white/20 border border-white/70 text-white hover:bg-white/30 backdrop-blur-sm"
              aria-label="Learn More"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Consultation Form Modal */}
      {showConsultationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
             onClick={handleCloseForm}>
          <div 
            className={`w-full max-w-lg p-6 rounded-xl shadow-2xl ${
              theme === 'dark' ? 'bg-[#001B26] border border-[#00BCD4]/20' : 'bg-white'
            }`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-xl font-bold ${
                theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
              }`}>
                Schedule a Consultation
              </h3>
              <button 
                onClick={handleCloseForm}
                className={`p-1.5 rounded-full hover:bg-opacity-10 ${
                  theme === 'dark' ? 'hover:bg-white text-gray-400 hover:text-white' : 'hover:bg-black text-gray-500 hover:text-black'
                }`}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium mb-1 ${
                      theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#424242]'
                    }`}
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-lg py-2.5 px-4 border focus:outline-none focus:ring-2 focus:ring-[#00BCD4] ${
                      theme === 'dark'
                        ? 'bg-[#003747] border-[#00BCD4]/30 text-[#F5F5F5] focus:border-[#00BCD4]'
                        : 'bg-white border-gray-300 text-[#212121] focus:border-[#00BCD4]'
                    }`}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-1 ${
                      theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#424242]'
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-lg py-2.5 px-4 border focus:outline-none focus:ring-2 focus:ring-[#00BCD4] ${
                      theme === 'dark'
                        ? 'bg-[#003747] border-[#00BCD4]/30 text-[#F5F5F5] focus:border-[#00BCD4]'
                        : 'bg-white border-gray-300 text-[#212121] focus:border-[#00BCD4]'
                    }`}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="phone" 
                    className={`block text-sm font-medium mb-1 ${
                      theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#424242]'
                    }`}
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-lg py-2.5 px-4 border focus:outline-none focus:ring-2 focus:ring-[#00BCD4] ${
                      theme === 'dark'
                        ? 'bg-[#003747] border-[#00BCD4]/30 text-[#F5F5F5] focus:border-[#00BCD4]'
                        : 'bg-white border-gray-300 text-[#212121] focus:border-[#00BCD4]'
                    }`}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="company" 
                    className={`block text-sm font-medium mb-1 ${
                      theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#424242]'
                    }`}
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full rounded-lg py-2.5 px-4 border focus:outline-none focus:ring-2 focus:ring-[#00BCD4] ${
                      theme === 'dark'
                        ? 'bg-[#003747] border-[#00BCD4]/30 text-[#F5F5F5] focus:border-[#00BCD4]'
                        : 'bg-white border-gray-300 text-[#212121] focus:border-[#00BCD4]'
                    }`}
                  />
                </div>
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-1 ${
                    theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#424242]'
                  }`}
                >
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-lg py-2.5 px-4 border focus:outline-none focus:ring-2 focus:ring-[#00BCD4] ${
                    theme === 'dark'
                      ? 'bg-[#003747] border-[#00BCD4]/30 text-[#F5F5F5] focus:border-[#00BCD4]'
                      : 'bg-white border-gray-300 text-[#212121] focus:border-[#00BCD4]'
                  }`}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
