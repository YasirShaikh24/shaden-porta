import { useLanguage } from "@/hooks/useLanguage";
import { MapPin, Phone, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
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

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contactAddress,
      value: t.address,
      link: "https://maps.app.goo.gl/tLXMWyfjmn6QCaWK8"
    },
    {
      icon: Phone,
      label: t.contactPhone,
      value: t.phone,
      link: "tel:+966554467464"
    },
    {
      icon: Mail,
      label: t.contactEmail,
      value: t.email,
      link: "mailto:info@shadenhouseportacabin.com"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.contactTitle}
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.icon === MapPin ? "_blank" : undefined}
              rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {info.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Google Maps Embed */}
        <div className={`mt-16 rounded-lg overflow-hidden border border-border shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1234567890123!2d46.7777777777778!3d24.7777777777778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ2JzQwLjAiTiA0NsKwNDYnNDAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890123!5m2!1sen!2ssa"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shaden House Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
