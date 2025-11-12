import { useLanguage } from "@/hooks/useLanguage";
import { Shield, Zap, Wrench, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
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

  const features = [
    {
      icon: Shield,
      title: t.aboutFeature1,
      description: "High-grade materials ensuring longevity and safety"
    },
    {
      icon: Zap,
      title: t.aboutFeature2,
      description: "Efficient project execution and timely completion"
    },
    {
      icon: Wrench,
      title: t.aboutFeature3,
      description: "Tailored designs to meet your specific requirements"
    },
    {
      icon: Award,
      title: t.aboutFeature4,
      description: "Built to withstand harsh environmental conditions"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.aboutTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t.aboutDescription}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
