// ====================================
// UPDATED HEADER.TSX
// ====================================

import { useLanguage } from "@/hooks/useLanguage";
import logo from "@/assets/img/logo.png";
import { Menu, X, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isRTL = language === 'ar';
  const textAlignment = isRTL ? 'text-right' : 'text-left';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash-based navigation when landing on home page with hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const navigateToSection = (id: string) => {
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      // Already on home page - just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home with hash
      navigate(`/#${id}`);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'glass shadow-glow bg-card/70'
        : 'bg-background/80 backdrop-blur-md'
    }`}>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => navigateToSection('home')}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <img
                src={logo}
                alt="Shaden House Logo"
                className="h-12 w-12 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className={`text-lg font-bold text-foreground hidden sm:inline-block group-hover:text-primary transition-colors duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
              Shaden House Porta Cabin
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => navigateToSection('home')}
              className="relative text-foreground font-semibold hover:text-primary transition-all duration-300 group"
            >
              {t.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => navigateToSection('about')}
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
              onClick={() => navigateToSection('contact')}
              className="relative text-foreground font-semibold hover:text-primary transition-all duration-300 group"
            >
              {t.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </button>
            
            {/* NEW: Send Message Button */}
            <button
              onClick={() => navigateToSection('contact-form')}
              className="group px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              {language === 'ar' ? 'أرسل رسالة' : 'Send Message'}
            </button>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Language Buttons */}
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
          <nav 
            className="md:hidden py-4 border-t border-border bg-card/90 backdrop-blur-md"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => navigateToSection('home')}
                className={`${textAlignment} text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-secondary font-semibold`}
              >
                {t.home}
              </button>
              <button
                onClick={() => navigateToSection('about')}
                className={`${textAlignment} text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-secondary font-semibold`}
              >
                {t.about}
              </button>
              <a
                href="/gallery"
                className={`${textAlignment} text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-secondary font-semibold`}
              >
                {t.gallery}
              </a>
              <button
                onClick={() => navigateToSection('contact')}
                className={`${textAlignment} text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-secondary font-semibold`}
              >
                {t.contact}
              </button>
              
              {/* NEW: Mobile Send Message Button */}
              <button
                onClick={() => navigateToSection('contact-form')}
                className="bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-4 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {language === 'ar' ? 'أرسل رسالة' : 'Send Message'}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;