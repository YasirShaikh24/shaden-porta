import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Send, User, Mail, MessageSquare, FileText } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const ContactForm = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  // Company WhatsApp Number (from translations/contact info)
  const whatsappNumber = "966554467464";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message with enhanced formatting
    const message = `
*--- NEW MESSAGE FROM SHADEN HOUSE WEBSITE ---*

*Website:* Shaden House Porta Cabin (Portacabin KSA)
*Source:* Contact Form Submission
*------------------------------------------*

*1. CONTACT DETAILS*
👤 *Full Name:* ${formData.fullName}
📧 *Email Address:* ${formData.email}
📌 *Subject:* ${formData.subject}

*2. MESSAGE*
💬 ${formData.message}

*------------------------------------------*
_Thank you for reaching out. We look forward to connecting with you._
    `.trim();

    // Encode message for URL (Ensures 100% pre-filling reliability on supported devices)
    const encodedMessage = encodeURIComponent(message);
    
    // --- UPDATED LINK: Using the recommended wa.me short link format ---
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section 
      id="contact-form" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {language === 'ar' ? 'أرسل رسالة' : 'SEND A MESSAGE'}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'في بورتاكابين KSA، نحن ملتزمون بتقديم حلول الكبائن المتنقلة عالية الجودة المصممة خصيصًا لاحتياجاتك. سواء كنت بحاجة إلى مكتب مؤقت أو سكن أو أي هيكل محمول آخر، فريقنا جاهز للمساعدة.'
              : 'At Portacabin KSA, we are dedicated to providing high-quality portable cabin solutions tailored to your needs. Whether you require a temporary office, accommodation, or any other portable structure, our team is ready to assist you.'
            }
          </p>
        </div>

        {/* Form Card */}
        <div 
          className={`relative group transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative bg-card p-8 md:p-12 rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="relative group/input">
                  <label className={`block text-sm font-semibold text-foreground mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                  </label>
                  <div className="relative">
                    <User className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground group-hover/input:text-primary transition-colors ${isRTL ? 'right-4' : 'left-4'}`} size={20} />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className={`w-full bg-background border-2 border-border rounded-xl py-4 font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none ${isRTL ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                      placeholder={language === 'ar' ? 'مثال: أحمد محمد' : 'Example: John Smith'}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative group/input">
                  <label className={`block text-sm font-semibold text-foreground mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email ID'}
                  </label>
                  <div className="relative">
                    <Mail className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground group-hover/input:text-primary transition-colors ${isRTL ? 'right-4' : 'left-4'}`} size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full bg-background border-2 border-border rounded-xl py-4 font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none ${isRTL ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                      placeholder={language === 'ar' ? 'مثال: ahmad@example.com' : 'Example: john@example.com'}
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="relative group/input">
                <label className={`block text-sm font-semibold text-foreground mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {language === 'ar' ? 'الموضوع' : 'Subject'}
                </label>
                <div className="relative">
                  <FileText className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground group-hover/input:text-primary transition-colors ${isRTL ? 'right-4' : 'left-4'}`} size={20} />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-background border-2 border-border rounded-xl py-4 font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none ${isRTL ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                    placeholder={language === 'ar' ? 'مثال: استفسار عن البورتاكابينات' : 'Example: Inquiry about Porta Cabins'}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative group/input">
                <label className={`block text-sm font-semibold text-foreground mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {language === 'ar' ? 'الرسالة' : 'Message'}
                </label>
                <div className="relative">
                  <MessageSquare className={`absolute top-6 text-muted-foreground group-hover/input:text-primary transition-colors ${isRTL ? 'right-4' : 'left-4'}`} size={20} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full bg-background border-2 border-border rounded-xl py-4 font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none ${isRTL ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                    placeholder={language === 'ar' ? 'مثال: مرحباً، أنا مهتم بمعرفة المزيد عن بورتاكابين للمكاتب...' : 'Example: Hello, I am interested in learning more about porta cabins for offices...'}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="group w-full md:w-auto px-12 py-6 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
              >
                <span className="flex items-center gap-3">
                  <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                  {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;