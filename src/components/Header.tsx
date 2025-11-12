import { useLanguage } from "@/hooks/useLanguage";
import logo from "@/assets/img/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Shaden House Logo" className="h-12 w-12 object-contain" />
            <span className="text-lg font-bold text-foreground hidden sm:inline-block">
              Shaden House Porta Cabin
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              {t.home}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              {t.about}
            </button>
            <a href="/gallery" className="text-foreground hover:text-primary transition-colors">
              {t.gallery}
            </a>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              {t.contact}
            </button>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === 'en' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                EN 🇬🇧
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === 'ar' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                AR 🇸🇦
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:bg-secondary rounded-md"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                {t.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                {t.about}
              </button>
              <a href="/gallery" className="text-foreground hover:text-primary transition-colors py-2">
                {t.gallery}
              </a>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors py-2">
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
