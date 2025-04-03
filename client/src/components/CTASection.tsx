import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-[#002836] to-[#003848]">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[#00202e]/50 backdrop-blur-md p-10 lg:p-16 rounded-2xl border border-[#30D5E8]/20 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Get started with a consultation to see how our autonomous systems can revolutionize your business workflows.
            </p>
            
            <a 
              href="#" 
              className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          
          <div className="text-center mt-12 text-sm text-slate-400">
            <p>No commitment required. Our team will provide a personalized demo based on your specific business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}