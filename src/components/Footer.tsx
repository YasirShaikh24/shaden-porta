import { useLanguage } from "@/hooks/useLanguage";
import logo from "@/assets/img/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Shaden House Logo" className="h-12 w-12 object-contain" />
              <span className="text-lg font-bold text-foreground">
                Shaden House
              </span>
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {t.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-center">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t.home}
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t.about}
              </a>
              <a href="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t.gallery}
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t.contact}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-center md:text-right">
              <a href="tel:+966554467464" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm justify-center md:justify-end">
                <Phone size={16} />
                {t.phone}
              </a>
              <a href="mailto:info@shadenhouseportacabin.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm justify-center md:justify-end">
                <Mail size={16} />
                {t.email}
              </a>
              <a 
                href="https://maps.app.goo.gl/tLXMWyfjmn6QCaWK8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm justify-center md:justify-end"
              >
                <MapPin size={16} />
                <span className="max-w-xs">{t.address}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            {t.footerText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
