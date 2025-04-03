import NeuralTree from "./NeuralTree";

export default function Hero() {
  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Build Smarter Workflows with Autonomous AI Systems
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-xl">
              We help you rethink operations using intelligent, agentic processes designed to scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#consultation-form" 
                onClick={(e) => scrollToSection('consultation-form', e)}
                className="inline-block bg-[#EF4444] hover:bg-[#FF6B6B] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transform hover:-translate-y-1"
              >
                Schedule a Consultation
              </a>
              <a 
                href="#mvp-section" 
                onClick={(e) => scrollToSection('mvp-section', e)}
                className="inline-block bg-transparent border border-slate-600 hover:border-white text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <NeuralTree className="w-full max-w-md animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
