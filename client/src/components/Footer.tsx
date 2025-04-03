import SoftworksLogo from "./SoftworksLogo";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#001824] text-white pt-16 pb-8 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <SoftworksLogo className="w-8 h-8 mr-3" />
              <div>
                <h3 className="text-lg font-bold">Softworks</h3>
                <p className="text-xs tracking-widest text-slate-400">TRADING COMPANY</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6">
              Designing intelligent autonomous systems that transform operations and drive efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-[#30D5E8] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#30D5E8] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#30D5E8] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#hero" onClick={(e) => scrollToSection('hero', e)} className="text-slate-300 hover:text-[#30D5E8] transition-colors">Home</a></li>
              <li><a href="#mvp-section" onClick={(e) => scrollToSection('mvp-section', e)} className="text-slate-300 hover:text-[#30D5E8] transition-colors">Services</a></li>
              <li><a href="#chatbot-section" onClick={(e) => scrollToSection('chatbot-section', e)} className="text-slate-300 hover:text-[#30D5E8] transition-colors">How It Works</a></li>
              <li><a href="#testimonials-section" onClick={(e) => scrollToSection('testimonials-section', e)} className="text-slate-300 hover:text-[#30D5E8] transition-colors">Case Studies</a></li>
              <li><a href="#consultation-form" onClick={(e) => scrollToSection('consultation-form', e)} className="text-slate-300 hover:text-[#30D5E8] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#mvp-section" onClick={(e) => scrollToSection('mvp-section', e)} className="text-slate-300 hover:text-[#30D5E8] transition-colors">AI Integration</a></li>
              <li><a href="#mvp-section" onClick={(e) => scrollToSection('mvp-section', e)} className="text-slate-300 hover:text-[#30D5E8] transition-colors">Workflow Automation</a></li>
              <li><a href="#mvp-section" onClick={(e) => scrollToSection('mvp-section', e)} className="text-slate-300 hover:text-[#30D5E8] transition-colors">LLM Tuning</a></li>
              <li><a href="#mvp-section" onClick={(e) => scrollToSection('mvp-section', e)} className="text-slate-300 hover:text-[#30D5E8] transition-colors">Business Analytics</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#30D5E8] mr-3 mt-1" />
                <span className="text-slate-300">
                  100 Innovation Drive<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#30D5E8] mr-3" />
                <a href="tel:+14155552671" className="text-slate-300 hover:text-[#30D5E8] transition-colors">
                  (415) 555-2671
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#30D5E8] mr-3" />
                <a href="mailto:info@softworkstrading.com" className="text-slate-300 hover:text-[#30D5E8] transition-colors">
                  info@softworkstrading.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              &copy; {year} Softworks Trading Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-slate-400 hover:text-[#30D5E8] transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-400 hover:text-[#30D5E8] transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-slate-400 hover:text-[#30D5E8] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}