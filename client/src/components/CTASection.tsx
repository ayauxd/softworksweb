import { ArrowRight, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/lib/theme-context";

export default function CTASection() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="consultation-form" className={`py-24 md:py-32 px-6 lg:px-12 ${
      theme === 'dark' ? 'bg-[#002B36]' : 'bg-white'
    }`}>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
          }`}>
            Ready to Build Your Autonomous Workflow?
          </h2>
          <div className={`w-20 h-1 bg-[#00BCD4] mx-auto mb-8`}></div>
          <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-[#E0E0E0]' : 'text-[#424242]'
          }`}>
            Schedule a free consultation to explore how our custom AI solutions can drive efficiency and innovation for your business.
          </p>
        </div>
          
        {submitted ? (
          <div className={`p-6 rounded-lg text-center mb-8 animate-fadeIn border ${
            theme === 'dark' 
              ? 'bg-[#003747] border-[#00BCD4]/30 text-[#F5F5F5]' 
              : 'bg-[#E0F7FA] border-[#4DD0E1]/50 text-[#006064]'
          }`}>
            <CheckCircle className="w-8 h-8 mx-auto mb-3 text-[#00BCD4]" />
            <h3 className="text-xl font-semibold mb-1">Thank you!</h3>
            <p>Your consultation request has been received. We'll contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className={`block text-sm font-medium mb-1.5 ${theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#424242]'}`}>
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] transition-shadow ${theme === 'dark' ? 'bg-[#003747] border border-[#00BCD4]/30 text-[#F5F5F5] placeholder-gray-400 focus:ring-offset-[#002B36]' : 'bg-white border border-gray-300 text-[#212121] placeholder-gray-500 focus:ring-offset-white'}`}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className={`block text-sm font-medium mb-1.5 ${theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#424242]'}`}>
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] transition-shadow ${theme === 'dark' ? 'bg-[#003747] border border-[#00BCD4]/30 text-[#F5F5F5] placeholder-gray-400 focus:ring-offset-[#002B36]' : 'bg-white border border-gray-300 text-[#212121] placeholder-gray-500 focus:ring-offset-white'}`}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-1.5 ${theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#424242]'}`}>
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] transition-shadow ${theme === 'dark' ? 'bg-[#003747] border border-[#00BCD4]/30 text-[#F5F5F5] placeholder-gray-400 focus:ring-offset-[#002B36]' : 'bg-white border border-gray-300 text-[#212121] placeholder-gray-500 focus:ring-offset-white'}`}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className={`block text-sm font-medium mb-1.5 ${theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#424242]'}`}>
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] transition-shadow ${theme === 'dark' ? 'bg-[#003747] border border-[#00BCD4]/30 text-[#F5F5F5] placeholder-gray-400 focus:ring-offset-[#002B36]' : 'bg-white border border-gray-300 text-[#212121] placeholder-gray-500 focus:ring-offset-white'}`}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-1.5 ${theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#424242]'}`}>
                Tell us about your project*
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Describe your goals, challenges, or specific AI needs..."
                value={formData.message}
                onChange={handleChange}
                className={`w-full rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] transition-shadow resize-vertical ${theme === 'dark' ? 'bg-[#003747] border border-[#00BCD4]/30 text-[#F5F5F5] placeholder-gray-400 focus:ring-offset-[#002B36]' : 'bg-white border border-gray-300 text-[#212121] placeholder-gray-500 focus:ring-offset-white'}`}
                required
              ></textarea>
            </div>
            
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] min-w-[240px] disabled:opacity-60 disabled:cursor-not-allowed ${theme === 'dark' ? 'focus:ring-offset-[#002B36]' : 'focus:ring-offset-white'}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Request...
                  </>
                ) : (
                  <>
                    Schedule Free Consultation
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
        
        <div className={`text-center mt-10 text-sm ${
          theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#616161]'
        }`}>
          <p>We respect your privacy. No commitment required for the initial consultation.</p>
        </div>
      </div>
    </section>
  );
}