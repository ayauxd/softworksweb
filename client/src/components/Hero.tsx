import NeuralTree from "./NeuralTree";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Design Autonomous Systems That Think, Act, and Scale.
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-xl">
              We don't just integrate AI—we rewire how your operations think using adaptive agentic workflows.
            </p>
            <a 
              href="#" 
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
