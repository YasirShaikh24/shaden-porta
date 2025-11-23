import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useRef, useState } from "react";
import { Award, Trophy, Star, BadgeCheck } from "lucide-react";

const Contact = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, cabins: 0, quality: 0, satisfaction: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

  // Counter Animation Effect - Only when scrolled into view
  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate counters
          const duration = 2000; // 2 seconds
          const frameRate = 60;
          const totalFrames = duration / (1000 / frameRate);
          
          let frame = 0;
          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            
            setCounters({
              years: Math.floor(25 * easeOutQuart),
              cabins: Math.floor(5000 * easeOutQuart),
              quality: Math.floor(1 * easeOutQuart),
              satisfaction: Math.floor(100 * easeOutQuart)
            });
            
            if (frame >= totalFrames) {
              clearInterval(timer);
              setCounters({ years: 25, cabins: 5000, quality: 1, satisfaction: 100 });
            }
          }, 1000 / frameRate);
          
          return () => clearInterval(timer);
        }
      },
      { 
        threshold: 0.5, // Trigger when 50% of section is visible
        rootMargin: '0px 0px -100px 0px' // Add bottom margin to delay trigger
      }
    );

    if (statsRef.current) statsObserver.observe(statsRef.current);
    return () => {
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
    };
  }, [hasAnimated]);

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
        
        {/* ⭐ AWARDS SECTION with Counter Animation */}
        <div
          ref={statsRef}
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
              <h3 className="text-3xl font-bold mb-1">{counters.years}+</h3>
              <p className="text-muted-foreground">
                {isRTL ? "سنوات من الخبرة" : "Years of Excellence"}
              </p>
            </div>

            {/* 5000+ Cabins */}
            <div className="p-6 bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300">
              <Trophy size={42} className="text-accent mb-3" />
              <h3 className="text-3xl font-bold mb-1">{counters.cabins.toLocaleString()}+</h3>
              <p className="text-muted-foreground">
                {isRTL ? "كبائن تم تسليمها" : "Porta Cabins Delivered"}
              </p>
            </div>

            {/* Top Quality */}
            <div className="p-6 bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300">
              <Star size={42} className="text-yellow-400 mb-3" />
              <h3 className="text-3xl font-bold mb-1">#{counters.quality}</h3>
              <p className="text-muted-foreground">
                {isRTL ? "جودة معتمدة" : "Top Quality Rated"}
              </p>
            </div>

            {/* Customer Satisfaction */}
            <div className="p-6 bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300">
              <BadgeCheck size={42} className="text-green-500 mb-3" />
              <h3 className="text-3xl font-bold mb-1">{counters.satisfaction}%</h3>
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