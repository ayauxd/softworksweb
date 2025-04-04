import { useState, useEffect } from "react";
import { ArrowUp, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/lib/theme-context";
import { scrollToSection } from "@/lib/utils";
import logoImg from "../../public/assets/logo.png";

interface HeaderProps {
  isSticky: boolean;
}

export default function Header({ isSticky }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme } = useTheme();

  const navLinks = [
    { href: "#hero", label: "Home", sectionId: "hero" },
    { href: "#services-section", label: "Services", sectionId: "services-section" },
    { href: "#chatbot-section", label: "How It Works", sectionId: "chatbot-section" },
    { href: "#blog-section", label: "Insights", sectionId: "blog-section" },
    { href: "#consultation-form", label: "Contact", sectionId: "consultation-form" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        className={`py-4 px-6 lg:px-12 fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md 
          ${isSticky ? "py-2 shadow-lg backdrop-blur-lg" : "py-4"}
          bg-white/90 text-[#212121]`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a 
              href="/"
              className="flex items-center group transition-transform duration-300 hover:scale-105"
            >
              <img src={logoImg} alt="Softworks Logo" className="w-10 h-10 mr-3 object-contain" />
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold transition-colors duration-300 text-[#212121] tracking-wide">
                  SOFTWORKS
                </h1>
                <p className="text-xs tracking-widest text-[#00BCD4] w-full text-center">TRADING COMPANY</p>
              </div>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <nav className="flex items-center space-x-8 mr-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection(link.sectionId, e); }}
                    className="font-medium transition-all duration-300 hover:text-[#00BCD4]
                      border-b-2 border-transparent hover:border-[#00BCD4] pb-1
                      text-[#212121]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              
              {/* Removed Social Icons Section */}
              {/* 
              <div className="flex items-center space-x-4">
                <div className="flex space-x-3 mr-3">
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-[#00BCD4] transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-[#00BCD4] transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-[#00BCD4] transition-all duration-300"
                    aria-label="Website"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              */}
                <ThemeToggle />
              {/*</div>*/}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <ThemeToggle className="mr-3" />
              <button 
                className="focus:outline-none focus:ring-2 focus:ring-[#00BCD4] rounded p-1 text-[#212121]"
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
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 pt-24 px-6 md:hidden transition-opacity duration-300 backdrop-blur-lg
          bg-white/95 text-[#212121]
          ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection(link.sectionId, e); }}
              className="py-2 text-lg font-medium border-b text-[#212121] border-gray-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Removed Mobile Social Icons Section */}
        {/* 
        <div className="flex justify-center space-x-6 mt-10">
          <a 
            href="#" 
            className="text-gray-600 hover:text-[#00BCD4] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-[#00BCD4] transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-[#00BCD4] transition-all duration-300"
            aria-label="Website"
          >
            <Globe className="w-6 h-6" />
          </a>
        </div>
         */}
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#00BCD4] text-white rounded-full p-3 shadow-lg hover:bg-[#00ACC1] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,188,212,0.4)] z-50 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
