import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";

const Contact = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    userEmail: "",
    userMobile: "",
    message: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const isRTL = language === "ar";

  // Your company email (FINAL)
  const recipientEmail = "yasirazimshaikh5440@gmail.com";

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

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) {
      newErrors.name = isRTL ? "الاسم مطلوب" : "Name is required";
    }

    if (!formData.userEmail.trim()) {
      newErrors.userEmail = isRTL ? "البريد الإلكتروني مطلوب" : "Email is required";
    } else if (!validateEmail(formData.userEmail.trim())) {
      newErrors.userEmail = isRTL ? "صيغة بريد إلكتروني غير صحيحة" : "Invalid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = isRTL ? "الرسالة مطلوبة" : "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ⭐ FINAL Gmail API — No permission popup
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateForm()) return;

    const subject = encodeURIComponent(
      isRTL
        ? `استفسار جديد من ${formData.name}`
        : `New Inquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      isRTL
        ? `الاسم: ${formData.name}\nالبريد الإلكتروني: ${formData.userEmail}\nرقم الجوال: ${formData.userMobile}\n\n${formData.message}`
        : `Name: ${formData.name}\nEmail: ${formData.userEmail}\nMobile: ${formData.userMobile}\n\n${formData.message}`
    );

    // ⭐ DIRECT GMAIL COMPOSE (No popup, no asking choose app)
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;

    window.open(gmailURL, "_blank");

    setShowSuccess(true);

    setTimeout(() => {
      setFormData({
        name: "",
        userEmail: "",
        userMobile: "",
        message: ""
      });

      setShowSuccess(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* BG DECORATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.contactTitle}
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.contactIntroText}
          </p>
        </div>

        {showSuccess && (
          <div className="mb-6 max-w-2xl mx-auto p-4 bg-primary/30 border border-primary/50 rounded-lg flex items-center gap-3 animate-fade-in">
            <CheckCircle className="text-primary" size={24} />
            <div>
              <p className="text-foreground font-semibold">
                {isRTL ? "نجح!" : "Success!"}
              </p>
              <p className="text-primary-foreground text-sm">
                {isRTL
                  ? "جارٍ فتح Gmail برسالتك…"
                  : "Opening Gmail with your message…"}
              </p>
            </div>
          </div>
        )}

        <div
          className={`max-w-2xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-card/50 backdrop-blur-xl p-8 rounded-3xl shadow-glow border-2 border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              {isRTL ? "أرسل لنا رسالة" : "Send us a Message"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div>
                <label className="flex items-center gap-2 text-foreground font-semibold mb-2">
                  <User size={18} className="text-primary" />
                  {isRTL ? "اسمك (مطلوب)" : "Your Name (Required)"}
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={isRTL ? "أدخل اسمك الكامل" : "Enter your full name"}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
              </div>

              {/* EMAIL */}
              <div>
                <label className="flex items-center gap-2 text-foreground font-semibold mb-2">
                  <Mail size={18} className="text-primary" />
                  {isRTL ? "بريدك الإلكتروني (مطلوب)" : "Your Email (Required)"}
                </label>
                <Input
                  name="userEmail"
                  type="email"
                  value={formData.userEmail}
                  onChange={handleChange}
                  placeholder={isRTL ? "أدخل بريدك" : "Enter your email"}
                  className={errors.userEmail ? "border-red-500" : ""}
                />
                {errors.userEmail && (
                  <p className="text-red-400 text-sm">{errors.userEmail}</p>
                )}
              </div>

              {/* MOBILE */}
              <div>
                <label className="flex items-center gap-2 text-foreground font-semibold mb-2">
                  <Phone size={18} className="text-primary" />
                  {t.mobileNumber}
                </label>
                <Input
                  name="userMobile"
                  type="tel"
                  value={formData.userMobile}
                  onChange={handleChange}
                  placeholder={
                    isRTL ? "أدخل رقم جوالك" : "Enter your mobile number (optional)"
                  }
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="flex items-center gap-2 text-foreground font-semibold mb-2">
                  <MessageSquare size={18} className="text-primary" />
                  {isRTL ? "رسالتك (مطلوب)" : "Your Message (Required)"}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    isRTL ? "اكتب رسالتك هنا…" : "Write your message here…"
                  }
                  className={`min-h-[140px] ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 rounded-xl hover:opacity-90 transition"
              >
                {isRTL ? "إرسال" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
