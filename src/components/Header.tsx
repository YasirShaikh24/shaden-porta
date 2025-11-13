import { useLanguage } from "@/hooks/useLanguage";
import logo from "@/assets/img/logo.png";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

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
        ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <img 
                src={logo} 
                alt="Shaden House Logo" 
                className="h-12 w-12 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:inline-block">
              Shaden House Porta Cabin
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="relative text-foreground font-medium hover:text-primary transition-all duration-300 group"
            >
              {t.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="relative text-foreground font-medium hover:text-primary transition-all duration-300 group"
            >
              {t.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </button>
            <a 
              href="/gallery" 
              className="relative text-foreground font-medium hover:text-primary transition-all duration-300 group"
            >
              {t.gallery}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="relative text-foreground font-medium hover:text-primary transition-all duration-300 group"
            >
              {t.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Language Toggle & Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-accent" />
              ) : (
                <Moon size={20} className="text-primary" />
              )}
            </button>

            {/* Language Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  language === 'en' 
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                EN 🇬🇧
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  language === 'ar' 
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                AR 🇸🇦
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-all duration-300 hover:scale-110"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left text-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-secondary/50"
              >
                {t.home}
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-secondary/50"
              >
                {t.about}
              </button>
              <a 
                href="/gallery" 
                className="text-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-secondary/50"
              >
                {t.gallery}
              </a>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-secondary/50"
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