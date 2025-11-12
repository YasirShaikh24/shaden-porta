import { useLanguage } from "@/hooks/useLanguage";
import heroImage from "@/assets/img/image3.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center mt-20">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-scale-in">
            {t.heroTitle}
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-4">
            {t.heroSubtitle}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            {t.heroDescription}
          </p>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="inline-flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-all animate-bounce"
          >
            <span className="text-sm font-medium">Explore More</span>
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
