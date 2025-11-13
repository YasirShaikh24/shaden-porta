import { useLanguage } from "@/hooks/useLanguage";
import logo from "@/assets/img/logo.png";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-card to-background border-t border-border/50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start group">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <img 
                  src={logo} 
                  alt="Shaden House Logo" 
                  className="h-14 w-14 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Shaden House
              </span>
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left leading-relaxed max-w-xs">
              {t.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-foreground font-bold text-lg mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            </h3>
            <div className="flex flex-col gap-3 text-center">
              <a 
                href="#home" 
                className="group relative text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {t.home}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#about" 
                className="group relative text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {t.about}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="/gallery" 
                className="group relative text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {t.gallery}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#contact" 
                className="group relative text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {t.contact}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-foreground font-bold text-lg mb-6 relative">
              Contact
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            </h3>
            <div className="flex flex-col gap-4 text-center md:text-right">
              <a 
                href="tel:+966554467464" 
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 text-sm justify-center md:justify-end"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={16} className="text-primary" />
                </div>
                <span className="font-medium">📞 {t.phone}</span> {/* ADDED EMOJI */}
              </a>
              <a 
                href="mailto:info@shadenhouseportacabin.com" 
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 text-sm justify-center md:justify-end"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={16} className="text-primary" />
                </div>
                <span className="font-medium">📧 {t.email}</span> {/* ADDED EMOJI */}
              </a>
              <a 
                href="https://maps.app.goo.gl/tLXMWyfjmn6QCaWK8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 text-sm justify-center md:justify-end"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={16} className="text-primary" />
                </div>
                <span className="max-w-xs font-medium">📍 {t.address}</span> {/* ADDED EMOJI */}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {t.footerText}
            </p>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-white group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </footer>
  );
};

export default Footer;