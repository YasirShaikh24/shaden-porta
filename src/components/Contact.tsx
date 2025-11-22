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

  // FINAL BUSINESS EMAIL
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

    if (!formData.name.trim()) newErrors.name = isRTL ? "الاسم مطلوب" : "Name is required";

    if (!formData.userEmail.trim()) {
      newErrors.userEmail = isRTL ? "البريد الإلكتروني مطلوب" : "Email required";
    } else if (!validateEmail(formData.userEmail.trim())) {
      newErrors.userEmail = isRTL ? "بريد غير صحيح" : "Invalid email";
    }

    if (!formData.message.trim()) newErrors.message = isRTL ? "الرسالة مطلوبة" : "Message required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Detect Mobile
  const isMobile = () => {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

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
        ? `الاسم: ${formData.name}\nالبريد: ${formData.userEmail}\nالجوال: ${formData.userMobile}\n\n${formData.message}`
        : `Name: ${formData.name}\nEmail: ${formData.userEmail}\nMobile: ${formData.userMobile}\n\n${formData.message}`
    );

    let finalURL = "";

    if (isMobile()) {
      // ⭐ MOBILE → OPEN GMAIL APP COMPOSE
      finalURL = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    } else {
      // ⭐ LAPTOP → OPEN GMAIL WEB DIRECT COMPOSE
      finalURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
    }

    window.location.href = finalURL;

    // Success message
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
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.contactTitle}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.contactIntroText}
          </p>
        </div>

        {showSuccess && (
          <div className="mb-6 max-w-2xl mx-auto p-4 bg-primary/30 border border-primary/50 rounded-lg flex items-center gap-3 animate-fade-in">
            <CheckCircle className="text-primary" size={24} />
            <div>
              <p className="text-foreground font-semibold">
                {isRTL ? "تم بنجاح" : "Success!"}
              </p>
              <p className="text-primary-foreground text-sm">
                {isRTL ? "جارٍ فتح البريد..." : "Opening email compose…"}
              </p>
            </div>
          </div>
        )}

        {/* FINAL FORM */}
        <div className={`max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <div className="bg-card/50 backdrop-blur-xl p-8 rounded-3xl shadow-glow border-2 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="flex items-center gap-2 font-semibold text-foreground">
                  <User size={18} className="text-primary" />
                  {isRTL ? "اسمك" : "Your Name"}
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-red-500" : ""}
                  placeholder={isRTL ? "الاسم الكامل" : "Full Name"}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 font-semibold text-foreground">
                  <Mail size={18} className="text-primary" />
                  {isRTL ? "البريد الإلكتروني" : "Email"}
                </label>
                <Input
                  name="userEmail"
                  type="email"
                  value={formData.userEmail}
                  onChange={handleChange}
                  className={errors.userEmail ? "border-red-500" : ""}
                  placeholder={isRTL ? "example@mail.com" : "example@mail.com"}
                />
                {errors.userEmail && <p className="text-red-500 text-sm">{errors.userEmail}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 font-semibold text-foreground">
                  <Phone size={18} className="text-primary" />
                  {t.mobileNumber}
                </label>
                <Input
                  name="userMobile"
                  value={formData.userMobile}
                  onChange={handleChange}
                  placeholder={isRTL ? "رقم الجوال" : "Mobile Number (optional)"}
                />
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center gap-2 font-semibold text-foreground">
                  <MessageSquare size={18} className="text-primary" />
                  {isRTL ? "رسالتك" : "Your Message"}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "border-red-500" : ""}
                  placeholder={isRTL ? "اكتب رسالتك..." : "Type your message..."}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:opacity-90 transition"
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
