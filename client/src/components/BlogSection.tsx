import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How Autonomous AI is Revolutionizing Supply Chain Management",
    summary: "Discover how companies are implementing agentic AI solutions to automate inventory forecasting and logistics.",
    image: "/assets/blog-supply-chain.jpg",
    url: "#"
  },
  {
    id: 2,
    title: "The Future of Work: AI Agents as Team Members",
    summary: "Explore how businesses are integrating AI agents into their teams for enhanced productivity and decision-making.",
    image: "/assets/blog-future-work.jpg",
    url: "#"
  },
  {
    id: 3,
    title: "Case Study: 40% Efficiency Gains with Workflow Automation",
    summary: "How a Fortune 500 company transformed their operations with Softworks Trading Company's AI solutions.",
    image: "/assets/blog-case-study.jpg",
    url: "#"
  }
];

export default function BlogSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-[#00202e]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Insights & Innovation</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Learn how businesses are using AI to scale faster and work smarter.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-gradient-to-b from-[#002836] to-[#00202e] rounded-lg overflow-hidden border border-[#30D5E8]/20 hover:border-[#30D5E8]/40 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(48,213,232,0.2)]"
            >
              <div className="h-48 bg-[#001824] relative">
                <div className="w-full h-full flex items-center justify-center bg-[#001824] text-[#30D5E8]/70">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M10 13v-2.5a2.5 2.5 0 0 1 5 0V13"></path>
                    <path d="M8 13h8v5a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-5z"></path>
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-slate-300 mb-4 line-clamp-2">{post.summary}</p>
                <a 
                  href={post.url} 
                  className="inline-flex items-center text-[#30D5E8] hover:text-[#4cdfef] font-medium transition-colors"
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-transparent hover:bg-[#30D5E8]/10 text-[#30D5E8] border border-[#30D5E8] font-medium py-3 px-8 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(48,213,232,0.3)]"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}