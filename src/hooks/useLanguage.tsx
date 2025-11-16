import { create } from 'zustand';
import { translations } from '@/i18n/translations';

type Language = 'en' | 'ar';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

// Get initial language from localStorage or default to 'en'
const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language');
    return (stored === 'ar' || stored === 'en') ? stored : 'en';
  }
  return 'en';
};

// Initialize language settings on page load
const initializeLanguage = (lang: Language) => {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
};

export const useLanguage = create<LanguageState>((set, get) => {
  const initialLang = getInitialLanguage();
  initializeLanguage(initialLang);
  
  return {
    language: initialLang,
    t: translations[initialLang],
    setLanguage: (lang: Language) => {
      // Save to localStorage for persistence
      localStorage.setItem('language', lang);
      
      // Update document attributes
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      
      // Update state
      set({ language: lang, t: translations[lang] });
    },
  };
});