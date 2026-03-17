import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../i18n/translations';

type Lang = 'en' | 'ar';

interface LangCtx {
  lang:   Lang;
  isRTL:  boolean;
  toggle: () => void;
  t:      typeof translations['en'];
}

const LanguageContext = createContext<LangCtx | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('en');
  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir  = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  return (
    <LanguageContext.Provider value={{ lang, isRTL, toggle: () => setLang(l => l === 'en' ? 'ar' : 'en'), t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = (): LangCtx => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
};
