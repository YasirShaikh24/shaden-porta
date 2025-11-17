import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, User, Mail, MessageSquare, Phone, CheckCircle } from "lucide-react"; // Added Phone icon

// This component is configured to use the mailto: protocol.

const Contact = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Form state now includes userMobile for the new field
  const [formData, setFormData] = useState({
    name: '',
    userEmail: '',
    userMobile: '', // NEW: Mobile number field
    message: ''
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const isRTL = language === 'ar';
  const recipientEmail = t.email; // The company's email address

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateEmail = (email: string) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = language === 'ar' ? 'الاسم مطلوب' : 'Name is required';
    }
    
    if (!formData.userEmail.trim()) {
      newErrors.userEmail = language === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!validateEmail(formData.userEmail.trim())) {
      newErrors.userEmail = language === 'ar' ? 'صيغة بريد إلكتروني غير صحيحة' : 'Invalid email format';
    }
    
    // NOTE: No validation for userMobile as requested
    
    if (!formData.message.trim()) {
      newErrors.message = language === 'ar' ? 'الرسالة مطلوبة' : 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    const nameValue = formData.name.trim();
    const emailValue = formData.userEmail.trim();
    const mobileValue = formData.userMobile.trim(); // Get mobile value
    const messageValue = formData.message.trim();

    // 1. Construct the Subject Line
    const subject = language === 'ar' 
        ? `استفسار جديد من الموقع: ${nameValue}`
        : `New Inquiry from Website: ${nameValue}`;
    
    // 2. Construct the Email Body with all contact details
    const body = language === 'ar'
        ? `مرحباً،\n\nأود الاستفسار عن كبائن بورتا. تفاصيل الاتصال أدناه:\nالاسم: ${nameValue}\nالبريد الإلكتروني: ${emailValue}\nرقم الجوال: ${mobileValue}\n\nنص الرسالة:\n${messageValue}`
        : `Hello,\n\nI am writing to inquire about your porta cabins. My contact details are below:\nName: ${nameValue}\nEmail: ${emailValue}\nMobile Number: ${mobileValue}\n\nMessage Body:\n${messageValue}`;

    // 3. Encode both the subject and the body
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // 4. Create the Mailto URL
    const mailtoURL = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open the user's default email client
    window.location.href = mailtoURL;
    
    // Show success and reset form immediately after opening the mailto link
    setShowSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
        setFormData({ name: '', userEmail: '', userMobile: '', message: '' }); // Reset mobile field
        setShowSuccess(false);
    }, 2000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
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
          {/* NEW: Introductory text above the form */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.contactIntroText}
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 max-w-2xl mx-auto p-4 bg-primary/30 border border-primary/50 rounded-lg flex items-center gap-3 animate-fade-in">
            <CheckCircle className="text-primary flex-shrink-0" size={24} />
            <div>
              <p className="text-foreground font-semibold">
                {language === 'ar' ? 'نجح!' : 'Success!'}
              </p>
              <p className="text-primary-foreground text-sm">
                {language === 'ar' ? 'فتح برنامج البريد الإلكتروني مع رسالتك...' : 'Opening email client with your message...'}
              </p>
            </div>
          </div>
        )}
        
        {/* Contact Form - Centered */}
        <div className={`max-w-2xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-card/50 backdrop-blur-xl p-8 rounded-3xl shadow-glow border-2 border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                    {language === 'ar' ? 'إرسال رسالة بريد إلكتروني' : 'Send us an Email Message'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="flex items-center gap-2 text-foreground font-semibold mb-2">
                            <User size={18} className="text-primary" />
                            {language === 'ar' ? 'اسمك (مطلوب)' : 'Your Name (Required)'}
                        </label>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                            className={errors.name ? 'border-red-500' : 'border-border'}
                            required
                        />
                        {errors.name && (
                            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>
                    
                    {/* Email Field */}
                    <div>
                        <label htmlFor="userEmail" className="flex items-center gap-2 text-foreground font-semibold mb-2">
                            <Mail size={18} className="text-primary" />
                            {language === 'ar' ? 'بريدك الإلكتروني (مطلوب)' : 'Your Email (Required)'}
                        </label>
                        <Input
                            id="userEmail"
                            type="email"
                            name="userEmail"
                            value={formData.userEmail}
                            onChange={handleChange}
                            placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                            className={errors.userEmail ? 'border-red-500' : 'border-border'}
                            required
                        />
                        {errors.userEmail && (
                            <p className="text-red-400 text-sm mt-1">{errors.userEmail}</p>
                        )}
                    </div>

                    {/* NEW: Mobile Number Field */}
                    <div>
                        <label htmlFor="userMobile" className="flex items-center gap-2 text-foreground font-semibold mb-2">
                            <Phone size={18} className="text-primary" />
                            {t.mobileNumber} {/* Using translation key */}
                        </label>
                        <Input
                            id="userMobile"
                            type="tel" // Use type="tel" for mobile numbers
                            name="userMobile"
                            value={formData.userMobile}
                            onChange={handleChange}
                            placeholder={language === 'ar' ? 'أدخل رقم جوالك' : 'Enter your mobile number (e.g., +966501234567)'}
                            className="border-border" // No error styling as no validation
                        />
                        {/* No error message for mobile as per request */}
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="flex items-center gap-2 text-foreground font-semibold mb-2">
                            <MessageSquare size={18} className="text-primary" />
                            {language === 'ar' ? 'رسالتك (مطلوب)' : 'Your Message (Required)'}
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={language === 'ar' ? 'أخبرنا كيف يمكننا مساعدتك...' : 'Tell us how we can help you...'}
                            rows={5}
                            className={`resize-none ${errors.message ? 'border-red-500' : 'border-border'}`}
                            required
                        />
                        {errors.message && (
                            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full relative group bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
                        disabled={isSubmitting}
                    >
                        <span className="flex items-center justify-center gap-2">
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    {language === 'ar' ? 'إرسال عبر البريد الإلكتروني' : 'Send via Email'}
                                </>
                            )}
                        </span>
                    </Button>

                    {/* Info Note */}
                    <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                        <p className="text-sm text-primary text-center">
                            {language === 'ar' 
                                ? '📧 سيتم فتح برنامج البريد الإلكتروني الخاص بك لإرسال الرسالة'
                                : '📧 Your default email client will open to send the message'
                            }
                        </p>
                    </div>
                </form>
            </div>
        </div>

        {/* Google Maps Embed - Adjusted Square Size */}
        <div className={`rounded-3xl overflow-hidden border-2 border-border shadow-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-50 blur-sm"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1234567890123!2d46.7777777777778!3d24.7777777777778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ2JzQwLjAiTiA0NsKwNDYnNDAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890123!5m2!1sen!2ssa"
                  width="100%"
                  height="500" // ADJUSTED: Reduced height to 500px for a more square/smaller look
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