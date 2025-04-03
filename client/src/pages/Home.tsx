import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AssistantSection from "@/components/AssistantSection";
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
    <div className="min-h-screen bg-[#00202e] bg-gradient-to-br from-[#00202e] to-[#003848] text-white">
      <Header isSticky={isScrolled} />
      <main>
        <Hero />
        <AssistantSection />
      </main>
    </div>
  );
}
