import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AssistantSection from "@/components/AssistantSection";
import MVPSection from "@/components/MVPSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <div className="min-h-screen bg-[#00202e] text-white">
      <Header isSticky={isScrolled} />
      <main>
        <Hero />
        <MVPSection />
        <AssistantSection />
        <TestimonialsSection />
        <CTASection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
