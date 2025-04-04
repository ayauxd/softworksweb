import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/lib/theme-context";

// Import images directly
import blogSupplyChainImg from "../../public/assets/blog-ai-supply-chain.png";
import blogFutureWorkImg from "../../public/assets/blog-future-work-ai.png";
import promptEngineeringImg from "../../public/assets/prompt-engineering.png";

export default function Insights() {
  const { theme } = useTheme();

  // TODO: Fetch and display all blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Supply Chain Transformation with AI: Beyond Prediction",
      summary: "Discover how companies are using AI to not just predict disruptions but actively reconfigure supply chains in real-time.",
      content: "Full article content would go here...",
      category: "Business Strategy",
      date: "2023-12-15",
      author: "Michael Chen",
      image: blogSupplyChainImg,
      url: "/insights/supply-chain-transformation"
    },
    {
      id: 2,
      title: "The Future of Work: AI Assistants as Collaborative Partners",
      summary: "How agentic AI is shifting from automation tools to collaborative partners that augment human creativity and decision-making.",
      content: "Full article content would go here...",
      category: "Workplace Innovation",
      date: "2023-11-29",
      author: "Sarah Johnson",
      image: blogFutureWorkImg,
      url: "/insights/future-work-ai"
    },
    {
      id: 3,
      title: "Engineering the Perfect Prompt: The Art & Science",
      summary: "Why prompt engineering has become a critical skill for organizations looking to maximize the value of their AI investments.",
      content: "Full article content would go here...",
      category: "Technical Insights",
      date: "2023-11-17",
      author: "Alex Rivera",
      image: promptEngineeringImg,
      url: "/insights/prompt-engineering"
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' 
        ? 'bg-[#002B36] text-white' 
        : 'bg-white text-[#212121]'
    }`}>
      <Header isSticky={true} /> {/* Assuming sticky header on subpages */}
      <main className="flex-grow container mx-auto px-6 lg:px-12 py-24 md:py-32">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
          Insights & Innovation
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
             <a
               href={post.url}
               key={post.id}
               className={`block rounded-xl overflow-hidden transition-all duration-300 group hover:-translate-y-2 ${
                 theme === 'dark'
                   ? 'bg-[#001B26] border-[#00BCD4]/20 hover:shadow-[0_8px_30px_rgba(0,188,212,0.15)] hover:border-[#00BCD4]/40'
                   : 'bg-white border border-gray-200 hover:shadow-lg hover:border-gray-300'
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
                   <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-[#00BCD4]' : 'text-[#00838F]'}`}>
                      {post.category}
                 </p>
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
                 <p className={`text-xs mt-4 pt-2 border-t ${theme === 'dark' ? 'text-gray-400 border-gray-700' : 'text-gray-500 border-gray-200'}`}>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                 </p>
                 </div>
             </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 