import SoftworksLogo from "./SoftworksLogo";
import { Mail, Phone, MapPin, Linkedin, Facebook, Globe } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();
  const { theme } = useTheme();
  
  // Removed local scrollToSection function, using imported utility

  return (
    <footer 
      className="pt-20 pb-10 px-6 lg:px-12 bg-[#F5F5F5] text-[#424242]"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection('hero', e)}
              className="flex items-center mb-5 group transition-transform duration-300 hover:scale-105 w-fit"
            >
              <SoftworksLogo className="w-10 h-10 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-[#212121]">
                  Softworks
                </h3>
                <p className="text-xs tracking-widest text-[#00BCD4]">TRADING COMPANY</p>
              </div>
            </a>
            <p className="mb-6 text-sm leading-relaxed text-[#616161]">
              Building autonomous systems that think, act, and scale for modern enterprise challenges.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="transition-colors duration-300 hover:scale-110 text-gray-500 hover:text-[#00BCD4]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="transition-colors duration-300 hover:scale-110 text-gray-500 hover:text-[#00BCD4]"
                 aria-label="Facebook"
             >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                 className="transition-colors duration-300 hover:scale-110 text-gray-500 hover:text-[#00BCD4]"
                 aria-label="Website"
             >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-[#212121]">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="#hero" 
                  onClick={(e) => scrollToSection('hero', e)} 
                  className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services-section" 
                  onClick={(e) => scrollToSection('services-section', e)} 
                  className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#chatbot-section" 
                  onClick={(e) => scrollToSection('chatbot-section', e)} 
                  className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
                >
                  How It Works
                </a>
              </li>
               <li>
                 <a 
                   href="#blog-section" 
                   onClick={(e) => scrollToSection('blog-section', e)} 
                   className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
                 >
                   Insights
                 </a>
               </li>
              <li>
                <a 
                  href="#testimonials-section" 
                  onClick={(e) => scrollToSection('testimonials-section', e)} 
                  className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#consultation-form" 
                  onClick={(e) => scrollToSection('consultation-form', e)} 
                  className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services Column (Simplified) */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-[#212121]">
              Core Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="#services-section" 
                  onClick={(e) => scrollToSection('services-section', e)} 
                  className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
                >
                  AI Strategy Consulting
                </a>
              </li>
              <li>
                <a 
                  href="#services-section" 
                  onClick={(e) => scrollToSection('services-section', e)} 
                  className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
                >
                  Autonomous Agents
                </a>
              </li>
              <li>
                <a 
                  href="#services-section" 
                  onClick={(e) => scrollToSection('services-section', e)} 
                  className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
                >
                  Workflow Automation
                </a>
              </li>
              <li>
                <a 
                  href="#services-section" 
                  onClick={(e) => scrollToSection('services-section', e)} 
                  className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
                >
                  API Integration
                </a>
              </li>
              <li>
                <a 
                  href="#services-section" 
                  onClick={(e) => scrollToSection('services-section', e)} 
                  className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
                >
                  Rapid Prototyping
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-[#212121]">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-[#00BCD4] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[#616161]">
                  7901 4TH ST N<br />
                  ST. PETERSBURG FL 33702
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-[#00BCD4] mr-3 flex-shrink-0" />
                <a 
                  href="tel:+14155552671" 
                  className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
                >
                  (415) 555-2671
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-[#00BCD4] mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@softworkstrading.com" 
                  className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
                >
                  info@softworkstrading.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 mt-8 border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="mb-4 md:mb-0 text-[#616161]">
              &copy; {year} Softworks Trading Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="transition-colors duration-300 text-[#616161] hover:text-[#00BCD4]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}