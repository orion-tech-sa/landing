import React, { createContext, useContext } from 'react';
import { t } from '../i18n/translations';

const LanguageContext = createContext({ t });

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <LanguageContext.Provider value={{ t }}>
    {children}
  </LanguageContext.Provider>
);

export const useLang = () => useContext(LanguageContext);
