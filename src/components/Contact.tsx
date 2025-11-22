import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useRef, useState } from "react";
import { Award, Trophy, Star, BadgeCheck } from "lucide-react";

const Contact = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const isRTL = language === "ar";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* ⭐ AWARDS SECTION */}
        <div
          className={`mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-20 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {isRTL ? "جوائزنا وإنجازاتنا" : "Our Awards & Achievements"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 25+ Years */}
            <div className="p-6 bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300">
              <Award size={42} className="text-primary mb-3" />
              <h3 className="text-3xl font-bold mb-1">25+</h3>
              <p className="text-muted-foreground">
                {isRTL ? "سنوات من الخبرة" : "Years of Excellence"}
              </p>
            </div>

            {/* 5000+ Cabins */}
            <div className="p-6 bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300">
              <Trophy size={42} className="text-accent mb-3" />
              <h3 className="text-3xl font-bold mb-1">5000+</h3>
              <p className="text-muted-foreground">
                {isRTL ? "كبائن تم تسليمها" : "Porta Cabins Delivered"}
              </p>
            </div>

            {/* Top Quality */}
            <div className="p-6 bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300">
              <Star size={42} className="text-yellow-400 mb-3" />
              <h3 className="text-3xl font-bold mb-1">#1</h3>
              <p className="text-muted-foreground">
                {isRTL ? "جودة معتمدة" : "Top Quality Rated"}
              </p>
            </div>

            {/* Customer Satisfaction */}
            <div className="p-6 bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300">
              <BadgeCheck size={42} className="text-green-500 mb-3" />
              <h3 className="text-3xl font-bold mb-1">100%</h3>
              <p className="text-muted-foreground">
                {isRTL ? "رضا العملاء" : "Customer Satisfaction"}
              </p>
            </div>

          </div>
        </div>

        {/* CONTACT US HEADING */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.contactTitle}
          </h2>
        </div>

        {/* 📍 MAP SECTION */}
        <div
          className={`rounded-3xl overflow-hidden border-2 border-border shadow-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1234567890123!2d46.7777777777778!3d24.7777777777778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ2JzQwLjAiTiA0NsKwNDYnNDAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890123!5m2!1sen!2ssa"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shaden House Porta Cabin Location"
            className="rounded-3xl"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;
