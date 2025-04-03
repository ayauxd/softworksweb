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
    <section id="hero" className="pt-24 md:pt-32 pb-10 md:pb-20 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
              Build Smarter Workflows with Autonomous AI Systems
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              We help you rethink operations using intelligent, agentic processes designed to scale.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="#consultation-form" 
                onClick={(e) => scrollToSection('consultation-form', e)}
                className="inline-block bg-[#EF4444] hover:bg-[#FF6B6B] text-white font-medium py-3 px-6 md:px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transform hover:-translate-y-1"
              >
                Schedule a Consultation
              </a>
              <a 
                href="#mvp-section" 
                onClick={(e) => scrollToSection('mvp-section', e)}
                className="inline-block bg-transparent border border-slate-600 hover:border-white text-white font-medium py-3 px-6 md:px-8 rounded-md transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-4/5 md:w-full max-w-sm lg:max-w-md">
              <NeuralTree className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
