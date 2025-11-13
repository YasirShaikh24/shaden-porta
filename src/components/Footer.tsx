import { useLanguage } from "@/hooks/useLanguage";
import logo from "@/assets/img/logo.png";
import saudimade from "@/assets/img/saudimade.png"; // Import the Saudi Made image
import { MapPin, Phone, Mail, ArrowUp, Linkedin, Facebook, Instagram } from "lucide-react"; // Import social icons

const Footer = () => {
  const { t } = useLanguage();

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
    <footer className="relative bg-gradient-to-b from-card to-background border-t border-border/50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info - Column 1 */}
          <div className="flex flex-col items-center md:items-start group md:col-span-1 text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <img 
                  src={logo} 
                  alt="Shaden House Logo" 
                  className="h-10 w-10 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300" 
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
          <div className="flex flex-col items-center md:items-start md:col-span-1 text-center md:text-left">
            <h3 className="text-foreground font-bold text-lg mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            </h3>
            <div className="flex flex-col gap-3">
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

          {/* Contact Info - Column 3 */}
          <div className="flex flex-col items-center md:items-start md:col-span-1 text-center md:text-left">
            <h3 className="text-foreground font-bold text-lg mb-6 relative">
              Contact
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            </h3>
            <div className="flex flex-col gap-4 text-sm">
              <a 
                href="tel:+966554467464" 
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 justify-center md:justify-start"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={16} className="text-primary" />
                </div>
                <span className="font-medium">📞 {t.phone}</span>
              </a>
              <a 
                href="mailto:info@shadenhouseportacabin.com" 
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 justify-center md:justify-start"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={16} className="text-primary" />
                </div>
                <span className="font-medium">📧 {t.email}</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/tLXMWyfjmn6QCaWK8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 justify-center md:justify-start"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={16} className="text-primary" />
                </div>
                <span className="max-w-xs font-medium text-left">📍 {t.address}</span>
              </a>
            </div>
          </div>
          
          {/* Social Media & Saudi Made - Column 4 */}
          <div className="flex flex-col items-center md:items-end md:col-span-1 text-center md:text-right">
             {/* Social Links */}
             <h3 className="text-foreground font-bold text-lg mb-6 relative">
              {t.socialLinks}
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            </h3>
            <div className="flex gap-4 mb-8">
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

            {/* Saudi Made Image */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <img 
                src={saudimade} 
                alt="Saudi Made" 
                className="h-10 w-auto object-contain" // Adjusted size for better display
              />
              <p className="text-xs font-medium text-muted-foreground italic">
                {t.madeInSaudi}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-border/50">
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