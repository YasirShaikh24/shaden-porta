import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import { useEffect, useRef, useState } from "react";
// NEW: Import useLocation to read the URL hash
import { useLocation } from "react-router-dom"; 

const Index = () => {
  const didMountRef = useRef(false);
  const [showLoading, setShowLoading] = useState(true);
  // NEW: Initialize useLocation
  const location = useLocation();

  // Scroll to section based on URL hash or default to top
  useEffect(() => {
    const hash = location.hash;
    
    if (hash) {
      // Remove the '#' and get the section ID
      const id = hash.substring(1); 
      const element = document.getElementById(id);
      
      if (element) {
        // Scroll to the element
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If hash is invalid, scroll to top as a fallback
        window.scrollTo(0, 0);
      }
    } else if (!didMountRef.current) {
      // If no hash and it's the initial mount, scroll to top
      window.scrollTo(0, 0);
    }
    
    // Mark as mounted
    didMountRef.current = true;

    // This effect runs on mount and whenever the hash or path changes, 
    // ensuring scrolling works when navigating from the Gallery page.
  }, [location.pathname, location.hash]);
  
  // REMOVED: LoadingScreen conditional rendering
  
  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <Hero />
      <About />
      <FeaturedProjects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;