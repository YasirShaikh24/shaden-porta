import { useLanguage } from "@/hooks/useLanguage";
import heroImage from "@/assets/img/image3.jpg";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background animate-gradient-shift"></div>
      
      {/* Background Image with Overlay - MODIFIED FOR CLARITY */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30" // Increased image opacity slightly
        />
        {/* Reduced overlay opacity to make the image "clearer" and more visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/50"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center mt-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Premium Construction Solutions
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              {t.heroTitle}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-4xl font-semibold mb-4 text-foreground">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              {t.heroSubtitle}
            </span>
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => window.location.href = '/gallery'}
              className="group px-8 py-4 bg-secondary text-foreground font-semibold rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>View Gallery</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="inline-flex flex-col items-center gap-2 text-primary hover:text-accent transition-all duration-300 group"
          >
            <span className="text-sm font-medium">Explore More</span>
            <div className="relative">
              <ArrowDown size={24} className="animate-bounce" />
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;