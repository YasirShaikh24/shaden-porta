import { create } from 'zustand';
import { translations } from '@/i18n/translations';

type Language = 'en' | 'ar';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

export const useLanguage = create<LanguageState>((set, get) => ({
  language: 'en',
  t: translations.en,
  setLanguage: (lang: Language) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    set({ language: lang, t: translations[lang] });
  },
}));
