import { Server, Workflow, Code } from "lucide-react";

export default function MVPSection() {
  const features = [
    {
      icon: <Server className="w-10 h-10 text-[#30D5E8] mb-4" />,
      title: "Intelligent Data Processing",
      description: "Our systems analyze millions of data points to extract actionable insights and identify patterns that humans might miss."
    },
    {
      icon: <Workflow className="w-10 h-10 text-[#30D5E8] mb-4" />,
      title: "Autonomous Workflows",
      description: "Create self-optimizing business processes that adapt to changing conditions without constant human intervention."
    },
    {
      icon: <Code className="w-10 h-10 text-[#30D5E8] mb-4" />,
      title: "API Integration",
      description: "Seamlessly connect your existing systems with our AI platform through robust API connections and custom webhooks."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#002836]">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Minimum Viable Product</h2>
        <p className="text-slate-300 text-lg text-center mb-16 max-w-3xl mx-auto">
          Start with a lean implementation that delivers immediate value, then scale as your needs evolve
        </p>
        
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-[#00202e] to-[#003848] p-8 rounded-lg border border-[#30D5E8]/20 hover:border-[#30D5E8]/40 shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block bg-transparent hover:bg-[#30D5E8]/10 text-[#30D5E8] border border-[#30D5E8] font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Explore Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
}