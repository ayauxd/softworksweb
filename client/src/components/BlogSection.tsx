import { ArrowRight } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

const blogPosts = [
  {
    id: 1,
    title: "How Autonomous AI is Revolutionizing Supply Chain Management",
    summary: "Discover how companies implement agentic AI solutions to automate inventory forecasting, optimize logistics, and reduce operational costs.",
    image: "/assets/blog-image-placeholder-1.png",
    url: "#"
  },
  {
    id: 2,
    title: "The Future of Work: Integrating AI Agents into Your Team",
    summary: "Explore the benefits and challenges of incorporating AI agents as collaborative members for enhanced productivity and decision-making.",
    image: "/assets/blog-image-placeholder-2.png",
    url: "#"
  },
  {
    id: 3,
    title: "Case Study: 40% Efficiency Gains via Workflow Automation",
    summary: "Learn how a Fortune 500 company partnered with Softworks to transform operations using our bespoke AI workflow automation solutions.",
    image: "/assets/blog-image-placeholder-3.png",
    url: "#"
  }
];

export default function BlogSection() {
  const { theme } = useTheme();

  return (
    <section id="blog-section" className={`py-24 md:py-32 px-6 lg:px-12 ${
      theme === 'dark' ? 'bg-[#002B36]' : 'bg-white'
    }`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
             theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
          }`}>
            Insights & Innovation
          </h2>
          <div className={`w-20 h-1 bg-[#00BCD4] mx-auto mb-8`}></div>
          <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-[#E0E0E0]' : 'text-[#424242]'
          }`}>
            Explore the latest trends in AI automation and learn how businesses leverage intelligent systems to scale smarter.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a
              href={post.url}
              key={post.id}
              className={`block rounded-xl overflow-hidden border transition-all duration-300 group hover:-translate-y-2 ${
                theme === 'dark'
                  ? 'bg-[#001B26] border-[#00BCD4]/20 hover:shadow-[0_8px_30px_rgba(0,188,212,0.15)] hover:border-[#00BCD4]/40'
                  : 'bg-white border-gray-200 hover:shadow-xl hover:border-gray-300'
              }`}
            >
              <div className="h-48 overflow-hidden">
                 <img 
                   src={post.image} 
                   alt={post.title} 
                   className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                     theme === 'dark' ? 'opacity-80 group-hover:opacity-100' : ''
                   }`}
                  />
               </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#00BCD4] ${
                   theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#212121]'
                }`}>
                  {post.title}
                </h3>
                <p className={`mb-4 line-clamp-3 text-sm ${
                   theme === 'dark' ? 'text-[#B0BEC5]' : 'text-[#616161]'
                }`}>
                  {post.summary}
                </p>
                <div
                  className="inline-flex items-center text-[#00BCD4] font-medium mt-2"
                >
                  Read More <ArrowRight className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#"
            className={`inline-flex items-center bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-medium py-3 px-8 rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] ${theme === 'dark' ? 'focus:ring-offset-[#002B36]' : 'focus:ring-offset-white'}`}
          >
            <span>View All Insights</span>
             <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}