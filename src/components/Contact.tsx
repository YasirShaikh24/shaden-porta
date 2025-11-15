import { useLanguage } from "@/hooks/useLanguage";
// Import all necessary Lucide icons
import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react"; 
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Standard Contact Info (Using Lucide Icons)
  const contactInfo = [
    {
      icon: Phone,
      label: t.contactPhone,
      value: t.phone,
      link: "tel:+966554467464",
      gradient: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500", // Explicit color for Phone
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Mail,
      label: t.contactEmail,
      value: t.email,
      link: "mailto:info@shadenhouseportacabin.com",
      gradient: "from-green-500 to-teal-500",
      iconColor: "text-green-500", // Explicit color for Mail
      bgGradient: "from-green-500/10 to-teal-500/10"
    },
    {
      icon: MapPin,
      label: t.contactAddress,
      value: t.address,
      link: "https://maps.app.goo.gl/tLXMWyfjmn6QCaWK8",
      gradient: "from-purple-500 to-pink-500",
      iconColor: "text-purple-500", // Explicit color for MapPin
      bgGradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  // Social Media Info (Now using Lucide Icons with appropriate styles)
  const socialInfo = [
    {
      icon: Linkedin, // MODIFIED: Using Lucide Icon
      label: "LinkedIn",
      value: "Connect with us",
      link: "https://www.linkedin.com/in/shaden-portacabin/",
      gradient: "from-blue-600 to-blue-400",
      iconColor: "text-blue-600", // Explicit color for LinkedIn
      bgGradient: "from-blue-600/10 to-blue-400/10"
    },
    {
      icon: Instagram, // MODIFIED: Using Lucide Icon
      label: "Instagram",
      value: "Follow us",
      link: "https://www.instagram.com/shadenhouse31/",
      gradient: "from-pink-600 to-orange-500",
      iconColor: "text-pink-500", // Explicit color for Instagram
      bgGradient: "from-pink-600/10 to-orange-500/10"
    }
  ];
  
  // Combine all info for unified rendering logic, using the array index offset for socialInfo
  const allInfo = [...contactInfo, ...socialInfo];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
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
            Get in touch with us for any inquiries or project discussions
          </p>
        </div>

        {/* Unified Cards Rendering */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          
          {/* Render Contact Info Cards */}
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
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <a
                  href={info.link}
                  target={info.icon === MapPin ? "_blank" : undefined}
                  rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="relative block bg-card p-8 rounded-2xl border border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="flex flex-col items-center text-center relative z-10">
                    {/* Icon Container with Lucide Icon */}
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${info.gradient} p-0.5 mb-6 transform ${
                      hoveredIndex === index ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
                    } transition-all duration-500`}>
                      <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                        {/* Lucide Icon: All Phone, Mail, MapPin icons use a standard size and the info's explicit color */}
                        <CurrentIcon 
                          size={40} 
                          className={`${info.iconColor}`} 
                          strokeWidth={2} // Ensures the outline look is maintained
                        />
                      </div>
                    </div>

                    {/* Label */}
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
                      {info.label}
                    </h3>

                    {/* Value */}
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>

                  {/* Bottom Shine Effect */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {socialInfo.map((info, index) => {
            const currentIndex = contactInfo.length + index;
            const CurrentIcon = info.icon;
            
            return (
              <div
                key={currentIndex}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 animate-blink-in' : 'opacity-0'
                }`}
                // Adjusted delay to start after the first three cards
                style={{ animationDelay: `${currentIndex * 150}ms`, transitionDelay: '0ms' }}
                onMouseEnter={() => setHoveredIndex(currentIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block bg-card p-8 rounded-2xl border border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="flex flex-col items-center text-center relative z-10">
                    {/* Icon Container - Square Box with Lucide Icon */}
                    <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${info.gradient} p-0.5 mb-6 transform ${
                      hoveredIndex === currentIndex ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
                    } transition-all duration-500`}>
                      <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                        {/* Lucide Icon: Consistent size and stroke for the "app" look */}
                        <CurrentIcon 
                            size={40} 
                            className={`${info.iconColor}`} 
                            strokeWidth={2} 
                        />
                      </div>
                    </div>

                    {/* Label */}
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
                      {info.label}
                    </h3>

                    {/* Value */}
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>

                  {/* Bottom Shine Effect */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </a>
              </div>
            );
          })}
        </div>
        
        {/* Google Maps Embed */}
        <div className={`rounded-3xl overflow-hidden border-2 border-border shadow-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Gradient Border Effect */}
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