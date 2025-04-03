import NeuralTree from "./NeuralTree";

export default function Hero() {
  const scrollToConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    const consultationSection = document.getElementById('consultation-form');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
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
              We help you rethink operations using intelligent, agentic processes designed to scale without breaking your workflows.
            </p>
            <a 
              href="#consultation-form" 
              onClick={scrollToConsultation}
              className="inline-block bg-[#30D5E8] hover:bg-[#4cdfef] text-[#0C1F25] font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(48,213,232,0.5)] transform hover:-translate-y-1"
            >
              Schedule a Consultation
            </a>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <NeuralTree className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
