import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AssistantSection from "@/components/AssistantSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useTheme } from "@/lib/theme-context";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen ${
      theme === 'dark' 
        ? 'bg-[#002B36] text-white' 
        : 'bg-white text-[#212121]'
    }`}>
      <Header isSticky={isScrolled} />
      <main>
        <Hero />
        <ServicesSection />
        <AssistantSection />
        <TestimonialsSection />
        <CTASection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
