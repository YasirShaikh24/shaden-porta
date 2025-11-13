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
      description: "High-grade materials ensuring longevity and safety",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: t.aboutFeature2,
      description: "Efficient project execution and timely completion",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Wrench,
      title: t.aboutFeature3,
      description: "Tailored designs to meet your specific requirements",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Award,
      title: t.aboutFeature4,
      description: "Built to withstand harsh environmental conditions",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.aboutTitle}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t.aboutDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-card p-8 rounded-2xl border border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="flex flex-col items-center text-center relative z-10">
                  {/* Icon Container */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                      <feature.icon className={`text-transparent bg-gradient-to-br ${feature.gradient} bg-clip-text`} size={36} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Shine Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "15+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
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