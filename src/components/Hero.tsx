import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import VideoBackground from "./VideoBackground";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <VideoBackground videoUrl="/videos/truck.mp4" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="text-center max-w-6xl mx-auto animate-fade-in">

          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border-2 border-white mb-6 backdrop-blur-md animate-pulse">
            <Sparkles className="text-white animate-spin-slow" size={20} />
            <span className="text-sm md:text-base font-semibold text-white">
              {t.premiumConstruction}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-8 md:mb-10">
            <span className="block text-white font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight drop-shadow-xl">
              {t.heroTitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg mb-10 md:mb-12 max-w-3xl mx-auto text-white/90">
            {t.heroDescription}
          </p>

          {/* CTA Button - Single Centered Button */}
          <div className="flex justify-center mb-12 md:mb-20">
            <Button
              onClick={() => (window.location.href = "/gallery")}
              size="lg"
              className="group px-12 md:px-16 py-6 md:py-8 text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-500 relative overflow-hidden"
            >
              {/* Animated Background Shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              
              <span className="relative z-10 flex items-center gap-3">
                {t.viewGallery}
                <svg 
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </div>

          {/* Explore More Section - Centered */}
          <div className="flex justify-center mt-8">
            <button
              onClick={scrollToAbout}
              className="flex flex-col items-center gap-2 text-white/90 hover:text-white transition group"
            >
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">
                {t.exploreMore}
              </span>
              {/* Animated Down Arrow - Bouncing */}
              <svg 
                className="w-6 h-6 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};

export default Hero;