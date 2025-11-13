import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect, useRef } from "react"; // Import useEffect and useRef

const Index = () => {
  const didMountRef = useRef(false);

  // Scroll to top on page load/navigation
  useEffect(() => {
    // This ensures it only runs on the initial mount/navigation
    if (!didMountRef.current) {
        window.scrollTo(0, 0);
        didMountRef.current = true;
    }
  }, []);

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