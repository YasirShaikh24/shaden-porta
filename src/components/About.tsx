import { useLanguage } from "@/hooks/useLanguage";
import { Shield, Zap, Wrench, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [text1Visible, setText1Visible] = useState(false);
  const [text2Visible, setText2Visible] = useState(false);
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [isTyping1Complete, setIsTyping1Complete] = useState(false);
  const [isTyping2Complete, setIsTyping2Complete] = useState(false);
  const [cardVisibility, setCardVisibility] = useState<boolean[]>([]);
  const [statsVisibility, setStatsVisibility] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isRTL = language === 'ar';

  // English and Arabic texts
  const texts = {
    en: {
      text1: "We specialize in delivering high-quality porta cabin solutions with precision engineering and modern construction techniques. Our team ensures every project meets international standards. From design to delivery, we focus on creating durable, efficient, and aesthetically pleasing structures that exceed client expectations. With years of experience in the industry, we have successfully completed over 500 projects across various sectors. Our commitment to excellence drives us to continuously innovate and improve our construction methods. We work closely with our clients to understand their unique requirements and deliver customized solutions that perfectly match their needs.",
      text2: "Innovation drives our approach to porta cabin construction. We utilize cutting-edge technology and sustainable materials to create structures that stand the test of time. Our commitment to quality ensures that every project is completed with meticulous attention to detail and adherence to safety standards. Each structure undergoes rigorous quality checks at every stage of construction to guarantee superior performance. We pride ourselves on using eco-friendly materials and energy-efficient designs that reduce environmental impact. Our skilled workforce combines traditional craftsmanship with modern technology to deliver exceptional results that consistently exceed industry benchmarks.",
      title1: "Our Construction Excellence",
      title2: "Quality & Innovation"
    },
    ar: {
      text1: "نحن متخصصون في تقديم حلول الكبائن المتنقلة عالية الجودة مع الهندسة الدقيقة وتقنيات البناء الحديثة. يضمن فريقنا أن كل مشروع يلبي المعايير الدولية. من التصميم إلى التسليم، نركز على إنشاء هياكل متينة وفعالة وجذابة من الناحية الجمالية تتجاوز توقعات العملاء. مع سنوات من الخبرة في الصناعة، نجحنا في إكمال أكثر من 500 مشروع في مختلف القطاعات. التزامنا بالتميز يدفعنا إلى الابتكار المستمر وتحسين أساليب البناء لدينا. نعمل بشكل وثيق مع عملائنا لفهم متطلباتهم الفريدة وتقديم حلول مخصصة تتناسب تماماً مع احتياجاتهم.",
      text2: "الابتكار يدفع نهجنا في بناء الكبائن المتنقلة. نستخدم أحدث التقنيات والمواد المستدامة لإنشاء هياكل تصمد أمام اختبار الزمن. التزامنا بالجودة يضمن إكمال كل مشروع باهتمام دقيق بالتفاصيل والالتزام بمعايير السلامة. يخضع كل هيكل لفحوصات جودة صارمة في كل مرحلة من مراحل البناء لضمان الأداء المتفوق. نحن نفخر باستخدام مواد صديقة للبيئة وتصاميم موفرة للطاقة تقلل من التأثير البيئي. تجمع قوتنا العاملة الماهرة بين الحرفية التقليدية والتكنولوجيا الحديثة لتقديم نتائج استثنائية تتجاوز باستمرار معايير الصناعة.",
      title1: "تميزنا في البناء",
      title2: "الجودة والابتكار"
    }
  };

  const fullText1 = texts[language].text1;
  const fullText2 = texts[language].text2;

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

  // Observer for first text section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setText1Visible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (text1Ref.current) {
      observer.observe(text1Ref.current);
    }

    return () => {
      if (text1Ref.current) {
        observer.unobserve(text1Ref.current);
      }
    };
  }, []);

  // Observer for second text section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setText2Visible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (text2Ref.current) {
      observer.observe(text2Ref.current);
    }

    return () => {
      if (text2Ref.current) {
        observer.unobserve(text2Ref.current);
      }
    };
  }, []);

  // Reset typing when language changes and trigger immediately if section is in view
  useEffect(() => {
    setTypedText1("");
    setTypedText2("");
    setIsTyping1Complete(false);
    setIsTyping2Complete(false);
    
    // Check if sections are currently in viewport
    const checkVisibility = () => {
      if (text1Ref.current) {
        const rect1 = text1Ref.current.getBoundingClientRect();
        const isVisible1 = rect1.top < window.innerHeight && rect1.bottom > 0;
        setText1Visible(isVisible1);
      }
      
      if (text2Ref.current) {
        const rect2 = text2Ref.current.getBoundingClientRect();
        const isVisible2 = rect2.top < window.innerHeight && rect2.bottom > 0;
        setText2Visible(isVisible2);
      }
    };
    
    // Check immediately after language change
    setTimeout(checkVisibility, 50);
  }, [language]);

  // Fast typing effect for first text - 10ms per character
  useEffect(() => {
    if (text1Visible && !isTyping1Complete) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText1.length) {
          setTypedText1(fullText1.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping1Complete(true);
          clearInterval(typingInterval);
        }
      }, 10);

      return () => clearInterval(typingInterval);
    }
  }, [text1Visible, isTyping1Complete, fullText1]);

  // Fast typing effect for second text - 10ms per character
  useEffect(() => {
    if (text2Visible && !isTyping2Complete) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText2.length) {
          setTypedText2(fullText2.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping2Complete(true);
          clearInterval(typingInterval);
        }
      }, 10);

      return () => clearInterval(typingInterval);
    }
  }, [text2Visible, isTyping2Complete, fullText2]);

  // Feature cards intersection observer
  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardVisibility(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.2 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (cardRefs.current[index]) {
          observer.unobserve(cardRefs.current[index]!);
        }
      });
    };
  }, []);

  // Stats intersection observer
  useEffect(() => {
    const observers = statsRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStatsVisibility(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.3 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (statsRefs.current[index]) {
          observer.unobserve(statsRefs.current[index]!);
        }
      });
    };
  }, []);

  const features = [
    {
      icon: Shield,
      emoji: "🛡️",
      title: t.aboutFeature1,
      description: "High-grade materials ensuring longevity and safety",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      emoji: "⚡",
      title: t.aboutFeature2,
      description: "Efficient project execution and timely completion",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wrench,
      emoji: "🔧",
      title: t.aboutFeature3,
      description: "Tailored designs to meet your specific requirements",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Award,
      emoji: "🏆",
      title: t.aboutFeature4,
      description: "Recognized for superior build quality and long-term performance",
      gradient: "from-orange-500 to-red-500",
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section 1: Image LEFT, Text RIGHT for LTR / Image RIGHT, Text LEFT for RTL */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20`}>
          {/* Video - Order 1 on Desktop for LTR, Order 2 for RTL */}
          <div 
            className={`relative group transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRTL ? 'translate-x-20' : '-translate-x-20'}`
            } ${isRTL ? 'lg:order-2' : 'lg:order-1'} order-2`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-500">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/about1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Text Section 1 - Order 2 on Desktop for LTR, Order 1 for RTL */}
          <div 
            ref={text1Ref}
            className={`space-y-6 transition-all duration-1000 ${
              text1Visible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRTL ? '-translate-x-20' : 'translate-x-20'}`
            } ${isRTL ? 'lg:order-1' : 'lg:order-2'} order-1`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${isRTL ? 'text-right' : 'text-left'}`}>
              {texts[language].title1}
            </h3>
            <div className={`text-lg text-muted-foreground leading-relaxed min-h-[200px] ${isRTL ? 'text-right' : 'text-left'}`}>
              {typedText1}
              {!isTyping1Complete && <span className="animate-pulse text-primary">|</span>}
            </div>
          </div>
        </div>

        {/* Section 2: Text LEFT, Image RIGHT for LTR / Text RIGHT, Image LEFT for RTL */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20`}>
          {/* Text Section 2 - Order 1 on Desktop for LTR, Order 2 for RTL */}
          <div 
            ref={text2Ref}
            className={`space-y-6 transition-all duration-1000 ${
              text2Visible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRTL ? 'translate-x-20' : '-translate-x-20'}`
            } ${isRTL ? 'lg:order-2' : 'lg:order-1'} order-1`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent ${isRTL ? 'text-right' : 'text-left'}`}>
              {texts[language].title2}
            </h3>
            <div className={`text-lg text-muted-foreground leading-relaxed min-h-[200px] ${isRTL ? 'text-right' : 'text-left'}`}>
              {typedText2}
              {!isTyping2Complete && <span className="animate-pulse text-accent">|</span>}
            </div>
          </div>

          {/* Video - Order 2 on Desktop for LTR, Order 1 for RTL */}
          <div 
            className={`relative group transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRTL ? '-translate-x-20' : 'translate-x-20'}`
            } ${isRTL ? 'lg:order-1' : 'lg:order-2'} order-2`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-border hover:border-accent/50 transition-all duration-500">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/about2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative h-full transition-all duration-700 ${
                cardVisibility[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-card p-8 rounded-2xl border border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden h-full flex flex-col">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`flex flex-col items-center text-center relative z-10 flex-1`}>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                      <span className="text-4xl">{feature.emoji}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 text-center w-full">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed text-center w-full">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              ref={(el) => (statsRefs.current[index] = el)}
              className={`text-center group cursor-pointer transition-all duration-700 ${
                statsVisibility[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;