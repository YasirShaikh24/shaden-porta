import { useLanguage } from "@/hooks/useLanguage";
import logo from "@/assets/img/logo.png";
import headerBg from "@/assets/img/image22.jpg"; // Add this image to your assets
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass shadow-glow' 
        : 'bg-background/40 backdrop-blur-md'
    }`}>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <img 
                src={logo} 
                alt="Shaden House Logo" 
                className="h-12 w-12 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:inline-block group-hover:text-primary transition-colors duration-300">
              Shaden House Porta Cabin
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="relative text-foreground font-semibold hover:text-primary transition-all duration-300 group"
            >
              {t.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="relative text-foreground font-semibold hover:text-primary transition-all duration-300 group"
            >
              {t.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </button>
            <a 
              href="/gallery" 
              className="relative text-foreground font-semibold hover:text-primary transition-all duration-300 group"
            >
              {t.gallery}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="relative text-foreground font-semibold hover:text-primary transition-all duration-300 group"
            >
              {t.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Language Buttons - UPDATED WITH FLAGS */}
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                  language === 'en' 
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow' 
                    : 'bg-card text-foreground hover:bg-secondary border border-border'
                }`}
              >
                EN 🇬🇧
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                  language === 'ar' 
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow' 
                    : 'bg-card text-foreground hover:bg-secondary border border-border'
                }`}
              >
                AR 🇸🇦
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-all duration-300 hover:scale-110 border border-border"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border glass">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-secondary font-semibold"
              >
                {t.home}
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-secondary font-semibold"
              >
                {t.about}
              </button>
              <a 
                href="/gallery" 
                className="text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-secondary font-semibold"
              >
                {t.gallery}
              </a>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-secondary font-semibold"
              >
                {t.contact}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;