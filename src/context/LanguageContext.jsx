import React, { createContext, useContext, useState } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Get active language from localStorage, defaulting to 'ID' (only ID and EN supported)
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem('himaif_lang');
    return (saved === 'ID' || saved === 'EN') ? saved : 'ID';
  });

  const setLang = (newLang) => {
    const validLang = newLang === 'EN' ? 'EN' : 'ID';
    setLangState(validLang);
    localStorage.setItem('himaif_lang', validLang);
  };

  // Helper function to resolve nested keys like t('hero.desc')
  const t = (keyStr) => {
    if (!keyStr) return '';
    const keys = keyStr.split('.');
    let currentTranslation = translations[lang] || translations['ID'];

    for (const key of keys) {
      if (currentTranslation && currentTranslation[key] !== undefined) {
        currentTranslation = currentTranslation[key];
      } else {
        // Fallback to Indonesian if key is missing in active language
        let fallback = translations['ID'];
        for (const fKey of keys) {
          fallback = fallback?.[fKey];
        }
        return fallback !== undefined ? fallback : keyStr;
      }
    }
    return currentTranslation;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
