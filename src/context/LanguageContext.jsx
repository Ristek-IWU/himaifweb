import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../locales/translations';
import { trackLanguageUsage } from '../utils/analyticsTracker';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Get active language from localStorage, defaulting to 'ID'
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem('himaif_lang') || 'ID';
    trackLanguageUsage(saved);
    return saved;
  });

  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem('himaif_lang', newLang);
    trackLanguageUsage(newLang);
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
