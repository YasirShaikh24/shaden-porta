import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/img/image3.jpg"; // Your office image

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
    // ADDED h-full for a more robust full-height on some mobile browsers
    <section id="home" className="relative min-h-screen h-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'brightness(0.4)'
          }}
        />
        {/* Gradient Overlays for Better Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8 animate-pulse-glow">
            <Sparkles className="text-primary" size={18} />
            <span className="text-sm font-semibold text-white">
              ✨ {t.premiumConstruction}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 animate-scale-in">
            <span className="block text-white font-extrabold drop-shadow-2xl">
              Shaden House Porta Cabin
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
            {t.heroSubtitle}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white font-medium drop-shadow-md leading-relaxed">
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
              className="px-8 py-6 text-lg font-bold glass text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:border-white/50"
            >
              {t.viewGallery}
            </Button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-float">
            <button
              onClick={scrollToAbout}
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

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;