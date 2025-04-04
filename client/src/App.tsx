import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ThemeProvider } from "./lib/theme-context";
import Insights from "./pages/Insights";
import BlogPost from "./pages/BlogPost";
import { useEffect } from 'react';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/insights" component={Insights} />
      <Route path="/insights/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Add debugging for image paths
  useEffect(() => {
    // Log Vite environment variables and path information
    console.log("=================== IMAGE PATH DEBUGGING ===================");
    console.log("BASE_URL:", import.meta.env.BASE_URL);
    console.log("MODE:", import.meta.env.MODE);
    console.log("DEV:", import.meta.env.DEV);
    console.log("PROD:", import.meta.env.PROD);
    
    // Test image URLs with different formats
    const testImages = [
      '/assets/hero-image.png',
      'assets/hero-image.png',
      './assets/hero-image.png',
      import.meta.env.BASE_URL + 'assets/hero-image.png'
    ];
    
    console.log("Test Image URLs:");
    testImages.forEach((path, i) => {
      console.log(`[${i}] ${path}`);
      
      // Create a test image element to see if it loads
      const img = new Image();
      img.onload = () => console.log(`✅ Image ${i} loaded successfully:`, path);
      img.onerror = () => console.log(`❌ Image ${i} failed to load:`, path);
      img.src = path;
    });
    
    // List all <img> elements on the page and their src attributes
    setTimeout(() => {
      const imgElements = document.querySelectorAll('img');
      console.log(`Found ${imgElements.length} <img> elements on page:`);
      imgElements.forEach((img, i) => {
        console.log(`[${i}] src="${img.getAttribute('src')}" loading=${img.complete}`);
      });
      console.log("=================== END DEBUGGING ===================");
    }, 2000); // Give page time to load
  }, []);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
