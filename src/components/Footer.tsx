import { useLanguage } from "@/hooks/useLanguage";
import logo from "@/assets/img/logo.png";
import saudimade from "@/assets/img/saudimade.png";
import vision2030 from "@/assets/img/vision2030.png";
import { MapPin, Phone, Mail, ArrowUp, Linkedin, Facebook, Instagram } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Official Snapchat Ghost Icon
const SnapchatIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
  </svg>
);

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
    { 
        icon: SnapchatIcon,
        href: "https://www.snapchat.com/add/shadenhouse25?share_id=M8L_4rW1k34&locale=en-US",
        label: "Snapchat",
        color: "text-[#FFFC00]"
    }
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
            className={`flex flex-col items-center md:items-start text-center md:text-left transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-0 transition-opacity duration-300"></div>
                <img 
                  src={logo} 
                  alt="Shaden House Logo" 
                  className="h-12 w-12 object-contain relative z-10 transform transition-transform duration-300" 
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Shaden House
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0 mb-6">
              {t.footerDescription}
            </p>
            
            {/* Saudi Vision 2030 with hover effect */}
            <img 
                src={vision2030} 
                alt="Saudi Vision 2030" 
                className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
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
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`group w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-110 ${link.color}`}
                  >
                    <IconComponent size={20} className="transition-all duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>

            {/* Saudi Made with hover effect */}
            <div className="flex items-center justify-center md:justify-end">
              <img 
                src={saudimade} 
                alt="Saudi Made" 
                className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
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