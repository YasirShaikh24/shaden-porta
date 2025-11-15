import { useLanguage } from "@/hooks/useLanguage";
import logo from "@/assets/img/logo.png";
import saudimade from "@/assets/img/saudimade.png";
import vision2030 from "@/assets/img/vision2030.jpg";
import { MapPin, Phone, Mail, ArrowUp, Linkedin, Facebook, Instagram } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Footer = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
        icon: Linkedin, 
        href: "https://www.linkedin.com/in/shaden-portacabin/",
        label: "LinkedIn",
        color: "text-[#0A66C2]"
    },
    { 
        icon: Facebook, 
        href: "https://www.facebook.com/profile.php?id=61578135137261",
        label: "Facebook",
        color: "text-[#1877F2]"
    },
    { 
        icon: Instagram, 
        href: "https://www.instagram.com/shadenhouse31/",
        label: "Instagram",
        color: "text-pink-500"
    },
  ];

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-b from-card to-background border-t border-border/50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Mobile: Stack everything vertically, Desktop: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Company Info - Column 1 */}
          <div 
            className={`flex flex-col items-center md:items-start group text-center md:text-left transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <img 
                  src={logo} 
                  alt="Shaden House Logo" 
                  className="h-12 w-12 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Shaden House
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              {t.footerDescription}
            </p>
          </div>

          {/* Quick Links - Column 2 */}
          <div 
            className={`flex flex-col items-center md:items-start text-center md:text-left transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-foreground font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            </h3>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <a 
                href="#home" 
                className="group relative text-muted-foreground hover:text-primary transition-colors text-sm font-medium inline-block"
              >
                {t.home}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#about" 
                className="group relative text-muted-foreground hover:text-primary transition-colors text-sm font-medium inline-block"
              >
                {t.about}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="/gallery" 
                className="group relative text-muted-foreground hover:text-primary transition-colors text-sm font-medium inline-block"
              >
                {t.gallery}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#contact" 
                className="group relative text-muted-foreground hover:text-primary transition-colors text-sm font-medium inline-block"
              >
                {t.contact}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>

          {/* Contact Info - Column 3 */}
          <div 
            className={`flex flex-col items-center md:items-start text-center md:text-left transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-foreground font-bold text-lg mb-6 relative inline-block">
              Contact
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            </h3>
            <div className="flex flex-col gap-4 text-sm">
              <a 
                href="tel:+966554467464" 
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={16} className="text-primary" />
                </div>
                <span className="font-medium">📞 {t.phone}</span>
              </a>
              <a 
                href="mailto:info@shadenhouseportacabin.com" 
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={16} className="text-primary" />
                </div>
                <span className="font-medium break-all md:break-normal">📧 {t.email}</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/tLXMWyfjmn6QCaWK8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <span className="font-medium text-left max-w-[200px]">📍 {t.address}</span>
              </a>
            </div>
          </div>
          
          {/* Social Media & Saudi Made - Column 4 */}
          <div 
            className={`flex flex-col items-center md:items-end text-center md:text-right transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-foreground font-bold text-lg mb-6 relative inline-block">
              {t.socialLinks}
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            </h3>
            <div className="flex gap-4 mb-8 justify-center md:justify-end">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`group w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-110 ${link.color}`}
                >
                  <link.icon size={20} className={`transition-all duration-300 group-hover:scale-110 ${link.color}`} />
                </a>
              ))}
            </div>

            {/* Saudi Made & Vision 2030 - Together */}
            <div className="flex flex-col items-center md:items-end gap-6">
              <img 
                src={saudimade} 
                alt="Saudi Made" 
                className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
              />
              <img 
                src={vision2030} 
                alt="Saudi Vision 2030" 
                className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={`pt-8 border-t border-border/50 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '500ms' }}>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
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