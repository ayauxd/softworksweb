import { BrainCircuit, Bot, Workflow, BarChart3 } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { scrollToSection } from "@/lib/utils";
import { useEffect } from "react";

// Import images directly instead of using string paths
// Vite will process these and include them in the build
import aiStrategyImg from "../../public/assets/ai-strategy.png";
import autonomousAgentsImg from "../../public/assets/autonomous-agents.png";
import workflowAutomationImg from "../../public/assets/workflow-automation.png";
import promptEngineeringImg from "../../public/assets/prompt-engineering.png";

export default function ServicesSection() {
  const { theme } = useTheme();
  
  const services = [
    {
      icon: <BrainCircuit className="w-12 h-12 text-[#00BCD4] mb-5" />,
      title: "AI Strategy Consulting",
      description: "Maximize ROI and transform your business with a tailored AI roadmap designed for impact.",
      image: aiStrategyImg
    },
    {
      icon: <Bot className="w-12 h-12 text-[#00BCD4] mb-5" />,
      title: "Autonomous Agents",
      description: "Increase efficiency by building specialized AI assistants that handle complex workflows autonomously.",
      image: autonomousAgentsImg
    },
    {
      icon: <Workflow className="w-12 h-12 text-[#00BCD4] mb-5" />,
      title: "Workflow Automation",
      description: "Achieve continuous operation and adaptability with self-optimizing, AI-driven automated systems.",
      image: workflowAutomationImg
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-[#00BCD4] mb-5" />,
      title: "Prompt Engineering",
      description: "Measure AI system effectiveness with real-time metrics and continuous improvement insights for your operations.",
      image: promptEngineeringImg
    }
  ];

  useEffect(() => {
    console.log("[Services] VITE_BASE_URL:", import.meta.env.BASE_URL);
    services.forEach((service, index) => {
      console.log(`[Services ${index}] Using image path:`, service.image);
    });
    
    // Test alternative path formats
    console.log("[Services] Alternative paths test:");
    const basePaths = [
      "/assets/",
      "assets/", 
      "./assets/",
      import.meta.env.BASE_URL + "assets/"
    ];
    
    // Choose one service image to test
    const testImage = "ai-strategy.png";
    basePaths.forEach((basePath, idx) => {
      const fullPath = basePath + testImage;
      console.log(`[Services] Path format ${idx}:`, fullPath);
      
      // Test if this path loads
      const img = new Image();
      img.onload = () => console.log(`✅ Service image format ${idx} loaded successfully:`, fullPath);
      img.onerror = () => console.log(`❌ Service image format ${idx} failed to load:`, fullPath);
      img.src = fullPath;
    });
    
    // Check for capitalization variations
    const capitalizationTests = [
      "/assets/ai-strategy.png",
      "/assets/AI-Strategy.png",
      "/assets/Ai-Strategy.png",
      "/assets/ai-Strategy.png",
      "/Assets/ai-strategy.png"
    ];
    
    capitalizationTests.forEach((path, idx) => {
      console.log(`[Services] Capitalization test ${idx}:`, path);
      const img = new Image();
      img.onload = () => console.log(`✅ Capitalization test ${idx} loaded successfully:`, path);
      img.onerror = () => console.log(`❌ Capitalization test ${idx} failed to load:`, path);
      img.src = path;
    });
  }, []);

  // Removed local scrollToSection function, using imported utility

  return (
    <section id="services-section" className={`py-24 md:py-32 px-6 lg:px-12 ${
      theme === 'dark' 
        ? 'bg-[#002B36]' 
        : 'bg-[#F5F5F5]'
    }`}>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
          }`}>
            AI Solutions for Modern Businesses
          </h2>
          <div className={`w-20 h-1 bg-[#00BCD4] mx-auto mb-6`}></div>
          <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-[#E0E0E0]' : 'text-[#424242]'
          }`}>
            From initial proof of concept to enterprise-scale deployment, our AI services help you achieve immediate value with long-term adaptability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            // Generate slug from title for the link
            const slug = service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
            return (
              <a
                key={index} 
                href={`/insights/${slug}`}
                className={`block rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  theme === 'dark'
                    ? 'bg-[#001B26] hover:shadow-[0_8px_30px_rgba(0,188,212,0.15)]' 
                    : 'bg-white'
                }`}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} illustration`} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-4 ${
                    theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`${
                    theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#616161]'
                  }`}>
                    {service.description}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#chatbot-section"
            onClick={(e) => scrollToSection('chatbot-section', e)}
            className="inline-flex items-center bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-medium py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,188,212,0.4)]"
          >
            <span>Request a Custom Solution</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}