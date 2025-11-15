import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import VideoBackground from "./VideoBackground";
// IMPORTING THE VIDEO ASSET FROM THE SPECIFIED PATH
import truckVideo from "@/assets/img/truck.mp4"; 
// REMOVED: import heroImage from "@/assets/img/image3.jpg";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Using only the imported truckVideo asset */}
      <VideoBackground 
        videoUrl={truckVideo} 
        // REMOVED: posterImage prop
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          {/* Premium Badge */}
          <div className="inline-flex flex-col items-center gap-1 px-6 py-3 rounded-2xl glass border border-white/30 mb-8 animate-pulse-glow max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <Sparkles className="text-white" size={18} />
              <span className="text-sm font-semibold text-white">
                ✨ {t.premiumConstruction}
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="mb-4 animate-scale-in">
            {/* Kept text-white for maximum contrast against the dark video background */}
            <span className="block text-white font-extrabold drop-shadow-2xl">
              {t.heroTitle}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-white drop-shadow-lg">
            {t.heroSubtitle}
          </h2>

          {/* Description - Smaller and Better */}
          <p className="text-sm md:text-base mb-10 max-w-2xl mx-auto text-white/90 font-normal drop-shadow-md leading-relaxed">
            {t.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group px-8 py-6 text-lg font-bold bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-glow-lg hover:shadow-neon hover:scale-105 transition-all duration-300 border-0"
            >
              {t.getStarted}
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
            </Button>
            
            <Button
              onClick={() => window.location.href = '/gallery'}
              size="lg"
              variant="outline"
              // The new dark theme (from index.css) will ensure proper contrast
              className="px-8 py-6 text-lg font-bold glass text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:border-white/50"
            >
              {t.viewGallery}
            </Button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-float">
            <button
              onClick={scrollToAbout}
              // Kept text-white for contrast
              className="flex flex-col items-center gap-2 mx-auto text-white hover:text-primary transition-colors duration-300 group"
            >
              <span className="text-sm font-semibold uppercase tracking-wider">
                {t.exploreMore}
              </span>
              <ArrowDown 
                className="group-hover:translate-y-2 transition-transform duration-300" 
                size={24} 
              />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Fade - Fades into the dark background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;