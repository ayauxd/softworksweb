import { useState } from "react";
import SoftworksLogo from "./SoftworksLogo";

interface HeaderProps {
  isSticky: boolean;
}

export default function Header({ isSticky }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header 
        className={`py-4 px-6 lg:px-12 fixed w-full top-0 bg-[#00202e]/90 backdrop-blur-sm z-10 transition-all duration-300 ${
          isSticky ? "py-3 shadow-lg" : "py-4"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <SoftworksLogo className="w-10 h-10 mr-3" />
              <div>
                <h1 className="text-xl font-bold">Softworks</h1>
                <p className="text-xs tracking-widest text-slate-300">TRADING COMPANY</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-medium hover:text-[#30D5E8] transition-colors">Home</a>
              <a href="#" className="font-medium hover:text-[#30D5E8] transition-colors">Services</a>
              <a href="#" className="font-medium hover:text-[#30D5E8] transition-colors">How It Works</a>
              <a href="#" className="font-medium hover:text-[#30D5E8] transition-colors">Case Studies</a>
              <a href="#" className="font-medium hover:text-[#30D5E8] transition-colors">About</a>
              <a href="#" className="font-medium hover:text-[#30D5E8] transition-colors">Contact</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none" 
              aria-label="Menu"
              onClick={toggleMobileMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#00202e]/95 z-20 pt-20 px-6 md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col space-y-6 text-center">
          <a href="#" className="py-2 text-lg font-medium">Home</a>
          <a href="#" className="py-2 text-lg font-medium">Services</a>
          <a href="#" className="py-2 text-lg font-medium">How It Works</a>
          <a href="#" className="py-2 text-lg font-medium">Case Studies</a>
          <a href="#" className="py-2 text-lg font-medium">About</a>
          <a href="#" className="py-2 text-lg font-medium">Contact</a>
        </nav>
      </div>
    </>
  );
}
