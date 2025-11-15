import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import VideoBackground from "./VideoBackground";

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
      {/* Optimized Video Background */}
      <VideoBackground 
        videoUrl="/videos/truck.mp4"
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="text-center max-w-6xl mx-auto animate-fade-in">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/40 mb-6 animate-pulse-glow backdrop-blur-md">
            <Sparkles className="text-white" size={20} />
            <span className="text-sm md:text-base font-semibold text-white whitespace-nowrap">
              {t.premiumConstruction}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-8 md:mb-10 animate-scale-in">
            <span className="block text-white font-extrabold drop-shadow-2xl text-4xl md:text-6xl lg:text-7xl leading-tight">
              {t.heroTitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg mb-10 md:mb-12 max-w-3xl mx-auto text-white/95 font-medium drop-shadow-lg leading-relaxed">
            {t.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-20">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-bold bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-glow-lg hover:shadow-neon hover:scale-105 transition-all duration-300 border-0 w-full sm:w-auto"
            >
              {t.getStarted}
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
            </Button>
            
            <Button
              onClick={() => window.location.href = '/gallery'}
              size="lg"
              variant="outline"
              className="px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-bold glass text-white border-2 border-white/40 rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:border-white/60 backdrop-blur-md w-full sm:w-auto"
            >
              {t.viewGallery}
            </Button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-float mt-8">
            <button
              onClick={scrollToAbout}
              className="flex flex-col items-center gap-2 mx-auto text-white/90 hover:text-white transition-colors duration-300 group"
            >
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">
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

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;