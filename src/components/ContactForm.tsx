import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Phone, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage'; // Import hook to get t.email and t.mobileNumber

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
}

const ContactForm = () => {
  // Destructure both t and language correctly from the hook
  const { t, language } = useLanguage(); 
  const recipientEmail = t.email;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const isRTL = language === 'ar'; // Use the destructured 'language' variable

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    // Mobile number has no validation as requested
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    const nameValue = formData.name.trim();
    const emailValue = formData.email.trim();
    const mobileValue = formData.mobile.trim();
    // FIX APPLIED: Removed the extra '.message' to fix the TypeScript error (Line 73 in your file)
    const messageValue = formData.message.trim();

    // 1. Construct the Subject Line
    const subject = isRTL 
        ? `استفسار جديد من الموقع: ${nameValue}`
        : `New Inquiry from Website: ${nameValue}`;
    
    // 2. Construct the Email Body
    const body = isRTL
        ? `مرحباً،\n\nأود الاستفسار عن كبائن بورتا. تفاصيل الاتصال أدناه:\nالاسم: ${nameValue}\nالبريد الإلكتروني: ${emailValue}\nرقم الجوال: ${mobileValue}\n\nنص الرسالة:\n${messageValue}`
        : `Hello,\n\nI am writing to inquire about your porta cabins. My contact details are below:\nName: ${nameValue}\nEmail: ${emailValue}\nMobile Number: ${mobileValue}\n\nMessage Body:\n${messageValue}`;

    // 3. Encode and create the Mailto URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const mailtoURL = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`; 

    setShowSuccess(true);

    setTimeout(() => {
      window.open(mailtoURL, '_blank');
      setIsSubmitting(false);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: '',
        });
        setShowSuccess(false);
      }, 2000);
    }, 500);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 rounded-2xl">
      <div className="max-w-2xl mx-auto">
        {showSuccess && (
          <div className="mb-6 p-4 bg-blue-900/30 border border-blue-500/50 rounded-lg animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="text-blue-400 flex-shrink-0" size={24} />
              <p className="text-blue-300 font-semibold">{isRTL ? 'نجح!' : 'Success!'}</p>
            </div>
            <p className="text-blue-400 text-sm ml-9">
              {isRTL 
                ? 'فتح برنامج البريد الإلكتروني مع رسالتك...' 
                : 'Opening email client with your pre-filled message...'
              }
            </p>
            <p className="text-blue-300 text-xs mt-2 ml-9">
              {isRTL 
                ? '✅ ما عليك سوى النقر على زر الإرسال في البريد الإلكتروني!' 
                : '✅ Just click the SEND button in your email client!'
              }
            </p>
          </div>
        )}
        <form onSubmit={handleSubmit} dir={isRTL ? 'rtl' : 'ltr'}> {/* Set direction */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-700">
            <div className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="flex items-center gap-2 text-gray-200 font-semibold mb-2">
                  <User size={18} className="text-blue-400" />
                  {isRTL ? 'اسمك *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                  autoComplete="name"
                  className={`w-full px-4 py-3 bg-gray-900/50 text-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              {/* Email Field */}
              <div>
                <label className="flex items-center gap-2 text-gray-200 font-semibold mb-2">
                  <Mail size={18} className="text-blue-400" />
                  {isRTL ? 'عنوان البريد الإلكتروني *' : 'Email Address *'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  className={`w-full px-4 py-3 bg-gray-900/50 text-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              {/* Mobile Number Field */}
              <div>
                <label className="flex items-center gap-2 text-gray-200 font-semibold mb-2">
                  <Phone size={18} className="text-blue-400" />
                  {t.mobileNumber}
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder={isRTL ? 'أدخل رقم جوالك' : 'Enter your mobile number'}
                  className={`w-full px-4 py-3 bg-gray-900/50 text-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500 ${
                    errors.mobile ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {errors.mobile && (
                  <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>
              {/* Message Field */}
              <div>
                <label className="flex items-center gap-2 text-gray-200 font-semibold mb-2">
                  <MessageSquare size={18} className="text-blue-400" />
                  {isRTL ? 'رسالتك *' : 'Your Message *'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Type your message here...'}
                  rows={5}
                  className={`w-full px-4 py-3 bg-gray-900/50 text-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder-gray-500 ${
                    errors.message ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 px-6 rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {isRTL ? 'جاري الفتح...' : 'Opening Email Client...'}
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {isRTL ? 'إرسال عبر البريد الإلكتروني' : 'Send via Email'}
                  </>
                )}
              </button>
            </div>
            <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
              <p className="text-sm text-blue-300 text-center flex items-center justify-center gap-2 flex-wrap">
                <MessageSquare size={16} />
                {isRTL 
                  ? 'سيتم فتح برنامج البريد الإلكتروني الخاص بك مع الرسالة المعبأة مسبقًا.' 
                  : 'Your email client will open with the pre-filled message.'
                }
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-xl rounded-full border border-gray-700">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-gray-300 text-sm font-medium">{isRTL ? 'الرد عادةً في غضون 24 ساعة' : 'Typically replies within 24 hours'}</p>
            </div>
          </div>
        </form>
        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ContactForm;