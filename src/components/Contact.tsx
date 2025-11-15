import { useLanguage } from "@/hooks/useLanguage";
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Official Snapchat Ghost Icon
const SnapchatIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
  </svg>
);

const Contact = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const isRTL = language === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Standard Contact Info
  const contactInfo = [
    {
      icon: Phone,
      label: t.contactPhone,
      value: t.phone,
      link: "tel:+966554467464",
      gradient: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Mail,
      label: t.contactEmail,
      value: t.email,
      link: "mailto:info@shadenhouseportacabin.com",
      gradient: "from-green-500 to-teal-500",
      iconColor: "text-green-500",
      bgGradient: "from-green-500/10 to-teal-500/10"
    },
    {
      icon: MapPin,
      label: t.contactAddress,
      value: t.address,
      link: "https://maps.app.goo.gl/tLXMWyfjmn6QCaWK8",
      gradient: "from-purple-500 to-pink-500",
      iconColor: "text-purple-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  // Social Media Info with Snapchat included
  const socialInfo = [
    {
      icon: Linkedin,
      label: language === 'ar' ? 'لينكد إن' : 'LinkedIn',
      value: language === 'ar' ? 'تواصل معنا' : 'Connect with us',
      link: "https://www.linkedin.com/in/shaden-portacabin/",
      gradient: "from-blue-600 to-blue-400",
      iconColor: "text-blue-600",
      bgGradient: "from-blue-600/10 to-blue-400/10"
    },
    {
      icon: Facebook,
      label: language === 'ar' ? 'فيسبوك' : 'Facebook',
      value: language === 'ar' ? 'تابعنا' : 'Follow us',
      link: "https://www.facebook.com/profile.php?id=61578135137261",
      gradient: "from-blue-500 to-blue-700",
      iconColor: "text-blue-600",
      bgGradient: "from-blue-500/10 to-blue-700/10"
    },
    {
      icon: Instagram,
      label: language === 'ar' ? 'إنستغرام' : 'Instagram',
      value: language === 'ar' ? 'تابعنا' : 'Follow us',
      link: "https://www.instagram.com/shadenhouse31/",
      gradient: "from-pink-600 to-orange-500",
      iconColor: "text-pink-500",
      bgGradient: "from-pink-600/10 to-orange-500/10"
    },
    {
      icon: SnapchatIcon,
      label: t.snapchat,
      value: language === 'ar' ? 'تابعنا' : 'Follow us',
      link: "https://www.snapchat.com/add/shadenhouse25?share_id=M8L_4rW1k34&locale=en-US",
      gradient: "from-yellow-400 to-yellow-600",
      iconColor: "text-[#FFFC00]",
      bgGradient: "from-yellow-400/10 to-yellow-600/10"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.contactTitle}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'تواصل معنا لأي استفسارات أو مناقشات المشاريع'
              : 'Get in touch with us for any inquiries or project discussions'
            }
          </p>
        </div>

        {/* Contact Info Cards - 3 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {contactInfo.map((info, index) => {
            const CurrentIcon = info.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 animate-blink-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms`, transitionDelay: '0ms' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <a
                  href={info.link}
                  target={info.icon === MapPin ? "_blank" : undefined}
                  rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="relative block bg-card p-8 rounded-2xl border border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className={`flex flex-col items-center text-center relative z-10`}>
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${info.gradient} p-0.5 mb-6 transform ${
                      hoveredIndex === index ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
                    } transition-all duration-500`}>
                      <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                        <CurrentIcon 
                          size={40} 
                          className={`${info.iconColor}`} 
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300 text-center w-full">
                      {info.label}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300 text-center w-full">
                      {info.value}
                    </p>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Social Media Cards - 4 cards in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {socialInfo.map((info, index) => {
            const currentIndex = contactInfo.length + index;
            const CurrentIcon = info.icon;
            
            return (
              <div
                key={currentIndex}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 animate-blink-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${currentIndex * 150}ms`, transitionDelay: '0ms' }}
                onMouseEnter={() => setHoveredIndex(currentIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block bg-card p-8 rounded-2xl border border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className={`flex flex-col items-center text-center relative z-10`}>
                    <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${info.gradient} p-0.5 mb-6 transform ${
                      hoveredIndex === currentIndex ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
                    } transition-all duration-500`}>
                      <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                        <CurrentIcon 
                            size={40} 
                            className={`${info.iconColor}`} 
                            strokeWidth={CurrentIcon === SnapchatIcon ? 0 : 2} 
                        />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300 text-center w-full">
                      {info.label}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300 text-center w-full">
                      {info.value}
                    </p>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </a>
              </div>
            );
          })}
        </div>
        
        {/* Google Maps Embed */}
        <div className={`rounded-3xl overflow-hidden border-2 border-border shadow-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-50 blur-sm"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1234567890123!2d46.7777777777778!3d24.7777777777778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ2JzQwLjAiTiA0NsKwNDYnNDAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890123!5m2!1sen!2ssa"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shaden House Location"
              className="relative z-10 rounded-3xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;