import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const didMountRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on page load/navigation
  useEffect(() => {
    if (!didMountRef.current) {
        window.scrollTo(0, 0);
        didMountRef.current = true;
    }
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
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