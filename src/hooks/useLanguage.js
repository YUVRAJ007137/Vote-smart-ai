import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useLanguage = () => {
  const [language, setLanguage] = useLocalStorage('votesmart_language', () => {
    // Check browser language
    const browserLang = navigator.language;
    return browserLang.startsWith('hi') ? 'hi' : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return { language, setLanguage };
};
