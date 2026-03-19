import React, { createContext, useContext } from 'react';
import { translations } from '../i18n/translations';

interface LangCtx {
  t: typeof translations['en'];
}

const LanguageContext = createContext<LangCtx | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageContext.Provider value={{ t: translations.en }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = (): LangCtx => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
};