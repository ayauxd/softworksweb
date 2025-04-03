import { useState, useEffect } from "react";
import { ArrowUp, X, Linkedin, Facebook, Globe } from "lucide-react";
import SoftworksLogo from "./SoftworksLogo";

interface HeaderProps {
  isSticky: boolean;
}

export default function Header({ isSticky }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`py-4 px-6 lg:px-12 fixed w-full top-0 bg-[#00202e]/90 backdrop-blur-sm z-50 transition-all duration-300 ${
          isSticky ? "py-3 shadow-lg" : "py-4"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection('hero', e)}
              className="flex items-center"
            >
              <SoftworksLogo className="w-10 h-10 mr-3" />
              <div>
                <h1 className="text-xl font-bold">Softworks</h1>
                <p className="text-xs tracking-widest text-slate-300">TRADING COMPANY</p>
              </div>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <nav className="flex items-center space-x-8 mr-8">
                <a href="#hero" onClick={(e) => scrollToSection('hero', e)} className="font-medium hover:text-[#30D5E8] transition-all duration-300 hover:scale-105">Home</a>
                <a href="#mvp-section" onClick={(e) => scrollToSection('mvp-section', e)} className="font-medium hover:text-[#30D5E8] transition-all duration-300 hover:scale-105">Services</a>
                <a href="#chatbot-section" onClick={(e) => scrollToSection('chatbot-section', e)} className="font-medium hover:text-[#30D5E8] transition-all duration-300 hover:scale-105">How It Works</a>
                <a href="#consultation-form" onClick={(e) => scrollToSection('consultation-form', e)} className="font-medium hover:text-[#30D5E8] transition-all duration-300 hover:scale-105">Contact</a>
              </nav>
              
              {/* Social Icons */}
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-[#30D5E8] transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-[#30D5E8] transition-all duration-300 hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-[#30D5E8] transition-all duration-300 hover:scale-110">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M16 8h2V6h-4v4h2z" />
                    <path d="M8 16h2v-4h4v4h2V8h-8z" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-[#30D5E8] transition-all duration-300 hover:scale-110">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none" 
              aria-label="Menu"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#00202e]/95 z-20 pt-20 px-6 md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col space-y-6 text-center">
          <a href="#hero" onClick={(e) => scrollToSection('hero', e)} className="py-2 text-lg font-medium">Home</a>
          <a href="#mvp-section" onClick={(e) => scrollToSection('mvp-section', e)} className="py-2 text-lg font-medium">Services</a>
          <a href="#chatbot-section" onClick={(e) => scrollToSection('chatbot-section', e)} className="py-2 text-lg font-medium">How It Works</a>
          <a href="#consultation-form" onClick={(e) => scrollToSection('consultation-form', e)} className="py-2 text-lg font-medium">Contact</a>
        </nav>
        
        {/* Mobile Social Icons */}
        <div className="flex justify-center space-x-6 mt-10">
          <a href="#" className="text-slate-400 hover:text-[#30D5E8] transition-all duration-300 hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-[#30D5E8] transition-all duration-300 hover:scale-110">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-[#30D5E8] transition-all duration-300 hover:scale-110">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M16 8h2V6h-4v4h2z" />
              <path d="M8 16h2v-4h4v4h2V8h-8z" />
            </svg>
          </a>
          <a href="#" className="text-slate-400 hover:text-[#30D5E8] transition-all duration-300 hover:scale-110">
            <Globe className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#30D5E8] text-[#0C1F25] rounded-full p-3 shadow-lg hover:bg-[#4cdfef] transition-all duration-300 hover:shadow-[0_0_15px_rgba(48,213,232,0.5)] z-50 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
